import {View,Text, Pressable, ActivityIndicator} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useLocalSearchParams,useRouter } from 'expo-router'
import {PracticeOption} from '../../../constant/Option';
import Colors from '../../../constant/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {db} from './../../../config/firebaseConfig';
import {collection,getDocs,orderBy,query,where} from 'firebase/firestore';
import {UserDetailContext} from './../../../context/UserDetailContext';
import CourseListGrid from '../../../components/PracticeScreen/CourseListGrid';
export default function PracticeTypeHomeScreen()
{
    const {type}=useLocalSearchParams();
    const option=PracticeOption.find(item=>item.name==type);
    console.log(option)
    const router=useRouter();
    const {userDetail,setUserDetail}=useContext(UserDetail);
    const [loading,setLoading]=useState(false);
    const [courseList,setCourseList]=useState([]);
    useEffect(()=>{
        userDetail&&GetCourseList();
    },[userDetail])
    const GetCourseList=async()=>{
        setLoading(true);
        setCourseList([]);
        try{
        const q=query(collection(db,'Courses'),where('createdBy','==',userDetail?.email,orderBy('createdOn','desc')))//All the imports in this line are from the firebase firestore
        const querySnapshot=await getDocs(q)
        //When you save this onto your system, it will throw and error - copy the link paste on google and then itll ask you to create index using your firestore, so click the save button to create the indexing!:)
        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setCourseList(prev=>[...prev,doc.data()])
        })
        setLoading(false);
    }
    catch (e){
            console.log(e)
            setLoading([])
        }
        
    }
    return(
        <View>
            <Pressable onPress={()=>router.back}>
                <Ionicons name="arrow-back" size={24} color="black"
                style={{
                    borderRadius:10,
                    padding:8,
                    backgroundColor:Colors.WHITE
                }} />
                <Image source={option.image}
                style={{
                    height:200,
                    width:'100%'
                }}/>
            </Pressable>
            <View
            style={{
                position:'absolute',
                padding:10,
                display:flex,
                flexDirection:'row',
                gap:10,
                alignItems:'center',

            }}>
                <Text
                style={{
                    fontFamily:'outfit-bold',
                    fontSize:25,
                    color:Colors.WHITE
                }}>{type}</Text>
            </View>
            {loading&&<ActivityIndicator size={'large'} color={Colors.PRIMARY}
            style={{
                marginTop:150
            }}/>}
            <CourseListGrid courseList={courseList}
            option={option}/>
        </View>
    )
}
