'use client';

import css from './Filters.module.css';

export default function Filters() {
  return (
    <aside className={css.filters}>
      <div className={css.locationGroup}>
        <label
          htmlFor="location"
          className={css.locationLabel}
        >
          Location
        </label>

        <div className={css.locationWrapper}>
          <span
            className={css.locationIcon}
            aria-hidden="true"
          >
            ◫
          </span>

          <input
            id="location"
            name="location"
            type="text"
            placeholder="City"
            className={css.locationInput}
          />
        </div>
      </div>

      <h2 className={css.title}>
        Filters
      </h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>
          Camper form
        </legend>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="form"
            value="alcove"
          />
          <span>Alcove</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="form"
            value="panelTruck"
          />
          <span>Panel Van</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="form"
            value="integrated"
          />
          <span>Integrated</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="form"
            value="semiIntegrated"
          />
          <span>Semi Integrated</span>
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>
          Engine
        </legend>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="engine"
            value="diesel"
          />
          <span>Diesel</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="engine"
            value="petrol"
          />
          <span>Petrol</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="engine"
            value="hybrid"
          />
          <span>Hybrid</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="engine"
            value="electric"
          />
          <span>Electric</span>
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>
          Transmission
        </legend>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="transmission"
            value="automatic"
          />
          <span>Automatic</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="transmission"
            value="manual"
          />
          <span>Manual</span>
        </label>
      </fieldset>

      <div className={css.actions}>
        <button
          type="button"
          className={css.searchButton}
        >
          Search
        </button>

        <button
          type="button"
          className={css.clearButton}
        >
          <span aria-hidden="true">
            ×
          </span>
          Clear filters
        </button>
      </div>
    </aside>
  );
}