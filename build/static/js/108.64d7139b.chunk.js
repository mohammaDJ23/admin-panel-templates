(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[108],{1522:function(e,n,r){"use strict";var t=r(49);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(r(0)),o=(0,t(r(69)).default)(a.default.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");n.default=o},3119:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(359),l=r(408),i=r(407),u=r(406),c=r(270),m=r(474),s=r(167),p=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}}}}));function d(){var e=p();return a.a.createElement("div",{className:e.root},a.a.createElement(m.a,{color:"primary","aria-label":"outlined primary button group"},a.a.createElement(c.a,null,"One"),a.a.createElement(c.a,null,"Two"),a.a.createElement(c.a,null,"Three")),a.a.createElement(m.a,{variant:"contained",color:"primary","aria-label":"contained primary button group"},a.a.createElement(c.a,null,"One"),a.a.createElement(c.a,null,"Two"),a.a.createElement(c.a,null,"Three")),a.a.createElement(m.a,{variant:"text",color:"primary","aria-label":"text primary button group"},a.a.createElement(c.a,null,"One"),a.a.createElement(c.a,null,"Two"),a.a.createElement(c.a,null,"Three")))}var B=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}}}}));function f(){var e=B();return a.a.createElement("div",{className:e.root},a.a.createElement(m.a,{size:"small","aria-label":"small outlined button group"},a.a.createElement(c.a,null,"One"),a.a.createElement(c.a,null,"Two"),a.a.createElement(c.a,null,"Three")),a.a.createElement(m.a,{color:"secondary","aria-label":"outlined secondary button group"},a.a.createElement(c.a,null,"One"),a.a.createElement(c.a,null,"Two"),a.a.createElement(c.a,null,"Three")),a.a.createElement(m.a,{size:"large",color:"primary","aria-label":"large outlined primary button group"},a.a.createElement(c.a,null,"One"),a.a.createElement(c.a,null,"Two"),a.a.createElement(c.a,null,"Three")))}var b=Object(s.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function y(){var e=b();return a.a.createElement("div",{className:e.root},a.a.createElement(m.a,{orientation:"vertical",color:"primary","aria-label":"vertical outlined primary button group"},a.a.createElement(c.a,null,"One"),a.a.createElement(c.a,null,"Two"),a.a.createElement(c.a,null,"Three")),a.a.createElement(m.a,{orientation:"vertical",color:"primary","aria-label":"vertical contained primary button group",variant:"contained"},a.a.createElement(c.a,null,"One"),a.a.createElement(c.a,null,"Two"),a.a.createElement(c.a,null,"Three")),a.a.createElement(m.a,{orientation:"vertical",color:"primary","aria-label":"vertical contained primary button group",variant:"text"},a.a.createElement(c.a,null,"One"),a.a.createElement(c.a,null,"Two"),a.a.createElement(c.a,null,"Three")))}var g=r(23),E=r(1522),v=r.n(E),h=r(363),T=r(224),x=r(122),G=r(373),w=r(456),O=r(336),k=["Create a merge commit","Squash and merge","Rebase and merge"];function S(){var e=a.a.useState(!1),n=Object(g.a)(e,2),r=n[0],t=n[1],l=a.a.useRef(null),i=a.a.useState(1),u=Object(g.a)(i,2),s=u[0],p=u[1],d=function(e){l.current&&l.current.contains(e.target)||t(!1)};return a.a.createElement(o.a,{container:!0,direction:"column",alignItems:"center"},a.a.createElement(o.a,{item:!0,xs:12},a.a.createElement(m.a,{variant:"contained",color:"primary",ref:l,"aria-label":"split button"},a.a.createElement(c.a,{onClick:function(){console.info("You clicked ".concat(k[s]))}},k[s]),a.a.createElement(c.a,{color:"primary",size:"small","aria-controls":r?"split-button-menu":void 0,"aria-expanded":r?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){t((function(e){return!e}))}},a.a.createElement(v.a,null))),a.a.createElement(G.a,{open:r,anchorEl:l.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var n=e.TransitionProps,r=e.placement;return a.a.createElement(T.a,Object.assign({},n,{style:{transformOrigin:"bottom"===r?"center top":"center bottom"}}),a.a.createElement(x.a,null,a.a.createElement(h.a,{onClickAway:d},a.a.createElement(O.a,{id:"split-button-menu"},k.map((function(e,n){return a.a.createElement(w.a,{key:e,disabled:2===n,selected:n===s,onClick:function(e){return function(e,n){p(n),t(!1)}(0,n)}},e)}))))))}))))}n.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{title:"Button group",description:"The ButtonGroup component can be used to group related buttons.",refUrl:"https://material-ui.com/components/button-group/"}),a.a.createElement(u.a,null,a.a.createElement(o.a,{item:!0,xs:12},a.a.createElement(l.a,{title:"Basic button group",component:d,source:"import React from 'react';\r\nimport Button from '@material-ui/core/Button';\r\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    display: 'flex',\r\n    flexDirection: 'column',\r\n    alignItems: 'center',\r\n    '& > *': {\r\n      margin: theme.spacing(1),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function Basic() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <ButtonGroup color='primary' aria-label='outlined primary button group'>\r\n        <Button>One</Button>\r\n        <Button>Two</Button>\r\n        <Button>Three</Button>\r\n      </ButtonGroup>\r\n      <ButtonGroup\r\n        variant='contained'\r\n        color='primary'\r\n        aria-label='contained primary button group'>\r\n        <Button>One</Button>\r\n        <Button>Two</Button>\r\n        <Button>Three</Button>\r\n      </ButtonGroup>\r\n      <ButtonGroup\r\n        variant='text'\r\n        color='primary'\r\n        aria-label='text primary button group'>\r\n        <Button>One</Button>\r\n        <Button>Two</Button>\r\n        <Button>Three</Button>\r\n      </ButtonGroup>\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(o.a,{item:!0,xs:12},a.a.createElement(l.a,{title:"Sizes and colors",component:f,source:"import React from 'react';\r\nimport Button from '@material-ui/core/Button';\r\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    display: 'flex',\r\n    flexDirection: 'column',\r\n    alignItems: 'center',\r\n    '& > *': {\r\n      margin: theme.spacing(1),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function SizesColors() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <ButtonGroup size='small' aria-label='small outlined button group'>\r\n        <Button>One</Button>\r\n        <Button>Two</Button>\r\n        <Button>Three</Button>\r\n      </ButtonGroup>\r\n      <ButtonGroup\r\n        color='secondary'\r\n        aria-label='outlined secondary button group'>\r\n        <Button>One</Button>\r\n        <Button>Two</Button>\r\n        <Button>Three</Button>\r\n      </ButtonGroup>\r\n      <ButtonGroup\r\n        size='large'\r\n        color='primary'\r\n        aria-label='large outlined primary button group'>\r\n        <Button>One</Button>\r\n        <Button>Two</Button>\r\n        <Button>Three</Button>\r\n      </ButtonGroup>\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(o.a,{item:!0,xs:12},a.a.createElement(l.a,{title:"Vertical group",component:y,source:"import React from 'react';\r\nimport Button from '@material-ui/core/Button';\r\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\r\nimport {makeStyles} from '@material-ui/core/styles';\r\n\r\nconst useStyles = makeStyles((theme) => ({\r\n  root: {\r\n    display: 'flex',\r\n    '& > *': {\r\n      margin: theme.spacing(1),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function VerticalGroup() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <ButtonGroup\r\n        orientation='vertical'\r\n        color='primary'\r\n        aria-label='vertical outlined primary button group'>\r\n        <Button>One</Button>\r\n        <Button>Two</Button>\r\n        <Button>Three</Button>\r\n      </ButtonGroup>\r\n      <ButtonGroup\r\n        orientation='vertical'\r\n        color='primary'\r\n        aria-label='vertical contained primary button group'\r\n        variant='contained'>\r\n        <Button>One</Button>\r\n        <Button>Two</Button>\r\n        <Button>Three</Button>\r\n      </ButtonGroup>\r\n      <ButtonGroup\r\n        orientation='vertical'\r\n        color='primary'\r\n        aria-label='vertical contained primary button group'\r\n        variant='text'>\r\n        <Button>One</Button>\r\n        <Button>Two</Button>\r\n        <Button>Three</Button>\r\n      </ButtonGroup>\r\n    </div>\r\n  );\r\n}\r\n"})),a.a.createElement(o.a,{item:!0,xs:12},a.a.createElement(l.a,{title:"Split button",component:S,source:"import React from 'react';\r\nimport Grid from '@material-ui/core/Grid';\r\nimport Button from '@material-ui/core/Button';\r\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\r\nimport ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';\r\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\r\nimport Grow from '@material-ui/core/Grow';\r\nimport Paper from '@material-ui/core/Paper';\r\nimport Popper from '@material-ui/core/Popper';\r\nimport MenuItem from '@material-ui/core/MenuItem';\r\nimport MenuList from '@material-ui/core/MenuList';\r\n\r\nconst options = [\r\n  'Create a merge commit',\r\n  'Squash and merge',\r\n  'Rebase and merge',\r\n];\r\n\r\nexport default function SplitButton() {\r\n  const [open, setOpen] = React.useState(false);\r\n  const anchorRef = React.useRef(null);\r\n  const [selectedIndex, setSelectedIndex] = React.useState(1);\r\n\r\n  const handleClick = () => {\r\n    console.info(`You clicked ${options[selectedIndex]}`);\r\n  };\r\n\r\n  const handleMenuItemClick = (event, index) => {\r\n    setSelectedIndex(index);\r\n    setOpen(false);\r\n  };\r\n\r\n  const handleToggle = () => {\r\n    setOpen((prevOpen) => !prevOpen);\r\n  };\r\n\r\n  const handleClose = (event) => {\r\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\r\n      return;\r\n    }\r\n\r\n    setOpen(false);\r\n  };\r\n\r\n  return (\r\n    <Grid container direction='column' alignItems='center'>\r\n      <Grid item xs={12}>\r\n        <ButtonGroup\r\n          variant='contained'\r\n          color='primary'\r\n          ref={anchorRef}\r\n          aria-label='split button'>\r\n          <Button onClick={handleClick}>{options[selectedIndex]}</Button>\r\n          <Button\r\n            color='primary'\r\n            size='small'\r\n            aria-controls={open ? 'split-button-menu' : undefined}\r\n            aria-expanded={open ? 'true' : undefined}\r\n            aria-label='select merge strategy'\r\n            aria-haspopup='menu'\r\n            onClick={handleToggle}>\r\n            <ArrowDropDownIcon />\r\n          </Button>\r\n        </ButtonGroup>\r\n        <Popper\r\n          open={open}\r\n          anchorEl={anchorRef.current}\r\n          role={undefined}\r\n          transition\r\n          disablePortal>\r\n          {({TransitionProps, placement}) => (\r\n            <Grow\r\n              {...TransitionProps}\r\n              style={{\r\n                transformOrigin:\r\n                  placement === 'bottom' ? 'center top' : 'center bottom',\r\n              }}>\r\n              <Paper>\r\n                <ClickAwayListener onClickAway={handleClose}>\r\n                  <MenuList id='split-button-menu'>\r\n                    {options.map((option, index) => (\r\n                      <MenuItem\r\n                        key={option}\r\n                        disabled={index === 2}\r\n                        selected={index === selectedIndex}\r\n                        onClick={(event) => handleMenuItemClick(event, index)}>\r\n                        {option}\r\n                      </MenuItem>\r\n                    ))}\r\n                  </MenuList>\r\n                </ClickAwayListener>\r\n              </Paper>\r\n            </Grow>\r\n          )}\r\n        </Popper>\r\n      </Grid>\r\n    </Grid>\r\n  );\r\n}\r\n",description:"ButtonGroup can also be used to create a split button. The dropdown can change the button action (as in this example), or be used to immediately trigger a related action."}))))}}}]);
//# sourceMappingURL=108.64d7139b.chunk.js.map