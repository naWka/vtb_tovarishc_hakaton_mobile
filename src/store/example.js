import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeAutoObservable } from 'mobx';
import { makePersistable, isPersisting } from 'mobx-persist-store';

class Example {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: 'Example', properties: ['counter'], storage: AsyncStorage });
  }

  
  getCounter = () => this.counter
  setToken = () => (this.counter += 1);

  get isPersisting() {
    return isPersisting(this);
  }
}

const newExample = new Example();
export default newExample;
