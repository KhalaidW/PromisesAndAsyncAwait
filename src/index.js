// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  // centralized dbs
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  try {
    const currentDB = await central(id);

    let basicData = await dbs[currentDB](id);

    let vaultData = await vault(id);

    console.log({ id, ...basicData, ...vaultData });
  } catch (err) {
    console.error(`X Error: ${err.message}`);
  }
}

console.log(getUserData(5));
