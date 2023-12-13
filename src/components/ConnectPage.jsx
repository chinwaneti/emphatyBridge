import React, { useState, useEffect } from 'react';
import { GrMapLocation } from "react-icons/gr";
import Search from './Search';
import { Link } from 'react-router-dom';

// Define your ChatModal component
const ChatModal = ({ onClose }) => {
  const [openaiResponse, setOpenaiResponse] = useState(null);

  useEffect(() => {
    // Fetch data from the OpenAI API
    const fetchOpenAI = async () => {
      try {
        const response = await fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
          },
          body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: 'Start a conversation with the doctor:',
            max_tokens: 120,
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data from OpenAI');
        }

        const data = await response.json();
        setOpenaiResponse(data);
      } catch (error) {
        console.error('Error fetching data from OpenAI:', error.message);
      }
    };

    // Fetch data when the ChatModal component mounts
    fetchOpenAI();
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
      {/* Display the response from OpenAI */}
      {openaiResponse ? (
        <div>
          <p>OpenAI Response:</p>
          <pre>{JSON.stringify(openaiResponse, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={onClose} className="bg-gray-300 px-3 py-1 rounded-md mt-4">Close</button>
    </div>
  );
};

const ConnectPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://empathybridge.onrender.com/all-doctors/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzODg4MjI2LCJpYXQiOjE3MDIzNTIyMjYsImp0aSI6IjZiYzI5YjI4MDk4MjRiMjE4ODQ5OTQ5ZjYyY2M2NDM0IiwidXNlcl9pZCI6MX0.0OC5U8Efq7BkE2970bZStnUqSBvW4UJkWjS-LGRNrjk', 
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }

        const data = await response.json();
        setDoctors(data.results);
      } catch (error) {
        console.error('Error fetching doctors:', error.message);
      }
    };

    fetchDoctors();
  }, []);

  const handleConnectClick = () => {
    // Open the chat modal
    setIsChatModalOpen(true);
  };

  const handleCloseChatModal = () => {
    // Close the chat modal
    setIsChatModalOpen(false);
  };

  return (
    <div className=''>
      <div className='bg-gray-50'>
        <div className='relative'>
          <img src='https://s3-alpha-sig.figma.com/img/983d/3b64/127f89d404f30a0331bab1a3b5ef2688?Expires=1702857600&Signature=pmeGyxqRZ3s25-wH8sYN3oc5I5LwoayrL9iW6R0h~SqPCCr37mgJTrQZoL4X9HClPV7KpVd7kPMJ0zdmuSiV6zT-wwJLcz6t3HAP0aR3tMTxCW0cwiNYzOy2UadBkeG1TPZqdyRSlBvPVKlJl~-kHsdYQHzESBOZj1MvLdu0coc2el-BxVJE6uTatpuH9LeFF6QkkBQsgGw5WL63qPp9tEBe1cEzdjtIQXVimfdX8fJ8PRj9L17I286AlXyO0u9X~lPdMhxzwVp2~5vgj1I9mRp9Ud2657Knivb7oRDa6-AcejVQZYyQwyTLLJ32PgRF4NU6zLmZkIBVQ54qm3hZeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='doctor' />
          <div>
            <p className='absolute top-44 left-[33%] text-gray-300 font-bold text-4xl '>
              Connect With <span className=' text-indigo-500'> Doctors</span>
            </p>
          </div>
        </div>
        <div className='absolute top-10 left-[30%]'>
          <Search />
        </div>
        <div className='min-h-screen flex items-center justify-center '>
          <div className='w-full  p-8  shadow-md'>
            <h1 className='text-4xl font-bold mb-20 my-20 text-center text-black'>Available Professionals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-4">
              {doctors.slice(0, 6).map(doctor => (
                <div key={doctor.id} to={`/doctorsDetails/${doctor.id}`} title={`click to see more on ${doctor.full_name}`}>
                  <div className="bg-white p-6 hover:shadow hover:bg-gray-100 cursor-pointer rounded-2xl shadow-md">
                    <div className='flex justify-between items-center'>
                      <p className={`rounded-full w-24 px-4 py-[2px] text-xs text-center text-white ${doctor.availability === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {doctor.availability}
                      </p>
                      <p className='flex'>{doctor.stars}</p>
                    </div>
                    <img src={doctor.image} alt={`${doctor.name}`} className='h-32 w-32 object-cover mb-2 rounded-full mx-auto' />
                    <div className='text-center'>
                      <h2 className="text-xl font-bold mb-2 text-black">{doctor.full_name}</h2>
                      <p className="text-sm text-gray-600 mb-2">{doctor.speciality}</p>
                      <div className='flex space-x-4 ml-24 items-center '>
                        <span><GrMapLocation /></span>
                        <p className="text-sm text-gray-600 font-bold">{doctor.country}</p>
                      </div>
                      <p className="text-sm text-gray-600">{doctor.Bio}</p>
                    </div>
                    <div className='flex justify-between px-5  mt-5'>
                      <button onClick={handleConnectClick} className='px-5 py-1 bg-purple-600 text-white text-sm  rounded-xl w-32'> Connect </button>
                      <Link to='/doctorProfile'><button className='px-5 py-1 bg-white border-purple-600 border text-purple-600 text-sm rounded-xl w-32'>Profile</button></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Render ChatModal when isChatModalOpen is true */}
      {isChatModalOpen && <ChatModal onClose={handleCloseChatModal} />}
    </div>
  );
};

export default ConnectPage;
