import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

interface ILayout {
    title?: string,
    children: React.ReactNode
}

const LayoutComponent = ({ children, title}: ILayout) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
      <h1><Link href='/'><a>QnA</a></Link></h1>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1">
          <Link href='/question'><a>question</a></Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href='/tag'><a>tag</a></Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href='/user'><a>user</a></Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2018 Created by Wise
      </Footer>
    </Layout>
  </Layout>
)

export default LayoutComponent