import React from 'react'
import { connect } from "react-redux";
import * as actionFromColorAction from '../Action/colorAction/colorAction'

function LoadingScreen(){
    return <h1>Loading....</h1>
}

function ErrorScreen({ error }){
    return <h1>{error.message}</h1>
}

function content(loading, error, color){
    if (loading)
        return <LoadingScreen />
    else if (error)
        return <ErrorScreen error={error} />
    else
        return <h1 style={{ color: color} }>{color}</h1>
}

function ButtonColor({ color, colorChangeFun, loading, error }){
    return(
        <div>
            {content(loading, error, color)}
            <button onClick={colorChangeFun} disabled={loading}>Get Color!</button>
        </div>
    );
}

const mapStateToPros = (state) =>({
    color: state.colorApiReducer.color,
    loading: state.colorApiReducer.fetching,
    error: state.colorApiReducer.error,
})

const mapStateToAction = (dispatch) =>({
    colorChangeFun : () => dispatch(actionFromColorAction.getNewColor())
})

export default connect(mapStateToPros, mapStateToAction)(ButtonColor)