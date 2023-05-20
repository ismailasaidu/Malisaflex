import React from 'react'
import { useState, useEffect } from "react";
import { db } from "../lib/init-firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";


const Newsletter = () => {
  const [availableMails, setavailableMails] = useState("")
  const [mail, setmail] = useState("")
  const initialValues = {
  
    Email: "",
  };
  console.log(initialValues);
  
useEffect(() => {
  console.log(availableMails)
}, [])

  const [errors, seterrors] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setisSubmit] = useState(false);
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log();
    }
  }, [errors]);

  const handleChange = (e) => {
 
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const upload = async (e) => {
    e.preventDefault();
  
    seterrors(validate(formValues));
    if (!formValues.Email) {
      alert("Please Input Email Address ");
    }else if(errors.email){
      alert("Invalid Email Address")
    }
     else {
      const newsletterRef = collection(db, "Emails");
      getDocs(newsletterRef)
      .then((response)=>{
       const mails= response.docs.map((doc)=>({
          data:doc.data(),
        }))
        const check = mails.map((item)=>{
          return item.data.formValues.Email
         
        })
        console.log(check)
        if (check.includes(formValues.Email)) {
          alert("you have registered")
        } else {
          addDoc(newsletterRef, {
            formValues,
            Date:new Date().toLocaleDateString(),
            Time:new Date().toLocaleTimeString(),
    
          })
            .then((response) => {
              console.log(response);
              alert("Sent Successfully");
         
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
             
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
     
      })
     
//   availableMails.map((item)=>{
// // console.log(item.data.formValues.Email)
// setmail(item.data.formValues.Email)
// })

     
   

      
    }
  };
  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};
    // const regex
    if (!regex.test(values.Email)) {
      errors.email = "This id not a valid email format!";
    }
    return errors;
    // if (!values.Email) {
    //   errors.Email = "Email required";
    // } else if (!regex.test(values.Email)) {
    //   errors.email = "This is not a valid email format!";
    // }

   
  };

  return (
    <div id='newsletter'  className='mx-[40px] rounded-lg mt-[80px]  sm:mx-[10%] font-PJ h-[200px] sm:h-[400px] md:h-[240px] flex sm:flex-col  sm:p-[30px] items-center justify-center sm:gap-[30px] gap-[60px] bg-blue px-[30px] md:py-[20px]'>
      <div className='text-white'>
        <h1 className='font-bold text-[30px]'>Always be in the know</h1>
        <p className='text-[14px] mt-[15px] sm:text-left'>Subscribe to our newsletter to get first hand<br></br>updates on everything concerning MalisaFlex.</p>
      </div>
      <div className='flex  gap-[15px] mt-[20px] flex-col'>
        <div><input  type="email" name="Email" placeholder='Enter your email  to subscribe' className='w-[330px] sm:w-[100%] text-[12px] px-[20px] sm:px-[20px] h-[38px] outline-none rounded-lg border border-white sm:text-[10px] bg-blue backdrop-blur-xl'
           value={formValues.Email}
          
           onChange={handleChange}/></div>
           <div>
           <button className="bg-white text-[14px] w-[100px] rounded-lg mt-[20px] text-blue h-[40px] sm:w-[100%]" onClick={upload}>SUBSCRIBE</button>
           </div>
        
      </div>
    </div>
  )
}

export default Newsletter