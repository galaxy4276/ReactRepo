import createReducer from "../common/createReducer";
import createItemLogic from "../common/createItemLogic";

const { add, remove, edit, reducer } = createItemLogic('friends');
export const addFriend = add;
export const removeFriend = remove;
export const editFriend = edit;
export default reducer;
