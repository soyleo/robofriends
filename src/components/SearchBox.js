import './SearchBox.css'

const SearchBox = ({ searchfield, searchChange}) =>{
    return (
        <div className='pa2 tc'>
            <input className='pa3 ba b--hot-pink bg-lightest-pink br3' type='search' placeholder='Search Robots' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;