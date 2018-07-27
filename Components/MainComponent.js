import React,{Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import ContactUs from './ContactUSComponent'
import DishDetail from './DishdetailComponent';
// import LeadersDetail from './LeadersComponent';
import {Text,View,Platform,Image,StyleSheet,ScrollView} from 'react-native';
import { createStackNavigator,createDrawerNavigator,DrawerItems,SafeAreaView } from 'react-navigation'; 
import {Icon} from 'react-native-elements';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu ,
    navigationOptions: ({ navigation })=>({
        headerLeft: <Icon name='menu' size={24}
        color='white'
        onPress = {()=> navigation.toggleDrawer()
        }/>
    })
},
    DishDetail: { screen: DishDetail }
},{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle : {
            backgroundColor: '#212F3C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle:{
            color: '#ffffff'
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },

},{
    navigationOptions: ({ navigation })=>({
        headerStyle : {
            backgroundColor: '#212F3C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle:{
            color: '#ffffff'
        },
        headerLeft: <Icon name='menu' size={24}
        color='white'
        onPress = {()=> navigation.toggleDrawer()
        }/>
    })
});

const AboutUsNavigator = createStackNavigator({
    AboutUs: { screen: AboutUs },
    // LeadersDetail: { screen: LeadersDetail }

},{
    navigationOptions: ({ navigation })=>({
        headerStyle : {
            backgroundColor: '#212F3C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle:{
            color: '#ffffff'
        },
        headerLeft: <Icon name='menu' size={24}
        color='white'
        onPress = {()=> navigation.toggleDrawer()
        }/>
    })
});

const ContactUsNavigator = createStackNavigator({
    ContactUs: { screen: ContactUs },

},{
    navigationOptions: ({ navigation })=>({
        headerStyle : {
            backgroundColor: '#212F3C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle:{
            color: '#ffffff'
        },
        headerLeft: <Icon name='menu' size={24}
        color='white'
        onPress = {()=> navigation.toggleDrawer()
        }/>
    })
});


const CustomDrawerNavigator = (props) =>(
<ScrollView>
    <SafeAreaView style={styles.container}
    forceInset={{top: 'always',horizontal: 'never'}}>
    <View style={styles.drawerHeader}>
    <View style={{flex:1}}>
    <Image source={require('./images/one.jpg')}
    style={styles.drawerImage}/>
    </View>
    <View style={{flex: 2}}>
    <Text style={styles.drawerHeaderText}>Lorem Ipsum </Text>
    </View>
        </View>
        <DrawerItems {...props}/>
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
  Home:{
      screen: HomeNavigator,
      navigationOptions:{
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({tintColor}) => (
            <Icon
            name='home'
            type='font-awesome'
            size={24}
            color={tintColor}/>
          )
      }
  },
  Menu:{
    screen: MenuNavigator,
    navigationOptions:{
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon: ({tintColor}) => (
            <Icon
            name='list'
            type='font-awesome'
            size={24}
            color={tintColor}/>
          )
    }
  },
  AboutUs:{
    screen: AboutUsNavigator,
    navigationOptions:{
        title: 'About us',
        drawerLabel: 'About us',
        drawerIcon: ({tintColor}) => (
            <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}/>
          )
    }
  },
  ContactUs:{
    screen: ContactUsNavigator,
    navigationOptions:{
        title: 'Contact us',
        drawerLabel: 'Contact us',
        drawerIcon: ({tintColor}) => (
            <Icon
            name='address-card'
            type='font-awesome'
            size={22}
            color={tintColor}/>
          )
    }
  }
},{
    drawerBackgroundColor: '#ffffff',
    contentComponent: CustomDrawerNavigator
});

class Main extends Component{
// constructor(props){
//     super(props);
//     this.state = {
//         dishes: DISHES,
//         selectedDish: null
//     };
// }

// onDishSelect(dishId){
//     this.setState({selectedDish:dishId});
// }
render(){
    return(
        <View style={{ flex:1,paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
</View>
    );
}
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    drawerHeader:{
        backgroundColor: '#212F3C',
        height:140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage:{
        margin:10,
        width: 80,
        height: 60

    }
})

export default Main;