import React from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';

const Modal = ({modal,handleClick}) => {
    return (
        <div className="overlay">
            <div className="modal">
          <div className="cross">
          <FaTimes style={{ color: "white" }} size={25} onClick={handleClick}/>
          </div>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt voluptates fugiat placeat ipsam accusantium. Officiis veritatis quas eligendi id!</h2>
            </div>
        </div>
    )
}

export default Modal