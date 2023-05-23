import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import LogoImage from "../../assests/images/edyoda.png"
import { Chevron, Search, Menu } from "../../assests/svgs/index"
import MyButton from "../UI/MyButton.jsx"

export default function Navbar() {
    const [activeProgram, setActiveProgram] = useState(false)
    const [activeCourse, setActiveCourse] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)

    function programClickHandler() {
        setActiveProgram((prev) => !prev);
    }

    function courseClickHandler() {
        setActiveCourse((prev) => !prev);
    }

    function menuClickHandler() {
        setActiveMenu((prev) => !prev);
    }

    return (
        <div className={styles.nav}>
            <div className={styles.conatiner1}>
                <div className={styles.navItems1}>
                    <img src={LogoImage} className={styles.image} alt="logo" />
                    <div onClick={courseClickHandler} className={` ${styles.flexSpace} ${styles.mobilehide} `}>
                        <span>Courses</span>
                        <span
                            style={{ transform: `${activeCourse ? "rotate(180deg)" : "rotate(0deg)"}`, transition: "transform 0.2s ease-in-out" }}
                        ><Chevron /></span>
                    </div>
                    <div onClick={programClickHandler} className={`${styles.flexSpace} ${styles.mobilehide} `}>
                        <span>Programs</span>
                        <span
                            style={{ transform: `${activeProgram ? "rotate(180deg)" : "rotate(0deg)"}`, transition: "transform 0.2s ease-in-out" }}
                        >
                            <Chevron />
                        </span>
                    </div>

                </div>
            </div>
            <div className={styles.conatiner2}>
                <div className={styles.navItems2}>
                    <Search />

                    <div className={styles.mobilehide}>
                        Log in
                    </div>

                    <MyButton
                        style={{
                            background: "linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%)",
                            borderRadius: "52px",
                            color: "white",
                            border: "1px solid #0096FF",
                            padding: "8px 16px",
                        }}
                        text="Join Now"
                        className={styles.mobilehide}
                    />

                    <div className={` ${styles.menuContainer} ${styles.desktopHide}`}>
                        <Menu onClick={menuClickHandler} />
                        <div className={` ${styles.menuItems} ${activeMenu ? styles.menuActive : ""}`}>
                            <div onClick={courseClickHandler} className={` ${styles.flexSpace}`}>
                                <span style={{ color: "#fff" }}>Courses</span>
                                <span
                                    style={{ transform: `${activeCourse ? "rotate(180deg)" : "rotate(0deg)"}`, transition: "transform 0.2s ease-in-out" }}
                                ><Chevron fill="white" /></span>
                            </div>
                            <div onClick={programClickHandler} className={`${styles.flexSpace} `}>
                                <span style={{ color: "#fff" }}>Programs</span>
                                <span
                                    style={{ transform: `${activeProgram ? "rotate(180deg)" : "rotate(0deg)"}`, transition: "transform 0.2s ease-in-out" }}
                                >
                                    <Chevron fill="white" />
                                </span>
                            </div>
                            <div style={{ color: "#fff" }}>
                                Log in
                            </div>

                            <MyButton
                                style={{
                                    background: "linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%)",
                                    borderRadius: "52px",
                                    color: "white",
                                    border: "1px solid #0096FF",
                                    padding: "8px 16px",
                                }}
                                text="Join Now"
                            />

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
