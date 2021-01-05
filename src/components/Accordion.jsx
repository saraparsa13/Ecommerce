import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const accordingStyles = makeStyles(() => ({
  root: {
    background: 'transparent',
    color: '#FFF',
    width: 500,
    borderRadius: 3
  }
}));
const accordionSummaryStyles = makeStyles(() => ({
  root: {
    background: 'rgba(0,0,0,0.5)',
    borderRadius: 3
  }
}));
const accordionDetailsStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const SimpleAccordion = ({ checkboxes }) => {

  const according = accordingStyles();
  const accordionDetails = accordionDetailsStyles()
  const accordionSummary = accordionSummaryStyles()

  return (
    <div>
      <Grid
        style={{
          marginTop: '5%',
        }}
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          <Accordion className={according.root}>
            <AccordionSummary
              className={accordionSummary.root}
              expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"

            >
              <SettingsIcon style={{ marginLeft: '2%' }} />
              <Typography>تنظیمات</Typography>
            </AccordionSummary>
            <AccordionDetails className={accordionDetails.root}>
              <div>
                {
                  checkboxes.map((checkbox, index) => {
                    console.log(checkbox.value)
                    return (
                      <div>
                        <FormControlLabel
                          style={{
                            padding: '2%'
                          }}
                          key={index}
                          aria-label="Acknowledge"
                          control={<Checkbox color="default" checked={checkbox.value}/>}
                          label={checkbox.title}
                        />
                      </div>
                    )
                  })
                }
              </div>
              <Divider />
              <div style={{
                padding: '3%',
                display: 'flex',
                flexFlow: 'row-reverse'
              }}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    margin: '1%'
                  }}>انصراف</Button>
                <Button
                  variant="contained"
                  style={{
                    margin: '1%'
                  }}>ذخیره</Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  )
}

export default SimpleAccordion
