import { Component, createSignal } from "solid-js";

const ContactForm:Component = () => {
    const [formData,setFormData] = createSignal({
        name: '',
        surname: '',
        email: '',
        cellphone: '',
        subject: '',
        message: '',
    });
    const [formDataError,setFormDataError] = createSignal({
        name: '',
        surname: '',
        email: '',
        cellphone: '',
        subject: '',
        message: '',
    });

    const handleFormData = (e: any) => {
        const {name,value} = e.currentTarget;
        setFormData((prv) => ({...prv,[name]:value}));
    };

    const handleFormDataError = (e: any) => {
        const {name} = e.currentTarget;
        setFormData((prv) => ({...prv,[name]:''}));
    };

    const handleFormSubmit = (e: any) => {
        e.preventDafault();
    }

    return (
        <form class="w-full flex flex-wrap" onSubmit={handleFormSubmit}>
            <div class="w-full flex gap-3">
                <div class="w-1/2">
                    Name
                    <input 
                        name="name"
                        onChange={handleFormData}
                        oninput={handleFormDataError}
                        placeholder={formDataError().name ? formDataError().name : 'Name'}
                        value={formData().name ? formData().name : ''}
                        class={`${formDataError().name ? 'border-red-400 placeholder:text-red-500 bg-red-50': 'placeholder:text-gray-500'} border w-full h-9 rounded px-2 outline-none`}
                    />
                </div>
                <div class="w-1/2">
                    Surname
                    <input 
                        name="surname"
                        onChange={handleFormData}
                        oninput={handleFormDataError}
                        placeholder={formDataError().surname ? formDataError().surname : 'Surname'}
                        value={formData().surname ? formData().surname : ''}
                        class={`${formDataError().surname ? 'border-red-400 placeholder:text-red-500 bg-red-50': 'placeholder:text-gray-500'} border w-full h-9 rounded px-2 outline-none`}
                    />
                </div>
            </div>
        </form>
    )
}

export default ContactForm;