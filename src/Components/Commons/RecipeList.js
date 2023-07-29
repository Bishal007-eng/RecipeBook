import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

export default function RecipeList({recipes , searchedQuery}) {
  return (
    <Container>
      <Header 
        size='huge'
        content={`Recipe List for ${searchedQuery}`}
        textAlign='center'
      />
      <Grid columns={4} doubling stackable padded>
        {
          recipes && recipes.map(recipes => (
            <Grid.Column>
              hello
            </Grid.Column>
          ))
        }
      </Grid>
    </Container>
  )
}
