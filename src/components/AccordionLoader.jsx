import React from 'react'
import Accordion from "./Accordion";
//import './assets/styles/_index.scss'

const config =
{
  "features": [
    { "title": "appbar-search", "value": false },
    { "title": "user-profile", "value": true },
    { "title": "language", "value": false },
    { "title": "theme", "value": false },
    { "title": "caching", "value": false },
    { "title": "logging", "value": false },
    { "title": "datastore", "value": false },

    { "title": "dashboard", "value": true },
    { "title": "report-transactional", "value": true },
    { "title": "report-analytic", "value": true },
    { "title": "report-analyser", "value": true },
    { "title": "approle", "value": true },
    { "title": "user-approle", "value": true },
    { "title": "object-approle", "value": true }
  ],
  "featuresBI": {
    "treeTypes": [
      { "value": true, "title": "Folder" },
      { "value": true, "title": "Dashboard" },
      { "value": true, "title": "DashboardGroup" },
      { "value": true, "title": "Page" },
      { "value": true, "title": "Report" },
      { "value": false, "title": "DataModel" },
      { "value": true, "title": "Project" }
    ]
  }
};


const AccordionLoader = () => {
  // const items =
  //   [
  //     { "value": true, "title": "Folder" },
  //     { "value": true, "title": "Dashboard" },
  //     { "value": true, "title": "DashboardGroup" },
  //     { "value": true, "title": "Page" },
  //     { "value": true, "title": "Report" },
  //     { "value": false, "title": "DataModel" },
  //     { "value": true, "title": "Project" }
  //   ];

  return (
    <React.Fragment>
      <Accordion
        title="درخت کاتالوگ"
        items={config.features}
        onCheckChange={items => {
          console.log('config.features-onCheckChange', items);
        }}
        onSaveClick={() => { alert('save') }}
        onCancelClick={() => { alert('cancel') }}
      />

      <Accordion
        title=" ... "
        items={config.featuresBI.treeTypes}
        onCheckChange={items => {
          console.log('config.featuresBI.treeTypes-onCheckChange', items);
        }}
        onSaveClick={() => { alert('save') }}
        onCancelClick={() => { alert('cancel') }}
      />
    </React.Fragment>
  )
}

export default AccordionLoader;

