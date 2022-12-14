import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {axios} from 'axios'
import MapView, { Marker } from 'react-native-maps'


export default class IssLocationScreen extends Component {
 constructor(props){
    super(props)
    this.state={location:{}}

 }
  componentDidMount(){
    this.getIssLocation()
  }
 getIssLocation=()=>{
    axios
    .get("https://api.wheretheiss.at/v1/satellites/25544")
    .then(response=>{this.setState({location:response.data})})
    .catch(error=>{alert(error.message)})
 }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>ISS Location Screen!</Text>
                <View style={styles.mapcontainer}>
                    <MapView style={styles.map} region={{
                        latitude:this.state.location.latitude,
                        longitude:this.state.location.longitude,
                        latitudeDelta:100,
                        longitudeDelta:100,
                    }}>
                    <Marker coordinate={{latitude:this.state.location.latitude,longitude:this.state.location.longitude}}>
                        <Image source={require('../assets/iss_icon.png')} style={{ height: 50, width: 50 }}/>

                    
                        </Marker>  
                    </MapView>
                    
                </View>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    map: {
      width:"100%",
      height :"100%",


    },
    mapcontainer:{
        flex:0.60
    }

})