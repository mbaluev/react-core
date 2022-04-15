import React, {useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {InputAdornment} from '@material-ui/core';
import {useRoute} from 'react-router5';
import {observer} from 'mobx-react-lite';
import {TextFieldControl, TextFieldControlProps} from '../../fields';
import {useFilters} from '../../../hooks/useFilters';
import useRouterConst from '../../../hooks/useRouterConst';
import {classNames} from '../../../utils/classNames/classNames';
import './index.less';

export const HeaderSearch = observer((props: TextFieldControlProps) => {
  const {name = '', ...otherProps} = props;
  const {filters} = useFilters();
  const {router} = useRoute();
  const ROUTER_CONST = useRouterConst();

  const [value, setValue] = useState<string>(filters[name]);

  const onSearch = () => {
    const routeName = ROUTER_CONST.PRODUCTS.fullName;
    const filters = value ? {[name]: value} : {};
    router.navigate(routeName, filters);
  };

  const cls = classNames('header-search');

  // eslint-disable-next-line
  useEffect(() => setValue(filters[name] || ''), [filters[name]]);

  return (
    <TextFieldControl
      value={value}
      className={cls}
      placeholder="Search"
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSearch();
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onSearch} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...otherProps}
    />
  );
});
