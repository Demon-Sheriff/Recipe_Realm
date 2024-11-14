import searchIcon from '../../assets/search.png'

const SearchBar = () => {
    return (
        <>  
            <button className="bg-base-100 flex justify-center items-center rounded-full h-10 w-10 hover:bg-amber-600">
                <img src={searchIcon} alt="Search Icon" className="object-cover h-5" />
            </button>
        </>
    );
}

export default SearchBar;