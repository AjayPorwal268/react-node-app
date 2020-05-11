import {coreApi, commerceService} from "core-api"
import config from "./taskManagementConfig"

class taskManagementApi extends coreApi {
    constructor(store) {
        super(store, config.reduxSliceName);
    };

    createTask () {
        this.triggerRestCall(commerceService.fetchAllTask, {
            results: 1,
            inc: 'name,email,picture'
        });
    }
}

export default taskManagementApi;