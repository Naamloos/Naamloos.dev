# Use the official PHP image as the base image
FROM php:8-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    wget

RUN wget https://getcomposer.org/installer -O - -q | php -- --quiet
RUN mv composer.phar /usr/local/bin/composer

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Enable Apache rewrite module
RUN a2enmod rewrite

# Set the working directory in the container
WORKDIR /var/www/html

# Copy application code to the container
COPY . .

RUN composer update

# Install PHP dependencies
RUN composer install --no-scripts --no-autoloader

# Generate the autoload files
RUN composer dump-autoload --optimize

# Set the permissions for storage and bootstrap/cache directories
RUN chown -R www-data:www-data storage bootstrap/cache

# Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Install dependencies
RUN npm install
RUN npm i --save-dev @types/lodash

# Build the assets
RUN npm run build

# Set the document root for Apache
RUN sed -i -e 's/html/html\/public/g' /etc/apache2/sites-available/000-default.conf

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
