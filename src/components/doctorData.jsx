import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const doctorData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    location: 'Lagos',
    image: 'https://media.istockphoto.com/id/906716642/photo/portrait-of-successful-male-surgeon-in-scrubs.jpg?s=612x612&w=0&k=20&c=RwKlFsluwCQb0KYY_va5YTdQcXTHjDVnQhG8p7kwI2k=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>,
    availability: 'Available',
    profile: 'Dr. John Doe is a highly skilled Cardiologist with years of experience in treating cardiovascular diseases.',
    profile2: `
      With a strong background in cardiology, Dr. Doe has successfully treated numerous patients with heart-related issues. 
      He is dedicated to providing personalized care and the latest treatment options. Dr. Doe believes in a holistic approach 
      to heart health, emphasizing lifestyle changes and preventive measures. Patients appreciate his compassionate care and 
      thorough understanding of their individual needs.
    `
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    location: 'Abuja',
    image: 'https://media.istockphoto.com/id/906716596/photo/happy-female-healthcare-worker-in-hospital.jpg?s=612x612&w=0&k=20&c=0pPWfdMC2fOlg2oBwVfxyQICQL3s3SlARdnjsE8fnmI=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
    availability: 'Away',
    profile: 'Dr. Jane Smith is a skilled Dermatologist specializing in the diagnosis and treatment of various skin conditions.',
    profile2: `
      As a dermatologist, Dr. Smith has expertise in both medical and cosmetic dermatology. Her comprehensive approach ensures 
      that patients receive the best possible care for their skin concerns. Dr. Smith stays updated on the latest advancements 
      in dermatological treatments to offer cutting-edge solutions. Patients admire her attention to detail and commitment to 
      delivering exceptional results.
    `
  },
  {
    id: 3,
    name: 'Dr. David Johnson',
    specialty: 'Orthopedic Surgeon',
    location: 'Port Harcourt',
    image: 'https://media.istockphoto.com/id/1289461280/photo/healthcare-worker-portrait.jpg?s=612x612&w=0&k=20&c=rJDnJzrLxV6vpK8SFaau-A3_hMbccoEBQf8lFCfc9ZE=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
    availability: 'Available',
    profile: 'Dr. David Johnson is an Orthopedic Surgeon, skilled in the surgeries of musculoskeletal conditions.',
    profile2: `
      With a focus on orthopedic surgery, Dr. Johnson brings extensive expertise to the field. He has successfully performed 
      various surgical and non-surgical interventions for musculoskeletal issues. Dr. Johnson is known for his patient-centered 
      approach and commitment to delivering the highest standard of care. Patients trust his skill and dedication to their well-being.
    `
  },
  {
    id: 4,
    name: 'Dr. Emily Brown',
    specialty: 'Pediatrician',
    location: 'Enugu',
    image: 'https://media.istockphoto.com/id/846002896/photo/female-healthcare-worker-standing-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=4kV1SCPSoeBXOwaqel2l6xfT8ztLIH-cRTUCAp0FNy8=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>,
    availability: 'Away',
    profile: 'Dr. Emily Brown is a caring Pediatrician dedicated to providing comprehensive healthcare for children.',
    profile2: `
      Dr. Emily Brown has a passion for pediatric care, ensuring the health and well-being of young patients. Her approach 
      emphasizes preventive care, vaccinations, and early intervention for childhood illnesses. Dr. Brown creates a warm and 
      welcoming environment for children and their families, earning the trust and gratitude of those she serves.
    `
  },
  {
    id: 5,
    name: 'Dr. Michael Wilson',
    specialty: 'Neurologist',
    location: 'Kano',
    image: 'https://media.istockphoto.com/id/1189303409/photo/happy-smiling-black-doctor-looking-at-camera.jpg?s=612x612&w=0&k=20&c=182SRmfzCb3UxjzvNlBLTvyDi5cfV4MT0avbjODhP5k=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
    availability: 'Available',
    profile: 'Dr. Michael Wilson is a skilled Neurologist specializing in the treatment of disorders in the nervous system.',
    profile2: `
      As a neurologist, Dr. Wilson has extensive experience in diagnosing and treating a wide range of neurological conditions. 
      He is dedicated to providing comprehensive care for patients dealing with disorders of the brain, spine, and nervous system. 
      Dr. Wilson's expertise and compassionate approach make him a trusted healthcare professional in the field of neurology.
    `
  },
  {
    id: 6,
    name: 'Dr. Olivia White',
    specialty: 'Psychiatrist',
    location: 'Ibadan',
    image: 'https://media.istockphoto.com/id/1494584815/photo/healthcare-smile-and-portrait-of-black-woman-pharmacist-zoom-on-face-and-happy-to-help-with.jpg?s=612x612&w=0&k=20&c=_0CkY4mzntrRXr23swMb18GQ1_7sVLbRXrsH8ks3X-w=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
    availability: 'Away',
    profile: 'Dr. Olivia White is a compassionate Psychiatrist dedicated to providing mental health support and treatment.',
    profile2: `
      Dr. Olivia White specializes in psychiatry, offering comprehensive mental health services. She is committed to helping 
      individuals overcome challenges related to mental and emotional well-being. Dr. White's empathetic and patient-centered 
      approach creates a safe space for her patients, promoting healing and recovery.
    `
  },
  {
    id: 7,
    name: 'Dr. Samuel Lee',
    specialty: 'Ophthalmologist',
    location: 'Jos',
    image: 'https://media.istockphoto.com/id/175540023/photo/im-ready-for-surgery.jpg?s=612x612&w=0&k=20&c=0Tnnb5ldwg6ntXQyBEowjs980PhZa_aF8vUHGdqGZtY=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
    availability: 'Available',
    profile: 'Dr. Samuel Lee is a skilled Ophthalmologist specializing in eye care and surgical procedures.',
    profile2: `
      With a focus on ophthalmology, Dr. Samuel Lee provides expert care for a wide range of eye conditions. His surgical skills 
      and dedication to preserving and improving vision have made him a trusted eye care professional. Dr. Lee is committed to 
      staying updated on the latest advancements in ophthalmic treatments to ensure the best outcomes for his patients.
    `
  },
  {
    id: 8,
    name: 'Dr. Sophia Garcia',
    specialty: 'Dentist',
    location: 'Aba',
    image: 'https://media.istockphoto.com/id/1285872850/photo/close-up-portrait-of-young-female-doctor-wear-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5clbDZW4GHOgECbiTrnuASjgVLKgwWp_7u-5eXpw6Cg=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
    availability: 'Away',
    profile: 'Dr. Sophia Garcia is a dedicated Dentist committed to providing quality dental care for patients of all ages.',
    profile2: `
      Dr. Sophia Garcia is a highly skilled dentist with a passion for promoting oral health. She offers a wide range of dental 
      services, from routine cleanings to complex dental procedures. Dr. Garcia's gentle approach and attention to patient comfort 
      make dental visits a positive experience. Patients appreciate her commitment to creating healthy and beautiful smiles.
    `
  },
  {
    id: 9,
    name: 'Dr. Benjamin Miller',
    specialty: 'Gynecologist',
    location: 'Kaduna',
    image: 'https://media.istockphoto.com/id/489362281/photo/you-can-put-your-trust-in-me.jpg?s=612x612&w=0&k=20&c=bl9qLusKwQ_fHHQ-QBmC3VR4XQNj8kfhavfZSW3Pqvo=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
    availability: 'Available',
    profile: 'Dr. Benjamin Miller is an experienced Gynecologist providing comprehensive women\'s healthcare services.',
    profile2: `
      As a gynecologist, Dr. Benjamin Miller is dedicated to promoting women's health at every stage of life. He offers 
      personalized care for a wide range of gynecological concerns and is committed to creating a comfortable and supportive 
      environment for his patients. Dr. Miller's expertise and compassionate approach make him a trusted healthcare partner for women.
    `
  },
  {
    id: 10,
    name: 'Dr. Chloe Davis',
    specialty: 'Urologist',
    location: 'Maiduguri',
    image: 'https://media.istockphoto.com/id/1081389906/photo/portrait-of-african-medical-student-in-her-20s-smiling-towards-camera.jpg?s=612x612&w=0&k=20&c=7460TDMAwcCnLZKQdKkAO3sIwDdrH7nfYy5yyvSDmxY=',
    stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></>,
    availability: 'Away',
    profile: 'Dr. Chloe Davis is a skilled Urologist dedicated to the diagnosis and treatment of urological disorders.',
    profile2: `
      Dr. Chloe Davis specializes in urology, providing expert care for conditions affecting the urinary tract and male reproductive system. 
      Her comprehensive approach includes both medical and surgical interventions. Dr. Davis is committed to helping patients achieve 
      optimal urological health and improve their quality of life.
    `
  },
];

export default doctorData;
