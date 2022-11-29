import { Web3sdkioAuth } from "@web3sdkio/auth/next";

export const { Web3sdkioAuthHandler, getUser } = Web3sdkioAuth({
  privateKey: process.env.PRIVATE_KEY as string,
  domain: "example.org",
});
