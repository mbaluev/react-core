import React from 'react';
import {classNames} from '../../../utils/classNames/classNames';
import './index.less';

export const HeaderSeparator = () => {
  const cls = classNames('header__separator');
  return <div className={cls} />;
};
