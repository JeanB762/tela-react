import React from 'react';
import { StyledView, StyledText, ButtonCustom, InputCustom } from '../style';

const LoginPage = ({ navigation }) => (
  <StyledView>
    <StyledText marginTop={`50px`} fontSize={`35px`}>Faça Login Para Continuar:</StyledText>
    <InputCustom placeholder={"Usuário:"} />
    <InputCustom placeholder={"Senha:"} />
    <ButtonCustom onPress={() => navigation.navigate('Home') }><StyledText margiTop={`0px`} fontSize={`26px`}>Login</StyledText></ButtonCustom>
  </StyledView>
);

LoginPage.navigationOptions = {
  title: 'Login',
}


export default LoginPage;