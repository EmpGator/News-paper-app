import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ImgMediaCard from './articleCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 420,
    width: 340,
  },
  control: {
    padding: theme.spacing(6),
  },
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();



  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {['Most Read', 'Trending', 'Latest'].map(value => (
            <Grid key={value} item>
              <Typography  variant="h6" noWrap>
                {value} 
              </Typography>
              <Paper className={classes.paper} >
                <ImgMediaCard />
                <ImgMediaCard />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
