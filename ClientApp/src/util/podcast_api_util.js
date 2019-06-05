const url = "/graphql";

const opts = query => ({
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
});

const fetchQuery = q => {
  return fetch(url, opts(q))
    .then(res => res.json())
    .then(result => {
      return result.data;
    })
    .catch(console.error);
};

export const getAllPodcasts = () => {
  const query = `
    query
    {
      podcasts{
        id,
        title,
        url,
        description,
        imgSrc,
        author {
          name
        }
      }
    }
  `;

  return fetchQuery(query).then(res => res.podcasts);
};

export const getPodcastById = id => {
  const query = `
    query
    {
      podcast(id: ${id}){
        title,
        description,
        imgSrc,
        subscribers,
        author {
          name
        }
        episodes {
          id,
          title,
          like,
          description
        }
      }
    }
  `;

  return fetchQuery(query).then(res => res.podcast);
};
