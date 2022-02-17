import React from 'react'
import './AnnouncementItem.less'

export default function AnnouncementItem(props) {
    const { title, data } = props
    return (
        <div className='AnnouncementItem'>
            <span className='title'>{title}</span>
            <span className='date'>{data}</span>
        </div>
    )
}
