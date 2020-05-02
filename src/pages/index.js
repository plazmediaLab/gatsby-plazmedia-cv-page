import React from "react";
// Components 
import Header from '../components/header';
import Repos from '../components/repos';
import MetaHeader from '../components/metaHeader';
import CodigoFacilitoInfo from "../components/codigofacilitoInfo";

export default () => {

  return (
    <>
      <MetaHeader />

      <Header />

      <Repos />

      <CodigoFacilitoInfo />
    </>
  )
}
