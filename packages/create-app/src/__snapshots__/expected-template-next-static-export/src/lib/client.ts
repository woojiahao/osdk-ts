import { FoundryClient, PublicClientAuth } from "@fake/sdk";

/**
 * Initialize the client to interact with the Ontology SDK
 */
const client = new FoundryClient({
  url: process.env.NEXT_PUBLIC_FOUNDRY_API_URL!,
  auth: new PublicClientAuth({
    clientId: process.env.NEXT_PUBLIC_FOUNDRY_CLIENT_ID!,
    url: process.env.NEXT_PUBLIC_FOUNDRY_API_URL!,
    redirectUrl: process.env.NEXT_PUBLIC_FOUNDRY_REDIRECT_URL!,
  }),
});

export default client;