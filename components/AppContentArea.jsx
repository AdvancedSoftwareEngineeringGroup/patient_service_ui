import Box from "@mui/material/Box";
import React from "react";
import SideList from "./SideList";
import {
    appContentWrapper,
    flexColumnGrow,
    sideListWrapper,
} from "@styles/styles";
import Link from "next/link";

const AppContentArea = ({ isOpen }) => {
    const sideBarWidth = isOpen ? "70px" : "250px";

    return (
        <>
            <Box component="main" sx={appContentWrapper}>
                <Box
                    component="div"
                    sx={{
                        flexBasis: sideBarWidth,
                        flexGrow: 0,
                        flexShrink: 0,
                        overflowY: "auto",
                        ...sideListWrapper,
                    }}
                >
                    <SideList />
                </Box>
                <Box component="div" sx={flexColumnGrow}>
                    <Box
                        sx={{
                            my: 2,
                            width: `calc(100vw - ${sideBarWidth})`,
                        }}
                    >
                        &nbsp;
                    </Box>
                    <Box
                        component="div"
                        sx={{
                            display: "block",
                            p: 2,
                            minHeight: "100px",
                            mb: 4,
                            overflow: "hidden",
                            overflowY: "auto",
                            width: `calc(100vw - ${sideBarWidth})`,
                        }}
                    >
                        <Link href="/patients">Go to Patients</Link>
                        <br />
                        <Link href="/nurses">Go to Nurses</Link>
                        <br />
                        <Link href="/hospitals">Go to Hospitals</Link>
                        <br />
                        <Link href="/physicians">Go to Physicians</Link>
                        <br />
                        <Link href="/appointments">Go to Appointments</Link>
                        <br />
                        <Link href="/home">Go to Home</Link>
                        <br />
                        <Link href="/patients/add">Go to Add Patient Form</Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AppContentArea;