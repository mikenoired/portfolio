type OptionsType = {
  animate: boolean;
  patternWidth: number;
  patternHeight: number;
  grainOpacity: number;
  grainDensity: number;
  grainWidth: number;
  grainHeight: number;
  grainChaos: number;
  grainSpeed: number;
};

export default function grain(ele: HTMLDivElement, options: OptionsType) {
  const prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];

  const generateNoise = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = options.patternWidth;
    canvas.height = options.patternHeight;
    for (let w = 0; w < options.patternWidth; w += options.grainDensity) {
      for (let h = 0; h < options.patternHeight; h += options.grainDensity) {
        const rgb = (Math.random() * 256) | 0;
        if (ctx) {
          ctx.fillStyle = `rgba(${[
            rgb,
            rgb,
            rgb,
            options.grainOpacity,
          ].join()})`;
          ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
        }
      }
    }
    return canvas.toDataURL("image/png");
  };
  const noise = generateNoise();

  const addCSSRule = (
    sheet: CSSStyleSheet,
    selector: string,
    rules: string,
  ) => {
    let ins = "";
    selector.length ? (ins = `${selector}{${rules}}`) : (ins = rules);

    if ("insertRule" in sheet) {
      sheet.insertRule(ins);
    } else if ("addRule" in sheet) {
      (sheet as CSSStyleSheet).insertRule(rules);
    }
  };

  let animation = "";
  const keyFrames = [
    "0%:-10%,10%",
    "10%:-25%,0%",
    "20%:-30%,10%",
    "30%:-30%,30%",
    "40%::-20%,20%",
    "50%:-15%,10%",
    "60%:-20%,20%",
    "70%:-5%,20%",
    "80%:-25%,5%",
    "90%:-30%,25%",
    "100%:-10%,10%",
  ];

  let pre = prefixes.length;
  while (pre--) {
    animation += `@${prefixes[pre]}keyframes grained{`;
    for (let key = 0; key < keyFrames.length; key++) {
      const keyVal = keyFrames[key].split(":");
      animation += `${keyVal[0]}{`;
      animation += `${prefixes[pre]}transform:translate(${keyVal[1]});`;
      animation += "}";
    }
    animation += "}";
  }

  const animationAdded = document.getElementById("graineAnimation");
  if (animationAdded) {
    animationAdded.parentElement?.removeChild(animationAdded);
  }
  let style = document.createElement("style");
  style.id = "grained-animation";
  style.innerHTML = animation;
  document.body.appendChild(style);

  const styleAdded = document.getElementById(`graineAnimation-"${ele.id}`);
  if (styleAdded) {
    styleAdded.parentElement?.removeChild(styleAdded);
  }

  style = document.createElement("style");
  style.id = `graineAnimation-${ele.id}`;
  document.body.appendChild(style);

  let rule = `background-image:url(${noise});position:absolute;content:"";height:300%;width:300%;left:-100%;top:-100%;`;
  pre = prefixes.length;
  if (options.animate) {
    while (pre--) {
      rule += `${prefixes[pre]}animation-name:grained;`;
      rule += `${prefixes[pre]}animation-iteration-count: infinite;`;
      rule += `${prefixes[pre]}animation-duration:${options.grainChaos}s;`;
      rule += `${prefixes[pre]}animation-timing-function: steps(${options.grainSpeed}, end);`;
    }
  }

  const selectorElement = `#${ele.id}::before`;
  addCSSRule(style.sheet as CSSStyleSheet, selectorElement, rule);
}
