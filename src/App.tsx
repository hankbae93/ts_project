import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Layout, SideBar, Toast } from "./components";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<SideBar />
				<Toast />
			</Layout>
		</>
	);
}

export default App;
