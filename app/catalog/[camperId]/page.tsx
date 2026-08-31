type Props = {
  params: Promise<{
    camperId: string;
  }>;
};

export default async function CamperDetailsPage({
  params,
}: Props) {
  const { camperId } = await params;

  return <div>Camper: {camperId}</div>;
}