import React from 'react';

import {useResources} from './WithHooks/useHooks.Extracted';

const  Users = () =>{
    const users = useResources('users');

    return (
        <ul>
          {users.map(resource => (
            <li key={resource.id}>{resource.title}</li>
          ))}
        </ul>
      )
}

export default Users;