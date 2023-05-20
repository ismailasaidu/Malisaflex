import React from "react";
// import facebook from "./Assets/facebook.png"
const Footer = () => {
  const icons =[
    {imgSrc:"/linkedin.png"},
    {imgSrc:"/twitter.png"},
    {imgSrc:"/instagram.png"},
    {imgSrc:"/facebook.png"},
 
 
  


  ]
  return (
    <div className="h-[350px] mt-[100px]  sm:h-[600px] ">
      <div className="border-t-2 border-t-footertext mx-40 md:mx-14 sm:mx-8"></div>
      <div className="h-[200px] pt-[40px] flex sm:flex-col sm:text-center sm:h-[100%] justify-between sm:px-8 font-PJ md:px-[120px] px-[230px] ">
        <div className=" flex flex-col gap-[10px]">
          <div>
            {" "}
            <h1 className="text-footerblue  sm:text-[24px] font-bold">Company</h1>
          </div>
          <div   className="text-footertext flex flex-col gap-[10px]">
            <p>For SMEs</p>
            <p>About</p>
          </div>
        </div>
        <div className=" flex flex-col  gap-[10px]">
          <div>
            <h1 className="text-footerblue sm:text-[24px] font-bold">Socials</h1>
          </div>
          <div className="text-footertext flex flex-col gap-[10px]">
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className=" flex flex-col gap-[10px]">
          <div>
            <h1 className="text-footerblue sm:text-[24px] font-bold">Resources</h1>
          </div>
          <div className="text-footertext flex flex-col gap-[10px]">
            <p>Blog</p> font-bold
          </div>
        </div>
        <div className=" flex flex-col gap-[10px]">
          <div>
            {" "}
            <h1 className="text-footerblue sm:text-[24px] font-bold">Contact</h1>
          </div>
          <div className="text-footertext flex flex-col gap-[10px]">
            <p>info@malisaflex.io</p>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col px-[230px] sm:px-8 py-[30px] md:px-[120px] sm:text-center sm:mt-[-10px] mt-[60px] justify-between">
        <div>
          <p className="text-footertext">©Malisaflex 2023. All rights Reserved</p>
        </div>
        <div  className="flex gap-[30px] sm:hidden items-center">
        {icons.map((item) => {
                  return <img src={item?.imgSrc} />;
                })}
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
