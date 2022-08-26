import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import {
  Header,
  Input,
  Label,
  SearchForm,
  SubmitButton,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit, onClick }) => {
  const [searchStr, setSearchStr] = useState('');

  const exportData = e => {
    e.preventDefault();
    if (searchStr.trim() === '') {
      Notify.failure('Please enter something in search field');
      return;
    }
    onSubmit(searchStr);
    resetCurrInput();
  };
  const updateCurrState = e => {
    const { value } = e.currentTarget;
    setSearchStr(value);
  };
  const onClickSearchbar = () => {
    onClick();
  };
  function resetCurrInput() {
    setSearchStr('');
  }

  return (
    <Header>
      <SearchForm onSubmit={exportData}>
        <SubmitButton type="submit">
          <Label>Search</Label>
        </SubmitButton>

        <Input
          type="text"
          name="searchStr"
          value={searchStr}
          onChange={updateCurrState}
          onClick={onClickSearchbar}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

SearchBar.protoType = {
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
