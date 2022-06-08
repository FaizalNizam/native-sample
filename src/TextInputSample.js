import { Text, SafeAreaView, StatusBar, TextInput } from 'react-native'
import React from 'react'

const TextInputSample = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight, marginHorizontal: 20, alignItems: 'center' }}>
            <Text style={{ padding: 50, fontSize: 20 }}>Text Input</Text>
            <TextInput
                style={{ width: 200, height: 50, borderWidth: 2, borderColor: 'red', padding: 10 }}
                placeholder='Enter the name'
            />

        </SafeAreaView>
    )
}

export default TextInputSample