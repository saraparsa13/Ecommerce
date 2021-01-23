import React from 'react'

import {
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Divider,
  Button,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings'

const gridStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const accordingStyles = makeStyles(() => ({
  root: {
    color: '#FFF',
    width: '30%',
    minWidth: 500,
    borderRadius: 3,
    margin: '1%',
    background: 'linear-gradient(to right, #4e42b9,#e98223) transparent',
  }
}));

const accordionSummaryStyles = makeStyles(() => ({
  root: {
    background: 'rgba(0,0,0,0.5)',
    borderRadius: 3,
  },
  icon: {
    marginLeft: '2%',
    color: '#FFF'
  }
}));

const accordionDetailsStyles = makeStyles(() => ({
  root: {
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column'
  },
  controlLabel: {
    padding: '2%',
    color: '#000000'
  },
  footer: {
    padding: '3%',
    display: 'flex',
    flexFlow: 'row-reverse'
  },
  button: {
    margin: '1%'
  }
}));

const SimpleAccordion = (props) => {

  const { title, onCheckChange, onSaveClick, onCancelClick } = props;
  const [items, setItems] = React.useState(props.items);

  const according = accordingStyles()
  const accordionDetails = accordionDetailsStyles()
  const accordionSummary = accordionSummaryStyles()
  const grid = gridStyles()

  const checkChangeHandler = (title, value) => {

    setItems(prev => {

      const dataItems = prev;
      const foundItem = dataItems.filter(item => item.title === title);
      
      if (foundItem.length > 0) {
        const foundIndex = dataItems.indexOf(foundItem);
        foundItem[0].value = value;
        dataItems.splice(foundIndex, 1, foundItem[0]);
      }

      return dataItems;
    });

    onCheckChange(items);
  }

  return (
    <div className={grid.root}>
      <Accordion className={according.root}>
        <AccordionSummary
          className={accordionSummary.root}
          expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <SettingsIcon className={accordionSummary.icon} />
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={accordionDetails.root}>
          <div>
            {
              items &&
              items.map((item, key) => {
                return (
                  <div key={key}>
                    <FormControlLabel
                      className={accordionDetails.controlLabel}
                      key={key}
                      aria-label="Acknowledge"
                      control={
                        <Checkbox color="default"
                          value={item.title}
                          defaultChecked={item.value}
                          onChange={(e) => { checkChangeHandler(item.title, e.target.checked) }}
                        />}
                      label={item.title}
                    />
                  </div>
                )
              })
            }
          </div>
          <Divider />
          <div className={accordionDetails.footer}>
            <Button
              variant="contained"
              color="secondary"
              className={accordionDetails.button}
              onClick={onCancelClick}
            >انصراف</Button>
            <Button
              variant="contained"
              className={accordionDetails.button}
              onClick={onSaveClick}
            >ذخیره</Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default SimpleAccordion
