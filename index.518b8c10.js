document.addEventListener("click",function(t){var e=document.querySelector(".spider"),n=document.querySelector(".wall").getBoundingClientRect(),i=e.getBoundingClientRect(),o=t.clientX-i.width/2,c=t.clientY-i.height/2;o=Math.max(n.left,Math.min(o,n.right-i.width)),c=Math.max(n.top,Math.min(c,n.bottom-i.height)),e.style.position="absolute",e.style.left="".concat(o,"px"),e.style.top="".concat(c,"px")});
//# sourceMappingURL=index.518b8c10.js.map
