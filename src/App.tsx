import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Layout, SideBar, Toast, Viewer } from "./components";

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
				<Viewer />
			</Layout>
		</>
	);
}

export default App;
