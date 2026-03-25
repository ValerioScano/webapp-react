function ReviewCard({ review }) {
    const { name, vote, text } = review;

    return <div>
        <h2>{name}</h2>
        <h3>{vote}</h3>
        <p>{text}</p>

    </div>
}

export default ReviewCard