import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'RecruitmentProcessWebPartStrings';
import RecruitmentProcess from './components/RecruitmentProcess';
import { IRecruitmentProcessProps } from './components/IRecruitmentProcessProps';
import { SPComponentLoader } from '@microsoft/sp-loader';


SPComponentLoader.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css');
SPComponentLoader.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js');

export interface IRecruitmentProcessWebPartProps {
  description: string;
}

export default class RecruitmentProcessWebPart extends BaseClientSideWebPart<IRecruitmentProcessWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRecruitmentProcessProps > = React.createElement(
      RecruitmentProcess,
      {
        description: this.properties.description,
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: ''//strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: 'Page Select',//strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Enter Page Number (1 or 2)'//strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
