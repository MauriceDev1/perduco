import { Accessor, Setter, createContext, useContext, createSignal} from "solid-js"

interface ContextProps {
    modalState: Accessor<boolean>,
    setModalState: Setter<boolean>,
    modalIdState: Accessor<string>,
    setModalIdState: Setter<string>
}

const ModalContext = createContext<ContextProps>();

export function ModalContextProvider(props: any) {
    const [ modalState, setModalState ] = createSignal(false);
    const [ modalIdState, setModalIdState ] = createSignal('');

    return (
        <ModalContext.Provider value={{modalState, setModalState, modalIdState, setModalIdState}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)!;