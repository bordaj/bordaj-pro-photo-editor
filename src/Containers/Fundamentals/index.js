import React, { useState, useEffect } from "react";
import * as codes from "../../helpers/codes";
const Fundamentals = (props) => {
   const { ctx, setContext, canvas, image } = props;
   const [brightness, setBrightness] = useState(0)
   const [contrast, setContrast] = useState(0)
   const [hue, setHue] = useState(0)
   const [vibrance, setVibrance] = useState(0)
   const [sepia, setSepia] = useState(0)

   const stateHelper = (code, val) => {

      if (code === codes.BRIGHTNESS) {
         setBrightness(val)
      } else if (code === codes.CONTRAST) {
         setContrast(val)
      } else if (code === codes.VIBRANCE) {
         setVibrance(val)
      } else if (code === codes.SEPIA) {
         setSepia(val)
      } else if (code === codes.HUE) {
         setHue(val)
      }

   }

   const applyFundamentals = (code, e) => {
      const value = parseInt(e.target.value) || 0
      stateHelper(code, value)
      return window.Caman('#canvas', image, function () {
         this.revert(false);
         this.brightness(code == codes.BRIGHTNESS ? value : brightness).hue(code == codes.HUE ? value : hue).contrast(code == codes.CONTRAST ? value : contrast).vibrance(code == codes.VIBRANCE ? value : vibrance).sepia(code == codes.SEPIA ? value : sepia).render();
      });
   }
   useEffect(() => {
      console.log(brightness, contrast, hue, sepia, vibrance, 'here')
   }, [brightness, contrast, hue, sepia, vibrance])

   return (
      <>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label for="brightness">Brightness  <span>{brightness}</span></label>
            <input onChange={e => applyFundamentals(codes.BRIGHTNESS, e)} id="brightness" name="brightness" type="range" min="-100" max="100" value={brightness} />
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label for="contrast">Contrast  <span>{contrast}</span></label>
            <input onChange={e => applyFundamentals(codes.CONTRAST, e)} id="contrast" name="contrast" type="range" min="-20" max="20" value={contrast} />
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label for="hue">Hue  <span>{hue}</span></label>
            <input onChange={e => applyFundamentals(codes.HUE, e)} id="hue" name="hue" type="range" min="0" max="150" value={hue} step={5} />
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label for="vibrance">vibrance  <span>{vibrance}</span></label>
            <input onChange={e => applyFundamentals(codes.VIBRANCE, e)} id="vibrance" name="vibrance" type="range" min="0" max="300" value={vibrance} />
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label for="sepia">sepia  <span>{sepia}</span></label>
            <input onChange={e => applyFundamentals(codes.SEPIA, e)} id="sepia" name="sepia" type="range" min="-100" max="100" value={sepia} />
         </div>
      </>
   );
}
export default Fundamentals