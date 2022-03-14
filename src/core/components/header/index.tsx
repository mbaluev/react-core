import React from 'react';
import {observer} from 'mobx-react';
import {useViewModel} from '../../hooks/useViewModel';
import {VIEW_MODEL} from '../../../controller/viewModel';
import {IMenuViewModel} from '../../../controller/viewModel/modules/menu/interface';
import {IMenuItem} from '../../../controller/model/menu';
import {HeaderLink} from './headerLink';
import {HeaderSeparator} from './headerSeparator';
import './index.less';

export const Header = observer(() => {
  const {data} = useViewModel<IMenuViewModel>(VIEW_MODEL.Menu);
  return (
    <div className="header">
      {data?.map((item: IMenuItem, index) => {
        switch (item.type) {
          case 'link':
            return <HeaderLink key={index} {...item} />;
          case 'separator':
            return <HeaderSeparator key={index} />;
          default:
            return null;
        }
      })}
    </div>
  );
});
