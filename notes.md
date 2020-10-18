```
yarn add react-router-dom
yarn add @types/react-router-dom
yarn add react-bootstrap
yarn add bootstrap
yarn add popper.js@^1.16.1
yarn add "jquery@1.9.1 - 3"
yarn add @types/jquery@3.5.1 or yarn add @types/jquery
```

# namespace

- https://github.com/harrysolovay/rescripts
- https://ostrowski.ninja/typescript-namespaces-cra/

```
nents/themes/basic/Header.tsx
[1] SyntaxError: /home/lucky/workspace/projects/personal-website/acrlakshman/src/components/themes/basic/Header.tsx: Namespace not marked type-only declare. Non-declarative namespaces are only supported experimentally in Babel. To enable and review caveats see: https://babeljs.io/docs/en/babel-plugin-transform-typescript
[1]    5 | import '../../styles.css';
[1]    6 |
[1] >  7 | namespace BasicN {
[1]      |           ^^^^^^
[1]    8 |   interface AppProps {
[1]    9 |     profile: ProfileWeb;
[1]   10 |   }

yarn add --dev @babel/plugin-transform-typescript
```

## @types/webpack-env
```
function importAll(r: any) {
  return r.keys().map(r);
}

const imagesAll = importAll(require.context('../../../images', false, /\.(png|jpe?g|svg)$/));
```

## React-Markdown
* https://www.newline.co/@dmitryrogozhny/how-to-render-markdown-in-react-with-react-markdown--5d1c3849
```
const RenderImage = (props: ImageProps) => {
  // console.log(re_weburl.test(props.src));
  let imageSrc = props.src;
  if (!re_weburl.test(props.src)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${props.src}`;
  }
  // const [fullSize, setFullSize] = useState<boolean>(true);
  // const handleClick = () => {
  //   setFullSize(!fullSize);
  //   console.log(fullSize);
  // };
  return (
    <img
      className="avatar"
      alt={props.alt}
      src={imageSrc}
      style={{ width: '150px', height: '150px', display: 'inherit' }}
      // onClick={handleClick}
    />
  );
};
```

## Modal using Functional component

```
// const AppModal: FunctionComponent = (props) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose} size="lg" centered>
//         <Modal.Body>{props.children}</Modal.Body>
//       </Modal>
//     </>
//   );
// };
```

## images in table

```
| | | |
|-|-|-|
| ![alt][avatar] | &emsp;&emsp; | ![alt](pic1.png "title") |
```

## react-spring

### on hover

* https://medium.com/@robbertvancaem/using-react-spring-for-a-simple-hover-state-2a75beef6930

## social icons

* https://simpleicons.org/

## References
* https://fettblog.eu/typescript-react/components/
* https://www.newline.co/@dmitryrogozhny/how-to-render-markdown-in-react-with-react-markdown--5d1c3849