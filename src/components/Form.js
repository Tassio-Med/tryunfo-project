import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
        <label>
          Nome
          <input type='text'
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }/>
        </label>
        
        <label>
          Descrição
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }/>
        </label>

        <label>
          Attr01
          <input
            type='number'
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }/>
        </label>
        
        <label>
          Attr02
          <input
            type='number'
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }/>
        </label>
        
        <label>
          Attr03
          <input
            type='number'
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }/>
        </label>
        
        <label>
          <input
            type='text'
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }/>
        </label>

        <label>
          Raridade:
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }>

            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>

        </label>

        <label>
          Super Trybe Trunfo
          <input
            type='checkbox'
            data-testid="trunfo-input"
            checked={cardTrunfo}
            onChange={ onInputChange }/>
        </label>
        
          <button
            type='button'
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }>
          Salvar
          </button>
        
      </form>
    )

  }
}

Form.propTypes={
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
}.isRequired

export default Form;