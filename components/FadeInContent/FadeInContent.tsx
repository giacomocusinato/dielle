import React from 'react';
import classNames from 'classnames';

type FadeInContentProps = {
  children?: React.ReactNode
  delay?: number;
};

export const FadeInContent: React.FC<FadeInContentProps> = ({ children, delay = 0 }) => {
  const domRef = React.useRef<HTMLDivElement>(null);

  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {

        setTimeout(() => setVisible(true), delay);

        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    }, { threshold: 0.12 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }


    return () => observer.disconnect();
  }, [delay]);

  return (<div ref={domRef} className={classNames('fade-in-content', isVisible && 'visible')}>{children}</div>);
};

export const withFadeInContent = (Component: React.ComponentType) => () => (
  <FadeInContent>
    <Component />
  </FadeInContent>
)
