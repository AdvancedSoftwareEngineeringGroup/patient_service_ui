"use client";
import { useRouter } from "next/navigation";

const Appointments = () => {
    const router = useRouter();

    if (router.pathname === "/appointments") {
        return (
            <>
                <h1>Appointments</h1>
            </>
        );
    }
};

export default Appointments;