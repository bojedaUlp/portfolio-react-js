import React from 'react'
import "./contact.scss"
const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="../../img/contact.jpg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form >
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact

