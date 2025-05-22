import {View,Text, Pressable, Dimensions, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constant/Colors';
import * as Progress from 'react-native-progress';
import Button from './../../components/Shared/Button';
import {db} from './../../config/firebase.config';
import { arrayUnion,collection,doc,updateDoc } from 'firebase/firestore';
export default function Quiz()
{
    const {courseParams}=useLocalSearchParams();
    const course=JSON.parse(courseParams);
    const quiz=course?.quiz;
    const [currentPage,setCurrentPage]=useState(0);
    const [selectedOption,useSelectedOption]=useState();
    const [result,setResult]=useState([]);
    const [loading,setLoading]=useState(false);
    const GetProgress=(currentPage)=>{
        const perc=(currentPage/quiz.length);
        return perc;
    }
    const OnOptionSelect=(selectedChoice)=>{
        setResult(prev=>({
            ...prev,
            [currentPage]:{
                userChoice:selectedChoice,
                isCorrect:quiz[currentPage]?.correctAns==selectedChoice,
                question:quiz[currentPage]?.question,
                correctAnswer:quiz[currentPage]?.correctAnswer
            }
        }));
        console.log(result);
    }
    const onQuizFinish=async()=>{
        setLoading(true);
        try{
        await updateDoc(doc(db,'Courses',course?.docId)),{
            quizResult:result
        }
        setLoading(false);
        router.replace({
            pathname:'/quiz/summary',
            params:{
                quizResultParam:JSON.stringify(result)
            }
        })
        }
        catch(e)
        {
            setLoading(false);
        }
    }
    return(
        <View>
            <Image source={require('./../../assets/images/wave.png')}
            style={{
                height:800,
                width:'100%'
            }}/>
            <View
            style={{
                padding:25,
                position: 'absolute',
                width:'100%'
            }}>
                <View
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}>
                    <Pressable>
                        <Ionicons name="arrow-back" size={30} color="white" />
                    </Pressable>
                    <Text
                    style={{
                        fontFamily:'outfit-bold',
                        fontSize:25,
                        color:Colors.WHITE,
                    }}>{currentPage+1} of 5</Text>
                    <View
                    style={{
                        marginTop:20
                    }}>
                        <Progress.Bar progress={GetProgress(currentPage)} width={Dimensions.get('window').width*0.85}
                        color={Colors.WHITE} height={10} />
                    </View>
                    <View
                    style={{
                        padding:20,
                        backgroundColor:Colors.WHITE,
                        marginTop:30,
                        height:Dimensions.get('screen').height*0.65,
                        elevation:1,
                        borderRadius:20
                    }}>
                    <Text
                    style={{
                        fontFamily:'outfit-bold',
                        fontSize:25,
                        textAlign:'center'
                    }}>{quiz[currentPage]?.question}</Text>
                    {quiz[currentPage]?.options.map((item,index)=>(
                        <TouchableOpacity onPress={()=>{setSelectedOption(index);
                            OnOptionSelect(item)}} key={index} style={{
                            padding:20,
                            borderWidth:1,
                            borderRadius:15,
                            marginTop:8,
                            borderColor:selectedOption==index?Colors.GREEN:null,
                            backgroundColor:selectedOption==index?Colors.LIGTH_GREEN:null
                        }}>
                            <Text style={{
                                fontFamily:'outfit',
                                fontSize:20,
                            }}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                    {(selectedOption?.toString()&&quiz?.length-1>currentPage) && 
                    <Button text={'Next'}
                        onPress={()=>{setCurrentPage(currentPage+1);setSelectedOption(null)}
                    }/>}
                    {(selectedOption?.toString()&&quiz?.length-1>currentPage) && 
                    <Button text="Finish"
                    loading={loading}
                        onPress={()=>{onQuizFinish}}
                    />}
                </View>

            </View>
        </View>

    )
}
