import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'
import RecipeItems from './RecipeItems'

export default function RecipeList({recipes , searchedQuery}) {
  return (
    <Container>
      <Header 
        size='huge'
        content={`Recipe List for ${searchedQuery}`} 
        textAlign='center'
      />
      <Grid columns={3} doubling className='recipeDesc' >
        {
          recipes && recipes.map(recipes => (
            <Grid.Column>
              <RecipeItems recipes={recipes} />
            </Grid.Column>
          ))
        }
      </Grid>
    </Container>
  )
}
