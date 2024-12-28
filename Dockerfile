# Use the official PHP image as the base image
FROM php:8.3-apache

RUN apt-get update && apt-get install -y libc-client-dev libkrb5-dev && rm -r /var/lib/apt/lists/*
RUN docker-php-ext-configure imap --with-kerberos --with-imap-ssl

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
RUN apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev; \
    docker-php-ext-configure gd --with-freetype --with-jpeg; \
    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd imap;

RUN apt-get install -y libgmp-dev re2c libmhash-dev libmcrypt-dev file
RUN ln -s /usr/include/x86_64-linux-gnu/gmp.h /usr/local/include/
RUN docker-php-ext-configure gmp
RUN docker-php-ext-install gmp

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

# Build the assets
RUN npm run build

# Set the document root for Apache
RUN sed -i -e 's/html/html\/public/g' /etc/apache2/sites-available/000-default.conf

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
