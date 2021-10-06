import './App.css';

function TutorialApp(){
  const title= 'Welcome to my blog';
  const traffic= 100;
  // const people= { name: 'your', age: 20}; objects and booleans arent valid
  const link= "https://www.google.com";

  return(
    <div className="App">
      <div className="Content">
        <h1>{title}</h1>
        <p>Total {traffic} visitors today</p>

        {/* <p>{ people }</p> */}
        <p>{ 30 }</p>
        <p> { "hello, im vishal"}</p>
        <p>{ [1,2,3, 'orange'] }</p> {/* it bunches all the array and then outputs it as a string */}
        <p>{Math.random() * 20}</p>
        <a href={ link } target= "_blank">Google Search</a>
      </div>
    </div>
  );
}
export default TutorialApp;
