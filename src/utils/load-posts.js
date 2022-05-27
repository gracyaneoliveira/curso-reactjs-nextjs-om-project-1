export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photsJson = await photos.json();

  const postsAndPhotos = postsJson.map((posts, index) => {
    return { ...posts, cover: photsJson[index].url };
  });

  return postsAndPhotos;
};
