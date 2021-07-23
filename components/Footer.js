import Image from 'next/image'
import logo from '../logo/odera_logo.png'
import logo_text from '../logo/odera_words.png'

function Footer() {
    return (
        <footer  className="row pt-3">
            <div className="mh col-sm-10 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center">
                <Image src={logo} alt="logo" width="70" height="100"/>
                <Image src={logo_text} alt="logo" className="mx-2 my-1" width="250rem" height="10rem"/>
            </div>
            <div id="contact" className="col-sm-5 col-md-4 col-lg-4 col-xl-4 vertical">
                <h3>Address</h3>
                KCB Building, First Floor Rm 2,<br />
                Along Kisumu-Busia Road, Ugunja,<br />
                P.O. Box 255-40606, Ugunja, Kenya <br />
            </div>
            <div className="col-sm-5 col-md-4 col-lg-4 col-xl-4 vertical">
                <h3>Contacts</h3>
                <span className="">Telephone Number: <a href="tel:254706722744">+254706722744</a></span><br />
                <span>email address: info@koderaadvocates.com</span>
            </div>
            <div className="footer-copyright py-3 text-center">
                &copy; 2021- {new Date().getFullYear()} <br />
                Odhiambo Odera & Associates Advocates
            </div>
            <div className="builder py-1 text-center">
                <a href="https://www.unboundcoders.com" target="_blank" rel="noopener noreferrer">
                    <div >Built by <span className="builder-red">Unbound</span> <span className="builder-blue">Coders</span></div>
                </a>
            </div>
      </footer>
    )
}

export default Footer
