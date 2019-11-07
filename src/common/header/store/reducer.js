import * as actionTypes from './actionTypes';

const defaultState={
    focus:false,
    mouseIn:false,
    page:1,
    totalPage:1,
    infoList:[]
}

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.INPUT_FOCUS){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focus=true;
        return newState;
    }
    if(action.type===actionTypes.INPUT_BLUR){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focus=false;
        return newState;
    }
    if(action.type===actionTypes.INFOLIST_INIT){
        const newState=JSON.parse(JSON.stringify(state));
        newState.infoList=action.infoList;
        // newState.page=action.page;
        newState.totalPage=action.totalPage;
        return newState;
    }
    if(action.type===actionTypes.MOUSE_ENTER){
        const newState=JSON.parse(JSON.stringify(state));
        newState.mouseIn=true;
        return newState;
    }
    if(action.type===actionTypes.MOUSE_LEAVE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.mouseIn=false;
        return newState;
    }
    if(action.type===actionTypes.PAGE_CHANGE){
        const newState=JSON.parse(JSON.stringify(state));
        if(newState.page<newState.totalPage){
            newState.page++;
        }else{
            newState.page=1;
        }
        return newState;
    }
    return state;
}