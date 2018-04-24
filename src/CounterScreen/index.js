import React, { Component } from "react";
import Counter from "./Counter.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Counter: { screen: Counter }
}));