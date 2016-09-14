
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {
  StyleSheet,
  Container,
  Content,
  List,
  ListItem,
  Text
} from 'native-base';
import {fonts} from './Fonts';

class FontList extends Component {
  renderFonts() {
    var i=0
    return fonts.map((font) => {
      return <ListItem key={i++}><Text style={{fontFamily: font}}>{font}</Text></ListItem>
    });
  }

  render() {
    return (
      <Container>
        <Content style={{marginTop: 70, marginLeft: 20, marginRight: 20}}>
          <List>
            {this.renderFonts()}
          </List>
        </Content>
      </Container>
    );
  }
};

AppRegistry.registerComponent('FontList', () => FontList);
