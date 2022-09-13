import styled from "styled-components/native";

export const Container = styled.View `
flex:1;
backgroundColor:#333;

`;

export const Texto = styled.Text ``;

export const TitleInput=styled.TextInput`
fontSize:20px;
fontWeight:bold;
padding:15px;
color:#fff;

`;
export const BodyInput=styled.TextInput`
flex:1;
padding: 15px;
fontSize:15px;
color:#fff;

`;

export const SaveButton= styled.TouchableHighlight`
marginRight:15px;
`;
export const SaveButtonImage=styled.Image`
width:24px;
height:24px;
`;

export const CloseButton = styled.TouchableHighlight `
marginLeft:15px;
`;
export const CloseButtonImage = styled.Image `
width:21px;
height:21px;
`;

export const DeleteButton = styled.TouchableHighlight`
height:40px;
backgroundColor:#ff3333;
justifyContent: center;
alignItems:center
`;
export const DeleteButtonText=styled.Text`
fontSize:14px;
color:#fff;
`;