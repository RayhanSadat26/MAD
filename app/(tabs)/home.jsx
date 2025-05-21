import {View,Text} from 'react-native'
import React from 'react'
import colors from './../../constant/Colors'
import NoCourse from '../../components/NoCourse'
export default function home()
{
    return 
    (
        <View style={{
            padding:25,
            paddingTop:Platform.OS=='ios'&&45,
            flex: 1,
            backgroundColor:colors.WHITE,

        }}>
            <Header />
            <NoCourse/>
        </View>
    )
}
