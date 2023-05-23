import React, { useState } from 'react'
import styles from './PlanCard.module.css'
import RazorpayImage from "../../assests/images/razorpay.png"
import MyButton from '../UI/MyButton'
import { ClockRunning } from "../../assests/svgs/index"
import Card from "./Card"
import membershipDetails from "../../store/membership";


export default function PlanCard() {
    const [price, setPrice] = useState(18500)
    const [discount, setDiscounted] = useState(18500 - price);
    const [checkedId, setCheckedId] = useState(-1);

    function changeHandler(price, id) {
        setCheckedId(id);
        const discount = 18500 - price;

        setPrice(price);
        setDiscounted(discount);
    }

    const renderMembership = (item) => {
        return <Card onChange={changeHandler} data={item} checkedId={checkedId} />
    }

    return (
        <div className={styles.container} >
            <div className={styles.card}>
                {/* Sign in & Subscribe */}
                <div className={styles.container2}>
                    <div className={styles.container3} >
                        <span className={styles.labelBtn}>1</span>
                        <span className={styles.label} >Sign Up</span>
                    </div>
                    <div className={styles.container3} >
                        <span className={styles.labelBtn}>2</span>
                        <span className={styles.label} >Subscribe</span>
                    </div>
                </div>

                {/* Title*/}

                <div className={styles.title} >Select your subcription plan</div>

                {/* Membership */}
                <div className={styles.membership}>
                    <form className={styles.membershipForm}>
                        {membershipDetails.map(renderMembership)}
                    </form>
                    <hr style={{ backgroundColor: '#bebebe', height: '1px', border: "0" }} />
                    <div className={styles.membershipTotal} >

                        {/* Membership Price */}

                        <div className={styles.membershipTotalCost} >
                            <span className={styles.membershipTotalCostLabel}>Subscription Fee</span>
                            <span className={styles.membershipTotalCostValue} >
                                ₹18,500
                            </span>
                        </div>

                        {/* Membership Discount */}
                        <div className={styles.membershipDiscountContainer} >
                            <div className={styles.membershipDiscountContainer1} >
                                <div className={styles.membershipDiscountContainer1Label}>Limited time offer</div>
                                <div className={styles.membershipTotalCostValue} >
                                    <span> - ₹</span>
                                    <span >{discount}</span>
                                </div>
                            </div>
                            <div className={styles.membershipDiscountContainer2} >
                                <ClockRunning fill="#DE4313" />
                                <span className={styles.membershipDiscountContainer2Label} >Offer valid till 25th March 2023 </span>
                            </div>
                        </div>

                        {/* Membership Discounted Price */}
                        <div className={styles.membershipTotalCost} >
                            <div className={styles.membershipTotalCostLabel}>
                                <span className={styles.membershipTotalLabel} > Total </span>
                                <span> (Incl. of 18% GST) </span>
                            </div>
                            <span className={styles.membershipPrice} >
                                ₹ {price}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Payment Button */}
                <div className={styles.container2}>
                    <MyButton
                        text="Cancel"
                        style={{
                            backgroundColor: "transparent",
                            color: "#F77171",
                            border: "1px solid #F77171",
                        }}
                        className={styles.myBtn}
                    />
                    <MyButton
                        text="proceed to pay"
                        style={{
                            backgroundColor: "#47BA68",
                            color: "#FFF",
                            border: "1px solid #47BA68",
                        }}
                        className={styles.myBtn}
                    />

                </div>

                {/* Razorpay Image*/}
                <div style={{ width: '100%' }}>
                    <img src={RazorpayImage} alt={"Razorpay Image"} />
                </div>
            </div>
        </div>
    )
}
