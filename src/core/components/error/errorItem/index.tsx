import React from 'react';
import './index.less';

interface IErrorItemProps {
  message: string;
  onClose(): void;
}
const ErrorItem = (props: IErrorItemProps) => {
  const {message, onClose} = props;
  return (
    <div className="error-item">
      <div className="error-item-message">{message}</div>
      <div className="error-item-button">
        <span className="m-i-cross" onClick={onClose} />
      </div>
    </div>
  );
};

export default ErrorItem;
