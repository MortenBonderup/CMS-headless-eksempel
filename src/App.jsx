import parse from "html-react-parser";
import { useEffect, useState } from 'react';
import './App.css'
import PostItem from './PostItem';

function App() {

  const [posts, setPosts] = useState([]);
  const [titel, setTitel] = useState("");
  const [indhold, setIndhold] = useState("");

  useEffect(() => {
      async function getData() {
          const response = await fetch("http://192.168.10.10/wp-json/wp/v2/posts?categories=3");
          const data = await response.json();
          console.log(data);
          setPosts(data);
      }
      getData();
  }, []);


  async function AabnDialog(event) {
      const id = event.target.value;
      const dialog = document.getElementById("dialog");
      const response = await fetch(`http://192.168.10.10/wp-json/wp/v2/posts/${id}`);
          const data = await response.json();
          setTitel(data.title.rendered);
          setIndhold(parse(data.content.rendered));
          dialog.showModal();

  }

  return (
    <>
    <section>
      {posts.map(post => (
        <PostItem key={post.id} post={post} AabnDialog={AabnDialog}/>
      ))}
    </section>
      <dialog id="dialog">
      <form method="dialog">
      <button id="close" formNoValidate style={{float: "right"}}>X</button>
      {titel}
      {indhold}
      </form>
      </dialog>
    </>
  )
}

export default App
