"use client";
import React from "react";
import styles from "./FooterComponent.module.scss"
import Link from "next/link";
import {MdEmail} from "react-icons/md";
import {FaPhone} from "react-icons/fa6";
import {FaLocationDot} from "react-icons/fa6";


export default function FooterComponent() {
    return (<>
        <footer className={styles.FooterContainer}>
            <section className={styles.FooterContent}>
                <div className={styles.contactContainer}>
                    <Link href={"/"} className={styles.FooterLogo}>Dietactics</Link>
                    <p>Get started with your <br/>supply chain transformation<br/>today!</p>
                    <div className={styles.contactEmail}>
                        <MdEmail className={styles.contactIcon} size={"1.5em"}/>
                        <h2>info&#64;dietactic.com</h2>
                    </div>
                    <div className={styles.contactPhone}>
                        <FaPhone className={styles.contactIcon} size={"1.5em"}/>
                        <h2>1 609-423-5803</h2>
                    </div>
                    <div className={styles.contactLocation}>
                        <FaLocationDot className={styles.contactIcon} size={"1.5em"}/>
                        <h2>939 W. North Avenue Chicago, IL, 60642</h2>
                    </div>
                    <div className={styles.contactLocation}>
                        <FaLocationDot className={styles.contactIcon} size={"1.5em"}/>
                        <h2>Hongkong, China</h2>
                    </div>
                    <div className={styles.contactLocation}>
                        <FaLocationDot className={styles.contactIcon} size={"1.5em"}/>
                        <h2>London, UK</h2>
                    </div>
                    <div className={styles.contactLocation}>
                        <FaLocationDot className={styles.contactIcon} size={"1.5em"}/>
                        <h2>Istanbul, Turkey</h2>
                    </div>
                    <div className={styles.contactLocation}>
                        <FaLocationDot className={styles.contactIcon} size={"1.5em"}/>
                        <h2>Dubai, UAE</h2>
                    </div>
                </div>


            </section>
        </footer>
    </>)
}