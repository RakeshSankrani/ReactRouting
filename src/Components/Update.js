import React from 'react';

const Update = () => {
  return <div className='container'>
  <h2 className='text-center m-5'>UPDATE</h2>
  <br />
  <h3 className='text-center'>The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
The render() method is required and will always be called, the others are optional and will be called if you define them.</h3>
</div>;
};

export default Update;
