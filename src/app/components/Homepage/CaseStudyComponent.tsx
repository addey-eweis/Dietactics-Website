import React from "react";
import styles from "./CaseStudyComponent.module.scss";


export default function CaseStudyComponent() {


    return (
        <>
            <section className={styles.caseStudyContainer}>
                <video className={styles.caseStudyVideo} autoPlay={true} height="100%" width="100%">
                    <source src="./Dietactics.mp4"/>
                </video>
            </section>

        </>
    )
}
