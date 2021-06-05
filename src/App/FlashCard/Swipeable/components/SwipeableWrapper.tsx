import * as React from 'react';
import { ReactChild, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import directionEnum from '../constants/direction';


import {
  getDirection,
  getOffset,
  withX,
  getLimitOffset,
} from '../utils/helpers';

import Swipeable from './Swipeable';

const INITIAL_STATE = {
  start: 0,
  offset: 0,
  forced: false,
  swiped: false,
  moving: false,
  pristine: true,
};

export interface RenderButtonsPayload {
  right: () => void,
  left: () => void,
}

export interface SwipeableWrapperProps {
  children: ReactChild,
  renderButtons?: (payload: RenderButtonsPayload) => ReactNode,
  onBeforeSwipe?: (
    forceSwipe: (direction: directionEnum) => void,
    cancelSwipe: () => void,
    direction: directionEnum,
  ) => void,
  onDragging?: (offset: number) => void,
  onDragEnd?: () => void,
  onSwipe?: (
    direction: directionEnum,
  ) => void,
  onOpacityChange?: (opacity: number) => void,
  onAfterSwipe?: () => void,
  wrapperHeight?: string,
  wrapperWidth?: string,
  swipeThreshold?: number,
  fadeThreshold?: number,
  disabled?: boolean,
  leftIcon: ReactNode,
  rightIcon: ReactNode,
}

export interface SwipeableState {
  pristine: boolean,
  moving: boolean,
  forced: boolean,
  swiped: boolean,
  offset: number,
  start: number,
  flyout?: directionEnum,
}

const SwipeableWrapper = (props: SwipeableWrapperProps) => {
  const [state, setState] = useState<SwipeableState>(INITIAL_STATE);
  const stateRef = useRef(state);
  stateRef.current = state;

  const {
    swipeThreshold = 120,
    onDragging,
    onDragEnd,
    onBeforeSwipe,
    onAfterSwipe,
    onSwipe,
    disabled
  } = props;

  const handleResetState = useCallback(() => {
    setState(INITIAL_STATE);

    setState({
      ...stateRef.current,
      offset: 0,
      start: 0,
    });
  }, []);

  const handleOnAfterSwipe = useCallback(() => {
    onAfterSwipe?.();

    handleResetState();
  }, [handleResetState, onAfterSwipe]);

  const handleOnSwipe = useCallback((direction: directionEnum) => {
    onSwipe?.(direction);

    setState({
      ...stateRef.current,
      offset: getLimitOffset(swipeThreshold, direction) * 2,
      moving: false,
      swiped: true,
      flyout: direction
    });
    
  }, [onSwipe, swipeThreshold]);

  const handleOnBeforeSwipe = useCallback((direction: directionEnum) => {
    if (!onBeforeSwipe) {
      handleOnSwipe(direction);
      return;
    }

    onBeforeSwipe(
      (_direction: directionEnum) => handleOnSwipe(_direction || direction),
      handleResetState,
      direction,
    );
  }, [handleOnSwipe, handleResetState, onBeforeSwipe]);

  const handleOnDragStart = useCallback(withX((start: number) => {
    if (disabled || stateRef.current.swiped) {
      return;
    }

    setState({
      ...stateRef.current,
      pristine: false,
      moving: true,
      start,
    });
  }), [disabled]);

  const handleOnDragEnd = useCallback(() => {
    if (stateRef.current.swiped || !stateRef.current.moving) {
      return;
    }
    onDragEnd?.();

    if (Math.abs(stateRef.current.offset) >= swipeThreshold) {
      handleOnBeforeSwipe(getDirection(stateRef.current.offset));
      return;
    }

    handleResetState();
  }, [handleOnBeforeSwipe, handleResetState, onDragEnd, swipeThreshold]);

  const handleOnDragMove = useCallback(withX((end: number) => {
    if (disabled || stateRef.current.swiped || !stateRef.current.moving) {
      return;
    }
    const offset = getOffset(stateRef.current.start, end);
    onDragging?.(offset);

    setState({
      ...stateRef.current,
      offset,
    });
  }), [disabled]);

  const handleForceSwipe = useCallback((direction: directionEnum) => {
    if (stateRef.current.swiped) {
      return;
    }

    setState({
      ...stateRef.current,
      pristine: false,
      forced: true,
    });

    handleOnBeforeSwipe(direction);
  }, [handleOnBeforeSwipe]);

  useEffect(() => {
    window.addEventListener('touchmove', handleOnDragMove);
    window.addEventListener('mousemove', handleOnDragMove);
    window.addEventListener('touchend', handleOnDragEnd);
    window.addEventListener('mouseup', handleOnDragEnd);

    return () => {
      window.removeEventListener('touchmove', handleOnDragMove);
      window.removeEventListener('mousemove', handleOnDragMove);
      window.removeEventListener('touchend', handleOnDragEnd);
      window.removeEventListener('mouseup', handleOnDragEnd);
    };
  }, [handleOnDragEnd, handleOnDragMove]);

  useEffect(() => {
    // Effect fires when swiping treshold has been reached and the
    // Swipeable flies off screen
    if (!state.flyout) {
      return
    }
    const amount = state.flyout === directionEnum.LEFT ? -20 : 20;
    const increment = () => {
      if (Math.abs(stateRef.current.offset) > 1000) {
        clearInterval(interval);
        handleOnAfterSwipe();
      }
      setState({
        ...stateRef.current,
        offset: stateRef.current.offset + amount,
      });
    }
    const interval = setInterval(increment, 5);
    return () => clearInterval(interval);
  }, [handleOnAfterSwipe, state.flyout])

  return (
    <Swipeable
      handleOnDragStart={handleOnDragStart}
      handleForceSwipe={handleForceSwipe}
      state={stateRef.current}
      {...props}
    />
  );
};

export default SwipeableWrapper;
