import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const Layout = ({
	children,
}: {
	children: React.ReactNode;
}): React.ReactElement => {
	return (
		<>
			<GlobalStyle />
			<Container>{children}</Container>
		</>
	);
};

export default Layout;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	background-color: #e5e5e5;
`;
