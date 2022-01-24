import React, { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Badge,
  Container,
  Button,
  ClickAwayListener,
  Portal,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart, ShoppingBasket } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { colorTheme } from "../../globalStyles";
import { CarrinhoContext } from "../../providers/carrinho";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const pages = ["Produtos"];
const carrinhoSettings = ["Ver carrinho", "Checkout"];

const Navbar = () => {
  const carrinho = useContext(CarrinhoContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElSearch, setAnchorElSearch] = useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenCarrinhoMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenSearchMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSearch(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseCarrinhoMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseSearchMenu = () => {
    setAnchorElSearch(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: colorTheme.primary }}
      color="default"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShoppingBasket sx={{ color: "#fff" }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              ml: 1,
              display: { xs: "none", md: "flex" },
              color: colorTheme.primaryLighter,
            }}
          >
            FRUTEIRA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: colorTheme.primaryLighter }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                color: colorTheme.primaryLighter,
              },
            }}
          >
            FRUTEIRA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Search sx={{ display: { xs: "none", md: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: colorTheme.primaryLighter }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar item..."
              inputProps={{ "aria-label": "buscar item" }}
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              onClick={handleOpenSearchMenu}
              sx={{ display: { xs: "inline-flex", md: "none" }, p: 0, mr: 2 }}
            >
              <SearchIcon sx={{ color: colorTheme.primaryLighter }} />
            </IconButton>
            <IconButton onClick={handleOpenCarrinhoMenu} sx={{ p: 0 }}>
              <Badge badgeContent={carrinho.produtos.length} color="success">
                <ShoppingCart sx={{ color: colorTheme.primaryLighter }} />
              </Badge>
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseCarrinhoMenu}
            >
              {carrinhoSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseCarrinhoMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Menu
              sx={{ display: { xs: "block", md: "none" }, mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElSearch}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElSearch)}
              onClose={handleCloseSearchMenu}
            >
              <MenuItem>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: colorTheme.primary }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Buscar item..."
                    inputProps={{ "aria-label": "buscar item" }}
                  />
                </Search>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
