import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled.jsx';

export class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements[1].value.trim();

    this.props.onSubmit(inputValue);
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
