import Navbar from '../../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../globals.css'

export default function TestingPage() {
    return (
        <main>
            <div class='container'>
                <div class='item item-1'>1</div>
                <div class='item item-2'>2</div>
                <div class='item item-3'>3</div>
                {/* implicity grid: items are added outside of the explicit grid */}
                <div class='item item-4'>4</div>
            </div>
        </main>
    )
}