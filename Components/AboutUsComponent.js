import React,{Component} from 'react';
import { ScrollView,View,Text,FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';
import { Card } from 'react-native-elements';


class AboutUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            leader: LEADERS
        };
    }
    static navigationOptions = {
        title: 'About us'
    };
    render(){


        const renderMenuItem = ({item,index}) => {
            return (
                <ListItem 
                 key={index}
                 title ={item.name}
                 subtitle={item.description}
                 hideChevron={true}
                //  onPress={()=> navigate('LeadersDetail',{leaderId:item.id})}
                 leftAvatar={{ source: require('./images/one.jpg')}}
                 />
            );
        }
        const { navigate } =  this.props.navigation;


        return(
            <ScrollView>
                <Card>
                    <Text style={{textAlign:'center',fontWeight: 'bold',fontSize: 18}}> Our History </Text>
                    <View style={{borderBottomColor: '#D5DBDB',borderBottomWidth: 1,marginTop:10}}/>
                    <Text style={{margin: 10}}>
                    Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.

The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                    </Text>
                </Card>
         <Card title="Corporate Leadership" style={{marginLeft:10,marginRight:10}}>
         {/* <Text style={{textAlign:'center',fontWeight: 'bold',fontSize: 18}}> Corporate Leadership </Text>
            <View style={{borderBottomColor: '#D5DBDB',borderBottomWidth: 1,marginTop:10}}/> */}
         
                 <FlatList
            data={this.state.leader}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
            
            />
            </Card>
                  
            </ScrollView>
        );
    }
}

export default AboutUs;