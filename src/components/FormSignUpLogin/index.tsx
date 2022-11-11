import React from 'react';

import { useState } from 'react';

import FacebookLogo from '../../assets/images/facebook-logo.png';
import TwitterLogo from '../../assets/images/twitter-logo.png';
import YouTubeLogo from '../../assets/images/youtube-logo.png';

import {
    ButtonForm,
  ContainerInput,
  ContainerLinks,
  ContentForm,
  ContentImage,
  ContentImgageText,
  Form,
  Img,
  Input,
  InputBorder,
  InputBorderContent,
  LabelInput,
  LinkForm,
  LoginRegisterText,
  MainContainer,
  MainContent,
  Text,
} from './styles';

export type propsFormLoginSignUp = {
  isSignIn?: boolean;
  inputName?: boolean;
  inputEmail?: boolean;
  inputPassword?: boolean;
}

type FormData = {
  name: string;
  email: string;
  password: string;
}

const FormSignUpLogin = (props: propsFormLoginSignUp) => {
  
  const [isLogin, setLogin] = useState(false);
  const [nameEmpty, setNameEmpty] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [passwordEmpty, setPasswordEmpty] = useState(true);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: ''
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dataFormName = event.target.name;
    const dataFormValue = event.target.value;

    setFormData({ ...formData, [dataFormName]: dataFormValue });
    console.log(dataFormValue);

    setEmailEmpty(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    formData.name? setNameEmpty(true) : setNameEmpty(false);
    formData.email? setEmailEmpty(true) : setEmailEmpty(false);
    formData.password? setPasswordEmpty(true) : setPasswordEmpty(false);

    if (!nameEmpty) {
      applyShakeError("name");
    }

    if (!emailEmpty) {
      console.log("Erro email")
      applyShakeError("email");
    }
    
    if (!passwordEmpty) {
      applyShakeError("password");
    }
  };
  


  const applyShakeError = (field: string) => {
    document.querySelector(`.error-input-${field}`)?.classList.add('shake');
    setTimeout(() => {
      document.querySelector(`.error-input-${field}`)?.classList.remove('shake');      
    }, 500)
}

  return (
    <MainContainer>
      <MainContent >
        <ContentImage>
          <Img />
          <ContentImgageText>
            <h2>Welcome Page</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus nobis repudiandae odio sequi voluptates enim omnis.
            </p>
            <div className="social-media">
                <div className="line"></div>
                <p>GET CONNECTED WITH</p>
                <div className="line"></div>
            </div>
            <div className="logos">
              <img src={FacebookLogo}></img>
              <img src={TwitterLogo}></img>
              <img src={YouTubeLogo}></img>
              </div>
          </ContentImgageText>
        </ContentImage>
        <ContentForm>
          <ContainerLinks>
            <LinkForm isSignIn={isLogin}  onClick={() => setLogin(true)}>Sign In</LinkForm>
            <LinkForm isSignIn={isLogin} onClick={() => setLogin(false)}>Sign Up</LinkForm>
          </ContainerLinks>
          <LoginRegisterText isSignIn={isLogin} id="register">Register</LoginRegisterText>
          <LoginRegisterText isSignIn={isLogin} id="login">Login</LoginRegisterText>
          <Form onSubmit={handleSubmit} >
            <LabelInput inputName={nameEmpty} isSignIn={isLogin} id="label-input-name" className="error-input-name">Full Name</LabelInput>
            <ContainerInput isSignIn={isLogin} id="input-name">
              <Input type="text" placeholder="Enter Your Full Name" name="name" onChange={handleChange} />
              <InputBorder className="input-border">
                <InputBorderContent className="input-border-content" />
            </InputBorder>
            </ContainerInput>
            <LabelInput inputEmail={emailEmpty} className="error-input-email" id="label-email">Email</LabelInput>
            <ContainerInput>
              <Input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} />
              <InputBorder className="input-border">
                <InputBorderContent className="input-border-content" />
            </InputBorder>
            </ContainerInput>
            <LabelInput inputPassword={passwordEmpty} className="error-input-password" id="label-password">Password</LabelInput>
            <ContainerInput>
              <Input type="password" placeholder="......" name="password" onChange={handleChange} />
              <InputBorder className="input-border">
                <InputBorderContent className="input-border-content" />
            </InputBorder>
            </ContainerInput>
            <ContainerInput className="check">
              <Input type="checkbox" className="check" />
              <Text>
                I agree All ther Statements in <br />{' '}
                <Text className="service">Terms of service</Text>
              </Text>
            </ContainerInput>
            <ButtonForm type="submit">SignUp</ButtonForm>
          </Form>
        </ContentForm>
      </MainContent>
    </MainContainer>
  )
}

export default FormSignUpLogin;
