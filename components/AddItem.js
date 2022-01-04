import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue)

  return (
   <View>
       <TextInput placeholder="Add Item..."  style={styles.input} onChangeText={onChange} />
       <TouchableOpacity style={styles.btn} onPress={() => addItem(text)} >
           <Text style={styles.btnText} >
               <Icon name="plus" size={20}  />
               {'  '}
                Add Item
            </Text>
       </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#1DA1F2',
        padding: 12,
        margin: 7,
    },
    btnText: {
        color: '#F5F8FA',
        fontSize: 20,
        textAlign: 'center',

    }
  })


export default AddItem;