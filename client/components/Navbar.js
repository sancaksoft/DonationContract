import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionProvider";

export default function Navbar() {
  const { account, connectWeb3 } = useContext(TransactionContext);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          margin: "auto",
          color: "#4A4A4A",
          fontSize: {
            xs: 12,
          },
          marginTop: 3,
          display: {
            sm: "none",
            xs: "inline",
          },
        }}
        variant="h5"
      >
        Donation Campaign With Cryptocurrency
      </Typography>
      <Toolbar sx={{ paddingY: "30px", marginX: "10px" }}>
        <img className="logo" src="/logo.png" alt="Logo" />
        <Typography
          sx={{
            margin: "auto",
            color: "#4A4A4A",
            fontSize: {
              lg: 30,
              md: 20,
              sm: 15,
            },
            visibility: {
              lg: "visible",
              md: "visible",
              sm: "visible",
              xs: "hidden",
            },
          }}
          variant="h5"
        >
          Donation Campaign With Cryptocurrency
        </Typography>
        <Button
          onClick={() => {
            connectWeb3();
          }}
          disabled={account}
          variant="contained"
          sx={{
            color: "white",
            background: "#4A4A4A",
            "&:hover": { background: "gray" },
            fontSize: {
              lg: 20,
              md: 15,
              sm: 12,
              xs: 9,
            },
          }}
        >
          {account
            ? account.slice(0, 3) + "..." + account.slice(-3)
            : "Connect"}
        </Button>
      </Toolbar>
    </Box>
  );
}
