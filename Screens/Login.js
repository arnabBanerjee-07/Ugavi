import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Login = ({navigation}) => {
  const [text, SetText] = useState('');
  const [visible, setVisible] = useState(true);
  return (
    <ScrollView>
      <View style={{flex: 1}}>
      <ImageBackground source={require('../src/Images/bg.png')} resizeMode="stretch" style={{ flex:2,resizeMode:"cover", 
         opacity: 0.9, overlay: {
        
        opacity: 0.
    },}}>
        <Image
          style={{
            resizeMode: 'contain',
            marginTop: 20,
            marginRight: 5,
            alignSelf: 'center',
            height: 130,
            width: 140,
          }}
          source={require('../src/Images/ugavi_logo.png')}
        />
        <View
          style={{
            marginLeft: 15,
            width: '90%',
            borderBottomWidth: 0.2,
            opacity: 0.7,
            borderBottomColor: 'maroon',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput style= {{marginLeft:5}} placeholder="Email" autoCapitalize="none" />
          <Icon name="email" size={25} style={{marginTop: 11}} />
        </View>
        <View
          style={{
            marginTop: 5,
            marginLeft: 15,
            width: '90%',
            borderBottomWidth: 0.2,
            opacity: 0.7,
            borderBottomColor: 'maroon',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Password"
            secureTextEntry={visible}
            style= {{marginLeft:5}}
            text={text}
            onChangeText={text => {
              SetText(text)
              
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}
            style={{flexDirection: 'row', marginTop: 10}}>
            <Icon name={visible ? 'eye-off' : 'eye'} size={25} color={!visible ? "black" : null} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{marginTop: 8, marginBottom: 10}} onPress={()=>navigation.navigate("ResetPassword")}>
          <Text
            style={{
              alignSelf: 'center',
              opacity: 0.5,
              fontSize: 14,
              fontWeight: 'bold',
              marginTop:8
            }}>
            {' '}
            Forget Password ?
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 25,
            justifyContent: 'center',
            alignSelf: 'center',
            height: 52,
            width: '85%',
            marginBottom: 10,
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#e13b5a', '#96177f']}
            style={{
              width: '100%',
              height: '100%',
              margin: 5,
              borderTopLeftRadius: 18,
              borderBottomRightRadius: 18,
              borderRadius: 5,
              alignSelf: 'center',
              justifyContent: 'center',
              shadowOffset: 15,
              shadowColor: 'black',
              shadowOpacity: 0.5,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Text style={{alignSelf: 'center', color: 'white', fontSize: 16}}>
                {' '}
                Login{' '}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text
            style={{
              marginTop: 8,
              fontSize: 15,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Or
          </Text>
        </View>
        <View
          style={{
            marginTop: 19,
            justifyContent: 'center',
            alignSelf: 'center',
            height: 52,
            width: '85%',
            marginBottom: 20,
            elevation: 10,
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#3C70CE', '#4AA9E7']}
            style={{
              width: '100%',
              height: '100%',
              margin: 5,
              borderTopLeftRadius: 18,
              borderBottomRightRadius: 18,
              borderRadius: 5,
              alignSelf: 'center',
              justifyContent: 'center',
              
              shadowColor: 'black',
              shadowOpacity: 0.5,
            }}>
            <Icon
              name="facebook"
              size={30}
              color="white"
              style={{marginLeft: 15, position: 'absolute'}}
            />

            <TouchableOpacity
              style={{}}
              onPress={() => Alert.alert('Button Pressed')}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  fontSize: 16,
                  marginLeft: 15,
                }}>
                Login with Facebook{' '}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View
          style={{
            marginTop: 7,
            justifyContent: 'center',
            alignSelf: 'center',
            height: 52,
            width: '85%',
            marginBottom: 20,
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#bebfc2', '#b1b3b5', '#b1b3b5']}
            style={{
              width: '100%',
              height: '100%',
              margin: 5,
              borderTopLeftRadius: 18,
              borderBottomRightRadius: 18,
              borderRadius: 5,
              alignSelf: 'center',
              justifyContent: 'center',
              elevation: 10,
              shadowColor: 'black',
              
            }}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtulZO0p3i3YAxhz-39CvbHBWift1kPxutr7W4GB6k23hfpPWiROE0uTMr42oMu2Ir6hc&usqp=CAU',
              }}
              style={{
                height: 25,
                width: 25,
                marginLeft: 15,
                position: 'absolute',
                borderRadius: 15,
              }}
            />

            <TouchableOpacity
              style={{}}
              onPress={() => Alert.alert('Button Pressed')}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'black',
                  fontSize: 16,
                  marginLeft: 15,
                }}>
                Login with Gmail{' '}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginBottom: 40,
          }}>
          <Text style={{fontSize: 14, marginTop: 2, marginRight: 5}}>
            New Shippers?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{fontSize: 16, color: 'grey', fontWeight: 'bold'}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
      
    </ScrollView>
  );
};

export default Login;
