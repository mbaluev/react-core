import {
  Accordion as AccordionMui,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import {ExpandMore} from '@material-ui/icons';
import React, {FC, useState} from 'react';
import {Button, IButtonProps} from '../button';
import {useUpdateEffect} from '../../hooks/useUpdateEffect';
import './index.less';

interface IProps {
  title: string;
  id?: string;
  className?: string;
  footer?: boolean;
  footerButtons?: IButtonProps[];
  isExpanded?: boolean;
  onChange?: (value: boolean) => void;
}

export const Accordion: FC<IProps> = (props) => {
  const {
    title,
    id,
    className,
    children,
    footer,
    footerButtons,
    isExpanded,
    onChange,
  } = props;

  const [expanded, setExpanded] = useState<boolean>(Boolean(isExpanded));

  const cls = ['accordion'];
  if (className) cls.push(className);
  if (expanded) cls.push('accordion_expanded');

  const onChangeHandler = () => {
    if (onChange) onChange(!expanded);
    setExpanded(!expanded);
  };

  useUpdateEffect(() => {
    setExpanded(Boolean(isExpanded));
  }, [isExpanded]);

  return (
    <div className={cls.join(' ')} id={id}>
      <AccordionMui expanded={expanded} onChange={onChangeHandler}>
        <AccordionSummary expandIcon={<ExpandMore />}>{title}</AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
        {(footer || footerButtons) && expanded ? (
          <div className="accordion__footer">
            {footerButtons ? (
              <div className="accordion__footer-buttons">
                {footerButtons?.map((btn, index) => (
                  <Button key={index} {...btn} size="small" />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </AccordionMui>
    </div>
  );
};
