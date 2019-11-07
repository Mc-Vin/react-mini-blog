import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';


class Login extends PureComponent {
	constructor(props){
		super(props);
		this.account=React.createRef();
		this.password=React.createRef();
	}
	render() {
		const {submitInfo,login}=this.props;
		if(!login){
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' type='text' ref={this.account} />
						<Input placeholder='密码' type='password'ref={this.password} />
						<Button onClick={()=>{submitInfo(this.account.current,this.password.current)}}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else{
			return <Redirect to='/' />
		}
	}
}

const mapStateToProps=(state)=>{
	return {
		login:state.login.login
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		submitInfo(account,password){
			const action=actionCreators.submitInfoAction(account,password);
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);