import React from "react";
import styled from "styled-components";

const Layout = ({
	children,
}: {
	children: React.ReactNode;
}): React.ReactElement => {
	return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	background-color: #e5e5e5;
`;
