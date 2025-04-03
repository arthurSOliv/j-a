import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../Home';
import Casamento from "../pages/Casamento/Casamento";
import Pre from "../pages/Pre/Pre";
import Gallery from "../pages/Gallery/Gallery";

const AppRoutes = () => (
    <Routes>
        <Route path="/j-a/" element={<Home />} />
        <Route path="/j-a/pre" element={<Pre />} />
        <Route path="/j-a/casamento" element={<Casamento />} />
        <Route path="/j-a/gallery" element={<Gallery />} />
    </Routes>
)

export default AppRoutes;