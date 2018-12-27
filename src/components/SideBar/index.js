import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Text, List, ListItem, Icon, Container, Left, Right, Badge } from 'native-base';
import styles from './styles';

const drawerCover = require('../../../assets/drawer-cover.png');
const drawerImage = require('../../../assets/logo-kitchen-sink.png');
const datas = [
  {
    name: 'Accordion',
    route: 'Accordion',
    icon: 'flame',
    bg: '#C5F442',
  },
  {
    name: 'List',
    route: 'List',
    icon: 'list',
    bg: '#477EEA'
  },
  {
    name: 'Settings',
    route: 'Settings',
    icon: 'settings',
    bg: '#DA4437',
    types: '4',
  },
];

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  render() {
    return (
      <Container>
        <Content style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data => (
              <ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
                <Left>
                  <Icon active name={data.icon} style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {data.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        backgroundColor: data.bg,
                      }}>
                      <Text>{`${data.types}`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
