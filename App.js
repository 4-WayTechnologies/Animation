import { StyleSheet, Text, View,Animated} from 'react-native'
import React,{useEffect,} from 'react'

const App = () => {
  const position=new Animated.ValueXY({x:0,y:0})
 useEffect(()=>{
  Animated.spring(position,{
    toValue:{x:200,y:300},
delay:2000,
bounciness:50,
    useNativeDriver:true,
  
  }).start()
},[])
  return (
    <View style={{}}>
      <Animated.View style={{width:80,
        height:80,
        borderRadius:50,
        backgroundColor:'red',
        transform:[{translateX:position.x},{translateY:position.y}]}} >
      
    </Animated.View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  

})