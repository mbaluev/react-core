import React from 'react';
import {classNames} from '../../../utils/classNames';

export const HeaderSeparator = () => {
  const cls = classNames('header__item', 'header__separator');

  return <div className={cls} />;
};
