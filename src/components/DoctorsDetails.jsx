import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrMapLocation } from "react-icons/gr";
import doctorData from "./doctorData";

function DoctorsDetail() {
  const { slug } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const selectedDoctor = doctorData.find((d) => d.id === parseInt(slug));

    if (selectedDoctor) {
      setDoctor(selectedDoctor);
    } else {
      console.error(`Doctor not found for id: ${slug}`);
    }
  }, [slug]);

  if (!doctor) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8 mx-auto mt-32 mb-10 bg-white shadow-lg rounded-md max-w-2xl">
      <div key={doctor.id} className="bg-white p-6 hover:shadow hover:bg-gray-100 cursor-pointer rounded-2xl shadow-md">
        <div className="flex justify-between items-center">
          <p className={`rounded-full w-24 px-4 py-[2px] text-xs text-center text-white ${doctor.availability === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}>
            {doctor.availability}
          </p>
          <p className='flex'>
            {doctor.stars}
          </p>
        </div>
        <img
          src={doctor.image}
          alt={`${doctor.name}`}
          className="h-32 w-32 object-cover mb-2 rounded-full mx-auto"
        />
        <div className='text-center'>
          <h2 className="text-xl font-bold mb-2 text-black">{doctor.name}</h2>
          <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
          <div className='flex space-x-4 ml-[40%] items-center '><span><GrMapLocation /></span><p className="text-sm text-gray-600 font-bold">{doctor.location}</p> <span> <img src="https://cdn-icons-png.flaticon.com/128/5975/5975576.png?ga=GA1.1.1685298518.1695204527&semt=ais" alt="Nigeria flag" className='h-5 w-5' /></span></div>
          <p className="text-sm text-gray-600">{doctor.profile2}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorsDetail;
