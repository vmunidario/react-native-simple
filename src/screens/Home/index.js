import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, ImageBackground, Dimensions } from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  H3,
  H2,
  Header,
  Left,
  Right,
  Card,
  CardItem,
  Thumbnail,
  Body,
} from 'native-base';
import mytheme from '../../theme/variables/mytheme';

const window = Dimensions.get('window');
const HeadToolbar = props => {
  return (
    <Header androidStatusBarColor={mytheme.brandDark} noShadow style={{ backgroundColor: 'transparent' }}>
      <Left>
        <Button transparent onPress={() => props.navigation.openDrawer()}>
          <Icon name='menu' />
        </Button>
      </Left>
      <Right>
        <Button transparent>
          <Icon name='search' />
        </Button>
      </Right>
    </Header>
  );
};

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../../../assets/launchscreen-bg.png')}
          style={{ width: window.width, height: window.height - mytheme.footerHeight }}>
          <HeadToolbar {...this.props} />

          <Content padder>
            <Button info rounded iconRight onPress={() => this.props.navigation.navigate('Map')}>
              <Text>Open map</Text>
              <Icon name='arrow-forward' />
            </Button>
            <H2 style={{ color: '#ff5500' }}>
              Home screen!! Home screen!!Home screen!!Home screen!!Home screen!!Home screen!!Home screen!!Home screen!!
              Home screen!!Home screen!!Home screen!!Home screen!!Home screen!!
            </H2>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../assets/logo.png')} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image
                    source={require('../../../assets/web-cover1.jpg')}
                    style={{ height: 200, width: '100%', flex: 1 }}
                  />
                  <Text />
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: '#87838B' }}>
                    <Icon name='logo-github' />
                    <Text>1,926 stars</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../assets/logo.png')} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image
                    source={require('../../../assets/web-cover1.jpg')}
                    style={{ height: 200, width: '100%', flex: 1 }}
                  />
                  <Text />
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: '#87838B' }}>
                    <Icon name='logo-twitter' />
                    <Text>1,926 stars</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
