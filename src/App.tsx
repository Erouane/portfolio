import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedRoutes } from './ui/routes/animatedRoutes';

function App() {
	return (
		document.getElementById('root'),
		(
			<Router>
				<MainContainer>
					<AnimatedRoutes />
				</MainContainer>
			</Router>
		)
	);
}

const MainContainer = styled.div`
	display: flex;
	height: 100vh;
	overflow: hidden;
	margin: 0px;
	display: flex;
  flex-grow: 1
	box-sizing: border-box;
`;

export default App;
