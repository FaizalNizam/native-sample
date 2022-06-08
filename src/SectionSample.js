import { View, Text, SafeAreaView, StatusBar, SectionList } from 'react-native'
import React from 'react'

const DATA = [
    {
        id: '1',
        title: 'Main dishes',
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        id: '2',
        title: 'starters',
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        id: '3',
        title: 'soft drinks',
        data: ["Water", "Coke", "Beer"]
    },
    {
        id: '4',
        title: 'sides',
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        id: '5',
        title: 'car',
        data: ["BMW", "Mercedez", "Ferrari"]
    }
]



const SecSample = () => {
    const Render = ({item}) => {
        return (
            <View style={{ padding: 20, backgroundColor: '#93e3ed', marginVertical: 10 }}>
                <Text>{item}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight, marginHorizontal: 15 }}>
            <SectionList
                sections={DATA}
                renderItem={Render}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontSize: 20 }}>{title}</Text>
                )}
            />

        </SafeAreaView>
    )
}

export default SecSample