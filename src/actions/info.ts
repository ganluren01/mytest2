import { instance } from "../instance.js";
import qs from "qs";
import { key } from "../config.js";

export default async function getInfo() {
  const _key = key || process.env.jdsd_key;

  const form = qs.stringify({
    route: "user_info",
    key: _key,
  });

  const response = await instance.post("/", form);
  if (response.data) {
    console.log("你的积分为", response.data.re.credits);
  }
}
