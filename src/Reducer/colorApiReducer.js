import * as TypeOfColor from "../Action/colorAction/type";

// #000000 is black
const initState = {
    color: "#000000",
    fetching: false,
    error: null
}
export default function(state=initState, {type, payload}){
    switch (type){
        case TypeOfColor.GET_RANDOM_COLOR_REQUEST:
            return{
                ...state,
                fetching: true,
                error: null,
            }
        case TypeOfColor.GET_RANDOM_COLOR_SUCCESS:
            return{
                ...state,
                color:payload,
                fetching: false,
                error: null,
            }
        case TypeOfColor.GET_RANDOM_COLOR_FAILURE:
            return{
                ...state,
                error: payload,
                fetching: false,
            }
        default:
            return state;
    }
}