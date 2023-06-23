import React from 'react';

import Registration from "./screens/components/Registration/Registration";
import Home from "./screens/components/Home/Home";
import Login from "./screens/components/Login/Login";
import Content from "./screens/components/Content/Content";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {isLoggedIn} from "./api-services/Api";
function App() {


    return <Router>
        <Routes>
            {/*<Route*/}
            {/*    path='/'*/}
            {/*    element={<Home />}/>*/}
            {/*<Route*/}
            {/*    path='/login'*/}
            {/*    element={<Login/>}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path='/home'*/}
            {/*    element={<Home />}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path='/registration'*/}
            {/*    element={<Registration />}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path='/Content'*/}
            {/*    element={<Content />}*/}
            {/*/>*/}
            <Route
                path='/'
                element={isLoggedIn ? (<Home />) : (<Login/>)}/>
            <Route
                path='/Login'
                element={isLoggedIn ? (<Home />) : (<Login/>)}
            />
            <Route
                path='/Home'
                element={isLoggedIn ? (<Home />) : (<Login/>)}
            />
            <Route
                path='/Registration'
                element={<Registration />}
            />
            <Route
                path='/Content'
                element={isLoggedIn ? (<Content />) : (<Login/>)}
            />
        </Routes>
    </Router>
}
export default App;
