import React from 'react';

const Unmount = () => {
  return <div className='container'>
  <h2 className='text-center m-5 text-'>UNMOUNTING</h2>
  <br />
  <h3 className='text-center'>In the unmounting (or deletion, or "cleanup") phase, we have just one lifecycle method to help us out: componentWillUnmount. componentWillUnmount is the last function to be called immediately before the component is removed from the DOM. It is generally used to perform clean-up for any DOM-elements or timers created in componentWillMount.

At a picnic, componentWillUnmount corresponds to just before you pick up your picnic blanket. You would need to clean up all the food and drinks you've set on the blanket first or they'd spill everywhere! You'd also have to shut down your radio. After that's all done you would be free to pick up your picnic blanket and put it back in the bag safely.

For a React component, this is where you would clean up any of those long running processes that you set up in componentDidMount.</h3>
</div>;
};

export default Unmount;
