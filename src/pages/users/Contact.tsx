import { Component, createSignal } from "solid-js";
import InnerHero from "../../components/hero/InnerHero";
import ContactForm from "../../components/forms/ContactForm";
import ContactBackgroun from "../../assets/img/contact.jpg"
import { IoAdd, IoRemove } from "solid-icons/io";

const Contact:Component = () => {
    const [cityState,setCityState] = createSignal('central')
    return (
        <>
            <InnerHero image={ContactBackgroun} />
            <div class="w-full py-16 bg-gray-50 flex flex-wrap justify-center">
                <div class="w-11/12 sm:w-10/12 flex sm:gap-3 flex-wrap sm:flex-nowrap">
                    <div class="w-full sm:w-2/3">
                        <h1 class="text-3xl">
                            Get in touch
                        </h1>
                        <p class="py-6 sm:pr-36">
                            Contact our team of experienced and knowledgeable 
                            solicitors. We are always ready to plan and co-ordinate 
                            your case with professionalism and care.
                            <br />
                            Call us now on <a href="tel:0330 165 9735" class="text-red-600">0330 165 9735</a> to book a one hour consultation 
                            or contact us online and a member of our team will be in touch.
                        </p>
                        <ContactForm />
                    </div>
                    <div class="w-full sm:w-1/3">
                        <h1 class="text-3xl pb-6">
                            Our Office Locations
                        </h1>
                        <div class="w-full">
                            <div class={`w-full flex justify-between items-center ${cityState() === 'central' ? 'bg-gray-900 text-white' : 'bg-gray-200'} px-5 rounded-sm mb-1`}>
                                <h2 class="text-lg py-3">
                                    Central London
                                </h2>
                                {cityState() === 'central' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setCityState('central')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                    }
                            </div>
                            <div class={`${cityState() === "central" ? "h-96" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1 bg-gray-100`}>
                                <p class="px-5 py-4">
                                    City Office West End
                                    <br /><br />
                                    107 Cheapside
                                    <br />
                                    London
                                    <br />
                                    EC2V 6DN
                                    <br />
                                    United Kingdom
                                </p>
                                <div class="px-5">
                                    <div class="border border-red-600">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.582183255177!2d-0.09397080495049952!3d51.51395006938049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035559fbd093%3A0x366df7fecab1a53f!2s107%20Cheapside%2C%20London%20EC2V%206DN%2C%20UK!5e0!3m2!1sen!2sza!4v1692552023325!5m2!1sen!2sza" width="100%" height="200" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class={`w-full flex justify-between items-center ${cityState() === 'fee' ? 'bg-gray-900 text-white' : 'bg-gray-200'} px-5 rounded-sm mb-1`}>
                                <h2 class="text-lg py-3">
                                    Greater London
                                </h2>
                                {cityState() === 'fee' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setCityState('fee')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${cityState() === "fee" ? "h-96" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1 bg-gray-100`}>
                                <p class="px-5 py-4">
                                    Bromley Richmond Southgate
                                    <br /><br />
                                    Newman Road
                                    <br />
                                    Bromley
                                    <br />
                                    BR1
                                </p>
                                <div class="px-5">
                                    <div class="border border-red-600">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1108.6070023499203!2d0.017733676125022798!3d51.40785932363385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8aa6b7bbc59c1%3A0xf5c6018a1e4302d8!2sNewman%20Rd%2C%20Bromley%2C%20UK!5e0!3m2!1sen!2sza!4v1692552324187!5m2!1sen!2sza" width="100%" height="200" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class={`w-full flex justify-between items-center ${cityState() === 'language' ? 'bg-gray-900 text-white' : 'bg-gray-200'} px-5 rounded-sm mb-1`}>
                                <h2 class="text-lg py-3">
                                    North West
                                </h2>
                                {cityState() === 'language' 
                                    ? 
                                        <IoRemove />
                                    : 
                                        <button
                                            onClick={() => setCityState('language')}
                                        >
                                            <IoAdd /> 
                                        </button>
                                }
                            </div>
                            <div class={`${cityState() === "language" ? "h-96" : "h-0"} overflow-hidden duration-300 ease-in-out mb-1 bg-gray-100`}>
                                <p class="p-5">
                                    Manchester
                                    <br /><br />
                                    Peter House
                                    <br/>
                                    Manchester
                                    <br />
                                    M1 5AN
                                </p>
                                <div class="px-5">
                                    <div class="border border-red-600">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1294.7123332604629!2d-2.2439724881536227!3d53.4771660237977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1ea05c82c13%3A0x6c6b7df5cd395470!2sPeter%20House%2C%20Oxford%20St%2C%20Manchester%20M1%205AN%2C%20UK!5e0!3m2!1sen!2sza!4v1692552469053!5m2!1sen!2sza" width="100%" height="200" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;