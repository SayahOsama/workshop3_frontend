import { MainPage } from './components/main/main-page';
import { LoginPage } from './components/login/login-page';
import { SignUpPage } from './components/signup/signup-page';
import { PageProps } from './types';
import { useEffect, useState } from 'react';
import { AuthApi } from './api/authApi';
import { Loader } from './components/loader/loader';

export const App = () => {
  const [currentPage, setCurrentPage] = useState<string>('login');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchUsername = async () => {
      setIsLoading(true);
      const res = await AuthApi.getUserName();
      setIsLoading(false);
      if (typeof res === 'string') {
        setCurrentPage('main');
      } else {
        setCurrentPage('login');
      }
    };
    fetchUsername();
  }, []);

  const pageProps: PageProps = {
    navigateToMainPage: () => setCurrentPage('main'),
    navigateToSignUpPage: () => setCurrentPage('signup'),
    navigateToLoginPage: () => setCurrentPage('login'),
  }

  if(isLoading){
    return(
      <Loader />
    )
  }

  if(currentPage === 'login') {
    return (
      <LoginPage {...pageProps}/>
    )
  }
  if(currentPage === 'signup') {
    return (
      <SignUpPage {...pageProps}/>
    )
  }
  return (
    <MainPage {...pageProps}/>
  )
};