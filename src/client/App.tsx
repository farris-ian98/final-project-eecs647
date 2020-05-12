import * as React from 'react';
import Header from './components/Header.tsx';
import Box from '@material-ui/core/Box';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
		pointLeaders	: [],
		reboundLeaders : [],
		assistLeaders: [],
		coach: [],
		team: [],
		player: []
		};
	}

	async componentDidMount() {
		try {
			let x = await fetch('/api/pointLeaders');
			let y = await fetch('/api/reboundLeaders');
			let z = await fetch('/api/assistLeaders');
			let a = await fetch('/api/coachLookup');
			let b = await fetch('/api/teamLookup');
			let c = await fetch('/api/playerLookup');
			let pointLeaders = await x.json();
			let reboundLeaders = await y.json();
			let assistLeaders = await z.json();
			let coach = await a.json();
			let team = await b.json();
			let player = await c.json();
			this.setState({ pointLeaders, reboundLeaders, assistLeaders, coach, team, player });
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		return (
			<div>
				<Header
					pointLeaders = {this.state.pointLeaders}
					reboundLeaders = {this.state.reboundLeaders}
					assistLeaders = {this.state.assistLeaders}
					coachLookup = {this.state.coach}
					teamLookup = {this.state.team}
					playerLookup = {this.state.player}
				/>
			</div>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	name: string;
}

export default App;
