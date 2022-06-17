import React from 'react';
import './Contact.css';
export default function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__1">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me</h1><br/>
                            <p className="hire__text white"> Please Reach Out Me Via Below Phone or Mail:</p>
                           <p className="hire__text white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone-Number:&nbsp;<strong>+1-8436 14 245</strong></p>
                           <p className="hire__text white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mail-Id:&nbsp;<strong>mohandand@gmail.com</strong></p>
                        </div>
                        <div className="input__box form">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

