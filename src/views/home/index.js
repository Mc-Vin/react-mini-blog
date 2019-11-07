import React,{Component} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner_img' src='//upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }

    componentDidMount(){
        this.props.initHomeData();
    }

}



const mapDispathchToProps=(dispatch)=>{
    return {
        initHomeData(){
            const action=actionCreators.initHomeDataAction();
            dispatch(action);
        }
    }
}

export default connect(null,mapDispathchToProps)(Home);