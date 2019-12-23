import React, {useState, useEffect} from 'react';
import axios from 'axios';

// class ResourceList extends React.Component {
//   state = {
//     resources: [],
//   }

//   async componentDidMount() {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(prevProps) {
//     if(prevProps.resourceName !== this.props.resourceName) {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//       this.setState({ resources: response.data });
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.resources.map(resource => (
//           <li key={resource.id}>{resource.title}</li>
//         ))}
//       </ul>
//     )
//   }
// }
/**
 * 
 * @param {*} param0
 * Standard Hooks 
 */
const ResourceList = ({resourceName}) =>{

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

  return (
          <ul>
            {resources.map(resource => (
              <li key={resource.id}>{resource.title}</li>
            ))}
          </ul>
        )
}

export default ResourceList;
