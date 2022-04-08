import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Calculator from './Calculator';

const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesPath;