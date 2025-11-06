import type { ReviewType } from "../../types/reviewTypes"

interface Props {
    review: ReviewType
}

export const ReviewsList = ({ review }: Props) => {
    return (
        <div className="border rounded-xl md:w-120 p-3 w-80 shadow-lg">
            <p>{review.review}</p>
        </div>
    )
}
