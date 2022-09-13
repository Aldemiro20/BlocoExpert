import React, {useState, useEffect,useLayoutEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigation,useRoute} from "@react-navigation/native";
import {Container,Texto,Botao,TitleInput, BodyInput,SaveButton,
    SaveButtonImage,CloseButton,CloseButtonImage,DeleteButton,DeleteButtonText

} from "./styles";
import { State } from "react-native-gesture-handler";

export default () =>{
   
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const route = useRoute();
    const list=useSelector(state=>state.notes.list);
    const [status,setStatus] = useState("new");

    useEffect(()=>{
        if(route.params?.key != undefined && list[route.params.key]){
            setStatus("Edit");
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body)
        }

    },[])

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:status=="new"? "Nova Anotação":"Editar Anotação",
            headerLeft: ()=>(
                <CloseButton underlayColor="transparent" onPress={handleClose}>
                    <CloseButtonImage source={require("../../assets/close.png")} />
                </CloseButton>
            ),
            headerRight: ()=>(
                <SaveButton underlayColor="transparent" onPress={handleSave}>
                    <SaveButtonImage source={require("../../assets/save.png")}/>
                </SaveButton>
            )
        })

    },[status,title,body])

const handleSave =()=>{
if(title!="" && body !=""){
    if(status=="Edit"){
        dispatch({
            type: "EDIT_NOTE",
            payload: {
                key:route.params.key,
                    title,
                    body
            }
        });
    }
    else{
        dispatch({
            type:"ADD_NOTE",
            payload:{title,body}
        });
    }
    navigation.goBack();
}else{
    alert("Preencha titulo e o corpo")
}

    }

    const handleClose = ()=>{
        navigation.goBack();
    }
    const handleDelete= ()=>{
            dispatch({
                type:"DEL_NOTE",
                payload:{
                    key:route.params.key
                }
            })
            navigation.goBack();
    }

    return(
        <Container>
           <TitleInput 
           placeholder="Digite o titulo da Anotação"
           placeholderTextColor="#ccc"
           value={title} 
           onChangeText={t=>setTitle(t)}
           />
           <BodyInput 
            placeholder="Digite o corpo da Anotação"
            placeholderTextColor="#ccc"
            multiline={true}
            textAlignVertical="top"
            autoFocus={true}
            value={body} 
            onChangeText={t=>setBody(t)}
            />
            {status=="Edit" &&
            <DeleteButton onPress={handleDelete} underlayColor="#ff0000">
                <DeleteButtonText>Excluir Anotacao</DeleteButtonText>
            </DeleteButton>

            }
           
        </Container>
    )
}