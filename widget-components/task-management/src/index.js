import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createStore from 'application-bootstrap-widget';
import Widget from './widget/TaskManagement.connect';

ReactDOM.render(
    <Provider store={createStore()}>
        <React.StrictMode>
            <Widget />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);