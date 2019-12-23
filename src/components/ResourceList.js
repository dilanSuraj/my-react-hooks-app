import React from 'react';
import axios from 'axios';
import {useResources} from './WithHooks/useHooks.Extracted';

/**
 * 
 * @param {*} param0
 * Standard Hooks 
 */
  const ResourceList = ({resourceName}) =>{

  const resources = useResources(resourceName);

  return (
          <ul>
            {resources.map(resource => (
              <li key={resource.id}>{resource.title}</li>
            ))}
          </ul>
        )
}

export default ResourceList;
