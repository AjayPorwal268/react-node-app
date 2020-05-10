import React ,{Component} from 'react';
import propType from 'prop-types';

class TaskManagementComponent extends Component {
  
   componentDidMount() {
     console.log("in task componentDidMount")
     const {createTask} = this.props;
     createTask();
   }

    render() {
      return (
        <span>This is task component</span>
      );
    }
  }
  export default TaskManagementComponent;
    