const RAW_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

const API_BASE_URL = RAW_API_BASE_URL.replace(/\/$/, "");

export { API_BASE_URL };