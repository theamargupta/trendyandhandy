import React from "react"
import classNames from "classnames"
import { AiFillStar } from "react-icons/ai"
import { BsChatSquareFill } from "react-icons/bs"

import styles from "./Card.module.css"

const BasicCard = ({ title, likes, order, image, price, mrp }) => {
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} alt="" />
        </div>
        <div className={styles.badgeWrapper}>
          <div
            className={classNames([
              styles.primaryBadge,
              styles.badgeAnime,
              "group",
            ])}
          >
            <span
              className={classNames([styles.counter, "group-hover:text-white"])}
            >
              {likes}
            </span>
            <AiFillStar />
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>{title}</h1>
        <h1 className={styles.price}>
          ₹{price} <span className={classNames([styles.mrp])}>{mrp}</span>
        </h1>
      </div>
    </div>
  )
}

export default BasicCard
