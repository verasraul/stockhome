
export default function SearchInput(props){ 

    // const handelInput = (str) =>{
    //     str = str.toUpperCase()
    //     setStock(str)
    //     console.log('setStock =', stock)
    // }


return (
    <div className="search-section">
        <div>
            <label htmlFor="search-stock">Search by Company Name: </label>
            <br></br>
            <br></br>
            <input type="text" value={props.value} onChange={props.onChange} id="search-pane-input" placeholder="Search for Company"/>
        </div>

    </div>

);
}

 



