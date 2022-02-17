import { Divider, Space } from '@arco-design/web-react'
import { IconEye, IconThumbUp, IconMessage } from '@arco-design/web-react/icon';
import React, { useEffect } from 'react'

import './ListItem.less'

export default function ListItem(props) {
    const { post_id, title, user_name, view_count, digg_count, respond_and_comment_count, ctime, mtime } = props.data
    function selectDay(ctime, mtime) {
        var nTime = mtime - ctime;
        var day = nTime / 86400000;
        return day
    }
    return (
        <div className='ListItem'>
            <div className="header">
                {user_name}
                <Divider type="vertical" />
                <span>1 小时前</span>
            </div>
            <a href={`https://forum.juejin.cn/youthcamp/post/${post_id}`}>
                <h3>{title}</h3>
            </a>
            <Space size="large">
                <div>
                    <IconEye />
                    <span> </span>
                    {view_count}
                </div>
                <div>
                    <IconThumbUp />
                    <span> </span>
                    {digg_count}
                </div>
                <div>
                    <IconMessage />
                    <span> </span>
                    {respond_and_comment_count}
                </div>
            </Space>
            <Divider />
        </div>
    )
}
