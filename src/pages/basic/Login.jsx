import React, { Component } from 'react';
// import { Link, history } from 'react-router-dom';
import { Button, Input } from 'antd';
import { observer, inject } from 'mobx-react'
// import bcrypt from '../utils/bcrypt'
import logo from '../../assets/image/LOGO.png'

@inject(['loginStore'])
@observer
class Login extends Component {

	constructor(props){
			super(props);
			this.store = this.props.loginStore
			this.state = {
					username: '',
					password: '',
			};
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render () {

			return(
					<div style={{height: '100%'}}>
							<div className="signin">
								<div className="signin-box">
									<div className="signin-title">AccuraGen 肿瘤临床数据平台</div>
									<div className="signin-block">
										<div className="signin-logo">
											<img src={logo} alt={"AccuraGen"} />
										</div>
										<Input placeholder="用户名"
										onKeyDown={(e) => e.keyCode === 13 ? this.login.bind(this)() : null }
										onChange={this.changeState.bind(this, 'username')}
										style={{width: 250, height: 38, marginBottom: 30}} />
										<Input placeholder="密码" type="password"
										onKeyDown={(e) => e.keyCode === 13 ? this.login.bind(this)() : null }
										onChange={this.changeState.bind(this, 'password')}
										style={{width: 250, height: 38, marginBottom: 30}} />
										<span className="raised-button">
											<Button type="primary" onClick={this.login.bind(this)}> 登录系统 </Button>
										</span>
									</div>
								</div>
								<div className="signin-footer">
									Copyright &copy; 2017 Emsoft Incorporated. All rights reserved.
								</div>
							</div>
					</div>
			);
	}

	changeState(name, e) {
			this.setState({
					[name]: e.target.value
			})
	}

	login() {
    const {username, password} = this.state
    this.store.getList(username, password, this.goHomePage)
  }

  goHomePage = () => {
    const {history} = this.props
    history.push('/')
  }
}

export default Login;