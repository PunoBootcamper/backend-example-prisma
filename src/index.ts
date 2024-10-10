import app from "./app";

async function main() {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}

main();
