import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcons({ size } : {size: SizeProp})
{
    return <>
        <div className="flex space-x-6 justify-center">
            <a href="https://github.com/Naamloos" className="hover:text-gray-400 transition-colors">
                <FontAwesomeIcon icon={faGithub} size={size} />
            </a>
            <a href="https://www.linkedin.com/in/naamloos/" className="hover:text-gray-400 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size={size} />
            </a>
        </div>
    </>
}
