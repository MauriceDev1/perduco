import {Component} from "solid-js"
import "solid-slider/slider.css";
import { SliderProvider, Slider, SliderButton } from "solid-slider";
import { IoChevronBack, IoChevronForward } from "solid-icons/io";
import FatherAndChild from "../../assets/img/father-and-child.jpg"
import Divorce from "../../assets/img/Divorce.jpg"
import Domestic from "../../assets/img/Domestic.jpg"
import UnMarried from "../../assets/img/unMarried.jpg"

const ServiceCarousel:Component = () => {
    const options = {
        loop: true, 
        breakpoints: {
            "(min-width: 400px)": {
              slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 1000px)": {
              slides: { perView: 2, spacing: 10 },
            },
        },
    };

    return (
        <div class="w-full flex flex-wrap justify-center relative">
            <SliderProvider>
                <div class="w-11/12">
                    <Slider options={options}>
                        <div class="w-full">
                            <div class="w-full bg-gray-100 h-80 relative overflow-hidden" style={{"background-image":`url(${FatherAndChild})`,"background-size":"cover"}}>
                                <div class="absolute bg-black w-full h-full top-0 left-0 bottom-0 right-0 bg-opacity-40">

                                </div>
                            </div>
                            <h3 class="text-center py-2 text-xl">
                                Child Law
                            </h3>
                            <p class="px-5 text-center">
                                Changes made to the law in recent years have made 
                                it harder for parents and grandparents to see their 
                                children and grandchildren. The financial and emotional 
                                burden of a long court case can sometimes seem impossible 
                                to navigate. We manage over 400 cases at any one time and 
                                have an enviable track record in achieving the best outcomes 
                                for our clients. We can help you find another, less painful 
                                way to a resolution.
                            </p>
                            <div class="w-full justify-center flex pt-3">
                                <button class="h-9 px-5 bg-red-700 hover:bg-red-900 duration-500 rounded-sm text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="w-full bg-gray-100 h-80 relative overflow-hidden" style={{"background-image":`url(${Divorce})`,"background-size":"cover"}}>
                                <div class="absolute bg-black w-full h-full top-0 left-0 bottom-0 right-0 bg-opacity-40">

                                </div>
                            </div>
                            <h3 class="text-center py-2 text-xl">
                                Divorce and Finance
                            </h3>
                            <p class="px-5 text-center">
                                One quarter of marriages in the UK end in divorce. This can 
                                be costly, both emotionally and financially. We specialise 
                                in both applying for and defending Divorce Petitions and 
                                managing the divorce process. We are the UK’s most 
                                cost-effective solution for Family Law and can assist 
                                you with your case for an affordable fixed fee. Our fixed 
                                fees include being appointed your own allocated Case Worker 
                                who complete and assist with every aspect of your case until 
                                completion.
                            </p>
                            <div class="w-full justify-center flex pt-3">
                                <button class="h-9 px-5 bg-red-700 hover:bg-red-900 duration-500 rounded-sm text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="w-full bg-gray-100 h-80 relative overflow-hidden" style={{"background-image":`url(${Domestic})`,"background-size":"cover"}}>
                                <div class="absolute bg-black w-full h-full top-0 left-0 bottom-0 right-0 bg-opacity-40">

                                </div>
                            </div>
                            <h3 class="text-center py-2 text-xl">
                                Domestic Violence
                            </h3>
                            <p class="px-5 text-center">
                                Sadly, domestic violence is still a major threat to many people in 
                                the UK and on the rise. We have specialists on hand to help you when 
                                you feel helpless. To give you hope when you feel helpless. Experienced 
                                women and men on our team can give you the tools you need to safeguard 
                                both yourself and your loved ones.
                            </p>
                            <div class="w-full justify-center flex pt-3">
                                <button class="h-9 px-5 bg-red-700 hover:bg-red-900 duration-500 rounded-sm text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="w-full bg-gray-100 h-80 relative overflow-hidden" style={{"background-image":`url(${UnMarried})`,"background-size":"cover"}}>
                                <div class="absolute bg-black w-full h-full top-0 left-0 bottom-0 right-0 bg-opacity-40">

                                </div>
                            </div>
                            <h3 class="text-center py-2 text-xl">
                                Un-married Seperation
                            </h3>
                            <p class="px-5 text-center">
                                There is a common misconception that unmarried couples have 
                                the same rights as married couples. This isn’t always the 
                                case and we can explain why. Let us know your circumstances 
                                and we can give you the advice you need to help you protect 
                                yourself, your loved ones, and your financial assets.
                            </p>
                            <div class="w-full justify-center flex pt-3">
                                <button class="h-9 px-5 bg-red-700 hover:bg-red-900 duration-500 rounded-sm text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div class="w-full absolute top-48 text-3xl text-gray-500 px-2">
                    <SliderButton prev class="hover:text-red-600">
                        <IoChevronBack />
                    </SliderButton>
                    <SliderButton next class="float-right hover:text-red-600">
                        <IoChevronForward />
                    </SliderButton>
                </div>
            </ SliderProvider>
        </div>
    );
};

export default ServiceCarousel;