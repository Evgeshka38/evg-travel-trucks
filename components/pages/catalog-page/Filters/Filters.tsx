"use client";

import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { LuMap } from "react-icons/lu";

import type { CampersFilters } from "@/lib/api/campersApi";

import type {
  CamperEngine,
  CamperForm,
  CamperTransmission,
} from "@/types/camper";

import css from "./Filters.module.css";

type FiltersProps = {
  onSearch: (filters: CampersFilters) => void;
};

export default function Filters({ onSearch }: FiltersProps) {
  const [location, setLocation] = useState("");

  const [form, setForm] = useState<CamperForm | undefined>();

  const [engine, setEngine] = useState<CamperEngine | undefined>();

  const [transmission, setTransmission] = useState<
    CamperTransmission | undefined
  >();

  function handleSearch() {
    onSearch({
      location: location.trim() || undefined,
      form,
      engine,
      transmission,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleSearch();
  }

  function handleClear() {
    setLocation("");
    setForm(undefined);
    setEngine(undefined);
    setTransmission(undefined);

    onSearch({});
  }

  return (
    <form className={css.filters} onSubmit={handleSubmit}>
      <div className={css.locationGroup}>
        <label htmlFor="location" className={css.locationLabel}>
          Location
        </label>

        <div className={css.locationWrapper}>
          <LuMap className={css.locationIcon} aria-hidden="true" />

          <input
            id="location"
            name="location"
            type="text"
            placeholder="City"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className={css.locationInput}
          />
        </div>
      </div>

      <h2 className={css.title}>Filters</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Camper form</legend>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="form"
            value="alcove"
            checked={form === "alcove"}
            onChange={() => setForm("alcove")}
          />

          <span>Alcove</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="form"
            value="panel_van"
            checked={form === "panel_van"}
            onChange={() => setForm("panel_van")}
          />

          <span>Panel Van</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="form"
            value="integrated"
            checked={form === "integrated"}
            onChange={() => setForm("integrated")}
          />

          <span>Integrated</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="form"
            value="semi_integrated"
            checked={form === "semi_integrated"}
            onChange={() => setForm("semi_integrated")}
          />

          <span>Semi Integrated</span>
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Engine</legend>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="engine"
            value="diesel"
            checked={engine === "diesel"}
            onChange={() => setEngine("diesel")}
          />

          <span>Diesel</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="engine"
            value="petrol"
            checked={engine === "petrol"}
            onChange={() => setEngine("petrol")}
          />

          <span>Petrol</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="engine"
            value="hybrid"
            checked={engine === "hybrid"}
            onChange={() => setEngine("hybrid")}
          />

          <span>Hybrid</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="engine"
            value="electric"
            checked={engine === "electric"}
            onChange={() => setEngine("electric")}
          />

          <span>Electric</span>
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Transmission</legend>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="transmission"
            value="automatic"
            checked={transmission === "automatic"}
            onChange={() => setTransmission("automatic")}
          />

          <span>Automatic</span>
        </label>

        <label className={css.radioLabel}>
          <input
            type="radio"
            name="transmission"
            value="manual"
            checked={transmission === "manual"}
            onChange={() => setTransmission("manual")}
          />

          <span>Manual</span>
        </label>
      </fieldset>

      <div className={css.actions}>
        <button type="submit" className={css.searchButton}>
          Search
        </button>

        <button type="button" className={css.clearButton} onClick={handleClear}>
          <IoCloseOutline className={css.clearIcon} aria-hidden="true" />

          <span>Clear filters</span>
        </button>
      </div>
    </form>
  );
}
