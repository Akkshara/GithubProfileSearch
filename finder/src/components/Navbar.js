import React from "react";

import { Switch } from "@mui/material";
const label = { inputprops: { "area-label": "switch demo" } };

function Navbar(change, check) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand ">Github profile finder</a>

        <Switch
          {...label}
          defaultChecked
          color="default"
          onChange={change}
          checked={check}
        />
      </div>
    </nav>
  );
}

export default Navbar;
