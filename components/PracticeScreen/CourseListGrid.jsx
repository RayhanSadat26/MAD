import {View,Text} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
import Colors from '../../constant/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function CourseListGrid({courseList,option})
{
    return 
    (
        <View>
            <FlatList
            data={courseList}
            numColumns={2}
            style={{
                padding:20
            }}
            renderItem={({item,index})=>(
                <View key={index}
                style={{
                    flex:1,
                    flexDirection:'column',
                    alignItems:'center',
                    display:flex,
                    justifyContent:'center',
                    padding:15,
                    backgroundColor:Colors.WHITE,
                    margin: 7,
                    borderRadius: 15,
                    elevation: 1
                }}>
                    <Ionicons name="checkmark-circle" size={24} color={Colors.GRAY}
                    style={{
                        position:'absolute',
                        top:10,
                        right:20
                    }} />
                    <Image source={option?.icon} style={{
                        width:'100%',
                        height:70,
                        objectFit:'contain'
                    }}/>
                    <Text style={{
                        fontFamily:'outfit',
                        textAlign:'center',
                        marginTop: 7
                    }}>{item.courseTitle}</Text>
                </View>
            )}/>
        </View>
    )
}
