import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img from "../../../Assets/image.png"
import img1 from "../../../Assets/image1.png"
import img2 from "../../../Assets/image2.png"
import img3 from "../../../Assets/image3.png"
import img4 from "../../../Assets/image4.png"


const Services = () => {

    const images = [img, img1, img2, img3, img4, img1, img2, img3, img4]


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive : [
            {
              breakpoint: 1424,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ],
    };
    return (
        <>
            <h1 className='heading'>Services</h1>
            <section className="services">
                <Slider {...settings}>
                    {
                        images.map((image) => {
                            return (
                                <div key={image}>
                                    <img src={image} alt="" />
                                </div>
                            )
                        })
                    }



                    {/* <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <img src={img4} alt="" />
                    </div> */}
                </Slider>
            </section>
        </>

    )
}

export default Services