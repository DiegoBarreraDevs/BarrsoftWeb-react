import Link from 'next/link'

const firstClick = () => {
    document.querySelector(".navRight").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("fa-times");
}

const NavBar = () => (

    <nav className="navBar">
        <div className="navContent">

            <div className="navLeft">
                <Link href="/">
                    <img src='logo.png' alt="" className="logo" />
                </Link>
                <Link href="/">
                    <h1 className="logoTilte">Barrsoft</h1>
                </Link>
            </div>

            <div className="navRight">
                <ul className="navUl">
                    <li className="navLi">
                        <Link href="/">
                            <a onClick={firstClick} >Home</a>
                        </Link>
                    </li>
                    <li className="navLi">
                        <Link href="/about">
                            <a onClick={firstClick} >About</a>
                        </Link>
                    </li>
                    <li className="navLi">
                        <Link href="/services">
                            <a onClick={firstClick} >Services</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className="menu-btn" id="menu-btn">
            <i className="fas fa-bars fa-2x" id="nav-icon" onClick={firstClick}></i>
        </div>

    </nav>
);

export default NavBar;

