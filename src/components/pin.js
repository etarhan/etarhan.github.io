import React, { useRef, useState } from 'react';
import { animated, useSpring, useChain, config, interpolate } from 'react-spring';

const Pin = ({ url, children }) => {
  const firstRef = useRef();
  const firstProps = useSpring({
    ref: firstRef,
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.gentle
  });

  const secondRef = useRef();
  const secondProps = useSpring({
    ref: secondRef,
    to: { borderRadius: '50%' },
    from: { borderRadius: '0%' },
    // delay: 100,
    config: config.gentle
  });

  useChain([firstRef, secondRef], [0.5, 1]);

  // const [bounce, setBounce] = useState(false)
  const [grow, setGrow] = useState(false)

  const growProps = useSpring({ 
    transform: `scale(${grow ? 1.1 : 1}`, 
    config: config.gentle
  });

  return (

    <animated.a 
      href={url}
      style={{
        ...firstProps,
        ...secondProps,
        ...growProps
      }}
      className="pin" 
      onMouseOver={() => setGrow(true)}
      onMouseLeave={() => setGrow(false)}>
      {children}
    </animated.a>
  );
}

export default Pin
