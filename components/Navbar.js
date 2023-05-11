const Navbar = () => {
    return (
        
        <div className="navbar-wrapper">
        <nav className="navbar">

        {
            /* <!-- LOGO --> */
        }

        <div className="logo"><a href="/"><img src='img/logo_round_196.png' /></a></div>

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
                {/* <li>
                    <a href="/cv">RESUME/CV</a>
                </li> */}
                <li>
                    <a href="https://sandbox.ayushsaran.info">SANDBOX</a>
                </li>
                <li>
                    <a href="https://blog.ayushsaran.info">BLOG</a>
                </li>
            </div>

        </ul>


    </nav></div>);
}
 
export default Navbar;