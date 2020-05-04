import React from "react";
// Components 
import Header from '../components/header';
import Repos from '../components/repos';
import MetaHeader from '../components/metaHeader';
import CodigoFacilitoInfo from "../components/codigofacilitoInfo";
import MediumFeeds from "../components/mediumFeeds";
import MyInfoNav from "../components/myInfoNav";

export default () => {

  return (
    <>
      <MetaHeader />

      <Header />

      <MyInfoNav />

      <Repos />

      <CodigoFacilitoInfo />

      <MediumFeeds />
    </>
  )
}
