import React from 'react'
import Layout from '../components/Layout';
import { observer, inject } from 'mobx-react';
import {counterStoreType} from './../stores/counter'
import { Button } from 'antd';
import '../styles/index.less'

interface IProps {
  counter?: counterStoreType
}

@inject("counter")
@observer
export default class Home extends React.Component<IProps> {
  render(){
    const {number, increase, decrease} = this.props.counter
    return (
      <Layout title="Home">
        <h1>Home</h1>
        <p>Mobx Store Counter : {number}</p>
        <p>
          ant.design Buttons : 
          <Button type="primary" shape="circle" icon="plus" size="large" onClick={increase} />
          <Button type="primary" shape="circle" icon="minus" size="large" onClick={decrease} />
        </p>
        
      </Layout>
    )
  }
}