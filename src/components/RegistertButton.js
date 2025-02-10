// import React, { useState } from 'react';

// const RegisterButton = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isFormVisible, setFormVisible] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

   
//     try {
   
      
//       const token = 'fake-jwt-token'; 
//       console.log('User  registered:', { name, email, password, token });

//       setMessage('Registration successful! Your token: ' + token);
      
    
//       setName('');
//       setEmail('');
//       setPassword('');
//       setFormVisible(false); 
//     } catch (error) {
//       setMessage('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
//       <h2>Register</h2>
//       <button
//         onClick={() => setFormVisible(!isFormVisible)}
//         style={{
//           padding: '10px 20px',
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           border: 'none',
//           cursor: 'pointer',
//           marginBottom: '10px',
//         }}
//       >
//         {isFormVisible ? 'Hide Registration Form' : 'Show Registration Form'}
//       </button>

//       {isFormVisible && (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//               required
//               style={{
//                 width: '100%',
//                 padding: '5px',
//                 marginTop: '10px',
//                 border: '1px solid #ccc',
//               }}
//             />
//           </div>
//           <div style={{ marginTop: '10px' }}>
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//               style={{
//                 width: '100%',
//                 padding: '5px',
//                 marginTop: '10px',
//                 border: '1px solid #ccc',
//               }}
//             />
//           </div>
//           <div style={{ marginTop: '10px' }}>
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//               style={{
//                 width: '100%',
//                 padding: '5px',
//                 marginTop: '10px',
//                 border: '1px solid #ccc',
//               }}
//             />
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             <button
//               type="submit"
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: '#4CAF50',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Register
//             </button>
//           </div>
//         </form>
//       )}

//       {message && <p style={{ marginTop: '20px', color: 'blue' }}>{message}</p>}
//     </div>
//   );
// };

// export default RegisterButton;