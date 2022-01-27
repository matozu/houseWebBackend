import { readFile, writeFile } from "fs/promises";

export async function readData() {
  try {
    const json = JSON.parse(
      await readFile(new URL("../data/schedule.json", import.meta.url))
    );
    return json;
  } catch (e) {
    console.log(e);
  }
}

export async function writeData(data) {
  try {
    const result = await writeFile(
      new URL("../data/schedule.json", import.meta.url),
      data
    );
    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function readUsers() {
  try {
    const json = JSON.parse(
      await readFile(new URL("../data/users.json", import.meta.url))
    );
    return json;
  } catch (e) {
    console.log(e);
  }
}

export async function writeUsers(users) {
  try {
    const result = await writeFile(
      new URL("../data/users.json", import.meta.url),
      users
    );
    return result;
  } catch (e) {
    console.log(e);
  }
}
