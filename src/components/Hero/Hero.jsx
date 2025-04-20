import React, { useEffect } from 'react'
import './Hero.css'
const Hero = ({ }) => {
    return (
        <React.Fragment>
            <div className='heroContainer'>
                <div className='hero'>
                    <div className="hero__title">
                        <h1 className='hero__title--text'>Hi! I'm <span className=''>Anuj Bhardwaj</span>,</h1>
                        <span className='hero__subtitle--text'> A <span className='hero__special--sub'> Software Engineer</span></span>
                    </div>
                    <div className='hero__quote'>Strive for perfection in everything you do. Take the best that exists and make it better. <br />When it does not exist, design it.</div>
                    {/* <div className='hero__bottom'>Wrote over 5000+ lines of code 🚀</div> */}
                    <div className='current'>
                        <div className='country'></div>
                        <div className='currentBuilding'>Building <a target={"_blank"} href="https://appetize.io/app/b_m4ec3e3qb4rchb3cebkddqwn2q">AI_Doc_Scanner</a></div>
                        <div className='currentAt'>Software Engineer at <div target={"_blank"} href="">{'{null}'}</div></div>
                        <div className='currentWorking'>Working on <div target={"_blank"} href="">{'{null}'}</div></div>
                    </div>
                    <a href='./Resume.pdf' download={'./Resume.pdf'} className="hero__resume--title">Download Resume</a>
                    <div className="heroLinks">
                        {/* <a target={"_blank"} href="https://www.linkedin.com/in/tanishq-kr-kaushal-835b0221b/" className="heroLinksLink">Linkedin</a>
                        <a target={"_blank"} href="https://github.com/tanishqkrk" className="heroLinksLink">GitHub</a>
                        <a target={"_blank"} href="https://twitter.com/TanishqKaushal" className="heroLinksLink">Twitter</a> */}
                        <a target={'_blank'} href="https://www.linkedin.com/in/anuj-bhardwaj-127542141/" className="footer__data--link-link">Linkedin</a>
                        <a target={'_blank'} href="https://github.com/Anuj8553"  className="footer__data--link-link">GitHub</a>

                    </div>
                </div>
                <div className="heroImg">
                    <div className='imgContainer'>
                        <img src={`${import.meta.env.BASE_URL}/headshot.jpeg`} alt="" className="heroImgImg" />
                        <img src={`${import.meta.env.BASE_URL}/tanishqkrk-pixel.png`} alt="" className="heroImgImg2" />
                        <img src={`${import.meta.env.BASE_URL}opt_1.svg`} alt="" className="heroImgImg3" />

                    </div>
                </div>
            </div>
            {/* <div className="bottom"></div> */}
        </React.Fragment>
    )
}

export default Hero



//naya
// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = './Resume.pdf'; // Ensure the path is correct
//         link.download = 'Resume.pdf'; // Set the filename here
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <React.Fragment>
//             <div className='heroContainer'>
//                 <div className='hero'>
//                     <div className="hero__title">
//                         <h1 className='hero__title--text'>Hi! I'm <span className=''>Anuj Bhardwaj</span>,</h1>
//                         <span className='hero__subtitle--text'> A <span className='hero__special--sub'> Software Engineer</span></span>
//                     </div>
//                     <div className='hero__quote'>
//                         Strive for perfection in everything you do. Take the best that exists and make it better. <br />
//                         When it does not exist, design it.
//                     </div>
//                     <div className='current'>
//                         <div className='country'></div>
//                         <div className='currentBuilding'>
//                             Building <a target={"_blank"} href="https://appetize.io/app/b_m4ec3e3qb4rchb3cebkddqwn2q">AI_Doc_Scanner</a>
//                         </div>
//                         <div className='currentAt'>
//                             Software Engineer at <div target={"_blank"} href="">{'{null}'}</div>
//                         </div>
//                         <div className='currentWorking'>
//                             Working on <div target={"_blank"} href="">{'{null}'}</div>
//                         </div>
//                     </div>
//                     <button onClick={handleDownload} className="hero__resume--title">Download Resume</button>
//                     <div className="heroLinks">
//                         <a target={'_blank'} href="https://www.linkedin.com/in/anuj-bhardwaj-127542141/" className="footer__data--link-link">Linkedin</a>
//                         <a target={'_blank'} href="https://github.com/Anuj8553" className="footer__data--link-link">GitHub</a>
//                     </div>
//                 </div>
//                 <div className="heroImg">
//                     <div className='imgContainer'>
//                         <img src={`${import.meta.env.BASE_URL}/headshot.jpeg`} alt="" className="heroImgImg" />
//                         <img src={`${import.meta.env.BASE_URL}/tanishqkrk-pixel.png`} alt="" className="heroImgImg2" />
//                         <img src={`${import.meta.env.BASE_URL}opt_1.svg`} alt="" className="heroImgImg3" />
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Hero;
