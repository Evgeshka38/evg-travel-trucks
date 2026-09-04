import CamperGallery from '@/components/pages/camper-details-page/CamperGallery/CamperGallery';
import CamperInfo from '@/components/pages/camper-details-page/CamperInfo/CamperInfo';
import VehicleDetails from '@/components/pages/camper-details-page/VehicleDetails/VehicleDetails';
import Reviews from '@/components/pages/camper-details-page/Reviews/Reviews';
import BookingForm from '@/components/pages/camper-details-page/BookingForm/BookingForm';

import {
  getCamperById,
  getCamperReviews,
} from '@/lib/api/campersApi';

import css from './CamperDetailsPage.module.css';

type Props = {
  params: Promise<{
    camperId: string;
  }>;
};

export default async function CamperDetailsPage({
  params,
}: Props) {
  const { camperId } = await params;

  const [camper, reviews] = await Promise.all([
    getCamperById(camperId),
    getCamperReviews(camperId),
  ]);

  return (
    <section className={css.page}>
      <div className={css.container}>
        <div className={css.top}>
          <CamperGallery
            gallery={camper.gallery}
            name={camper.name}
          />

          <div className={css.infoColumn}>
            <CamperInfo camper={camper} />

            <VehicleDetails
              camper={camper}
            />
          </div>
        </div>

        <h2
          id="reviews-title"
          className={css.reviewsTitle}
        >
          Reviews
        </h2>

        <div className={css.bottom}>
          <Reviews reviews={reviews} />

          <BookingForm
            camperId={camper.id}
          />
        </div>
      </div>
    </section>
  );
}