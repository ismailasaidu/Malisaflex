import React from "react";
import Newsletter from "./Newsletter";
import online from "../Assets/online.png"
const Body = () => {
  const Goal = [
    {
     imgSrc:"/pic1.png",
      header: "Super convenient online banking",
      details:
        "You can view your account balances, transaction history and statements and even set up custom alerts to help you stay on top of your finances.",
    },
    {
      imgSrc:"pic2.png",
      header:"Be in complete control over your money",
      details:"Our online banking platform is protected with the latest encryption technology and multi-factor authentication, giving you peace of mind when managing your finances."
    },
    {imgSrc:"pic3.png",
      header:"Virtual or Physical -It’s your choice.",
      details:"Whether you’re at home, at work, or on the go, our online banking platform is accessible from your computer, tablet, or mobile device. With our mobile banking app, you can even deposit checks and manage your accounts on the go."
    }
  ];

  return (
    <section>
      <div className="mx-[230px] font-PJ py-[100px] sm:hidden md:mx-14 flex flex-col gap-[100px]">
        <div className="flex justify-between  items-end md:gap-[30px] h-[450px]  ">
          <div className=" ">
            {/* <div className=" bg-[('/pic1.png')] bg-center bg-no-repeat h-[100%] md:h-[80%]  md:w-[300px] w-[400px] "></div> */}
            <img src="/pic1.png" alt="" className="h-[100%] md:h-[80%]  md:w-[300px] w-[400px] " />
          </div>
          <div className=" flex  flex-col md:pt-[217px] pt-[310px] gap-[10px]">
            <h1 className="text-darkBlue font-bold text-[22px]">
              Super convenient <br></br>
              online banking
            </h1>
            <p className="text-darkBlue text-[16px] ">
              You can view your account balances, transaction<br></br> history
              and statements and even set up custom<br></br> alerts to help you
              stay on top of your finances.
            </p>
          </div>
        </div>
        <div className="flex justify-between  items-end h-[450px] ">
          <div className=" flex  flex-col md:pt-[217px] pt-[310px] gap-[10px]">
            <h1 className="text-darkBlue font-bold text-[22px]">
             
            Be in complete control<br></br>
over your money
            </h1>
            <p className="text-darkBlue text-[16px] ">
            Our online banking platform is protected with the<br></br> latest encryption technology and multi-factor<br></br> authentication, giving you peace of mind when<br></br> managing your finances.
            </p>
          </div>
          <div className=" ">
          {/* <div className=" bg-['/pic2.png'] bg-center bg-no-repeat h-[100%] md:h-[80%]  md:w-[300px] w-[400px] "></div> */}
          <img src="/pic2.png" alt="" className="h-[100%] md:h-[80%]  md:w-[300px] w-[400px] " />
          </div>
        </div>
        <div className="flex justify-between  items-end h-[450px] ">
          <div className=" ">
          {/* <div className=" bg-['/pic3.png'] bg-center bg-no-repeat h-[100%] md:h-[80%]  md:w-[300px] w-[400px] "></div> */}
          <img src="/pic3.png" alt="" className="h-[100%] md:h-[80%]  md:w-[300px] w-[400px] " />
          </div>
          <div className=" flex  flex-col md:pt-[217px] pt-[310px] gap-[10px]">
            <h1 className="text-darkBlue font-bold text-[22px]">
            Virtual or Physical -<br></br>
It’s your choice.
            </h1>
            <p className="text-darkBlue text-[16px] ">
            Whether you’re at home, at work, or on the go, our<br></br> online banking platform is accessible from your<br></br> computer, tablet, or mobile device. With our<br></br> mobile banking app, you can even deposit checks<br></br> and manage your accounts on the go.
            </p>
          </div>
        </div>
       
      </div>
      <div className="hidden sm:block   font-PJ py-[100px]  ">
        {Goal.map((item) => {
          return (
            <div className="mt-[80px]" >
            <div className="flex flex-col  items-center" >
              {/* <div ></div> */}
              <img src={item.imgSrc} alt="" className="h-[300px]  bg-blue  w-[60%] mx-[70px]"/>

              <div className=" text-center">
                <h1 className="text-darkBlue font-black text-[30px] text-center px-[20px]">{item.header}</h1>
                <p className="text-center text-darkBlue px-[80px] mt-[10px] leading-[30px]">{item.details}</p>
              </div>
            </div>
            </div>
          );
        })}
      
      </div>
    </section>
  );
};

export default Body;
