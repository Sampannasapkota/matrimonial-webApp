import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "NonBinary", label: "Other" },
  ];

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
  });

  const [isTermsChecked, setIsTermsChecked] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleGenderChange = (selectedOption) => {
    setFormData({ ...formData, gender: selectedOption?.value || "" });
  };

  
  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!isTermsChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    // Validate gender selection
    if (!formData.gender) {
      alert("Please select a gender.");
      return;
    }
    const formattedDob = new Date(formData.dob).toISOString().split("T")[0]; // "YYYY-MM-DD"

    try {
      // Send form data to the `users` API
      const userResponse = await axios.post("http://localhost:3000/users", {
        ...formData,
        dob: formattedDob,
      });

      console.log("User created successfully:", userResponse.data);

      localStorage.setItem("userId", userResponse.data.id);

      // Send OTP to the email
      const otpResponse = await axios.post(
        "http://localhost:3000/auth/send-otp",
        {
          email: formData.email,
        }
      );

      console.log("OTP sent successfully:", otpResponse.data);

      if (otpResponse.data.success) {
        // Navigate to OTP page
        navigate("/register/otp", { state: { email: formData.email } });
      } else {
        alert(otpResponse.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(
        "Error occurred:",
        error.response?.data?.message || error.message
      );
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <Select
        placeholder="Gender"
        options={genderOptions}
        onChange={handleGenderChange}
        value={genderOptions.find((option) => option.value === formData.gender)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <div>
        <input
          type="checkbox"
          id="terms"
          checked={isTermsChecked}
          onChange={handleTermsChange}
        />
        <label htmlFor="terms">I agree to the terms and conditions</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;

// import React, { useState } from "react";
// import mainLogo from "./assets/main-logo.png";
// import wedding from "./assets/wedding.jpeg";
// import Select from "react-select";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const navigate = useNavigate();
//   const options = [
//     { value: "male", label: "Male" },
//     { value: "female", label: "Female" },
//     { value: "other", label: "Other" },
//   ];

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     dob: "",
//     gender: "",
//     password: "",
//   });

//   const handleTermsChange = (e) => {
//     setIsTermsChecked(e.target.checked);
//   };
//   const [isTermsChecked, setIsTermsChecked] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleGenderChange = (selectedOption) => {
//     setFormData({ ...formData, gender: selectedOption?.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/users", {
//         ...formData,
//       });
//       console.log("User created successfully:", response.data);

//       const otpResponse = await fetch("http://localhost:3000/auth/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//     } catch (error) {
//       console.error("Error creating user:", error.response.data.message);
//     }

//     // Update checkbox state

//       try {
//         const responseOtp = await fetch("http://localhost:3000/auth/send-otp", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         const data = await response.json();

//         if (data.success) {
//           navigate("/register/otp", { state: { email: formData.email } }); // Pass email to next page
//         } else {
//           alert(data.message || "Something went wrong!");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }

//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="dob"
//           value={formData.dob}
//           onChange={handleChange}
//           required
//         />
//         <Select
//           // styles={customStyles}
//           placeholder="Gender"
//           options={options}
//           onChange={handleGenderChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }

// export default Register

// import React, { useState } from "react";
// import mainLogo from "./assets/main-logo.png";
// import wedding from "./assets/wedding.jpeg";
// import Select from "react-select";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const [isTermsChecked, setIsTermsChecked] = useState(false);

//   const [formData, setFormData] = useState({
//       fullName: "",
//       email: "",
//       dob: "",
//       gender: "",
//       password: "",
//     });

//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);

//   // Update checkbox state
//   const handleTermsChange = (e) => {
//     setIsTermsChecked(e.target.checked);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3000/auth/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         navigate("/register/otp", { state: { email: formData.email} }); // Pass email to next page
//       } else {
//         alert(data.message || "Something went wrong!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const options = [
//     { value: "male", label: "Male" },
//     { value: "female", label: "Female" },
//     { value: "non-binary", label: "Non-Binary" },
//   ];

//   const customStyles = {
//     control: (base) => ({
//       ...base,
//       display: "flex",
//       borderRadius: "0.375rem",
//       padding: "0.25rem",
//       borderColor: "rgb(209 213 219)",
//       boxShadow: "1px 1px 1px rgb(209 213 219)",
//       "&:hover": {
//         borderColor: "rgb(107 114 128)",
//       },
//       "&:focus": {
//         outline: "hidden",
//       },
//     }),
//   };

//   return (
//     <div
//       className="relative flex items-center justify-center w-full h-screen bg-center bg-cover font-outfit"
//       id="register"
//       style={{ backgroundImage: `url(${wedding})` }}
//     >
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
//       <form
//         onSubmit={handleSubmit}
//         className="absolute px-28 h-[35em] shadow-lg bg-white w-[50em] rounded-3xl"
//       >
//         <h2 className="text-center text-3xl text-[#FF6347] font-semibold mt-6 mb-10">
//           Register Now!
//         </h2>
//         <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
//         <div className="flex flex-col space-y-5">
//           <input
//             className="w-full p-2 pl-5 shadow-md focus:outline-none"
//             type="text"
//             placeholder="Full Name *"
//             value={formData.fullName}
//             onChange={(e) => {
//               setFormData({...formData,fullName: e.target.value});
//             }}
//             required
//           />
//           <input
//             className="w-full p-2 pl-5 shadow-md focus:outline-none"
//             type="email"
//             name="email"
//             placeholder="Email Address *"
//             value={formData.email}
//             onChange={(e) => {
//               setFormData({...formData,email: e.target.value});
//             }}
//             required
//           />
//           <div className="flex space-x-10">
//             <input
//               className="w-full p-2 pl-5 text-gray-400 shadow-md focus:outline-none"
//               type="date"
//               placeholder="Date Of Birth"
//               value={formData.dob}
//               onChange={(e) => {
//                 setFormData({...formData,dob: e.target.value});
//               }}
//               required
//             />
//             <Select
//               className="w-full"
//               styles={customStyles}
//               placeholder="Gender"
//               onChange={(selectedOption) => {
//                 setFormData({...formData, gender: selectedOption.value});
//               }}
//               options={options}

//             />
//           </div>
//           <input
//             className="w-full p-2 pl-5 shadow-md focus:outline-none"
//             type="password"
//             placeholder="Password *"
//             value={formData.password}
//             onChange={(e) => {
//               setFormData({...formData, password: e.target.value});
//             }}
//             required
//           />
//           <input
//             className="w-full p-2 pl-5 shadow-md focus:outline-none"
//             type="password"
//             placeholder="Confirm Password *"
//             required
//           />

//           <label
//             className="ml-2 text-sm text-center text-gray-600"
//             htmlFor="remember"
//           >
//             <input
//               type="checkbox"
//               id="terms"
//               name="terms"
//               onChange={handleTermsChange}
//             />{" "}
//             I've read and agree to the Terms and Conditions and Privacy Policy.
//           </label>
//           <button
//             type="submit"
//             className={`w-96 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold ${
//               isTermsChecked
//                 ? "hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
//                 : "opacity-50 cursor-not-allowed"
//             }`}
//             disabled={!isTermsChecked}
//           >
//             Register
//           </button>
//           <p className="text-center text-gray-600">
//             Already a Member?
//             <Link to="/login" className="text-[#F24822] ml-2 underline">
//               Log In
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Register;

//   const options = [
//     { value: "male", label: "Male" },
//     { value: "female", label: "Female" },
//     { value: "non-binary", label: "Non-Binary" },
//   ];

//   const customStyles = {
//     control: (base) => ({
//       ...base,
//       display: "flex",
//       borderRadius: "0.375rem",
//       padding: "0.25rem",
//       borderColor: "rgb(209 213 219)",
//       boxShadow: "1px 1px 1px rgb(209 213 219)",
//       "&:hover": {
//         borderColor: "rgb(107 114 128)",
//       },
//       "&:focus": {
//         outline: "hidden",
//       },
//     }),
//   };

//   return (
//     <div
//       className="relative flex items-center justify-center w-full h-screen bg-center bg-cover font-outfit"
//       id="register"
//       style={{ backgroundImage: `url(${wedding})` }}
//     >
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
//       <form
//         onSubmit={handleSubmit}
//         className="absolute px-28 h-[35em] shadow-lg bg-white w-[50em] rounded-3xl"
//       >
//         <h2 className="text-center text-3xl text-[#FF6347] font-semibold mt-6 mb-10">
//           Register Now!
//         </h2>
//         <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
//         <div className="flex flex-col space-y-5">
//           <input
//             className="w-full p-2 pl-5 shadow-md focus:outline-none"
//             type="text"
//             placeholder="Full Name *"
//             value={formData.fullName}
//             onChange={(e) => {
//               setFormData({ ...formData, fullName: e.target.value });
//             }}
//             required
//           />
//           <input
//             className="w-full p-2 pl-5 shadow-md focus:outline-none"
//             type="email"
//             name="email"
//             placeholder="Email Address *"
//             value={formData.email}
//             onChange={(e) => {
//               setFormData({ ...formData, email: e.target.value });
//             }}
//             required
//           />
//           <div className="flex space-x-10">
//             <input
//               className="w-full p-2 pl-5 text-gray-400 shadow-md focus:outline-none"
//               type="date"
//               placeholder="Date Of Birth"
//               value={formData.dob}
//               onChange={(e) => {
//                 setFormData({ ...formData, dob: e.target.value });
//               }}
//               required
//             />
//             <Select
//               className="w-full"
//               styles={customStyles}
//               placeholder="Gender"
//               onChange={(selectedOption) => {
//                 setFormData({ ...formData, gender: selectedOption.value });
//               }}
//               options={options}
//               required
//             />
//           </div>
//           <input
//             className="w-full p-2 pl-5 shadow-md focus:outline-none"
//             type="password"
//             placeholder="Password *"
//             value={formData.password}
//             onChange={(e) => {
//               setFormData({ ...formData, password: e.target.value });
//             }}
//             required
//           />
//           <input
//             className="w-full p-2 pl-5 shadow-md focus:outline-none"
//             type="password"
//             placeholder="Confirm Password *"
//             required
//           />

//           <label
//             className="ml-2 text-sm text-center text-gray-600"
//             htmlFor="remember"
//           >
//             <input
//               type="checkbox"
//               id="terms"
//               name="terms"
//               onChange={handleTermsChange}
//             />{" "}
//             I've read and agree to the Terms and Conditions and Privacy Policy.
//           </label>
//           <button
//             type="submit"
//             className={`w-96 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold ${
//               isTermsChecked
//                 ? "hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
//                 : "opacity-50 cursor-not-allowed"
//             }`}
//             disabled={!isTermsChecked}
//           >
//             Register
//           </button>
//           <p className="text-center text-gray-600">
//             Already a Member?
//             <Link to="/login" className="text-[#F24822] ml-2 underline">
//               Log In
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;
