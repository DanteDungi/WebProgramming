import "../App.css";

function Header(props: any) {
    return (
        <header id="user">
            <h2>
                {props.FirstName} {props.LastName}
            </h2>
            <img id="image" src={props.Image} />
            <p>{props.Stats}</p>
        </header>
    )
}
export default Header;
