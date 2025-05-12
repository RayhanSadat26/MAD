import { StyleSheet,Image,Text, View,TouchableOpacity } from "react-native";
import colors from './../constant/colors'
import { useRouter } from "expo-router";
export default function Index() {
  const router=useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.WHITE
      }}
    >
      <Image source={require('./../assets/images/landing.png')}
      style={{
        width:'100%',
        height: 300,
        marginTop: 50
      }}
      />
      <View style={{
        padding:25,
        backgroundColor: colors.VIRDIGRIS,
        height:'100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        marginTop:20
      }}>
        <Text style={{
          fontSize:35,
          fontWeight: "bold",
          textAlign: "center"
          }}> Welcome to  Braniacs</Text>
        <Text style={{
          fontSize:20,
          textAlign:"center",
          marginTop: 60,
          fontWeight: "bold",
          fontFamily: "outfit-bold"
        }}>The Smarter Way to Learn and Practice:</Text>
        <Text style={{
          fontSize:20,
          textAlign:"center",
          marginTop: 5
        }}>Transform your ideas into educational content effortlessly with AI!</Text>
       <TouchableOpacity style={styles.button}
        onPress={() => router.push('/authentication/SignUp')}>
          <Text style={[styles.buttonText,{color:colors.PRIMARY}]}>Get Started</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={[styles.button,{backgroundColor:colors.VIRDIGRIS,borderWidth:1,borderColor:colors.WHITE}]}
         onPress={() => router.push('/authentication/SignIn')}>
          <Text style={styles.buttonText}>Already have an Account</Text>
        </TouchableOpacity> 
      </View>
    </View>

  );
}

const styles = StyleSheet.create ({
  button:
  {
    padding: 20,
    backgroundColor:colors.WHITE,
    marginTop:20,
    borderRadius:10
  },
  buttonText:
  {
    textAlign: "center",
    fontSize: 18
  }
})
