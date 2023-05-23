import React, { useEffect, useState } from 'react'
import styles from "./Card.module.css"
import { Tick } from '../../assests/svgs';

export default function Card(props) {
    const { data } = props;

    let isChecked = false;
    if (props.checkedId === data.id) {
        isChecked = true;
    }

    let containerTitleTag = { className: ``, text: '' };
    if (data.isRecommended) {
        containerTitleTag.className = `${styles.containerTitleTag} ${styles.recBg}`
        containerTitleTag.text = "Recommended"
    } else if (data.isExperied) {
        containerTitleTag.className = `${styles.containerTitleTag} ${styles.expBg}`
        containerTitleTag.text = "Offer Experied"
    }


    function changeHandler(e) {

        if (e.target.checked) {
            props.onChange(data.yearlyPrice, data.id);

        }
    }





    return (
        <label htmlFor={data.id} className={`${styles.container} ${data.isExperied && styles.containerExp} ${isChecked && styles.containerChecked}`}>
            <div className={`${styles.container1}`}>
                <span className={`${styles.circle} ${isChecked && styles.circleChecked}`} >
                    {isChecked && <Tick />}
                </span>
                <input className={styles.radio} type="radio" name="membership" id={data.id} disabled={data.isExperied} onChange={changeHandler} />

                <div className={`${styles.containerTitle}`}>
                    <span>{data.duration}</span>
                    <span> Months Subscription </span>
                    <span className={containerTitleTag.className} >{containerTitleTag.text}</span>
                </div>
            </div>
            <div className={`${styles.container2}`} >
                <span >
                    <span> Total  </span>
                    <span className={`${styles.yearlyPrice}  ${data.isExperied && styles.priceExp}`} > ₹{data.yearlyPrice} </span>
                </span>
                <span>
                    <span> ₹{data.monthlyPrice} </span>
                    <span className={`${styles.monthlyLabel}`} > /mon </span>
                </span>
            </div>
        </label>
    )
}
