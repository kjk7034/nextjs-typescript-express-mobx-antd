import { action, observable } from 'mobx'

class CounterStore {
    @observable number:number = 0
    @action increase = () => {
        this.number ++;
    }
    @action decrease = () => {
        this.number --;
    }
}

const counterStore = new CounterStore()
export type counterStoreType = typeof counterStore
export default counterStore