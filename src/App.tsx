import React from "react";
import {
	Layout,
	LoadingProgressBar,
	SideBar,
	Toast,
	Viewer,
} from "./components";

function App() {
	return (
		<>
			<Layout>
				<SideBar />
				<Viewer />
				<Toast />
				<LoadingProgressBar />
			</Layout>
		</>
	);
}

export default App;
