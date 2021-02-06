import React, { useEffect, useState, useRef } from "react";
import Fundamentals from '../Containers/Fundamentals'
const Home = () => {

   const [imgsrc, setImgsrc] = useState(null);
   const canvasRef = useRef(null);
   const [ctx, setCtx] = useState();

   const canvas = canvasRef.current;

   const image = new Image();
   image.crossOrigin = 'Anonymous';
   image.src = imgsrc;
   // console.log("image", imgsrc);
   // console.log("imgsrc", image.src.split("/")[image.src.split("/").length]);
   const setContext = (newCtx) => {
      console.log('set context');
      setCtx(newCtx);
   };

   async function drawImage(e) {
      if (e === 'initial') {
         let newCtx = await canvas.getContext('2d');
         setContext(newCtx);
         newCtx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
      } else {
         if (!canvas) {
            alert('Image not found!');
            return;
         }
      }
   }
   if (imgsrc !== null) {
      drawImage('initial');
   }


   const onSelectedFile = (e) => {
      e.preventDefault();
      let files;
      if (e.dataTransfer) {
         files = e.dataTransfer.files;
      } else if (e.target) {
         files = e.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
         setImgsrc(reader.result);
      };
      reader.readAsDataURL(files[0]);
   };
   const renderImage = () => {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.crossOrigin = '';
      img.src = imgsrc;

      img.onload = function () {
         canvas.width = img.width;
         canvas.height = img.height;
         ctx.drawImage(img, 0, 0, img.width, img.height);
      }
   }
   useEffect(() => {
      renderImage()
   }, [imgsrc]);

   return (
      <>
         <div style={{ margin: '0 16px' }}>
            <div style={{ padding: 24 }}>
               <input
                  className="custom-file-input"
                  type="file"
                  accept="image/*"
                  onChange={onSelectedFile}
                  id="initial"

               />
            </div>
            <canvas
               id="canvas"
               ref={canvasRef}
               width={600}
               height={400}
               style={{ border: '1px solid black' }}
            />
         </div>
         <Fundamentals ctx={ctx} setContext={setContext} canvas={canvas} image={image} />

      </>
   );
}
export default Home