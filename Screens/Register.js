import { StyleSheet,ImageBackground, Text,TextInput, View,Image,ScrollView,TouchableOpacity,Alert,Pressable } from 'react-native'
import React,{useState} from 'react'
import { Checkbox } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'

const Register = () => {
    const [checked, setChecked] = useState(false);
    const [visible,SetVisible] = useState(true)
    const [text,SetText] = useState(true)
     const[visibleconfirm,SetVisibleConfirm]=useState(true)
    // const check =()=>{ 
    //         if(SetText === false)
    //         {
    //             return null
    //         }else{
    //             return(   <TouchableOpacity onPress={()=>{SetVisible(!visible)}} style={{flexDirection:"row",marginTop:8}} >
    //             <Icon name ={visible ? "eye-slash" : "eye" }size={25}/>
    //             </TouchableOpacity>)
    //         } 
    // }
  return (
      <ScrollView>
    <View style={{flex:1}}>
    <ImageBackground source={require('../src/Images/bg.png')} resizeMode="stretch" style={{ flex:2,resizeMode:"cover", opacity: 0.9, 
    }}>
      <Image style={{marginTop:5,marginTop:15,height:130,width:140,resizeMode:"contain",alignSelf:"center"}}source={require("../src/Images/ugavi_logo.png")}/>
  <View style={{marginLeft:10,width:"90%",borderBottomWidth:0.5,borderBottomColor:"maroon"}}>
  <TextInput 
      placeholder='Name'
      style={{}}/>
  </View>
  <View style={{marginTop:5,marginLeft:10,width:"90%",borderBottomWidth:0.5,borderBottomColor:"maroon"}}>
  <TextInput 
      placeholder='Email'
      autoCapitalize = "none"
      style={{}}/>
  </View>
  <View style={{marginTop:5,marginLeft:10,width:"90%",borderBottomWidth:0.5,borderBottomColor:"maroon",flexDirection:"row",justifyContent:"space-between"}}>
  
      <TextInput 
      placeholder='Password'
    
      secureTextEntry={visible}
      text={text}
      onChangeText={(text)=>{SetText(text)}}
      />
      <TouchableOpacity onPress={()=>{SetVisible(!visible)}} style={{flexDirection:"row",marginTop:8}} >
     <Icon name ={visible ? "eye-slash" : "eye" }size={25}/>
     </TouchableOpacity>
   
    
  </View>
  <View style={{marginTop:5,marginHorizontal:10,width:"83%",borderBottomWidth:0.5,borderBottomColor:"maroon",flexDirection:"row",justifyContent:"space-between"}}>
  <TextInput 
      placeholder='Confirm Password'
      secureTextEntry={visibleconfirm}
      style={{}}/>
       <TouchableOpacity onPress={()=>{SetVisibleConfirm(!visibleconfirm)}} style={{flexDirection:"row",marginTop:8}} > 
     <Icon name ={visibleconfirm ? "eye-slash" : "eye" }size={25} style={{position:"absolute"}}/>
    
      </TouchableOpacity>
  </View>
  <View style={{marginTop:5,marginLeft:10,width:"90%",borderBottomWidth:0.5,borderBottomColor:"maroon"}}>
  <TextInput 
      placeholder='Mobile'
      keyboardType= "phone-pad"
      style={{}}/>
      
  </View>
  <View style={{marginTop:5,marginLeft:10,width:"90%",borderBottomWidth:0.5,borderBottomColor:"maroon"}}>
  <TextInput 
      placeholder='Address'
      style={{}}/>
  </View>
      <View style={{marginLeft:5,marginTop:15,flexDirection:"row",justifyContent:"flex-start"}}>
      <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color = "black"
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{marginTop:8,marginBottom:5,fontSize:14,marginLeft:8}}>I Agree Terms & Conditions</Text>
      </View >
     <View style={{marginTop:15,justifyContent:"center",alignSelf:"center",height:50,width:"90%",marginBottom:50}} >
     
      <LinearGradient 
             start= {{x:0,y:0}}
              end= {{x:1,y:1}}
              colors={['#e13b5a', '#96177f']}
              style={{width: '95%', height: "100%", margin: 5, borderTopLeftRadius: 18,borderBottomRightRadius:18,borderRadius:5,alignSelf:"center",elevation:30,justifyContent:"center"}}>
      <TouchableOpacity onPress={()=>Alert.alert("Button Pressed")}>
          <Text style={{alignSelf:"center",color:"white",fontSize:16}}> Register </Text>
          </TouchableOpacity>
      </LinearGradient>
    
      </View>
      </ImageBackground>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({})
export default Register

