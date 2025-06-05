import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/authSlice';
import { VscEye } from 'react-icons/vsc';
import { TbEyeClosed } from 'react-icons/tb';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../Styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/products');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ username, password })).unwrap();
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
  <div className="login-page">
    <div className="login-image" />

    <div className="login-content">

      <div className="side-image" />

      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <p>Seamless Shopping Starts Here🛒</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
              />
              <label>Username</label>
            </div>

            <div className="input-group">
              <input type={showPassword ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" " />
              <label>Password</label>
              <span onClick={() => setShowPassword(!showPassword)} className="toggle-password" >
                {showPassword ? <VscEye /> : <TbEyeClosed />}
              </span>
            </div>

            <div className="form-options">
              <label><input type="checkbox" /> Remember me</label>
              <span className="forgot-password">Forgot?</span>
            </div>


            {error && (
              <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>
            )}

            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="social-icons">
                <span><FaFacebookF /></span>
                <span><FaInstagram /></span>
                <span><FaTwitter /></span>
            </div>

          </form>
        </div>
      </div>

    </div>
  </div>
);
}

export default Login;
