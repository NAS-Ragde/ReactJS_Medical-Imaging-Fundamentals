import * as React from "react";
import {Route, Router, Routes} from "react-router-dom";
import Home from "../Home/Home";

export default function Navigation() {
    return (
        <Router>
            <Routes>

                <Route
                    path={'/components/Home/Home.js'}
                    element={<Home/>}
                />

            </Routes>
        </Router>

    );
}
