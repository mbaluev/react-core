import React from 'react';
import {observer} from 'mobx-react';
import {useViewModel} from '../../../hooks/useViewModel';
import {ERRORS_MODULE} from '../../../../controller/errors';
import ErrorItem from '../errorItem';
import './index.less';

const ErrorList = observer(() => {
  const {errors, remove} = useViewModel(ERRORS_MODULE);

  return errors.length > 0 ? (
    <div className="error-list">
      {errors.map((item: any) => (
        <ErrorItem
          key={item.guid}
          onClose={() => remove(item.guid)}
          {...item}
        />
      ))}
    </div>
  ) : null;
});

export default ErrorList;
