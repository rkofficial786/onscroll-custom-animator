
# onscroll-custom-animator

Key Benefits:

Effortless Integration: Easily incorporate scroll-triggered animations into your React applications with a simple hook-based implementation.

Customizable Animations: Define custom animations or actions to execute when elements enter the viewport, allowing for tailored user experiences.

Optimized Performance: Designed for efficiency, the package ensures smooth scrolling experiences even with heavy animation requirements.

Versatile Applications: Beyond animations, use it to trigger lazy loading, execute JavaScript functions, fetch data, and more based on scroll interactions.






## Installation

Install my-project with npm

```bash
  npm i onscroll-custom-animator
```
    
## Usage/Examples

```javascript
// for single Element

import useOnScrollDetector from "onscroll-custom-animator";

function App() {
  const { isAnimationTriggered, ref } = useOnScrollDetector();

  return (
    <div className="App">
      <header
        ref={ref}
        className={`App-header ${isAnimationTriggered ? "fade-up" : ""}`}
      >
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

```javascript
// then make your custom animation classes and use it accordingly 

.fade-up {
  animation: fadeUpAnimation 0.5s ease-out;
}

@keyframes fadeUpAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

```



```javascript
// for multiple instance in a single component

const { isAnimationTriggered: animateHeader, ref: refHeader } =
  useOnScrollDetector();

const { isAnimationTriggered: animateContent, ref: refContent } =
  useOnScrollDetector();

const { isAnimationTriggered: animateLeftTop, ref: refLeftTop } =
  useOnScrollDetector();

const { isAnimationTriggered: animateLeftBottom, ref: refLeftBottom } =
  useOnScrollDetector();

const { isAnimationTriggered: animateRightTop, ref: refRightTop } =
  useOnScrollDetector();

const { isAnimationTriggered: animateRightBottom, ref: refRightBottom } =
  useOnScrollDetector();


```


## 🚀 About Me
I'm Rupraj Singh, a frontend developer specializing in React, Next.js, and React Native. I'm passionate about crafting delightful user experiences and have extensive experience building dynamic web and mobile applications.


## License

[Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0)


## Authors

- [@rkofficial786](https://github.com/rkofficial786)

