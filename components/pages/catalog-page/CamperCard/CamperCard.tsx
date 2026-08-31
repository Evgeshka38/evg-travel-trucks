import Image from "next/image";
import Link from "next/link";

import { FaGasPump, FaMap, FaCarSide } from "react-icons/fa6";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

import css from "./CamperCard.module.css";

export default function CamperCard() {
  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src="/images/mavericks.webp"
          alt="Mavericks camper"
          width={292}
          height={264}
          className={css.image}
        />
      </div>

      <div className={css.content}>
        <div className={css.topRow}>
          <div>
            <h2 className={css.title}>Mavericks</h2>

            <div className={css.meta}>
              <span className={css.rating}>
                <FaStar className={css.star} aria-hidden="true" />
                4.4(2 Reviews)
              </span>

              <span className={css.location}>
                <FaMap className={css.metaIcon} aria-hidden="true" />
                Kyiv, Ukraine
              </span>
            </div>
          </div>

          <p className={css.price}>€8000</p>
        </div>

        <p className={css.description}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>

        <ul className={css.features}>
          <li className={css.feature}>
            <FaGasPump className={css.featureIcon} aria-hidden="true" />
            Petrol
          </li>

          <li className={css.feature}>
            <TbAutomaticGearbox
              className={css.featureIcon}
              aria-hidden="true"
            />
            Automatic
          </li>

          <li className={css.feature}>
            <FaCarSide className={css.featureIcon} aria-hidden="true" />
            Alcove
          </li>
        </ul>

        <Link
          href="/catalog/1"
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
