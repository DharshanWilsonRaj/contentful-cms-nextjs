
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './page.css';
import client from "../../../../config/contentful";

export default async function Page({ params }) {
  const { slug } = params;
  try {
    const res = await client.getEntry(slug);
    const { image, title, brief, content } = res.fields;

    return (
      <div className="single_trip_container container py-3">
        <h2 style={{ textAlign: "center" }}>CONTENTFUL IN NEXT JS</h2>
        <div className="image_container">
          <Image
            src={`https:${image?.fields?.file?.url}`}
            alt={title}
            width={1200}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="py-2">
          <h4 className="text-uppercase">{title}</h4>
          <h6>{brief}</h6>
        </div>
        <div>
          {documentToReactComponents(content)}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Post not found.</div>;
  }
}