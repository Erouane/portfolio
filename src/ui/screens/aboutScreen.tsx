import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme/colors';
import { AnimatedScreen } from './Screen';

export const AboutScreen = () => {
	return (
		<AnimatedScreen>
			<Title>Erwan Renon</Title>
		</AnimatedScreen>
	);
};

const Title = styled.h1`
	color: ${Colors.primaryOrnament};
	margin: 20px 20px;
`;
