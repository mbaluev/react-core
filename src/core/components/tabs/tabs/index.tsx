import React from 'react';
import {TabsHeader} from '../tabsHeader';
import {TabsPanels} from '../tabsPanels';
import './index.less';

export interface ITabProps {
  label: string;
  value: string;
  hide?: boolean;
  disabled?: boolean;
  className?: string;
  content?: any;
}
export interface ITabsProps {
  onChangeTab: (_: React.ChangeEvent<{}>, newValue: string) => void;
  tabs: ITabProps[];
  activeTab: string;
}

export const Tabs = (props: ITabsProps) => {
  return (
    <div className="tabs">
      <TabsHeader {...props} />
      <TabsPanels {...props} />
    </div>
  );
};
