import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import TextTransform from "./pages/TextTransform";
import App from "./pages/HelloWorld";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "32px",
  },
  paper: {
    padding: "16px",
  },
}));

export default function BasicExample() {
  const classes = useStyles();
  return (
    <Router>
      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Paper>
              <MenuList>
                <MenuItem component={Link} to="/">
                  home
                </MenuItem>
                <MenuItem component={Link} to="/text-transform">
                  text-transform
                </MenuItem>
              </MenuList>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route exact path="/">
                <Paper className={classes.paper}>
                  <App />
                </Paper>
              </Route>
              <Route path="/text-transform">
                <TextTransform />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}
