import Image from "next/image";
import './page.css'
import client from "../../config/contentful";
import TripCard from "@/component/TripCard";

export default async function Home() {
  let tripItems = [];
  const res = await client.getEntries({
    content_type: 'trips'
  });
  tripItems = res?.items || [];


  return (
    <div className="home_page_container">
      <h2 style={{ textAlign: "center" }}>CONTENTFUL IN NEXT JS</h2>
      <div className="container">
        <div className="grid_container">
          {tripItems?.map((curr, idx) =>
            <div key={idx}>
              <TripCard data={curr} />
            </div>)}
        </div>
      </div>
    </div>
  );
}

export const revalidate = 10;