import { View, Text, Image, Button, Alert, ActivityIndicator, ImageBackground } from 'react-native'
import React from 'react' 
import logo from './native.png'


const ViewComponent = () => {
    return (
        <View style={{  marginTop: 50, flex:1 }}>
            <View style={{ alignItems: 'center',justifyContent:'center', height: 200, backgroundColor: '#f5e9ab'}}>
                <Text style={{ color: 'red' }}>ViewComponent</Text>
                <Text >welcome</Text>
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />
                <Button title='press me' color='#841584' onPress={()=>Alert.alert('button pressed')} />
            </View>
           
            <View style={{ height: 200,backgroundColor:'#b3f2cf',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#e80c59'}}>Activity indicator</Text>
                <ActivityIndicator size='large' color='#8c7503'/>
                <ActivityIndicator size='small' color='#8c7503'/>
            </View>
            <View style={{ height: 300, backgroundColor:'#f2e9f1',alignItems:'center'}}>
                <ImageBackground source={logo} style={{width:300,height:300, alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:40, color:'blue'}}>Sub element</Text>
                </ImageBackground>
            </View>
        </View>

    )
}

export default ViewComponent