import React,{useState} from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import AddItem from './components/AddItem'
import Header from './components/Header'
import ListItem from './components/ListItem'

import { uuid } from 'uuidv4';


const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Eggs'},
    {id: 4, text: 'Juice'},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  const addItem = (text) => {
    if (!text){
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
   <Header title='Shopping List'/>
   <AddItem addItem={addItem}/>
   <FlatList 
   data={items}
   renderItem={({item}) => 
   <ListItem item={item} deleteItem={deleteItem} />}
   />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 40,
  },
 
})


export default App;