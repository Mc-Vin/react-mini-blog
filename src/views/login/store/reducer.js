import {actionTypes} from './index';

const defaultState={
    login:false
}

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.GHANGE_LOGIN_VALUE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.login=true;
        return newState;
    }
    if(action.type===actionTypes.LOG_OUT){
        const newState=JSON.parse(JSON.stringify(state));
        newState.login=false;
        return newState;
    }
    return state;
}