import Navbar from '../../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../globals.css'

export default function TestingPage() {
    return (
        <main >
            <h1>
                Welcome to my website
            </h1>
            <a href="https://mail.google.com/">
                <FontAwesomeIcon
                    className="icon"
                    id='fa-envelope'
                    icon={faEnvelope}
                    size='xs' />
            </a>
            <a href="./">
                <FontAwesomeIcon
                    className="icon"
                    id="fa-house"
                    icon={faHouse}
                    size='xs' />
            </a>
            <a href="https://twitter.com/?lang=en">
                <FontAwesomeIcon
                    className="icon"
                    id="fa-twitter"
                    icon={faTwitter}
                    size='xs' />
            </a>
        </main>
    )
}