import React, {useEffect, useState} from 'react';
import {useRoute} from 'react-router5';
import {observer} from 'mobx-react-lite';
import {
  MultiSelectFieldControl,
  MultiSelectFieldControlProps,
} from '../../fields';
import {useFilters} from '../../../hooks/useFilters';
import './index.less';

export const FilterMultiSelect = observer(
  (props: MultiSelectFieldControlProps) => {
    const {name = ''} = props;
    const {filters, setFilter} = useFilters();
    const {route} = useRoute();

    const [value, setValue] = useState<string[]>(filters[name]);

    const onChange = (
      e: React.ChangeEvent<{name?: string; value: unknown}>
    ) => {
      setFilters(e.target.value as string[]);
    };

    const setFilters = (value: unknown[]) => {
      setFilter(name, value, route.name);
    };

    // eslint-disable-next-line
    useEffect(() => setValue(filters[name]), [filters[name]]);

    return (
      <MultiSelectFieldControl
        className="filter-multi-select"
        {...props}
        value={value || []}
        onChange={onChange}
      />
    );
  }
);
