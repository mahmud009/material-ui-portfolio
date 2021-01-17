import {
  Grid,
  Box,
  Typography,
  Button,
  makeStyles,
  Avatar,
  Icon,
  IconButton,
  fade,
} from "@material-ui/core";
import { Facebook, Twitter, GitHub, Linkedin, Instagram } from "react-feather";
import PersonImage from "src/img/person.jpg";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      height: `calc(100vh - 64px)`,
    },
    iconButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,

      "&:hover": {
        backgroundColor: fade(theme.palette.primary.main, 0.7),
      },
    },
  };
});

function Hero() {
  const classes = useStyles();
  return (
    <Box className={classes.root} display="flex" alignItems="center">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography variant="button" gutterBottom color="primary">
              Lorem ipsum
            </Typography>
            <Typography variant="h2" gutterBottom color="textPrimary">
              Lorem ipsum dolor sit amet heading
            </Typography>
            <Typography gutterBottom variant="body1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, si
              semel tristior effectus est, hilara vita amissa est? Graecum enim
              hunc versum nostis omnes-: Suavis laborum est praeteritorum
              memoria
            </Typography>
            <Box display="flex" mt={3}>
              <Box>
                <Button variant="contained" color="primary" size="large">
                  Hire me
                </Button>
              </Box>
              <Box ml={2}>
                <Button variant="outlined" color="primary" size="large">
                  Learn more
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box borderRadius="50%" overflow="hidden">
              <img src={PersonImage} />
            </Box>
            <Box display="flex" mt={2}>
              <Box mr={2}>
                <IconButton color="primary" className={classes.iconButton}>
                  <GitHub size={16} />
                </IconButton>
              </Box>

              <Box mr={2}>
                <IconButton color="primary" className={classes.iconButton}>
                  <Facebook size={16} />
                </IconButton>
              </Box>
              <Box mr={2}>
                <IconButton color="primary" className={classes.iconButton}>
                  <Twitter size={16} />
                </IconButton>
              </Box>
              <Box>
                <IconButton color="primary" className={classes.iconButton}>
                  <Instagram size={16} />
                </IconButton>
              </Box>

              {/* <Box>
                <IconButton color="primary" className={classes.iconButton}>
                  <Linkedin size={20} />
                </IconButton>
              </Box> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Hero;
