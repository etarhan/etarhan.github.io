import React, { useRef } from 'react';
import { animated, useSpring, useChain, config } from 'react-spring';

const Pin = ({ children }) => {
  const firstRef = useRef();
  const firstProps = useSpring({
    ref: firstRef,
    to: { width: '100%', opacity: 1 },
    from: { width: '0%', opacity: 0 },
    config: config.molasses
  });

  const secondRef = useRef();
  const secondProps = useSpring({
    ref: secondRef,
    to: { borderRadius: '50%'},
    from: { borderRadius: '0%' },
    // delay: 100,
    config: config.gentle
  });

  useChain([firstRef, secondRef], [0.5, 1]);

  return (
    <animated.span style={{ ...firstProps, ...secondProps }} className="pin">
      {children}
    </animated.span>
  );
}

export default Pin
