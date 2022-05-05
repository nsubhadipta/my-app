import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import haStack from './MyStack';
const {MyStack,AboutStack}=haStack;

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={MyStack} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    )
}
export default MyDrawer