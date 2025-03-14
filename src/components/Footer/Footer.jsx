import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__main">
                <div className="footer__image"><img src="/tanishqkrk-pixel.png" alt="" className="footer__img--img" /></div>
                <div className="footer__data">
                    <div className="footer__data--links">
                        <div className="footer__data--links-social">

                        <a target={'_blank'} href="https://www.linkedin.com/in/anuj-bhardwaj-127542141/" className="footer__data--link-link">Linkedin</a>
                        <a target={'_blank'} href="https://github.com/Anuj8553"  className="footer__data--link-link">GitHub</a>


                            {/* <a target={'_blank'} href="https://www.instagram.com/tanishqkrk/" className="footer__data--link-link">Instagram</a> */}
                            {/* <a target={'_blank'} href="https://www.twitter.com/TanishqKaushal/" className="footer__data--link-link">Twitter</a> */}
                            {/* <a target={'_blank'} href="https://stackoverflow.com/users/17027654/tanishq-kr-kaushal" className="footer__data--link-link">Stack Overflow</a> */}
                         
                            {/* <a target={'_blank'} href="https://dev.to/tanishqkrk" className="footer__data--link-link">Dev.to</a> */}
                        </div>
                        <div className="footer__data--links-page">
                            <a href="" className="footer__data--link-link">Home</a>
                            <a href="" className="footer__data--link-link">Experience</a>
                            <a href="" className="footer__data--link-link">Projects</a>
                            <a href="" className="footer__data--link-link">Technologies</a>
                            <a href="" className="footer__data--link-link">Publications</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__end">©Anuj Bhardwaj | Made with
                <img className='footer__end--icon' src="./react.png" alt="" />
                <img className='footer__end--icon' src="./vite.png" alt="" />
                <img className='footer__end--icon' src="./js.png" alt="" />
            </div>
        </footer>
    )
}

export default Footer