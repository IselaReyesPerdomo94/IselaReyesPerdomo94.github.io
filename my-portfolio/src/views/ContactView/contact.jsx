import React from 'react';
import Contact from '../../Components/Contact/contact';
import './contact.css';

const ContactView = () => {
    return(
        <section className="contact-view" id="contact">
            <h2>Contact</h2>
            <Contact/>
        </section>
    )
}

export default ContactView;