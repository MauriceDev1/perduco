import { Component } from "solid-js";
import InnerHero from "../components/hero/InnerHero";
import ContactForm from "../components/forms/ContactForm";

const Contact:Component = () => {
    return (
        <>
            <InnerHero />
            <div class="w-full py-16 bg-gray-50 flex flex-wrap justify-center">
                <div class="w-11/12 sm:w-10/12 flex flex-wrap">
                    <div class="w-full sm:w-2/3">
                        <ContactForm />
                    </div>
                    <div class="w-full sm:w-1/3">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;