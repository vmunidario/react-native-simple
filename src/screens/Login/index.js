import React, { Component } from "react";
import { Image, View } from 'react-native';
import {
  Container, Content, Button, Item, Input, Icon, Form, Text, Header
} from "native-base";
import { LinearGradient } from 'expo';

export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#000" style={{display:'none'}}/>
        <LinearGradient
          colors={['#ff0000', '#ffae1a', '#ffa630']} start={[1,0]} end={[0,1]} style={{ height:'100%' }}
        >
          <Content padder>
            <View style={{ padding: 20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../../assets/logo.png')} />
            </View>
            <Form>
              <Item regular style={{ height: 40, backgroundColor: '#ddd'}}>
                <Icon active name="person" style={{ backgroundColor: '#ddd', width: 40, textAlign: 'center' }}/>
                <Input placeholder={'User name'} style={{ backgroundColor: '#fff'}}/>
              </Item>
              <Item regular style={{ height: 40, marginVertical: 10, backgroundColor: '#ddd' }}>
                <Icon active name="lock" style={{ backgroundColor: '#ddd', width: 40, textAlign: 'center' }}/>
                <Input secureTextEntry placeholder={'Password'} style={{ backgroundColor: '#fff'}} />
              </Item>
            </Form>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <Button bordered light onPress={() => this.props.navigation.replace('Drawer')}>
                <Text>Sign up</Text>
              </Button>
              <Button bordered light onPress={() => this.props.navigation.replace('Drawer')}>
                <Text>Sign in</Text>
              </Button>
            </View>
            <Button block primary iconLeft style={{ marginTop: 20 }}>
              <Icon active name="logo-facebook" />
              <Text>Signin with Facebook</Text>
            </Button>
            <Button block danger iconLeft style={{ marginTop: 10 }}>
              <Icon active name="logo-google" />
              <Text>Signin with Google</Text>
            </Button>
            <Button block info iconLeft style={{ marginTop: 10 }}>
              <Icon active name="logo-twitter" />
              <Text>Signin with Twitter</Text>
            </Button>
          </Content>
        </LinearGradient>
      </Container>
    );
  }
}
