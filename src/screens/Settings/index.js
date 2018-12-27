import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Body, Title, Left, Button, Icon, Content, Right, H2 } from 'native-base';
import mytheme from '../../theme/variables/mytheme';
import FadeInView from '../../components/FadeInView';

export default class SettingsScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header androidStatusBarColor={mytheme.brandDark} style={{backgroundColor: mytheme.brandDark}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <FadeInView duration={2000}>
            <H2>Settings screen........</H2>
            <Image source={require('../../../assets/web-cover1.jpg')} style={{height:400}}/>
          </FadeInView>
        </Content>
      </Container>
    );
  }
}
