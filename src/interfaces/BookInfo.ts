export declare interface KakaoBookInfo {
    id: number;
    isbn: string;
    title: string;
    authors: string;
    translators: string;
    publisher: string;
    published_date: string;
    thumbnail_image: string;
    description: string;
};

export declare interface LovedBook {
    id: number;
    book: DjangoBookObj;
    loved: Boolean;
    user: number;
}

export declare interface DjangoBook {
    borrowed_at: Date;
    is_overdue: boolean;
    book :DjangoBookObj;
    returned_at: Date | null;
}

export declare interface DjangoBookObj {
    isbn: number;
    book_info: DjangoBookInfo;
    registered_date: string;
    borrow_available: boolean;
}

export declare interface DjangoBookInfo {
    id: number;
    title: string;
    author: string;
    thumbnail_image:string;
    publisher: string;
    page:number;
    published_date: string;
    genre: Array<string>
    keyword: Array<string>;
    subtitle: string;
    description: string;
    purchase_link: string;
}