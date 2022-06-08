import { View, Text, SafeAreaView, TextInput, Pressable, Image, Button } from 'react-native'
import React, { useState } from 'react'
import close from './close.jpeg'

const TextSelection = () => {

    const [data, setData] = useState('')
    const [display, setDisplay] = useState([])

    const onAdd = () => {
        setDisplay([...display, data])
        setData('')
    }
    console.log('display', display)

    const onDelete = (i) => {
        console.log(display[i]);
        display.splice(i, 1)
        setDisplay([...display])
    }

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 30 }}>
            <View style={{ flexDirection: 'row', marginTop: 100 }}>
                <TextInput
                    placeholder='Enter here'
                    style={{ height: 30, width: 200, borderWidth: 1 }}
                    onChangeText={(e) => setData(e)}
                    value={data}
                />
                <Pressable
                    onPress={onAdd}
                    style={{ width: 50, height: 30, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={{ color: 'white' }}>Add</Text>
                </Pressable>

            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', height: 200, borderWidth: 1, marginTop: 10 }}>
                {display?.map((o, i) => (
                    <Pressable key={i}
                        onPress={() => onDelete(i)}
                        style={{ height: 30, backgroundColor: '#bec2bf', margin: 10, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' }}
                    >
                        <Text>{o}</Text>
                        <Text style={{ width: 15, height: 20, color: 'red', borderWidth: 1, borderColor: 'red', marginLeft: 5, padding: 1 }}>X</Text>
                    </Pressable>

                ))}
            </View>

        </SafeAreaView>
    )
}

export default TextSelection