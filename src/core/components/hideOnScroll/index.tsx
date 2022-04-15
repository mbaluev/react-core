import React from 'react';
import {Slide, useScrollTrigger} from '@material-ui/core';

interface Props {
  element?: Node | null;
  visible?: boolean;
  hideOnScroll?: boolean;
  children: React.ReactElement;
}

export const HideOnScroll = (props: Props) => {
  const {children, visible, hideOnScroll, element} = props;
  const trigger = useScrollTrigger({
    target: element ? element : undefined,
  });
  const visibleIn = visible && (Boolean(hideOnScroll) ? !trigger : true);
  return (
    <Slide appear={false} direction="down" in={visibleIn}>
      {children}
    </Slide>
  );
};
