import React,{Components, Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';

export default class img extends Component
{
    render()
    {
        return(
            
     <View style={styles.card}>
 <Image source={require('../img/myImage.jpg')} style={{ width:'100%',
        height:300,
        resizeMode:'contain'}} />

    </View>
            
        )
    }
}

const styles = StyleSheet.create({
    card : 
    {

        backgroundColor:'#fff',
        marginTop:300,
        marginBottom:10,
        marginRight:'2%',
        marginLeft:'2%',
        width:'96%',
        shadowColor:'#000',
//        shadowOpacity:0,
        shadowRadius:1,
        shadowOffset:
        {
            width:3,
            height : 3
        }
       },

});
