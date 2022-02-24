import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <div>
          <h2>Nome</h2>
          <input
            name="name"
            type="text"
            testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <h2>Descrição</h2>
          <textarea
            name="description"
            testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <h2>Attr01</h2>
          <input
            type="number"
            name="attr1"
            testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <h2>Attr02</h2>
          <input
            type="number"
            name="attr2"
            testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <h2>Attr03</h2>
          <input
            type="number"
            name="attr3"
            testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <input
            type="text"
            name="image"
            testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <h2>Raridade:</h2>
          <select
            name="rare"
            testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>
        <div>
          <h2>Super Trybe Trunfo</h2>
          <input
            type="checkbox"
            name="trunfo"
            testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <button
            type="button"
            testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
          <p>{ hasTrunfo }</p>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
