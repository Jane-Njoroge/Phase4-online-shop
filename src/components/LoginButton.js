// import React, { useState } from 'react';

// const mockusers= [
//   { email: 'user1@example.com', password: 'password1' },
//   { email: 'user2@example.com', password: 'password2' },
// ];

// const LoginButton = () => {
 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isFormVisible, setFormVisible] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     const user = mockusers.find(user => user.email === email && user.password === password);
    
//     if (user) {
//       setMessage('You have logged in successfully!');
//     } else {
//       setMessage('User  not found. Please register.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
//       <h2>Login</h2>
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
//         {isFormVisible ? 'Hide Login Form' : 'Show Login Form'}
//       </button>

//       {isFormVisible && (
//         <form onSubmit={handleSubmit}>
//           <div>
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
//                 marginTop: '50px',
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
//                 padding: '10px',
//                 marginTop: '5px',
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
//                 display:'flex'
//               }}
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       )}

//       {message && <p style={{ marginTop: '20px', color: 'blue' }}>{message}</p>}
//     </div>
//   );
// };

// export default LoginButton;