import React from 'react';

const Mount = () => {
  return <div className='container'>
     <h2 className='text-center m-4'>MOUNTING</h2>
     <br />
     <h3 className='text-center'>In the mounting (or DOM creation, or "setup") phase, we have access to two lifecycle methods: componentWillMount, and componentDidMount.

componentWillMount
componentWillMount is called only once in the component lifecycle, immediately before the component is rendered. componentWillMount is largely considered problematic, and as of now, is being considered for deprecation. If your intention is to set an initial state for your component, it is preferable for you to do this in the constructor as shown above. If your intention is to set state using data from an async request, it is preferable that you do this in componentDidMount, as we will see below.

In picnic terms, componentWillMount is the moment when you arrive at the field with your picnic blanket and you make sure the spot you've chosen is nice and level. You might find some twigs or little rocks you need to clean up before you lay your blanket down.

In React terms, the use-cases for this are quite subtle. For example, suppose you want to keep the time and date of when the component was created in your component state, you could set this up in componentWillMount.</h3>
  </div>;
};

export default Mount;
