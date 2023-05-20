import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../lib/init-firebase';
import { useState , useEffect} from 'react';

const Waitlist = () => {
    const [Emails, setEmails] = useState([])

    useEffect(() => {
    getEmails()
    }, [])

    useEffect(() => {
     console.log(Emails)
    }, [Emails])
    

    function getEmails (){
        const EmailcollectionRef = collection (db, "Emails" )
        getDocs(EmailcollectionRef)
        .then((response)=>{
            const Email = response.docs.map((doc)=>({
                data: doc.data(),
                id: doc.id,
            }))
            setEmails(Email)
            console.log(Email)
        })
    }
  return (
    <div className="flex  items-center sm:px-[16px]   justify-center h-screen bg-[url('./Assets/herobg.png')]  bg-no-repeat bg-cover  bg-center ">
        {/* <h1>lore,5</h1> */}
        <div className='bg-white h-[400px] p-[10px] sm:rounded-lg rounded-lg w-[700px] overflow-y-scroll'>
            {
                Emails.map((item,index)=>{
                    return(
                        <div className='text-center border-b grid grid-cols-4  items-center'>
                            <p>{index + 1}</p>
                            <h1 className='text-black'>
                                {item.data.formValues.Email}
                            </h1>
                            {/* <p className='sm:hidden'>
                                {item.data.Time}
                            </p>
                            <p className='sm:hidden '>
                                {item.data.Date}
                            </p> */}
                        </div>
                    )
                })
            }
        </div>
        

    </div>
  )
}

export default Waitlist