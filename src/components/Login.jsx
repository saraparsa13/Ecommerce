import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import backgroundImage from '../assets/images/bg.png'
import logo from '../assets/images/logo.svg'

import {
  Checkbox,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Paper,
  Grid,
  Hidden
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

const gridStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f4f5f7',
    height: '100vh',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem'
    },
  }
}))

const buttonStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#00885a',
    width: '60%',
    margin: '2%',
    alignContent: 'center',
    padding: '4%',
    color: 'white',
  }
}))

const paperStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF',
    width: 1000,
    height: 500,
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: 'auto'
    },
  }
}))

const textFieldStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    margin: '2%',
    "& label.MuiInputLabel-root ": {
      transform: "translate(270px, -6px) scale(0.75)",
      backgroundColor: 'white',
      padding: '2%',
      [theme.breakpoints.down('sm')]: {
        transform: "translate(140px, -6px) scale(0.75)",
        padding: '1%',
        fontSize: '0.9rem'
      },
    },
    "& label.Mui-focused": {
      color: '#FF7F63'
    },
    "& .MuiOutlinedInput-root": {
      "& input.MuiInputBase-input": {
        fontSize: '0.9rem',
        fontFamily: 'Sahel',
        // color: 'default',
        [theme.breakpoints.down('sm')]: {
          fontSize: '0.75rem'
        },
      },
      "& fieldset": {
        borderColor: "default",
        "& legend": {
          width: 0
        },
      },
      "&:hover fieldset": {
        borderColor: '#FF7F63',
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF7F63"
      }
    },
    "& p.MuiFormHelperText-root": {
      textAlign: 'right'
    },
    [theme.breakpoints.down('sm')]: {
      width: 208
    },
  }
}))

const formControlLabelStyles = makeStyles((theme) => ({
  root: {
    marginRight: 0,
    paddingTop: '7%',
    paddingBottom: '2%',
    "& span.MuiTypography-root": {
      fontSize: '0.9rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.75rem'
      },
    }
  }
}))

const typographyStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'flex-start',
    color: '#00885a',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    },
  }
}))

const flexStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}))

const divStyles = makeStyles(() => ({
  root: {
    width: '43%', 
    marginBottom: '2%' 
  }
}))

const Login = () => {
  const [formData, setFormData] = useState({
    username: 'لطفا نام کاربری خود را وارد نمایید',
    password: 'لطفا رمز عبور خود را وارد نمایید'
  })
  const { handleSubmit } = useForm();

  const grid = gridStyles()
  const button = buttonStyles()
  const paper = paperStyles()
  const textField = textFieldStyles()
  const formControlLabel = formControlLabelStyles()
  const typography = typographyStyles()
  const flex = flexStyles()
  const div = divStyles()

  const onSubmit = (e) => {
    console.log('hi')
  }

  const onchangeHandler = (e) => {
    if (e.target.name === 'username') {
      setFormData({...formData, username: e.target.value})
    }if (e.target.name === 'password') {
      setFormData({...formData, password: e.target.value})
    }
  }

  const clickHandler = (e) => {
    if (e.target.name === 'username' && formData.username.length !== 0) {
      setFormData({...formData, username: ""})
    }if (e.target.name === 'password' && formData.password.length !== 0) {
      setFormData({...formData, password: ""})
      console.log('yes')
    }
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={grid.root}>
      <Grid item lg={10}>
        <Paper className={paper.root} elevation={1} >
          <Grid item xs={6}
            container
            direction="column"
            justify="center"
            alignItems="center">
            <div className={flex.root, div.root}>
              <img style={{ width: 100, height: 100 }} src={logo} alt="" />
              <Typography 
                className={typography.root} 
                variant="h6">مدیریت گزارشات</Typography>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <TextField
                    required
                    className={textField.root}
                    label="نام کاربری"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    value={formData.username}
                    error={formData.username === ""}
                    helperText={
                      formData.username === "" ? 
                      'نام کاربری را وارد نمایید' :
                      ' '}
                    onChange={onchangeHandler}
                    onClick={clickHandler}
                    name='username'
                    />
                </div>
                <div>
                  <TextField
                    required
                    className={textField.root}
                    label="رمز عبور"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    value={formData.password}
                    error={formData.password === ""}
                    helperText={
                      formData.password === "" ?
                      'رمز عبور را وارد نمایید' :
                      ' '}
                    onChange={onchangeHandler}
                    onClick={clickHandler}
                    name='password'
                  />
                </div>
                <div>
                  <FormControlLabel
                    className={formControlLabel.root}
                    aria-label="Acknowledge"
                    control={
                      <Checkbox color="default" />}
                    label="به خاطر سپردن ورود من در این سیستم"
                  />
                </div>
                <div className={flex.root}>
                  <Button
                    type="submit"
                    className={button.root}
                    variant="contained">ورود</Button>
                </div>
              </form>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item xs={6}
              container
              justify="center"
              alignItems="center">
              <img src={backgroundImage} alt=""
                style={{
                  width: '90%',
                }} />
            </Grid>
          </Hidden>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login
