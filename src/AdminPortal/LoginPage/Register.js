import { useState, useContext } from 'react';
import axios from 'axios';
import './LoginPage.css';
import Swal from 'sweetalert2';
import AuthContext from '../../store/authContext';

const Register = () => {
  const authCtx = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitHandler called');
    const body = {
      username,
      password,
    };
    const url = 'https://jericho-server-eb9k.onrender.com';
    axios
      .post(`${url}/register`, body) // Change the endpoint to /register
      .then((res) => {
        console.log('AFTER AUTH', res.data);
        authCtx.login(res.data.token, res.data.exp, res.data.userId);
        Swal.fire({
          title: 'Welcome Jericho Admin',
          confirmButtonColor: 'rgb(210, 161, 12)',
          customClass: 'buttonalert',
          confirmButtonText: 'Thanks',
        });
      })
      .catch((error) => {
        setUsername('');
        setPassword('');
        console.log('ERROR');
        Swal.fire({
          title: 'Registration Failed',
          text: 'Please check your input and try again.',
          confirmButtonColor: 'red',
          customClass: 'buttonalert',
          confirmButtonText: 'Ok',
        });
      });
  };

  return (
    <div className='loginpage'>
      <main className='loginform'>
        <form className='form-auth-form' onSubmit={submitHandler}>
          <h1 className='login_header'>Register</h1> {/* Change the header text */}
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='form-input'
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-input'
          />
          <button className='form-btn'>Register</button> {/* Change the button text */}
        </form>
      </main>
    </div>
  );
};

export default Register;
