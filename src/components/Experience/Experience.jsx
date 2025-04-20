import React from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
import ExperienceWork from './ExperienceWork/ExperienceWork'
import './Experience.css'
import './ExperienceWork/ExperienceWork.css'


const Experience = () => {
    // useEffect(() => {
    // AOS.init();
    // AOS.refresh();
    // }, []);
    return (
        <React.Fragment>
            <div id='experience' className="experience">
                <div className="heading experience__title">
            //Experience
                </div>
                <div className="experience__desc">I've worked as a freelancer and an intern, and made dozens of features and web designs to fit various requirements.</div>
                <div className="experience__content"  >
                    <div className="experience__content--work">
                        <ExperienceWork desc={"I designed and implemented dynamic user interfaces for mobile applications, collaborating with cross-functional teams to integrate backend APIs and optimize database queries for scalability. Additionally, I applied best programming practices to enhance application reliability and performance."}
                        tools={[
                            `${import.meta.env.BASE_URL}android_studio.svg`,
                            `${import.meta.env.BASE_URL}flutter.svg`,
                            `${import.meta.env.BASE_URL}git.png`,
                            `${import.meta.env.BASE_URL}github.png`
                          ]}
                          
                         title={'Software Development Engineer'} 
                         link={"https://putoos.com/"} 
                         firm={'Putoos.in'} 
                         tenure={'July 2024 - September 2024'}></ExperienceWork>
                    </div>
                </div>
                {/* <div className="exgradient1"></div> */}
                {/* <div className="exgradient2"></div> */}
            </div>
        </React.Fragment>
    )
}

export default Experience