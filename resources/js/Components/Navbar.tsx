export default function Navbar() {
    const links: Array<any> = [

    ];

    return (
        <>
            <header className="fixed w-full bg-gray-900 shadow-sm z-50">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <a href="/" className="text-2xl font-bold text-white">Ryan de Jonge</a>
                        <ul className="flex space-x-8">
                            {links.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
