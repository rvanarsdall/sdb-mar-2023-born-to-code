import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { studentInformation } from "./student-info";
import { urlBuilder } from "../helper/urlBuilder";

const SideBar = (props) => {
  return (
    <>
      <ListGroup className="mt-5">
        <ListGroupItem>
          <NavLink to={"/"}>View All Students</NavLink>
        </ListGroupItem>
        {studentInformation.map((student, index) => (
          <ListGroupItem key={index}>
            <NavLink to={`/${urlBuilder(student.name)}`}>
              {student.name}
            </NavLink>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default SideBar;
