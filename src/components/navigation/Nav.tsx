import { A, useNavigate } from "@solidjs/router";
import { Component, For, createSignal } from "solid-js";
import Logo from "../../assets/img/Perduco-Law-Logo.png"
import { IoMenuOutline, IoCloseOutline, IoChevronDownOutline, IoCalculatorOutline} from 'solid-icons/io'
import Calculator from "../modals/Calculator";
import { useModalContext } from "../../context/ModalContext";

const Nav: Component = () => {
    const [toggleMobileMenu,setToggleMobileMenu] = createSignal(false);
    const navigate = useNavigate();
    const {setModalState} = useModalContext()
    const [serviceSection,setServiceSection] = createSignal(false)

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
        if(e === '/'){
            navigate('/')
            setToggleMobileMenu(false)
        }
        if(e === '/about'){
            navigate('/about')
            setToggleMobileMenu(false)
        }
        if(e === '/our_team'){
            navigate('/our_team')
            setToggleMobileMenu(false)
        }
        if(e === '/contact'){
            navigate('/contact')
            setToggleMobileMenu(false)
        }
    }

    const handleCalculatorModal = () => {
        setModalState(true);
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
                    <A href="/">
                        <div>
                            <img src={Logo} class="h-8"/>
                        </div>
                    </A>
                    <div class="lg:block hidden">
                        <ul class="w-full flex gap-12">
                            <For each={Links}>{
                                (l) => l.name === 'Services' 
                                    ? 
                                        <button 
                                            class="flex gap-2 items-center hover:text-red-600"
                                            onMouseEnter={() => setServiceSection(true)}
                                            onMouseLeave={() => setServiceSection(false)}
                                        >
                                            <p>
                                                {l.name}
                                            </p>
                                            <p class="pt-1">
                                                <IoChevronDownOutline />
                                            </p>
                        {serviceSection()
                            ?
                                <div class="w-full h-64 bg-white absolute left-0 mt-72">

                                </div>
                            :
                                null
                        }
                                        </button>
                                    : 
                                        <A href={l.link}>
                                            <li id="linksChange" data-replace={l.name}>
                                                <span>
                                                    {l.name}
                                                </span>
                                            </li>
                                        </A>
                            }</For>
                        </ul>
                    </div>
                    <div class="lg:flex gap-3 hidden items-center">
                        <button class="text-gray-500"
                            onClick={handleCalculatorModal}
                        >
                            <IoCalculatorOutline class="text-2xl mr-5" />
                        </button>
                        <A href="/login">
                            <button class="border h-8 px-6 rounded-sm border-black">
                                Login
                            </button>
                        </A>
                        <A href="/register">
                            <button class="border border-gray-900 h-8 px-6 text-white rounded-sm bg-gray-900">
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
                <div class={`fixed ${toggleMobileMenu() ? 'w-[300px]' : 'w-0'} h-screen flex overflow-hidden duration-300 ease-in-out z-30 top-0 right-0 2xl:hidden`} style={{"background-color":"#081B37"}}>
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
                                class="text-white h-10 rounded-sm border w-full bg-lue-400"
                                style={{"background-color":"#E63435","border-color":"#E63435"}}
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
            <Calculator />
        </>
    )
}

export default Nav;