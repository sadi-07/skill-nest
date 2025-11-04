import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div className=''>
            <Navbar></Navbar>
            {navigation.state === "loading" && <Loading />}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;