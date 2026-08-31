import { api } from './api';

import type {
  CamperEngine,
  CamperForm,
  CamperTransmission,
} from '@/types/camper';
import type { GetCampersResponse } from '@/types/responses';

export interface CampersFilters {
  location?: string;
  form?: CamperForm;
  transmission?: CamperTransmission;
  engine?: CamperEngine;
}

interface GetCampersParams
  extends CampersFilters {
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
  const response =
    await api.get<GetCampersResponse>('/campers', {
      params: {
        page,
        perPage,
        location: location || undefined,
        form: form || undefined,
        transmission:
          transmission || undefined,
        engine: engine || undefined,
      },
    });

  return response.data;
}