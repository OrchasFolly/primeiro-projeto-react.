import './ButtonPrimary.css'

function ButtonPrimary({title, anyEvent = () => {}}){
    return (
        <button type="button" onClick={anyEvent}>{title}</button>
    );
}

export default ButtonPrimary