import React, { useReducer, useEffect } from 'react';

const TimelineMain = () => {
  const [, forceUpdate] = useReducer(v => v + 1, 0);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => forceUpdate());
    return () => unsubscribe();
  }, []);
  const onAdd = () => {
    const timeline = getNextTimeline((timeline));

  }
  return (
    <div>
      
    </div>
  );
};

export default TimelineMain;