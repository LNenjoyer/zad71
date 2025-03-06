import PropTypes from 'prop-types';
const List = ({ items, heading }) => { 
    return ( 
        <div> 
            <h2>{heading}</h2> 
            <ul> 
                
                {items.map((item, index) => ( 
                    <li key={index}>{item}</li> 
                ))} 
            </ul> 
        </div> 
    ); 
}; 
List.propTypes={
    heading:PropTypes.string,
    items:PropTypes.string,
}
List.defaultProps = {
    heading: "Heading",
    items: ["Brak elementów do wyświetlenia"],
}

export default List