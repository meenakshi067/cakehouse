
export function meenakshi (state = {},{type,payload}){ 
    console.log("action to be performed")
    switch(type){
        case "LOGIN" :{
         state = {...state}
         state["isloggedin"] = true 
         
         return state
        }
        case "order":{
            state={...state}
            state["orderplace"]=payload
            return state
        }
        case "OrderList":{
            state={...state}
            state["Myorder"]=payload
            return state
        }
 
 
        default : return state
    }
 }