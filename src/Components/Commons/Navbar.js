import React from 'react'
import { Menu, Input } from 'semantic-ui-react'
import bookLogo from "../Images/bookLogo.jpg"

export default function Navbar() {
  return (
    <>
      <Menu borderless fixed='top' size='big'>
        <Menu.Item>
          <img src={bookLogo} alt="logo" style={{ width:"80px" , height:"65px"}} />
        </Menu.Item>
        <Menu.Item
          name='HOME'
        />
        <Menu.Item
          name='ABOUT'         
        />
        <Menu.Item
          name='RECIPES'          
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
