import { WebPartContext } from '@microsoft/sp-webpart-base';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
export class service {
    private context: WebPartContext;
    private absoluteURL: string;
    constructor(context: WebPartContext) {
        this.context = context;
        this.absoluteURL = context.pageContext.web.absoluteUrl;
    }
    public getListItem(restURL: string, listName: string, filter: string,
        columns: string, expand: string, top: string, orderBy: string): Promise<SPHttpClientResponse> {
        if (restURL === '') {
          let queryParam: string = (columns === '' ? '' : '$select=' + columns) +
            (filter === '' ? '' : '&$filter=' + filter) +
            (expand === '' ? '' : '&$expand=' + expand) +
            (orderBy === '' ? '' : '&$orderby=' + orderBy) +
            (top === '' ? '' : '&$top=' + top);
          if (queryParam.substr(0, 1) === '&') {
            queryParam = queryParam.replace(/^&/, '');
          }
          restURL = this.absoluteURL + `/_api/web/lists/GetByTitle('${listName}')/items?${queryParam}`;
        }
        return this.context.spHttpClient.get(restURL,
          SPHttpClient.configurations.v1).then((data: SPHttpClientResponse) => {
            return data;
          });
      }
}