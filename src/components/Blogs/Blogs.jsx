import React, { useEffect } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
import Blog from './Blog/Blog'
import './Blogs.css'
const Blogs = () => {
    return (
        <div id='blogs' className="blogs">
            <div className="blogs__title heading">//Publications</div>
            <div className="blogs__blog">
                <Blog title={"Analysis of Deep Learning Models for Brain Tumour Detection"} content={"The detection and identification of brain tumors is vital for facilitating early diagnosis and enabling timely treatment of such conditions. This paper investigates the utilization of deep learning architectures, including Convolutional Neural Networks (CNN) [9], VGG [10], U-Net [7], Transfer Learning [11] and RU-Net [12] for tumors cerebral detected MRI."} link={'https://ieeexplore.ieee.org/document/10882510'} ></Blog>
                <Blog title={"Design and Development of Expense App"} content={"With the help of Expense Tracker, you can easily and intuitively manage your revenue and costs while keeping track of your everyday, weekly, monthly, and annual spending. Users may choose the kind of expenditure, add location, upload more data, choose the amount of expense, and more."} link={'https://ieeexplore.ieee.org/document/10743820'} ></Blog>
            </div>
        </div>
    )
}

export default Blogs