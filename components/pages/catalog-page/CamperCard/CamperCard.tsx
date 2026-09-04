import Image from 'next/image';
import Link from 'next/link';

import {
  FaGasPump,
  FaMap,
  FaCarSide,
} from 'react-icons/fa6';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';

import type { CamperListItem } from '@/types/camper';

import css from './CamperCard.module.css';

type CamperCardProps = {
  camper: CamperListItem;
};

function capitalize(value: string) {
  return (
    value.charAt(0).toUpperCase() +
    value.slice(1)
  );
}

function formatForm(value: string) {
  return value
    .split('_')
    .map(capitalize)
    .join(' ');
}

export default function CamperCard({
  camper,
}: CamperCardProps) {
  const {
    id,
    name,
    price,
    rating,
    totalReviews,
    location,
    description,
    engine,
    transmission,
    form,
    coverImage,
  } = camper;

  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={coverImage}
          alt={`${name} camper`}
          width={292}
          height={264}
          className={css.image}
        />
      </div>

      <div className={css.content}>
        <div className={css.topRow}>
          <div>
            <h2 className={css.title}>
              {name}
            </h2>

            <div className={css.meta}>
              <span className={css.rating}>
                <FaStar
                  className={css.star}
                  aria-hidden="true"
                />

                {rating} ({totalReviews} Reviews)
              </span>

              <span className={css.location}>
                <FaMap
                  className={css.metaIcon}
                  aria-hidden="true"
                />

                {location}
              </span>
            </div>
          </div>

          <p className={css.price}>
            €{price}
          </p>
        </div>

        <p className={css.description}>
          {description}
        </p>

        <ul className={css.features}>
          <li className={css.feature}>
            <FaGasPump
              className={css.featureIcon}
              aria-hidden="true"
            />

            {capitalize(engine)}
          </li>

          <li className={css.feature}>
            <TbAutomaticGearbox
              className={css.featureIcon}
              aria-hidden="true"
            />

            {capitalize(transmission)}
          </li>

          <li className={css.feature}>
            <FaCarSide
              className={css.featureIcon}
              aria-hidden="true"
            />

            {formatForm(form)}
          </li>
        </ul>

        <Link
          href={`/catalog/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.button}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}