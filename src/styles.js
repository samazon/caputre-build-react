import styled from 'styled-components'
import {motion} from 'framer-motion'

export const StyledAbout = styled(motion.div)`
    min-height:90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 2rem;
    color: #fff;
`

export const StyledDescription = styled.div`
    padding-right: 5rem;
    z-index:2;
    flex: 1;
    h2{ 
        font-weight: lighter;
    }
`
export const Image = styled.div`
    z-index:2;
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        max-height: 80vh;
        object-fit: cover;
    }
`

export const Hide = styled.div`
    overflow: hidden;
`