import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers"

const Layout = () => {
    return (
        <>
            <Header/>
            <Routers/>
            <Footer/>
        </>
    );
};

export default Layout;
