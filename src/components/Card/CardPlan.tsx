import React, {FC} from 'react';
import musicIco from '../../assets/icon-music.svg';

export const CardPlan: FC = () => {
    return (
        <div className="card__plan">
        <div className="card__plan-container">
          <img
            className="card__plan-image"
            src={musicIco}
            alt="music ico"
          />
          <div className="card__plan-text">
            Annual Plan<br />
            <span>$59.99/year</span>
          </div>
        </div>

        <div className="card__link">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="card__link-item">Change</a>
        </div>
      </div>
    );
};