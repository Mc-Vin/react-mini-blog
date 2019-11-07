import axios from 'axios';
import {actionTypes} from './index';

const changeLoginValueAction=()=>{
    return {
        type:actionTypes.GHANGE_LOGIN_VALUE,
        value:true
    }
}

export const submitInfoAction=(account,password)=>{
    return (dispatch)=>{
        axios.get(`/api/login.json?account=${account}&password=${password}`)
        .then(res=>{
            const data=res.data.data;
            if(data){
                const action=changeLoginValueAction();
                dispatch(action);
            }else{
                alert('登录失败')
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const logout=()=>{
    return {
        type:actionTypes.LOG_OUT,
        value:false
    }
}