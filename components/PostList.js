import Link from 'next/link';

const PostList = ({ posts }) => {
  if (posts === 'undefined') return null;
  // const tags = posts.frontmatter.tags.split(',');
  return (
    <>
      {!posts ? (
        <div>No posts!</div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.slug} className='blogList'>
              {post.frontmatter.coverImg && (
                <img className='coverImg' src={post.frontmatter.coverImg} />
              )}
              <h2>
                <Link href={`/post/[postname]`} as={`/post/${post.slug}`}>
                  <a>{post.frontmatter.title}</a>
                </Link>
              </h2>
              <p>
                <a
                  className='blogAuthor'
                  onClick={() => {
                    alert(
                      `Show all post publish by ${post.frontmatter.author}`
                    );
                  }}
                >
                  {post.frontmatter.author}
                </a>
                <span> - </span>
                <span className='blogDate'>{post.frontmatter.date}</span>
              </p>
              <div className='tags'>
                {post.frontmatter.tags.split(',').map((tag) => (
                  <a
                    className='tag'
                    key={tag}
                    onClick={() => {
                      alert(`Show all post with ${tag.trim()} tag`);
                    }}
                  >
                    #{tag.trim()}
                  </a>
                ))}
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default PostList;
