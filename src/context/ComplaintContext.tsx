import { Accessor, Setter, createContext, useContext, createSignal} from "solid-js"

interface ContextProps {
    modalState: Accessor<boolean>,
    setModalState: Setter<boolean>,
}

const complaintModalContext = createContext<ContextProps>();

export function ComplaintModalContextProvider(props: any) {
    const [ modalState, setModalState ] = createSignal(false);

    return (
        <complaintModalContext.Provider value={{modalState, setModalState}}>
            {props.children}
        </complaintModalContext.Provider>
    )
}

export const useComplaintModalContext = () => useContext(complaintModalContext)!;