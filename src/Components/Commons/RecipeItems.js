import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'

export default function RecipeItems( {recipes} ) {
  return (
    <Card style={{height: 430}}> 
      <img src={recipes.image_url} alt="RecipeImage" style={{height: 220 , padding: '5px 5px'}}/>

      <Card.Content style={{marginTop: 20}}>
        <Card.Header content = {recipes.title} />
        <p>Rating: {Math.floor(recipes.social_rank * 100) / 100}% </p>

        <Card.Description>
          <h4>{recipes.publisher}</h4>  
        </Card.Description>

      </Card.Content>

      <Card.Content>
        <Button 
          as = {Link}
          to = {`/recipe/${recipes.recipe_id}`}
          content = 'Details'
          color='green'
          size='large'
        />
        
        <Button 
          href = {recipes.source_url}
          target = '_blank'
          content = 'Source'
          color='orange'
          size='large'
        />
      </Card.Content>
    </Card>
  )
}
