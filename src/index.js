import React, { Component } from 'react';

import Error from './components/Shared/Error';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';
import Spinner from './components/Shared/Spinner';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: '',
			latitude: null,
			longitude: null
		};
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				const { latitude, longitude } = position.coords;
				
				this.setState({
					latitude,
					longitude
				});
			},
			err => {
				const { message: error } = err
				
				this.setState({
					error
				});
			}
		);
	}

	render() {
		const { error, latitude, longitude } = this.state;

		return (
			<div>
				{
					error !== '' || latitude !== null ? (
						error ?
						(
							<Error error={error}/>
						) : (
							<SeasonDisplay latitude={latitude} longitude={longitude} />
						)
					) : (
						<Spinner message={'Please accept location request'}/>
					)
				}
			</div>
		);
	};
};

ReactDOM.render(<App />, document.querySelector('#root'));
