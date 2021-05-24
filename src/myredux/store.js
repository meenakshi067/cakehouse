import {createStore} from "redux"
import {meenakshi} from "./reducer"


var store  = createStore(meenakshi,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.dispatch({
//     type:"LOGIN"
// })

store.dispatch({
    type:'Order'
})
store.dispatch({
    type:'OrderList'
})


console.log("after dispatch store ka state" , store.getState())

export default store


