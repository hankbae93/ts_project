import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Layout, SideBar } from "./components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<SideBar />
			</Layout>
		</>
	);
}

export default App;
