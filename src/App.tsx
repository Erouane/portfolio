import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { SideBar } from './ui/components/sideBar/sideBar';
import { AnimatedRoutes } from './ui/routes/animatedRoutes';

function App() {
	return (
		document.getElementById('root'),
		(
			<Router>
				<MainContainer>
					<SideBar />
					<AnimatedRoutes />
				</MainContainer>
			</Router>
		)
	);
}

const MainContainer = styled.div`
	height: 100vh;
	overflow: hidden;
	margin: 0px;
	display: flex;
  flex-grow: 1
	box-sizing: border-box;
`;

export default App;
