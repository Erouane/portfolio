import React from 'react';
import styled from 'styled-components';

import { Routes } from '../../routes/routes';
import { Colors } from '../../theme/colors';
import { AnimatedSideBarName } from './animatedSideBarName';

export const SideBar = () => {
	return (
		<Container>
			<Spacer />
			<AnimatedSideBarName to={Routes.ABOUT}>Présentation</AnimatedSideBarName>
			<AnimatedSideBarName to={Routes.PROJECTS}>Projets</AnimatedSideBarName>
			<AnimatedSideBarName to={Routes.MUSIC}>Musique</AnimatedSideBarName>
			<Spacer />
		</Container>
	);
};

const Container = styled.div`
	width: 150px;
	text-align: center;
	padding: 0 10px;
	position: absolute;
	right: 0px;
	box-shadow: 1px 0px rgba(255, 215, 0, 0.2);
`;

const Spacer = styled.div`
	flex-grow: 1;
`;
