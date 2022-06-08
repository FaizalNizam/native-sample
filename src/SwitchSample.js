import { View, Switch,Text } from 'react-native'
import React, { useState } from "react";

const SwitchSample = () => {

  const [enabled, setEnabled] = useState(false)

  const toggleSwitch = () => {
    setEnabled(prevState => !prevState)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Switch</Text>
      <Switch
        trackColor={{ false: "#044030", true: "#81b0ff" }}
        thumbColor={enabled ? "#e32245" : "#0fbfd6"}
        ios_backgroundColor='#044030'
        onValueChange={toggleSwitch}
        value={enabled}
      />
    </View>
  )
}

export default SwitchSample