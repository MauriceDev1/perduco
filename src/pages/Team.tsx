import { Component } from "solid-js";
import InnerHero from "../components/hero/InnerHero";
import TeamBackground from "../assets/img/team.jpg"

const Team:Component = () => {
    return (
        <>
            <InnerHero image={TeamBackground}/>
            <div class="w-full py-16 bg-gray-50 flex justify-center">
                <div class="w-10/12">
                    <div class="w-full flex gap-5">
                        <div class="w-2/3">
                            <h1 class="text-3xl text-center">
                                Our Team of Professionals
                            </h1>
                            <p class="py-6">
                                Welcome to Perduco Family Law, where compassion meets 
                                expertise in addressing all your family law requirements. 
                                We understand that family matters can be complex, emotional, 
                                and sensitive, and that's why our dedicated team of 
                                professionals is here to guide you through every step of 
                                the journey. <br /><br />With a deep commitment to achieving the best 
                                possible outcomes for you and your loved ones, our 
                                experienced attorneys are well-versed in all aspects of 
                                family law, from divorce and child custody to adoption and 
                                estate planning. <br /><br />At Perduco, we blend our legal acumen with 
                                a genuine understanding of the personal dynamics at play, 
                                ensuring that you receive not only top-tier legal 
                                representation but also unwavering support during these 
                                challenging times. <br /><br /> Your family's well-being and future are 
                                at the heart of everything we do, and we're here to provide 
                                clarity, resolution, and a path forward.
                            </p>
                        </div>
                        <div class="w-1/3 bg-gray-100 relative">
                            <div class="w-full h-full bg-black bg-opacity-30 absolute">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;