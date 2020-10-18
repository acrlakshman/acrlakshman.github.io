import React from 'react';
import { useSpring, animated } from 'react-spring';

import './styles.css';

interface Props {
  label?: string;
}

const SectionLabel = ({ label }: Props): JSX.Element => {
  const [{fontSize}, set] = useSpring(() => ({fontSize: "1rem"}));

  return (
    <div className="content-header">
      <p
        onMouseEnter={() => set({fontSize: "1.1rem"})}
        onMouseLeave={() => set({fontSize: "1.0rem"})}
        className="content-header-text"
      >
        <animated.span style={{fontSize}}>
          {label}
        </animated.span>
      </p>
    </div>
  );
};

export default SectionLabel;
