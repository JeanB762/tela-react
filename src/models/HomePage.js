import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyledView, StyledText, ButtonCustom } from '../style';

const HomePage = ({ navigation }) => (
  <StyledView>
    <StyledText marginTop={`50px`} fontSize={`35px`}>Hello World</StyledText>
    <ButtonCustom onPress={() => navigation.navigate('Main') }><StyledText margiTop={`0px`} fontSize={`26px`}>Main</StyledText></ButtonCustom>
    <ButtonCustom onPress={() => navigation.navigate('Login') }><StyledText margiTop={`0px`} fontSize={`26px`}>Login</StyledText></ButtonCustom>
  </StyledView>
);

HomePage.navigationOptions = {
  tabBarIcon: <Icon name="home" size={18} color="#999" />

}

export default HomePage;