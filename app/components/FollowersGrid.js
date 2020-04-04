import React, { Component } from 'react';
import { StyleSheet,Text, View, Image,ScrollView } from 'react-native';


export default class FollowersGrid extends Component{
    constructor(props) {
        super(props);
        this.state = { valx: 0 };
      }
 render(){
  return (
      <ScrollView>
        <View style={styles.photoGrid}>
          
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/1.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/plus.png')}/>
            </View>
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/2.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/plus.png')}/>
            </View>
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/3.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/tick.png')}/>
            </View>
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/4.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/plus.png')}/>
            </View>
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/5.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/tick.png')}/>
            </View>
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/6.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/plus.png')}/>
            </View>
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/7.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/plus.png')}/>
            </View>
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/8.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/plus.png')}/>
            </View>
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/1.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/plus.png')}/>
            </View>
            <View style={styles.photoWrap}> 
                     <Image style={styles.profilepic} source={require('../img/2.jpg')}/>
                     <Text style={styles.profilename}>Elvie Dibbert</Text>
                     <Text style={styles.profileid}>Linda_Zieme99</Text>
                     <Image style={styles.picplus} source={require('../img/plus.png')}/>
            </View>
          
            
        
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    photoGrid:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    photoWrap:{
        margin:2,
        height:90,
        width:'100%',
        backgroundColor:'#fff'
    },
    photo:{
        flex:1,
        width:null,
        alignSelf:'stretch'
    },
     profilepic:{
        width:70,
        height:70,
        marginTop:10,
        marginLeft:'5%',
        borderRadius:100,
        
      },
      profilename:{
          marginLeft:'30%',
          fontWeight:'bold',
          fontSize:18,
          marginTop:-60,
          marginBottom:2
      },
      profileid:{
        marginLeft:'30%',
        fontSize:16,
        color:'#C0C0C0'
    },
    picplus:{
        alignSelf:'flex-end',
        marginRight:'5%',
        width:45,
        height:45,
        marginTop:-45,
    }
    
});
