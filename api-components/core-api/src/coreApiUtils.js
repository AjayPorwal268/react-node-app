export const transformActionTypes = (actionTypeArr) => {
    return actionTypeArr.reduce((accu, value) => {
        acc[value] = value;
        return acc;
    }, {});
};

export const createActionToDispatch = (actionTYpe) => {
    return (resPayload) => {
        const action = {type : actionTYpe};
        if (res) {
            action.payload = resPayload;
        }
        return action;
    }
}