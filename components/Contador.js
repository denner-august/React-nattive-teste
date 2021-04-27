import React, {useState} from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from "react-native"

export default props  =>{
    const [num, setNum] = useState(props.numeroInicial)

    function inc() {
        setNum(num + 1)
    }

    function diminuir(){
        if(num ==  0){
            setNum(0)
        }else{
           setNum( num - 1)
        }
    }

    function reset(){
        setNum(0)
    }
    
    
    return (
        <View style={styles.view}>   
        <Text style={styles.texto}>Contador React-native </Text>
        <Text style={styles.cont}>{num}</Text>
        
         <TouchableOpacity style={styles.text} onPress={inc}  >
             <Text>Aumentar</Text>
        </TouchableOpacity>   

        <br/>
    
        <TouchableOpacity style={styles.text} onPress={diminuir} >
        <Text>Diminur</Text>
        </TouchableOpacity>
        <br/>

        <TouchableOpacity style={styles.text} onPress={reset} >
        <Text>Resetar</Text>
        </TouchableOpacity>
        <br/>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
    },
    texto:{
        fontSize:30,
        color:'white'
    },
    cont:{
        fontSize:100,
    },

    text: {
        justifyContent:'center',
        width:200,
        borderRadius:'10',
        backgroundColor:"white",
        textAlign:'center',
        height: 60,
     }
})