import React, {FC, useState} from 'react';
import {createStyles, makeStyles, Tooltip} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Help from '@material-ui/icons/Help';
import './index.less';

const useStyles = makeStyles(() =>
  createStyles({
    tooltip: {
      maxWidth: 280,
      backgroundColor: '#565B63',
      fontSize: '14px',
      padding: '16px',
      textAlign: 'left',
      marginLeft: '-40px',
      marginBottom: '7px',
      borderRadius: '6px',
    },
  })
);

export interface IFormSectionProps {
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  titleClassName?: string;
  align?: string;
  info?: string;
  className?: string;
  rightBlock?: JSX.Element;
  collapsible?: boolean;
  isOpen?: boolean;
}

export const FormSection: FC<IFormSectionProps> = ({
  title,
  subtitle,
  titleClassName,
  align,
  info,
  className,
  rightBlock,
  collapsible,
  isOpen = true,
  children,
}) => {
  const classes = useStyles();

  const [isCollapse, setIsCollapse] = useState<boolean | undefined>(!isOpen);

  const clsMain = ['form-section'];
  if (className) clsMain.push(className);
  if (collapsible) clsMain.push('form-section_collapsible');
  if (isCollapse) clsMain.push('form-section_collapsed');

  const clsTitle = ['form-section__title'];
  if (titleClassName) clsTitle.push(titleClassName);

  const clsContent = ['form-section__content'];
  if (align) clsContent.push(`form-section__content_${align}`);
  if (collapsible && isCollapse)
    clsContent.push(`form-section__content_collapsed`);

  const collapseClick = () => {
    if (collapsible) setIsCollapse(!isCollapse);
  };

  return (
    <div className={clsMain.join(' ')}>
      {title || info || rightBlock ? (
        <div className={clsTitle.join(' ')}>
          <div className="form-section__title-left" onClick={collapseClick}>
            <div className="form-section__title-left-text">
              {title ? (
                <label className="form-section__label">{title}</label>
              ) : null}
              {info ? (
                <Tooltip
                  title={info}
                  placement="top-start"
                  TransitionProps={{timeout: 400}}
                  TransitionComponent={Fade}
                  classes={{
                    tooltip: classes.tooltip,
                  }}
                >
                  <div className="form-section__help">
                    <Help />
                  </div>
                </Tooltip>
              ) : null}
            </div>
            {collapsible ? (
              <div className="form-section__title-left-collapse">
                {isCollapse ? <ExpandMore /> : <ExpandLess />}
              </div>
            ) : null}
          </div>
          {rightBlock ? (
            <div className="form-section__title-right">{rightBlock}</div>
          ) : null}
        </div>
      ) : null}
      {subtitle && <div className="form-section__subtitle">{subtitle}</div>}
      <div className={clsContent.join(' ')}>{children}</div>
    </div>
  );
};
