import React, { Component } from 'react';
import './style.scss'

class Home extends Component{
	constructor(){
		super();
		this.state = {
			allStocks: [],
			singleStock: null,
			analysis: null
		}
	}
	_getAllStocks() {

	}
	_getSingleStocks() {

	}
	_getStocksAnalysis() {

	}
	render(){
		return (
			<div className='page page-home'>
				<button onClick={this._getAllStocks.bind(this)}>get all stocks</button>
				<button onClick={this._getSingleStocks.bind(this)}>get single stock</button>
				<button onClick={this._getStocksAnalysis.bind(this)}>analysis</button>
				<div className='board'>

				</div>
			</div>
		)
	}
}

export default Home;