import './App.css';
import React from 'react';
import {createStore} from 'redux'
function App() {
  return (
    <>

    </>    
  );
}

export default App;


// Actions
// the only way your application can interact with store
// carry some information from your app to the redux store
// plain js objects
// have a 'type' property that indicates the type of action being performed
// the 'type' property is typically defined as string constants 
const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

// { previosState, action} => newState

const initialState = {
  numofcakes : 10
}

const reducer = (state = initialState, action ) => {
  switch(action.type){
    case BUY_CAKE : return {
      ...state,
      numofcakes: state.numofcakes - 1
    }
    default : return state
  }
}

// redux store
/*
  one store for the entire application 
  Responsibilities - 
  1. Holds application state
  2. Allows access to state via getState()
  3. Allows state to be updated via dispatch(action)
  4. Registers listeners via subscribe(listener) // it takes function as an argument
  5. Handles unregistering of listeners via the function returned by subscribe(listener) 
*/

const store = createStore(reducer)
console.log("Initial state", store.getState()); // Initial state { numofCakes: 10}

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
})

store.dispatch(buyCake()); // Updated state { numofCakes: 9}
store.dispatch(buyCake()); // Updated state { numofCakes: 8}
store.dispatch(buyCake()); // Updated state { numofCakes: 7}

unsubscribe();


