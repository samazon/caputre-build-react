import React, {useState, useEffect} from 'react'
import styled  from 'styled-components'
import { useHistory } from 'react-router-dom'
import { MovieState } from '../MovieState'

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    console.log(history)
    console.table(url);

    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);


    useEffect(()=> {
        const currentMovie = movies.filter((MovieState)=> MovieState.url === url);
        setMovie(currentMovie[0]);
    },[url, movies])
    return (
        <>
            { movie && (
                <Detail>
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie.title}/>
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award)=> (
                            <Award key={award.title} title={award.title} description={award.description}/>
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="" />
                    </ImageDisplay>
                </Detail>
            )}
        </>
    )
}

const Detail = styled.div`
    color: white;
`
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({title, description}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p className="description">{description}</p>
        </AwardStyle>
    )
}
export default MovieDetail
