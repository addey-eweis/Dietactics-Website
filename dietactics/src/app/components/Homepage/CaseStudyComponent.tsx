import {useRef, useState, useEffect, useLayoutEffect} from 'react';
import styles from "./CaseStudyComponent.module.scss";
import ReactPlayer from "react-player";

export default function CaseStudyComponent() {
    const [isStart, setScrollPosition] = useState();

    return (
        <>
            <section className={styles.caseStudyContainer}>
                <h1>See Your Product In Action</h1>
                <div className={styles.privateLabelVideoContainer}>
                    <iframe allow="fullscreen;autoplay" allowFullScreen height="100%"
                            src="https://streamable.com/e/8osekq?autoplay=1&muted=1&nocontrols=1" width="100%"></iframe>
                </div>
            </section>
        </>
    )
}
