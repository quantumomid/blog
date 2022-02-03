import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
    {title: "Getting Started with Next.js", image: "getting-started-with-next-js.png", excerpt: "Next.js is a React framework for production, which makes building full stack applications easy!", date: "2021-10-16", slug: "getting-started-with-next-js"},
    {title: "Getting Started with Next.js1", image: "getting-started-with-next-js.png", excerpt: "Next.js is a React framework for production, which makes building full stack applications easy!", date: "2021-10-16", slug: "getting-started-with-next-js1"},
    {title: "Getting Started with Next.js2", image: "getting-started-with-next-js.png", excerpt: "Next.js is a React framework for production, which makes building full stack applications easy!", date: "2021-10-16", slug: "getting-started-with-next-js2"},
    {title: "Getting Started with Next.js3", image: "getting-started-with-next-js.png", excerpt: "Next.js is a React framework for production, which makes building full stack applications easy!", date: "2021-10-16", slug: "getting-started-with-next-js3"},
  
]

const AllPostsPage = () => {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    )
}

export default AllPostsPage;