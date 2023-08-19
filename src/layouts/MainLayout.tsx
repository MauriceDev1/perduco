import { Component } from "solid-js";
import Footer from "../components/navigation/Footer";
import Nav from "../components/navigation/Nav";

interface MainLayoutProps {
    children: any;
}

const MainLayout:Component<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;