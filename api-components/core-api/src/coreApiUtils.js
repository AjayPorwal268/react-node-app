export const transformActionTypes = (actionTypeArr) => {
    return actionTypeArr.reduce((accu, value) => {
        accu[value] = value;
        return accu;
    }, {});
};

export const createActionToDispatch = (actionTYpe) => {
    return (resPayload) => {
        const action = {type : actionTYpe};
        if (resPayload) {
            action.payload = resPayload;
        }
        return action;
    }
}