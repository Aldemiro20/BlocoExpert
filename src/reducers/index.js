import {combineReducers} from "redux";
import NoteReducer from "./NoteReducers";

export default combineReducers({
notes:NoteReducer
});