import { Link } from "react-router-dom"


export default function NotFound() {
    return (
        <div className="container">
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Go back to home</Link>
        </div>
    )
}