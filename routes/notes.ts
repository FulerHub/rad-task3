import validate from "../services/middleWare/validate";
import express from 'express';

import NotesController from "../services/controllers/NotesController";
import {getOneSchema, patchSchema, postSchema} from "../helpers/schemes";

const router = express.Router();

router.get('/', NotesController.getAll);
router.get('/stats', NotesController.getStats);
router.get('/:id', validate(getOneSchema), NotesController.getOne);
router.post('/', validate(postSchema), NotesController.createNote);
router.patch('/:id', validate(patchSchema), NotesController.updateNote);
router.delete('/:id', validate(getOneSchema), NotesController.deleteNote);

export default router;