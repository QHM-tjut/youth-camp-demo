import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListItem from './ListItem/ListItem'
import './PageList.less'

const DiscussionPara = {
    category_id: "6950604566068985897",
    sift_type: 3,
    page_size: 50,
    page_index: 1
}

const QandA = {
    category_id: "6950604566098346019",
    sift_type: 3,
    page_size: 50,
    page_index: 1
}

const Note = {
    category_id: "6950604566144483364",
    sift_type: 3,
    page_size: 50,
    page_index: 1
}

export default function PageList(props) {
    const { type } = props
    const [datas, setdatas] = useState([])
    var pama;
    if (type == 1) {
        pama = DiscussionPara
    } else if (type == 2) {
        pama = QandA
    } else if (type == 3) {
        pama = Note
    }
    useEffect(() => {
        axios.post('content_api/v1/post/list_by_category?aid=2608&service_id=1', pama).then(function (response) {
            console.log(response);
            setdatas(response.data.data)
            console.log(datas)
        }).catch(function (error) {
            console.log(error);
        });
    }, [])

    return (
        <div className='PageList'>
            {datas.map((item, index) => {
                return <ListItem data={item} key={index} />
            })}
        </div>
    )
}
