import React, { Component } from 'react'
import {  
  Menu,
  Sidebar 
} from 'semantic-ui-react';

export default class SideBars extends Component {
  render() {
    return (
      <React.Fragment>
          <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={true}
        >
          <Menu.Item as='a'>Create</Menu.Item>
          <Menu.Item as='a'>Edit</Menu.Item>
          <Menu.Item as='a'>Update</Menu.Item>
          <Menu.Item as='a'>Delete</Menu.Item>
          <Menu.Item as='a'>Show</Menu.Item>
          <Menu.Item as='a'>Hidden</Menu.Item>
        </Sidebar>
      </React.Fragment>
    )
  }
}
