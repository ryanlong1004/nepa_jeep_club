import { Grid, Paper } from "@material-ui/core";
import React from "react";
import "../../styles/main.scss";

// const Container = styled("div")`
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
//         0 6px 20px 0 rgba(0, 0, 0, 0.19);
//   background-color: white;
//   padding: 30px;
//   border-radius: 15px;
//   background-color: rgba(255, 255, 255, 0.99);
//   color: black;
//   font-family: 'Lato', sans-serif;
// `;

class Calendly extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { headerDidMount: false };
  }

  componentDidMount() {
    this.setState({ headerDidMount: true });
  }

  render() {
    return (
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Paper>
            <div
              className="calendly-inline-widget"
              data-url={"https://calendly.com/rlongio/introduction"}
              style={{ height: "670px" }}
            ></div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Calendly;
