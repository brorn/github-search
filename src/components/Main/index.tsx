import useHomeStore, { State } from "@/store/home";
import Grid from "@mui/material/Unstable_Grid2";
import Masonry from "@mui/lab/Masonry";
import { Box, Container } from "@mui/system";
import Card from "../Card/index";
import { useDrop, useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card as CardType } from "@/store/home";
import { MenuRoute } from "@/constants/generic";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface DraggableCardProp {
  card: CardType;
  index: number;
  onClick: (e: CardType) => void;
  onDrop: (x: CardType, index: number) => void;
  isFavorite?: boolean;
  button: { label: string; route: MenuRoute };
}

interface Prop {
  cards: CardType[];
  onClick: (e: CardType) => void;
  isFavorite?: boolean;
  button: { label: string; route: MenuRoute };
  hasDnd: boolean;
}

const DraggableCard = ({
  card,
  index,
  onDrop,
  ...props
}: DraggableCardProp) => {
  const { onClick, isFavorite, button } = props;
  const [, ref] = useDrag({
    type: "CARD",
    item: { id: card.id },
  });

  const [, drop] = useDrop({
    accept: "CARD",
    drop: (item) => {
      onDrop(item as CardType, index);
    },
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      <Card
        card={card}
        onClick={onClick}
        isFavorite={isFavorite}
        button={button}
        index={index}
      />
    </div>
  );
};

const Main = ({ cards, onClick, button, hasDnd }: Prop) => {
  const { favorites, reorderFavorites } = useHomeStore((state: State) => state);

  const handleDrop = (draggedItem: CardType, dropIndex: number) => {
    reorderFavorites(draggedItem.id, dropIndex);
  };

  let Content;
  if (hasDnd) {
    Content = (
      <DndProvider backend={HTML5Backend}>
        <Box component="section" sx={{ p: 6 }}>
          <Container fixed>
            <Masonry columns={{ lg: 3, md: 2, sm: 1 }} spacing={2}>
              {cards?.map((card, index) => (
                <DraggableCard
                  index={index}
                  onDrop={handleDrop}
                  onClick={onClick}
                  card={card}
                  isFavorite={!!favorites?.find((item) => item.id === card.id)}
                  button={button}
                />
              ))}
            </Masonry>
          </Container>
        </Box>
      </DndProvider>
    );
  } else {
    Content = (
      <Box component="section" sx={{ p: 6 }}>
        <Container fixed>
          <Masonry columns={{ lg: 3, md: 2, sm: 1 }} spacing={2}>
            {cards?.map((card, index) => (
              <Card
                key={index}
                onClick={onClick}
                index={index}
                card={card}
                isFavorite={!!favorites?.find((item) => item.id === card.id)}
                button={button}
              />
            ))}
          </Masonry>
        </Container>
      </Box>
    );
  }

  return Content;
};

export default Main;
