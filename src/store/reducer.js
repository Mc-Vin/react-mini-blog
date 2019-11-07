import {combineReducers} from 'redux';
import {headerReducer} from '../common/header/store';
import {homeReducer} from '../views/home/store';
import {detailReducer} from '../views/detail/store';
import {loginReducer} from '../views/login/store';


const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer,
})

export default reducer;