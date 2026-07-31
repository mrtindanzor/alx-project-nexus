import { APP_NAME } from "@/shared/contants/app";
import { pageDescription, pageTitle } from "@/shared/utils/pageMetadata";
import { toCapitalized } from "@/shared/utils/textFormat";

type Path<T extends string> = T extends `/${infer Tail}` ? Tail : T;

type GenerateMetadataProps<P extends string> = {
  title: string;
  description: string;
  images?: string[] | string;
  path: Path<P>;
  keywords?: string;
};

type Metadata = { [key: string]: string };

export function generateMetaData<P extends string>({
  title,
  description,
  images,
  path,
  keywords,
}: GenerateMetadataProps<P>): Metadata[] {
  const getPath = (path: string) => `/${path.replace(/^\/+/, "")}`;

  const meta: Metadata[] = [
    { title: pageTitle(title) },
    { name: "title", content: pageTitle(title) },
    { name: "description", content: pageDescription(description) },
    { property: "og:title", content: pageTitle(title) },
    { property: "og:description", content: pageDescription(description) },
    { property: "og:url", content: getPath(path) },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: toCapitalized(APP_NAME) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle(title) },
    { name: "twitter:description", content: pageDescription(description) },
  ];

  if (keywords) {
    meta.push({ name: "keywords", content: keywords });
  }

  if (images) {
    const allImages = Array.isArray(images) ? images : [images];

    allImages.forEach((image) => {
      const url = image.startsWith("http") ? image : getPath(image);
      meta.push({ property: "og:image", content: url });
      meta.push({ property: "twitter:image", content: url });
    });
  }

  return meta;
}
