**6.1** Declare an event in the JSX as an attribute (e.g. <button onClick={handleSave}> Save </button>)  
* a wrapper around browsers' native event  
* React uses its own special class for synthetic events  
* to get access to synthetic event object, add an argument event to event handler function  
* access to native event with event.nativeEvent property of the synthetic event object  


**6.2** Capture Phase(from parent to target element) and bubbling phase(from target to parent element)  

**6.6** Triggering event from a component with state  
**6.7** Triggering an event from a stateless component by passing the event handler as a property  
**6.11** Responding to DOM events not supported by React by adding handlerevent to window.addEventListener in lifecycles and remembering to discard the eventlistener too when component is unmount.  
**6.13** Integrating Jquery with events (don't understand)  