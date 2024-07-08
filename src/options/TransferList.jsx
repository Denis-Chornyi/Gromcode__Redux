import React from 'react';
import AvialableOptions from './AvialableOptions';
import SelectedOptions from './SelectedOptions';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvialableOptions title="Available option" />
      <SelectedOptions title="Selected option" />
    </div>
  );
};

export default TransferList;
