import DetailPage from "@/components/client/detail-page/detail-page";

type PageParams = Promise<{ roomId: string }>;
const page = async ({ params }: { params: PageParams }) => {
  const { roomId } = await params;
  return <DetailPage roomId={roomId} />;
};

export default page;
