import styled from 'styled-components';
import BackgroundImage from '../../assets/images/background2-blur.png';
import LoginImage from '../../assets/images/form-image.png';
import { propsFormLoginSignUp } from ".";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* padding: 10px 0; */
`
export const MainContent = styled.div`
    width: 300px;
    height: auto;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.7);
    display: flex;

    padding: 0 10px 10px 10px;

    @media(min-width: 768px) {
        width: 600px;
        flex-direction: row;
        padding: 0 10px 0 0;
    }
`

export const ContentImage = styled.div`
    width: 100%;
    /* height: 200px; */
    height: auto;
    
    
    justify-content: center;
    align-items: center;
    display: none;
    padding: 10px;

    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        overflow: hidden;
        background-color: #085177;
    }
`

export const ContentImgageText = styled.div`

    width: 100%;
    height: 100%;
    background-color: transparent;
    color: #ccc;
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h2 {
        margin-bottom: 30px;
        color: #fff;
    }

    p {
        font-size: 12px;
        text-align: center;
    }

    .social-media {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0 20px 0;
    }

    .social-media p {
        padding: 0 20px;
        font-size: 10px;
    }

    .line {
        width: 30px;
        height: 1px;
        background-color: #fff;
    }

    .logos {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
    }

    img {
        width: 15%;
        cursor: pointer;
    }

`

export const Img = styled.div`
    width: 100%;
    height: 50%;
    background-image: url(${LoginImage});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
`

export const ContentForm = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    font-family: "Roboto";
    margin: 0 auto;
    
    @media (min-width: 768px) {
        padding-bottom: 10px;
    }
`

export const ContainerLinks = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`

export const LinkForm = styled.div`
    padding: 10px 20px;
    font-family: "Roboto";
    font-size: 16px;
    
    color: #000;
    transition: 0.3s all ease;
    cursor: pointer;

    :nth-child(1) {
        background-color: ${(props: propsFormLoginSignUp) => props.isSignIn? "#3F92A7" : "#fff"};
        color: ${(props: propsFormLoginSignUp) => props.isSignIn? "#fff" : "#000"};
    }

    :nth-child(2) {
        background-color: ${(props: propsFormLoginSignUp) => props.isSignIn? "#fff" : "#3F92A7"};
        color: ${(props: propsFormLoginSignUp) => props.isSignIn? "#000" : "#fff"};
    }    

    :hover {
        background-color: #12445E;
        transition: 0.3s all ease;
    }
`

export const LoginRegisterText = styled.h1`
    margin: 30px 0;

    &#register {
        animation: ${(props: propsFormLoginSignUp) => props.isSignIn? "hidden-text 0.5s forwards" : "show-text 0.5s forwards"};
    }

    &#login{
        margin-top: -68px;
        animation: ${(props: propsFormLoginSignUp) => props.isSignIn? "show-text2 0.5s forwards" : "hidden-text2 0.5s forwards"};
    }

    @keyframes show-text {
        from { margin-left: -20px; display: none; opacity: 0; }
        50% { display: none; opacity: 0;}
        to { display: block; opacity: 1; position: relative; }
    }

    @keyframes show-text2 {
        from { margin-left: -20px; display: none; opacity: 0; padding-top: 80px; margin-bottom: -40px; }
        50% { display: none; opacity: 0;}
        to { display: block; opacity: 1; position: relative; padding-top: 80px; margin-bottom: -40px; }
    }

    @keyframes hidden-text {
        from { display: block; z-index: 1; }
        50% { margin-left: -20px; position: relative; opacity: 0; }
        to { display: none; z-index: -1; position: relative; opacity: 0; } 
    }

    @keyframes hidden-text2 {
        from { display: block; z-index: 1;  padding-top: 80px; margin-bottom: -40px; }
        50% { margin-left: -20px; position: relative; opacity: 0; }
        to { display: none; z-index: -1; position: relative; opacity: 0;  padding-top: 80px; margin-bottom: -40px; } 
    }
`
export const Form = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

export const ContentItemForm = styled.div`
    width: 100%;
    height: auto;
    animation: ${(props: propsFormLoginSignUp) => props.isSignIn? "hidden-text 0.5s forwards;" : "show-text 0.5s forwards;"};

    @keyframes show-text {
        from { margin-left: -80px; display: none; opacity: 0;}
        50% { display: none; opacity: 0;}
        to { display: block; opacity: 1; position: relative }
    }

    @keyframes hidden-text {
        from { display: block; z-index: 1;}
        50% { margin-left: -80px; position: relative; opacity: 0; }
        to { display: none; z-index: -1; position: relative; opacity: 0; } 
    }
`

export const LabelInput = styled.label`
    width: auto;
    text-transform: uppercase;
    color: #888;
    font-size: 12px;
    font-weight: bold;

    &.error-input-name {
        color: ${(props: propsFormLoginSignUp) => props.inputName? "" : "#f00" };
    }

    &.error-input-email {
        color: ${(props: propsFormLoginSignUp) => props.inputEmail? "" : "#f00" };

    }

    &.error-input-password {
        color: ${(props: propsFormLoginSignUp) => props.inputPassword? "" : "#f00" };
    }

    &.shake {
        animation: shake-label 0.35s forwards;
    }

    @keyframes shake-label {
        from { margin-left: 5px;}
        25% { margin-left: 0px; }
        50% { margin-left: 5px; }
        to { margin-left: 0px; }
    }
`

export const ContainerInput = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.check {
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    &#input-name {
        animation: ${(props: propsFormLoginSignUp) => props.isSignIn? "hidden-text 0.5s forwards;" : "show-text 0.5s forwards;"};
    }

    @keyframes show-text {
        from { margin-left: -15px; display: none; opacity: 0;}
        50% { display: none; opacity: 0;}
        to { display: block; opacity: 1; position: relative }
    }

    @keyframes hidden-text {
        from { display: block; z-index: 1;}
        50% { margin-left: -15px; position: relative; opacity: 0; }
        to { display: block; z-index: -1; position: relative; opacity: 0; } 
    }
    
`

export const Input = styled.input`
    width: 100%;
    height: 25px;
    border: none;
    outline-width: 0;
    font-style: italic;
    font-size: 12px;
    color: #aaa;


    &.check {
        width: 17px !important;
        height: 17px !important;
        margin-right: 8px;
        accent-color: #3F92A7;
    }


    ::placeholder {
        color: #ccc;
        transition: 0.3s all ease;
    }

    :focus {
        outline-width: 0;
        color: #888;

        ::placeholder {
            scale: 0;
            transition: 0.3s all ease;
        }
    }
    
    :focus + .input-border .input-border-content {
        width: 100%;
        height: 2px;
        background-color: #3F92A7;
        transition: 0.3s all ease;
    }
`

export const InputBorder = styled.div`
    width: 100%;
    height: 2px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputBorderContent = styled.div`
    width: 0;
    height: 2px;
    transition: 1s all ease;
`

export const Text = styled.span`
    width: 100%;
    color: ${(props: propsFormLoginSignUp) => props.inputTerms? "#888" : "#f00"};
    font-size: 10px;

    &.service {
        color: ${(props: propsFormLoginSignUp) => props.inputTerms? "#3F92A7" : "#f00"};
        font-weight: bold;
    }
`
export const ButtonForm = styled.button`
    width: 100%;
    height: 30px;
    font-weight: bold;
    color: #fff;
    background-color: #3F92A7;
    outline-width: 0;
    border:none;
    transition: 0.3s all ease;
    cursor: pointer;

    :hover {
        background-color: #12445E;
    }
`