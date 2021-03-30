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
})