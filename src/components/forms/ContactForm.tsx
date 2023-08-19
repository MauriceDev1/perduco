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
        e.preventDefault();
        const {
            name,
            surname,
            email,
            cellphone,
            subject,
            message,
        } = formData();
        if(
            name === '' || 
            surname === '' || 
            email === '' || 
            cellphone === '' || 
            subject === '' || 
            message === ''
        ){
            if(name === ''){
                setFormDataError((prv) => ({...prv,name: 'Name is required'}));
            }
            if(surname === ''){
                setFormDataError((prv) => ({...prv,surname: 'Surname is required'}));
            }
            if(email === ''){
                setFormDataError((prv) => ({...prv,email: 'Email is required'}));
            }
            if(cellphone === ''){
                setFormDataError((prv) => ({...prv,cellphone: 'Cellphone is required'}));
            }
            if(subject === ''){
                setFormDataError((prv) => ({...prv,subject: 'Subject is required'}));
            }
            if(message === ''){
                setFormDataError((prv) => ({...prv,message: 'Message is required'}));
            }
            return
        }
    }

    return (
        <form class="w-full flex flex-wrap" onSubmit={handleFormSubmit}>
            <div class="w-full flex gap-3">
                <div class="w-1/2">
                    <p class="py-2">
                        Name
                    </p>
                    <input 
                        name="name"
                        type="text"
                        onChange={handleFormData}
                        oninput={handleFormDataError}
                        placeholder={formDataError().name ? formDataError().name : 'Name'}
                        class={`${formDataError().name ? 'border-red-400 placeholder:text-red-500 bg-red-50': 'placeholder:text-gray-500'} border w-full h-9 rounded px-2 outline-none`}
                    />
                </div>
                <div class="w-1/2">
                    <p class="py-2">
                        Surname
                    </p>
                    <input 
                        name="surname"
                        type="text"
                        onChange={handleFormData}
                        oninput={handleFormDataError}
                        placeholder={formDataError().surname ? formDataError().surname : 'Surname'}
                        class={`${formDataError().surname ? 'border-red-400 placeholder:text-red-500 bg-red-50': 'placeholder:text-gray-500'} border w-full h-9 rounded px-2 outline-none`}
                    />
                </div>
            </div>
            <div class="w-full flex gap-3">
                <div class="w-1/2">
                    <p class="py-2">
                        Email
                    </p>
                    <input 
                        name="email"
                        type="email"
                        onChange={handleFormData}
                        oninput={handleFormDataError}
                        placeholder={formDataError().email ? formDataError().email : 'Email'}
                        class={`${formDataError().email ? 'border-red-400 placeholder:text-red-500 bg-red-50': 'placeholder:text-gray-500'} border w-full h-9 rounded px-2 outline-none`}
                    />
                </div>
                <div class="w-1/2">
                    <p class="py-2">
                        Cellphone
                    </p>
                    <input 
                        name="Cellphone"
                        type="tel"
                        onChange={handleFormData}
                        oninput={handleFormDataError}
                        placeholder={formDataError().cellphone ? formDataError().cellphone : 'Cellphone'}
                        class={`${formDataError().cellphone ? 'border-red-400 placeholder:text-red-500 bg-red-50': 'placeholder:text-gray-500'} border w-full h-9 rounded px-2 outline-none`}
                    />
                </div>
            </div>
            <div class="w-full">
                <p class="py-2">
                    Subject
                </p>
                <select
                    name="subject"
                    onChange={handleFormData}
                    oninput={handleFormDataError}
                    class={`${formDataError().subject ? 'border-red-400 text-red-500 bg-red-50': 'placeholder:text-gray-500'} border w-full h-9 rounded px-2 outline-none`}
                >
                    <option value="">Select</option>
                    <option value="">Select</option>
                    <option value="">Select</option>
                    <option value="">Select</option>
                </select>
            </div>
            <div class="w-full">
                <p class="py-2">
                    Message
                </p>
                <textarea
                    name="message"
                    onChange={handleFormData}
                    oninput={handleFormDataError}
                    placeholder={formDataError().message ? formDataError().message : 'Enter your message here...'}
                    class={`${formDataError().message ? 'border-red-400 placeholder:text-red-500 bg-red-50': 'placeholder:text-gray-500'} border w-full h-36 resize-none rounded p-2 outline-none`}
                />
            </div>
            <button class="w-full bg-black hover:bg-gray-800 duration-500 mt-7 h-9 text-white rounded-sm">
                Submit
            </button>
        </form>
    )
}

export default ContactForm;