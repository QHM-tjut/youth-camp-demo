import React from 'react'
import { Button, Input } from "@arco-design/web-react";
import './Header.less'

const InputSearch = Input.Search;

export default function Header() {
    return (
        <div className='Header'>
            <div className='headerContainer'>
                <img className='logo' src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/qxy_logo.a3e171abe1e5724212eb4c6f3538f6c6.png~tplv-k3u1fbpfcp-5.image" alt="logo" />
                <div className="rightButtons">
                    <InputSearch
                        allowClear
                        placeholder='输入帖子标题、正文关键词'
                        className='spaceRight'
                        style={{ width: '240px' }}
                    />
                    <Button className='spaceRight' type="primary">注册</Button>
                    <Button>登录</Button>
                </div>
            </div>
        </div >
    )
}
