import axios from 'axios';
import * as actionTypes from './actionTypes';

//获取首页所有数据
const getHomeDataAction=(data)=>{
    return {
        type:actionTypes.GET_HOME_DATA,
        topicList:data.topicList,
        articleList:data.articleList,
        recommendList:data.recommendList,
    }
}

export const initHomeDataAction=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json')
        .then(response=>{
            const action=getHomeDataAction(response.data.data);
            dispatch(action);
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

//获取加载更多的数据
const getLoadMoreList=(data,page)=>{
    return {
        type:actionTypes.GET_MORE_LIST,
        data:data,
        page:page
    }
}

export const loadMoreListAction=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json')
        .then(response=>{
            const action=getLoadMoreList(response.data.data,page);
            dispatch(action);
        })
        .catch(err=>{
            console.log(err);
        })
    }
}