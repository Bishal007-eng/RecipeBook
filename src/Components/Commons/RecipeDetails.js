import React, { useEffect , useState } from 'react'
import { getRecipe } from '../Services/getRecipes';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Grid, Header, Image, Segment } from 'semantic-ui-react';

export default function RecipeDetails() {

  const[recipe , setRecipe] = useState({});

  const {recipeId} = useParams();

  useEffect(() => {
    const getData = async() => {
      let result = await getRecipe(recipeId);
      if(result && result.recipe){
        setRecipe(result.recipe);
      }
    }
    getData();
  },[])


  return (
   
    Object.keys(recipe).length > 0 ?
    <Container textAlign='justified'>      
      <Grid stackable columns={2} className='recipeDetails' style = {{marginLeft: 25}}> 

        <Grid.Column largeScreen>

          <Button
            icon = "left arrow"
            labelPosition='left'
            as={Link}
            to = {'/recipes'}
            content = "Return Back"
            color='green'
            size='large'
            style = {{marginBottom: 80}}
          />

          <Image 
            className='detailsImage'
            fluid
            label={{ as: 'a', color: 'green ', corner: 'right', icon: 'save', size: 'huge' }}
            src={recipe.image_url} 
            size='large' 
          />

        </Grid.Column>

        <Grid.Column style = {{marginTop: 50}}>

          <Header as='h1' size='huge'>{recipe.title}</Header>
          <p>Provided by: {recipe.publisher}</p>

          <Button
            as={'a'}
            href = {recipe.publisher_url}
            target = "_blank"
            content = "Publisher Page"
            color='#61677A'
            size='medium'
            style = {{marginBottom: 20, padding: 10}}
          />

          <Button
            as={'a'}
            href = {recipe.source_url}
            target = "_blank"
            content = "Source Page"
            color='#61677A'
            size='medium'
            style = {{marginBottom: 20, padding: 10}}
          />

          <Header size='large' content='Ingredients' />

          <Segment.Group>
            {
              recipe && recipe.ingredients.map(data => (
                <Segment>
                  <h4>{data}</h4>
                </Segment>
              ))
            }
          </Segment.Group>
          

        </Grid.Column>

      </Grid>
    </Container> : null
    
  )
}
