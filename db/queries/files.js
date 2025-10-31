import db from "#db/client";

export async function getFiles() {
  const sql = `
  SELECT files.*,
    folders.name AS folder_name
  FROM files
  `;
}
