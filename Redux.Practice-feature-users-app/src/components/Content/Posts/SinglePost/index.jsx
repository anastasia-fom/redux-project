const SinglePost = ({pantone, year, name, color}) => {
    const background = {
        backgroundColor: color
    };
    return(
        <div className="single_user" style={background}>
            <p>{name}</p>
            <p>{year}</p>
            <p>{pantone}</p>
        </div>
    )
}

export default SinglePost;

