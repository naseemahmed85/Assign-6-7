import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
            {/* Logo Section */}
            <div className="logo">
                <Link href="/">
                <h2>cyber</h2>
                </Link>
            </div>
            

            {/* Search Bar */}
                <input className="search" type="text" placeholder="search"/>

            <ul className="header-button">
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="about">
                <li>About</li>
                </Link>
                <Link href="contact-us">
                <li>Contact Us</li>
                </Link>
                <Link href="blog">
                <li>Blog</li>
                </Link>

                <div className="icon">
            </div>
            </ul>  
        </div>
    )
}