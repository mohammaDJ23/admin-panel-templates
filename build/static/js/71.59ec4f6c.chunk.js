(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[71],{1448:function(e,a,n){"use strict";var r=n(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(0)),i=(0,r(n(69)).default)(t.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");a.default=i},1457:function(e,a,n){"use strict";var r=n(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(0)),i=(0,r(n(69)).default)(t.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");a.default=i},1461:function(e,a,n){"use strict";var r=n(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(0)),i=(0,r(n(69)).default)(t.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.default=i},1636:function(e,a,n){"use strict";var r=n(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(0)),i=(0,r(n(69)).default)(t.default.createElement("path",{d:"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");a.default=i},1637:function(e,a,n){"use strict";var r=n(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(0)),i=(0,r(n(69)).default)(t.default.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");a.default=i},3129:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),i=n(359),o=n(408),l=n(407),c=n(406),s=n(167),m=n(490),d=n(1448),u=n.n(d),p=n(1461),b=n.n(p),f=n(1457),v=n.n(f),g=n(1636),h=n.n(g),x=Object(s.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}));function y(){var e=x();return t.a.createElement("div",{className:e.root},t.a.createElement(m.a,{color:"primary","aria-label":"add"},t.a.createElement(u.a,null)),t.a.createElement(m.a,{color:"secondary","aria-label":"edit"},t.a.createElement(b.a,null)),t.a.createElement(m.a,{variant:"extended"},t.a.createElement(h.a,{className:e.extendedIcon}),"Navigate"),t.a.createElement(m.a,{disabled:!0,"aria-label":"like"},t.a.createElement(v.a,null)))}var E=Object(s.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}));function I(){var e=E();return t.a.createElement("div",null,t.a.createElement("div",null,t.a.createElement(m.a,{size:"small",color:"secondary","aria-label":"add",className:e.margin},t.a.createElement(u.a,null)),t.a.createElement(m.a,{size:"medium",color:"secondary","aria-label":"add",className:e.margin},t.a.createElement(u.a,null)),t.a.createElement(m.a,{color:"secondary","aria-label":"add",className:e.margin},t.a.createElement(u.a,null))),t.a.createElement("div",null,t.a.createElement(m.a,{variant:"extended",size:"small",color:"primary","aria-label":"add",className:e.margin},t.a.createElement(h.a,{className:e.extendedIcon}),"Extended"),t.a.createElement(m.a,{variant:"extended",size:"medium",color:"primary","aria-label":"add",className:e.margin},t.a.createElement(h.a,{className:e.extendedIcon}),"Extended"),t.a.createElement(m.a,{variant:"extended",color:"primary","aria-label":"add",className:e.margin},t.a.createElement(h.a,{className:e.extendedIcon}),"Extended")))}var N=n(23),F=n(148),T=n(4),A=n(1681),w=n.n(A),S=n(40),O=n(470),P=n(531),k=n(512),C=n(82),z=n(526),j=n(1637),B=n.n(j),M=n(196),R=n(68);function V(e){var a=e.children,n=e.value,r=e.index,i=Object(F.a)(e,["children","value","index"]);return t.a.createElement(C.a,Object.assign({component:"div",role:"tabpanel",hidden:n!==r,id:"action-tabpanel-".concat(r),"aria-labelledby":"action-tab-".concat(r)},i),n===r&&t.a.createElement(R.a,{p:3},a))}function _(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}var L=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,position:"relative",minHeight:200},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},fabGreen:{color:e.palette.common.white,backgroundColor:M.a[500],"&:hover":{backgroundColor:M.a[600]}}}}));function U(){var e=L(),a=Object(S.a)(),n=t.a.useState(0),r=Object(N.a)(n,2),i=r[0],o=r[1],l={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},c=[{color:"primary",className:e.fab,icon:t.a.createElement(u.a,null),label:"Add"},{color:"secondary",className:e.fab,icon:t.a.createElement(b.a,null),label:"Edit"},{color:"inherit",className:Object(T.default)(e.fab,e.fabGreen),icon:t.a.createElement(B.a,null),label:"Expand"}];return t.a.createElement("div",{className:e.root},t.a.createElement(O.a,{position:"static",color:"default"},t.a.createElement(P.a,{value:i,onChange:function(e,a){o(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example"},t.a.createElement(k.a,Object.assign({label:"Item One"},_(0))),t.a.createElement(k.a,Object.assign({label:"Item Two"},_(1))),t.a.createElement(k.a,Object.assign({label:"Item Three"},_(2))))),t.a.createElement(w.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){o(e)}},t.a.createElement(V,{value:i,index:0,dir:a.direction},"Item One"),t.a.createElement(V,{value:i,index:1,dir:a.direction},"Item Two"),t.a.createElement(V,{value:i,index:2,dir:a.direction},"Item Three")),c.map((function(e,a){return t.a.createElement(z.a,{key:e.color,in:i===a,timeout:l,style:{transitionDelay:"".concat(i===a?l.exit:0,"ms")},unmountOnExit:!0},t.a.createElement(m.a,{"aria-label":e.label,className:e.className,color:e.color},e.icon))})))}a.default=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement(l.a,{title:"Floating action button",description:"A floating action button (FAB) performs the primary, or most common, action on a screen.",refUrl:"https://material-ui.com/components/floating-action-button/"}),t.a.createElement(c.a,null,t.a.createElement(i.a,{item:!0,xs:12},t.a.createElement(o.a,{title:"Floating Action Button",component:y,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Fab from '@material-ui/core/Fab';\r\nimport AddIcon from '@material-ui/icons/Add';\r\nimport EditIcon from '@material-ui/icons/Edit';\r\nimport FavoriteIcon from '@material-ui/icons/Favorite';\r\nimport NavigationIcon from '@material-ui/icons/Navigation';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    '& > *': {\r\n      margin: theme.spacing(1),\r\n    },\r\n  },\r\n  extendedIcon: {\r\n    marginRight: theme.spacing(1),\r\n  },\r\n}));\r\n\r\nexport default function FloatingActionButtons() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Fab color='primary' aria-label='add'>\r\n        <AddIcon />\r\n      </Fab>\r\n      <Fab color='secondary' aria-label='edit'>\r\n        <EditIcon />\r\n      </Fab>\r\n      <Fab variant='extended'>\r\n        <NavigationIcon className={classes.extendedIcon} />\r\n        Navigate\r\n      </Fab>\r\n      <Fab disabled aria-label='like'>\r\n        <FavoriteIcon />\r\n      </Fab>\r\n    </div>\r\n  );\r\n}\r\n",description:"A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended."})),t.a.createElement(i.a,{item:!0,xs:12},t.a.createElement(o.a,{title:"Size",component:I,source:"import React from 'react';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\nimport Fab from '@material-ui/core/Fab';\r\nimport AddIcon from '@material-ui/icons/Add';\r\nimport NavigationIcon from '@material-ui/icons/Navigation';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  margin: {\r\n    margin: theme.spacing(1),\r\n  },\r\n  extendedIcon: {\r\n    marginRight: theme.spacing(1),\r\n  },\r\n}));\r\n\r\nexport default function FloatingActionButtonSize() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div>\r\n      <div>\r\n        <Fab\r\n          size='small'\r\n          color='secondary'\r\n          aria-label='add'\r\n          className={classes.margin}>\r\n          <AddIcon />\r\n        </Fab>\r\n        <Fab\r\n          size='medium'\r\n          color='secondary'\r\n          aria-label='add'\r\n          className={classes.margin}>\r\n          <AddIcon />\r\n        </Fab>\r\n        <Fab color='secondary' aria-label='add' className={classes.margin}>\r\n          <AddIcon />\r\n        </Fab>\r\n      </div>\r\n      <div>\r\n        <Fab\r\n          variant='extended'\r\n          size='small'\r\n          color='primary'\r\n          aria-label='add'\r\n          className={classes.margin}>\r\n          <NavigationIcon className={classes.extendedIcon} />\r\n          Extended\r\n        </Fab>\r\n        <Fab\r\n          variant='extended'\r\n          size='medium'\r\n          color='primary'\r\n          aria-label='add'\r\n          className={classes.margin}>\r\n          <NavigationIcon className={classes.extendedIcon} />\r\n          Extended\r\n        </Fab>\r\n        <Fab\r\n          variant='extended'\r\n          color='primary'\r\n          aria-label='add'\r\n          className={classes.margin}>\r\n          <NavigationIcon className={classes.extendedIcon} />\r\n          Extended\r\n        </Fab>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n",description:"Use the size prop for larger or smaller floating action buttons."})),t.a.createElement(i.a,{item:!0,xs:12,lg:6},t.a.createElement(o.a,{title:"Animation",component:U,source:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport clsx from 'clsx';\r\nimport SwipeableViews from 'react-swipeable-views';\r\nimport {makeStyles, useTheme} from '@material-ui/core/styles';\r\nimport AppBar from '@material-ui/core/AppBar';\r\nimport Tabs from '@material-ui/core/Tabs';\r\nimport Tab from '@material-ui/core/Tab';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Zoom from '@material-ui/core/Zoom';\r\nimport Fab from '@material-ui/core/Fab';\r\nimport AddIcon from '@material-ui/icons/Add';\r\nimport EditIcon from '@material-ui/icons/Edit';\r\nimport UpIcon from '@material-ui/icons/KeyboardArrowUp';\r\nimport {green} from '@material-ui/core/colors';\r\nimport Box from '@material-ui/core/Box';\r\n\r\nfunction TabPanel(props) {\r\n  const {children, value, index, ...other} = props;\r\n\r\n  return (\r\n    <Typography\r\n      component='div'\r\n      role='tabpanel'\r\n      hidden={value !== index}\r\n      id={`action-tabpanel-${index}`}\r\n      aria-labelledby={`action-tab-${index}`}\r\n      {...other}>\r\n      {value === index && <Box p={3}>{children}</Box>}\r\n    </Typography>\r\n  );\r\n}\r\n\r\nTabPanel.propTypes = {\r\n  children: PropTypes.node,\r\n  index: PropTypes.any.isRequired,\r\n  value: PropTypes.any.isRequired,\r\n};\r\n\r\nfunction a11yProps(index) {\r\n  return {\r\n    id: `action-tab-${index}`,\r\n    'aria-controls': `action-tabpanel-${index}`,\r\n  };\r\n}\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    backgroundColor: theme.palette.background.paper,\r\n    width: 500,\r\n    position: 'relative',\r\n    minHeight: 200,\r\n  },\r\n  fab: {\r\n    position: 'absolute',\r\n    bottom: theme.spacing(2),\r\n    right: theme.spacing(2),\r\n  },\r\n  fabGreen: {\r\n    color: theme.palette.common.white,\r\n    backgroundColor: green[500],\r\n    '&:hover': {\r\n      backgroundColor: green[600],\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function FloatingActionButtonZoom() {\r\n  const classes = useStyles();\r\n  const theme = useTheme();\r\n  const [value, setValue] = React.useState(0);\r\n\r\n  const handleChange = (event, newValue) => {\r\n    setValue(newValue);\r\n  };\r\n\r\n  const handleChangeIndex = (index) => {\r\n    setValue(index);\r\n  };\r\n\r\n  const transitionDuration = {\r\n    enter: theme.transitions.duration.enteringScreen,\r\n    exit: theme.transitions.duration.leavingScreen,\r\n  };\r\n\r\n  const fabs = [\r\n    {\r\n      color: 'primary',\r\n      className: classes.fab,\r\n      icon: <AddIcon />,\r\n      label: 'Add',\r\n    },\r\n    {\r\n      color: 'secondary',\r\n      className: classes.fab,\r\n      icon: <EditIcon />,\r\n      label: 'Edit',\r\n    },\r\n    {\r\n      color: 'inherit',\r\n      className: clsx(classes.fab, classes.fabGreen),\r\n      icon: <UpIcon />,\r\n      label: 'Expand',\r\n    },\r\n  ];\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <AppBar position='static' color='default'>\r\n        <Tabs\r\n          value={value}\r\n          onChange={handleChange}\r\n          indicatorColor='primary'\r\n          textColor='primary'\r\n          variant='fullWidth'\r\n          aria-label='action tabs example'>\r\n          <Tab label='Item One' {...a11yProps(0)} />\r\n          <Tab label='Item Two' {...a11yProps(1)} />\r\n          <Tab label='Item Three' {...a11yProps(2)} />\r\n        </Tabs>\r\n      </AppBar>\r\n      <SwipeableViews\r\n        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}\r\n        index={value}\r\n        onChangeIndex={handleChangeIndex}>\r\n        <TabPanel value={value} index={0} dir={theme.direction}>\r\n          Item One\r\n        </TabPanel>\r\n        <TabPanel value={value} index={1} dir={theme.direction}>\r\n          Item Two\r\n        </TabPanel>\r\n        <TabPanel value={value} index={2} dir={theme.direction}>\r\n          Item Three\r\n        </TabPanel>\r\n      </SwipeableViews>\r\n      {fabs.map((fab, index) => (\r\n        <Zoom\r\n          key={fab.color}\r\n          in={value === index}\r\n          timeout={transitionDuration}\r\n          style={{\r\n            transitionDelay: `${\r\n              value === index ? transitionDuration.exit : 0\r\n            }ms`,\r\n          }}\r\n          unmountOnExit>\r\n          <Fab\r\n            aria-label={fab.label}\r\n            className={fab.className}\r\n            color={fab.color}>\r\n            {fab.icon}\r\n          </Fab>\r\n        </Zoom>\r\n      ))}\r\n    </div>\r\n  );\r\n}\r\n",description:"The floating action button animates onto the screen as an expanding piece of material, by default."}))))}}}]);
//# sourceMappingURL=71.59ec4f6c.chunk.js.map