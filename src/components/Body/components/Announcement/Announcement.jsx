import React, { useState, useEffect } from 'react';
import { Card, Link } from '@arco-design/web-react';
import './Announcement.less'
import AnnouncementItem from './AnnouncementItem/AnnouncementItem';
import axios from 'axios';

export default function Announcement() {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.post('content_api/v1/post/list_by_category?aid=2608&service_id=1', {
            category_id: "6950604566144483365",
            sift_type: 1,
            page_size: 3,
            page_index: 1
        }).then(function (response) {
            const { data } = response.data
            setDatas(data)
            console.log(data)
        }).catch(function (error) {
            console.log(error);
        });
    }, [])

    return (
        <div className='Announcement'>
            <Card style={{ border: 'none', width: '300px' }} title='公告栏' extra={<Link>更多</Link>}>
                {datas.map((item) => {
                    const { post_id, title, ctime } = item
                    return (
                        <a href={`https://forum.juejin.cn/youthcamp/post/${post_id}`}>
                            <AnnouncementItem title={title} data={ctime} />
                        </a>
                    )
                })}
            </Card>
        </div >
    )
}
