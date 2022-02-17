import { Divider } from '@arco-design/web-react'
import Avatar from '@arco-design/web-react/es/Avatar/avatar'
import React from 'react'
import Card from '../../../Card/Card'
import './CommunityCard.less'

export default function CommunityCard() {
    return (
        <div className='CommunityCard'>
            <Card>
                <div className="header">
                    <div className="userInfo">
                        <Avatar>
                            <img alt='avatar' src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/home_youth_logo.9406d07861ad6c2e5e096c20c4514ad1.png~tplv-k3u1fbpfcp-5.image' />
                        </Avatar>
                        <div className='space'></div>
                        <span className='userName'>
                            青训营社区
                        </span>
                    </div>
                    <p className='ContentText'>一个专属于大学生的技术交流平台，助力学生个人成长与进步。</p>
                    <p className='ContentText'>在这里，不仅可以畅谈学习心得，也欢迎讨论最顶尖、最前沿的技术，关注互联网的发展。</p>
                </div>
                <Divider />
                <div className="body">
                    <div className='center'>
                        <div>主题帖</div>
                        <div className='weight'>1778</div>
                    </div>
                    <Divider type="vertical" />
                    <div className='center'>
                        <div>回帖数</div>
                        <div className='weight'>1778</div>
                    </div>
                </div>
            </Card >
        </div >
    )
}
