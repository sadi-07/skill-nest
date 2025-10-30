import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import PopularSkills from '../Components/PopularSkills';
import Loading from '../Components/Loading';
import TopRated from '../Components/TopRated';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>
                <PopularSkills></PopularSkills>
            </Suspense>
            <TopRated></TopRated>
        </div>
    );
};

export default Home;