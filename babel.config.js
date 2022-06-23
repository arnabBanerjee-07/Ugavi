module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
 //(1 manually required for react-native reanimated
  plugins: [ 'react-native-reanimated/plugin'], //manual changes only required for babel.config plugin 
//upto this mark 1)

//(2 manually required for react-native-paper
env: {
  production: {
    plugins: ['react-native-paper/babel'], //changes required in Android.xml also
  },
},
// 2)
};

