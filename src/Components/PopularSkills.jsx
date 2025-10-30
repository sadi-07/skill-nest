import React, { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router';

const PopularSkills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("/skills.json")
            .then(res => res.json())
            .then(data => {
                const topSkills = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
                setSkills(topSkills);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <div className='max-w-11/12 mx-auto my-20'>
            <div className='flex justify-between items-center mb-7'>
                <h2 className='font-bold text-5xl'>Popular Skills</h2>
                <Link className='font-semibold text-lg btn py-5 px-7 bg-purple-500 animate-gradient-move shadow-md hover:shadow-lg hover:scale-105
 text-white flex items-center gap-2' to="/all-skills">Show all skills <FaLongArrowAltRight /></Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {skills.map((skill) => (
                    <div key={skill.skillId} className="p-4 rounded-xl border-gray-300 border">
                        <img className='w-full h-60 rounded-sm mb-6 ' src={skill.image} alt={skill.skillName} />
                        <h2 className="font-semibold mb-2 text-2xl">{skill.skillName}</h2>
                        <div className='flex items-center justify-between mb-3'>
                            <p className="text-gray-600 font-semibold text-lg">⭐ {skill.rating}</p>
                            <p className='text-gray-600 font-semibold text-xl'>Price: {skill.price}$</p>
                        </div>
                        <div className='text-right'>
                            <Link className='btn text-base font-semibold bg-blue-500 text-white'>View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default PopularSkills;