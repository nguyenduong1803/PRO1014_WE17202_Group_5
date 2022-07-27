import React from 'react'
import styles from './Blog.module.css'
import BlogItem from './BlogItem';
import img1 from "../../../../assets/img/Chef1.jpg"


const listBlog = [
    {
        title: "Best Gadget Of The Year",
        content: "Litora sociis risus qui ante quos pulvinar, laborum, ut, eum, autem expedita molestie maxime! Leo autem expedita molestie maxime! Leo,",
        img: img1
    },
    {
        title: "Best Gadget Of The Year",
        content: "Litora sociis risus qui ante quos pulvinar, laborum, ut, eum, autem expedita molestie maxime! Leo autem expedita molestie maxime! Leo,",
        img: img1
    },
    {
        title: "New Update For Minor Bugs",
        content: "Litora sociis risus qui ante quos pulvinar, laborum, ut, eum, autem expedita molestie maxime! Leo autem expedita molestie maxime! Leo,",
        img: img1
    }
]
function BlogSection() {
    return (
        <section className={styles.blogSection}>
            <div className="container">
                <div className="section-heading text-center">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className={styles.subTitle}>RECENT BLOG</div>
                            <h2 className={styles.sectionTitle}>Keep Updated From Blog</h2>
                            <p className={styles.contentitle}>Et optio praesent et! Eligendi ab, irure impedit rhoncus, doloremque! Pretium nobis nobis modi ullamco excepturi recusandae et! Nec scelerisque, natus gravida.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {listBlog.map((blog, index) => (
                    <BlogItem
                        key={index}
                        img={blog.img}
                        title={blog.title} 
                        content={blog.content}
                        />))}
                        
                </div>
            </div>
            <div className={styles.blogShape}></div>
        </section>
    )
}

export default BlogSection