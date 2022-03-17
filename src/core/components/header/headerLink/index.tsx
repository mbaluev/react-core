import React, {useEffect} from 'react';
import {IMenuItemDTO} from '../../../../controller/model/menu';
import {useRoute} from 'react-router5';
import {classNames} from '../../../utils/classNames';
import {useViewModel} from '../../../hooks/useViewModel';
import {VIEW_MODEL} from '../../../../controller/viewModel';
import {IMenuViewModel} from '../../../../controller/viewModel/modules/menu/interface';

export const HeaderLink = (props: IMenuItemDTO) => {
  const {label, path, icon, isActive} = props;

  const {setActive} = useViewModel<IMenuViewModel>(VIEW_MODEL.Menu);

  const {router, route} = useRoute();
  const onClick = () => {
    router.navigate(path as string);
    setActive(path as string);
  };

  useEffect(() => {
    setActive(route.name);
    // eslint-disable-next-line
  }, []);

  const cls = classNames(
    'header__item',
    'header__link',
    isActive ? 'header__link_active' : undefined
  );

  return (
    <div className={cls} onClick={onClick}>
      {label && <span className="header__label">{label}</span>}
      {icon}
    </div>
  );
};
