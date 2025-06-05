// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// //import '../Styles/register.css';

// const Register =() =>{
//     const navigate= useNavigate;
//     const [formData, setFormData] =useState({
//         Name:'',
//         Email:'',
//         Mobile:'',
//         DoB:'',
//         Gender:'',
//         Age:''
//     });

//     const handleChange = (e) => {
//         const {name, value}= e.target;
//         setFormData((prev)=>({...prev, [name]:value}));
//     }

//     const handleSubmit =(e) =>{
//         e.preventDefault();

//         console.log(formData);
//         alert("Successfully Registerd !🎉")

//         navigate('/Login');
//     }

//     return(
//         <div className="regsiter-page">
//             <div className="left-image">
//                 <div className="register-container">
//                     <h2>New User</h2>
//                     <form onSubmit={handleSubmit} className="register-from">
//                         <label>Name<input type="text" value={formData.Name} placeholder="Name" onChange={handleChange} required /></label>
//                         <label>Email<input type="email" value={formData.email} placeholder="Email Address" onChange={handleChange} required /></label>
//                         <label>Mobile<input type="tel" value={formData.phone} placeholder="Phone" onChange={handleChange} pattern="[0-9]{10}"required /></label>
//                         <div className="gender-group">Gender:
//                             <label>Male<input type="radio" name="gender" value="Male" onChange={handleChange} required /></label>
//                             <label>Female<input type="radio" name="gender" value="Female" onChange={handleChange} required /></label>
//                             <label>Others<input type="radio" name="gender" value="Others" onChange={handleChange} required /></label>
//                         </div>    
//                         <label>DOB<input type="date" value={formData.dob} placeholder="date of birth" onChange={handleChange} required /></label>
//                         <label>Age<input type="number" value={formData.age} placeholder="Age" onChange={handleChange} required /></label>

//                         <button type="submit" className="register-button">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );

// }

// export default Register;