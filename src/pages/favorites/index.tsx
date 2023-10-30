import Header from "@/components/Header/index";
import Main from "@/components/Main/index";
import { ButtonLabel, MenuRoute } from "@/constants/generic";
import useDebouncedCallback from "@/hooks/useDebounceCallback";
import useHomeStore, { State } from "@/store/home";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Favorites = () => {
  const { favorites, removeFavorite } = useHomeStore((state: State) => state);
  const onClick = useDebouncedCallback((card) => {
    removeFavorite(card.id);
  }, 300);
  return (
    <>
      <Header hasSearch={false} />
      <DndProvider backend={HTML5Backend}>
        <Main
          cards={favorites}
          onClick={onClick}
          hasDnd={true}
          button={{
            label: ButtonLabel.FAVORITES,
            route: MenuRoute.FAVORITES,
          }}
        />
      </DndProvider>
    </>
  );
};

export default Favorites;
