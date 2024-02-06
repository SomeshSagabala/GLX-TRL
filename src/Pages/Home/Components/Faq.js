import React, { useState } from 'react'
import image from "../../../Assets/up-arrow.png"

const Faq = () => {

    const data = [
        {
            question: "Question 1?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident minima nulla odit accusamus qui nisi aspernatur impedit itaque, suscipit, repellat maxime laborum, maiores aliquid? Sequi vitae molestiae quia neque deleniti."
        },
        {
            question: "Question 2?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident minima nulla odit accusamus qui nisi aspernatur impedit itaque, suscipit, repellat maxime laborum, maiores aliquid? Sequi vitae molestiae quia neque deleniti."
        },
        {
            question: "Question 3?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident minima nulla odit accusamus qui nisi aspernatur impedit itaque, suscipit, repellat maxime laborum, maiores aliquid? Sequi vitae molestiae quia neque deleniti."
        },
        {
            question: "Question 4?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident minima nulla odit accusamus qui nisi aspernatur impedit itaque, suscipit, repellat maxime laborum, maiores aliquid? Sequi vitae molestiae quia neque deleniti."
        },
        {
            question: "Question 5?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident minima nulla odit accusamus qui nisi aspernatur impedit itaque, suscipit, repellat maxime laborum, maiores aliquid? Sequi vitae molestiae quia neque deleniti."
        },
        {
            question: "Question 6?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident minima nulla odit accusamus qui nisi aspernatur impedit itaque, suscipit, repellat maxime laborum, maiores aliquid? Sequi vitae molestiae quia neque deleniti."
        },
    ];

    const [selected, setSelected] = useState(null)

    const handleSelect = (i)=>{
        if(selected==i){
            return setSelected(null)
        }
        setSelected(i);
    }
    return (
        <>

            <h1 className='heading'>FAQs</h1>
            <section className="faq">
                {
                    data.map((item,i) => {
                        return (
                            <div className="wrapper" key={i} onClick={()=>{handleSelect(i)}}>
                                <div className="item">
                                    <div className="question" >
                                        <h3>{item.question}</h3>
                                        <img src={image} alt="" className={selected==i ? "reverse" : ""} />
                                    </div>
                                    <div className={selected==i ? "answer show" : "answer"} >
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </section>

        </>

    )
}

export default Faq