import React, { Component } from "react";
import { Container, Header, Title, Card, CardItem, View, Button, Text, Left, Icon, Body, Right } from "native-base";
import { StackNavigator } from "react-navigation";
import CounterStore from "../store/counterStore"
import { observer } from 'mobx-react';

@observer export default class Counter extends Component {
  render() {
    return (
      <Container>
        <View>
          <Text>
            {CounterStore.counter}
          </Text>
        </View>
        <View>
          <Button primary block onPress= {() => CounterStore.increment()}>
            <Text>Increment</Text>
          </Button>
          <Button primary block onPress= {() => CounterStore.decrement()}>
            <Text>Decrement</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
Counter.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Counter</Title>
      </Body>
      <Right />
    </Header>
  )
});