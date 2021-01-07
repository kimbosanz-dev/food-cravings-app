import React from 'react';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { DirectoryMenu } from '../../components/directory-menu/directory-menu.component';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <>  
        <div className="carousel">
                <CarouselComponent /> 
             </div>
            <div className="directory-header">
                <h1 style={{
                    fontWeight: '600',
                    fontStyle: 'normal',
                    fontSize: '45px',
                    lineHeight: '27px',
                    marginTop: '25px'
                }}>Explore Foods</h1>
            </div>
            <div className="homepage">
                <DirectoryMenu />
            </div>
            <div className="directory-header">
                <h1 style={{
                    fontWeight: '600',
                    fontStyle: 'normal',
                    fontSize: '45px',
                    lineHeight: '27px',
                    marginTop: '25px'
                }}>Foods you can try</h1>
            </div>
            <div className="homepage">
                
            </div>
            <div className="directory-header">
                <h1 style={{
                    fontWeight: '600',
                    fontStyle: 'normal',
                    fontSize: '45px',
                    lineHeight: '27px',
                    marginTop: '25px'
                }}>Shops to look at</h1>
            </div>
        </>
    )
}

export default HomePage;