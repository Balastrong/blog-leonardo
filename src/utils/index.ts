import readingTime from "reading-time";

type Post = {
  title: string;
  file: string;
  rawContent: () => string;
};

export function getPostData(post: Post) {
  return {
    slug: getSlug(post.file),
    readingTime: readingTime(post.rawContent()).text,
  };
}

export function getSlug(file: string) {
  return file?.split("/").at(-2)?.split("_").pop();
}
