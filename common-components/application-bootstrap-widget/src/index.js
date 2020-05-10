import createStore from "./store"

export {default} from "./apiInstance";
export {createStore};


window.store = createStore;

console.log("test widget")