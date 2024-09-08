"use client";
import { Box } from "@mui/material";
import { appWrapper } from "@styles/styles";
import AppNavMenu from "../components/navigation/AppNavMenu";
import { useState } from "react";
import AppContentArea from "../components/AppContentArea";

const RootLayout = ({children}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <html lang="en">
      <body>
        <Box sx={appWrapper}>
          <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
          <AppContentArea isOpen={mobileOpen} />
        </Box>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;