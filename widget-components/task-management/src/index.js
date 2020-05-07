import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import Widget from './widget/TaskManagement.connect';

ReactDOM.render(
    <Provider store={configureStore()}>
        <React.StrictMode>
            <Widget />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);