import React, { Component } from 'react';
import { Container, Header, Content, Accordion, Left, Right, Body, Title, Icon, Button } from 'native-base';
import mytheme from '../../theme/variables/mytheme';
const dataArray = [
  { title: 'First Element', content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
];
export default class AccordionScreen extends Component {
  render() {
    return (
      <Container>
        <Header androidStatusBarColor={mytheme.brandDark} style={{backgroundColor: mytheme.brandDark }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Accordion</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <Accordion 
            dataArray={dataArray} 
            expanded={0} 
            headerStyle={{ backgroundColor: mytheme.brandInfo, borderRadius: 5 }}
            />
        </Content>
      </Container>
    );
  }
}
