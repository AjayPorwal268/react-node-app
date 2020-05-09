import {createActionToDispatch} from "./coreApiUtils";

class coreApi {
    constructor(store, reduxSliceName) {
        this.store = store;
        this.reduxSlice = reduxSliceName
    };

    dispatchAction ({actionTYpe, resPayload}) {
        const action = createActionToDispatch(actionTYpe);
        this.store.dispatchAction(action(resPayload));
    }

    getState () {
        const state = this.store.getState();
        
        if (this.reduxSlice) {
            return state[this.reduxSlice];
        }

        return state;
    }

    async triggerRestCall (apiToCall, payload, actionType) {
        const initiateRequestType = `${actionType}_REQUEST`
        const initiatesuccessType = `${actionType}_SUCCESS`;
        const initiatefailureType = `${actionType}_ERROR`;

        this.dispatchAction(initiateRequestType);
        try {
            const res = await apiToCall(payload);
            this.dispatchAction(initiatesuccessType);
            return res;
        } catch(e) {
            this.dispatchAction(initiatefailureType, res);
            throw e;
        }
    }
}

export default coreApi;