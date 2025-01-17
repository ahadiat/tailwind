import React from 'react'
import styled from 'styled-components';
import SliderComp from './slide';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
          
            <h1 className='font-cookie ' >Produk Kami</h1>
            <p className=' text-xl font-medium ' >Variasi menu membuatkan hidangan di kedai kami istimewa.</p>

  
            
           
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 100%;
    background-color: white;
   
    margin: 0rem;
    padding: 3rem 0rem;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        ;
    }
    h1{
        font-size: 3rem;
        color: #e35420
       
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1.5rem;
        color: #e35420;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``