import { A } from "@solidjs/router";
import { Component, For, createSignal } from "solid-js";
import Logo from "../../assets/img/Perduco-Law-Logo.png"
import { IoMenuOutline, IoCloseOutline, IoChevronDownOutline} from 'solid-icons/io'

const Nav: Component = () => {
    const [toggleMobileMenu,setToggleMobileMenu] = createSignal(false);

    const Links = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'About us',
            link: '/about'
        },
        {
            id: 3,
            name:  'Services',
            link: '',
        },
        {
            id: 4,
            name: 'Our Team',
            link: '/our_team'
        },
        {
            id: 5,
            name: 'Contact us',
            link: '/contact'
        },
    ];

    const handleMobileLink = (e: string) => {

    }

    return (
        <>
            <div class="hidden w-full bg-gray-800 py-2 lg:flex justify-center">
                <div class="w-10/12 flex justify-between text-white text-xs">
                    <div class="flex gap-5">
                        <div>
                            Call: <a href="tel:0330 165 9735">0330 165 9735</a>
                        </div>
                        <div>
                            Email: <a href="mailto:info@perducolaw.co.uk">info@perducolaw.co.uk</a>
                        </div>
                    </div>
                    <div>
                        We are available Mon - Fri 7am - 8pm Sat - Sun 9am - 5pm
                    </div>
                </div>
            </div>
            <nav class="w-full flex justify-center py-3 sticky top-0 bg-white shadow z-30">
                <div class="w-11/12 sm:w-10/12 flex justify-between items-center">
                    <div>
                        <img src={Logo} class="h-8"/>
                    </div>
                    <div class="lg:block hidden">
                        <ul class="w-full flex gap-12">
                            <For each={Links}>{
                                (l) => l.name === 'Services' ? <li class="flex gap-2 items-center"><p>{l.name}</p><p class="pt-1"><IoChevronDownOutline /></p></li>: <A href={l.link}><li id="linksChange" data-replace={l.name}><span>{l.name}</span></li></A>
                            }</For>
                        </ul>
                    </div>
                    <div class="lg:flex gap-3 hidden">
                        <A href="/login">
                            <button class="border h-8 px-5 rounded-sm border-black">
                                Login
                            </button>
                        </A>
                        <A href="/register">
                            <button class="border border-black h-8 px-5 text-white rounded-sm bg-black">
                                Register
                            </button>
                        </A>
                    </div>
                    <div class="lg:hidden" onClick={() => setToggleMobileMenu(true)}>
                        <IoMenuOutline class="text-2xl"/>
                    </div>
                </div>
            </nav>
            <div class={`${toggleMobileMenu() ? 'w-full' : 'w-0'} fixed top-0 left-0 h-screen overflow-hidden bg-opacity-70 bg-black z-40`}>
                <button
                    onClick={() => setToggleMobileMenu(false)} 
                    class="z-50 text-white mt-5 ml-5">
                    <IoCloseOutline class="text-3xl menuClose" 
                    />
                </button>
                <div class={`fixed ${toggleMobileMenu() ? 'w-[300px]' : 'w-0'} h-screen flex overflow-hidden duration-300 ease-in-out z-30 top-0 right-0 bg-gray-800 2xl:hidden`}>
                    <div class="w-10/12 relative mx-auto text-white">
                        <ul class="">
                            <button
                                onClick={() => handleMobileLink('/')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">Home</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('/about')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">About us</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('/services')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">Services</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('/our_team')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">Our Team</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('/contact')}
                                class="w-full"
                            >
                                <li class="w-full py-4">Contact us</li>
                            </button>
                        </ul>
                        <div class="w-full absolute flex flex-wrap bottom-5 gap-y-4">
                            <button 
                                onclick={() => handleMobileLink('/register')}
                                class="text-white h-10 rounded-sm border border-white w-full bg-lue-400"
                            >
                                Login
                            </button>
                            <button 
                                onclick={() => handleMobileLink('/register')}
                                class="text-white h-10 rounded-sm bg-black border border-black hover:bg-gray-900 w-full bg-lue-400"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;