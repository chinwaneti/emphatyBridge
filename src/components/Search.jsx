import React, { useState } from 'react';
import ConnectPage from './ConnectPage';
import { FaStar,FaRegStar,FaSearch } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';

export default function Search() {
  const [search, setSearch] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([
     
    
  ]);
  const newData = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      location: 'Lagos',
      image: 'https://media.istockphoto.com/id/906716642/photo/portrait-of-successful-male-surgeon-in-scrubs.jpg?s=612x612&w=0&k=20&c=RwKlFsluwCQb0KYY_va5YTdQcXTHjDVnQhG8p7kwI2k=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>,
      availability: 'Available',
      profile: 'Dr. John Doe is a highly skilled Cardiologist with years of experience in treating cardiovascular diseases.'
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Dermatologist',
      location: 'Abuja',
      image: 'https://media.istockphoto.com/id/906716596/photo/happy-female-healthcare-worker-in-hospital.jpg?s=612x612&w=0&k=20&c=0pPWfdMC2fOlg2oBwVfxyQICQL3s3SlARdnjsE8fnmI=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
      availability: 'Away',
      profile: 'Dr. Jane Smith specializes in dermatology, offering expert care for various skin conditions and diseases.'
    },
    {
      id: 3,
      name: 'Dr. David Johnson',
      specialty: 'Orthopedic Surgeon',
      location: 'Port Harcourt',
      image: 'https://media.istockphoto.com/id/1289461280/photo/healthcare-worker-portrait.jpg?s=612x612&w=0&k=20&c=rJDnJzrLxV6vpK8SFaau-A3_hMbccoEBQf8lFCfc9ZE=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
      availability: 'Available',
      profile: 'Dr. David Johnson is an experienced Orthopedic Surgeon, specializing in the surgical and non-surgical treatment of musculoskeletal conditions.'
    },
    {
      id: 4,
      name: 'Dr. Emily Brown',
      specialty: 'Pediatrician',
      location: 'Enugu',
      image: 'https://media.istockphoto.com/id/846002896/photo/female-healthcare-worker-standing-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=4kV1SCPSoeBXOwaqel2l6xfT8ztLIH-cRTUCAp0FNy8=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>,
      availability: 'Away',
      profile: 'Dr. Emily Brown is a caring Pediatrician dedicated to providing comprehensive healthcare for children.'
    },
    {
      id: 5,
      name: 'Dr. Michael Wilson',
      specialty: 'Neurologist',
      location: 'Kano',
      image: 'https://media.istockphoto.com/id/1189303409/photo/happy-smiling-black-doctor-looking-at-camera.jpg?s=612x612&w=0&k=20&c=182SRmfzCb3UxjzvNlBLTvyDi5cfV4MT0avbjODhP5k=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
      availability: 'Available',
      profile: 'Dr. Michael Wilson is a skilled Neurologist specializing in the diagnosis and treatment of disorders affecting the nervous system.'
    },
    {
      id: 6,
      name: 'Dr. Olivia White',
      specialty: 'Psychiatrist',
      location: 'Ibadan',
      image: 'https://media.istockphoto.com/id/1494584815/photo/healthcare-smile-and-portrait-of-black-woman-pharmacist-zoom-on-face-and-happy-to-help-with.jpg?s=612x612&w=0&k=20&c=_0CkY4mzntrRXr23swMb18GQ1_7sVLbRXrsH8ks3X-w=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
      availability: 'Away',
      profile: 'Dr. Olivia White is a compassionate Psychiatrist dedicated to providing mental health support and treatment.'
    },
    {
      id: 7,
      name: 'Dr. Samuel Lee',
      specialty: 'Ophthalmologist',
      location: 'Jos',
      image: 'https://media.istockphoto.com/id/175540023/photo/im-ready-for-surgery.jpg?s=612x612&w=0&k=20&c=0Tnnb5ldwg6ntXQyBEowjs980PhZa_aF8vUHGdqGZtY=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
      availability: 'Available',
      profile: 'Dr. Samuel Lee is a skilled Ophthalmologist specializing in eye care and surgical procedures.'
    },
    {
      id: 8,
      name: 'Dr. Chidinma Nwaneti',
      specialty: 'Dentist',
      location: 'Aba',
      image: 'https://media.istockphoto.com/id/1285872850/photo/close-up-portrait-of-young-female-doctor-wear-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5clbDZW4GHOgECbiTrnuASjgVLKgwWp_7u-5eXpw6Cg=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
      availability: 'Away',
      profile: 'Dr. Sophia Garcia is a dedicated Dentist committed to providing quality dental care for patients of all ages.'
    },
    {
      id: 9,
      name: 'Dr. Benjamin Miller',
      specialty: 'Gynecologist',
      location: 'Kaduna',
      image: 'https://media.istockphoto.com/id/489362281/photo/you-can-put-your-trust-in-me.jpg?s=612x612&w=0&k=20&c=bl9qLusKwQ_fHHQ-QBmC3VR4XQNj8kfhavfZSW3Pqvo=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
      availability: 'Available',
      profile: 'Dr. Benjamin Miller is an experienced Gynecologist providing comprehensive women\'s healthcare services.'
    },
    {
      id: 10,
      name: 'Dr. Chloe Davis',
      specialty: 'Urologist',
      location: 'Maiduguri',
      image: 'https://media.istockphoto.com/id/1081389906/photo/portrait-of-african-medical-student-in-her-20s-smiling-towards-camera.jpg?s=612x612&w=0&k=20&c=7460TDMAwcCnLZKQdKkAO3sIwDdrH7nfYy5yyvSDmxY=',
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
      availability: 'Away',
      profile: 'Dr. Chloe Davis is a skilled Urologist dedicated to the diagnosis and treatment of urological disorders.'
    },
  ]

  const handleSearch = (e) => {
    e.preventDefault(); 
    const data = newData.filter((doctor) =>
      doctor.specialty.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDoctors(data);
  };

  return (
    <div>
      <div className="relative">
        
  <form onSubmit={handleSearch}>
    <div className="mt-52  flex w-full">
      <input
        type="search"
        className="p-2 pl-10 w-[35vw] relative border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        placeholder="Search for doctors by specialization"
        name="search"
        id="search"
        value={search}
        autoComplete="false"
        onChange={(e) => setSearch(e.target.value)}
      />

      <span className='absolute top-3 left-3'><FaSearch /></span>
    </div>
  </form>



  {search && (
    <div className="absolute top-12 w-full bg-white rounded-b-2xl shadow-md">
      {filteredDoctors.length > 0 ? (
        filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 hover:bg-gray-100 shadow-md">
          <div className='flex justify-between items-center'>
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
       <div className='flex space-x-4 ml-[120px] items-center '><span><GrMapLocation /></span><p className="text-sm text-gray-600 font-bold">{doctor.location}</p> <span> <img src="https://cdn-icons-png.flaticon.com/128/5975/5975576.png?ga=GA1.1.1685298518.1695204527&semt=ais" alt="Nigeria flag" className='h-5 w-5'/></span></div>
        <p className="text-sm text-gray-600">{doctor.profile}</p>
      </div></div>
        ))
      ) : (
        <p className="p-4 text-center text-gray-600">No doctor in that specialization</p>
      )}
    </div>
  )}
</div>

    </div>)
}
