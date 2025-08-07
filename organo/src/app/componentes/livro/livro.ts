export interface Livro {
    titulo: string;
    autoria: string;
    favorito: boolean;
    imagem: string;
    genero: Genero;
}

export interface Genero {
    id: string;
    value: string;
    livros: Livro[];
};