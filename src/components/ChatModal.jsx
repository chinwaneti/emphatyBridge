// import React, { useState, useEffect } from 'react';


// // Define your modal component
// const ChatModal = ({ onClose }) => {
//   const [response, setResponse] = useState(null);

//   useEffect(() => {
//     // Define a function to fetch data from OpenAI
//     const fetchOpenAI = async () => {
//       try {
//         const response = await fetch('https://api.openai.com/v1/completions', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer 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',
//           },
//           body: JSON.stringify({
//             model: 'text-davinci-003',
//             prompt: 'A family member is suffering from diabetes, what should we do? or tips:',
//             max_tokens: 120,
//             temperature: 0.7,
//           }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch data from OpenAI');
//         }

//         const data = await response.json();
//         setResponse(data);
//       } catch (error) {
//         console.error('Error fetching data from OpenAI:', error.message);
//       }
//     };

//     // Fetch OpenAI data when the modal component mounts
//     fetchOpenAI();
//   }, []); // Empty dependency array ensures the effect runs once

//   return (
//     <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
//       {/* Display the response from OpenAI */}
//       {response ? (
//         <div>
//           <p>OpenAI Response:</p>
//           <pre>{JSON.stringify(response, null, 2)}</pre>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//       <button onClick={onClose} className="bg-gray-300 px-3 py-1 rounded-md mt-4">Close</button>
//     </div>
//   );
// };

// // Rest of your ConnectPage component

