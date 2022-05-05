import React from 'react'
import { View, Text, Button } from 'react-native'
import globalStyles from '../styles/global';
const {globals}=globalStyles;

const Task = ({ navigation,route }) => {
    const popHandler = () => {
        navigation.pop()
        //navigation.goBack
    }
    const pushHandler = () => {
        navigation.push("Home")
    }
    return (
        <View style={globals.container}>
            <Text>Task</Text>
            <Text>{route.params.id}</Text>
            <Text>{String(route.params.done)}</Text>
            <Text>{route.params.task}</Text>
            <Button title={route.params.task} onPress={popHandler} />
            <Text> </Text>
            <Button title="go to home PUSH" onPress={pushHandler} />
        </View>
    )
}
export default Task