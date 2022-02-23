import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <input type='text' data-testid="name-input"/>
        </div>
        <div>
          <textarea data-testid="description-input"/>
        </div>
        <div>
          <input type='number' data-testid="attr1-input"/>
        </div>
        <div>
          <input type='number' data-testid="attr2-input"/>
        </div>
        <div>
          <input type='number' data-testid="attr3-input"/>
        </div>
        <div>
          <input type='text' data-testid="image-input"/>
        </div>
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <div>
          <input type='checkbox' data-testid="trunfo-input"/>
        </div>
        <div>
          <input type='button' data-testid="save-button"/>
        </div>
      </form>
    )

  }
}

export default Form;