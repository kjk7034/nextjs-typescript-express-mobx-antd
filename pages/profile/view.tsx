import React from 'react'
import Layout from '../../components/Layout';

const ProfileView = ({postId}) => (
  <Layout title="Profile View">
    <h1>Profile View</h1>
    <p>view id : {postId}</p>
  </Layout>
)
ProfileView.getInitialProps = ({ query: { id } }) =>{
  return { postId: id }
}

export default ProfileView