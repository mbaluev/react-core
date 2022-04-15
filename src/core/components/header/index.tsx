import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {useViewModel} from '../../hooks/useViewModel';
import {VIEW_MODEL} from '../../../controller/viewModel';
import {IMenuViewModel} from '../../../controller/viewModel/modules/menu/interface';
import {IMenuItemDTO} from '../../../controller/model/menu';
import {HeaderLink} from './headerLink';
import {HeaderSearch} from './headerSearch';
import {HeaderIcon} from './headerIcon';
import FilterListIcon from '@material-ui/icons/FilterList';
import MenuIcon from '@material-ui/icons/Menu';
import {HeaderMobile} from './headerMobile';
import {MEDIA_SM, useWindowSize} from '../../hooks/useWindowSize';
import {HeaderItem} from './headerItem';
import {IFilterViewModel} from '../../../controller/viewModel/modules/filter/interfaces';
import './index.less';

export const Header = observer(() => {
  const {data: dataMenu} = useViewModel<IMenuViewModel>(VIEW_MODEL.Menu);
  const {isPanel, setIsPanelOpen} = useViewModel<IFilterViewModel>(
    VIEW_MODEL.Filter
  );

  const [openHeader, setOpenHeader] = useState<boolean>(false);
  const size = useWindowSize();

  return (
    <React.Fragment>
      <div className="header">
        <div className="header__container">
          <div className="header__left">
            {size.width > MEDIA_SM ? (
              dataMenu
                .filter((item) => item.position === 'left')
                .map((item: IMenuItemDTO, index) => (
                  <HeaderItem key={index}>
                    <HeaderLink {...item} />
                  </HeaderItem>
                ))
            ) : (
              <HeaderItem onClick={() => setOpenHeader(true)}>
                <HeaderIcon icon={<MenuIcon />} />
              </HeaderItem>
            )}
          </div>
          <div className="header__center">
            <HeaderItem fullWidth>
              <HeaderSearch name="query" />
            </HeaderItem>
            {isPanel && size.width <= MEDIA_SM && (
              <HeaderItem onClick={() => setIsPanelOpen(true)}>
                <HeaderIcon icon={<FilterListIcon />} />
              </HeaderItem>
            )}
          </div>
          <div className="header__right">
            {dataMenu
              .filter((item) => item.position === 'right')
              .map((item: IMenuItemDTO, index) => (
                <HeaderItem key={index}>
                  <HeaderIcon {...item} />
                </HeaderItem>
              ))}
          </div>
        </div>
      </div>
      <HeaderMobile open={openHeader} setOpen={setOpenHeader} />
    </React.Fragment>
  );
});
