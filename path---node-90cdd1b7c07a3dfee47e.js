webpackJsonp([7152042771417],{338:function(n,s){n.exports={data:{markdownRemark:{html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/intro-to-web-dev-v2/static/node-ef4a30c374ea4cf7fb52b7f8748cf4a5-28469.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 27%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1klEQVQY02NgIBI4OJofCg71YCJKsZu7DTMyf8Y7fSYsBv709LZnBbGLS5MYkeVmfzYAi7de1GQBKWwC4rcgGiTYfE6zpvms5msg3Qg1qBiInwHxP5CBQLoCiF8CcT1UvQsQ27ec03QDGigA0vDP0cncHESDFZzV/A3E/0G4+5YOM1D8BxA7A/EfqIE/U3r124D0Uqj6YKCBdUBc0nFNiw9k4CmoS05CFGicghp4/sh/O0ag+FkgfgDE1+ISg5iA9Al7YHg6OlkoQQ1MAmI3oIHZLec12QGqNWHDQppefgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Node.js Logo"\n        title=""\n        src="/intro-to-web-dev-v2/static/node-ef4a30c374ea4cf7fb52b7f8748cf4a5-28469.png"\n        srcset="/intro-to-web-dev-v2/static/node-ef4a30c374ea4cf7fb52b7f8748cf4a5-df76f.png 163w,\n/intro-to-web-dev-v2/static/node-ef4a30c374ea4cf7fb52b7f8748cf4a5-e80a0.png 325w,\n/intro-to-web-dev-v2/static/node-ef4a30c374ea4cf7fb52b7f8748cf4a5-28469.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>So far we\'ve been very focused on the browser. Historically this has been the purpose of JavaScript: make websites interactive. However as time has gone by people have really embraced JavaScript as a language. An enterprising individual named Ryan Dahl wrote a connecting layer between Google Chrome\'s v8 engine, which is what actually runs JavaScript inside of Chrome, and the system. He called it Node.js (often just called Node) and the community just exploded with popularity.</p>\n<p>You should have installed Node in our previous lesson. If you haven\'t, <a href="https://nodejs.org/">do so here</a>.</p>\n<p>Parcel, the bundler tool used in the previous lesson, is written using Node. Node lets us execute JavaScript outside of the browser. In that case, it\'s using JavaScript to write a tool that bundles together the code we write so we can serve it to a user. We\'re going to use it write server code. Going back to our house example from earlier, we\'re going to create our own pizza place that will respond to all the houses/clients that request pizza/data. It\'s important to keep that relationship in mind: one server serves many clients, even if in this case we\'re just going to be serving ourselves.</p>\n<p>The most basic server in Node is only couple of lines. Let\'s give it a shot. Start a new project, and add a file called server.js.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`user visited </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"hello!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"listening on http://localhost:3000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Go to your terminal and run <code class="language-text">node server.js</code>. You should see the "listening on <a href="http://localhost:3000">http://localhost:3000</a>" message logged out. Navigate your browser to <a href="http://localhost:3000">http://localhost:3000</a>. You should see the text <code class="language-text">hello!</code> responded back to you. Look at your terminal and it should show two requests, one for <code class="language-text">/</code> and one for <code class="language-text">/favicon.ico</code>. The <code class="language-text">/</code> represents the base, home page that you requested by going to the bare domain <code class="language-text">localhost:3000</code>. If you went to <a href="http://localhost:3000/lol">http://localhost:3000/lol</a> then you\'d see <code class="language-text">/lol</code> there (you can actually try that if you want to.) The <code class="language-text">/favicon.ico</code> request is the browser trying to get the favicon which is that little icon that the browser puts on the browser tab.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/intro-to-web-dev-v2/static/favicon-c4130b58690213f7cd142249cd1b4310-ecbb2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 510px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 30.19607843137255%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQY062Oy27CMBBF/b/8EbAyLSGpwiKqFLoITQh5uM5DCIHUbSIhviGbU9tl0XWFpaOZe++MxqLve67JB9/vIZc0weq/VFVNnuePvqJ7+LY2TYtSirbt0LpxWljj5Eu2e4X2VpRlaYKGwyGjqmunv8zMsSjccm08h/rN7BGttaMwM8KG59Bjtu6I53Ne1x7LxZIoilhJiZQvBMEbvh+wMHkYbl3ubTbs4pgsy9wH0jR1VYzjyP1zx20fcz8mWP1fhmFA8OQnpmnimfwAD7upBiPp8u0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="location of the favicon"\n        title=""\n        src="/intro-to-web-dev-v2/static/favicon-c4130b58690213f7cd142249cd1b4310-ecbb2.png"\n        srcset="/intro-to-web-dev-v2/static/favicon-c4130b58690213f7cd142249cd1b4310-9124f.png 163w,\n/intro-to-web-dev-v2/static/favicon-c4130b58690213f7cd142249cd1b4310-b837c.png 325w,\n/intro-to-web-dev-v2/static/favicon-c4130b58690213f7cd142249cd1b4310-ecbb2.png 510w"\n        sizes="(max-width: 510px) 100vw, 510px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The browser just knows to look for it at that URL. In our case we\'re not serving an image for that (it\'s also just seeing the <code class="language-text">hello!</code> text) so nothing is displayed there.</p>\n<p>So let\'s unpack our Node server a bit more.</p>\n<ul>\n<li>Node is all still using CommonJS for its modules (the old of doing it that we refactored before.) That\'s why we\'re using <code class="language-text">require</code>.</li>\n<li>We require in the <code class="language-text">http</code> module which is a module baked into Node. This is the module that we use to do all the necessary communication to be able to run a web server. Think of this like the phone at the pizza place. It allows to listen to requests and then respond to them.</li>\n<li>The <code class="language-text">http.createServer</code> method does exactly what you think it does: it creates a server! It takes a function as a callback and this function will be run every time a user makes a request to that server.</li>\n<li>\n<p>The function has two parameters: <code class="language-text">req</code> (request) and <code class="language-text">res</code> (response).</p>\n<ul>\n<li>The <code class="language-text">req</code> parameter represents all the information coming from the user. You can see what URL they used to request, what parameters they sent you, what headers (headers are meta data that your browser sends with each request, like if you want the response to be in English, Spanish, etc.) they used, etc.</li>\n<li>The <code class="language-text">res</code> paramenters represents what you want to send back for the request. Here you can set your own headers, set cookies (cookies are bits of information that the client and server pass back-and-forth to each other so you can keep track of who the client is,) the HTTP status code (404 is a status code that means not found; there are many like 200, 302, 403, 500, etc.), and what the response body should be.</li>\n<li><code class="language-text">res.end()</code> has to be called at then to let the server know you\'re done. Since you <em>could</em> do asynchronous things before you respond, it requires you to let it know "yes, I\'m done now". If you give <code class="language-text">end</code> text, it\'ll respond to the user with that.</li>\n<li><code class="language-text">server.listen</code> is how you tell the server to actually start up and start listening for requests. <code class="language-text">3000</code> represents the port we\'re listening in. Remember how Parcel listens on 1234? We chose to listen on 3000. It doesn\'t matter what number we choose (as long as you\'re above 1024, the explanation is pretty boring and technical; <a href="https://unix.stackexchange.com/questions/16564/why-are-the-first-1024-ports-restricted-to-the-root-user-only">see here</a>)</li>\n</ul>\n</li>\n</ul>\n<p>Cool! This is a pretty boring server. Let\'s make it more interesting. Working with the <code class="language-text">http</code> module directly can be a bit tedious and reinventing the wheel. It\'s very low-level. There are some frameworks built on top of it that make it a lot easier to deal with. We\'re going to teach you one called <a href="https://expressjs.com/">Express</a> that makes it a lot easier to work with without being too complicated.</p>\n<ol>\n<li>In the folder where you made server.js, run <code class="language-text">npm init -y</code> to generate your package.json</li>\n<li>Run <code class="language-text">npm install express</code></li>\n<li>Change your server to look like this</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"Welcome to my site!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">"/complement"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"You look nice today"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"listening on http://localhost:3000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Looks pretty similar, right? Express is pretty thin (doesn\'t do <em>too</em> much) which is great. Let\'s break it down.</p>\n<ul>\n<li><code class="language-text">const app = express();</code> is how you create a new server.</li>\n<li><code class="language-text">app.get(url, callback);</code> is how you handle a new route. A route is how you handle you the request when a user hits a particular URL. In this case we set up two, the default home page, <code class="language-text">/</code>, and <code class="language-text">/complement</code>. Try visiting both <code class="language-text">http://localhost:3000</code> and <code class="language-text">http://localhost:3000/complement</code>. If you try a different URL from those, it\'ll give a 404 not found error.</li>\n</ul>\n<p>Otherwise it\'s pretty similar, right? Let\'s go one step further and make it serve a front end. Make a new folder in your project called <code class="language-text">public</code>. Every file we put in here we\'re going to serve publically so don\'t put anything sensitive in here (like passwords or access keys.) Make a file called <code class="language-text">complements.js</code> in this public folder.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">document\n  <span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".request-complement"</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/complement"</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".complement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> data<span class="token punctuation">.</span>complement<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Mostly nothing new here. The <code class="language-text">/complement</code> path means it\'s going to request it from the same server that this was served from. In this case it\'d be <a href="http://localhost:3000/complement">http://localhost:3000/complement</a></p>\n<p>Make new index.html in the root directory of this project (where server.js and package.json are.) Put in it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-htm"><code class="language-htm">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n\n&lt;head&gt;\n  &lt;title&gt;Complements&lt;/title&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n  &lt;h1&gt;Complements!&lt;/h1&gt;\n  &lt;p class=&quot;complement&quot;&gt;none loaded yet&lt;/p&gt;\n  &lt;button class=&quot;request-compliment&quot;&gt;Request New Complement&lt;/button&gt;\n  &lt;script src=&quot;./public/complements.js&quot;&gt;&lt;/script&gt;\n&lt;/body&gt;\n\n&lt;/html&gt;</code></pre>\n      </div>\n<p>Nothing new here either. Notice we are requesting the complements.js file from the public directory.</p>\n<p>Refactor (a word which means rework your code) your server.js file to look like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> complements <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">"You like nice today"</span><span class="token punctuation">,</span>\n  <span class="token string">"That dress looks nice on you"</span><span class="token punctuation">,</span>\n  <span class="token string">"Have you been working out?"</span><span class="token punctuation">,</span>\n  <span class="token string">"You can do hard things"</span><span class="token punctuation">,</span>\n  <span class="token string">"You\'ve gotten far in this course. You\'re really smart"</span><span class="token punctuation">,</span>\n  <span class="token string">"You\'re programming! How cool is that?"</span><span class="token punctuation">,</span>\n  <span class="token string">"I\'m really proud of you"</span><span class="token punctuation">,</span>\n  <span class="token string">"You made this"</span><span class="token punctuation">,</span>\n  <span class="token string">"You\'ve learned a lot of things, and that\'s pretty hard to do"</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">getRandomComplement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> complements<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> complements<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"index.html"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">"/complement"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  res\n    <span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      complement<span class="token punctuation">:</span> <span class="token function">getRandomComplement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/public"</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token keyword">static</span><span class="token punctuation">(</span><span class="token string">"./public"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"listening on http://localhost:3000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Alright! A bit here but let\'s work it out!</p>\n<ul>\n<li>The <code class="language-text">getRandomComplement</code> function returns a random item from the <code class="language-text">complements</code> array. <code class="language-text">Math.random()</code> gives you random number between 0 and 1. We take that and multiply that by how long the <code class="language-text">complements</code> array is (which is cool because we can add and subtract items from the <code class="language-text">complements</code> array and not change this function). This is basically the same as saying we\'re going take a 0%-100% randomly of the array length. We\'ll end up with a number like <code class="language-text">2.16231583252359</code>. We need that to be a whole number so it\'s a useful index, so we say <code class="language-text">Math.floor()</code> which gives us that number rounding down, so <code class="language-text">Math.floor(3.9)</code> is 3 (there\'s also <code class="language-text">Math.ceil</code> to round up and <code class="language-text">Math.round</code> to round how we normally do.) The result is we get a random number between 0 (the first element of an element array) and <code class="language-text">complements.length - 1</code> (the last element of the array). We then use that to return a random element from <code class="language-text">complements</code>!</li>\n<li><code class="language-text">res.sendFile(path.join(__dirname, &quot;index.html&quot;));</code> sends the user the <code class="language-text">index.html</code> we just created. <code class="language-text">path</code> is a libray for getting correct file locations. In this case, we\'re getting the whole path to it so Express can find it. <code class="language-text">__dirname</code> is a special Node variable that\'s the folder of where the server.js file is. We know that index.html is in the same folder, so we\'re saying serve the index.html file found in the same directory as server.js.</li>\n<li><code class="language-text">res.json({ complement: getRandomComplement() }).end();</code> - This is going to respond to the request with a <code class="language-text">JSON</code> object, just like dog.ceo was doing. It\'s going to be a small object with just one key: <code class="language-text">complement</code>. The value to that key is going to be one of the random complements generated by that function.</li>\n<li><code class="language-text">app.use(&quot;/public&quot;, express.static(&quot;./public&quot;));</code> serves everything in the public directory publicly. We\'ll put stuff in here like images, client JS files, CSS files, and anything else we need users to be able to download from our server. Part of what this does is set all the correct headers which you need to do. The browser will request a resource like <code class="language-text">my-styles.css</code> but the browser needs to know how to read that file: is it an image or is it a CSS file? (it doesn\'t look at the file extension). It then serves everything inside it from the path on the server <code class="language-text">/public</code>. We happened to call the folder and the path from the server the same thing but you don\'t have to (though it\'s smart to.)</li>\n</ul>\n<p>That\'s it! You made your own full web app!</p>\n<h3 id="extend-this-project"><a href="#extend-this-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extend this project</h3>\n<ul>\n<li>Add it to GitHub in its own repo</li>\n<li>Make an <code class="language-text">/insult</code> endpoint that returns random insults to be hurled at your foes. Add another button to be able to request insults on your page.</li>\n<li>Use Parcel and PopMotion to animate your page. Parcel has a <code class="language-text">parcel build index.html</code> <a href="https://parceljs.org/cli.html#build">see here</a> command that you could have it build your project into your <code class="language-text">public</code> folder.</li>\n<li>Style the whole page nicely using CSS! Put your CSS in your public folder and include it the <code class="language-text">&lt;head&gt;&lt;/head&gt;</code> of you index.html</li>\n</ul>',frontmatter:{path:"/node",title:"Node.js",order:19}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Overview of What You'll Be Learning In This Course"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Tools"}}},{node:{frontmatter:{order:3,path:"/basic-html",title:"Basic HTML"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,
path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---node-90cdd1b7c07a3dfee47e.js.map