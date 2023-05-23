import React from 'react'

let defaultStyle = {
    backgroundColor: "#FFFFFF",
    color: "#000",
    borderRadius: "8px",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "19px",
    cursor: "pointer",
    textTransform: "uppercase"
}

export default function MyButton(props) {
    let style = {
        ...defaultStyle,
        ...props.style
    }
    return (
        <button style={style} className={props.className}>
            {props.text}
        </button>
    )
}
