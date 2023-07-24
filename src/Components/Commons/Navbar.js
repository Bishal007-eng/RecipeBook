import React from 'react'
import { Menu, Input } from 'semantic-ui-react'
import bookLogo from "../Images/bookLogo.jpg"

export default function Navbar() {
  return (
    <>
      <Menu borderless fixed='top'>
        <Menu.Item>
          <img src={bookLogo} alt="logo" style={{ width:80 , height:65}} />
        </Menu.Item>
        <Menu.Item
          name='Home'
        />
        <Menu.Item
          name='About'
        />
        <Menu.Item
          name='Recipes'
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
     </>
  )
}
