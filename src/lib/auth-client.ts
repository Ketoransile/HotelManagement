import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react
import { adminClient } from "better-auth/client/plugins";

const baseURL = process.env.NEXT_PUBLIC_BETTER_AUTH_URL;
export const authClient = createAuthClient({
  //you can pass client configuration here
  baseURL,
  plugins: [adminClient()],
});
export const { signIn, signUp, useSession } = createAuthClient();
