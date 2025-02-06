import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const singleData = useLoaderData();
  const { title, image, description, liveLink, repository } = singleData;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ViewDetails;
