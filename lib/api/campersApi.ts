import { api } from "./api";

import type {
  CamperDetails,
  CamperEngine,
  CamperForm,
    CamperTransmission,
  BookingRequest,
  BookingResponse,
  CamperReview,
} from "@/types/camper";

import type { GetCampersResponse } from "@/types/responses";

export interface CampersFilters {
  location?: string;
  form?: CamperForm;
  transmission?: CamperTransmission;
  engine?: CamperEngine;
}

interface GetCampersParams extends CampersFilters {
  page: number;
  perPage?: number;
}

export async function getCampers({
  page,
  perPage = 4,
  location,
  form,
  transmission,
  engine,
}: GetCampersParams): Promise<GetCampersResponse> {
  const response = await api.get<GetCampersResponse>("/campers", {
    params: {
      page,
      perPage,
      location: location || undefined,
      form: form || undefined,
      transmission: transmission || undefined,
      engine: engine || undefined,
    },
  });

  return response.data;
}

export async function getCamperById(camperId: string): Promise<CamperDetails> {
  const response = await api.get<CamperDetails>(`/campers/${camperId}`);

  return response.data;
}

export async function getCamperReviews(
  camperId: string
): Promise<CamperReview[]> {
  const response = await api.get<CamperReview[]>(
    `/campers/${camperId}/reviews`
  );

  return response.data;
}

export async function createBookingRequest(
  camperId: string,
  bookingData: BookingRequest
): Promise<BookingResponse> {
  const response = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    bookingData
  );

  return response.data;
}