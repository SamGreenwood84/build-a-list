import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import noteData from "../db/db.json" with { type: "json" };
import fs from "fs";
import { uuid } from 'uuidv4';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/notes", (req, res) => {
    res.json(noteData);
});
router.post("/notes", (req, res) => {
    req.body.id = uuid()
    noteData.push(req.body)
    console.log(noteData)
    console.log(uuid())
fs.writeFile('./db/db.json', JSON.stringify(noteData), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
res.json(req.body);
});

export default router;