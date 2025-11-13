interface GreetingProps {
  name: string;
}

export default function Greeting({ name }: GreetingProps) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h2>Hello, {name}! 👋</h2>
      <p>This is a React component with props in your Astro site.</p>
    </div>
  );
}
