import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagaMiddleware from '../middleware/saga';
import reducers from '../reducers';

export default function configure() {
  const createStoreWithMiddleware = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );

  return createStoreWithMiddleware;
}
