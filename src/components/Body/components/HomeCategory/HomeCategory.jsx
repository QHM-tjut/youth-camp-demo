import React from 'react'
import { Tabs, Typography } from '@arco-design/web-react';
import './HomeCategory.less'
import PageList from '../PageList/PageList';

const TabPane = Tabs.TabPane;

const weight = {
    fontSize: '1rem',
    fontWeight: '600'
}

export default function HomeCategory() {
    return (
        <div className='HomeCategory'>
            <Tabs defaultActiveTab='1'>
                <TabPane key='1' title='综合讨论'>
                    <Typography.Paragraph >
                        <PageList type="1" />
                    </Typography.Paragraph>
                </TabPane>
                <TabPane key='2' title='技术问答'>
                    <Typography.Paragraph >
                        <PageList type="2" />
                    </Typography.Paragraph>
                </TabPane>
                <TabPane key='3' title='笔记分享'>
                    <Typography.Paragraph >
                        <PageList type="3" />
                    </Typography.Paragraph>
                </TabPane>
                <TabPane key='4' title='好文精选'>
                    <Typography.Paragraph >
                        写不完了QAQ
                    </Typography.Paragraph>
                </TabPane>
                <TabPane key='5' title='视频课程'>
                    <Typography.Paragraph >
                        写不完了QAQ
                    </Typography.Paragraph>
                </TabPane>
            </Tabs>
        </div>
    )
}