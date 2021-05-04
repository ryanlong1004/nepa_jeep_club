import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";

export function Copyright() {
  return (
    <React.Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          nepajeep.club
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </React.Fragment>
  );
}
