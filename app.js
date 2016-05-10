// Import React
import React 	from 'react';
import ReactDom from 'react-dom';

// Components
import { Paper }  from  './components/Paper';
import { Header } from  './components/Header';
import { Info }   from  './components/Info';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			paperLoaded: false
		}
	}
	render() {
		return (
			<section>
				<div id="wrapper" className={ this.state.paperLoaded ? 'loaded' : undefined }>
					<Paper />
					<Header />
					<i className="icon-arrow-circle-down" />
				</div>
				{this.state.paperLoaded ? <Info /> : undefined }
			</section>
		);
	}
	componentWillMount = () => {

		// Listen for paper animation to finish
		document.addEventListener('paper_loaded', this._addInfo);

	};
	_addInfo = () => {
		
		// Set the state
		this.setState({ paperLoaded: true });
		
		// Remove the listener
		document.removeEventListener('paper_loaded', this._addInfo);
		
	};
};

ReactDom.render((
	<App />
), document.getElementById('page'));