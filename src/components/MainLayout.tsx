import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Breadcrumbs } from './Breadcrumbs';
import BackToTop from './BackToTop';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <main className="w-full bg-white">
                <Outlet />
            </main>
            <Footer />
            <BackToTop/>
        </>
    );
};

export default MainLayout;