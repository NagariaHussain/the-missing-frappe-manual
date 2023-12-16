let BASE_URL = "https://platform.buildwithhussain.dev/";

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://hcloud.localhost:8000/";
}

export const PLATFORM_BASE_URL = BASE_URL;
