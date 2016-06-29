import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false }
  }

  closeModal() {
    let show = false;
    this.setState({ show: show })
  }

  render() {
    return (
      <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Let's Get Started!
        </Button>

        <Modal
          show={ this.state.show }
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">What's Your Name?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please Enter Your Username
            <br />
            <input placeholder='username' />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
