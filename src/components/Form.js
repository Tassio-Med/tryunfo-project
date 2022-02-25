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

    const datacheck = (
      <input
        id="trunfo"
        name="trunfo"
        type="checkbox"
        data-testid="trunfo-input"
        value={ cardTrunfo }
        onChange={ onInputChange }
        checked={ cardTrunfo }
      />
    );

    const trunfoAlert = ('Você já tem um Super Trunfo em seu baralho');

    return (
      <form>
        <div>
          <h2>Nome</h2>
          <Input
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
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <h2>Attr01</h2>
          <input
            type="number"
            name="attr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <h2>Attr02</h2>
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <h2>Attr03</h2>
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <input
            type="text"
            name="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>
        <h2>Raridade:</h2>
        <div>
          <select
            name="rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>

          {hasTrunfo ? trunfoAlert : datacheck}

        </div>
        <div>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
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
