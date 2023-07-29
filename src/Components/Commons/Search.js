import React, {useState} from 'react'
import { Grid , Form , Input } from 'semantic-ui-react'

export default function Search( {setSearchedQuery} ) {

  const [value, setValue] = useState("");

  const onFormSubmit = () => {
    setSearchedQuery(value);
  }


  return (
    <>
      <Grid columns={2} textAlign='center' className='searchBox'>
        <Grid.Column>
          <h1 className='headingSearch'>Start Making Amazing foods with our <br /> <span style={{color: "#35A29F"}}>Recipe Book</span></h1>
          <h3 className='searchNote'>Input your search separated by Comma</h3>

          <h4 className='note'>Note: You can have Multiple Inputs</h4>

          <Form onSubmit={onFormSubmit}>
            <Input fluid
              color='teal'
              icon='edit outline' 
              iconPosition='left'
              placeholder = "Onion, Cabbage, Tomato, Pizza, Dumplings etc."
              size='huge'
              onChange={(e) => setValue(e.target.value)}
              value = {value}
            />
          </Form>
        </Grid.Column>
      </Grid>
    </>
  )
}
