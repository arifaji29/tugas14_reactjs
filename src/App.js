import React from 'react';

import { Grid, Form, Feed, Button, Header, Comment, Divider, Segment, Input, Search, Container, Icon, Dimmer, Label, Loader, Image, Placeholder, List, Table, Menu } from "semantic-ui-react";

function App() {
  return (
    <>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Container textAlign='center'>
              <Icon name='search' size='huge' />
              <h3>Cari Dokumen</h3>
              <Search placeholder='Search...' />
            </Container>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Container textAlign='center'>
              <Icon name='file pdf' size='huge' />
              <h3>Tambah Document Baru</h3>
              <Button primary>Create Document</Button>
            </Container>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>

      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid>

      {/* <Grid columns={2} >
        <Grid.Column> */}
      <br>
      </br>
      <Container textAlign='center'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Grid.Column>
                  <Container textAlign='right'>
                    <Search placeholder='Search...' />
                  </Container>
                </Grid.Column>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Nama Document</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Jenis File</Table.HeaderCell>

            </Table.Row>
          </Table.Header>



          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>pdf</Table.Cell>

            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell>pdf</Table.Cell>

            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React JS</Table.Cell>
              <Table.Cell>pdf</Table.Cell>

            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
      {/* </Grid.Column>
      </Grid> */}


      <br>
      </br>
      <Grid>
        <Grid.Column floated='left' width={5}>
          <Container textAlign='right'>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date>3 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>


              <Feed.Event>
                <Feed.Label>
                  <Icon name='pencil' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>Today</Feed.Date>
                  <Feed.Summary>
                    You submitted a new post to the page 
                  </Feed.Summary>
                  <Feed.Extra text>
                   Saya senang belajar bahasa pemrrograman
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>


              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                <Feed.Content>
                <Feed.Date>4 days ago</Feed.Date>
                  <Feed.Summary>
                    <a>David</a> added <a>2 new images</a>
                  </Feed.Summary>
                  <Feed.Extra images>
                    <a>
                      <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                    </a>
                    <a>
                      <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />2 Like
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

            </Feed>
          </Container>
        </Grid.Column>

        <Grid.Column floated='right' width={5}>
        <Container>
        <List>
            <List.Item>
              <List.Header>
                Website Terkait
              </List.Header>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.google.com'>Google</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Facebook.com'>Facebook</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.semantic-ui.com'>semantic ui</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.niomic.id'>Niomic</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Reactjs.org'>React</a>
              </List.Content>
            </List.Item>
          </List>
        </Container>
        </Grid.Column >


      </Grid>

    </>
  );
}

export default App;
