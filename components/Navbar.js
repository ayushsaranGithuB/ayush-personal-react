const Navbar = () => {
    return (<nav className="navbar">

        {
            /* <!-- LOGO --> */
        }

        <div className="logo"><img src='img/logo_round_196.png' /></div>

        {
            /* <!-- NAVIGATION MENU --> */
        }

        <ul className="nav-links">

            {
                /* <!-- USING CHECKBOX HACK --> */
            }

            <input type="checkbox" id="checkbox_toggle" />

            <label for="checkbox_toggle" className="hamburger">&#9776;</label>

            {
                /* <!-- NAVIGATION MENUS --> */
            }

            <div className='menu'>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/cv">RESUME/CV</a>
                </li>
                <li>
                    <a href="/sandbox">SANDBOX</a>
                </li>
                <li>
                    <a href="http://blog.ayushsaran.info">BLOG</a>
                </li>
            </div>

        </ul>


    </nav>);
}
 
export default Navbar;