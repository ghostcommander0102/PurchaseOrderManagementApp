import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import DashBoard from './views/Dashboard';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<DashBoard />}>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
