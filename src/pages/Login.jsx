import React, { useEffect, useState } from 'react';
import KakaoLogin from './KakaoLogin';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { addUser, getUser } from '../api/login';
import runeat from '../../public/images/run_eat01.png';

export default function Login(){
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({
    id: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const {email, password} = user;

  const onChangeHandler = (e) => {
    const {value, name} = e.target;
    setUser({
      ...user,
      id: uuidv4(),
      [name] : value
    });
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getUser();
        setUserList(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await addUser(user);
      const res = await getUser();
      setUserList(res);
      navigate('/users', { state: { userList: res } });
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <section className='mx-auto max-w-[400px]'>
      <h1 className='my-12 font-semibold text-lg text-center'>로그인</h1>
      <img src={runeat} alt='runeat' className='mx-auto mb-5' />
      <form className='mb-3' onSubmit={onSubmitHandler}>
        <div><input type='text' name='email' placeholder='아이디(이메일)' value={email} onChange={onChangeHandler}/></div>
        <div><input type='password' name='password' placeholder='비밀번호' value={password} onChange={onChangeHandler} /></div>
        <button className='h-[3.2rem] w-full leading-[3.2rem] rounded text-center text-white bg-[#222222]'>로그인</button>
      </form>
      <KakaoLogin />
    </section>
  )
}
