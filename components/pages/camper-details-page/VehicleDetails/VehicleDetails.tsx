import type { CamperDetails } from '@/types/camper';

import css from './VehicleDetails.module.css';

type Props = {
  camper: CamperDetails;
};

function capitalize(
  value: string
) {
  return (
    value.charAt(0).toUpperCase() +
    value.slice(1)
  );
}

function formatForm(
  value: string
) {
  return value
    .split('_')
    .map(capitalize)
    .join(' ');
}

export default function VehicleDetails({
  camper,
}: Props) {
  return (
    <div className={css.details}>
      <h2 className={css.title}>
        Vehicle details
      </h2>

      <ul className={css.badges}>
        <li className={css.badge}>
          {capitalize(
            camper.transmission
          )}
        </li>

        {camper.amenities.map(
          (amenity) => (
            <li
              key={amenity}
              className={css.badge}
            >
              {capitalize(
                amenity
              )}
            </li>
          )
        )}

        <li className={css.badge}>
          {capitalize(camper.engine)}
        </li>

        <li className={css.badge}>
          {formatForm(camper.form)}
        </li>
      </ul>

      <div className={css.divider} />

      <dl className={css.specs}>
        <div className={css.row}>
          <dt>Form</dt>
          <dd>
            {formatForm(
              camper.form
            )}
          </dd>
        </div>

        <div className={css.row}>
          <dt>Length</dt>
          <dd>{camper.length}</dd>
        </div>

        <div className={css.row}>
          <dt>Width</dt>
          <dd>{camper.width}</dd>
        </div>

        <div className={css.row}>
          <dt>Height</dt>
          <dd>{camper.height}</dd>
        </div>

        <div className={css.row}>
          <dt>Tank</dt>
          <dd>{camper.tank}</dd>
        </div>

        <div className={css.row}>
          <dt>Consumption</dt>
          <dd>
            {camper.consumption}
          </dd>
        </div>
      </dl>
    </div>
  );
}