import React from 'react';
import {ITabsProps} from '../tabs';
import {TabsPanel} from '../tabsPanel';

export const TabsPanels = (props: ITabsProps) => {
  const {tabs, activeTab} = props;
  return (
    <React.Fragment>
      {tabs.map((tab) => {
        return tab.hide ? null : (
          <TabsPanel
            key={tab.value}
            active={tab.value === activeTab}
            className={tab.className}
          >
            {tab.content}
          </TabsPanel>
        );
      })}
    </React.Fragment>
  );
};
