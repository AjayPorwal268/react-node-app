import {coreApi} from "core-api"
import config from "./taskManagementConfig"

class taskManagementApi extends coreApi {
    constructor(store) {
        super(store, config.reduxSliceName);
    };

    createTask (taskObj) {
        this.triggerRestCall()
    }
}

export default taskManagementApi;