import { Component, createSignal } from "solid-js";
import MainHero from "../components/hero/MainHero";
import Trusted from "../assets/img/shield.png"
import PaymentPlan from "../assets/img/law.png"
import PersonalSupport from "../assets/img/puzzle.png"
import FixedFees from "../assets/img/judge.png"
import { IoAdd, IoRemove } from "solid-icons/io";
import WhyBackgroundImage from "../assets/img/why.jpg"
import ServiceCarousel from "../components/genral/ServiceCarousel";
import Faqs from "../assets/img/Faqs.jpg"

const Home: Component = () => {
    const [whyState,setWhyState] = createSignal('children');
    const [faqState,setFaqState] = createSignal('solicitor');
    return (
        <>
            <MainHero />
            <div class="w-full py-16 flex justify-center bg-gray-50">
                <div class="w-10/12 flex sm:gap-5 flex-wrap sm:flex-nowrap">
                    <div class="w-full sm:w-1/4">
                        <img src={FixedFees} class="h-16 mx-auto"/>
                        <h3 class="text-xl text-center py-4">
                            Fixed Fees
                        </h3>
                        <p class="text-center px-5">
                            Our fixed fees include being appointed 
                            your own allocated solicitor to complete 
                            and assist with every aspect of your case.
                        </p>
                    </div>
                    <div class="w-full sm:w-1/4">
                        <img src={Trusted} class="h-16 mx-auto"/>
                        <h3 class="text-xl text-center py-4">
                            Trusted Experts
                        </h3>
                        <p class="text-center px-5">
                            We manage cases on an individual basis and 
                            have an enviable track record in achieving 
                            the best outcomes for our clients.
                        </p>
                    </div>
                    <div class="w-full sm:w-1/4">
                        <img src={PaymentPlan} class="h-16 mx-auto"/>
                        <h3 class="text-xl text-center py-4">
                            Payment Plans*
                        </h3>
                        <p class="text-center px-5">
                            Spread the cost of the fixed fee over four months.<br />
                            *Subject to income verification and soft credit search.
                        </p>
                    </div>
                    <div class="w-full sm:w-1/4">
                        <img src={PersonalSupport} class="h-16 mx-auto"/>
                        <h3 class="text-xl text-center py-4">
                            Personalised Support
                        </h3>
                        <p class="text-center px-5">
                            Our experts are passionate about offering you the best 
                            possible end-to-end service.
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full py-16 flex justify-center bg-gray-50">
                <div class="w-10/12">
                    <h1 class="text-3xl text-center pb-10">
                        Why Choose Perduco Law?
                    </h1>
                    <div class="w-full flex flex-wrap sm:flex-nowrap sm:gap-5">
                        <div class="w-1/2 bg-gray-100 relative flex" style={{"background-image":`url(${WhyBackgroundImage})`,"background-size":"cover"}}>
                            <div class="bg-black w-full h-full bg-opacity-30 absolute top-0 left-0">

                            </div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="flex justify-between items-center bg-gray-200 px-5 rounded-sm mb-1">
                                <h2 class="text-lg py-6">
                                    We Specialise In Children & Family Law
                                </h2>
                                {whyState() === 'children' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setWhyState('children')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                    }
                            </div>
                            <div class={`${whyState() === "children" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1`}>
                                <p class="p-5">
                                    Perduco Law specialises in Children & Family 
                                    Law.All of our solicitors have in depth experience 
                                    in dealing with Divorce, Financial Settlements in 
                                    Divorce, Child Arrangements and Domestic Abuse 
                                    issues in both simple and highly complex cases.
                                </p>
                            </div>
                            <div class="flex justify-between items-center bg-gray-200 px-5 rounded-sm">
                                <h2 class="text-lg py-6">
                                    We Only Work on a Fixed Fee Basis
                                </h2>
                                {whyState() === 'fee' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setWhyState('fee')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${whyState() === "fee" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1`}>
                                <p class="p-5">
                                    At Perduco Law, we charge our clients on a Fixed 
                                    Fee Basis only.This enables our clients to know 
                                    exactly what they are going to pay and what they 
                                    are paying for from the outset with no hidden 
                                    extras.
                                </p>
                            </div>
                            <div class="flex justify-between items-center bg-gray-200 px-5 rounded-sm">
                                <h2 class="text-lg py-6">
                                    We speak to you in a Language you will understand
                                </h2>
                                {whyState() === 'language' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setWhyState('language')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${whyState() === "language" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1`}>
                                <p class="p-5">
                                    From the moment you call us, you will see the difference 
                                    in how we communicate with our clients – in easy to 
                                    understand terms without all of the legal jargon. We 
                                    pride ourselves in how we break everything down for 
                                    our clients in both the process and the costs so you 
                                    know exactly where you stand.
                                </p>
                            </div>
                            <div class="flex justify-between items-center bg-gray-200 px-5 rounded-sm">
                                <h2 class="text-lg py-6">
                                    We Stand Out from the Crowd
                                </h2>
                                {whyState() === 'crowd' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setWhyState('crowd')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${whyState() === "crowd" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1`}>
                                <p class="p-5">
                                    We are a new breed of law firm created for one reason; 
                                    to simplify the legal process and charge you a fair and 
                                    transparent fixed price. From the outset, we will tell 
                                    you what is going to happen, stage by stage, how we are 
                                    going to progress and resolve your case and what we are 
                                    going to charge you for doing so. Our solicitors are 
                                    targeted to resolve your case, not to bill hours.
                                </p>
                            </div>
                            <div class="flex justify-between items-center bg-gray-200 px-5 rounded-sm">
                                <h2 class="text-lg py-6">
                                    We Care
                                </h2>
                                {whyState() === 'care' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setWhyState('care')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${whyState() === "care" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out`}>
                                <p class="p-5">
                                    All of our team are passionate about what they do, and 
                                    are there to support you throughout what are normally 
                                    incredibly difficult circumstances for our clients. We 
                                    are here to guide you and resolve your matter. We are 
                                    not focused on hours – instead, we are focused on achieving 
                                    the best outcome for you and your family.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full py-16 flex justify-center bg-gray-50">
                <div class="w-10/12">
                    <h1 class="text-3xl text-center pb-6">
                        Our Areas of Expertise
                    </h1>
                    <ServiceCarousel />
                </div>
            </div>
            <div class="w-full pt-5 pb-16 flex justify-center bg-gray-50">
                <div class="w-10/12">
                    <div class="w-full">
                        <h1 class="text-3xl text-center">FAQ</h1>
                        <p class="py-6 sm:px-40 text-center">
                            We are here to help and assist you, so if the answers 
                            to your questions have not been covered here – the 
                            quickest way would be to give us a call. Alternatively, 
                            you can fill out our contact form by clicking the button 
                            below.
                        </p>
                    </div>
                    <div class="flex pt-5 flex-wrap sm:flex-nowrap sm:gap-5">
                        <div class="w-full sm:w-1/2">
                            <div class="w-full flex justify-between items-center bg-gray-200 px-5 rounded-sm mb-1">
                                <h2 class="text-lg py-6">
                                    Why are you different to a High Street Solicitor?
                                </h2>
                                {faqState() === 'solicitor' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setFaqState('solicitor')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                    }
                            </div>
                            <div class={`${faqState() === "solicitor" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1`}>
                                <p class="p-5">
                                    We charge a fixed fee for our service. That means you know 
                                    exactly what you’re going to pay before starting the process.
                                </p>
                            </div>
                            <div class="flex justify-between items-center bg-gray-200 px-5 rounded-sm">
                                <h2 class="text-lg py-6">
                                    What does the Caseworker do on my behalf?
                                </h2>
                                {faqState() === 'behalf' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setFaqState('behalf')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${faqState() === "behalf" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1`}>
                                <p class="p-5">
                                    The caseworker does all the legal legwork for the full 
                                    duration of your case. We keep you informed of any changes 
                                    and advise you on the next steps to ensure there are no 
                                    surprises.
                                </p>
                            </div>
                            <div class="flex justify-between items-center bg-gray-200 px-5 rounded-sm">
                                <h2 class="text-lg py-6">
                                    How long does the divorce take to complete?
                                </h2>
                                {faqState() === 'divorce' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setFaqState('divorce')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${faqState() === "divorce" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1`}>
                                <p class="p-5">
                                    If your divorce process is relatively straight forward, 
                                    it can take anything from 5-7 months, depending on your 
                                    circumstances.
                                </p>
                            </div>
                            <div class="flex justify-between items-center bg-gray-200 px-5 rounded-sm">
                                <h2 class="text-lg py-6">
                                    What are my rights as a grandparent?
                                </h2>
                                {faqState() === 'grandparent' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setFaqState('grandparent')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${faqState() === "grandparent" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1`}>
                                <p class="p-5">
                                    Each case is different. However, as a grandparent you 
                                    do not automatically receive the same rights as a parent. 
                                    Perudco Law can assist you in protecting and 
                                    exercising your rights as a Grandparent, whatever your 
                                    situation. Learn more about how Perduco Law can help.
                                </p>
                            </div>
                            <div class="flex justify-between items-center bg-gray-200 px-5 rounded-sm">
                                <h2 class="text-lg py-6">
                                    What does the judge take into consideration before making a decision
                                </h2>
                                {faqState() === 'judge' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setFaqState('judge')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${faqState() === "judge" ? "h-40" : "h-0"} overflow-hidden duration-300 ease-in-out`}>
                                <p class="p-5">
                                    A judge would normally look at the wishes and feelings 
                                    of the child concerned – in relation to their age, physical, 
                                    and emotional needs – and how capable each parent or 
                                    guardian may be in providing the necessary care and 
                                    attention required.
                                </p>
                            </div>
                        </div>
                        <div class="w-1/2 bg-gray-100 relative" style={{"background-image":`url(${Faqs})`,"background-size":"cover"}}>
                            <div class="w-full h-full absolute bg-black bg-opacity-40 top-0 bottom-0 left-0">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full py-16 flex justify-center bg-gray-50">
                <div class="w-10/12">
                    <h1 class="text-3xl text-center">
                        Take a look at what our clients say:
                    </h1>
                </div>
            </div>
        </>
    )
} 

export default Home;