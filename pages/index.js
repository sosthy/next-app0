import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
// This is the Link API
import Layout from '../components/layout/MyLayout';

/*
const PostLink = props => (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
);

function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" id="hello-nextjs" />
                <PostLink title="Learn Next.js is awesome" id="learn-nextjs" />
                <PostLink title="Deploy apps with Zeit" id="deploy-nextjs" />
            </ul>
        </Layout>
    );
} 
*/

function Index(props) {
    return (
        <Layout>
            <h1>Batman TV Shows</h1>
            <ul>
                {props.shows.map(show => (
                    <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                    </li>
                ))}
            </ul>
            <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
      </Layout>
      
    );
}

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;