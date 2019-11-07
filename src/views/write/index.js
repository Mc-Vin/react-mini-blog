import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends Component{
    render(){
        const {login} =this.props;
        if(login){
            return (
                <div>Write a article</div>
            );
        }else{
            return <Redirect to ='/login' />
        }
     
    }
}

const mapStateToProps=(state)=>{
    return {
        login:state.login.login
    }
}

export default connect(mapStateToProps,null)(Write)

