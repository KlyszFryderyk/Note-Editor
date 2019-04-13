import React from 'react';
import { Grid, Image, TextArea, List, Segment, Button, Form } from 'semantic-ui-react'
import logo from './logo.png'
import { styles } from './App.module.scss'
import Forms from './Forms/Forms'


class App extends React.Component {

  state = {
    title: '',
    description: '',
    notes: [{
      title: 'first',
      description: 'something'
    },
    {
      title: 'second',
      description: 'else'
    },
    {
      title: 'third',
      description: 'and else'
    }]
  }



  changeText = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  submitText = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      title: '',
      description: '',
      notes: [...prevState.notes,
      {
        title: this.state.title,
        description: this.state.description
      }]
    }));
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
 }

 componentDidUpdate() {
   localStorage.setItem("notes", JSON.stringify(this.state.notes));

 }
  componentDidMount() {
    let notes = localStorage.getItem('notes');
    notes = JSON.parse(notes);
    this.setState({ notes });

  }

  removeText = (row) => {
    const newNotes = this.state.notes.filter((note) => {
      return note !== row
    });
    this.setState({
      notes: newNotes
    });
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };


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
                    {this.state.notes.map(note => {
                      return <List.Content key={note.title}>
                        <List.Header>{note.title}</List.Header>
                        {note.description}
                        <Button onClick={this.removeText.bind(this, note)} type='submit'>Remove a note</Button>
                      </List.Content>
                    })}
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Forms submitFn={this.submitText} clearTitle={this.state.title} clearDescription={this.state.description} changeFn={this.changeText} title={this.state.title} description={this.state.description} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
};

export default App;


