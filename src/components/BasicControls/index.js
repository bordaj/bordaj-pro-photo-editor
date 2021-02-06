import React, { useState, useEffect } from "react";
const BasicControls = (props) => {
   const { ctx, setContext, canvas, image } = props;
   const [brightnessVal, setBrightnessVal] = useState(0)
   const [hueVal, setHueVal] = useState(0)

   const applyBrightness = (type, e) => {
      console.log(e)
      if (type === '-') {
         setBrightnessVal(brightnessVal - 10)
      }
      else {
         setBrightnessVal(brightnessVal + 10)

      }
      return window.Caman('#canvas', image, function () {
         this.revert(false);
         this.brightness(brightnessVal).render();
      });
   }
   const applyHue = (e) => {
      console.log(e.target.value)
      setHueVal(e.target.value)

      window.Caman('#canvas', image, function () {
         this.hue(hueVal).render();
      });
   }
   const applyVintage = (e) => {
      window.Caman('#canvas', image, function () {
         this.vintage().render();
      });
   }
   return (
      <>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div onClick={e => applyBrightness('-', e)} style={{ width: 100, border: '1px solid black', textAlign: 'center', }} >-</div>
            <label for="brightness">Brightness  <span>{brightnessVal}</span></label>
            <div onClick={e => applyBrightness('+', e)} style={{ width: 100, border: '1px solid black', textAlign: 'center', }} >+</div>
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label for="hue">Hue  <span>{hueVal}</span></label>
            <input onChange={e => applyHue(e)} id="hue" name="hue" type="range" min="0" max="300" value={hueVal} />
         </div>
         <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={e=>applyVintage(e)}>Apply Vintage</div>
      </>
   );
}
export default BasicControls