import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import PopularSkills from '../Components/PopularSkills';
import Loading from '../Components/Loading';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>
                <PopularSkills></PopularSkills>
            </Suspense>
        </div>
    );
};

export default Home;