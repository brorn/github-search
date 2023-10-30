enum MenuRoute {
  HOME = "/",
  FAVORITES = "/favorites",
}

type MenuLabel = {
  [K in keyof typeof MenuRoute]: string;
};

const MenuLabel: MenuLabel = {
  HOME: "Home",
  FAVORITES: "Favorites",
};

type ButtonLabel = {
  [K in keyof typeof MenuRoute]: string;
};

const ButtonLabel: ButtonLabel = {
  HOME: "Add to Favorites",
  FAVORITES: "Remove from Favorites",
};

const menuItems = (Object.keys(MenuRoute) as (keyof typeof MenuRoute)[]).map(
  (key) => {
    return {
      label: MenuLabel[key],
      route: MenuRoute[key],
    };
  }
);

const appName = "Github Search Web App";

export { menuItems, appName, MenuRoute, MenuLabel, ButtonLabel };
