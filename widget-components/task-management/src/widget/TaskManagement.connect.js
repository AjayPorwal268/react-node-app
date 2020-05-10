import {connect} from 'react-redux';
import TaskManagementApi from 'task-management-api';
import initiateAPI from 'application-bootstrap-widget'
import TaskManagement from './TaskManagement'

const taskManagementApi = initiateAPI(TaskManagementApi);

export const mapStateToProps = (state) => {
    return {

    };
};

export const mapStateToDispatch = (dispatch) => {
    return {
        createTask: () => {
            taskManagementApi.createTask({name:"Task1"});
        }
    };
};

const ConnectedWidget = connect(mapStateToProps,mapStateToDispatch)(TaskManagement);

export default ConnectedWidget;