import React from 'react'
import Layout from '../../components/Layout';

const TagView = ({postId}) => (
  <Layout title="tag View~">
    <h1>tag View</h1>
    <p>view id : {postId}</p>
  </Layout>
)
TagView.getInitialProps = ({ query: { id } }) =>{
  return { postId: id }
}

export default TagView