import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "./Button";

const NavbarTwo = () => {
  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex items-center  w-5/12 justify-between">
        <Box>
          <FormControl className="w-32" size="small">
            <InputLabel className="font-bold" id="demo-simple-select-label">
              LATEST
            </InputLabel>
            <Select
              className="w-32"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="lATEST"
            >
              <MenuItem value={10}>MUSIC</MenuItem>
              <MenuItem value={20}>GAMING</MenuItem>
              <MenuItem value={30}>FINANCE</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <a href="">HOME</a>
        <a href="">NEWS</a>
        <a href="">POLITICS</a>
        <a href="">SPORTS</a>
        <a href="">HEALTH</a>
        <a href="">MUSIC</a>

      </div>

      <Button name="SUBSCRIBE" style="text-red-600 border-b-2 py-1 border-b-red-600"/>
    </div>
  );
};

export default NavbarTwo;
