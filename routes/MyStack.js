import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Vpn from '../screens/Vpn';
import Task from '../screens/Task';
import About from '../screens/About';
import React from 'react';
const Stack = createStackNavigator();


const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#00A9FC',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }}>

            <Stack.Screen name="VPN" component={Vpn} />
            <Stack.Screen name="Home" component={Home} options={{
                headerStyle: {
                    backgroundColor: 'burlywood'
                },
                headerTintColor: 'darkslategrey',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }} />
            <Stack.Screen name="Task" component={Task} options={({ route }) => ({ title: route.params.task })} />
            <Stack.Screen name='About' component={About} />
        </Stack.Navigator>
    )
}
export default MyStack;