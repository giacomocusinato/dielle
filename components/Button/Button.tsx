import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

type ButtonProps = {
  href?: string,
  size?: 'md' | 'lg';
  rounded?: boolean;
  stroked?: boolean;
  children?: React.ReactNode
  className?: string;
  type?: 'button' | 'submit' | 'reset',
  onClick?: MouseEventHandler<HTMLButtonElement>,
};

const defaultProps: ButtonProps = {
  size: 'md',
  rounded: false,
  stroked: false,
  type: "button",
  onClick: () => { },
}

export const Button: React.FC<ButtonProps> = ({ className, children, href, onClick, type, ...props }) => {
  const classes = classNames(
    'flex items-center justify-center w-fit font-medium',
    'hover:opacity-90 transition-all duration-175',
    props.stroked ? 'outline outline-2 outline-dielle text-dielle' : 'bg-dielle text-white',
    props.rounded ? 'rounded-[40px]' : 'rounded-sm',
    props.size === 'md' && 'py-[6px] px-4',
    props.size === 'lg' && 'py-3 px-5',
    className,
  );

  return href ? (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  ) :
    <button onClick={onClick} className={classes} type={type}> {children}</button >
}

Button.defaultProps = defaultProps;