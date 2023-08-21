import { Component } from "solid-js";
import Footer from "../components/navigation/Footer";
import Nav from "../components/navigation/Nav";
import { useLocation, useParams } from "@solidjs/router";
import AssesmentModal from "../components/modals/AssesmentModal";
import ComplaintModal from "../components/modals/ComplaintModal";

interface MainLayoutProps {
    children: any;
}

const MainLayout:Component<MainLayoutProps> = ({children}) => {
    const location = useLocation();

    return (
        <>
            <Nav />
            {children}
            {location.pathname === '/login' || location.pathname === '/register' ? null :<Footer />}
            <AssesmentModal />
            <ComplaintModal />
        </>
    )
}

export default MainLayout;