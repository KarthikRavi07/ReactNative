import React,{Component} from 'react';
import { View,Text} from 'react-native';
import { Card } from 'react-native-elements';

class ContactUs extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'Contact us'
    };

    render(){
        return(
            <Card title="Contact Information">
            {/* <Text style={{textAlign:'center',fontWeight: 'bold',fontSize: 18}}> Contact Information </Text>
            <View style={{borderBottomColor: '#D5DBDB',borderBottomWidth: 1,marginTop:10}}/> */}
            <Text style={{marginTop:10}}> 121, Clear Water Bay Road </Text>
            <Text style={{marginTop:10}}>Clear Water Bay, Kowloon</Text>
            <Text style={{marginTop:10}}> HONG KONG </Text>
            <Text style={{marginTop:10}}> Tel: +852 1234 5678 </Text>
            <Text style={{marginTop:10}}> Fax: +852 8765 4321 </Text>
            <Text style={{marginTop:10}}> Email:confusion@food.net </Text>
            </Card>
        );
    }
}

export default ContactUs;