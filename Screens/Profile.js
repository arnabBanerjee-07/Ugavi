import { View, Text, Pressable, ScrollView, TouchableOpacity,Alert,Image,TextInput  } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import React,{ useState }  from 'react';
import ImagePicker from 'react-native-image-crop-picker'; 
import LinearGradient from 'react-native-linear-gradient';
const Profile = () => {
    const [cimage,setCimage] = useState('');
    const [gimage,setGimage] = useState('');

    const Choose = () => {
        Alert.alert(
          'Choose',
          //body
          'Choose Images From',
          [
            {text: 'Camera', onPress: () => CameraPicker()},
            {text: 'Gallery', onPress: () => GalleryPicker()},
            {text: 'Cancel', onPress: () => null},
          ],
          {cancelable: true},
          //clicking out side of alert will not cancel
        );
      };

      const CameraPicker=()=>{
        ImagePicker.openCamera({
            width: 150,
            height: 150,
            borderRadius: 85,
            cropping: true,
          }).then(image => {
            console.log(image);
            setCimage(image.path);
          });
      }

      const GalleryPicker=()=>{
          ImagePicker.openPicker({
              widtg:150,
              height:150,
              borderRadius:85,
              cropping: true,
          }).then(image=>{
              console.log(image);
              setGimage(image.path)
          })
      }

      let fileuri=()=>{
        if(cimage){
            return(
            <Image style={{height:120,width:120,shadowOpacity:0.9,borderTopLeftRadius:30,borderBottomRightRadius:30,resizeMode:"contain"}}
            source={{uri: cimage}}/>
            )
        }else if(gimage){
            return(
            <Image style={{height:120,width:120,shadowOpacity:0.9,borderTopLeftRadius:30,borderBottomRightRadius:30,resizeMode:"contain"}}
            source={{uri: gimage}}/>
            )
        }else{
            return(
           <TouchableOpacity onPress={()=>{Choose()}}>
      <Icon name='user' size={38} color="#bdb5b5"/>
      <Icon name='plus' size={25} color="#E33773" style={{alignSelf:"center",opacity:0.9}}/></TouchableOpacity >
      
            )
        }
      }

  return (
    <View syle={{backgroundColor:"black",flex:1}}>
        <Pressable  style ={{borderTopStartRadius:30,borderBottomEndRadius:30,elevation:50,backgroundColor:"#f5f9fa",alignSelf:"center",justifyContent:"center",alignItems:"center",height:130,width:130,marginTop:20,shadowColor:"#e0b6be"}}onPress={()=>{Choose()}}>
          
        <View style={{borderTopStartRadius:30,borderBottomEndRadius:30,elevation:50,backgroundColor:"#f5f9fa",alignSelf:"center",justifyContent:"center",alignItems:"center",borderWidth:0.3,height:120,width:120,shadowOpacity:0.9,marginTop:20,borderColor:"black",borderStyle:'dashed',borderWidth:0.4,position:"absolute"}}>
          <Pressable>
            {fileuri()}
            </Pressable>
    </View>
    
    </Pressable>
    <ScrollView>
    <View style={{marginTop:7,marginLeft:15,width:"90%",borderBottomWidth:0.5,borderBottomColor:"maroon"}}>
  <TextInput 
      placeholder='Name'
      style={{}}/>
  </View>
    <View style={{marginTop:2,marginLeft:15,borderBottomWidth:0.5,borderBottomColor:"maroon",width:"90%"}}>
            <TextInput 
            placeholder ='Email Address'
            keyboardType ="email-address"
            autoCapitalize = "none"/>
    </View>
    <View style={{marginTop:2,marginLeft:15,width:"90%",borderBottomWidth:0.5,borderBottomColor:"maroon"}}>
  <TextInput 
      placeholder='Mobile'
      keyboardType= "phone-pad"
      style={{}}/>
 
  </View>
  <View style={{marginTop:2,marginLeft:15,width:"90%",borderBottomWidth:0.5,borderBottomColor:"maroon"}}>
  <TextInput 
      placeholder='Address'
      style={{}}/>
  </View>
  <View style={{marginTop:35,elevation:24,justifyContent:"center",alignSelf:"center",width:"80%",height:50}} >
     
     <LinearGradient 
            start= {{x:0,y:0}}
             end= {{x:1,y:1}}
             colors={['#e13b5a', '#96177f']}
             style={{width: '100%', height: "100%", margin: 5,elevation:10, borderTopLeftRadius: 18,borderBottomRightRadius:18,alignSelf:"center",justifyContent:"center"}}>
     <TouchableOpacity onPress={()=>Alert.alert("Button Pressed")}>
         <Text style={{alignSelf:"center",color:"white",fontSize:16}}> Save </Text>
         </TouchableOpacity>
     </LinearGradient>
     </View>
     <View>
            <TouchableOpacity style={{marginTop:10}}>
                <Text style={{alignSelf:"center",fontSize:14,fontWeight:"bold",color: 'grey'}}>Change Password?</Text>
            </TouchableOpacity>
     </View>
     
    </ScrollView>
    </View>
  )
}

export default Profile