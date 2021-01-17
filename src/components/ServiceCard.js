import React from "react";
import {
  Paper,
  Box,
  Avatar,
  Typography,
  makeStyles,
  fade,
} from "@material-ui/core";
import { Layout } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {},
  contentWrapper: {
    position: "relative",
  },
  iconWrapper: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "50%",
  },
  avatar: {
    width: 64,
    height: 64,
    backgroundColor: fade(theme.palette.primary.main, 0.1),
  },
  icon: {
    color: theme.palette.primary.main,
  },
  bodyWrapper: {
    textAlign: "center",
  },
  titleText: {
    fontWeight: 600,
  },
}));

function ServiceCard() {
  const classes = useStyles();

  return (
    <Paper>
      <Box p={3} className={classes.contentWrapper}>
        <Box p={1} className={classes.iconWrapper}>
          <Avatar className={classes.avatar}>
            <Layout className={classes.icon} size={32} />
          </Avatar>
        </Box>
        <Box className={classes.bodyWrapper} mt={2}>
          <Box>
            <Typography
              variant="h6"
              color="textPrimary"
              className={classes.titleText}
            >
              Lorem ipsum dolor
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.bodyText}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default ServiceCard;
