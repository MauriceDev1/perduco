import { Component } from "solid-js";
import MainBackgroundImage from "../../assets/img/pexels-karolina-grabowska-7876299.jpg"
import TrustPilot from "../../assets/img/TrustPilot.png"
import Stars from "../../assets/img/stars-4.5.png"
import { useAssesModalContext } from "../../context/AssesmentModal";

const MainHero: Component = () => {
    const {setModalState} = useAssesModalContext();

    return (
        <div class="w-full flex h-[80vh] bg-gray-100 relative" style={{"background-image":`url(${MainBackgroundImage})`,"background-size":"cover"}}>
            <div class="w-full bg-black bg-opacity-50 absolute h-full">
            </div>
            <div class="sm:my-auto z-20 lg:w-5/12 px-5 lg:pl-20 mt-52">
                <h1 class="text-5xl lg:text-7xl font-bold text-white">
                    Family Law & <br /> Divorce Solicitors
                </h1>
                <p class="text-gray-100 text-lg lg:text-xl py-10">
                    We are a top rated city law firm with a dynamic 
                    team of expert family lawyers committed to delivering 
                    quality legal services with ethical transparent advice 
                    and fees that are not by the hour.
                </p>
                <button 
                    onClick={() => setModalState(true)}
                    class="h-10 px-5 bg-red-700 hover:bg-red-900 duration-500 rounded-sm text-white"
                >
                    Book A Case Assessment
                </button>
            </div>
            <div class="absolute top-5 sm:top-10 right-5 sm:right-20">
                <img src={TrustPilot} class="h-6"/>
                <img src={Stars} class="h-8 my-1"/>
                <p class="text-white text-sm">TrustScore <span class="font-bold">4.7</span></p>
                <p class="text-white text-sm"><span class="font-bold">312</span> Reviews</p>
            </div>
        </div>
    )
}

export default MainHero;