import { Component, For } from "solid-js";
import SRA from "../../assets/img/32365_Digital-badge.jpg"
import { A } from "@solidjs/router";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoCall } from 'solid-icons/io'

const Footer: Component = () => {
    const ServiceLinks = [
        {
            id: 1,
            name: 'Family Law',
            link: '',
        },
        {
            id: 2,
            name: 'Child Law',
            link: '',
        },
        {
            id: 3,
            name: 'Divorce Law',
            link: '',
        },
        {
            id: 4,
            name: 'Domestic Violence',
            link: '',
        },
        {
            id: 5,
            name: 'Unmarried Couples',
            link: '',
        },
    ];

    const LegalLinks = [
        {
            id: 1,
            name: 'Complaints Procedure',
            link: '',
        },
        {
            id: 2,
            name: 'Privacy Policy',
            link: '',
        },
    ];

    const ContactLinks = [
        {
            id: 1,
            name: '0330 165 9735',
            link: '',
        },
        {
            id: 2,
            name: 'info@perducolaw.com',
            link: '',
        }
    ];

    const SocialLinks = [
        {
            id: 1,
            icon: <IoLogoFacebook class="text-xl"/>,
            link: '',
        },
        {
            id: 2,
            icon: <IoLogoTwitter class="text-xl"/>,
            link: '',
        },
        {
            id: 3,
            icon: <IoCall class="text-xl"/>,
            link: '',
        },
        {
            id: 4,
            icon: <IoLogoLinkedin class="text-xl"/>,
            link: '',
        },
    ];

    return (
        <>
            <footer class="w-full flex justify-center bg-gray-800 py-16">
                <div class="w-9/12 flex flex-wrap text-white">
                    <div class="w-full sm:w-1/5">
                        <img src={SRA} class="w-1/2"/>
                    </div>
                    <div class="w-1/3 sm:w-1/5 pt-5 sm:pt-0">
                        <h4 class="font-semibold pb-3">
                            Services
                        </h4>
                        <ul>
                            <For each={ServiceLinks}>{
                                (sl) => <A href={sl.link}><li class="py-1">{sl.name}</li></A>
                            }</For>
                        </ul>
                    </div>
                    <div class="w-1/3 sm:w-1/5 pt-5 sm:pt-0">
                        <h4 class="font-semibold pb-3">
                            Legal
                        </h4>
                        <ul>
                            <For each={LegalLinks}>{
                                (l) => <A href={l.link}><li class="py-1">{l.name}</li></A>
                            }</For>
                        </ul>
                    </div>
                    <div class="w-1/3 sm:w-1/5 pt-5 sm:pt-0">
                        <h4 class="font-semibold pb-3">
                            Contact us
                        </h4>
                        <ul>
                            <For each={ContactLinks}>{
                                (c) => <A href={c.link}><li class="py-1">{c.name}</li></A>
                            }</For>
                        </ul>
                    </div>
                    <div class="w-full sm:w-1/5 pt-5 sm:pt-0">
                        <h4 class="font-semibold pb-3">
                            Social
                        </h4>
                        <ul class="flex justify-between">
                            <For each={SocialLinks}>{
                                (s) => <A href={s.link}><li class="py-1">{s.icon}</li></A>
                            }</For>
                        </ul>
                    </div>
                </div>
            </footer>
            <div class="py-2 bg-gray-900 w-full flex justify-center">
                <div class="w-9/12 flex text-white text-sm">
                    <div>
                        Perduco Family law &copy; 2023
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;