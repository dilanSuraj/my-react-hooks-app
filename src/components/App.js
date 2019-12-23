import React, {useState} from 'react';

import ResourceList from './ResourceList';
import Users from './Users';
// class App extends React.Component {
//   state = {
//     resourceName: 'posts'
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={() => this.setState({ resourceName: 'posts' })}>Posts</button>
//         <button onClick={() => this.setState({ resourceName: 'todos' })}>Todos</button>
//         <ResourceList resourceName={this.state.resourceName}/>
//       </React.Fragment>
//     )
//   }
// }

const App = () =>{
    /**
     * Name of the state variable and the setter function which changes the state
     */
    const [resourceName, setResourceName] = useState('posts');

    /**
     * Array destruction
     */
    // const arr = [1,2,3];
    // const first = arr[0];
    // const second = arr[1];
    // const third = arr[2];

    // const [first, second] = arr;
    // first = 1, second = 2 
    /**
     * resourceName === currentstate of the resourceName
     * setResourceName === function that changes the current state of the resourceName 
     * useState which initilizes the state
     */ 

        return (
          <React.Fragment>
            <Users/>
            <button onClick={() => setResourceName('posts')}>Posts</button>
            <button onClick={() => setResourceName('todos')}>Todos</button>
            <ResourceList resourceName={resourceName}/>
          </React.Fragment>
        )   
}
export default App;