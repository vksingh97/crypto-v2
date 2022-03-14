import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Toolbar,
  Typography,
  Select,
} from "@material-ui/core";

const Header = () => {
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography>My BTC</Typography>
          <Select variant="outlined">
            <MenuItem>USD</MenuItem>
            <MenuItem>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
