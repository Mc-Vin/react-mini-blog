import * as actionTypes from './actionTypes';
import axios from 'axios';

const handleInfoListInitAction=(data)=>{
    return {
        type:actionTypes.INFOLIST_INIT,
        infoList:data,
        totalPage:Math.floor(data.length/10)
    }
}

export const handleInputFocusAction=()=>{
    return {
        type:actionTypes.INPUT_FOCUS
    }
}

export const handleInputBlurAction=()=>{
    return {
        type:actionTypes.INPUT_BLUR
    }
}

export const handleInfoListAction=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json')
        .then(response=>{
            const action=handleInfoListInitAction(response.data.data);
            dispatch(action);
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const handleMouseEnterAction=()=>{
    return {
        type:actionTypes.MOUSE_ENTER
    }
}

export const handleMouseLeaveAction=()=>{
    return {
        type:actionTypes.MOUSE_LEAVE
    }
}

export const handlePageChangeAction=()=>{
    return {
        type:actionTypes.PAGE_CHANGE
    }
}
