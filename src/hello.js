import { WebKwil, Utils } from "kwil";
import { BrowserProvider } from "ethers";

export const kwil = new WebKwil({
  kwilProvider: "https://provider.kwil.com",
});

const walletAddress = "0xC62C6800fA53C82a7e33E67f7386be71A868331A"; // Use your own address here
const databaseName = "hello_world";

export const dbid = Utils.generateDBID(walletAddress, databaseName);

const provider = new BrowserProvider(window.ethereum);

export const signer = await provider.getSigner();
