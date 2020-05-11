import AxiosBaseService from "./axiosUtils";

class CommerceBaseService {
    constructor () {
        this.fetchAllTask = this.fetchAllTask.bind(this);
    }

    fetchAllTask ({config}) {
        return AxiosBaseService.getRequest('/', config);
    }
}

export default new CommerceBaseService();
export { CommerceBaseService as CommerceServiceClass}