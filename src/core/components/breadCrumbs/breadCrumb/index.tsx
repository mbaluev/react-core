import React, {FC} from 'react';
import {observer} from 'mobx-react';
import {IMenuItemDTO} from '../../../../controller/model/menu';
import {useRoute} from 'react-router5';
import {constants} from 'router5';
import {classNames} from '../../../utils/classNames/classNames';
import {SStorage} from '../../../utils/storage/storage';
import useRouterConst from '../../../hooks/useRouterConst';
import './index.less';

export type TBreadCrumb = IMenuItemDTO & {
  className?: string;
  isStatic?: boolean;
};

export const BreadCrumb: FC<TBreadCrumb> = observer((props) => {
  const {className, label, path, loadFromSession, isStatic} = props;

  const ROUTER_CONST = useRouterConst();
  const {router} = useRoute();

  let toRouteName = '';
  Object.keys(ROUTER_CONST).forEach((route) => {
    if (ROUTER_CONST[route].fullName === path) {
      toRouteName = ROUTER_CONST[route].name;
    }
  });

  const onClick = () => {
    if (!isStatic && path)
      router.navigate(
        path || constants.UNKNOWN_ROUTE,
        loadFromSession && SStorage.filters
          ? SStorage.filters[toRouteName]
          : undefined
      );
  };

  const cls = classNames('bread-crumb', className, {
    'bread-crumb_static': Boolean(isStatic),
  });

  return (
    <div className={cls} onClick={onClick}>
      {label}
    </div>
  );
});
