"use client";
import { useRouter } from "next/navigation";
import PhysiciansList from "./PhysiciansList";

const Physicians = () => {
    const router = useRouter(); // gives where we are on our page(pathname)

    if (router.pathname === "/physicians") {
        return (
            <>
                <h1>Physicians</h1>
                <PhysiciansList />
            </>
        );
    };
};

export default Physicians;