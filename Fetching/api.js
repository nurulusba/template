import React , {Component} from 'react';
import {View,StyleSheet,Text,TouchableOpacity,FlatList} from 'react-native';


 export default class api extends Component
 {

    state = {
        data : []
    };
    
    componentWillMount() 
    {
        this.fetchData();
    }
fetchData = async () =>
{
    const response = await fetch('https://randomuser.me/api?results=30');
    const json = await response.json();
    this.setState({data : json.results})
}

   render() {
       return (
           <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:100}}>
               <FlatList 
               data={this.state.data}
               keyExtractor={(x,i) => i}
               renderItem={({item}) =>
            <Text style = {{borderColor:'black'}} >
        {`${item.name.first} ${item.name.last}`}
            </Text>}
               />

           </View>
       )
           
       }
    }

