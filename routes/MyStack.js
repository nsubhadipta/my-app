import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Task from '../screens/Task';
import About from '../screens/About';
import React from 'react';
const Stack = createStackNavigator();

const AboutStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='About' component={About}/>
        </Stack.Navigator>
    )
}

const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'burlywood'
            },
            headerTintColor: 'darkslategrey',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            {/* <Stack.Screen name="Home" component={Home} options={{
                headerStyle: {
                    backgroundColor: 'burlywood'
                },
                headerTintColor: 'darkslategrey',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }} /> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Task" component={Task} options={({route})=>({title:route.params.task})} />
        </Stack.Navigator>
    )
}
export default {MyStack,AboutStack}