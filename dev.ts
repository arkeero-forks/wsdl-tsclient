import { parseWsdl } from "./src/parser.js";

(async function () {
    const d = await parseWsdl("./test/resources/strict/EVacSyncService_SPClient.wsdl", { modelNamePreffix: "", modelNameSuffix: "" });
})();