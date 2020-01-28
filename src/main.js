import React from 'react';
import { StyledView, StyledText, InputCustom, ButtonCustom } from './style';


export default function Main() {
  return (
    <StyledView>
        <StyledText marginTop={`100px`}>Bem Vindo!</StyledText>
        <StyledText fontSize={`16px`}>Faça login para continuar</StyledText>
        <InputCustom defaultValue="Usuário"/>
        <InputCustom defaultValue="Senha"/>
        <ButtonCustom><StyledText fontSize={`26px`} marginTop={`0px`}>LOGIN</StyledText></ButtonCustom>
        <StyledText fontSize={`16px`} marginTop={`15px`}>Esqueci minha senha</StyledText>
        <StyledText fontSize={`16px`} marginTop={`100px`}>Inscrever-se</StyledText>
    </StyledView>
  );
}
