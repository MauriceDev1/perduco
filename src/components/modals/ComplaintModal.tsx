import { Component } from "solid-js";
import { IoCloseOutline } from "solid-icons/io";
import { useComplaintModalContext } from "../../context/ComplaintContext";
import ComplaintForm from "../forms/ComplaintForm";
import StepperComponent from "../genral/StepperComponent";

const ComplaintModal: Component = () => {
    const {modalState,setModalState} = useComplaintModalContext()

    return (
        <div class={`${modalState() ? 'flex' : 'hidden'} w-full fixed  h-screen top-0 left-0 bg-black z-50 bg-opacity-60`}>
            <div class="m-auto w-11/12 relative lg:w-8/12 p-5 bg-white rounded-sm">
                <button 
                    class="absolute top-3 right-3 text-gray-500 duration-300 hover:text-red-600"
                    onClick={() => setModalState(false)}
                >
                    <IoCloseOutline class="text-2xl" />
                </button>
                <h1 class="text-2xl sm:text-3xl font-semibold text-gray-500 pb-3 capitalize">
                    Client Complaint Form
                </h1>
                <p>
                    We understand that you have expressed dissatisfaction with 
                    the service we have provided and we are eager to investigate 
                    the matter fully to resolve any issues. So that we can understand 
                    your complaint, 
                </p>
                <h3 class="py-3 text-xl sm:text-2xl text-gray-500">
                    please complete the form below. 
                </h3>
                <StepperComponent />
                <ComplaintForm />
            </div>
        </div>
    )
}

export default ComplaintModal;