import * as TypeOfColor from './type'
import axios from "axios"

export function getNewColor(){
    return(dispatch)=>{
        // display loading screen
        dispatch({
            type: TypeOfColor.GET_RANDOM_COLOR_REQUEST
        })
        return axios.get("http://www.colr.org/json/color/random")
            .then((response)=>{
                // return dispatch(showColor("#"+response.data.new_color));

                // get data from response
                const { data } = response;
                // dispatch success function
                return dispatch({
                    type: TypeOfColor.GET_RANDOM_COLOR_SUCCESS,
                    payload: `#${data.new_color}`
                })
            })
            .catch(error => {
                // dispatch error function
                return dispatch({
                    type: TypeOfColor.GET_RANDOM_COLOR_FAILURE,
                    payload: error
                })
            })
    }
}

// export function showColor(color){
//     return{
//         type: TypeOfColor.GET_API_FOR_COLOR,
//         payload: color
//     }
// }

