import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhotoGrid from './PhotoGrid';
import FollowersGrid from './FollowersGrid';


export default class Bar extends Component{
    constructor(props) {
        super(props);
        //state to manage the screen visible at a time
        this.state = { val: 1 };
      }
      renderElement() {
        //You can add N number of Views here in if-else condition
        if (this.state.val === 1) {
          //Return the PhotoGridScreen as a child to set in Parent View
          return <PhotoGrid />;
        } else{
          //Return the FollowersGrid as a child to set in Parent View
          return <FollowersGrid />;
        }
      }

 render(){
  return (
      <View>
        <View style={styles.bar}>
            <View style={styles.barItem}  >
                <Text style={styles.barTop} onPress={() => this.setState({ val: 1 })}>421</Text>
                <Text style={styles.barBottom} onPress={() => this.setState({ val: 1 })}>PHOTOS</Text>
                <View style={styles.barblack}></View>
            </View>
            <View style={styles.barItem} >
                <Text style={styles.barTop}>2</Text>
                <Text style={styles.barBottom}>LIKED</Text>
                <View style={styles.barblack}></View>
            </View>
            <View style={styles.barItem}  >
                <Text style={styles.barTop}onPress={() => this.setState({ val: 2 })}>0</Text>
                <Text style={styles.barBottom} onPress={() => this.setState({ val: 2 })}>FOLLOWERS</Text>
                <View style={styles.barblack}></View>
            </View>
            <View style={styles.barItem}>
                <Text style={styles.barTop}>0</Text>
                <Text style={styles.barBottom}>FOLLOWING</Text>
                <View style={styles.barblack}></View>
            </View>
            </View>
            {/*View to hold the child screens 
        which can be changed on the click of a button*/}
        <View>
          {this.renderElement()}
        </View>
        
        </View> 
      
    );
  }
}

const styles = StyleSheet.create({
    bar:{
        width:'103%',
        marginTop:-130,
        borderTopColor:'#fff',
        borderTopWidth:4,
        marginRight:'-3%',
        backgroundColor:'#fff',
        flexDirection:'row'
    },
    barTop:{
        color:'#000',
        fontSize:16,
        alignSelf:'center',
        fontWeight:'bold'
    },
    barBottom:{
        color:'#000',
        alignSelf:'center',
        fontSize:12,
        fontWeight:'normal',
        paddingLeft:'5%',
        paddingRight:'5%'
    },
    barblack:{
        width:'100%',
        height:5,
        backgroundColor:'#000'
    }
    
});


