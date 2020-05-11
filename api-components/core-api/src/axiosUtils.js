import axios from "axios";

class AxiosService {
    constructor() {
        this.serviceRequest = axios.create({
            baseURL: "https://randomuser.me/api/",
            responseType: "json"
        });
        this.getRequest = this.getRequest.bind(this);
    }

    get ajaxCall()  {
        return {
            get: this.getRequest,
        }
    }

    getRequest(
        url, config
    ) {
        return this.serviceRequest.get(url, config).then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    }
};

const AxiosBaseService = new AxiosService();
export default AxiosBaseService;