import createStore from "../store";


const initiateAPI = (ApiClassRef) => {
    reduxStore = window.store || createStore();
    return ApiClassRef(reduxStore);
}

export default initiateAPI;