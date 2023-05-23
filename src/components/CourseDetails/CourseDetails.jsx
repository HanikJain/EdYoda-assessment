import React from 'react'
import styles from "./CourseDetails.module.css"
import { PlayBook, Live, Graduation, NoAds, Clock } from "../../assests/svgs/index"

export default function CourseDetails() {
    return (
        <div className={styles.conatiner}>
            <div className={styles.title}>
                <span> Access curated courses worth </span>
                <span> ₹ <span className={styles.textDecoration}> 18,500 </ span> </span>
                <span> at just </span>
                <span className={styles.highlight} > ₹ 99 </span>
                <span> per year! </span>
            </div>

            <div className={`${styles.flexgap}`}>
                <div> <PlayBook /></div>
                <div className={styles.smallHeading} >
                    <span className={styles.highlight} > 100+ </span>
                    <span> Job relevant courses </span>
                </div>

            </div>

            <div className={`${styles.flexgap}`}>
                <div> <Clock /></div>
                <div className={styles.smallHeading} >
                    <span className={styles.highlight} > 20,000+ </span>
                    <span> Hours of content </span>
                </div>

            </div>


            <div className={`${styles.flexgap}`}>
                <div> <Live /></div>
                <div className={styles.smallHeading} >
                    <span className={styles.highlight} > Exclusive </span>
                    <span> webinar access </span>
                </div>

            </div>


            <div className={`${styles.flexgap}`}>
                <div> <Graduation /></div>
                <div className={styles.smallHeading} >
                    <span > Scholarship worth </span>
                    <span className={styles.highlight} > ₹94,500 </span>
                </div>

            </div>

            <div className={`${styles.flexgap}`}>
                <div> <NoAds /></div>
                <div className={styles.smallHeading} >
                    <span className={styles.highlight} > Ad Free </span>
                    <span> learning experience </span>
                </div>

            </div>

        </div>
    )
}
