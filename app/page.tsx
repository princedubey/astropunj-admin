import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => redirect('/login')}>Login</button>
    </div>
  );
}