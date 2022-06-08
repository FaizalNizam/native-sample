import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'

const Interactive = () => {

    const [direction, setDirection] = useState('')
    const [justify, setJustify] = useState('')
    const [align, setAlign] = useState('')
    //const [color,setColor] = useState('#031987')

    const Separator = () => (
        <View style={{ marginVertical: 5 }} />
    )
console.log("direction",direction);
    const Press = (cases, title) => {
        switch (cases) {
            case 'direction':
                 setDirection(title)
                 break
            case 'justify':
                 setJustify(title)
                 break
            case 'align':
                 setAlign(title)
                 break
        }

    }


    const Component = ({ title, cases }) => (
        <Pressable onPress={() => Press(cases, title)}
            style={({pressed})=>[{backgroundColor: pressed?'#fcba03':'#031987'},{ width: 120, height: 40, margin: 5, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }]}>

            <Text style={{ fontSize: 15, color: 'white' }}>{title}</Text>

        </Pressable>
    )

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
            <View style={{ flexDirection: direction, justifyContent: justify, alignItems: align }}>
                <View style={{ width: 50, height: 50, backgroundColor: '#37b9ed', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Text>cell 1</Text>
                </View>
                <View style={{ width: 60, height: 60, backgroundColor: '#37b9ed', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Text>cell 2</Text>
                </View>
                <View style={{ width: 70, height: 70, backgroundColor: '#37b9ed', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Text>cell 3</Text>
                </View>
            </View>

            <View style={{ marginTop: 10 }}>

                <Text style={{ fontSize: 18 }}>Direction</Text>
                <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                    <Component title='row' cases='direction' />
                    <Component title='row-reverse' cases='direction' />
                    <Component title='column' cases='direction' />
                    <Component title='column-reverse' cases='direction' />
                </View>
                <Separator />

                <Text style={{ fontSize: 18 }}>Justify Content</Text>
                <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                    <Component title='flex-start' cases='justify' />
                    <Component title='center' cases='justify' />
                    <Component title='flex-end' cases='justify' />
                    <Component title='space-between' cases='justify' />
                    <Component title='space-around' cases='justify' />
                    <Component title='space-evenly' cases='justify' />
                </View>
                <Separator />

                <Text style={{ fontSize: 18 }}>Align Items</Text>
                <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                    <Component title='flex-start' cases='align' />
                    <Component title='center' cases='align' />
                    <Component title='flex-end' cases='align' />
                    <Component title='stretch' cases='align' />
                    <Component title='baseline' cases='align' />
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Interactive