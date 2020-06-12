import React, {Component} from 'react';

import {StyleSheet,View,Text,Button,FlatList} from 'react-native';
// import { List } from 'react-native-paper';


export default class list extends Component
{
    constructor(props)
{
    super(props);
    this.state = 
    {
        data :
        [
            {key : 'a' , name:'wow'},
            {key : 'b'},
            {key : 'c'},
            {key : 'd'},
            {key : 'e'},
            {key : 'f'},
            {key : 'g'},
            {key : 'h'},
            {key : 'i'},
            {key : 'j'},
            {key : 'k'},
            {key : 'l'},
            {key : 'm'},
            {key : 'n'},
            {key : 'o'},
            {key : 'p'},
            {key : 'q'},
            {key : 'r'},
            {key : 's'},
            {key : 't'},
            {key : 'u'},
            {key : 'v'},
            {key : 'w'},
            {key : 'x'},
            {key : 'y'},
            {key : 'z'},






        ]
    };
}
_renderItem = (data) =>
{
    return (
    <Text style={styles.row}> {data.item.key} </Text>
)} 

    render() 
    {
         return (
        <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
        </View> );
      } 
    
  }

  const styles = StyleSheet.create({ 
      
    container: 
    {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: "#dedede"
  },
  row: 
  { 
      fontSize: 24,
      fontFamily:'Iowan Old Style',
      padding: 60, 
      borderWidth: 3, 
      borderColor:'#edb30e',
      margin: 2
    }
});
// edb30e