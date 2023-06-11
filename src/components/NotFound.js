import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
            <Link to='/'>Home</Link>
                    </div> 
                    <div className="col">
            <Link to='/about'>About</Link>
                    </div>
                    <div className="col">
            <Link to='/search'>Search</Link>
                    </div>
                    <div className="col">
            <Link to='/movies/:id'>Movies</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}