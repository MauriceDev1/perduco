import { Component } from "solid-js";
import MainBackgroundImage from "../../assets/img/pexels-karolina-grabowska-7876299.jpg"
import TrustPilot from "../../assets/img/TrustPilot.png"

const MainHero: Component = () => {
    return (
        <div class="w-full flex h-[80vh] bg-gray-100 relative" style={{"background-image":`url(${MainBackgroundImage})`,"background-size":"cover"}}>
            <div class="w-full bg-black bg-opacity-50 absolute h-full">
            </div>
            <div class="my-auto z-20 lg:w-5/12 px-5 lg:pl-20">
                <h1 class="text-5xl lg:text-7xl font-bold text-white">
                    Family Law & <br /> Divorce Solicitors
                </h1>
                <p class="text-gray-100 text-lg lg:text-xl py-10">
                    We are a top rated city law firm with a dynamic 
                    team of expert family lawyers committed to delivering 
                    quality legal services with ethical transparent advice 
                    and fees that are not by the hour.
                </p>
                <button class="h-10 px-5 bg-red-700 hover:bg-red-900 duration-500 rounded-sm text-white">
                    Book A Case Assessment
                </button>
            </div>
            <div class="absolute top-10 right-20">
                <img src={TrustPilot} class="h-8"/>
            </div>
        </div>
    )
}

export default MainHero;