import express from "express";
const router = express.Router();
export default router;

import { createFolder, getFolders } from "#db/queries/folders";

router
  .route("/")
  .get(async (req, res) => {
    const folders = await getFolders();
    res.send(folders);
  })
  .post(async (req, res) => {
    if (!req.body) return res.status(400).send("Request body required");

    const { name } = req.body;
    if (!name) {
      return res.status(400).send("Request body needs: name");
    }

    const folder = await createFolder(name);
    res.status(201).send(folder);
  });
console.log(folders);
