import React from "react";
import { ListGroup } from 'react-bootstrap';



const UserList = ({ listOfUSer }) => {
    return (
        <div className="liste">
            <ListGroup variant="flush">
                {listOfUSer.map((user) => (
                    <div className="list">
                        <ListGroup.Item style={{ backgroundColor: "#fbc108" }}>
                            <span style={{ fontSize: "30px" }}>Name: </span>{user.name}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#072f54" }}>
                            <span style={{ fontSize: "30px" }}>UserName: </span>{user.username}
                        </ListGroup.Item>
                    </div>
                ))}
            </ListGroup>
        </div>
    )
}



export default UserList