import React from 'react';
import styled from 'styled-components';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { AboutScreen } from '../screens/aboutScreen';
import { ProjectsScreen } from '../screens/projectsScreen';
import { Routes } from './routes';

export const AnimatedRoutes = () => {
	const location = useLocation();
	const transitions = useTransition(location, (location) => location.pathname, {
		from: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
		enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(0,50%,0)' },
	});
	return (
		<>
			{transitions.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
						<Route path={Routes.ABOUT}>
							<AboutScreen />
						</Route>
						<Route path={Routes.PROJECTS}>
							<ProjectsScreen />
						</Route>
						<Route path={Routes.MUSIC}>
							<AboutScreen />
						</Route>
					</Switch>
				</animated.div>
			))}
		</>
	);
};
