import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "@/app/contact/contact.module.css"
import ContactForm from "@/app/components/ContactForm";

const Contact = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Page</h1>
                <ContactCard/>

                <section className={styles.contact_section}>
                    <h2>We did love to hear <span>from you</span></h2>
                    <ContactForm />
                </section>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5263489142!2d76.76357278336052!3d28.643684622513906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1682713888147!5m2!1sen!2sin"
                width={100} height={450} style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Contact;