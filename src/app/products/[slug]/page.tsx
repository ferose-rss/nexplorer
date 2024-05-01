
import { Metadata } from "next";

type Props = {
  params: {
     slug: string;
  };
};

// Noramal meta data function

// export const generateMetadata = ({ params }: Props ): Metadata => {
//   return {
//       title: `Product ${params.slug} - Nexplorer`,
//   };
// };

// Asynchronous metadata function
export const generateMetadata = async ({ params, }:
    Props): Promise<Metadata> => {
      const title = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Product ${params.slug}`);
        }, 100);
    });
    return { title: `${title} - Nexplorer`, };
}; 


export default function ProductDetails({ params } : {
    params: { slug: string };
}) {
    return(
        <>
            <h1>Details about product: {params.slug}</h1>
        </>
    )
}