import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
  collapsed: true,
});

// export default createStore(rootReducer, applyMiddleware(logger));

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(logger));
  let persistor = persistStore(store);
  return { store, persistor };
};
