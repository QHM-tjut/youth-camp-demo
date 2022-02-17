import React from 'react'
import './Body.less'
import { Space } from '@arco-design/web-react';
import CommunityCard from './components/CommunityCard/CommunityCard';
import Announcement from './components/Announcement/Announcement';
import HomeCategory from './components/HomeCategory/HomeCategory';
import Card from '../Card/Card';

export default function Body() {
    return (
        <div className='Body'>
            <div className="bodyContainer">
                <div className="left">
                    <Space direction='vertical' size={"medium"}>
                        <div className='banner-card'>
                            <a href="https://forum.juejin.cn/youthcamp/post/7043628062574903309">
                                <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/qxy_main_banner.2b772d8a43c7e914019023e21b2619ce.jpeg~tplv-k3u1fbpfcp-5.image" alt="banner" />
                            </a>
                        </div>
                        <HomeCategory />
                    </Space>
                </div>
                <div className="right">
                    <Space direction='vertical' size={"medium"}>
                        <CommunityCard />
                        <Announcement />
                        <a href="https://juejin.cn/extension">
                            <img style={{ width: '100%' }} src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/qxy_aside_banner.fb298b9750406bab6d9ae79b6347c9fb.png~tplv-k3u1fbpfcp-5.image" alt="browser" />
                        </a>
                    </Space>
                </div>
            </div>

        </div>
    )
}
