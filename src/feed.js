import React,{Component} from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

import {styles} from './styles/styles';

class Feed extends Component
{
    render()
    {
        return(
            <View style={styles.center}>
                <Text style={styles.title}>Navigation Drawer</Text>
            <Button
            title='Go To Feed Item'
            onPress={() => this.props.navigation.navigate('Detail' , {name:'this is parameter'} )}
            />
            </View>
        );
    }
}

export default Feed;