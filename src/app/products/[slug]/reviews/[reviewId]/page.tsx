import React from "react";

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <>
      <h3>
        Review {params.reviewId} for product {params.productId}
      </h3>
    </>
  );
}