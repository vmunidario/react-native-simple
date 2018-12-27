import React from 'react';
import { Button, Icon, Footer, FooterTab } from 'native-base';

export default class TabBar extends React.Component {

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical active={this.props.navigation.state.index === 0} onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="home" active={this.props.navigation.state.index === 0}/>
          </Button>
          <Button vertical active={this.props.navigation.state.index === 1} onPress={() => this.props.navigation.navigate('Map')}>
            <Icon name="map" active={this.props.navigation.state.index === 1}/>
          </Button>
          <Button vertical active={this.props.navigation.state.index === 2} onPress={() => this.props.navigation.navigate('Map')}>
            <Icon name="headset" active={this.props.navigation.state.index === 2}/>
          </Button>
          <Button vertical active={this.props.navigation.state.index === 3} onPress={() => this.props.navigation.navigate('Settings')}>
            <Icon name="logo-apple" active={this.props.navigation.state.index === 3}/>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
