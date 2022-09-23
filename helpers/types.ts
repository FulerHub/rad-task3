export interface INote {
    id?: number;
    name?: string;
    content?: string;
    created?: number;
    category?: string;
    isArchive?: boolean;
}

export interface IStats {
    name: string;
    activeNotes: number;
    archiveNotes: number
}