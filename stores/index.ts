import CounterStore from './counter'

let store = null

const Stores = ()=> {
  return {
    counter : CounterStore
  }
}
export type storesType = typeof Stores

export function initializeStore (isServer) {
  if (isServer) {
    return Stores()
  } else {
    if (store === null) {
      store = Stores()
    }
    return store
  }
}
