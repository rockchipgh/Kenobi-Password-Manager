import React from "react";


function Mainheader(){
    return(
        <div className="px-0.0 bg-orange font-actor">
        
        
                    <nav class="flex items-center justify-between flex-wrap bg-darkgrey p-6">
                    <div class="flex items-center flex-no-shrink text-white mr-6">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/4061/4061701.svg?token=exp=1618405666~hmac=91cea5ad6ae7771220279c5d0b861bc8" alt="logo" width="50" class="mr-3"></img>
                        <span class="font-normal text-white text-3xl font-actor">KENOBI</span>
                    </div>
                    <div class="block lg:hidden">
                        <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div class="text-sm lg:flex-grow">
                        <a href="www.google.com" class="block mt-4 lg:inline-block lg:mt-3 text-white hover:text-orange font-light mr-4">
                            ABOUT
                        </a>
                        <a href="www.google.com" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange font-light mr-4">
                            CONTACT
                        </a>
                       
                        </div>
                        <div>
                        <a href="www.google.com" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange font-light mr-4">
                            LOGIN
                        </a>
                        <a href="www.google.com" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-orange hover:border-transparent bg-orange hover:text-teal mt-4 lg:mt-0">REGISTER</a>
                        </div>
                    </div>
                    </nav>
                    <div className="bg-lightgrey"></div>
                    
            

        </div>    

        
    );
}
export default Mainheader;