import { View, Text, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'

const ModalSample = () => {

    const [modal, setModal] = useState(false)

    return (
        <View style={{ flex: 1, height: 300, alignItems: 'center' }}>
            <Text style={{ fontSize: 30, marginTop: 100 }}>Modal Sample</Text>
            <Pressable style={{ marginTop: 50 }} onPress={() => setModal(true)}>
                <Text>press here to show Modal</Text>
            </Pressable>
            <Modal
                transparent={true}
                visible={modal}
                onRequestClose={()=>setModal(!modal)}
            >
                <View style={{width:100,height:100,marginTop:300,marginLeft:150}}>
                    <Text style={{color:'red',fontSize:15}}>Hi from Modal</Text>
                    <Pressable onPress={()=>setModal(!modal)}>
                        <Text style={{marginLeft:15}}>Hide Me</Text>
                    </Pressable>
                </View>


            </Modal>
        </View>
    )
}

export default ModalSample