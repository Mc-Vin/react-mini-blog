import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../views/login/store';
import {Link,withRouter,Redirect} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchItem,
    SearchInfo,
    Addition,
    Button
} from './style';

class Header extends Component{
    constructor(props){
        super(props);
        this.spinRef=React.createRef();
    }
    render(){
        const {focus,infoList,handleInputFocus,handleInputBlur,login,logout}=this.props;
            return (
                <HeaderWrapper>
                    <Link to='/'>
                        <Logo></Logo>
                    </Link>
                    <Nav>
                        <NavItem className='fl active'>首页</NavItem>
                        <NavItem className='fl'>下载App</NavItem>
                        <SearchItem>
                        <CSSTransition
                            in={focus}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch 
                                onFocus={()=>{handleInputFocus(infoList)}}
                                onBlur={handleInputBlur}
                                className={focus?'focus':''}
                            >
                            </NavSearch>
                        </CSSTransition>
                            <i className={focus?'iconfont focus':'iconfont'}>&#xe62b;</i>
                            {this.initInfoList()}
                        </SearchItem>
                        
                        <NavItem className='fr'><i className="iconfont">&#xe636;</i></NavItem>
                        {
                            login?<NavItem className='fr' onClick={logout}>Logout</NavItem>:<NavItem className='fr' onClick={()=>{this.props.history.push('/login')}}>Login</NavItem>
                        }
                    </Nav>
                    <Addition>
                        <Button className='login'>Register</Button>
                        <Button className='write' onClick={()=>{this.props.history.push('/write')}}>
                            <i className="iconfont">&#xe615;</i>
                            Article
                        </Button>
                    </Addition>
                </HeaderWrapper>
            );
    }

    initInfoList(){
        const {focus,mouseIn,infoList,totalPage,page,handleMouseEnter,handleMouseLeave,handlePageChange}=this.props;

        const getInfoList=()=>{
            const newInfoList=[];
            for(let i=(page-1)*10;i<page*10;i++){
                newInfoList.push(<li key={infoList[i]}><a>{infoList[i]}</a></li>);
            }
            return newInfoList;
        }

        if(focus||mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <p className='hot_search'>热门搜索
                        <span className='change' onClick={()=>{handlePageChange(this.spinRef)}}>
                            <i className='spin iconfont' ref={this.spinRef}>&#xe6e1;</i>
                            <i className='change-another'>换一批</i>
                        </span>
                    </p>
                    <ul>
                        {   
                            getInfoList()
                        }
                    </ul>
                </SearchInfo>
            );
        }
    }
  
}

const mapStateToProps=(state)=>{
    return {
        focus:state.header.focus,
        mouseIn:state.header.mouseIn,
        infoList:state.header.infoList,
        page:state.header.page,
        totalPage:state.header.totalPage,
        login:state.login.login
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(list){
            if(list.length==0){
                const getInfoList=actionCreators.handleInfoListAction();
                dispatch(getInfoList);
            }
            const handleInputFocus=actionCreators.handleInputFocusAction();
            dispatch(handleInputFocus);
           
        },

        handleInputBlur(){
            const action=actionCreators.handleInputBlurAction();
            dispatch(action);
        },

        handleMouseEnter(){
            const action=actionCreators.handleMouseEnterAction();
            dispatch(action);
        },

        handleMouseLeave(){
            const action=actionCreators.handleMouseLeaveAction();
            dispatch(action);
        },

        handlePageChange(spinRef){
            //获取字符串中的数值
            let initialAngle = +spinRef.current.style.transform.replace(/[^0-9]/ig, '');
            spinRef.current.style.transform=`rotate(${initialAngle+360}deg)`;
            const action=actionCreators.handlePageChangeAction();
            dispatch(action);
        },

        logout(){
            const action=loginActionCreators.logout();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));