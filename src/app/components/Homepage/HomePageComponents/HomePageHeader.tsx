"use client";
import styles from "./HomePageHeader.module.scss"
import Link from "next/link";
import React from "react";
import ServicesComponent from "@/app/components/Homepage/ServicesComponent/ServicesComponent";
import SupplyChainIntelComponent from "@/app/components/Homepage/SupplyChainIntelComponent/SupplyChainIntelComponent";

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
        {/*<SupplyChainIntelComponent/>*/}

    </>)

}


// const Card = ({serviceCard}: { serviceCard: serviceCardType }) => {
//     return (
//         <>
//             {/*<div style={{backgroundColor: "red"}} className={styles.serviceCardItem}>*/}
//             <motion.div
//                 className={styles.serviceCardItem}
//                 initial={{filter: "grayscale(1)"}}
//                 whileInView={{filter: "none"}}>
//
//                 <h1>{serviceCard.serviceName}</h1>
//                 <p>{serviceCard.serviceDescription}</p>
//             </motion.div>
//             {/*</div>*/}
//         </>
//     )
// }

// type serviceCardType = {
//     id: number,
//     serviceName: string,
//     serviceDescription: string,
// }


// const serviceCards: serviceCardType[] = [
//     {
//         id: 1,
//         serviceName: "Market Intelligence",
//         serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
//     },
//     {
//         id: 2,
//         serviceName: "Market Intelligence",
//         serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
//     },
//     {
//         id: 3,
//         serviceName: "Market Intelligence",
//         serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
//     },
//     {
//         id: 4,
//         serviceName: "Market Intelligence",
//         serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula elit."
//     }
// ]
