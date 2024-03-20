import React, { useEffect, useState } from 'react';
import './main-page.css'; 
import { AuthApi } from '../../api/authApi';
import { Loader } from '../loader/loader';
import { APIStatus, PageProps } from '../../types';
import { ErrorMessage } from '../error/error';

export const MainPage: React.FC<PageProps> = ({navigateToLoginPage}) => {
  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');


  useEffect(() => {
    const fetchUsername = async () => {
      setIsLoading(true);
      const res = await AuthApi.getUserName();
      setIsLoading(false);
      if (typeof res === 'string') {
        setUsername(res);
      } else {
        setErrorMessage('Failed to fetch username, please try again');
      }
    };
    fetchUsername();
  }, []);
  
  const onLogout = async () => {
    setIsLoading(true);
    const res = await AuthApi.logout();
    setIsLoading(false);
    if(res === APIStatus.Success) {
        navigateToLoginPage();
        return;
    }
    setErrorMessage('Failed to logout, please try again');
  }

  return (
    <div className="main-page-container">
      {isLoading 
      ? <Loader /> 
      : <> 
        <h2>Hello, {username}</h2>
        <button onClick={onLogout}>Logout</button> 
      </>
      }
    {errorMessage && <ErrorMessage message={errorMessage}/>}
    </div>
  );
};
