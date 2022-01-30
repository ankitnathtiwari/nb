import { envConfig } from "../../../env_config/index";
const env = envConfig;

const config = {
  mock: {
    url: {
      api: "http://localhost:8080/json_api",
      video: "http://localhost:8080",
      image: "http://localhost:8080",
      thumbnail: "http://localhost:8080",
      share: "http://localhost:8080",
    },
  },
  development: {
    url: {
      api: "http://localhost:8000/json_api",
      video: "https://nb-test-video-mum.s3.ap-south-1.amazonaws.com",
      image: "https://nb-post-image.s3.us-east-2.amazonaws.com",
      thumbnail: "https://nb-test-video-mum.s3.ap-south-1.amazonaws.com",
      share: "http://localhost:8080",
    },
  },
  staging: {
    url: {
      api: "http://staging.newsbird.live/json_api",
      video: "https://nb-test-video-mum.s3.ap-south-1.amazonaws.com",
      image: "https://nb-post-image.s3.us-east-2.amazonaws.com",
      thumbnail: "https://nb-test-video-mum.s3.ap-south-1.amazonaws.com",
      share: "http://staging.newsbird.live",
    },
  },
  production: {
    url: {
      api: "https://newsbird.live/json_api",
      video: "https://nb-video-post-mum.s3.ap-south-1.amazonaws.com",
      image: "https://nb-post-image-mum.s3.ap-south-1.amazonaws.com",
      thumbnail: "https://nb-video-thumbnail-mum.s3.ap-south-1.amazonaws.com",
      share: "https://newsbird.live",
    },
  },
};
export const selectTopics = [
  { value: "politics", labelName: "Politics" },
  { value: "scienceandtech", labelName: "Science and Technology" },
  { value: "entertainment", labelName: "Entertainment" },
  { value: "sports", labelName: "Sports" },
  { value: "international", labelName: "International" },
  { value: "national", labelName: "National" },
  { value: "world", labelName: "World" },
  { value: "business", labelName: "Business" },
  { value: "miscellaneous", labelName: "Miscellaneous" },
];

export const appConfig = config[env];
