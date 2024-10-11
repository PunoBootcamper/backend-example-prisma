import app from "./app";

import { User } from "./types/models";
import { UserRole, UserStatus, PreferredLanguage } from "./types/enums";


async function main() {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}

main();
