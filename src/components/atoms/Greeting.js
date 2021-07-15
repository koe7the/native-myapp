import React from 'react'
import {Text} from 'react-native'

export default function Greeting({message}){
  return (
    <Text style={{color: "brown", fontSize: 35}}>
      {message}
    </Text>
  )
}
