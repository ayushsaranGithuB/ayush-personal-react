const Footer = () => {
    return (

        <footer>
            <div class="footerWrapper">
                <section class="socialIcons">
                    <a href="/behance"><img src='/img/btn-be.png' id="btn-be" /></a>
                    <a href="/behance"><img src='/img/dribble.png' id="btn-drbl"/></a>
                    <a href="/behance"><img src='/img/linkedIn.png'  id="btn-li" /></a>
                </section>
                
                <section class="contact">
                    &copy; Ayush Saran <br />
                    <a href="mailto:mail@ayushsaran.info">mail@ayushsaran.info</a>
                </section>

                <section class="moreFooter">
                    <h4>Still Here?</h4>
                    <p>
                        Go check out my developer blog 
                        <a href="http://sandbox.ayushsaran.com">sandbox.ayushsaran.com</a>
                    </p>
                    <p>
                        Laugh at my travel stories 

                        <a href="http://blog.ayushsaran.com">blog.ayushsaran.com</a>
                    </p>
                    <p>
                        See what I've been working on @ GitHub  
                        <a href="https://github.com/ayushsaranGithuB/">github.com/ayushsaranGithuB/</a>
                    </p>




                </section>
            </div>
        </footer>

    );
}

export default Footer;