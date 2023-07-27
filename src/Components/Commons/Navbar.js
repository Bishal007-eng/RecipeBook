import React from 'react'
import { Menu, Input } from 'semantic-ui-react'
import bookLogo from "../Images/bookLogo.jpg"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <Menu borderless fixed='top' size='huge'>
        <Menu.Item>
          <img src={bookLogo} alt="logo" style={{ width:"80px" , height:"65px"}} />
        </Menu.Item>
        <Menu.Item
          name='HOME'
          as={Link} 
          to="/"
        />
        <Menu.Item
          name='ABOUT'
          as={Link} 
          to="/About"         
        />
        <Menu.Item
          name='RECIPES'
          as={Link} 
          to="/Recipes"          
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
