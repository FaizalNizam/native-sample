import { View, Text, FlatList } from 'react-native'
import React from 'react'

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
    {
        id: '4',
        title: 'Fourth Item'
    },
    {
        id: '5',
        title: 'fifth Item',
    },
    {
        id: '6',
        title: 'sixth Item',
    },
    {
        id: '7',
        title: 'seventh Item',
    }
]

const List = () => {

    const render = ({ item }) => {
        return (
            <View style={{ height: 50, width: 100 }}>
                <Text style={{ color: 'red' }}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, marginTop: 50, alignItems: 'center' }}>
            <Text style={{ fontSize: 30, marginBottom: 20 }}>FlatList</Text>
            <FlatList
                data={DATA}
                renderItem={render}
                keyExtractor={item => item.id} />
        </View>
    )
}

export default List