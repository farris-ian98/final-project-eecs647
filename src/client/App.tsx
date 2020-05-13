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
		player: [],
		longestCoaches: [],
		sixthMan: [],
		freeThrowTeam: []
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
			let d = await fetch('/api/longestCoaches');
			let e = await fetch('/api/sixthMan');
			let f = await fetch('/api/bestFreeThrowTeam');
			let pointLeaders = await x.json();
			let reboundLeaders = await y.json();
			let assistLeaders = await z.json();
			let coach = await a.json();
			let team = await b.json();
			let player = await c.json();
			let longestCoaches = await d.json();
			let sixthMan = await e.json();
			let freeThrowTeam = await f.json();
			this.setState({ pointLeaders, reboundLeaders, assistLeaders, coach, team, player, longestCoaches, sixthMan, freeThrowTeam });
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
					longestCoaches = {this.state.longestCoaches}
					sixthMan = {this.state.sixthMan}
					freeThrowTeam = {this.state.freeThrowTeam}
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
