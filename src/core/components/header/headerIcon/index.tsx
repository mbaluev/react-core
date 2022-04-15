import React from 'react';
import {IMenuItemDTO} from '../../../../controller/model/menu';
import {useRoute} from 'react-router5';
import {classNames} from '../../../utils/classNames/classNames';
import {constants} from 'router5';
import {HeaderDot} from '../headerDot';
import './index.less';

export const HeaderIcon = (props: IMenuItemDTO) => {
  const {path, icon, isActive, dot} = props;

  const {router} = useRoute();
  const onClick = () => router.navigate(path || constants.UNKNOWN_ROUTE);

  const cls = classNames(
    'header__icon',
    isActive ? 'header__icon_active' : undefined
  );

  return (
    <div className={cls} onClick={onClick}>
      {icon}
      {dot && <HeaderDot />}
    </div>
  );
};
