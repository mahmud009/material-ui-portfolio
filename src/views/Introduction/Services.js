import React from "react";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import ServiceCard from "src/components/ServiceCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: 600,
  },
}));

function Services() {
  const classes = useStyles();
  return (
    <Box className={classes.root} pt={12} pb={12}>
      <Box textAlign="center" width="60%">
        <Typography
          variant="h4"
          color="textPrimary"
          gutterBottom
          className={classes.title}
        >
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Claudii libidini, qui tum erat summo ne imperio, dederetur. Quid ei
          reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid
          diceret? Id enim natura desiderat. Rapior illuc, revocat autem
          Antiochus,
        </Typography>
      </Box>

      <Box mt={10}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <ServiceCard />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ServiceCard />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ServiceCard />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ServiceCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Services;
