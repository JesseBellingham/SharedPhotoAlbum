﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.3.0.0 (NJsonSchema v10.1.11.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ICommentClient {
    create(command: CreateCommentCommand): Promise<number>;
}

export class CommentClient implements ICommentClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    create(command: CreateCommentCommand): Promise<number> {
        let url_ = this.baseUrl + "/api/Comment";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processCreate(_response);
        });
    }

    protected processCreate(response: AxiosResponse): Promise<number> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<number>(<any>null);
    }
}

export interface IPostClient {
    create(command: CreatePostCommand): Promise<number>;
    get(): Promise<PostsVm>;
}

export class PostClient implements IPostClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    create(command: CreatePostCommand): Promise<number> {
        let url_ = this.baseUrl + "/api/Post";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processCreate(_response);
        });
    }

    protected processCreate(response: AxiosResponse): Promise<number> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<number>(<any>null);
    }

    get(): Promise<PostsVm> {
        let url_ = this.baseUrl + "/api/Post";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: AxiosResponse): Promise<PostsVm> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = PostsVm.fromJS(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<PostsVm>(<any>null);
    }
}

export class CreateCommentCommand implements ICreateCommentCommand {
    text?: string | undefined;
    postId?: number;

    constructor(data?: ICreateCommentCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.text = _data["text"];
            this.postId = _data["postId"];
        }
    }

    static fromJS(data: any): CreateCommentCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateCommentCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["text"] = this.text;
        data["postId"] = this.postId;
        return data; 
    }
}

export interface ICreateCommentCommand {
    text?: string | undefined;
    postId?: number;
}

export class CreatePostCommand implements ICreatePostCommand {
    storedMedia?: StoredMediaDto[] | undefined;
    text?: string | undefined;

    constructor(data?: ICreatePostCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["storedMedia"])) {
                this.storedMedia = [] as any;
                for (let item of _data["storedMedia"])
                    this.storedMedia!.push(StoredMediaDto.fromJS(item));
            }
            this.text = _data["text"];
        }
    }

    static fromJS(data: any): CreatePostCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreatePostCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.storedMedia)) {
            data["storedMedia"] = [];
            for (let item of this.storedMedia)
                data["storedMedia"].push(item.toJSON());
        }
        data["text"] = this.text;
        return data; 
    }
}

export interface ICreatePostCommand {
    storedMedia?: StoredMediaDto[] | undefined;
    text?: string | undefined;
}

export class StoredMediaDto implements IStoredMediaDto {
    id?: number;
    name?: string | undefined;
    mediaType?: MediaType;
    content?: string | undefined;
    postId?: number;

    constructor(data?: IStoredMediaDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.mediaType = _data["mediaType"];
            this.content = _data["content"];
            this.postId = _data["postId"];
        }
    }

    static fromJS(data: any): StoredMediaDto {
        data = typeof data === 'object' ? data : {};
        let result = new StoredMediaDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["mediaType"] = this.mediaType;
        data["content"] = this.content;
        data["postId"] = this.postId;
        return data; 
    }
}

export interface IStoredMediaDto {
    id?: number;
    name?: string | undefined;
    mediaType?: MediaType;
    content?: string | undefined;
    postId?: number;
}

export enum MediaType {
    Image = 0,
    Video = 1,
}

export class PostsVm implements IPostsVm {
    posts?: PostDto[] | undefined;

    constructor(data?: IPostsVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["posts"])) {
                this.posts = [] as any;
                for (let item of _data["posts"])
                    this.posts!.push(PostDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PostsVm {
        data = typeof data === 'object' ? data : {};
        let result = new PostsVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.posts)) {
            data["posts"] = [];
            for (let item of this.posts)
                data["posts"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPostsVm {
    posts?: PostDto[] | undefined;
}

export class PostDto implements IPostDto {
    id?: number;
    linkUrl?: string | undefined;
    text?: string | undefined;
    comments?: CommentDto[] | undefined;
    storedMedia?: StoredMediaDto[] | undefined;

    constructor(data?: IPostDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.linkUrl = _data["linkUrl"];
            this.text = _data["text"];
            if (Array.isArray(_data["comments"])) {
                this.comments = [] as any;
                for (let item of _data["comments"])
                    this.comments!.push(CommentDto.fromJS(item));
            }
            if (Array.isArray(_data["storedMedia"])) {
                this.storedMedia = [] as any;
                for (let item of _data["storedMedia"])
                    this.storedMedia!.push(StoredMediaDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PostDto {
        data = typeof data === 'object' ? data : {};
        let result = new PostDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["linkUrl"] = this.linkUrl;
        data["text"] = this.text;
        if (Array.isArray(this.comments)) {
            data["comments"] = [];
            for (let item of this.comments)
                data["comments"].push(item.toJSON());
        }
        if (Array.isArray(this.storedMedia)) {
            data["storedMedia"] = [];
            for (let item of this.storedMedia)
                data["storedMedia"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPostDto {
    id?: number;
    linkUrl?: string | undefined;
    text?: string | undefined;
    comments?: CommentDto[] | undefined;
    storedMedia?: StoredMediaDto[] | undefined;
}

export class CommentDto implements ICommentDto {
    id?: number;
    text?: string | undefined;
    likes?: number;
    postId?: number;

    constructor(data?: ICommentDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.text = _data["text"];
            this.likes = _data["likes"];
            this.postId = _data["postId"];
        }
    }

    static fromJS(data: any): CommentDto {
        data = typeof data === 'object' ? data : {};
        let result = new CommentDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["text"] = this.text;
        data["likes"] = this.likes;
        data["postId"] = this.postId;
        return data; 
    }
}

export interface ICommentDto {
    id?: number;
    text?: string | undefined;
    likes?: number;
    postId?: number;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}