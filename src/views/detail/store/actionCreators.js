import axios from 'axios';
import * as actionTypes from './actionTypes';


const getDetailInfoAction=(data)=>{
    return {
        type:actionTypes.GET_DETAIL_INFO,
        data
    }
}

export const initDetailInfoAction=(id)=>{
    return (dispatch)=>{
        axios.get(`/api/detail.json`)
        .then(response=>{
            const action = getDetailInfoAction(response.data.data);
            dispatch(action);
        })
        .catch(err=>{
            console.log(err);
        })
    }
}