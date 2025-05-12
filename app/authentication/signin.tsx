import {View,Text,Image,TextInput,StyleSheet, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import colors from '@/constant/colors'
import { useRouter } from 'expo-router'
export default function SignIn(){
    const router=useRouter();
    return(
    <View style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop:100,
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 30

    }}>
        <Image source={require('./../../assets/images/logo.png')}
            style={{
                width: 200,
                height: 200
                
            }}
        />
        <Text style={{
            fontSize: 30,
            fontFamily: 'outfit-bold'
        }}>Login Into Account</Text>
        <TextInput placeholder='Email' style={styles.textinput}/>
        <TextInput placeholder='Password' secureTextEntry={true} style={styles.textinput}/>
        <TouchableOpacity style={{
            borderRadius:10,
            padding:15,
            marginTop: 25,
            width:'100%',
            backgroundColor:colors.PRIMARY
        }}>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color: colors.WHITE,
                textAlign:'center'
            }}>Login</Text>
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    textinput:
    {
        borderWidth:1,
        width:'100%',
        padding:15,
        fontSize:18,
        borderRadius:8,
        marginTop:30
    }
})
