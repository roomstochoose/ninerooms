(function(){try{
var c=(location.pathname.split("/").pop()||"index").replace(/\.html$/,"");
var k="nr_v_"+c, v=localStorage.getItem(k); localStorage.setItem(k,(v?v+",":"")+Date.now());
if(!localStorage.nr_t0)localStorage.nr_t0=Date.now();
}catch(e){}})();
