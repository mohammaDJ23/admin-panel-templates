(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[150],{3100:function(e,r,n){"use strict";n.r(r);var t=n(0),o=n.n(t),a=n(359),i=n(408),l=n(407),s=n(406),c=n(1504),p=function(){var e=Object(c.b)(),r=e.acceptedFiles,n=e.getRootProps,t=e.getInputProps,a=r.map((function(e){return o.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")}));return o.a.createElement("section",{className:"container"},o.a.createElement("div",n({className:"dropzone"}),o.a.createElement("input",t()),o.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")),o.a.createElement("aside",null,o.a.createElement("h6",null,"Files"),o.a.createElement("ul",null,a)))},m=function(e){var r=Object(c.b)({noDragEventsBubbling:!0}).getRootProps;return o.a.createElement("div",r({className:"dropzone"}),o.a.createElement("p",null,"Inner dropzone"))},d=function(e){var r=Object(c.b)({onDrop:function(e){return console.log(e)}}).getRootProps;return o.a.createElement("div",{className:"container"},o.a.createElement("div",r({className:"dropzone"}),o.a.createElement(m,null),o.a.createElement("p",null,"Outer dropzone")))},u=n(5),f={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#ffffff",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},g={borderColor:"#2196f3"},b={borderColor:"#00e676"},h={borderColor:"#ff1744"},E=function(e){var r=Object(c.b)({accept:"image/*"}),n=r.getRootProps,a=r.getInputProps,i=r.isDragActive,l=r.isDragAccept,s=r.isDragReject,p=Object(t.useMemo)((function(){return Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({},f),i?g:{}),l?b:{}),s?h:{})}),[i,l,s]);return o.a.createElement("div",{className:"container"},o.a.createElement("div",n({style:p}),o.a.createElement("input",a()),o.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))},v=function(e){var r=Object(c.b)({accept:"image/jpeg, image/png"}),n=r.acceptedFiles,t=r.rejectedFiles,a=r.getRootProps,i=r.getInputProps,l=n&&n.map((function(e){return o.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")})),s=t&&t.map((function(e){return o.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")}));return o.a.createElement("section",{className:"container"},o.a.createElement("div",a({className:"dropzone"}),o.a.createElement("input",i()),o.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"),o.a.createElement("em",null,"(Only *.jpeg and *.png images will be accepted)")),o.a.createElement("aside",null,o.a.createElement("h4",null,"Accepted files"),o.a.createElement("ul",null,l),o.a.createElement("h4",null,"Rejected files"),o.a.createElement("ul",null,s)))},y=n(270),D=n(68),z=function(e){var r=Object(c.b)({noClick:!0,noKeyboard:!0}),n=r.getRootProps,t=r.getInputProps,a=r.open,i=r.acceptedFiles.map((function(e){return o.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")}));return o.a.createElement("div",{className:"container"},o.a.createElement(D.a,Object.assign({mb:2},n({className:"dropzone"})),o.a.createElement("input",t()),o.a.createElement(D.a,{component:"p",mb:2},"Drag 'n' drop some files here"),o.a.createElement(y.a,{color:"primary",variant:"contained",onClick:a},"Open File Dialog")),o.a.createElement("aside",null,o.a.createElement("h6",null,"Files"),o.a.createElement("ul",null,i)))},R=n(23),P={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},x={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},j={display:"flex",minWidth:0,overflow:"hidden"},k={display:"block",width:"auto",height:"100%"},F=function(e){var r=Object(t.useState)([]),n=Object(R.a)(r,2),a=n[0],i=n[1],l=Object(c.b)({accept:"image/*",onDrop:function(e){i(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),s=l.getRootProps,p=l.getInputProps,m=a.map((function(e){return o.a.createElement("div",{style:x,key:e.name},o.a.createElement("div",{style:j},o.a.createElement("img",{alt:"preview",src:e.preview,style:k})))}));return Object(t.useEffect)((function(){return function(){a.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[a]),o.a.createElement("section",{className:"container"},o.a.createElement("div",s({className:"dropzone"}),o.a.createElement("input",p()),o.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")),o.a.createElement("aside",{style:P},m))},O=n(413),I=n(414),N=n(416),w=n(415),C=function(e){Object(N.a)(n,e);var r=Object(w.a)(n);function n(){var e;return Object(O.a)(this,n),(e=r.call(this)).onDrop=function(r){e.setState({files:r})},e.state={files:[]},e}return Object(I.a)(n,[{key:"render",value:function(){var e=this.state.files.map((function(e){return o.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")}));return o.a.createElement(c.a,{onDrop:this.onDrop},(function(r){var n=r.getRootProps,t=r.getInputProps;return o.a.createElement("section",{className:"container"},o.a.createElement("div",n({className:"dropzone"}),o.a.createElement("input",t()),o.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")),o.a.createElement("aside",null,o.a.createElement("h6",null,"Files"),o.a.createElement("ul",null,e)))}))}}]),n}(t.Component);r.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:"React Dropzone",description:"Simple React hook to create a HTML5-compliant drag'n'drop zone for files.",refUrl:"https://react-dropzone.netlify.com/"}),o.a.createElement(s.a,null,o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Basic",component:p,source:"import React from 'react';\r\nimport {useDropzone} from 'react-dropzone';\r\n\r\nconst Basic = () => {\r\n  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();\r\n\r\n  const files = acceptedFiles.map((file) => (\r\n    <li key={file.path}>\r\n      {file.path} - {file.size} bytes\r\n    </li>\r\n  ));\r\n\r\n  return (\r\n    <section className='container'>\r\n      <div {...getRootProps({className: 'dropzone'})}>\r\n        <input {...getInputProps()} />\r\n        <p>Drag 'n' drop some files here, or click to select files</p>\r\n      </div>\r\n      <aside>\r\n        <h6>Files</h6>\r\n        <ul>{files}</ul>\r\n      </aside>\r\n    </section>\r\n  );\r\n};\r\n\r\nexport default Basic;\r\n"})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Event Propagation",component:d,source:"import React from 'react';\r\nimport {useDropzone} from 'react-dropzone';\r\n\r\nconst EventPropagation = (props) => {\r\n  const {getRootProps} = useDropzone({\r\n    // Note how this callback is never invoked if drop occurs on the inner dropzone\r\n    onDrop: (files) => console.log(files),\r\n  });\r\n\r\n  return (\r\n    <div className='container'>\r\n      <div {...getRootProps({className: 'dropzone'})}>\r\n        <InnerDropzone />\r\n        <p>Outer dropzone</p>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nconst InnerDropzone = (props) => {\r\n  const {getRootProps} = useDropzone({noDragEventsBubbling: true});\r\n  return (\r\n    <div {...getRootProps({className: 'dropzone'})}>\r\n      <p>Inner dropzone</p>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default EventPropagation;\r\n"})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Specific`File Types",component:v,source:"import React from 'react';\r\nimport {useDropzone} from 'react-dropzone';\r\n\r\nconst SpecificFileTypes = (props) => {\r\n  const {\r\n    acceptedFiles,\r\n    rejectedFiles,\r\n    getRootProps,\r\n    getInputProps,\r\n  } = useDropzone({\r\n    accept: 'image/jpeg, image/png',\r\n  });\r\n\r\n  const acceptedFilesItems =\r\n    acceptedFiles &&\r\n    acceptedFiles.map((file) => (\r\n      <li key={file.path}>\r\n        {file.path} - {file.size} bytes\r\n      </li>\r\n    ));\r\n\r\n  const rejectedFilesItems =\r\n    rejectedFiles &&\r\n    rejectedFiles.map((file) => (\r\n      <li key={file.path}>\r\n        {file.path} - {file.size} bytes\r\n      </li>\r\n    ));\r\n\r\n  return (\r\n    <section className='container'>\r\n      <div {...getRootProps({className: 'dropzone'})}>\r\n        <input {...getInputProps()} />\r\n        <p>Drag 'n' drop some files here, or click to select files</p>\r\n        <em>(Only *.jpeg and *.png images will be accepted)</em>\r\n      </div>\r\n      <aside>\r\n        <h4>Accepted files</h4>\r\n        <ul>{acceptedFilesItems}</ul>\r\n        <h4>Rejected files</h4>\r\n        <ul>{rejectedFilesItems}</ul>\r\n      </aside>\r\n    </section>\r\n  );\r\n};\r\nexport default SpecificFileTypes;\r\n"})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Dialog Programmatically",component:z,source:"import React from 'react';\r\nimport {useDropzone} from 'react-dropzone';\r\nimport Button from '@material-ui/core/Button';\r\nimport Box from '@material-ui/core/Box';\r\n\r\nconst DialogProgrammatically = (props) => {\r\n  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({\r\n    // Disable click and keydown behavior\r\n    noClick: true,\r\n    noKeyboard: true,\r\n  });\r\n\r\n  const files = acceptedFiles.map((file) => (\r\n    <li key={file.path}>\r\n      {file.path} - {file.size} bytes\r\n    </li>\r\n  ));\r\n\r\n  return (\r\n    <div className='container'>\r\n      <Box mb={2} {...getRootProps({className: 'dropzone'})}>\r\n        <input {...getInputProps()} />\r\n        <Box component='p' mb={2}>\r\n          Drag 'n' drop some files here\r\n        </Box>\r\n        <Button color='primary' variant='contained' onClick={open}>\r\n          Open File Dialog\r\n        </Button>\r\n      </Box>\r\n      <aside>\r\n        <h6>Files</h6>\r\n        <ul>{files}</ul>\r\n      </aside>\r\n    </div>\r\n  );\r\n};\r\nexport default DialogProgrammatically;\r\n"})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Styling Dropzone",component:E,source:"import React, {useMemo} from 'react';\r\nimport {useDropzone} from 'react-dropzone';\r\n\r\nconst baseStyle = {\r\n  flex: 1,\r\n  display: 'flex',\r\n  flexDirection: 'column',\r\n  alignItems: 'center',\r\n  padding: '20px',\r\n  borderWidth: 2,\r\n  borderRadius: 2,\r\n  borderColor: '#eeeeee',\r\n  borderStyle: 'dashed',\r\n  backgroundColor: '#ffffff',\r\n  color: '#bdbdbd',\r\n  outline: 'none',\r\n  transition: 'border .24s ease-in-out',\r\n};\r\n\r\nconst activeStyle = {\r\n  borderColor: '#2196f3',\r\n};\r\n\r\nconst acceptStyle = {\r\n  borderColor: '#00e676',\r\n};\r\n\r\nconst rejectStyle = {\r\n  borderColor: '#ff1744',\r\n};\r\n\r\nconst StyledDropzone = (props) => {\r\n  const {\r\n    getRootProps,\r\n    getInputProps,\r\n    isDragActive,\r\n    isDragAccept,\r\n    isDragReject,\r\n  } = useDropzone({accept: 'image/*'});\r\n\r\n  const style = useMemo(\r\n    () => ({\r\n      ...baseStyle,\r\n      ...(isDragActive ? activeStyle : {}),\r\n      ...(isDragAccept ? acceptStyle : {}),\r\n      ...(isDragReject ? rejectStyle : {}),\r\n    }),\r\n    [isDragActive, isDragAccept, isDragReject],\r\n  );\r\n\r\n  return (\r\n    <div className='container'>\r\n      <div {...getRootProps({style})}>\r\n        <input {...getInputProps()} />\r\n        <p>Drag 'n' drop some files here, or click to select files</p>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default StyledDropzone;\r\n"})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Previews",component:F,source:"import React, {useEffect, useState} from 'react';\r\nimport {useDropzone} from 'react-dropzone';\r\n\r\nconst thumbsContainer = {\r\n  display: 'flex',\r\n  flexDirection: 'row',\r\n  flexWrap: 'wrap',\r\n  marginTop: 16,\r\n};\r\n\r\nconst thumb = {\r\n  display: 'inline-flex',\r\n  borderRadius: 2,\r\n  border: '1px solid #eaeaea',\r\n  marginBottom: 8,\r\n  marginRight: 8,\r\n  width: 100,\r\n  height: 100,\r\n  padding: 4,\r\n  boxSizing: 'border-box',\r\n};\r\n\r\nconst thumbInner = {\r\n  display: 'flex',\r\n  minWidth: 0,\r\n  overflow: 'hidden',\r\n};\r\n\r\nconst img = {\r\n  display: 'block',\r\n  width: 'auto',\r\n  height: '100%',\r\n};\r\n\r\nconst Previews = (props) => {\r\n  const [files, setFiles] = useState([]);\r\n  const {getRootProps, getInputProps} = useDropzone({\r\n    accept: 'image/*',\r\n    onDrop: (acceptedFiles) => {\r\n      setFiles(\r\n        acceptedFiles.map((file) =>\r\n          Object.assign(file, {\r\n            preview: URL.createObjectURL(file),\r\n          }),\r\n        ),\r\n      );\r\n    },\r\n  });\r\n\r\n  const thumbs = files.map((file) => (\r\n    <div style={thumb} key={file.name}>\r\n      <div style={thumbInner}>\r\n        <img alt='preview' src={file.preview} style={img} />\r\n      </div>\r\n    </div>\r\n  ));\r\n\r\n  useEffect(\r\n    () => () => {\r\n      // Make sure to revoke the db uris to avoid memory leaks\r\n      files.forEach((file) => URL.revokeObjectURL(file.preview));\r\n    },\r\n    [files],\r\n  );\r\n\r\n  return (\r\n    <section className='container'>\r\n      <div {...getRootProps({className: 'dropzone'})}>\r\n        <input {...getInputProps()} />\r\n        <p>Drag 'n' drop some files here, or click to select files</p>\r\n      </div>\r\n      <aside style={thumbsContainer}>{thumbs}</aside>\r\n    </section>\r\n  );\r\n};\r\n\r\nexport default Previews;\r\n"})),o.a.createElement(a.a,{item:!0,xs:12,lg:6},o.a.createElement(i.a,{title:"Class Components",component:C,source:"import React, {Component} from 'react';\r\nimport Dropzone from 'react-dropzone';\r\n\r\nclass ClassComponents extends Component {\r\n  constructor() {\r\n    super();\r\n    this.onDrop = (files) => {\r\n      this.setState({files});\r\n    };\r\n    this.state = {\r\n      files: [],\r\n    };\r\n  }\r\n\r\n  render() {\r\n    const files = this.state.files.map((file) => (\r\n      <li key={file.name}>\r\n        {file.name} - {file.size} bytes\r\n      </li>\r\n    ));\r\n\r\n    return (\r\n      <Dropzone onDrop={this.onDrop}>\r\n        {({getRootProps, getInputProps}) => (\r\n          <section className='container'>\r\n            <div {...getRootProps({className: 'dropzone'})}>\r\n              <input {...getInputProps()} />\r\n              <p>Drag 'n' drop some files here, or click to select files</p>\r\n            </div>\r\n            <aside>\r\n              <h6>Files</h6>\r\n              <ul>{files}</ul>\r\n            </aside>\r\n          </section>\r\n        )}\r\n      </Dropzone>\r\n    );\r\n  }\r\n}\r\n\r\nexport default ClassComponents;\r\n"}))))}}}]);
//# sourceMappingURL=150.efd649da.chunk.js.map