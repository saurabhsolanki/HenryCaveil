import React from 'react'
import BlogPageHeader from './BlogPageHeader'
import BlogCarousel from './BlogCarousel'
import BlogAcordian from './BlogAcordian'

const BlogPage = () => {
  return (
    <div>
      <BlogPageHeader/>
      <BlogAcordian/>
      <BlogCarousel/>
    </div>
  )
}

export default BlogPage
