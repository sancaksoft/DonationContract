import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
const Dontaion = () => {
  //   const theme = createTheme({
  //     palette: {
  //       secondary: {
  //         main: "#de0909",
  //         dark: "#fffff",
  //         blue: "#4A4A4A",
  //       },
  //     },
  //   });
  return (
    <Box sx={{ paddingTop: 12 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
          margin: "auto",
          paddingY: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            border: 2,
            borderRadius: 5,
            padding: "20px 30px",
          }}
        >
          <TextField
            sx={{ marginRight: 3, width: 100 }}
            id="standard-basic"
            label="How Much"
            variant="standard"
          />
          <Autocomplete
            disablePortal
            id="combo-box"
            options={wichCryptoCurrency}
            sx={{ width: 220 }}
            renderInput={(params) => (
              <TextField {...params} label="Select CryptoCurrency" />
            )}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
          margin: "auto",
        }}
      >
        <Button variant="contained" color="secondary">
          Confirm
        </Button>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: 12 }}>
        <Typography>Total Donation</Typography>
      </Box>
    </Box>
  );
};

const wichCryptoCurrency = [
  { label: "USDT" },
  { label: "ETH" },
  { label: "BUSD" },
  { label: "BNB" },
];

export default Dontaion;
