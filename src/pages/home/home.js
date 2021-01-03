import React, { Component } from 'react';
import './style.scss';
import storage from '../../services/storage';

class Home extends Component{
	constructor(){
		super();
		this.state = {
			name: ''
		}
	}
	componentDidMount(){
		storage.request('getName')
		.then(res => {
			this.setState({
				name: res
			})
		})
	}
	render(){
		return (
			<div className='page page-home'>
				Hello, welcome { this.state.name }
			</div>
		)
	}
}

export default Home;