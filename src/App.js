import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '0',
      attr3: '0',
      image: '0',
      rare: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      deckCard: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.saveValidateButton());
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();

    const { trunfo } = this.state; // resolvida durante a monitoria;(25/02/2022)
    if (trunfo) {
      this.setState(({
        hasTrunfo: true,
      }));
    }

    this.setState((initState) => ({
      deckCard: [...initState.deckCard, initState],
    }), () => {
      this.setState({
        name: '',
        description: '',
        attr1: '0',
        attr2: '0',
        attr3: '0',
        image: '',
        rare: 'normal',
        trunfo: false,
        isSaveButtonDisabled: true,
      });
    });
  }

  saveValidateButton() {
    const {
      name,
      description,
      image,
      rare,
      attr1,
      attr2,
      attr3,
    } = this.state;
    this.setState({ isSaveButtonDisabled: true });

    const min = 0;
    const max = 90;
    const sum = 210;
    const attr1SUM = Number(attr1);
    const attr2SUM = Number(attr2);
    const attr3SUM = Number(attr3);
    const ATTRMAX = attr1SUM + attr2SUM + attr3SUM;

    const valSum = ATTRMAX <= sum;
    const valMax = attr1SUM <= max && attr2SUM <= max && attr3SUM <= max;
    const valMin = attr1SUM >= min && attr2SUM >= min && attr3SUM >= min;
    const valInput = !(!name || !description || !image || !rare);
    if (valInput && valSum && valMax && valMin) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      deckCard,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <div>
          {deckCard.map((card, index) => (
            <Card
              key={ index }
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.image }
              cardRare={ card.rare }
              cardTrunfo={ card.trunfo }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
