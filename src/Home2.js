import { useState } from "react";

const Home2 = () => {

    const [blogs, setBlogs] = useState([
        {title: 'gaming', body: 'pubg', author: 'playerunknown', id: 1},
        {title: 'mobile gaming', body: 'bgmi', author: 'krafton', id:2},
        {title: 'studies', body: 'no one likes it', author: 'idiots', id:3}
    ]);
    
    return (
        <div className="home2">
            {blogs.map((blog) => (
                <div className="blog-previews" key= {blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home2;