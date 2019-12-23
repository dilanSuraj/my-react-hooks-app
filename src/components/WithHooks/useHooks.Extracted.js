import React, {useState, useEffect} from 'react';
import axios from 'axios';

/**
 * 
 * @param {*} param0 
 * Custom hook
 */

 export const useResources = (resourceName) =>{

  const [resources, setResources] = useState([]);

  const fetchResourceList = async (resourceName) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
    setResources(response.data);
  }
   /**
   * Format of a hook
   */
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input])

  useEffect ( () => {
    fetchResourceList(resourceName)
  }, [resourceName]) 

  return resources;

 }