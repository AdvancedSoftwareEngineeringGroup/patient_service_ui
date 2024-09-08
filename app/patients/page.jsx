"use client";
import { useRouter } from "next/navigation";
import PatientsList from "./PatientsList";

const Patients = () => {
    const router = useRouter(); // gives where we are on our page(pathname)

    if (router.pathname === "/patients") {
        return (
            <>
                <h1>Patients</h1>
                <PatientsList />
            </>
        );
    }
};


export default Patients;