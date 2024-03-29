import { Helmet } from "react-helmet";

export type SeoPropsType = {
  title?: string;
  description?: string;
};

function Seo(props: SeoPropsType) {
  const { title, description } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

export default Seo;
