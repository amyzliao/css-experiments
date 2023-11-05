import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/contact">Contact</Link>
        </div>

    )
}