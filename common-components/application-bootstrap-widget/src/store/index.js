import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as storage from 'redux-storage';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import createEngine from 'redux-storage-engine-localstorage';

export default function configureStore(initialState={}) {
    const reducer = storage.reducer(combineReducers(reducers));
    const engine = createEngine('my-save-key');
    const middleware = storage.createMiddleware(engine);
    console.log(middleware)
    const middlewareList = [middleware]
    //const createStoreWithMiddleware = applyMiddleware(...middlewareList)(createStore);
    const load = storage.createLoader(engine);
    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk, ...middlewareList),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));
    window.store = store;
    return store;
    //const store = createStoreWithMiddleware(reducer);
    //return store;
}