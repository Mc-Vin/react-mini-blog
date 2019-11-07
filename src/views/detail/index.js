import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends Component{
    render(){
        const {detailInfo}=this.props;
        console.log(detailInfo);
        return (
            <DetailWrapper>
                <Header>{detailInfo.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: detailInfo.content}}>
                </Content>
            </DetailWrapper>
        );
    }

    componentDidMount(){
        const {initDetailInfo}=this.props;
        initDetailInfo();
    }
}


const mapStateToProps=(state)=>{
    return {
        detailInfo:state.detail.detailInfo
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        initDetailInfo(){
            const action=actionCreators.initDetailInfoAction();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);