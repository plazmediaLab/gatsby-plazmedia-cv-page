import React from 'react';
import { graphql, Link } from 'gatsby';
import Itemlist from '../components/itemList';
import MyInfoNav from '../components/myInfoNav';
import MetaHeader from '../components/metaHeader';

const Layout = (props) => {

  const slug = props.pageContext.slug;
  const data = props.data.educationJson;
  const { title, description, items, } = data;

  return (
    <section>

      <MetaHeader />

      <div className="bg-teal-500 p-1 block"></div>
      <div className="max-w-4xl mx-auto mt-5">
        <Link to="/" className="btn-back mb-5 inline-block">Back Home</Link>
        <h2 className="text-3xl font-bold text-teal-500">{ title }</h2>
        <p className="text-gray-500">{ description }</p>

        <ul className="my-10">
          {items.map(item => (
            <Itemlist 
              key={item.name}
              item={item}
              slug={slug}
            />
          ))}
        </ul>

      </div>

      <hr/>

      <MyInfoNav />
      
    </section>
  );
};

export default Layout;

export const query = graphql`
  query($slug : String){
    educationJson(slug:{ eq: $slug }){
      title
      description
      items{
        name
        degree
        url
        score
      }
    }
  }
`;

console.log(query);