import useStyles from "@/utils/styles";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import styles from "../styles/style.module.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Marketplace</title>
      </Head>
      <AppBar position="static" sx={{ backgroundColor: "#1a1a38" }}>
        <Toolbar>
          <Typography>Marketplace</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
