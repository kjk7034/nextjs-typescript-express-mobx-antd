import React from 'react'
import Layout from '../../components/Layout';

const QuestionView = ({postId}) => (
  <Layout title="Question View">
    <h1>Question View</h1>
    <p>view id : {postId}</p>
  </Layout>
)
QuestionView.getInitialProps = ({ query: { id } }) =>{
  return { postId: id }
}

export default QuestionView