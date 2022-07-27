import{_ as s,c as n,o as a,a as l}from"./app.30620a3c.js";const i=JSON.parse('{"title":"\u524D\u7AEF\u5BFC\u51FAExcel","description":"","frontmatter":{},"headers":[{"level":2,"title":"table2excel\u5B9E\u4F8B","slug":"table2excel\u5B9E\u4F8B"}],"relativePath":"question/table2Excel.md"}'),p={name:"question/table2Excel.md"},o=l(`<h1 id="\u524D\u7AEF\u5BFC\u51FAexcel" tabindex="-1">\u524D\u7AEF\u5BFC\u51FAExcel <a class="header-anchor" href="#\u524D\u7AEF\u5BFC\u51FAexcel" aria-hidden="true">#</a></h1><h2 id="table2excel\u5B9E\u4F8B" tabindex="-1">table2excel\u5B9E\u4F8B <a class="header-anchor" href="#table2excel\u5B9E\u4F8B" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5F15\u5165table2excel\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> table2excel </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">js-table2excel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#676E95;font-style:italic;">// \u5BFC\u51FAexcel\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> column </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8D27\u53F7</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">goodsNo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u54C1\u724C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">brand</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4EF7\u683C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">price</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">goodsNo</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1998</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">brand</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u674E\u5B81</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">199</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528\u63D2\u4EF6\u5BFC\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u53C2\u6570\uFF1A\uFF08cloumn\uFF0Cdata\uFF0Cname\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        cloumn </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;"> excel\u5217\u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">        data   </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;"> excel\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">        name   </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;"> excel\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">table2excel</span><span style="color:#A6ACCD;">(column</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5546\u54C1\u4FE1\u606F\u5BFC\u5165\u5931\u8D25\u6570\u636E.xls</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function c(t,D,r,y,F,C){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};
