import Link from "next/link"
import Logo from "../logo"

const Header = () => {
    return (
        <header className="navbar top-0 left-0 z-999 w-full absolute">
            <div className="container">
                <nav className="py-7">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <div>
                            <Logo />
                        </div>
                        <Link href={"/"} className="w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full">
                            <span className="text-base md:text-xl font-medium">Download PDF Resume</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header