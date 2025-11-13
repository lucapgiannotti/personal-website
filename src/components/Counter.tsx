import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '2px solid #646cff', borderRadius: '8px', textAlign: 'center' }}>
      <h2>React Counter Component</h2>
      <p style={{ fontSize: '24px', margin: '10px 0' }}>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer'
        }}
      >
        Reset
      </button>
    </div>
  );
}
