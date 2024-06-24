import React from 'react'
import { View } from 'react-native'

const components = () => {
  return (
    <View>
              
      <View style= {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          letterSpacing: 4 }}
        >
          HELLO GAMERS!
        </Text>
        <Text style={{
          fontSize: 16, 
          color: '#222831',
          textAlign: 'center',
          margin: 10,
        }}
        >
          welcome to the official site of the "mind maze" game, you must have a game account first to be able to explore more fully on this site.
        </Text>
      </View>

      <View style= {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('./assets/splash-img.png')}
          style={{ width: 250, height: 300, marginTop: 50 }}
        />
      </View>

        <View style={{ 
            flex: 1,
            flexDirection: 'row', 
            alignItems: 'center' ,
            marginRight: 30,
            marginLeft: 30,
        }}>
          <ButtonCustom color='#fff' text='Login' backgroundColor='#222831' />
          <ButtonCustom color='#222831' text='Register' />
        </View>

    </View>
  )
}

export default components