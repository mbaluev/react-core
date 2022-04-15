import React, {Dispatch, SetStateAction} from 'react';
import {observer} from 'mobx-react';
import {VIEW_MODEL} from '../../../../controller/viewModel';
import {IMenuItemDTO} from '../../../../controller/model/menu';
import {useViewModel} from '../../../hooks/useViewModel';
import {HeaderLink} from '../headerLink';
import {IMenuViewModel} from '../../../../controller/viewModel/modules/menu/interface';
import {HeaderItem} from '../headerItem';
import CloseIcon from '@material-ui/icons/Close';
import {MEDIA_SM, useWindowSize} from '../../../hooks/useWindowSize';
import './index.less';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const HeaderMobile = observer((props: IProps) => {
  const {open, setOpen} = props;
  const {data} = useViewModel<IMenuViewModel>(VIEW_MODEL.Menu);
  const size = useWindowSize();
  const onCloseHandler = () => setOpen(false);
  return open && size.width <= MEDIA_SM ? (
    <div className="header-mobile">
      <div className="header-mobile__backdrop" onClick={onCloseHandler} />
      <div className="header-mobile__container">
        <div className="header-mobile__top">
          <div className="header-mobile__top-text">Online Shop</div>
          <div className="header-mobile__top-close">
            <CloseIcon onClick={onCloseHandler} />
          </div>
        </div>
        <div className="header-mobile__content">
          {data
            .filter((item) => item.position === 'left')
            .map((item: IMenuItemDTO, index) => (
              <HeaderItem key={index}>
                <HeaderLink {...item} />
              </HeaderItem>
            ))}
        </div>
      </div>
    </div>
  ) : null;
});
