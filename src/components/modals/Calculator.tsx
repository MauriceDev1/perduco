import { Component, createEffect, createSignal } from "solid-js";
import { useModalContext } from "../../context/ModalContext";
import { IoCloseOutline } from "solid-icons/io";

const Calculator: Component = () => {
    const {modalState, setModalState} = useModalContext()
    const [hours,setHours] = createSignal(0)

    const getNumberHours = (e: any) => {
        const {name,value} = e.currentTarget;
        console.log(value);
    }

    return (
        <div class={`${modalState() ? 'flex' : 'hidden'} w-full fixed  h-screen top-0 left-0 bg-black z-50 bg-opacity-60`}>
            <div class="m-auto w-11/12 relative lg:w-6/12 p-5 bg-white rounded-sm">
                <button 
                    class="absolute top-3 right-3 text-gray-500 hover:text-red-600"
                    onClick={() => setModalState(false)}
                >
                    <IoCloseOutline class="text-2xl" />
                </button>
                <h1 class="text-2xl font-semibold text-gray-500 pb-3">
                    Fees calculator
                </h1>
                <div>
                    <p class="py-2 px-1">
                        Select a Service
                    </p>
                    <select
                        name="service"
                        class="w-full border h-9 rounded-sm outline-none px-1"
                    >
                        <option value="">Select</option>
                        <option value="family">Family law</option>
                        <option value="child">Child law</option>
                        <option value="divorce">Divorce Law</option>
                        <option value="domestic">Domestic Violence</option>
                        <option value="unmarried">Unmarried couples</option>
                    </select>
                    <p class="py-2 px-1">
                        Select a Type
                    </p>
                    <select
                        name="service"
                        class="w-full border h-9 rounded-sm outline-none px-1"
                    >
                        <option value="">Select</option>
                        <option value="mediation">Mediation</option>
                        <option value="representation">Representation</option>
                        <option value="documentation">Legal Documentation</option>
                        <option value="crossborder">Crossboarder</option>
                    </select>
                    <p class="py-2 px-1">
                        Number of hours
                    </p>
                    <input 
                        name="hours"
                        type="range"
                        class="w-full"
                        min="1" 
                        max="100"
                        onChange={(e) => console.log(e.currentTarget.value)}
                    />
                    <p>{hours()}</p>
                </div>
            </div>
        </div>
    )
}

export default Calculator;