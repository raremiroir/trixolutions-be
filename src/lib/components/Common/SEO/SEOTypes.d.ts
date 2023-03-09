import type { Locales } from "$src/i18n/i18n-types";

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
   url: string;
   alt: string;
   type?: string;
   dimensions?: { width: number; height: number };
   duration?: number;
   tags?: string[];
};
export type PersonObject = {
   first_name: string;
   last_name: string;
   gender: string;
} | boolean;

export type OGProps = {
   title: string;
   description: string;
   type?: OGType;
   tags?: string[];
}


// SCHEMA ORG
export type LocalizedString = { nl: string; fr?: string; en?: string; };
export type LocalizedStringArr = { nl: string[]; fr?: string[]; en?: string[]; };

export type RatingsObj = {
   amount: number;
   average: number;
}

export type ImageMetadata = {
   url?: string;
   alt?: LocalizedString;
   width?: number;
   height?: number;
}

export type EntityMetadata = {
   name: LocalizedString;
   description: LocalizedString;
   slug: LocalizedString;
   author?: string;
   created_on?: string;
   updated_on?: string;
   image?: ImageMetadata;
   related?: { name: LocalizedString; slug: LocalizedString; }[];
   significant?: { name: LocalizedString; slug: LocalizedString; }[];
   breadcrumb: { name: LocalizedString; slug: LocalizedString; description: LocalizedString; }[];
}

export type ArticleMetadata = {
   name: LocalizedString;
   description: LocalizedString;
   excerpt: LocalizedString;
   body: LocalizedString;

   words: number;
   author: string;
   language: Locales;

   image: {
      url: string;
      width?: number;
      height?: number;
   }

   datePublished: string;
   dateModified: string;
   
   tags?: LocalizedStringArr;
}

export type VideoMetadata = {
   name: LocalizedString;
   description: LocalizedString;
   url: string;
   duration: string;
   thumbnail: {
      url: string;
      width?: number;
      height?: number;
   };
   uploadDate: string;
   quality: string;
   size: string;
   language: Locales;
   views: number;
   key_moments: { start: number; end: number; name: LocalizedString; description: LocalizedString; }[];
}

export type BlogPostMetadata = {
   name: LocalizedString;
   description: LocalizedString;
   slug: LocalizedString;
   excerpt: LocalizedString;
   body: LocalizedString;
   words: number;
   author: 'tom'|'lencioni';
   datePublished: string;
   dateModified: string;
   tags?: LocalizedStringArr;
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