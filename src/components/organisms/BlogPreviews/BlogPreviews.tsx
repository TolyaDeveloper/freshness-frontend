import { cnb } from 'cnbuilder'
import { LargeBlog, MediumBlog, SmallBlog } from '~/components/molecules'
import { BlogPreviewsProps } from './BlogPreviews.props'

import styles from './BlogPreviews.module.scss'

const BlogPreviews = ({ className, blogs }: BlogPreviewsProps) => {
  const [largeBlog, mediumBlog, ...smallBlogs] = blogs

  return (
    <section className={cnb(styles.blogPreviews, className)}>
      <LargeBlog {...largeBlog} />
      <MediumBlog className={styles.mediumBlog} {...mediumBlog} />
      <div>
        {smallBlogs.map(smallBlog => (
          <SmallBlog
            className={styles.smallBlog}
            key={smallBlog._id}
            {...smallBlog}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogPreviews
