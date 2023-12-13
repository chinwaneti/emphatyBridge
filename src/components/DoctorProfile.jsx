import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';


const ProfilePage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [experience, setExperience] = useState('');
  const [age, setAge] = useState('');
  const [Bio, setBio] = useState('');
  const [link, setLink] = useState('');
  const [links, setLinks] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [dob, setDob] = useState('');
  const [profilePicture, setProfilePicture] = useState();



  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Nigeria'];
  const genders = ['Male', 'Female', 'Other'];
  const specialities = ['Cardiologist', 'Dermatologist', 'Orthopedic Surgeon', 'Pediatrician', 'Neurologist', 'Psychiatrist', 'Ophthalmologist', 'Dentist', 'Gynecologist'];

  const handleSaveProfile = async () => {
    try {
      const response = await fetch('https://empathybridge.onrender.com/update-profile/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "Authorisation": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzODg4MjI2LCJpYXQiOjE3MDIzNTIyMjYsImp0aSI6IjZiYzI5YjI4MDk4MjRiMjE4ODQ5OTQ5ZjYyY2M2NDM0IiwidXNlcl9pZCI6MX0.0OC5U8Efq7BkE2970bZStnUqSBvW4UJkWjS-LGRNrjk"
        },
        body: JSON.stringify({
          full_name: name,
          email,
          country,
          age,
          specialty,
          years_of_experience: experience,
          gender,
          dob,
          profilePicture,
          whatsapp_link: link,
          calendly_link: links,
          Bio
        })
      });
  
      if (!response.ok) {
        // Handle error
        const errorData = await response.json();
        console.error('Error:', errorData);
        // Handle error message display or any other action as needed
        return;
      }
  
      // Profile updated successfully
      console.log('Profile updated successfully');
  
      // If you want to navigate to another page after the update, you can use React Router's useHistory or useNavigate here
      // Example using useHistory (make sure to import useHistory from 'react-router-dom')
      // history.push('/profile-updated');
  
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error message display or any other action as needed
    }
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file) {
      const allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
      if (allowedTypes.includes(file.type)) {
        // const maxDimensions = { width: 800, height: 400 };
        const image = new Image();
        image.src = URL.createObjectURL(file);

   
      } 
    }
  };

  return (
    <div className=''>
      <h1 className='text-center bg-white font-bold text-3xl pt-20 p-5'>
        Set up your profile
        <div className='flex mt-5'>
          <p className='border-[3px] border-indigo-500 rounded-lg ml-[16%] w-[10%]  my-5'></p>
          <p className='border-[3px] rounded-r-lg w-[60%]  my-5'></p>
        </div>
      </h1>
      <div className='bg-gray-100 '>
        <div className=" flex items-center justify-center">
          <div className="bg-gray-100 p-8  w-full md:w-[50vw]">
            <h1 className="font-bold mb-1">Personal info</h1>
            <p className='text-xs  mb-4 pb-8 text-black/70  border-b-[1px]'>Update your info and personal details here</p>
            <div className='flex justify-between '>
            <div
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  className='rounded-full w-32 h-32 border'
  style={{
    backgroundImage: `url(${profilePicture ? URL.createObjectURL(profilePicture) : ''})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {profilePicture && <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="w-full h-full rounded-full object-cover" />}
</div>

              <div className="mb-4 ml-4">
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <div className='border-2 rounded-lg h-[27vh] '>
                  <span>
                    <AiOutlineCloudUpload className=' shadow-black ml-[50%] my-4 ' size={40} />
                  </span>
                  <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    className="mt-1 p-1 w-[70%] outline-none ml-[35%]  rounded-md focus:outline-none  "
                    onChange={handlePictureUpload}
                  />
                  <p className=' text-center text-sm'>or drag and drop SVG, PNG, JPG or GIF</p>
                </div></div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              placeholder="Your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              placeholder="Your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 flex justify-between">
          <div className="mr-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              className="p-2 border  border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="" disabled>Select Country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              className="p-2 border  border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>Select Gender</option>
              {genders.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
        </div>
        <div className="mb-4 ml-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="mt-1 p-[4.3px]  w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            placeholder="Your date of birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            />
        </div>
            </div>
<div className='flex space-x-10'>
        <div>
            <label htmlFor="Speciality" className="block text-sm font-medium text-gray-700">
              Specialty
            </label>
            <select
              id="speciality"
              className="p-2 border  border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="" disabled>Select Specialty</option>
              {specialities.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
        </div>

        <div className="mb-4 ml-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            years of experience
          </label>
          <input
            type="years"
            id="years"
            className="mt-1 p-[4.3px]  w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            placeholder="e.g 4 years"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div></div>

                <p className='font-bold my-5'>
                    Preferred Connection Method
                </p>
            <div className='flex'>
                <div className="mb-4 ">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Whatsapp
          </label>
          <input
            type="link"
            id="link"
            className="mt-1 p-[4.3px]  w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            placeholder="Whatsapp Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Book Meeting
          </label>
          <input
            type="links"
            id="links"
            className="mt-1 p-[4.3px]  w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            placeholder="Meeting Link"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
          />
        </div>
            </div>
        
        <div 
        onDragOver={handleDragOver}
        onDrop={handleDrop}

        className="mb-4 ml-4">
          <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
            Profile Picture
          </label>
          <div className='border-2 rounded-lg h-[27vh] '>
            <span>
              <AiOutlineCloudUpload className=' shadow-black ml-[50%] my-4 ' size={40} />
            </span>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            className="mt-1 p-1 w-[70%] outline-none ml-[35%]  rounded-md focus:outline-none  "
            onChange={handlePictureUpload}
            />
            <p className=' text-center text-sm'>or drag and drop SVG, PNG, JPG or GIF (max. 800 * 400px)</p>
        </div></div>
        <button
          className="bg-indigo-500 mt-10 text-white px-6 ml-[86%] py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          onClick={handleSaveProfile}
        >
          Save
        </button>
      </div>
    </div></div></div>
  );
};

export default ProfilePage;
