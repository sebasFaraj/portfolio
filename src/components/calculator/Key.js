export const Key = (props) =>
{
    return (
        <button className = "key" onClick = {() => {props.updateByKey(props.value)}}>
            <span className = "keyText"> {props.value} </span>
        </button>
    )
}