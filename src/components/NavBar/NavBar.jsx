import css from "./NavBar.module.css";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/fairbase";

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const logout = async () => {
    await signOut(auth);

    navigate("/");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toCatalog = () => {
    navigate("/catalog");
    handleClose();
  };

  const toFavorite = () => {
    navigate("/favorites");
    handleClose();
  };

  return (
    <header className={css.header}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "red", marginLeft: "20px" }}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={toCatalog}>Catalog</MenuItem>
        <MenuItem onClick={toFavorite}>Favorite</MenuItem>
      </Menu>
      <button onClick={() => logout()} className={css["logout-btn"]}>
        LogOut
      </button>
    </header>
  );
};

export default NavBar;
