import createStore from "../store";


const initiateAPI = (ApiClassRef) => {
    const reduxStore = window.store || createStore();
    console.log(ApiClassRef)
    if (!ApiClassRef) {
       console.error("missing API instance");
       return null;
    }
    return new ApiClassRef(reduxStore);
}

export default initiateAPI;