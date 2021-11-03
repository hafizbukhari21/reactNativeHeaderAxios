import axios from 'axios'
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


const getData = axios.create({
  baseURL:"http://sheltered-reaches-95604.herokuapp.com/api",
  headers:{
    'APIKEY':'Token_Key1234'
  }
})
export default function App(){
  const [data, setdata] = useState()
  const [input, setInput] = useState(25)
  useEffect(()=>{
    getData.get(`/header/showData/${input}`).then(res=>{
      setdata(res.data)
      console.log(res)
    })
  },[data, input])


  
  return(
    <>

      <View
        style={{flex:1, justifyContent:"center", alignItems:"center"}}
      >
        {
          data ? 
          <>
              <Text style ={{fontSize:40, textAlign:"center"}}>{data.id}</Text>
              <Text style ={{fontSize:45, textAlign:"center"}}>{data.name}</Text>
              <Text style ={{fontSize:45, textAlign:"center"}}>{data.email}</Text>
          </>:
          <>
              <Text style ={{fontSize:50}}>Loading...</Text>
          </>
        }

        <TextInput
          style={{fontSize:30, borderBottomColor:"black", borderWidth:2}}
          placeholder="Masukan ID"
          onChangeText= {data=>setInput(data)}
        />
      </View>
    </>
  )
}