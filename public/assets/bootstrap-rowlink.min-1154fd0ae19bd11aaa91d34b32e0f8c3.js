/**
* Bootstrap.js by @mdo and @fat, extended by @ArnoldDaniels.
* plugins: bootstrap-rowlink.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){var t=function(t,n){n=e.extend({},e.fn.rowlink.defaults,n);var r=t.nodeName.toLowerCase()=="tr"?e(t):e(t).find("tr:has(td)");r.each(function(){var t=e(this).find(n.target).first();if(!t.length)return;var r=t.attr("href");e(this).find("td").not(".nolink").click(function(){window.location=r}),e(this).addClass("rowlink"),t.replaceWith(t.html())})};e.fn.rowlink=function(n){return this.each(function(){var r=e(this),i=r.data("rowlink");i||r.data("rowlink",i=new t(this,n))})},e.fn.rowlink.defaults={target:"a"},e.fn.rowlink.Constructor=t,e(function(){e('[data-provides="rowlink"]').each(function(){e(this).rowlink(e(this).data())})})}(window.jQuery);