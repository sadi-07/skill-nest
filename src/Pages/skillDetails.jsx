import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Loading from '../Components/Loading';
import toast from 'react-hot-toast';

const SkillDetails = () => {
    const { skillId } = useParams();
    const data = useLoaderData();

    const [details, setDetails] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const foundSkill = data.find(skill => skill.skillId == skillId);
        setDetails(foundSkill);
    }, [data, skillId]);

    if (!details) {
        return <Loading></Loading>
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            toast.error('Please fill in all fields!');
            return;
        }

        toast.success('Booking successful!');
        setName(''); 
        setEmail('');
    };

    return (
        <div className='max-w-11/12 mx-auto mt-25'>
            <div className='border rounded-xl border-gray-200 shadow-sm my-5 p-4 bg-base-100 flex lg:flex-row flex-col gap-5'>
                <div className='flex-1'>
                    <img className='min-w-full mb-5 rounded-2xl' src={details.image} alt="" />
                    <div>
                        <p className='font-semibold text-lg text-gray-600'>Providers Name: <span className='font-bold text-gray-800'> {details.providerName} </span></p>
                        <p className='font-semibold text-lg text-gray-600'>Providers Mail: <span className='font-bold text-gray-800'> {details.providerEmail} </span></p>
                    </div>
                </div>
                <div className='flex-2'>
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='font-bold text-3xl text-gray-800'>{details.skillName}</h2>
                        <p className='bg-accent text-base font-semibold px-6 py-2 rounded-full text-red-900'>{details.category}</p>
                    </div>
                    <p className='font-semibold text-gray-500 my-2'>{details.description}</p>

                    <div className='mt-6 mb-2'>
                        <p className='font-semibold text-xl text-gray-600'>Price: <span className='font-semibold text-2xl text-gray-800'>{details.price}</span>$ </p>
                        <p className='font-semibold text-xl text-gray-600 my-2'>Rating: <span className='font-bold  text-2xl text-gray-800'>{details.rating}</span>/5 </p>
                        <p className='font-semibold text-xl text-gray-600'>Slot(s) available: <span className='font-bold text-2xl text-gray-800'> {details.slotsAvailable} </span></p>
                    </div>

                    

                    
                </div>



            </div>

            <div className='flex md:flex-row flex-col my-15 justify-around items-center'>
                        <h2 className='mt-7 mb-3 font-bold text-5xl'>Book a Session</h2>

                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                            <label className="label font-semibold text-lg">Name</label>
                            <input type="text" className="input" placeholder="Name" value={name}
      onChange={(e) => setName(e.target.value)}/>

                            <label className="label font-semibold text-lg">Email</label>
                            <input type="email" className="input" placeholder="Email" value={email}
      onChange={(e) => setEmail(e.target.value)}/>
                            
                            <button type='submit' className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-move shadow-md hover:shadow-lg text-white font-bold text-base w-80 mt-4 rounded-lg">Submit</button>
                        </fieldset>
                        </form>
                    </div>

        </div>
    );
};

export default SkillDetails;
