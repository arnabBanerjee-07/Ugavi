import { StyleSheet,ImageBackground, Text, View,Image,TextInput,Alert,TouchableOpacity,ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const ResetPassword = () => {
  return (
      <ScrollView>
    <View style={{flex:1,}}>
    <ImageBackground source={require('../src/Images/bg.png')} resizeMode="stretch" style={{ flex:2,resizeMode:"cover", 
         opacity: 0.9, overlay: {
        
        opacity: 0.
    },}}>
      <Image style={{resizeMode:"contain",marginTop:20,marginRight:5,alignSelf:"center",height:140,width:140}} source={require("../src/Images/ugavi_logo.png")}/>
    <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={{padding:5,fontSize:18,color:"black"}}>Reset Password</Text>
            <Text style={{shadowOpacity:0.2,opacity:0.6,textAlign:"center",fontSize:16,marginHorizontal:30,alignSelf:"center"}}> Enter your email address below to reset your password </Text>
       </View>
    <View style={{marginVertical:35,marginLeft:15,borderBottomWidth:0.5,borderBottomColor:"maroon",width:"90%",flexDirection:"row",justifyContent:"space-between"}}>
            <TextInput 
            placeholder ='Email Address'
            keyboardType ="email-address"
            autoCapitalize = "none"/>
            <Icon name= "email" size={25} style={{marginTop:10,opacity:0.5}}/>
    </View>
    <View style={{marginTop:15,justifyContent:"center",alignSelf:"center",width:"90%",height:52,marginBottom:200}} >
     
      <LinearGradient 
             start= {{x:0,y:0}}
              end= {{x:1,y:1}}
              colors={['#e13b5a', '#96177f']}
              style={{width: '100%', height: "100%", margin: 5, borderTopLeftRadius: 18,borderBottomRightRadius:18,alignSelf:"center",justifyContent:"center"}}>
      <TouchableOpacity onPress={()=>Alert.alert("Button Pressed")}>
          <Text style={{alignSelf:"center",color:"white",fontSize:16}}> Reset Password </Text>
          </TouchableOpacity>
      </LinearGradient>
    
      </View>
      </ImageBackground>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({})
export default ResetPassword;

