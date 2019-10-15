import React from 'react';
import { Link } from 'react-router-dom';
import Header from'../../components/Header/Header';
import Footer from'../../components/Footer/Footer';

const TopicList = ({ match }) => {
  console.log(match.url)
  return (
    <div>

<Header/>

<Footer/>

    </div>
  );
};

export default TopicList;
