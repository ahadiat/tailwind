import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, disc } = props.item;
  return (
    <Container className='project group relative'>
        <img src={img} alt="project" className='group-hover:scale-90'/>
        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-gray-700 bg-opacity-55">
        <div className="disc">
          
            <p>{disc}
            <a href="#">demo</a>
            </p>
        </div>
            </div>
       
    </Container>
  )
}

export default Project;

const Container = styled.div`


    height: 28rem;
    background-color: #4e5156;
    margin: 2rem 0.2rem;
    padding: 1rem 0.5rem;
    border-radius: 2rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: fill;
        transition: transform 400ms ease-in-out;
        border-radius: 2rem;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
    
            
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }

    @media only screen and (max-width: 800px) {

   
        height: 30%;
    background-color: #4e5156;
    margin: 2rem 0.3rem;
    padding: 0.5rem;
    border-radius: 2rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
        border-radius: 2rem;
    }

    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

}

`