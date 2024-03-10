import { useRouter } from "next/router"
import React from "react"

{/*const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))
	@@ -49,4 +49,28 @@ const SinglePost = () => {
  )
}
export default SinglePost*/}
const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

  // Check if post is defined, and if not, display an error message or redirect to a 404 page.
  if (!post) {
    // You can handle the error here, e.g., by displaying a message or redirecting.
    return (
      <div>
        <p>Post not found.</p>
      </div>
    )
  }

  return (
    <>
      {/* The rest of your component code */}
    </>
  )
}

export default SinglePost