import App, {Container} from 'next/app'
import React from 'react'
import withMobxStore from '../lib/with-mobx-store'
import { Provider } from 'mobx-react'
import {storesType} from '../stores'

interface IProps {
  mobxStore: storesType
}

class MyApp extends App<IProps> {
  componentDidCatch(error, errorInfo) {
    console.log('CUSTOM ERROR HANDLING', error)
    super.componentDidCatch(error, errorInfo)
  }
  render () {
    const {Component, pageProps, mobxStore} = this.props
    return (
      <Container>
        <Provider {...mobxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withMobxStore(MyApp)