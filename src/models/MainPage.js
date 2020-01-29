import React from 'react';
import { StyledView, StyledText, ButtonCustom } from '../style';

const MainPage = ({ navigation }) => (
  <StyledView>
    <StyledText marginTop={`50px`} fontSize={`35px`}>Bem Vindo!</StyledText>
    <ButtonCustom onPress={() => navigation.navigate('Login') }><StyledText margiTop={`0px`} fontSize={`26px`}>Login</StyledText></ButtonCustom>
    <ButtonCustom onPress={() => navigation.navigate('Home') }><StyledText margiTop={`0px`} fontSize={`26px`}>Home</StyledText></ButtonCustom>
  </StyledView>
);

MainPage.navigationOptions = {
  title: 'Main',
}

export default MainPage;
