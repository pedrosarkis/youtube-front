import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
    test('Button send a request when clicked', () => {
        const onClick = jest.fn();
        const { getByText } = render(<SearchBar setQ={() => {}} searchVideos={onClick} q='Eminem'/>);
        fireEvent.click(getByText(/^Search$/i));
        expect(onClick).toHaveBeenCalled();
    })

    test('Search Input change value on user typing', () => {
        const onChangeMock = jest.fn();
        const { getByTestId } = render(<SearchBar setQ={onChangeMock} searchVideos={() => {}} q='Eminem'/>);
        const inputField = getByTestId('input');
       
        fireEvent.change(inputField, { target: { value: 'Eminem' } });

        expect(onChangeMock).toHaveBeenCalledWith('Eminem');
    })
})