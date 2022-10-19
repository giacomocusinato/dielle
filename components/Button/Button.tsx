
import classNames from "classnames";
import React, { MouseEventHandler } from "react";

type ButtonProps = {
  href?: string,
  children?: React.ReactNode
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>,
};

const defaultProps: ButtonProps = {
  href: '#',
  onClick: () => { },
}

export const Button: React.FC<ButtonProps> = ({ href, onClick, className, children }) => {
  return (
    <a
      className={classNames(
        'flex items-center justify-center px-5 py-3 w-fit bg-dielle text-white text-medium rounded-sm',
        'hover:opacity-90 transition-all duration-175',
        className,
      )}
      role={href ? 'link' : 'button'}
      href={href}
      onClick={onClick}>
      {children}
    </a>
  );
}