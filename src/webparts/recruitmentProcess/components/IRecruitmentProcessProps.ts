import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface IRecruitmentProcessProps {
  description: string;
  context: WebPartContext;
}

export interface dynmiclinks {
  config: linksitems[]
}
export interface linksitems {
  title: string;
  links: string;
  sn: string;
  img:string;
}
export interface IItem {
  [key: string]: string;
}
export interface ICustomListView {
  items: IItem[];
  loading: boolean;
  showDialog: boolean;
  folderName: string;
}

export type JsonPrimitive = string | number | boolean | null;
export interface IJsonMap extends Record<string, JsonPrimitive | IJsonArray | IJsonMap> { }
export interface IJsonArray extends Array<JsonPrimitive | IJsonArray | IJsonMap> { }
export type Json = JsonPrimitive | IJsonMap | IJsonArray;