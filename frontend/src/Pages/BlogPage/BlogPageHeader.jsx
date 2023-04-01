import React from 'react'
import './CSS/BlogPageHeader.css'

const BlogPageHeader = () => {
  return (
    <div id='mainBlogPageHeaderDiv'>
      <div id="blogPageHeaderDiv">
        <div className="blogPageHeaderDivContent">
           <h1>Blogs</h1>
        </div>

        <div className="blogPageHeaderDivContent">
            <img src="https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2022/12/breadcrumb-feature-img.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default BlogPageHeader
