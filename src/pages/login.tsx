import { signIn } from 'next-auth/react';

const Login = () => {
  const handleLogin = () => {
    signIn('google'); // Gunakan provider Google OAuth
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Login ke Wisata</h1>
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Login dengan Google
      </button>
    </div>
  );
};

export default Login;
