import React from 'react';

import Registration from "./screens/components/Registration/Registration";
import Home from "./screens/components/Home/Home";
import Login from "./screens/components/Login/Login";
import Content from "./screens/components/Content/Content";
import {BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate} from 'react-router-dom';

function App() {

    const isLoggedIn = localStorage.getItem('uuid');

    return <Router>
        <Routes>
            <Route
                path='/'
                element={<Home />}/>
            <Route
                path='/Login'
                element={<Login/>}
            />
            <Route
                path='/Home'
                element={<Home />}
            />
            <Route
                path='/Registration'
                element={<Registration />}
            />
            <Route
                path='/Content'
                element={<Content />}
            />
            {/*<Route*/}
            {/*    path='/'*/}
            {/*    element={isLoggedIn ? (<Home />) : (<Login/>)}/>*/}
            {/*<Route*/}
            {/*    path='/Login'*/}
            {/*    element={isLoggedIn ? (<Home />) : (<Login/>)}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path='/Home'*/}
            {/*    element={isLoggedIn ? (<Home />) : (<Login/>)}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path='/Registration'*/}
            {/*    element={<Registration />}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path='/Content'*/}
            {/*    element={isLoggedIn ? (<Content />) : (<Login/>)}*/}
            {/*/>*/}
        </Routes>
    </Router>
}
export default App;
