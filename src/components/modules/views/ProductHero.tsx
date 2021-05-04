import * as React from "react";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import background_image from "../../img/background.png";

const styles = (theme: Theme) => ({
  background: {
    backgroundImage: `url(${background_image})`,
    backgroundColor: "#3f7432E", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={background_image}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Open Invitation
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Looking for other Jeep or 4x4 enthusiasts who want to drive in Northeast
        Pennsylvania and neighboring destinations.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="#keep_updated_form"
      >
        Let's Drive
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Your information is private and will be used for the purpose of
        contacting you about events.
      </Typography>
    </ProductHeroLayout>
  );
}

export default withStyles(styles)(ProductHero);
