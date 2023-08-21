import { Accessor, Setter, createContext, useContext, createSignal} from "solid-js"

interface ContextProps {
    modalState: Accessor<boolean>,
    setModalState: Setter<boolean>,
}

const assesModalContext = createContext<ContextProps>();

export function AssesModalContextProvider(props: any) {
    const [ modalState, setModalState ] = createSignal(false);

    return (
        <assesModalContext.Provider value={{modalState, setModalState}}>
            {props.children}
        </assesModalContext.Provider>
    )
}

export const useAssesModalContext = () => useContext(assesModalContext)!;