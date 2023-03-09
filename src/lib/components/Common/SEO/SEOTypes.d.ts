import type { Locales } from "$src/i18n/i18n-types";
import type { Locale } from "typesafe-i18n/types/runtime/src/core.mjs";

// OPEN GRAPH
export type OGType = 	'article' | 'book' | 'books.author' | 'books.genre' | 
               'business.business' | 'fitness.course' | 
               'music.album' | 'music.playlist' | 'music.radio_station' | 
               'music.song' | 'music.musician' | 'object' | 'organization' |
               'place' | 'product' | 'product.group' | 'product.item' |
               'profile' | 'restaurant' | 'restaurant.menu' | 
               'restaurant.menu_item' | 'restaurant.menu_section' | 'restaurant.restaurant' |
               'video.episode' | 'video.movie' | 'video.other' |
               'video.tv_show' | 'website' | '';

export type MediaObject = {
   [key: string]: string | { width: number; height: number; } | undefined;
   url?: string;
   alt?: string;
   type?: string;
   dimensions?: { width: number; height: number };
   duration?: number;
   tags?: string[];
};
export type PersonObject = {
   first_name?: string;
   last_name?: string;
   gender?: string;
};

export type OGProps = {
   title: string;
   description: string;
   slug: string;
   type?: OGType;
   tags?: string[];
   videos?: MediaObject[];
   audios?: MediaObject[];
   person?: PersonObject;
}


// SCHEMA ORG
export type LocaleString = { nl: string; fr?: string; en?: string; };
export type LocaleStringArr = { nl: string[]; fr?: string[]; en?: string[]; };

export type RatingsObj = {
   amount: number;
   average: number;
}

export type ImageMetadata = {
   url?: string;
   alt?: LocaleString;
   width?: number;
   height?: number;
}

export type EntityMetadata = {
   name: LocaleString;
   description: LocaleString;
   slug: LocaleString;
   author?: string;
   created_on?: string;
   updated_on?: string;
   image?: ImageMetadata;
   related?: { name: LocaleString; slug: LocaleString; }[];
   significant?: { name: LocaleString; slug: LocaleString; }[];
   breadcrumb: { name: LocaleString; slug: LocaleString; description: LocaleString; }[];
}

export type ArticleMetadata = {
   name: LocaleString;
   description: LocaleString;
   excerpt: LocaleString;
   body: LocaleString;

   words: number;
   author: string;
   language: Locales;

   image: ImageMetadata;

   datePublished: string;
   dateModified: string;
   
   tags?: LocaleStringArr;
}

export type VideoMetadata = {
   name: LocaleString;
   description: LocaleString;
   url: string;
   duration: string;
   thumbnail: ImageMetadata;
   uploadDate: string;
   quality: string;
   size: string;
   language: Locales;
   views: number;
   key_moments: { start: number; end: number; name: LocaleString; description: LocaleString; }[];
}

export type BlogPostMetadata = {
   name: LocaleString;
   description: LocaleString;
   slug: LocaleString;
   excerpt: LocaleString;
   body: LocaleString;
   words: number;
   author: 'tom'|'lencioni';
   datePublished: string;
   dateModified: string;
   tags?: LocaleStringArr;
}

export type ArticlesData = ArticleMetadata[];
export type VideosData = VideoMetadata[];
export type BlogPostsData = BlogPostMetadata[];
export type ImagesData = ImageMetadata[];


export type SOProps = {
   
   entity: EntityMetadata;

   sessions: any;

   images?: ImagesData;
   videos?: VideosData;
   articles?: ArticlesData;
   blogPosts?: BlogPostsData;
   blog?: boolean;
}