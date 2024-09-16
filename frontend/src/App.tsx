import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage/index';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/test" element={<TestPage />} />
          {/* Add more routes as needed */}
          <Route
            path="/"
            element={
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
