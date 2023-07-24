import React from 'react'
import Header from '../Commons/Header'
import { Button } from 'semantic-ui-react'

export default function Home() {
  return (
    <div>
      <Header title="Our Recipes" bgClass="bg-image">
        <Button 
          content="Search Recipes"
          color='green'
          size='huge'
        />
      </Header>
    </div>
  )
}
