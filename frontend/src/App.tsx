import "./App.css";
import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./components/BlogsPage/BlogsPage";
import Create from "./components/Create/Create";
import LandingPage from "./components/LandingPage/LandingPage";
import { api } from "./api/api";

export const AppContext = createContext(api);

const App = () => {
	return (
		<AppContext.Provider value={api}>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<LandingPage />}
					/>
					<Route
						path='/Blogs'
						element={<BlogPage />}
					/>
					<Route
						path='/Create'
						element={<Create />}
					/>
				</Routes>
			</Router>
		</AppContext.Provider>
	);
};

export default App;
