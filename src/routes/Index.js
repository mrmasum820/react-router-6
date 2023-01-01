import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { About } from '../pages/About';
import { AddBlogs } from '../pages/AddBlogs';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Protected } from './Protected';

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Navbar />
            {
                isLoggedIn ? <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button> : <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log in</button>
            }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-blogs" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <AddBlogs />
                    </Protected>
                } />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index;
