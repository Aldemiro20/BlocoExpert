import React,{useLayoutEffect} from "react";
import {Container,Texto,Botao, AddButton, 
AddButtonImage,NotesList,NoNotes,NoNotesImage,NoNotesText
} from "./styles";

import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import NoteItem from "../../components/NoteItem";


export default () =>{
   
    const navigation= useNavigation();
    const list=useSelector(state=>state.notes.list);
  

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Minhas Anotações",
            headerRight:()=>(
             <AddButton underlayColor="transparent" onPress={()=>{navigation.navigate("EditNote")}}>
                 <AddButtonImage source={require("../../assets/more.png")} />

             </AddButton>       
            )
        })

    },[])
    const handleNotePress = (index) =>{
        navigation.navigate("EditNote",{
           key:index 
        })
    }
    return(
        <Container>
            { list.length > 0 &&
            <NotesList
            data={list}
            renderItem={({item, index})=>(
                <NoteItem 
                data={item}
                index={index}
                onPress={handleNotePress}
                />
            )}
            keyExtractor={(item,index)=>index.toString()}
            />
            }

            { list.length == 0 &&

            <NoNotes>
              <NoNotesImage source={require("../../assets/note.png")}/>
                <NoNotesText>Nenhuma anotação</NoNotesText>
            </NoNotes>

            }

           
        </Container>
    );
}