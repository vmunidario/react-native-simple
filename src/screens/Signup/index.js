import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Button, Item, Input, Icon, Form, Text, Header, H2, Left, Right } from 'native-base';
import { LinearGradient } from 'expo';
import styles from './styles';

export default class SignupScreen extends Component {
  render() {
    return (
      <Container>
        <LinearGradient
          colors={['blue', 'green', 'cyan']}
          start={[1, 0]}
          end={[0, 1]}
          style={{ height: '100%' }}>
          <Header androidStatusBarColor='#000' noShadow style={{ backgroundColor: 'transparent' }}>
            <Left>
              <Button transparent light onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back'/>
              </Button>
            </Left>
            <Right/>
          </Header>

          <Content padder>
            <View>
              <H2 style={{ color: '#fff', fontWeight: 'bold' }}>SIGN UP</H2>
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
            <View style={{ flex: 1, marginTop: 15 }}>
              <Button block primary style={{ marginTop: 20 }}>
                <Text>Sign up</Text>
              </Button>
            </View>
          </Content>
        </LinearGradient>
      </Container>
    );
  }
}
