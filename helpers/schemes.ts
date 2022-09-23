import { object, string, number, bool } from 'yup';
export const getOneSchema = object({
    params: object({
        id: number().required(),
    }),
});
export const postSchema = object({
    body: object({
        name: string().required(),
        created: number().default(() => Date.now()),
        content: string().required(),
        category: string().required(),
    })
});


export const patchSchema = object({
    body: object({
        name: string(),
        content: string(),
        category: string(),
        isArchive: bool()
    }),
    params: object({
        id: number().required(),
    }),
});