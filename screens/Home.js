import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import globalStyles from '../styles/global';
const { globals } = globalStyles;
import IconModule from './Icon';

const Home = ({ navigation }) => {

  const [tasks, setTasks] = useState([
    { "task": "Node js project R&D", "done": true, "id": "1" },
    { "task": "React native Study", "done": true, "id": "2" },
    { "task": "Responsive design", "done": true, "id": "3" },
  ])
  const pressHandler = () => {
    navigation.push("Task")
  }
  return (
    <View style={globals.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Task", item)}>
            <Text>{item.task}</Text>
          </TouchableOpacity>
        )}
      />
      <View >
        <Text>"rtqtq"</Text>
      </View>
      
      <IconModule iconName='gtegrw' />
      <IconModule iconName={'gtefgrw'} />
      <IconModule iconName={'gtegrw'} />
      {/* <Text>Home</Text> */}
      {/* <Button title="go to Task" onPress={pressHandler}/> */}
    </View>
    // <VpnModule/>
  )
}

export default Home;