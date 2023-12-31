import { Accessor, Setter, createContext, useContext, createSignal} from "solid-js"

interface ContextProps {
    modalState: Accessor<boolean>,
    setModalState: Setter<boolean>,
}

const ModalContext = createContext<ContextProps>();

export function ModalContextProvider(props: any) {
    const [ modalState, setModalState ] = createSignal(false);

    return (
        <ModalContext.Provider value={{modalState, setModalState}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)!;