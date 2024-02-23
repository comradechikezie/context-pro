import React, {useContext} from 'react';
import {AuthContext} from "../../../context/authContext";


const Content = () => {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <div style={{textAlign: "center"}}>
            {isAuthenticated ? (
                <p>Welcome to Social Plus</p>
            ) : (
                <p> Sorry you may need to login</p>
            )}
        </div>
  );
};

export default Content;