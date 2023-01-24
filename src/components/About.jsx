import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="pb-8 pl-4">
                 <p className="text-4xl font-bold inline border-b-4 border-[#18b8c1] ">
                   About
                 </p>
               </div>

               <div></div> 
              
               <div className="max-w-[1000px] w-full grid  gap-8 px-4">
                    <div className="text-4xl font-bold text-left">
                        <p>
                          Hi . I'm Harold, nice to meet you, Please take a look around.
                        </p>
                    </div>
               </div> 

               <div>
                   <p className="text-[#18b8c1] px-4 ">
                     I am passionate about building excellent software that improves the lives of those around me. I specialize in  creating     software for clients ranging from individuals and small-businesses all the way to large enterprise  corporations. What   would   you do if you had a software expert available at your fingertips?
                   </p>
               </div>
            </div>
        </div>
    </div>
    
  );
};

export default About;
