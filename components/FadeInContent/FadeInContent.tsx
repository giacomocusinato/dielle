import React from 'react';
import classNames from 'classnames';

type FadeInContentProps = {
  children?: React.ReactNode
};

export const FadeInContent: React.FC<FadeInContentProps> = ({ children }) => {
  const domRef = React.useRef<HTMLDivElement>(null);

  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {

        setVisible(true);

        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    }, { threshold: 0.3 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }


    return () => observer.disconnect();
  }, []);

  return (<div ref={domRef} className={classNames('fade-in-content', isVisible && 'visible')}>{children}</div>);
};
