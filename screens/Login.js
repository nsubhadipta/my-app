import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import gs from '../styles/global';
const {loginStyles}=gs;

export default function Login() {
    // console.log(loginStyles);
  return (
    <View style={loginStyles.container}>
      <Text>Login Page!</Text>
      
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: '#841584' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Home</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}