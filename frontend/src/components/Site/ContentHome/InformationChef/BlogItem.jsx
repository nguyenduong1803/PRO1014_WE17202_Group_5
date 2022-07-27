import React from 'react'
import styles from './Blog.module.css';
function BlogItem({content,img,title}) {
  return (
    <div className="col-md-6 col-lg-4">
      <article className={styles.post}>
        <figure className="feature-image">
          <a href="">
            <img className={styles.blogImg} src={img} alt="" />
          </a>
        </figure>
        <div className="entry-content">
          <h4>
            <a className={styles.title} href="">{title}</a>
          </h4>
          <p>{content}</p>
        </div>
      </article>
    </div>
  )
}

export default BlogItem