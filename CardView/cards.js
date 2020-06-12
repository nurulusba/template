import React,{Components, Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';

export default class cards extends Component
{
    render()
    {
        return(
            <View style = {styles.container}>
           <TouchableOpacity style={styles.card} >
     <Image style={styles.cardImage} source={{uri:'https://www.bigstockphoto.com/images/homepage/module-6.jpg'}} />
     <Text style = {styles.cardText}>Dream...</Text>
           </TouchableOpacity>


           <TouchableOpacity style={styles.card} >
     <Image style={styles.cardImage} source={{uri:'https://image.freepik.com/free-photo/large-foliage-tropical-leaf-dark-green-with-rain-water-drop-texture-abstract-nature-background_1484-1857.jpg'}} />
     <Text style = {styles.cardText}>Courage...</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.card} >
     <Image style={styles.cardImage} source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}} />
     <Text style = {styles.cardText}>Dedication...</Text>
           </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : 
    {
       marginTop:40,
        backgroundColor:'#F5FCFF'
    },

    card :
    {
 
     backgroundColor:'#fff',
     marginBottom:10,
     marginLeft:'2%',
     width:'96%',
     shadowColor:'#000',
     shadowOpacity:0.2,
     shadowRadius:1,
     shadowOffset:
     {
         width:3,
         height : 3
     }
    },

    cardImage :
    {
        width:'100%',
        height:200,
        resizeMode:'cover'
    } , 

    cardText :
    {
    padding:10,
    fontSize:16,
    marginLeft:20,
    fontFamily: 'Iowan Old Style' 

    }


});