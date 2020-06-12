import React,{Component} from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

import {styles} from './styles/styles';

class Detail extends Component
{
    render()
    {
        return(
            <View style={styles.center}>
                <Text style={styles.title}> {this.props.route.params.name} </Text>
            <Button
            title='View Bottom Tabs'
            onPress={() => this.props.navigation.navigate('Bottom')}
            />
            <Button
            title='View Top Tabs'
            onPress={() => this.props.navigation.navigate('Top', {screenName:'Noor'})}
            />
            </View>
        );
    }
}

export default Detail;