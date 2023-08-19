import { Component } from "solid-js";
import InnerHero from "../components/hero/InnerHero";

const About: Component = () => {
    return (
        <>
            <InnerHero />
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
                        <div class="w-full sm:w-1/3 bg-gray-100 h-56 sm:h-auto">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;