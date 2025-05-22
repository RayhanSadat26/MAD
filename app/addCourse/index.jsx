import {View,Text} from 'react-native'
import React from 'react'
import colors from '../../constant/Colors'
import { TextInput } from 'react-native-web'
import Button from '../../components/Shared/Button'
export default function AddCourse()
{
    const [loading,setLoading]=useSate(false)
    const onGenerateTopic=()=>{

    }
    return(
        <View
        style={{
            padding:25,
            flex:1,
            backgroundColor:colors.WHITE

        }}>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize: 30
            }}>Add New Course</Text>
            <Text
            style={{
                fontFamily:'outfit',
                fontSize:30
            }}>What do you want to learn today?</Text>
            <Text
            style={{
                fontFamily:'outfit',
                fontSize:20,
                marginTop:8,
                color:colors.GRAY,
            }}>What course do you want to create(Learn python,digital marketing,AI&ML,etc)
            </Text>
            <TextInput placeholder='(Ex.Learn Python,Learn AI)' 
            style={styles.textInput}
            numberOfLines={3}
            multiline={true}/>
            <Button text={'Generate Topic'} loading={loading}type='outline' onPress={()=>onGenerateTopic()}/>
        </View>
    )
}
const styles=StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderRadius:15,
        padding:15,
        height:100,
        marginTop:10,
        alignItems:'flex-start',
    }
})
