import { build, fake } from "@jackfranklin/test-data-bot";

type Auth = {
  username: string;
  password: string;
};

export const authBuilder = build<Auth>({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
});
