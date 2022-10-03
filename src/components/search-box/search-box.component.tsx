import { ChangeEvent } from 'react';

import './search-box.style.css';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangehandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, placeholder, onChangehandler}: SearchBoxProps) => (
    <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder} 
        onChange={onChangehandler} 
    />
);

export default SearchBox;