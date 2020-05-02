import React, { useEffect, useState } from 'react';
// Components 
import Feed from './feed';

const MediumFeeds = () => {

  // Local STATE 
  const [mediumfeeds, setMediumFeeds] = useState([]);
  // const user = "Uriel_Hedz";
  const user = "adriannievesuribe";

  useEffect(() => {

    const mediumFeeds = async () => {
      
      const mediumFeedsStorage = sessionStorage.getItem("medium-feeds");
      if(mediumFeedsStorage){
        const feedsJson = JSON.parse(mediumFeedsStorage);
        return setMediumFeeds(feedsJson);
      }
  
      const url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40${user}`;
      const req = await fetch(url);
      const res = await req.json();
  
      sessionStorage.setItem("medium-feeds", JSON.stringify(res));
      setMediumFeeds(res);
    };

    mediumFeeds();

  }, [/* dependencia */]);

  const { items } = mediumfeeds

  return (
    <section className="max-w-4xl mx-auto my-10">
      <header className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">My Medium feeds</h2>
        {mediumfeeds.feed
          ? (
            <p>Profile: <a 
              href={ mediumfeeds.feed.link }
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500"
            >@{ user }</a></p>
          )
          : null}
      </header>

      <aside 
        className="mt-8 grid grid-flow-col gap-2 overflow-x-auto py-3"
      >
        {items 
          ? (
            items.map(item => (
              <Feed 
                key={item.pubDate}
                feed={item}
              />
            ))
          )
          : null}
      </aside>

    </section>
  );
};

export default MediumFeeds;