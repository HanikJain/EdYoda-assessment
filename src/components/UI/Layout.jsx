import React from 'react'
import styles from "./Layout.module.css";


export default function Layout(props) {
    let style = {
        ...props.style
    }

    return (
        <div style={style} className={styles.layout}>
            {props.children}
        </div>
    )
}
