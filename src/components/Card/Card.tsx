import React, {FC} from 'react';
import { CardText } from './CardText';
import { CardPlan } from './CardPlan';
import hero from '../../assets/illustration-hero.svg';

export const Card: FC = () => {
    return (
    <div className="card">
        <img className="card__image" src={hero} alt="" />
        <h1 className="card__title">Order Summary</h1>
  
        <CardText/>
        <CardPlan/>

        <button className="card__button" type="submit">Proceed to Payment</button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <div><a href="#" className="card__cancel-link">Cancel Order</a></div>
    </div>
    );
};