import React,{Component} from 'react';
import { View,Text} from 'react-native';
import { Card } from 'react-native-elements';
import {LEADERS} from '../shared/leaders';

function RenderLeader(props) {
    const leader = props.leader;

    if(leader != null){
        return(
            
            <Card  featuredTitle={leader.name}
            image={require('./images/one.jpg')}>
            
            <Text style={{margin: 10}}>
                {leader.description}
            </Text>
            </Card>
        );
    }else{
        return(<View></View>);
    }
}


class LeadersDetail extends Component{
     constructor(props){
         super(props);
         this.state= {
             leaders: LEADERS
         };

     }

     static navigationOptions = {
        title: 'Leaders Details'
    };

    render(){
        const leaderId =  this.props.navigation.getParam('leaderId','');

        return(
            <View>
        <RenderLeader dish={this.state.leaders[+leaderId]}/>
        </View>
    );
    }
}

export default LeadersDetail;