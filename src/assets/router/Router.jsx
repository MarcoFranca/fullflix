import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home";
import PageNotFound from "../../pages/error/PageNotFound";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}