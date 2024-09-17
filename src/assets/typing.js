import React from "react";
import Typed from "typed.js";

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am Halur Muhammad Abiyyu, a D4 Informatics Engineering student at Politeknik Negeri Malang. I am an experienced software developer with expertise in front-end and full-stack development, proficient in React, Laravel, and Git/GitHub. I am dedicated to creating high-quality, responsive web applications.",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <p ref={el} />;
}

export default MyComponent;
