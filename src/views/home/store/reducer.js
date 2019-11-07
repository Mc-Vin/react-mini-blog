import * as actionTypes from './actionTypes';

const defaultState={
    topicList:[],
    articleList:[],
    recommendList: [],
    listPage:1
}

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.GET_HOME_DATA){
        const newState=JSON.parse(JSON.stringify(state));
        newState.topicList=action.topicList;
        newState.articleList=action.articleList;
        newState.recommendList=action.recommendList;
        return newState;
    }
    if(action.type===actionTypes.GET_MORE_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        newState.articleList=newState.articleList.concat(action.data);
        newState.listPage++;
        return newState;
    }
    return state;
}