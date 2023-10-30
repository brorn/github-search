import { appName, menuItems, MenuRoute } from "@/constants/generic";
import {
  Home as HomeIcon,
  MoreVert as MoreIcon,
  StarRate as StarRateIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Search from "./Search/index";
import useHeader from "./useHeader";

interface Prop {
  hasSearch: boolean;
}

const Header = ({ hasSearch }: Prop) => {
  const { mobileMoreAnchorEl, handleOpen, handleClose, onClick } = useHeader();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {appName}
          </Typography>
          {hasSearch && <Search />}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems?.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => onClick(item.route)}
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                }}
              >
                {item.route === MenuRoute.HOME ? (
                  <HomeIcon />
                ) : item.route === MenuRoute.FAVORITES ? (
                  <StarRateIcon />
                ) : (
                  <></>
                )}
                <Typography variant="button" sx={{ ml: 1 }}>
                  {item.label}
                </Typography>
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls="primary-search-account-menu-mobile"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        open={Boolean(mobileMoreAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id="primary-search-account-menu-mobile"
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {menuItems?.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => onClick(item.route)}
            sx={{
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            {item.route === MenuRoute.HOME ? (
              <HomeIcon />
            ) : item.route === MenuRoute.FAVORITES ? (
              <StarRateIcon />
            ) : (
              <></>
            )}
            <Typography variant="button" sx={{ ml: 1 }}>
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Header;
