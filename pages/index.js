import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';
import { firestore, postToJSON } from '../lib/firebase';
import { useState } from 'react';
import PostFeed from '../components/PostFeed';


const LIMIT = 5;
export async function getServerSideProps() {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', 'true')
    .orderBy('createdAt', 'desc')
    .limit(LIMIT)

  const posts = (await postsQuery.get()).docs.map(postToJSON)

  return {
    props: {posts}
  }
}


export default function Home(props)) {

  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () => {
    setLoading(true)

    const last = posts[posts.length-1];

    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt

    const pagQuery = firestore
      .collectionGroup("posts")
      .where("published", "==", true)
      .ord
  }

  return (
    <main>
      <PostFeed posts={posts} />
      {!loading && !postsEnd && <button onClick={getMorePosts}>Load More</button>}

      <Loader show={loading} />

      {postsEnd && "You've reached the end!"}
    </main>
  )
}
