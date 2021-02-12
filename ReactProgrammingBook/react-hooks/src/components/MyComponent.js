import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  React.useEffect(() => {
    document.title = `업데이트 횟수 ${count}`;
  });

  return <button onClick={() => setCount(count + 1)}>increase</button>;
};

export default MyComponent;