import React from "react";
import hamburger from "../Assets/hamburger.png"
import { useEffect} from "react";
const Hero = () => {

  // const Goto = ()=>{
  //   window.scrollTo({
  //     top:3000,
  //     behavior:"smooth"
  //   }
   
  //   )
  // }

useEffect(() => {
  window.scrollTo({
    top:0
  })
}, [])


  const handleClickScroll = () => {
    const element = document.getElementById('newsletter');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
  };

  return (
    <div className="px-40 md:px-14 font-PJ py-[30px] sm:p-14 bg-[url('./Assets/herobg.png')]   bg-no-repeat bg-cover  bg-center  h-screen">
      <div className="flex font-semibold text-white text-[18px]  items-center justify-between">
        <h1>MalisaFlex</h1>
        <button className="border-2 w-[170px] sm:hidden md:w-[140px] md:text-[14px]  h-[50px] " onClick={handleClickScroll}>
          Join the Waitlist
        </button>
        <img src={hamburger} className="sm:block  hidden" onClick={handleClickScroll}/>
      </div>
      <section className="flex items-center    justify-center h-screen">
      <div className="text-center mt-[-10%] xs:mt-[-50%] ">
        <h1 className="text-white  md:text-[24px] sm:text-[20px] font-bold text-[50px]">
          Smart and Simple<br></br>
          Online Banking.
        </h1>
        <p className="text-white sm:mt-[5px]">
          With our secure online banking services, you can manage<br></br>
          your finances from anywhere, at any time.
        </p>
        <button className=" w-[170px] h-[50px] text-black mt-[40px] md:mt-0px  sm:w-[150px] text-[16px]  bg-white" onClick={handleClickScroll}>
          Join the Waitlist
        </button>
      </div>
      </section>
      
    </div>
  );
};

export default Hero;
