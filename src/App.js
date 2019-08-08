import React from 'react';
import './App.css';
import { createStore } from 'redux';

const incrementFunc = (valor = 1) => ({
  type: 'INCREMENT',
  valor
})

const decrementFunc = (valor = 1) => ({
  type: 'DECREMENT',
  valor
})

const resetFunc = () => ({
  type: 'RESET'
})

const reducer = ( state = 0, action ) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.valor
    case 'DECREMENT':
      return state - action.valor
    case 'RESET':
      return 0
    default:
      return state.counter;
  }
}

const store = createStore(reducer)

store.dispatch(incrementFunc())
store.dispatch(incrementFunc())
store.dispatch(incrementFunc())
store.dispatch(decrementFunc(5))
store.dispatch(resetFunc())

console.log(store.getState())

function App() {
  return (
    <div className="App">
      <h1>Teste</h1>
    </div>
  );
}

export default App;
