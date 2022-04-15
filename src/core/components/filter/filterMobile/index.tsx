import React, {FC} from 'react';
import {observer} from 'mobx-react';
import CloseIcon from '@material-ui/icons/Close';
import {classNames} from '../../../utils/classNames/classNames';
import {useViewModel} from '../../../hooks/useViewModel';
import {IFilterViewModel} from '../../../../controller/viewModel/modules/filter/interfaces';
import {VIEW_MODEL} from '../../../../controller/viewModel';
import {MEDIA_SM, useWindowSize} from '../../../hooks/useWindowSize';
import './index.less';

interface IProps {
  title?: string;
  className?: string;
}

export const FilterMobile: FC<IProps> = observer((props) => {
  const {title, className, children} = props;
  const size = useWindowSize();

  const {isPanelOpen, setIsPanelOpen} = useViewModel<IFilterViewModel>(
    VIEW_MODEL.Filter
  );

  const onCloseHandler = () => setIsPanelOpen(false);
  const cls = classNames('filter-mobile', className);

  return isPanelOpen && size.width <= MEDIA_SM ? (
    <div className={cls}>
      <div className="filter-mobile__backdrop" onClick={onCloseHandler} />
      <div className="filter-mobile__container">
        <div className="filter-mobile__top">
          <div className="filter-mobile__top-text">
            {title ? title : 'Filter'}
          </div>
          <div className="filter-mobile__top-close">
            <CloseIcon onClick={onCloseHandler} />
          </div>
        </div>
        <div className="filter-mobile__content">{children}</div>
      </div>
    </div>
  ) : null;
});
