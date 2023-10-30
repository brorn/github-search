import Header from "@/components/Header/index";
import Main from "@/components/Main/index";
import { ButtonLabel, MenuRoute } from "@/constants/generic";
import useDebouncedCallback from "@/hooks/useDebounceCallback";
import useHomeStore, { Card, State } from "@/store/home";

const Home = () => {
  const { cards, setFavorite } = useHomeStore((state: State) => state);

  const onClick = useDebouncedCallback((card: Card) => {
    setFavorite(card);
  }, 300);
  return (
    <>
      <Header hasSearch={true} />
      <Main
        cards={cards}
        onClick={onClick}
        hasDnd={false}
        button={{
          label: ButtonLabel.HOME,
          route: MenuRoute.HOME,
        }}
      />
    </>
  );
};

export default Home;
