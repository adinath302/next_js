import Link from "next/link";

export default function Navigation() {
    return (
        <header className="grid grid-cols-2">
            <div>logo</div>
            <nav>
                <ul className="flex gap-4 ">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">about</Link></li>
                    <li><Link href="/clientCompo">clientCompo</Link></li>
                    <li><Link href="/serverCompo">serverCompo</Link></li>
                    <li><Link href="/service">service</Link></li>
                    <li><Link href="/contact">contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}