import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
  SliderFieldControl,
  SliderFieldControlProps,
} from '../../fields/SliderFieldControl';
import {useRoute} from 'react-router5';
import {useFilters} from '../../../hooks/useFilters';
import './index.less';

export const FilterSlider = observer((props: SliderFieldControlProps) => {
  const {name = ''} = props;

  const {filters, setFilter} = useFilters();
  const {route} = useRoute();

  const [value, setValue] = useState<undefined | number | number[]>(
    filters[name]
  );

  const onChange = (value?: number | number[]) => {
    setValue(value);
    setFilters(value);
  };

  const setFilters = (value?: number | number[]) => {
    setFilter(name, value, route.name);
  };

  // eslint-disable-next-line
  useEffect(() => setValue(filters[name] || ''), [filters[name]]);

  return (
    <SliderFieldControl
      className="filter-slider"
      {...props}
      value={value}
      onChange={onChange}
    />
  );
});
