

function App() {
  return (
    <div>
     <h1>Higher Order Components</h1>
     <h4>A higher-order component (HOC) is used in react for reusing component logic</h4>
<h4>HOCs are not part of the React API,They are a pattern that emerges from React’s compositional nature.</h4>
<h4>A higher-order component is a function that takes a component and returns a new component</h4>

<h1>Pure Components</h1>
<h4>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values</h4>
<h4>PureComponent Is Primarily Used for Performance Optimization.</h4>
<h4>We can use React.memo for transforming a component into pure component</h4>

    </div>
  );
}

export default App;
