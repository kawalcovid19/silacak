import useSWR from "swr";
import { CheckAccountValues } from "~/components/check-account";
import { getConfig } from "~/lib/layout/getConfig";

const { publicRuntimeConfig } = getConfig();
const sendData = async ({ userId }: CheckAccountValues): Promise<unknown> => {
  try {
    const result = await fetch(
      `${publicRuntimeConfig.apiEndpoint}/api/users?fields=displayName%2Cid%2Caccess%2CuserCredentials%5Busername%2Cdisabled%2ClastLogin%2CtwoFA%5D%2CteiSearchOrganisationUnits%5Bid%2Cpath%5D&filter=userCredentials.username:eq:${userId}&fields=id`
    );
    if (result.ok) {
      return await result.json();
    } else {
      throw new Error("Something went wrong");
    }
  } catch (e: unknown) {
    throw new Error(e as string);
  }
};

export const useCheckData = (userId: string) => {
  return useSWR(["checkData"], () => sendData({ userId }));
};
