import React from 'react'
import classes from './Card.scss'

export const Card = (props) => (
  <div className={classes.flipContainer}>
    <div className={classes.flipper + " " + (props.flipped
      ? classes.flipped
      : classes.unflipped)}>
      <div className={classes.card + " " + (props.flipped
        ? (classes.front + " ")
        : (classes.back + " " + classes[props.cardBack] + " ")) + classes[props.suit.symbol]} onClick={props.onClick}>
        <div className={classes.cardContents}>
          <div className={classes.corner + " " + classes.top}>
            <span className={classes.number}>{props.rank.symbol}</span>

            <span>{props.suit.symbol}</span>
          </div>

          <div className={classes.corner + " " + classes.bottom}>
            <span className={classes.number}>{props.rank.symbol}</span>

            <span>{props.suit.symbol}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  rank: React.PropTypes.object.isRequired,
  suit: React.PropTypes.object.isRequired,
  flipped: React.PropTypes.bool.isRequired,
  cardBack: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Card
