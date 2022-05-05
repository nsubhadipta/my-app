import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack from './routes/MyStack';
const {MyStack}=HomeStack;
// import MyDrawer from './routes/MyDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      {/* <MyDrawer /> */}
    </NavigationContainer>
  );
}
