import React from 'react'

const About = ({heading}) => {
    return (

        <>
            <h1 className='heading'>{heading}</h1>
            <section className='about'>
                <img src={require("../../../Assets/image4.png")} alt="" />
                <div className="content">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod expedita iure
                        repellat nihil error neque officiis nesciunt commodi non? sit amet consectetur adipisicing elit. Delectus nostrum Deserunt ipsa voluptatum, fuga molestiae unde inventore reprehenderit vero fugit iusto.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nostrum aliquam quam nam, eos hic voluptatum consectetur molestias eveniet minima repellendus sequi totam corporis ab beatae velit voluptatem odit libero omnis ipsam asperiores exercitationem saepe! Inventore assumenda a deserunt at.</p>
                </div>
            </section>
        </>
    )
}

export default About