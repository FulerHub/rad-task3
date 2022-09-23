import {Request, Response} from "express";
import Notes from "../../repositories/database";
import {INote, IStats} from "../../helpers/types";

class NotesController {
    public getAll(req: Request, res: Response, next:any) {
        try{
            res.status(200).json(Notes.findAll());
        }catch (e) {
            res.status(400).json({message:"Error: Can't delete notes"});
        }
    }
    public getOne(req: Request, res: Response, next:any) {
        try{
            const {id} = req.params;
            res.status(200).json(Notes.findOne(Number(id)));
        }catch (e) {
            res.status(400).json({message:"Error: Can't get note"});
        }

    }
    getStats(req: Request, res: Response, next:any) {
        try{
            const categories:string[] = [];
            const notes = Notes.findAll();

            notes.forEach(item=>{
                if(categories.indexOf(item.category as string) === -1){
                    categories.push(item.category as string);
                }
            });

            const categoriesStats:IStats[] = [];
            categories.forEach(item=>{
                categoriesStats.push({
                    name: item,
                    activeNotes: notes.filter(note=>!note.isArchive && note.category === item).length,
                    archiveNotes: notes.filter(note=>note.isArchive && note.category === item).length
                })
            });

            res.status(200).json(categoriesStats);
        }catch (e) {
            res.status(400).json({message:"Error: Can't get stats notes"});
        }

    }
    createNote(req: Request, res: Response, next:any)  {
        try{
            const {name,created,category,content} = req.body;
            let response = Notes.createItem({
                name: name.toString(),
                created: (created) ? created : Date.now(),
                category: category as string,
                content: content as string,
                isArchive:false
            });

            res.status(200).json( response);
        }catch (e) {
            res.status(400).json({message:"Error: Can't create note"});
        }

    }
    updateNote(req: Request, res: Response, next:any)  {
        try{
            const {id} = req.params;
            const {name,category,content,isArchive} = req.body;
            let updateNote:INote = {};
            if(id) updateNote.id = Number(id);
            if(name) updateNote.name = name;
            if(category) updateNote.category = category;
            if(content) updateNote.content = content;
            if(isArchive !== undefined) updateNote.isArchive = isArchive;
            let response = Notes.updateItem(updateNote);
            res.status(200).json( response);
        }catch (e) {
            res.status(400).json({message:"Error: Can't update note"});
        }

    }
    deleteNote(req: Request, res: Response, next:any){
        try{
            const {id} = req.params;
            let response = Notes.deleteItem(Number(id));
            res.status(200).json(response);
        }catch (e) {
            res.status(400).json({message:"Error: Can't delete note"});
        }

    }

}

export default new NotesController();