export const HeroSection = ({heading,details,button,bg}) => {
     return (
          <div className={`${bg} md:bg-right bg-no-repeat bg-contain h-[calc(100vh-6rem)] md:h-fit lg:h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-6rem)] bg-green-50`}>
               <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 h-full md:py-20 lg:py-0">
                    <div className="flex flex-col justify-end sm:justify-center items-center md:items-start space-y-6 -mt-10 sm:mt-0 md:space-y-6 h-full text-center md:text-left md:w-1/2 lg:w-full">
                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-700">
                              {heading}
                         </h1>
                         <p className="text-gray-600 text-base sm:text-lg  lg:text-xl max-w-xl mx-auto md:mx-0 ">
                             {details}
                         </p>
                         <button className="px-6 py-2 sm:px-8 sm:py-3 bg-green-600 text-white rounded text-lg sm:text-xl font-semibold hover:bg-green-700 transition">
                              {button}
                         </button>
                    </div>
               </div>
          </div>
     );
};