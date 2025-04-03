import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../Home';
import Casamento from "../pages/Casamento/Casamento";
import Pre from "../pages/Pre/Pre";
import Gallery from "../pages/Gallery/Gallery";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pre" element={<Pre />} />
        <Route path="/casamento" element={<Casamento />} />
        <Route path="/gallery" element={<Gallery />} />
    </Routes>
)

export default AppRoutes;