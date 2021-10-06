import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;


{/* <p>{name}</p> */}
      {/* <button onClick= {() => setName('sinha')}>Change</button> */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'vishal')} title= "Vishal's Blog!" /> */}


