import { MenuRoute } from "@/constants/generic";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card as CardType } from "@/store/home";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

interface Prop {
  card: CardType;
  onClick: (e: CardType) => void;
  isFavorite?: boolean;
  button: { label: string; route: MenuRoute };
  index: number;
}

const CardComponent = ({ card, onClick, isFavorite, button, index }: Prop) => {
  const {
    name,
    owner: { login },
    stargazers: { totalCount },
    description,
  } = card;

  return (
    <Box sx={{ width: "100%" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {button.route === MenuRoute.FAVORITES && (
              <Avatar sx={{ mb: 1 }}>{index + 1}</Avatar>
            )}
            {login}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StarRateIcon sx={{ fontSize: 15, mr: 0.2 }} />
            <Typography color="text.secondary">{totalCount}</Typography>
          </Box>

          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            color={button.route === MenuRoute.HOME ? "secondary" : "error"}
            size="small"
            onClick={() => onClick(card)}
          >
            {button.route === MenuRoute.HOME ? (
              isFavorite ? (
                <StarRateIcon sx={{ fontSize: 15, mr: 0.5 }} />
              ) : (
                <StarOutlineIcon sx={{ fontSize: 15, mr: 0.5 }} />
              )
            ) : button.route === MenuRoute.FAVORITES ? (
              <DeleteIcon sx={{ fontSize: 15, mr: 0.5 }} />
            ) : (
              <></>
            )}
            <Typography variant="body2">{button.label}</Typography>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardComponent;
