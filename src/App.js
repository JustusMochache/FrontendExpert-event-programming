

export default function App(){

  // const handleClick = () => {
  //   console.log("clicked now");
  // }

  return (
  <MyButton onClick= {handleClick}>
  Click me
  </MyButton>
  );
  
}

function handleClick(event){
  console.log(event.nativeEvent);
}

function MyButton(props) {
  return (
    <button 
    {...props}
    
    style={{
      color: 'red'
    }}>
      {props.children}
    </button>
  ); 
}