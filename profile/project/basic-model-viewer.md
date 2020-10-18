### Basic Model Viewer

In this project I have written a C++ based application to render and visualize 3D models using ModernGL. This project is aimed to do as a learning project for beginners. To visualize models and get camera parameters before rendering using [PoVRay](https://pov-ray.com) or [Mitsuba-renderer], etc.

Features include:
* Normals visualization
* Vectors
* Wireframe

[video](https://www.youtube.com/watch?v=ysz5S6PUM-U "show_video")

![alt][avatar]
![alt](pic1.png "title 1 2")

| | | |
|-|-|-|
| ![alt][avatar] | ![alt](pic1.png "title") | ![alt][avatar] |

```js
const RenderImage = (props: ImageProps) => {
  // console.log(re_weburl.test(props.src));
  let imageSrc = props.src;
  if (!re_weburl.test(props.src)) {
    imageSrc = `${process.env.PUBLIC_URL}/${config.imagesPath}/${props.src}`;
  }

  return (
    <img
      className="avatar"
      alt={props.alt}
      src={imageSrc}
      style={{ width: '150px', height: '150px', display: 'inherit' }}
    />
  );
};
```

## `Type` while using <Link>
```js
const Project = (props: RouteComponentProps<Params>) => {
  console.log(props)
  return (
    <div>
      <p> Came from home</p>
      <Link to="/">Go to home</Link>
    </div>
  )
}
```

## References
* [link]
* [link1][link]
* [link2](https://www.newline.co/@dmitryrogozhny/how-to-render-markdown-in-react-with-react-markdown--5d1c3849)
* [link3](https://www.newline.co/@dmitryrogozhny/how-to-render-markdown-in-react-with-react-markdown--5d1c3849 "link3")
* [http://google.com](http://google.com "title")
* https://fettblog.eu/typescript-react/components/
* https://www.newline.co/@dmitryrogozhny/how-to-render-markdown-in-react-with-react-markdown--5d1c3849

[link]: https://www.newline.co/@dmitryrogozhny/how-to-render-markdown-in-react-with-react-markdown--5d1c3849
[Mitsuba-renderer]: https://github.com/mitsuba-renderer/mitsuba2
[avatar]: https://avatars0.githubusercontent.com/u/2924807?s=460&u=7172ff75dedfd5a0dfb0af60fca7ed1560f1fb04&v=4
[avatar22]: pic1.png