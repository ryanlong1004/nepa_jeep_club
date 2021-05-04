import * as React from "react";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import { NetlifyForm, Honeypot } from "react-netlify-forms";
import cta from "../../img/cta.png";

const styles = (theme: Theme) =>
  ({
    root: {
      marginTop: theme.spacing(10),
      marginBottom: 0,
      display: "flex",
    },
    cardWrapper: {
      zIndex: 1,
    },
    card: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: theme.palette.success.main,
      padding: theme.spacing(8, 3),
    },
    cardContent: {
      maxWidth: 400,
    },
    textField: {
      width: "100%",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    button: {
      width: "100%",
    },
    imagesWrapper: {
      position: "relative",
    },
    imageDots: {
      position: "absolute",
      top: -67,
      left: -67,
      right: 0,
      bottom: 0,
      width: "100%",
      // background: `url(${cta})`,
    },
    image: {
      position: "absolute",
      top: -28,
      left: -28,
      right: 0,
      bottom: 0,
      width: "100%",
      maxWidth: 600,
    },
  } as const);

function ProductCTA(props: WithStyles<typeof styles>) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <NetlifyForm
              name="keep_updated_form"
              action="/thanks"
              honeypotName="bot-field"
              id="keep_updated_form"
              onSubmit={handleSubmit}
              className={classes.cardContent}
            >
              <Honeypot />
              <Typography variant="h2" component="h2" gutterBottom>
                Let's Drive
              </Typography>
              <Typography variant="h5">
                We'll update you via email with rides and events.
              </Typography>
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Your email"
                variant="standard"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Keep me updated
              </Button>
            </NetlifyForm>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden mdDown>
            <div className={classes.imageDots} />
            <img src={cta} alt="call to action" className={classes.image} />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="Success.  We'll contact you within 24 hours via email."
      />
    </Container>
  );
}

export default withStyles(styles)(ProductCTA);
