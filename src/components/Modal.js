import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.userName = this.userName.bind(this);
    this.createUser = this.createUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { show: false, user: '' }
  }

  createUser(e) {
    e.preventDefault();
    this.props.create(this.state.user);
    this.closeModal();
  }

  userName(e) {
    this.setState({ user: e.target.value });
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
          onHide={ this.closeModal }
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">What's Your Name?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You Will Be Seen As This User
            <br />
            <form onSubmit={this.createUser}>
              <input type='text' placeholder='Enter Your Username'
                onChange={this.userName}
                value={this.state.user}/>
              <button>Start</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
