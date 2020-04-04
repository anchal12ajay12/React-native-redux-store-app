import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Header extends Component {
  render (){
      return(
            <View>
            <Image style={styles.headerBackground} source={require('../img/3.jpg')}/>
            
            <View style={styles.header}>
                <View style={styles.profilepicWrap}> 
                     <Image style={styles.profilepic} source={require('../img/1.jpg')}/>
                </View>

                <Text style={styles.name}>Dhruv Ramdev</Text>
                <View>
                <Image style={styles.svgprofile} source={require('../img/user.png')} />
                <Text style={styles.pos1}>dhruvramdev</Text>
                <Image style={styles.svgpin} source={require('../img/pin.png')} />
                <Text style={styles.pos}>New Delhi, Delhi</Text>
                </View>
                <View>
                <Text style={styles.pos3}>Random Bio for Random People. Don't Forget to like my pics</Text>
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    marginLeft:'-10%',
    marginRight:'-10%',
    width:null,
    marginTop:350,
    paddingTop:300,
    alignSelf:'stretch'
  },    
  header: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  profilepicWrap:{
    width:90,
    height:90,
    marginTop:-420,
    borderRadius:100,
    borderColor: 'rgba(0,0,0,0.4)'
  },
  profilepic:{
    flex:1,
    width:null,
    alignSelf:'stretch',
    borderRadius:100,
    borderColor:'#fff',
    borderWidth:4,
  },
  name:{
    marginTop:20,
    fontSize:20,
    color:'#fff',
    fontWeight:'bold'
  },
  pos1:{
    alignSelf:'center',
    marginRight:100,
    fontSize:12,
    color: '#fff',
    fontWeight:'300'
},
  pos:{
      fontSize:12,
      alignSelf:'center',
      color:'#fff',
      fontWeight:'300',
      marginLeft:100,
      marginTop:-15
  },
  pos3:{
    textAlign:'center',
    fontSize:15,
    alignSelf:'center',
    color:'#fff',
    fontWeight:'300',
    marginTop:15
},
svgprofile:{
  width:16,
  height:16,
  alignSelf:'center',
  marginLeft:-185,
  marginBottom:-16
},
svgpin:{
  width:15,
  height:15,
  alignSelf:'center',
  marginTop:-15,
  marginRight:2
}
  

});













