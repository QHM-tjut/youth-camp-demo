import React from 'react'

const style = {
    padding: '16px 20px 16px 16px',
    backgroundColor: '#fff',
    boxSizing: 'border-box'
}

export default function Card(props) {
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}
