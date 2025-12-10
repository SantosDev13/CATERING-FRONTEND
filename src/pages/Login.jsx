import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    // Autenticación Básica: Convertimos usuario:password a Base64
    const token = btoa(`${credentials.username}:${credentials.password}`);
    
    try {
      // Intentamos pedir un dato público pero enviando la credencial para probar si funciona
      // O mejor, intentamos acceder a un endpoint protegido si tuviéramos uno específico de "check"
      // Por simplicidad, guardamos la credencial y redirigimos.
      // En un sistema real haríamos un POST /api/login, pero con Basic Auth funciona así:
      
      localStorage.setItem('auth_token', token); // Guardamos la "llave"
      navigate('/admin'); // Te mandamos al panel
    } catch (err) {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-serif text-center mb-6">Acceso Admin</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Usuario</label>
          <input name="username" onChange={handleChange} className="w-full border p-2 rounded" />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Contraseña</label>
          <input type="password" name="password" onChange={handleChange} className="w-full border p-2 rounded" />
        </div>
        
        <button type="submit" className="w-full bg-[#D4AF37] text-white py-2 font-bold hover:bg-black transition">
          INGRESAR
        </button>
      </form>
    </div>
  );
};

export default Login;