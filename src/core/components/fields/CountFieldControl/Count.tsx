import {Slider, withStyles} from '@material-ui/core';

export const Count = withStyles({
  root: {
    color: '#167dff',
    height: 4,
    paddingTop: 6,
    paddingBottom: 6,
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: '#167dff',
    marginLeft: -7,
  },
  active: {},
  track: {
    height: 4,
    borderRadius: 2,
  },
  rail: {
    height: 4,
    borderRadius: 2,
  },
})(Slider);
