import React from 'react'
import './Gallary.css'
import { useRouteMatch,  Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../Menu/Menu.css'
import OurRestaurant from './OurRestaurant'
import OurSpecialities from './OurSpecialities'
import GallaryHeader from './GallaryHeader';


const Gallary = () => {
    let  {path} = useRouteMatch()
    
    return (
            <div className="gallary-page-wrapper">
                <div className="page-name">
                  <p>Gallery</p>
                </div>
                <GallaryHeader />
                <AnimatedSwitch path={path} />
            </div>
     
    );
}


export default Gallary

const AnimatedSwitch = withRouter(({ location , path}) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
                        <Route exact path={path} component={OurSpecialities} />
                        <Route  exact path={path+'/ourrestaurant'} component={OurRestaurant} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));


