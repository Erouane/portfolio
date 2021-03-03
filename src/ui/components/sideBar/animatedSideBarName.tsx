import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme/colors';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export interface AnimatedSidebarName {
	children: ReactElement;
	to: string;
}

export const AnimatedSideBarName = (props: any) => {
	const [style, set] = useSpring(() => ({ opacity: 1 }));
	return (
		<animated.div
			style={style}
			onMouseDown={() => set({ opacity: 0.5 })}
			onMouseUp={() => set({ opacity: 1 })}
		>
			<SectionLink to={props.to}>{props.children}</SectionLink>
		</animated.div>
	);
};

const SectionNameSelected = styled(animated.h2)`
	font-size: 1.5em;
	font-weight: lighter;
	color: ${Colors.primaryOrnament};
	text-shadow: ${Colors.primaryOrnament} 0px 0px 10px,
		${Colors.primaryOrnament} 0px 0px 10px;
`;

const SectionLink = styled(Link)`
	cursor: pointer;
	font-size: 1.5em;
	font-weight: lighter;
	color: ${Colors.primaryOrnament};
	text-shadow: 0 0;
	transition: text-shadow ease-out 1000ms;
	&:hover {
		text-shadow: ${Colors.primaryOrnament} 0px 0px 10px,
			${Colors.primaryOrnament} 0px 0px 10px;
	}
`;
