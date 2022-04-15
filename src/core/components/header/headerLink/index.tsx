import React from 'react';
import {IMenuItemDTO} from '../../../../controller/model/menu';
import {useRoute} from 'react-router5';
import {classNames} from '../../../utils/classNames/classNames';
import {constants} from 'router5';
import {SStorage} from '../../../utils/storage/storage';
import useRouterConst from '../../../hooks/useRouterConst';
import './index.less';

export const HeaderLink = (props: IMenuItemDTO) => {
  const {label, path, icon, isActive, loadFromSession} = props;

  const ROUTER_CONST = useRouterConst();
  const {router} = useRoute();

  let toRouteName = '';
  Object.keys(ROUTER_CONST).forEach((route) => {
    if (ROUTER_CONST[route].fullName === path) {
      toRouteName = ROUTER_CONST[route].name;
    }
  });

  const onClick = () => {
    router.navigate(
      path || constants.UNKNOWN_ROUTE,
      loadFromSession && SStorage.filters
        ? SStorage.filters[toRouteName]
        : undefined
    );
  };

  const cls = classNames(
    'header__link',
    isActive ? 'header__link_active' : undefined
  );

  return (
    <div className={cls} onClick={onClick}>
      {icon}
      {label && <span className="header__link-label">{label}</span>}
    </div>
  );
};
