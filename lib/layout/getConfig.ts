import nextGetConfig from "next/config";

type Config = {
  publicRuntimeConfig: {
    apiEndpoint: string;
  };
};

function getConfig() {
  return nextGetConfig() as Config;
}

export { getConfig };
