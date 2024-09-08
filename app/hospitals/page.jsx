"use client";
import { useRouter } from "next/navigation";
import HospitalsList from "./HospitalsList";

const Hospitals = () => {
    const router = useRouter(); // gives current route (pathname)

    if (router.pathname === "/hospitals") {
        return (
            <>
                <h1>Hospitals</h1>
                <HospitalsList />
            </>
        );
    }
};

export default Hospitals;
