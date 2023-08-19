import { Component } from "solid-js";
import InnerHero from "../components/hero/InnerHero";
import ContactForm from "../components/forms/ContactForm";

const Contact:Component = () => {
    return (
        <>
            <InnerHero />
            <div class="w-full py-16 bg-gray-50 flex justify-center">
                <div class="w-10/12">
                    <div class="w-2/3">
                        <ContactForm />
                    </div>
                    <div class="w-1/3">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;