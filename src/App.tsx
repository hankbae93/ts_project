import React from "react";
import { Layout, SideBar, Toast, Viewer } from "./components";

function App() {
	return (
		<>
			<Layout>
				<SideBar />
				<Viewer />
				<Toast />
			</Layout>
		</>
	);
}

export default App;
