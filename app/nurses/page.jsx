"use client";
import { useRouter } from "next/navigation";

const Nurses = () => {
    const router = useRouter(); // gives where we are on our page(pathname)

    if (router.pathname === "/nurses") {
        return (
            <>
                <h1>Nurses</h1>
            </>
        );
    };
};

export default Nurses;