const floatBtn = document.createElement("button");
floatBtn.innerText = "抓取图片";
floatBtn.style.position="fixed";
floatBtn.style.bottom="30px";
floatBtn.style.right="30px";
floatBtn.style.background="linear-gradient(90deg,#28c76f,#39d98a)";
floatBtn.style.color="#fff";
floatBtn.style.border="none";
floatBtn.style.padding="12px 18px";
floatBtn.style.borderRadius="8px";
floatBtn.style.zIndex="99999";
document.body.appendChild(floatBtn);

floatBtn.onclick = ()=>{
  const imgs = Array.from(document.querySelectorAll("img"))
  .filter(img=>img.src && img.src.startsWith("http"))
  .map(img=>img.src);
  const uniqueImgs = [...new Set(imgs)];
  alert(`一共找到${uniqueImgs.length}张图片，开始批量下载`);
  uniqueImgs.forEach((src,idx)=>{
    chrome.runtime.sendMessage({type:"download",url:src,filename:`img_${idx}.png`})
  })
}
