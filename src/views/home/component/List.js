import React,{Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {
    ListWrapper,
    ListItem,
    LoadMore
} from '../style';
import { actionCreators } from '../store';


class List extends Component{
    constructor(props){
        super(props);
        this.goToDeatil=this.goToDeatil.bind(this);
    }

    goToDeatil(id){
        this.props.history.push(`/detail/${id}`);
    }

    render(){
        const  { articleList, loadMoreList,listPage}=this.props;
        return (
            <ListWrapper>
                {
                    articleList.map((item)=>{
                        return (
                            <Link to={`/detail/${item.id}`}>
                                <ListItem  key={item.id} onClick={()=>{this.goToDeatil(item.id)}}>
                                    <div className='wrapper'>
                                        <h1 className='list_header'>{item.title}</h1>
                                        <p className='list_text'>
                                            {item.desc}
                                        </p>
                                        <div className='list_footer'>
                                            <i className='author'>&#xe636;</i>朋友是老酒
                                            <i className='comment'>&#xe62b;</i>286
                                            <i className='like'>&#xe615;</i>333
                                        </div>
                                    </div>
                                    <img className='list_img' alt='' src={item.imgUrl} />
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={(listPage)=>{loadMoreList(listPage)}}>Loading More</LoadMore>
            </ListWrapper>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        articleList:state.home.articleList,
        listPage:state.home.listPage
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        loadMoreList(page){
            const action=actionCreators.loadMoreListAction(page);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(List));