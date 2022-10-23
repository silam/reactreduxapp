import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {

  // access data inside the store
  const account = useSelector((state)=> state.account)

  //  use to bind all action creators
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(
    actionCreators, dispatch
  )
  return (
    <div className="App">
      <h2>{account}</h2>
      <button onClick={()=>depositMoney(100)}>Deposit</button>
      <button onClick={()=>withdrawMoney(10)}>Withdraw</button>
    </div>
  );
}

export default App;



        
    //    Uncaught Error: Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.
    // at dispatch (redux.js:275:1)
    // at redux.js:578:1
    // at onClick (App.js:21:1)
    // at HTMLUnknownElement.callCallback (react-dom.development.js:4164:1)
    // at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:1)
    // at invokeGuardedCallback (react-dom.development.js:4277:1)
    // at invokeGuardedCallbackAndCatchFirstError (react-dom.development.js:4291:1)
    // at executeDispatch (react-dom.development.js:9041:1)
    // at processDispatchQueueItemsInOrder (react-dom.development.js:9073:1)
    // at processDispatchQueue (react-dom.development.js:9086:1)
