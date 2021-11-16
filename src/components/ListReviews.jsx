import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
function ListReviews() {
  const reviews = useSelector((state) => state.reviews)
  console.log('reviews', reviews)
  return (
    <>
      <h1>List Reviews</h1>
      {/* reviews.map((review) => (
      <div>
        <h1>{reviews.id}</h1>
        <h1>{reviews.name}</h1>
      </div>
      )) */}
    </>
  )
}
export default ListReviews
