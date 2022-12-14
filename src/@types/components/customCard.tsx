import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { CustomCardProps } from "../props";

const CustomCard: React.FC<CustomCardProps> = ({
  name,
  description,
  deleteHandler,
  edit,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography component={"h1"}>{name}</Typography>
        <Typography component={"p"} sx={{ paddingTop: 8 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => edit?.()}>
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => deleteHandler?.()}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
