import {
  FaMap,
  FaStar,
} from 'react-icons/fa6';

import type { CamperDetails } from '@/types/camper';

import css from './CamperInfo.module.css';

type Props = {
  camper: CamperDetails;
};

export default function CamperInfo({
  camper,
}: Props) {
  return (
    <div className={css.info}>
      <h1 className={css.title}>
        {camper.name}
      </h1>

      <div className={css.meta}>
        <span className={css.rating}>
          <FaStar
            className={css.star}
          />

          {camper.rating} (
          {camper.totalReviews} Reviews)
        </span>

        <span className={css.location}>
          <FaMap />

          {camper.location}
        </span>
      </div>

      <p className={css.price}>
        €{camper.price}
      </p>

      <p className={css.description}>
        {camper.description}
      </p>
    </div>
  );
}