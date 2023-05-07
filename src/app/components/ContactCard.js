import React from 'react';
import styles from "@/app/contact/contact.module.css"
import Link from "next/link";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <i> <MdEmail /> </i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="mailto:vivekpradhan736@gmail.com">  Send Email <span>-&gt;</span></Link>
                    </div>

                    <div className={styles.grid_card}>
                        <i> <MdVoiceChat /> </i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM — 6 PM ET</p>
                        <p className={styles.last_para}>Weekends: 9 AM — 5 PM ET </p>
                        <Link href="https://wa.me/916203046018" >  Chat Now <span>-&gt;</span></Link>
                    </div>

                    <div className={styles.grid_card}>
                        <i> <MdForum /> </i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={styles.last_para}>response time: 72 hours </p>
                        <Link href="/" className={styles.anchorLink}>  Ask The Community <span>-&gt;</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;