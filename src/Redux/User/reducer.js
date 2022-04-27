
import {ADD_AUTH, ADD_USER, ADD_CART, REM_DISH} from "./action";

const initState = {
    isAuth: JSON.parse(localStorage.getItem("auth")) || "No",
    userLogged: JSON.parse(localStorage.getItem("user")) || {}
}

export const loginReducer = (store = initState, {type, payload}) => {
    switch (type) {
        case ADD_AUTH:
                localStorage.setItem("auth", JSON.stringify("Yes"));
                return {...store, isAuth: JSON.parse(localStorage.getItem("auth"))}
        case ADD_USER: 
        localStorage.setItem("user", JSON.stringify({...payload, password: "XXXXXXX"}));
        return {...store, userLogged: JSON.parse(localStorage.getItem("user"))};
        case ADD_CART: 
        //    console.log(payload)
           let sub = store.userLogged;
           sub.cart.push(payload);
           console.log("cart of user", sub);
          localStorage.setItem("user", JSON.stringify({...sub}));
          return {...store, userLogged: JSON.parse(localStorage.getItem("user"))}

         case REM_DISH: 
          console.log(payload)
             localStorage.setItem("user", JSON.stringify({...store.userLogged}));
             return {...store, userLogged: JSON.parse(localStorage.getItem("user"))}
        default:
            return store;
    }
}