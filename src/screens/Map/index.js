import { Container, Header, Left, Button, Icon, Body, Right, Content, Title, View, Text } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import { MapView } from 'expo';
import mytheme from '../../theme/variables/mytheme';
const Window = Dimensions.get('window');

export default class MapScreen extends React.Component {
  state = {
    map: {}
  }

  render() {
    return (
      <Container>
        <Header androidStatusBarColor='#000' style={{backgroundColor:'#000'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Map</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <MapView
            style={{ flex: 1, height: Window.height - mytheme.footerHeight - 300 }}
            loadingEnabled
            initialRegion={{
              latitude: -22.7116573,
              longitude: -47.6406056,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={(e) => this.setState({ map: e.nativeEvent })}
          />

          <View>
            <Text>{JSON.stringify(this.state.map)}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
