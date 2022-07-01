import { combineReducers } from "redux";

import { positionReducer } from "./positions/position-reducer";

const rootReducer = combineReducers({
    positions: positionReducer,
});

export { rootReducer };
