import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform,StatusBar, TouchableOpacity,ImageBackground } from 'react-native';

export default class HomeScreen extends Component {
 render() {
    return(
        <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}> </SafeAreaView>
      <ImageBackground src={require("../assets/bg_updates.jpg")} > 
      <View style={styles.titleBar}>
      <Text style={styles.title}>
        IssTracker App
      </Text>
    </View>
    <TouchableOpacity style={styles.routeCards} onPress={()=>{this.props.navigation.navigate("IssLocation")}}>
    <Text style={styles.routeText}>IssLocation</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.routeCards}  onPress={()=>{this.props.navigation.navigate("Meteors")}}>
    <Text style={styles.routeText}>Meteors</Text>
    </TouchableOpacity>
    </ImageBackground>
    </View>

    )
 }
 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title:{
      fontSize: 40,
      fontWeight : "bold"
    },
    droidSafeArea:{
      marginTop: Platform.OS==="andriod"?StatusBar.currentHeight:0
      
    },
    routeCards:{
      flex:0.25,
      marginLeft:50,
      marginRight:50,
      marginTop:50,
      borderRadius:30,
      backgroundColor:"red",
      alignItems:"center",
      justifyContent:"center"
    },
      routeText:{
      fontSize:20,
      fontWeight:"bold",
    },
    titleBar:{
      flex:0.15,
      justifyContent:"center",
      alignItems:"center",
    }
  });
  
  