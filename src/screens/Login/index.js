import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Button, Item, Input, Icon, Form, Text, Header } from 'native-base';
import { LinearGradient } from 'expo';
import styles from './styles';

export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Header androidStatusBarColor='#000' style={{ display: 'none' }} />
        <LinearGradient
          colors={['#ff0000', '#ffae1a', '#02a6ff']}
          start={[1, 0]}
          end={[0, 1]}
          style={{ height: '100%' }}>
          <Content padder>
            <View style={styles.logo}>
              <Image source={require('../../../assets/logo.png')} />
            </View>
            <Form>
              <Item regular style={styles.formItem}>
                <Icon active name='person' style={styles.formIcon} />
                <Input placeholder={'User name'} style={styles.formInput} />
              </Item>
              <Item regular style={styles.formItem}>
                <Icon active name='lock' style={styles.formIcon} />
                <Input secureTextEntry placeholder={'Password'} style={styles.formInput} />
              </Item>
            </Form>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <Button bordered light onPress={() => this.props.navigation.navigate('Signup')}>
                <Text>Sign up</Text>
              </Button>
              <Button bordered light onPress={() => this.props.navigation.replace('Drawer')}>
                <Text>Sign in</Text>
              </Button>
            </View>
            <Button block primary iconLeft style={{ marginTop: 20 }}>
              <Icon active name='logo-facebook' />
              <Text>Signin with Facebook</Text>
            </Button>
            <Button block danger iconLeft style={{ marginTop: 10 }}>
              <Icon active name='logo-google' />
              <Text>Signin with Google</Text>
            </Button>
            <Button block info iconLeft style={{ marginTop: 10 }}>
              <Icon active name='logo-twitter' />
              <Text>Signin with Twitter</Text>
            </Button>
          </Content>
        </LinearGradient>
      </Container>
    );
  }
}
