import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import styles from "./ServicesComponent.module.scss";
import Image from "next/image";
import SupplyChainImage from "../../../assets/ServiceImg-05.png";
import IconOne from "../../../assets/ServiceImg-03.png";
import IconTwo from "../../../assets/ServiceImg-01.png";
import IconThree from "../../../assets/ServiceImg-02.png";
import IconFour from "../../../assets/ServiceImg-04.png";

export default function ServicesComponent() {

    const servicesRef = useRef(null);
    const supplyChainRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: servicesRef,
    });

    const bgColorTransform = useTransform(scrollYProgress, [0.78, 0.95], ["#F5F3FF", "#FFFFFF"]);


    const [isHoveredOne, setHoverStateOne] = React.useState(false);
    const [isHoveredTwo, setHoverStateTwo] = React.useState(false);
    const [isHoveredThree, setHoverStateThree] = React.useState(false);
    const [isHoveredFour, setHoverStateFour] = React.useState(false);
    const x = useTransform(scrollYProgress, [0, 1], ["33%", "-90%"]);
    return (<>
        <motion.section
            ref={servicesRef}
            className={styles.servicesServicesContainer}
            style={{backgroundColor: bgColorTransform}}
        >


            <motion.div style={{x}} className={styles.servicesCardContainer}>

                <motion.div
                    onMouseEnter={() => setHoverStateOne(true)}
                    onMouseLeave={() => setHoverStateOne(false)}
                    animate={
                        {
                            // y: isHovered ? [-20, 20, 0] : 0,  // Keyframes for up, down, and back
                            scale: isHoveredOne ? 1.03 : 1,
                            y: isHoveredOne ? -10 : 0,
                            transition: {
                                duration: 0.2,  // Adjust duration as needed
                                ease: "easeOut"  // You can customize the easing
                            }

                        }
                    }
                    className={styles.serviceCardItem}
                    id={styles.oneCard}
                    initial={{filter: "grayscale(1)"}}
                    whileInView={{filter: "none"}}>

                    <h1>Supply Chain Coordination</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh, in
                        accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac vulputate
                        vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit tincidunt
                        ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet consequat erat.
                        Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero tincidunt, ac sollicitudin
                        risus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Mauris ut erat sit amet dolor pharetra congue tristique at felis.
                        Proin ipsum eros, vehicula a ullamcorper quis, cursus non eros. Curabitur sit amet semper
                        turpis, vitae malesuada nibh. Sed quis ligula elit.</p>
                </motion.div>


                <motion.div className={styles.serviceCardItem}
                            onMouseEnter={() => setHoverStateTwo(true)}
                            onMouseLeave={() => setHoverStateTwo(false)}
                            animate={
                                {
                                    // y: isHovered ? [-20, 20, 0] : 0,  // Keyframes for up, down, and back
                                    scale: isHoveredTwo ? 1.03 : 1,
                                    y: isHoveredTwo ? -10 : 0,
                                    transition: {
                                        duration: 0.2,  // Adjust duration as needed
                                        ease: "easeOut"  // You can customize the easing
                                    }

                                }
                            }
                            id={styles.twoCard}
                            initial={{filter: "grayscale(1)"}}
                            whileInView={{filter: "none"}}>

                    <h1>Market Intel</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh,
                        in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac
                        vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit
                        tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet
                        consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero
                        tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor
                        pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis,
                        cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula
                        elit.</p>
                </motion.div>


                <motion.div className={styles.serviceCardItem}
                            onMouseEnter={() => setHoverStateThree(true)}
                            onMouseLeave={() => setHoverStateThree(false)}
                            animate={
                                {
                                    // y: isHovered ? [-20, 20, 0] : 0,  // Keyframes for up, down, and back
                                    scale: isHoveredThree ? 1.03 : 1,
                                    y: isHoveredThree ? -10 : 0,
                                    transition: {
                                        duration: 0.2,  // Adjust duration as needed
                                        ease: "easeOut"  // You can customize the easing
                                    }

                                }
                            }
                            id={styles.threeCard}
                            initial={{filter: "grayscale(1)"}}
                            whileInView={{filter: "none"}}>

                    <h1>Market Intel</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh,
                        in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac
                        vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit
                        tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet
                        consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero
                        tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor
                        pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis,
                        cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula
                        elit.</p>
                </motion.div>


                <motion.div className={styles.serviceCardItem}
                            onMouseEnter={() => setHoverStateFour(true)}
                            onMouseLeave={() => setHoverStateFour(false)}
                            animate={
                                {
                                    // y: isHovered ? [-20, 20, 0] : 0,  // Keyframes for up, down, and back
                                    scale: isHoveredFour ? 1.03 : 1,
                                    y: isHoveredFour ? -10 : 0,
                                    transition: {
                                        duration: 0.2,  // Adjust duration as needed
                                        ease: "easeOut"  // You can customize the easing
                                    }

                                }
                            }
                            id={styles.fourCard}
                            initial={{filter: "grayscale(1)"}}
                            whileInView={{filter: "none"}}>

                    <h1>Market Intel</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus semper nibh,
                        in accumsan urna semper sed. Nulla at volutpat massa. Donec elit turpis, dictum ac
                        vulputate vitae, porta ac ante. Nunc in leo ex. Nunc in viverra magna. Nunc hendrerit
                        tincidunt ligula, a finibus mi consequat non. Duis ac euismod sapien. Cras sit amet
                        consequat erat. Nullam suscipit feugiat imperdiet. Etiam luctus nisi sed libero
                        tincidunt, ac sollicitudin risus consectetur. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas. Mauris ut erat sit amet dolor
                        pharetra congue tristique at felis. Proin ipsum eros, vehicula a ullamcorper quis,
                        cursus non eros. Curabitur sit amet semper turpis, vitae malesuada nibh. Sed quis ligula
                        elit.</p>
                </motion.div>


            </motion.div>


        </motion.section>

        <motion.div
            ref={supplyChainRef}
            className={styles.SupplyChainIntelContainer}
            style={{backgroundColor: bgColorTransform}}
        >
            <h1>Supply Chain Intelligence at your fingertips</h1>
            <div className={styles.supplyChainIntelContentsContainer}>
                <div className={styles.supplyChainIntelImageContainer}>
                    <Image src={SupplyChainImage} className={styles.SupplyChainImage} alt={"Supply Chain Intelligence"}
                           loading={"lazy"} height={500}
                           width={1100}/>
                </div>
                <div className={styles.supplyChainIntelImageContents}>
                    <div className={styles.ContentsDiv}>
                        <Image src={IconOne} alt={""} width={80} height={80}/>
                        <h2>Legal & Regulatory Paperwork</h2>
                    </div>

                    <div className={styles.ContentsDiv}>
                        <Image src={IconTwo} alt={""} width={80} height={80}/>
                        <h2>Shipping & Handling</h2>
                    </div>

                    <div className={styles.ContentsDiv}>
                        <Image src={IconThree} alt={""} width={80} height={80}/>
                        <h2>Marketing & Promotions</h2>
                    </div>

                    <div className={styles.ContentsDiv}>
                        <Image src={IconFour} alt={""} width={80} height={80} unoptimized={true}/>
                        <h2>Dedicated Client Support</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    </>)
}