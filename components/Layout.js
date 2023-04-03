import useStyles from "@/utils/styles";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Marketplace</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Marketplace</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
