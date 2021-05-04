import * as React from "react";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import local_trails from "../../img/local_trails.png";
import events from "../../img/events.png";
import network from "../../img/network.png";

const styles = (theme: Theme) =>
  ({
    root: {
      display: "flex",
      overflow: "hidden",
      backgroundColor: theme.palette.secondary.light,
    },
    container: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(30),
      display: "flex",
      position: "relative",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 5),
    },
    image: {
      height: 255,
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    curvyLines: {
      pointerEvents: "none",
      position: "absolute",
      top: -180,
    },
  } as const);

function ProductValues(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={local_trails}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Local Trails
              </Typography>
              <Typography variant="h5">
                {
                  "We'll plan out some day trips for local areas.  Join an excursion or host one, we'll make the details available here."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={events} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                Events
              </Typography>
              <Typography variant="h5">
                {
                  "Jeep Jamborees or a Sunday breakfast and drive, find or post events here.  An event calendar is in the works."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={network} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Network
              </Typography>
              <Typography variant="h5">
                {
                  "Have a tribe in NEPA to learn from, ride with, and have fun. "
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default withStyles(styles)(ProductValues);
