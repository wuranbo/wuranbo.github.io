document.WuRanbo={};
document.WuRanbo.isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    }
             ,BlackBerry: function() {
                 return navigator.userAgent.match(/BlackBerry/i);
             }
             ,iOS: function() {
                 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
             }
             ,Opera: function() {
                 return navigator.userAgent.match(/Opera Mini/i);
             }
             ,Windows: function() {
                 return navigator.userAgent.match(/IEMobile/i);
             }
             ,any: function() {
                 return (document.WuRanbo.isMobile.Android() || document.WuRanbo.isMobile.BlackBerry() || document.WuRanbo.isMobile.iOS() || document.WuRanbo.isMobile.Opera() || document.WuRanbo.isMobile.Windows());
             }
};
