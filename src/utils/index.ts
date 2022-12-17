// TODO: This file clearly needs to be split up into multiple files
import readingTime from "reading-time";

export const socialLinks = {
  twitter: `https://twitter.com/balastrong`,
  youtube: "https://www.youtube.com/@DevLeonardo",
  devto: "https://dev.to/balastrong",
  linkedin: "https://www.linkedin.com/in/leonardo-montini/",
  discord: "https://discord.gg/bqwyEa6We6",
};

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
