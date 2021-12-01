import './styles.css';

export const Search  = (props) => {
    return (
        <input className="search-input" name="search" placeholder="search by name..." 
        type="text" onChange={props.handleSearchUpdate } />
    )
}