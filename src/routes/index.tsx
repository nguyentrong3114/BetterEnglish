import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';

import { App } from '../App.jsx';
import { LoginPage } from '../screens/auth/loginPage.js';
import { HomePage } from '../screens/home/homePage.js';
import "tailwindcss/utilities.css"

export default function NewRoutes() {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </MemoryRouter>
    );
}

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
}