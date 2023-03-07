import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h2>
      Review no {reviewId} of {productId}
    </h2>
  );
}

export default Review;
