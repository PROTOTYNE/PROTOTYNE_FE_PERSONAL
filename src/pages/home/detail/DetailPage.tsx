import { ImminentDetail, NewDetail, PopularDetail } from "@/entities";

const DetailPage = ({ type }: { type: string }) => {
  switch (type) {
    case "imminent":
      return <ImminentDetail />;
    case "new":
      return <NewDetail />;
    default:
      return <PopularDetail />;
  }
};

export default DetailPage;
