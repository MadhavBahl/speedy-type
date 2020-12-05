import React from 'react'

import { TestContainer } from "./../TestContainer/TestContainer";

import { typingTestData } from './../../data/source'
import { randomElementSelector } from '../../helper/randomSelector';
import './App.css';
import { testDetailsCalculator } from '../../helper/testDetailsCalculator';

const defaultState = {
	timerStarted: false,
	timeRemaining: 60,
	detailsData: {
		words: 0,
		characters: 0,
		mistakes: 0,
	},
	selectedParagraph: ''
}

class App extends React.Component {
	constructor () {
		super();

		this.state = defaultState
	}

	componentDidMount = () => {
		console.log('Selecting Paragraph...');
		this.setState({
			...this.state,
			selectedParagraph: randomElementSelector(typingTestData)
		})
	}

	handleKeyPress = (inputValue) => {
		if (!this.state.timerStarted) this.startTimer()

		const updatedDetails = testDetailsCalculator(this.state.selectedParagraph, inputValue)
		console.log('Updated Details: ', updatedDetails)

		this.setState({ detailsData: updatedDetails })
	}

	startAgain = () => this.setState({ ...defaultState, selectedParagraph: randomElementSelector(typingTestData)})

	startTimer = () => {
		this.setState({ timerStarted: true });
		const timer = setInterval(() => {
			if (this.state.timeRemaining > 0) {
				this.setState({ timeRemaining: (this.state.timeRemaining - 1) })
			} else {
				clearInterval(timer)
			}
		}, 1000)
	}

	render() {
		return (
			<div className="app-container">
				<h1 className="main-heading">Speedy Type</h1>
				<div className="test-container-main">
					<TestContainer
						handleKeyPress={this.handleKeyPress}
						timeRemaining={this.state.timeRemaining}
						timerStarted={this.state.timerStarted}
						startAgain={this.startAgain}
						words={this.state.detailsData.words}
						characters={this.state.detailsData.characters}
						mistakes={this.state.detailsData.mistakes}
						selectedParagraph={this.state.selectedParagraph}
					/>
				</div>
			</div>
		)
	}
}

export default App;
