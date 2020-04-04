import React, { Component } from 'react';
import { StyleSheet, View, Image,Dimensions,ScrollView } from 'react-native';


export default class photoGrid extends Component{
    constructor(props) {
        super(props);
        this.state = { valx: 0 };
      }
 
 
 render(){
  return (
     <ScrollView>
         <View style={styles.photoGrid}>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/2.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/4.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/5.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/6.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/7.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/8.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/2.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/4.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/2.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/4.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/5.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/6.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/7.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/8.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/2.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/4.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/2.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/4.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/5.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/6.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/7.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/8.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/2.jpg')}/>
             </View>
             <View style={styles.photoWrap}>
                 <Image style={styles.photo} source={require('../img/4.jpg')}/>
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
        height:120,
        width:(Dimensions.get('window').width/2)-4,
    },
    photo:{
        flex:1,
        width:null,
        alignSelf:'stretch'
    }
});
