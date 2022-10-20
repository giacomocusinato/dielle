import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  href?: string,
  size?: 'md' | 'lg';
  rounded?: boolean;
  stroked?: boolean;
  children?: React.ReactNode
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>,
};

const defaultProps: ButtonProps = {
  href: '#',
  size: 'md',
  rounded: false,
  stroked: false,
  onClick: () => { },
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <a
      className={classNames(
        'flex items-center justify-center w-fit font-medium',
        'hover:opacity-90 transition-all duration-175',
        props.stroked ? 'outline outline-2 outline-dielle text-dielle' : 'bg-dielle text-white',
        props.rounded ? 'rounded-[40px]' : 'rounded-sm',
        props.size === 'md' && 'py-[6px] px-4',
        props.size === 'lg' && 'py-3 px-5',
        className,
      )}
      role={props.href ? 'link' : 'button'}
      href={props.href}
      onClick={props.onClick}>
      {children}
    </a>
  );
}

Button.defaultProps = defaultProps;