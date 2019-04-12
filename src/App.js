import React from 'react';
import { Grid, Image, TextArea, List, Segment, Button, Form } from 'semantic-ui-react'
import logo from './logo.png'
import { styles } from './App.module.scss'
import Forms from './Forms/Forms'


class App extends React.Component {

  state = {
    title: '',
    description: ''
  }

  changeText = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitText = (e) => {
    e.preventDefault();
    console.log('it works!');
    const form = {
      title: this.state.title,
      description: this.state.description
     }
    this.setState({
      title: '',
      description: ''
    });
    console.log(this.state.title);
    console.log(this.state.description);

  }

  render() {
    return (
      <>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Grid>
                <Grid.Column >
                  <Image src={logo} />
                </Grid.Column>
              </Grid>

              <Segment inverted>
                <List divided inverted relaxed>
                  <List.Item>
                    <List.Content>
                      <List.Header>{this.state.title}</List.Header>
                      {this.state.description}
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Forms submitFn={this.submitText} changeFn={this.changeText} title={this.state.title} description={this.state.description} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
};

export default App;


