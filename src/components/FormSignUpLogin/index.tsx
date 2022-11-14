import React, { useEffect } from 'react';
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
  ContentItemForm,
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
  inputTerms?: boolean;
}

type FormData = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

const FormSignUpLogin = (props: propsFormLoginSignUp) => {
  const [submit, setSubmit] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [nameEmpty, setNameEmpty] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [passwordEmpty, setPasswordEmpty] = useState(true);
  const [termsSelect, setTermsSelect] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    terms: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(termsSelect);
    const dataFormName = event.target.name;
    const dataFormValue = event.target.value;

    if (dataFormName !== "terms")
      setFormData({ ...formData, [dataFormName]: dataFormValue });
    
    if (dataFormName === "terms"){
      setFormData({ ...formData, [dataFormName]: event.target.checked });
    }
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');

    formData.name ? setNameEmpty(true) : setNameEmpty(false);
    formData.email ? setEmailEmpty(true) : setEmailEmpty(false);
    formData.password ? setPasswordEmpty(true) : setPasswordEmpty(false);
    formData.terms ? setTermsSelect(true) : setTermsSelect(false);
    
    if (!nameEmpty) {
      applyShakeError('name');
    }

    if (!emailEmpty) {
      applyShakeError('email');
    }

    if (!passwordEmpty) {
      applyShakeError('password');
    }
    
  }

  useEffect(() => {
    if (!nameEmpty) {
      applyShakeError('name');
    }

    if (!emailEmpty) {
      applyShakeError('email');
    }

    if (!passwordEmpty) {
      applyShakeError('password');
    }

  }, [nameEmpty, emailEmpty, passwordEmpty]);

  const applyShakeError = (field: string) => {
    document.querySelector(`.error-input-${field}`)?.classList.add('shake');
    setTimeout(() => {
      document.querySelector(`.error-input-${field}`)?.classList.remove('shake');
    }, 500)
  };

  return (
    <MainContainer>
      <MainContent>
        <ContentImage>
          <Img />
          <ContentImgageText>
            <h2>Welcome Page</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate ducimus nobis repudiandae odio sequi voluptates enim
              omnis.
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
            <LinkForm isSignIn={isLogin} onClick={() => setLogin(true)}>
              Sign In
            </LinkForm>
            <LinkForm isSignIn={isLogin} onClick={() => setLogin(false)}>
              Sign Up
            </LinkForm>
          </ContainerLinks>
          <LoginRegisterText isSignIn={isLogin} id="register">
            Register
          </LoginRegisterText>
          <LoginRegisterText isSignIn={isLogin} id="login">
            Login
          </LoginRegisterText>
          <Form onSubmit={handleSubmit}>
            <ContentItemForm isSignIn={isLogin}>
              <LabelInput
                inputName={nameEmpty}
                isSignIn={isLogin}
                id="label-input-name"
                className="error-input-name"
              >
                Full Name
              </LabelInput>
              <ContainerInput isSignIn={isLogin} id="input-name">
                <Input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                  onChange={handleChange}
                />
                <InputBorder className="input-border">
                  <InputBorderContent className="input-border-content" />
                </InputBorder>
              </ContainerInput>
            </ContentItemForm>
            <LabelInput
              inputEmail={emailEmpty}
              className="error-input-email"
              id="label-email"
            >
              Email
            </LabelInput>
            <ContainerInput>
              <Input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={handleChange}
              />
              <InputBorder className="input-border">
                <InputBorderContent className="input-border-content" />
              </InputBorder>
            </ContainerInput>
            <LabelInput
              inputPassword={passwordEmpty}
              className="error-input-password"
              id="label-password"
            >
              Password
            </LabelInput>
            <ContainerInput>
              <Input
                type="password"
                placeholder="......"
                name="password"
                onChange={handleChange}
              />
              <InputBorder className="input-border">
                <InputBorderContent className="input-border-content" />
              </InputBorder>
            </ContainerInput>
            <ContainerInput className="check error-input-terms">
              <Input id="terms" type="checkbox" className="check" onChange={handleChange} name="terms" />
              <Text inputTerms={termsSelect}>
                I agree All ther Statements in <br />
                <Text inputTerms={termsSelect} className="service">Terms of service</Text>
              </Text>
            </ContainerInput>
            <ButtonForm type="submit" onClick={submit ? () => {setSubmit(false)} : () => {setSubmit(true)}}>SignUp</ButtonForm>
          </Form>
        </ContentForm>
      </MainContent>
    </MainContainer>
  )
}

export default FormSignUpLogin;
