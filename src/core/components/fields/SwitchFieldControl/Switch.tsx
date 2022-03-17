import {Switch as MuiSwitch, withStyles} from '@material-ui/core';

export const Switch = withStyles((theme) => ({
  root: {
    width: 40,
    height: 24,
    padding: 0,
    margin: 8,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: '#ffffff',
    '&$checked': {
      transform: 'translateX(16px)',
      color: '#ffffff',
    },
    '&$checked + $track': {
      opacity: 1,
      backgroundColor: '#167dff',
      borderColor: '#167dff',
    },
    '&$disabled': {
      color: '#ffffff',
    },
    '&$disabled + .MuiSwitch-track': {
      opacity: 0.5,
      backgroundColor: '#a9a9b1',
      borderColor: '#a9a9b1',
    },
    '&$disabled$checked': {
      color: '#ffffff',
    },
    '&$disabled$checked + .MuiSwitch-track': {
      opacity: 0.5,
      backgroundColor: '#167dff',
      borderColor: '#167dff',
    },
  },
  thumb: {
    width: 20,
    height: 20,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 24 / 2,
    opacity: 1,
    backgroundColor: '#a9a9b1',
    boxSizing: 'border-box',
  },
  checked: {},
  disabled: {},
}))(MuiSwitch);
