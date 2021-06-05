import * as React from 'react';
import { useSpring, animated } from 'react-spring';

// eslint-disable-next-line no-unused-vars
import { SwipeableWrapperProps, SwipeableState } from './SwipeableWrapper';

import directionEnum from '../constants/direction';
import { getOpacity } from '../utils/helpers';

export interface SwipeableProps extends SwipeableWrapperProps {
  handleForceSwipe: (direction: directionEnum) => void,
  handleOnDragStart: (e: any) => any,
  state: SwipeableState,
}

const Swipeable = ({
  wrapperHeight = '100%',
  wrapperWidth = '100%',
  swipeThreshold = 120,
  fadeThreshold = 40,
  handleOnDragStart,
  handleForceSwipe,
  onOpacityChange,
  renderButtons,
  disabled,
  children,
  state,
  leftIcon,
  rightIcon
}: SwipeableProps) => {

  const springProps = useSpring({
    immediate: state.pristine || (!state.forced && Math.abs(state.offset) >= swipeThreshold),
    config: {
      tension: 390,
      friction: 30,
      restSpeedThreshold: 1,
      restDisplacementThreshold: 0.01,
      overshootClamping: true,
      lastVelocity: 1,
      mass: 0.1,
    },
    from: {
      offset: 0,
    },
    to: {
      offset: state.offset,
      transform: `translateX(${-500}px) rotate(${45 / 10}deg)`,

    },
  });


  // eslint-disable-next-line
  // const opacity = disabled ? 1 : getOpacity(state.offset, swipeThreshold, fadeThreshold);

  // eslint-disable-next-line
  const offset = disabled ? 0 : state.offset;

  const animatedStyle = {
    ...springProps,
    transform: `translateX(${offset}px) rotate(${offset / 10}deg)`,
    height: wrapperHeight,
    width: wrapperWidth,
  };

  const { opacity } = useSpring({ 
    from: { opacity: 0 },
    to: { opacity: disabled ? 0 : getOpacity(state.offset, swipeThreshold, fadeThreshold) }, 
  })

  // const overlayStyle = {
  //   // opacity: opacity as any, 
  //   ...overlaySpring
  // };
  // React.useEffect(() => {
  //   onOpacityChange?.(opacity);
  // }, [onOpacityChange, opacity]);

  return (
    <>
      <animated.div
        onTouchStart={handleOnDragStart}
        onMouseDown={handleOnDragStart}
        style={animatedStyle}
      >
        {children}
        <animated.div 
          style={{ opacity: opacity as any}} //https://github.com/pmndrs/react-spring/issues/1102 
          className="overlay"
        >
          {offset < 0 ? leftIcon : rightIcon }
        </animated.div>
      </animated.div>

      {
        renderButtons && (
          renderButtons({
            right: () => handleForceSwipe(directionEnum.RIGHT),
            left: () => handleForceSwipe(directionEnum.LEFT),
          })
        )
      }
    </>
  );
};

export default Swipeable;
