import {connect} from 'react-redux';
import TaskManagement from './TaskManagement'

export const mapStateToProps = (state) => {
    return {

    };
};

export const mapStateToDispatch = (dispatch) => {
    return {

    };
};

const ConnectedWidget = connect(mapStateToProps,mapStateToDispatch)(TaskManagement);

export default ConnectedWidget;