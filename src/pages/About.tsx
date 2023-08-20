import { Component } from "solid-js";
import InnerHero from "../components/hero/InnerHero";
import LegalImageOne from "../assets/img/aboutIntro.jpg"
import AboutBackground from "../assets/img/pexels-cottonbro-studio-4098367.jpg"
import DiffrentImage from "../assets/img/about_diffrent.jpg"
import DomesticAbuse from "../assets/img/pexels-mart-production-7699511.jpg"

const About: Component = () => {
    return (
        <>
            <InnerHero image={AboutBackground}/>
            <div class="w-full py-16 bg-gray-50 flex justify-center">
                <div class="w-10/12">
                    <div class="w-full flex flex-wrap gap-0 sm:flex-nowrap sm:gap-3">
                        <div class="w-full sm:w-2/3">
                            <h1 class="text-3xl text-center">
                                About Our Firm
                            </h1>
                            <p class="py-6">
                                Established in 2019, Perduco Law is a firm of family 
                                law solicitors and legal experts operating nationwide. 
                                From the very beginning of our story, we have worked to 
                                raise the standards of the legal assistance that you 
                                will receive from us.
                                <br/><br/>
                                This is an ethos which is reflected in everything we do: 
                                from our strong desire to win the best outcomes in every case, 
                                to the fact that we deliver our work in plain, easy-to-understand 
                                language. We remove all of the unnecessary legalese, jargon and 
                                technicalities. When you do not understand an aspect of the 
                                law affecting your case, we are always happy to explain it 
                                in straightforward terms.
                                <br /><br />
                                It is also why we have chosen a fixed fee pricing structure for 
                                all of the legal work that we complete for you. It ensures 
                                that you understand the budget of your case from the very 
                                beginning. It safeguards you from the mounting hourly fees 
                                that a traditional legal firm may surprise you with. And it 
                                promotes a transparent relationship between our team and you, 
                                the client.
                                <br /><br />
                                We have learned that this one small behavioural change from us 
                                has helped to build the strongest of relationships with each 
                                of our clients. It is perhaps one of the most compelling 
                                reasons why Perduco Law has been voted among the most trusted 
                                names in the UK for family law, divorce, and finances.
                            </p>
                        </div>
                        <div 
                            class="w-full sm:w-1/3 bg-gray-100 h-72 sm:h-auto relative"
                            style={{"background-image":`url(${LegalImageOne})`,"background-size":"cover"}}
                        >
                            <div class="absolute w-full bg-opacity-40 h-full bg-black">

                            </div>
                        </div>
                    </div>
                    <div class="pt-20 w-full">
                        <h1 class="text-3xl text-center">
                            Our Family Law Services
                        </h1>
                        <p class="text-center py-6">
                            We have extensive experience and are experts in the following areas of family law:
                        </p>
                        <div class="w-full flex flex-wrap sm:flex-nowrap sm:gap-3 pt-3">
                            <div class="w-1/2 sm:w-1/4 h-72 bg-gray-200 flex relative">
                                <h3 class="m-auto text-xl z-20 text-white">
                                    Child Law
                                </h3>
                                <div class="absolute bg-black bg-opacity-30 w-full h-full">

                                </div>
                            </div>
                            <div class="w-1/2 sm:w-1/4 h-72 bg-gray-200 flex relative" style={{"background-image":`url(${DomesticAbuse})`, "background-size":"cover"}}>
                                <h3 class="m-auto text-xl text-white z-20">
                                    Domestic Abuse
                                </h3>
                                <div class="absolute bg-black bg-opacity-40 w-full h-full">

                                </div>
                            </div>
                            <div class="w-1/2 sm:w-1/4 h-72 bg-gray-200 flex relative" style={{"background-image":`url()`, "background-size":"cover"}}>
                                <h3 class="m-auto text-xl z-20 text-white">
                                    Divorce
                                </h3>
                                <div class="absolute bg-black bg-opacity-40 w-full h-full">

                                </div>
                            </div>
                            <div class="w-1/2 sm:w-1/4 h-72 bg-gray-200 flex relative">
                                <h3 class="m-auto text-xl z-20 text-white">
                                    Un-married Couples
                                </h3>
                                <div class="absolute bg-black bg-opacity-40 w-full h-full">

                                </div>
                            </div>
                        </div>
                        <div class="w-full py-20 flex flex-wrap sm:flex-nowrap justify-center sm:gap-x-10">
                            <div class="w-full sm:w-1/2 bg-gray-200 relative" style={{"background-image":`url(${DiffrentImage})`,"background-size":"cover"}}>
                                <div class="w-full h-full absolute bg-black bg-opacity-30">

                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <h1 class="text-3xl text-center">
                                    How we differ from traditional law firms
                                </h1>
                                <p class="py-6">
                                    Perduco Law a team of family law specialists, 
                                    is an alternative business structure, which means 
                                    we are an original type of legal organisation 
                                    brought in by the 2007 Legal Services Act. We’re a 
                                    new breed of law firm created for one reason: to 
                                    simplify the legal process and save you money.
                                    <br /><br />
                                    We follow a more transparent and cost-effective way 
                                    of working to provide a simple and straightforward 
                                    service for our clients. Our aim is to give you the 
                                    tools you need and the result you deserve for a 
                                    fraction of the price of our competitors.
                                    <br /><br />
                                    We have experienced family law legal specialists 
                                    standing by to take your call and help you navigate 
                                    your legal hurdles. Call us now on 
                                    <a href="tel:0330 165 9735" class="text-red-600">0330 165 9735</a> or 
                                    contact us online today and we’ll  call you right back.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;