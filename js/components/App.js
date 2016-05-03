import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import restructured from 'restructured';

import ReST from './ReST';
import ReSTTextField from './ReSTTextField';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { element: restructured.parse(props.text) };
  }

  onTextChange(event) {
    this.setState({ element: restructured.parse(event.target.value) });
  }

  render() {
    return (
      <Grid>
        <Row>
          <AppBar title="reStructuredText parser demo" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        </Row>
        <Row>
          <Col xs={6}>
            <ReSTTextField defaultValue={this.props.text} onChange={(event) => { this.onTextChange(event); }} />
          </Col>
          <Col xs={6}>
            <ReST element={this.state.element} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  text: React.PropTypes.string.isRequired,
};
