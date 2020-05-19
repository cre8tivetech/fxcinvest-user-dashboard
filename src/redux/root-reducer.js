import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import uiReducer from "./ui/ui.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ['cart'],
};

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
