import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style';

class Topic extends Component{
    render(){
        const {topicList}=this.props;
        return (
            <TopicWrapper>
                {
                    topicList.map((item)=>{
                        return (
                            <TopicItem>
                                <img className='topic_img' src={item.imgUrl} />
                                {item.title}
                            </TopicItem>
                        );
                    })
                }
            </TopicWrapper>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        topicList:state.home.topicList
    }
}

export default connect(mapStateToProps,null)(Topic);