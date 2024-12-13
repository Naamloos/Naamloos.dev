import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcons from "./SocialIcons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
        <footer className="bg-gradient-to-t from-blue-900 to-blue-950 text-white py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p><span onDoubleClick={() => window.location.href = route('dashboard')} className="cursor-text">&copy;</span> {currentYear} Ryan de Jonge. All rights reserved.</p>
                    </div>
                    <SocialIcons size="xl"/>
                </div>
            </div>
        </footer>
        </>
    )
}
