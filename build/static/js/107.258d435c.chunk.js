(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[107],{1556:function(r,e,n){"use strict";var t=n(49);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(n(0)),s=(0,t(n(69)).default)(a.default.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");e.default=s},3083:function(r,e,n){"use strict";n.r(e);var t=n(0),a=n.n(t),s=n(359),o=n(408),c=n(407),l=n(406),i=n(167),u=n(458),m=Object(i.a)((function(r){return{progress:{margin:r.spacing(2)}}}));function f(){var r=m();return a.a.createElement("div",null,a.a.createElement(u.a,{className:r.progress}),a.a.createElement(u.a,{className:r.progress,color:"secondary"}))}var d=n(3),p=n(23),g=n(4),v=n(196),y=n(270),b=n(490),E=n(210),C=n.n(E),h=n(1556),S=n.n(h),P=Object(i.a)((function(r){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:r.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:v.a[500],"&:hover":{backgroundColor:v.a[700]}},fabProgress:{color:v.a[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:v.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function k(){var r=P(),e=a.a.useState(!1),n=Object(p.a)(e,2),t=n[0],s=n[1],o=a.a.useState(!1),c=Object(p.a)(o,2),l=c[0],i=c[1],m=a.a.useRef(),f=Object(g.default)(Object(d.a)({},r.buttonSuccess,l));function v(){t||(i(!1),s(!0),m.current=setTimeout((function(){i(!0),s(!1)}),2e3))}return a.a.useEffect((function(){return function(){clearTimeout(m.current)}}),[]),a.a.createElement("div",{className:r.root},a.a.createElement("div",{className:r.wrapper},a.a.createElement(b.a,{"aria-label":"save",color:"primary",className:f,onClick:v},l?a.a.createElement(C.a,null):a.a.createElement(S.a,null)),t&&a.a.createElement(u.a,{size:68,className:r.fabProgress})),a.a.createElement("div",{className:r.wrapper},a.a.createElement(y.a,{variant:"contained",color:"primary",className:f,disabled:t,onClick:v},"Accept terms"),t&&a.a.createElement(u.a,{size:24,className:r.buttonProgress})))}var N=Object(i.a)((function(r){return{progress:{margin:r.spacing(2)}}}));function x(){var r=N(),e=a.a.useState(0),n=Object(p.a)(e,2),t=n[0],s=n[1];return a.a.useEffect((function(){var r=setInterval((function(){s((function(r){return r>=100?0:r+1}))}),20);return function(){clearInterval(r)}}),[]),a.a.createElement("div",null,a.a.createElement(u.a,{className:r.progress,variant:"determinate",value:t}),a.a.createElement(u.a,{className:r.progress,variant:"determinate",value:t,color:"secondary"}))}var L=Object(i.a)((function(r){return{progress:{margin:r.spacing(2)}}}));function R(){var r=L(),e=a.a.useState(0),n=Object(p.a)(e,2),t=n[0],s=n[1];return a.a.useEffect((function(){var r=setInterval((function(){s((function(r){return r>=100?0:r+10}))}),1e3);return function(){clearInterval(r)}}),[]),a.a.createElement("div",null,a.a.createElement(u.a,{className:r.progress,variant:"static",value:5}),a.a.createElement(u.a,{className:r.progress,variant:"static",value:25}),a.a.createElement(u.a,{className:r.progress,variant:"static",value:50}),a.a.createElement(u.a,{className:r.progress,variant:"static",value:75}),a.a.createElement(u.a,{className:r.progress,variant:"static",value:100}),a.a.createElement(u.a,{className:r.progress,variant:"static",value:t}))}var I=n(372),O=Object(i.a)({root:{flexGrow:1}});function j(){var r=O();return a.a.createElement("div",{className:r.root},a.a.createElement(I.a,null),a.a.createElement("br",null),a.a.createElement(I.a,{color:"secondary"}))}var w=Object(i.a)({root:{flexGrow:1}});function B(){var r=w(),e=a.a.useState(0),n=Object(p.a)(e,2),t=n[0],s=n[1];return a.a.useEffect((function(){var r=setInterval((function(){s((function(r){if(100===r)return 0;var e=10*Math.random();return Math.min(r+e,100)}))}),500);return function(){clearInterval(r)}}),[]),a.a.createElement("div",{className:r.root},a.a.createElement(I.a,{variant:"determinate",value:t}),a.a.createElement("br",null),a.a.createElement(I.a,{color:"secondary",variant:"determinate",value:t}))}var T=Object(i.a)({root:{flexGrow:1}});function z(){var r=T(),e=a.a.useState(0),n=Object(p.a)(e,2),t=n[0],s=n[1],o=a.a.useState(10),c=Object(p.a)(o,2),l=c[0],i=c[1],u=a.a.useRef((function(){}));return a.a.useEffect((function(){u.current=function(){if(t>100)s(0),i(10);else{var r=10*Math.random(),e=10*Math.random();s(t+r),i(t+r+e)}}})),a.a.useEffect((function(){var r=setInterval((function(){u.current()}),500);return function(){clearInterval(r)}}),[]),a.a.createElement("div",{className:r.root},a.a.createElement(I.a,{variant:"buffer",value:t,valueBuffer:l}),a.a.createElement("br",null),a.a.createElement(I.a,{color:"secondary",variant:"buffer",value:t,valueBuffer:l}))}var F=Object(i.a)({root:{flexGrow:1}});function D(){var r=F();return a.a.createElement("div",{className:r.root},a.a.createElement(I.a,{variant:"query"}),a.a.createElement("br",null),a.a.createElement(I.a,{color:"secondary",variant:"query"}))}var q=n(10),G=n(19),M=Object(q.a)({root:{color:"#00695c"}})(u.a),Q=Object(q.a)({colorPrimary:{backgroundColor:"#b2dfdb"},barColorPrimary:{backgroundColor:"#00695c"}})(I.a),A=Object(q.a)({root:{height:10,backgroundColor:Object(G.i)("#ff6c5c",.5)},bar:{borderRadius:20,backgroundColor:"#ff6c5c"}})(I.a),H=Object(i.a)({root:{position:"relative"},top:{color:"#eef3fd"},bottom:{color:"#6798e5",animationDuration:"550ms",position:"absolute",left:0}});function J(r){var e=H();return a.a.createElement("div",{className:e.root},a.a.createElement(u.a,Object.assign({variant:"determinate",value:100,className:e.top,size:24,thickness:4},r)),a.a.createElement(u.a,Object.assign({variant:"indeterminate",disableShrink:!0,className:e.bottom,size:24,thickness:4},r)))}var V=Object(i.a)((function(r){return{root:{flexGrow:1},margin:{margin:r.spacing(1)}}}));function _(){var r=V();return a.a.createElement("div",{className:r.root},a.a.createElement(M,{size:30,thickness:5}),a.a.createElement(Q,{className:r.margin}),a.a.createElement(A,{className:r.margin,variant:"determinate",color:"secondary",value:50}),a.a.createElement(J,null))}var U=n(273),Y=n(82),K=Object(i.a)((function(r){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},button:{margin:r.spacing(2)},placeholder:{height:40}}}));function W(){var r=K(),e=a.a.useState(!1),n=Object(p.a)(e,2),t=n[0],s=n[1],o=a.a.useState("idle"),c=Object(p.a)(o,2),l=c[0],i=c[1],m=a.a.useRef();return a.a.useEffect((function(){return function(){clearTimeout(m.current)}}),[]),a.a.createElement("div",{className:r.root},a.a.createElement("div",{className:r.placeholder},a.a.createElement(U.a,{in:t,style:{transitionDelay:t?"800ms":"0ms"},unmountOnExit:!0},a.a.createElement(u.a,null))),a.a.createElement(y.a,{onClick:function(){s((function(r){return!r}))},className:r.button},t?"Stop loading":"Loading"),a.a.createElement("div",{className:r.placeholder},"success"===l?a.a.createElement(Y.a,null,"Success!"):a.a.createElement(U.a,{in:"progress"===l,style:{transitionDelay:"progress"===l?"800ms":"0ms"},unmountOnExit:!0},a.a.createElement(u.a,null))),a.a.createElement(y.a,{onClick:function(){clearTimeout(m.current),"idle"===l?(i("progress"),m.current=setTimeout((function(){i("success")}),2e3)):i("idle")},className:r.button},"idle"!==l?"Reset":"Simulate a load"))}e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:"Progress",description:"Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process. The animation works with CSS, not JavaScript.",refUrl:"https://material-ui.com/components/progress/"}),a.a.createElement(l.a,null,a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Circular Progress",component:f,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  progress: {\r\n    margin: theme.spacing(2),\r\n  },\r\n}));\r\n\r\nexport default function CircularIndeterminate() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div>\r\n      <CircularProgress className={classes.progress} />\r\n      <CircularProgress className={classes.progress} color='secondary' />\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Interactive Integration",component:k,source:"import React from 'react';\r\nimport clsx from 'clsx';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport {green} from '@material-ui/core/colors';\r\nimport Button from '@material-ui/core/Button';\r\nimport Fab from '@material-ui/core/Fab';\r\nimport CheckIcon from '@material-ui/icons/Check';\r\nimport SaveIcon from '@material-ui/icons/Save';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    display: 'flex',\r\n    alignItems: 'center',\r\n  },\r\n  wrapper: {\r\n    margin: theme.spacing(1),\r\n    position: 'relative',\r\n  },\r\n  buttonSuccess: {\r\n    backgroundColor: green[500],\r\n    '&:hover': {\r\n      backgroundColor: green[700],\r\n    },\r\n  },\r\n  fabProgress: {\r\n    color: green[500],\r\n    position: 'absolute',\r\n    top: -6,\r\n    left: -6,\r\n    zIndex: 1,\r\n  },\r\n  buttonProgress: {\r\n    color: green[500],\r\n    position: 'absolute',\r\n    top: '50%',\r\n    left: '50%',\r\n    marginTop: -12,\r\n    marginLeft: -12,\r\n  },\r\n}));\r\n\r\nexport default function CircularIntegration() {\r\n  const classes = useStyles();\r\n  const [loading, setLoading] = React.useState(false);\r\n  const [success, setSuccess] = React.useState(false);\r\n  const timer = React.useRef();\r\n\r\n  const buttonClassname = clsx({\r\n    [classes.buttonSuccess]: success,\r\n  });\r\n\r\n  React.useEffect(() => {\r\n    return () => {\r\n      clearTimeout(timer.current);\r\n    };\r\n  }, []);\r\n\r\n  function handleButtonClick() {\r\n    if (!loading) {\r\n      setSuccess(false);\r\n      setLoading(true);\r\n      timer.current = setTimeout(() => {\r\n        setSuccess(true);\r\n        setLoading(false);\r\n      }, 2000);\r\n    }\r\n  }\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <div className={classes.wrapper}>\r\n        <Fab\r\n          aria-label='save'\r\n          color='primary'\r\n          className={buttonClassname}\r\n          onClick={handleButtonClick}>\r\n          {success ? <CheckIcon /> : <SaveIcon />}\r\n        </Fab>\r\n        {loading && (\r\n          <CircularProgress size={68} className={classes.fabProgress} />\r\n        )}\r\n      </div>\r\n      <div className={classes.wrapper}>\r\n        <Button\r\n          variant='contained'\r\n          color='primary'\r\n          className={buttonClassname}\r\n          disabled={loading}\r\n          onClick={handleButtonClick}>\r\n          Accept terms\r\n        </Button>\r\n        {loading && (\r\n          <CircularProgress size={24} className={classes.buttonProgress} />\r\n        )}\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Circular Determinate",component:x,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  progress: {\r\n    margin: theme.spacing(2),\r\n  },\r\n}));\r\n\r\nexport default function CircularDeterminate() {\r\n  const classes = useStyles();\r\n  const [progress, setProgress] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    function tick() {\r\n      // reset when reaching 100%\r\n      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));\r\n    }\r\n\r\n    const timer = setInterval(tick, 20);\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <div>\r\n      <CircularProgress\r\n        className={classes.progress}\r\n        variant='determinate'\r\n        value={progress}\r\n      />\r\n      <CircularProgress\r\n        className={classes.progress}\r\n        variant='determinate'\r\n        value={progress}\r\n        color='secondary'\r\n      />\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Circular Static",component:R,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  progress: {\r\n    margin: theme.spacing(2),\r\n  },\r\n}));\r\n\r\nexport default function CircularStatic() {\r\n  const classes = useStyles();\r\n  const [completed, setCompleted] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    function progress() {\r\n      setCompleted((prevCompleted) =>\r\n        prevCompleted >= 100 ? 0 : prevCompleted + 10,\r\n      );\r\n    }\r\n\r\n    const timer = setInterval(progress, 1000);\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <div>\r\n      <CircularProgress\r\n        className={classes.progress}\r\n        variant='static'\r\n        value={5}\r\n      />\r\n      <CircularProgress\r\n        className={classes.progress}\r\n        variant='static'\r\n        value={25}\r\n      />\r\n      <CircularProgress\r\n        className={classes.progress}\r\n        variant='static'\r\n        value={50}\r\n      />\r\n      <CircularProgress\r\n        className={classes.progress}\r\n        variant='static'\r\n        value={75}\r\n      />\r\n      <CircularProgress\r\n        className={classes.progress}\r\n        variant='static'\r\n        value={100}\r\n      />\r\n      <CircularProgress\r\n        className={classes.progress}\r\n        variant='static'\r\n        value={completed}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Linear Indeterminate",component:j,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    flexGrow: 1,\r\n  },\r\n});\r\n\r\nexport default function LinearIndeterminate() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <LinearProgress />\r\n      <br />\r\n      <LinearProgress color='secondary' />\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Linear Determinate",component:B,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    flexGrow: 1,\r\n  },\r\n});\r\n\r\nexport default function LinearDeterminate() {\r\n  const classes = useStyles();\r\n  const [completed, setCompleted] = React.useState(0);\r\n\r\n  React.useEffect(() => {\r\n    function progress() {\r\n      setCompleted((oldCompleted) => {\r\n        if (oldCompleted === 100) {\r\n          return 0;\r\n        }\r\n        const diff = Math.random() * 10;\r\n        return Math.min(oldCompleted + diff, 100);\r\n      });\r\n    }\r\n\r\n    const timer = setInterval(progress, 500);\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <LinearProgress variant='determinate' value={completed} />\r\n      <br />\r\n      <LinearProgress\r\n        color='secondary'\r\n        variant='determinate'\r\n        value={completed}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Linear Buffer",component:z,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    flexGrow: 1,\r\n  },\r\n});\r\n\r\nexport default function LinearBuffer() {\r\n  const classes = useStyles();\r\n  const [completed, setCompleted] = React.useState(0);\r\n  const [buffer, setBuffer] = React.useState(10);\r\n\r\n  const progress = React.useRef(() => {});\r\n  React.useEffect(() => {\r\n    progress.current = () => {\r\n      if (completed > 100) {\r\n        setCompleted(0);\r\n        setBuffer(10);\r\n      } else {\r\n        const diff = Math.random() * 10;\r\n        const diff2 = Math.random() * 10;\r\n        setCompleted(completed + diff);\r\n        setBuffer(completed + diff + diff2);\r\n      }\r\n    };\r\n  });\r\n\r\n  React.useEffect(() => {\r\n    function tick() {\r\n      progress.current();\r\n    }\r\n\r\n    const timer = setInterval(tick, 500);\r\n\r\n    return () => {\r\n      clearInterval(timer);\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <LinearProgress variant='buffer' value={completed} valueBuffer={buffer} />\r\n      <br />\r\n      <LinearProgress\r\n        color='secondary'\r\n        variant='buffer'\r\n        value={completed}\r\n        valueBuffer={buffer}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Linear Query",component:D,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    flexGrow: 1,\r\n  },\r\n});\r\n\r\nexport default function LinearQuery() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <LinearProgress variant='query' />\r\n      <br />\r\n      <LinearProgress color='secondary' variant='query' />\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Customized progress bars",component:_,source:"import React from 'react';\r\nimport {lighten, makeStyles, withStyles} from '@material-ui/core/styles';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport LinearProgress from '@material-ui/core/LinearProgress';\r\n\r\nconst ColorCircularProgress = withStyles({\r\n  root: {\r\n    color: '#00695c',\r\n  },\r\n})(CircularProgress);\r\n\r\nconst ColorLinearProgress = withStyles({\r\n  colorPrimary: {\r\n    backgroundColor: '#b2dfdb',\r\n  },\r\n  barColorPrimary: {\r\n    backgroundColor: '#00695c',\r\n  },\r\n})(LinearProgress);\r\n\r\nconst BorderLinearProgress = withStyles({\r\n  root: {\r\n    height: 10,\r\n    backgroundColor: lighten('#ff6c5c', 0.5),\r\n  },\r\n  bar: {\r\n    borderRadius: 20,\r\n    backgroundColor: '#ff6c5c',\r\n  },\r\n})(LinearProgress);\r\n\r\n// Inspired by the Facebook spinners.\r\nconst useStylesFacebook = makeStyles({\r\n  root: {\r\n    position: 'relative',\r\n  },\r\n  top: {\r\n    color: '#eef3fd',\r\n  },\r\n  bottom: {\r\n    color: '#6798e5',\r\n    animationDuration: '550ms',\r\n    position: 'absolute',\r\n    left: 0,\r\n  },\r\n});\r\n\r\nfunction FacebookProgress(props) {\r\n  const classes = useStylesFacebook();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <CircularProgress\r\n        variant='determinate'\r\n        value={100}\r\n        className={classes.top}\r\n        size={24}\r\n        thickness={4}\r\n        {...props}\r\n      />\r\n      <CircularProgress\r\n        variant='indeterminate'\r\n        disableShrink\r\n        className={classes.bottom}\r\n        size={24}\r\n        thickness={4}\r\n        {...props}\r\n      />\r\n    </div>\r\n  );\r\n}\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    flexGrow: 1,\r\n  },\r\n  margin: {\r\n    margin: theme.spacing(1),\r\n  },\r\n}));\r\n\r\nexport default function CustomizedProgressBars() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <ColorCircularProgress size={30} thickness={5} />\r\n      <ColorLinearProgress className={classes.margin} />\r\n      <BorderLinearProgress\r\n        className={classes.margin}\r\n        variant='determinate'\r\n        color='secondary'\r\n        value={50}\r\n      />\r\n      <FacebookProgress />\r\n    </div>\r\n  );\r\n}\r\n",description:"Here are some examples of customizing the component. You can learn more about this in the overrides documentation page."})),a.a.createElement(s.a,{item:!0,xs:12,lg:6},a.a.createElement(o.a,{title:"Delaying appearance",component:W,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Fade from '@material-ui/core/Fade';\r\nimport Button from '@material-ui/core/Button';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport Typography from '@material-ui/core/Typography';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    display: 'flex',\r\n    flexDirection: 'column',\r\n    alignItems: 'center',\r\n  },\r\n  button: {\r\n    margin: theme.spacing(2),\r\n  },\r\n  placeholder: {\r\n    height: 40,\r\n  },\r\n}));\r\n\r\nexport default function DelayingAppearance() {\r\n  const classes = useStyles();\r\n  const [loading, setLoading] = React.useState(false);\r\n  const [query, setQuery] = React.useState('idle');\r\n  const timerRef = React.useRef();\r\n\r\n  React.useEffect(\r\n    () => () => {\r\n      clearTimeout(timerRef.current);\r\n    },\r\n    [],\r\n  );\r\n\r\n  function handleClickLoading() {\r\n    setLoading((prevLoading) => !prevLoading);\r\n  }\r\n\r\n  function handleClickQuery() {\r\n    clearTimeout(timerRef.current);\r\n\r\n    if (query !== 'idle') {\r\n      setQuery('idle');\r\n      return;\r\n    }\r\n\r\n    setQuery('progress');\r\n    timerRef.current = setTimeout(() => {\r\n      setQuery('success');\r\n    }, 2000);\r\n  }\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <div className={classes.placeholder}>\r\n        <Fade\r\n          in={loading}\r\n          style={{\r\n            transitionDelay: loading ? '800ms' : '0ms',\r\n          }}\r\n          unmountOnExit>\r\n          <CircularProgress />\r\n        </Fade>\r\n      </div>\r\n      <Button onClick={handleClickLoading} className={classes.button}>\r\n        {loading ? 'Stop loading' : 'Loading'}\r\n      </Button>\r\n      <div className={classes.placeholder}>\r\n        {query === 'success' ? (\r\n          <Typography>Success!</Typography>\r\n        ) : (\r\n          <Fade\r\n            in={query === 'progress'}\r\n            style={{\r\n              transitionDelay: query === 'progress' ? '800ms' : '0ms',\r\n            }}\r\n            unmountOnExit>\r\n            <CircularProgress />\r\n          </Fade>\r\n        )}\r\n      </div>\r\n      <Button onClick={handleClickQuery} className={classes.button}>\r\n        {query !== 'idle' ? 'Reset' : 'Simulate a load'}\r\n      </Button>\r\n    </div>\r\n  );\r\n}\r\n",description:"There are 3 important limits to know around response time. The ripple effect of the ButtonBase component ensures that the user feels that the system is reacting instantaneously. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display a loader to keep user's flow of thought uninterrupted."}))))}}}]);
//# sourceMappingURL=107.258d435c.chunk.js.map