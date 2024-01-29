"use client";
import styles from "./HomePageHeader.module.scss"
import Link from "next/link";
import {motion, useTransform, useScroll, transform} from "framer-motion";
import React, {useRef} from "react";

export default function HomePageHeader() {

    return (<>
        <section className={styles.headerSection}>
            <nav>
                <li className={styles.navbarLogo}><Link href={"/"}>Dietactics</Link></li>
                <div className={styles.nonLogoItems}>
                    <Link className={styles.navbarItem} href={"#"}>Products</Link>
                    <Link className={styles.navbarItem} href={"#"}>Solutions</Link>
                </div>
                <Link className={styles.contactButton} href={"#"}>
                    Contact
                </Link>
            </nav>
            <div className={styles.headerContainer}>
                <h2 className={styles.headerSubText}>Maximize Efficiency with Our Innovative Logistics Intelligence</h2>
                <h1 className={styles.headerText}>Streamline Your<br/>Supply Chain</h1>
            </div>
        </section>
        <ServicesComponent/>

        <section>
        </section>

    </>)

    function ServicesComponent() {
        const targetRef = useRef<HTMLDivElement | null>(null);
        const {scrollYProgress} = useScroll({
            target: targetRef,
        });

        const x = useTransform(scrollYProgress, [0, 1], ["0%", "-158%"]);
        // const y = useTransform(scrollYProgress, [0, 1], ["0%", "200"]);
        //Make card turn to color and pop out when in focus
        return (<>
            <section ref={targetRef} className={styles.servicesServicesContainer}>
                <motion.div style={{x}} className={styles.servicesCardContainer}>

                    {serviceCards.map((serviceCard) => {
                        return <Card serviceCard={serviceCard} key={serviceCard.id}/>;
                    })}

                </motion.div>

            </section>
        </>)
    }
}


const Card = ({serviceCard}: { serviceCard: serviceCardType }) => {
    return (
        <>
            {/*<div style={{backgroundColor: "red"}} className={styles.serviceCardItem}>*/}
            <motion.div
                className={styles.serviceCardItem}
                initial={{filter: "grayscale(1)"}}
                whileInView={{filter: "none"}}>

                <h1>{serviceCard.serviceName}</h1>
                <p>{serviceCard.serviceDescription}</p>
            </motion.div>
            {/*</div>*/}
        </>
    )
}

type serviceCardType = {
    id: number,
    serviceName: string,
    serviceDescription: string,
}


const serviceCards: serviceCardType[] = [
    {
        id: 1,
        serviceName: "Market Intelligence",
        serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
    },
    {
        id: 2,
        serviceName: "Market Intelligence",
        serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
    },
    {
        id: 3,
        serviceName: "Market Intelligence",
        serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
    },
    {
        id: 4,
        serviceName: "Market Intelligence",
        serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
    },
    {
        id: 5,
        serviceName: "Market Intelligence",
        serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
    },
    {
        id: 6,
        serviceName: "Market Intelligence",
        serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
    }
]
