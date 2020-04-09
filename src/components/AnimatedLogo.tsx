import React, { createRef, useLayoutEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";

import { State } from "../state";
import Logo from '../images/logo.svg'

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    height: '38px',
    width: 'auto'
  },
  paused: {
    '& > *': {
      '-webkit-animation-play-state': 'paused !important',
      '-moz-animation-play-state': 'paused !important',
      '-o-animation-play-state': 'paused !important',
      'animation-play-state': 'paused !important',
    }
  }
}));

export function AnimatedLogo () {
  const classes = useStyles();
  const loading = useSelector((state: State) => state.app.loading);
  const logoRef = createRef<any>();

  useLayoutEffect(() => {
    if (logoRef.current) {
      if (loading.size === 0) {
        const svg = logoRef.current.children[0];
        svg.classList.add(classes.paused)
      } else {
        const svg = logoRef.current.children[0];
        svg.classList.remove(classes.paused)
      }
    }
  });

  return (
    <div ref={logoRef} className={classes.logo}>
      <Logo />
    </div>
  )
}