import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="login" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 10a1 1 0 1 0-2 0zM6 10a1 1 0 0 0-2 0zm14.293 2.707a1 1 0 0 0 1.414-1.414zM12 3l.707-.707a1 1 0 0 0-1.414 0zm-9.707 8.293a1 1 0 1 0 1.414 1.414zM7 22h10v-2H7zm13-3v-9h-2v9zM6 19v-9H4v9zm15.707-7.707l-9-9l-1.414 1.414l9 9zm-10.414-9l-9 9l1.414 1.414l9-9zM17 22a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM7 20a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3z"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link className="link" to="get">
            GET
          </Link>
        </li>
        <li>
          <Link className="link" to="post">
            POST
          </Link>
        </li>
        <li>
          <Link className="link" to="put">
            PUT
          </Link>
        </li>
        <li>
          <Link className="link" to="delete">
            DELETE
          </Link>
        </li>
        <li>
          <Link className="link" to="search">
            SEARCH
          </Link>
        </li>
        <li>
          <Link className="link" to="userdetails">
            DETAILS
          </Link>
        </li>
        <li>
          <Link className="link" to="updateuser">
            UPDATE
          </Link>
        </li>
        <li>
          <Link className="link" to="gorestapi-get">
            GO GET
          </Link>
        </li>
        <li>
          <Link className="link" to="gorestapi-post">
            GO POST
          </Link>
        </li>
        <li>
          <Link className="link" to="project-1">
            DEMO 1
          </Link>
        </li>
        <li>
          <Link className="link" to="project-2">
            DEMO 2
          </Link>
        </li>
        <li>
          <Link className="link" to="btn">
            BTN
          </Link>
        </li>
        <li>
          <Link className="login" to="login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};
