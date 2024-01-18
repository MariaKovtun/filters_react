
const Toolbar = (props) => {
    return <div>
        {props.filters.map( (filter,index) => 
        <button className={filter == props.selected ? "active":""} key={index} onClick={props.onSelectFilter}>{filter}</button>)}
    </div>
}

export default Toolbar