import styled from 'styled-components/native'

export const StyledView = styled.ScrollView`
  background-color: #235680;
  flex: 1;
`;

export const StyledText = styled.Text`
    margin-top: ${props => props.marginTop || "50px"};;    
    color: #fff;
    font-size:  ${props => props.fontSize || "35px"};
    text-align: center;
`;

export const InputCustom = styled.TextInput`
  color: #353535;
  background: #fff;
  border: none;
  border-radius: 35px;
  width: 90%;
  height: 50px;
  align-self: center;
  margin-top: 15px;
  padding: 10px;
`;

export const ButtonCustom = styled.TouchableOpacity`
  
    background: #353535;
    border: none;
    border-radius: 35px;
    width: 80%;
    height: 50px;
    align-self: center;
    margin-top: 30px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

