import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './index.less';

interface ILoaderProps {
  loading: boolean;
  backdrop?: boolean;
  size?: number;
}

export const Loader = (props: ILoaderProps) => {
  const {loading, backdrop, size} = props;
  return loading ? (
    <div className="loader">
      {backdrop ? <div className="loader-backdrop" /> : null}
      <CircularProgress size={size} />
    </div>
  ) : null;
};
