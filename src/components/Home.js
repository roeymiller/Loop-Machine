import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import CardPlay from "./CardPlay";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import loop1 from "./Loops/120_future_funk_beats_25.mp3";
import loop2 from "./Loops/120_stutter_breakbeats_16.mp3";
import loop3 from "./Loops/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import loop4 from "./Loops/electric guitar coutry slide 120bpm - B.mp3";
import loop5 from "./Loops/FUD_120_StompySlosh.mp3";
import loop6 from "./Loops/GrooveB_120bpm_Tanggu.mp3";
import loop7 from "./Loops/MazePolitics_120_Perc.mp3";
import loop8 from "./Loops/PAS3GROOVE1.03B.mp3";
import loop9 from "./Loops/SilentStar_120_Em_OrganSynth.mp3";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const themeX = createMuiTheme({
  palette: {
    type: "dark",
    grey: {
      800: "#000000", // overrides failed
      900: "#121212", // overrides success
    },
    background: {
      paper: "#0B93EE",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    backgroundColor: "#0B93EE",
  },
  heroContent: {
    backgroundColor: "#0B93EE",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#0B93EE",
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const [playAll, setPlayAll] = useState(false);
  const [loopsArr, setLoops] = useState([
    {
      id: 1,
      isPlaying: false,
      inList: false,
      audio: new Audio(loop1),
      name: "120_future_funk",
    },
    {
      id: 2,
      isPlaying: false,
      inList: false,
      audio: new Audio(loop2),
      name: "120_stutter",
    },
    {
      id: 3,
      isPlaying: false,
      inList: false,
      audio: new Audio(loop3),
      name: "Bass Warwick heavy funk groove",
    },
    {
      id: 4,
      isPlaying: false,
      inList: false,
      audio: new Audio(loop4),
      name: "electric guitar coutry slide",
    },
    {
      id: 5,
      isPlaying: false,
      inList: false,
      audio: new Audio(loop5),
      name: "FUD_120_StompySlosh",
    },
    {
      id: 6,
      isPlaying: false,
      inList: false,
      audio: new Audio(loop6),
      name: "GrooveB",
    },
    {
      id: 7,
      isPlaying: false,
      inList: false,
      audio: new Audio(loop7),
      name: "MazePolitics",
    },
    {
      id: 8,
      isPlaying: false,
      inList: false,
      audio: new Audio(loop8),
      name: "PAS3GROOVE1",
    },
    {
      id: 9,
      isPlaying: false,
      inList: false,
      audio: new Audio(loop9),
      name: "SilentStar",
    },
  ]);

  const hendleClick = (index) => (e) => {
    console.log("index: " + index);
    let newLoopsArr = [...loopsArr]; // copying the old datas array
    newLoopsArr[index].isPlaying = !newLoopsArr[index].isPlaying;
    if (newLoopsArr[index].isPlaying) {
      loopsArr[index].audio.play();
      loopsArr[index].audio.loop = true;
    } else {
      loopsArr[index].audio.pause();
      loopsArr[index].audio.currentTime = 0;
    }
    setLoops(newLoopsArr);
    console.log(loopsArr);
  };

  const onCheck = (index) => (e) => {
    let newLoopsArr = [...loopsArr]; // copying the old datas array
    newLoopsArr[index].inList = !newLoopsArr[index].inList; // replace e.target.value with whatever you want to change it to
    setLoops(newLoopsArr);
    console.log(loopsArr);
  };

  const hendleAll = () => {
    loopsArr.map((loop) => {
      if (playAll && loop.inList) {
        loop.audio.pause();
        loop.audio.currentTime = 0;
      }

      if (!playAll && loop.inList) {
        loopsArr.map((loop) => {
          if (loop.inList) loop.audio.play();
          loop.audio.loop = true;
        });
      }
    });
    setPlayAll(!playAll);
    console.log(loopsArr);
  };

  return (
    <React.Fragment style={{ backgroundColor: "dark" }}>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "white" }}>
        <Toolbar backgroundColor="#FFFFFF"></Toolbar>
      </AppBar>
      <MuiThemeProvider theme={themeX}>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Loop Machine
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="#F1F3F5"
                      onClick={hendleAll}
                    >
                      {playAll ? "stop all" : "play all"}
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {loopsArr.length &&
                loopsArr.map((loop, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {loop.name}
                        </Typography>
                      </CardContent>
                      <CardPlay
                        hendleClick={hendleClick(index)}
                        isPlaying={loop.isPlaying}
                        inList={loop.inList}
                        onCheck={onCheck(index)}
                      />
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </main>
      </MuiThemeProvider>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom color="#FFFFFFF">
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="#FFFFFFF"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
