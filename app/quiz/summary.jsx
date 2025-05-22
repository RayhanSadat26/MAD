import {View,Text, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import Colors from '../../constant/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Shared/Button';
import { FlatList } from 'react-native-web';
export default function QuizSummary()
{
    const {quizResultParam}=useLocalSearchParams();
    const quizResult = JSON.parse(quizResultParam)
    const [correctAns,setCorrectAns]=useState(0);
    const [totalQuestion,setTotalQuestion]=useState(0);
    const router=useRouter();
    //const [quizResult,setQuizResult] = useState();
    //useEffect(()=>{
    //    quizResultParam&&setQuizResult(JSON.parse(quizResultParam));
   // },[quizResultParam])
    const CalculateResult=()=>{
        if (quizResult!==undefined){
        const correctAns_=Object.entries(quizResult)?.filter(([key,value])=>
        value?.isCorrect==true)
        const totalQues_= Object.keys(quizResult).length;
        setCorrectAns(correctAns_.length);
        setTotalQuestion(totalQues_.length);
        }
    }
    const GetPercMark=()=>{
        return (correctAns/totalQuestion)*100
    }

    return (
        <FlatList
        data={[]}
        ListHeaderComponent={
            <View>
                    <Image source={require('./../../assets/images/wave.png')}
                    style={{
                        height:800,
                        width:'100%'
                    }}/>
                    <View
                    style={{
                        position:'absolute',
                        width:'100%',
                        padding: 35
                    }}>
                        <Text style={{
                            textAlign:'center',
                            fontFamily:'outfit-bold',
                            fontSize:30,
                            color:Colors.WHITE
                        }}>Quiz Summary</Text>
                        <View style={{
                            borderRadius:20,
                            backgroundColor:Colors.WHITE,
                            padding:20,
                            marginTop:30,
                            display:flex,
                            alignItems:'center'
                        }}>
                            <Image source={require('./../../assets/images/trophy.png')}
                            style={{
                                width:100,
                                height:200,
                                marginTop:-60
                            }}/>
                            <Text style={{
                                fontFamily:'outfit-bold',
                                fontSize:26
                            }}>{GetPercMark()>60?'Congratulations!':'Try Again'}</Text>
                            <Text style={{
                                fontFamily:'outfit',
                                color:Colors.GRAY,
                                fontSize:17
                            }}>You gave {GetPercMark()}% Correct Answers</Text>
                            <View style={{
                                display:flex,
                                flexDirection:row,
                                justifyContent:'space-between',
                                marginTop:10
                            }}>
                                <View style={styles.resultTextContainer}>
                                    <Text style={styles.resultText}>Q {totalQuestion}</Text>
                                </View>
                                <View style={styles.resultTextContainer}>
                                    <Text style={styles.resultText}><Ionicons name="checkmark-circle-outline" size={24} color="green" /> {correctAns}</Text>
                                </View>
                                <View style={styles.resultTextContainer}>
                                    <Text style={styles.resultText}><Ionicons name="close" size={24} color="red" /> {totalQuestion-correctAns}</Text>
                                </View>
                            </View>
                        </View>
                        <Button text={'Back To Home'} onPress={()=>router.replace('/(tabs)/home')}/>
                        <View style={{
                            marginTop:25,
                            flex:1
                        }}>
                            <Text style={{
                                fontFamily:'outfit-bold',
                                fontSize:25
                            }}>Summary</Text>
                            <FlatList
                                data={Object.entries(quizResult)}/>
                                renderItem={({item,index})=> {
                                    const quizItem=item[1];
                                    return(
                                        <View style={{
                                            padding:15,
                                            borderWidth:1,
                                            marginTop:5,
                                            borderRadius:15,
                                            backgroundColor:quizItem?.isCorrect==true?Colors.LIGHT_GREEN:Colors.LIGHT_RED,
                                            borderColor:quizItem?.isCorrect==true?Colors.GREEN:Colors.RED

                                        }}>
                                            <Text style={{
                                                fontFamily:'outfit',
                                                fontSize:20
                                            }}>{quizItem.question}</Text>
                                            <Text style={{
                                                fontFamily:'outfit',
                                                fontSize:15
                                            }}>Ans: {quizItem?.correctAns}</Text>
                                        </View>
                                    )
                                }}
                        </View>

                    </View>
            </View>}/>
    )
}
const styles=StyleSheet.create({
    resultTextContainer:{
        padding:15,
        backgroundColor:Colors.WHITE,
        elevation:1
    },
    resultText:{
        fontFamily:'outfit',
        fontSize:20
    }
})
