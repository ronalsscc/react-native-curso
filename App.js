import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, Button, TouchableHighlight } from 'react-native';
import Girasoles from "./assets/girasoles.png";
import {useRef} from "react";
export default function App() {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,

    }).start();
  };

  return (
    <View  style={styles.container}>
      <Image 
        source={{ url: "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/07/20/60f6c971bc94a.jpeg"}} 
        style={{height: "100%", width: "100%", position: "absolute"}}  
      />
      <Image 
        source={Girasoles} 
        style={{height: 200, width: 200, animation: "rotate 2s linear infinite"}}
        fadeDuration={2}
      />
      
      <Text style={{fontSize: 30, fontWeight: 600, color: "white"}}>¿Estas viendo mis cambios?</Text>
      <Text style={{fontSize: 30, fontWeight: 600, color: "white"}}>Pues te amo</Text>
      <Text style={{fontSize: 15, color: "white", marginBottom: 15}}>Te amo desde una aplicación de IOs con React Native.</Text>
      
      <TouchableHighlight
        underlayColor="#863c1f"
        style={{backgroundColor: "#c88d6a", color: "white", padding: 10, borderRadius: 5, boxShadow: "1px 1px 10px rgba(0,0,0,0.8)"}}
        onPress={() => alert("No se te olvide que siempre estaré contigo.")}
      >
        <Text style={{color:"white"}}>Selecciona este botón</Text>
      </TouchableHighlight>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#311d1b',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
