const post = {
  id: 1,
  title: "This is javascript file",
  body: "This is body"
}

// Covert JSON to string

  const str = JSON.stringify(post);

  // Parse JSON

  const blog = JSON.parse(str);

  console.log(blog.title);

const posts = [
{
  id: 1,
  title: "This is javascript file",
  body: "This is body"
},

{
    id: 2,
  title: "This is javascript file 2",
  body: "This is body 2"
}

]

const str2 = JSON.stringify(posts);

console.log(str2);