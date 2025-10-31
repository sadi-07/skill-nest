import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Loading from '../Components/Loading';

const AllSkills = () => {
    const data = useLoaderData();

    const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }
    return (
        <div className='max-w-11/12 mx-auto mt-25 mb-15'>
                    <div className='flex justify-between items-center mb-7'>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">All Skills <span className='text-2xl'>({data.length})</span></h2>
                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((skill) => (
                            <div key={skill.skillId} className="p-4 rounded-xl border-gray-300 border">
                                <img className='w-full h-60 rounded-sm mb-6 ' src={skill.image} alt={skill.skillName} />
                                <h2 className="font-semibold mb-2 text-2xl">{skill.skillName}</h2>
                                <div className='flex items-center justify-between mb-3'>
                                    <p className="text-gray-600 font-semibold text-lg">⭐ {skill.rating}</p>
                                    <p className='text-gray-600 font-semibold text-xl'>Price: {skill.price}$</p>
                                </div>
                                <div className='text-right'>
                                    <Link to={`/skill/${skill.skillId}`} className='btn text-base font-semibold bg-blue-500 text-white hover:bg-blue-600'>View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
    );
};

export default AllSkills;