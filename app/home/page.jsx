"use client";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter(); // gives where we are on our page(pathname)

    if (router.pathname === "/home") {
        return (
            <>
                <h1>Home</h1>
            </>
        );
    };
};

export default Home;