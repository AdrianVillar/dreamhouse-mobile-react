'use strict';

var React = require('react-native');
var {
    View,
    Navigator,
    StatusBar
} = React;

import SideMenu from 'react-native-side-menu';
import routes from './routes';
import PropertyList from './PropertyList';
import styles from './styles';
import MainMenu from './MainMenu';
import NavigationBarRouteMapper from './NavBar/mapper';
import {QueryCounter} from 'react.force.data';


module.exports = React.createClass({

  getInitialState() {
    return {
      isOpen:false,
      navigator:null
    };
  },

  handleMenuPress(route) {
    this.setState({isOpen:false});
    this.state.navigator.replace(route);
  },

  componentDidMount(){
    StatusBar.setBarStyle('light-content', true);
  },

  router(route, navigator) {
    this.state.navigator = navigator;
    const r = routes[route.name];
    if(r && r.comp){
      return (
        <View style={styles.page}>
          <r.comp route={route} navigator={navigator} />
        </View>
      );
    }
    return (
      <View style={styles.page}>
        <initialRoute.comp route={route} navigator={navigator} />
      </View>
    );
  },

  handleMenuOpen(){
    this.setState({isOpen:true});
  },

  render() {
    return (
      <SideMenu 
        isOpen={this.state.isOpen}
        menu={<MainMenu onMenuPress={this.handleMenuPress} />}>
        <Navigator
            style={styles.container}
            configureScene={() => Navigator.SceneConfigs.PushFromRight}
            initialRoute={routes['propertyList']}
            renderScene={this.router}
            navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper({onMenuOpen:this.handleMenuOpen})} style={styles.navbar}/>}
        />
{/*
        <QueryCounter />
*/}

      </SideMenu>
    );
  }
});


