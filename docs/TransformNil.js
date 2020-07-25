/* generated by Svelte v3.24.0 */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_style,
	space
} from "/the-js-we-do-not-deserve/svelte/internal.js";

function create_fragment(ctx) {
	let h1;
	let t1;
	let h20;
	let t3;
	let blockquote;
	let t8;
	let h21;
	let t10;
	let p1;
	let t14;
	let pre0;

	let raw0_value = `
<code class="language-js"><span class="token keyword">function</span> <span class="token function">expectFn</span><span class="token punctuation">(</span><span class="token parameter">fn <span class="token operator">=</span> nil</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>` + "";

	let t15;
	let p2;
	let t19;
	let p3;
	let t23;
	let pre1;

	let raw1_value = `
<code class="language-js"><span class="token keyword">function</span> <span class="token function">expectFn</span><span class="token punctuation">(</span><span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>` + "";

	let t24;
	let h22;
	let t26;
	let pre2;

	let raw2_value = `
<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> types<span class="token operator">:</span> t <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    name<span class="token operator">:</span> <span class="token string">'transform-nil'</span><span class="token punctuation">,</span>
    visitor<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token function">Identifier</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'nil'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          path<span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">arrowFunctionExpression</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">blockStatement</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>` + "";

	let t27;
	let h23;
	let t29;
	let iframe;
	let iframe_src_value;
	let t30;
	let h24;
	let t32;
	let a1;
	let t34;
	let h25;
	let t36;
	let p4;

	return {
		c() {
			h1 = element("h1");
			h1.textContent = "transform-nil";
			t1 = space();
			h20 = element("h2");
			h20.textContent = "Inspiration";
			t3 = space();
			blockquote = element("blockquote");
			blockquote.innerHTML = `<p lang="en" dir="ltr">\`nil\`<br><br>We already have \`null\` and \`undefined\`. Why not one more?</p>— Sindre Sorhus (@sindresorhus) <a href="https://twitter.com/sindresorhus/status/1285838869946982400?ref_src=twsrc%5Etfw">July 22, 2020</a>`;
			t8 = space();
			h21 = element("h2");
			h21.textContent = "💡 The Idea";
			t10 = space();
			p1 = element("p");
			p1.innerHTML = `How about <code>nil</code> keyword for a noop function?`;
			t14 = space();
			pre0 = element("pre");
			t15 = space();
			p2 = element("p");
			p2.innerHTML = `The above JS code is a valid syntax, <code>nil</code> is just a normal variable.`;
			t19 = space();
			p3 = element("p");
			p3.innerHTML = `The idea is to replace <code>nil</code> with an inline function`;
			t23 = space();
			pre1 = element("pre");
			t24 = space();
			h22 = element("h2");
			h22.textContent = "📘 The Code";
			t26 = space();
			pre2 = element("pre");
			t27 = space();
			h23 = element("h2");
			h23.textContent = "🧪 Try it out";
			t29 = space();
			iframe = element("iframe");
			t30 = space();
			h24 = element("h2");
			h24.textContent = "🥰 Tweet";
			t32 = space();
			a1 = element("a");
			a1.textContent = "Tweet";
			t34 = space();
			h25 = element("h2");
			h25.textContent = "📦 Babel Plugin";
			t36 = space();
			p4 = element("p");
			p4.innerHTML = `<a href="https://badge.fury.io/js/%40lihautan%2Fbabel-plugin-transform-nil" rel="nofollow"><img src="https://badge.fury.io/js/%40lihautan%2Fbabel-plugin-nil.svg" alt="npm version"></a>`;
			attr(blockquote, "class", "twitter-tweet");
			attr(pre0, "class", "language-js");
			attr(pre1, "class", "language-js");
			attr(pre2, "class", "language-js");
			if (iframe.src !== (iframe_src_value = "https://codesandbox.io/embed/javascript--g51d8?expanddevtools=1&fontsize=14&hidenavigation=1&theme=light")) attr(iframe, "src", iframe_src_value);
			set_style(iframe, "width", "100%");
			set_style(iframe, "height", "500px");
			set_style(iframe, "border", "4px solid");
			set_style(iframe, "box-shadow", "5px 5px 0 #2aa3ef");
			set_style(iframe, "overflow", "hidden");
			attr(iframe, "sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts");
			attr(a1, "href", "https://twitter.com/share?ref_src=twsrc%5Etfw");
			attr(a1, "class", "twitter-share-button");
			attr(a1, "data-show-count", "false");
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			insert(target, t1, anchor);
			insert(target, h20, anchor);
			insert(target, t3, anchor);
			insert(target, blockquote, anchor);
			insert(target, t8, anchor);
			insert(target, h21, anchor);
			insert(target, t10, anchor);
			insert(target, p1, anchor);
			insert(target, t14, anchor);
			insert(target, pre0, anchor);
			pre0.innerHTML = raw0_value;
			insert(target, t15, anchor);
			insert(target, p2, anchor);
			insert(target, t19, anchor);
			insert(target, p3, anchor);
			insert(target, t23, anchor);
			insert(target, pre1, anchor);
			pre1.innerHTML = raw1_value;
			insert(target, t24, anchor);
			insert(target, h22, anchor);
			insert(target, t26, anchor);
			insert(target, pre2, anchor);
			pre2.innerHTML = raw2_value;
			insert(target, t27, anchor);
			insert(target, h23, anchor);
			insert(target, t29, anchor);
			insert(target, iframe, anchor);
			insert(target, t30, anchor);
			insert(target, h24, anchor);
			insert(target, t32, anchor);
			insert(target, a1, anchor);
			insert(target, t34, anchor);
			insert(target, h25, anchor);
			insert(target, t36, anchor);
			insert(target, p4, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t1);
			if (detaching) detach(h20);
			if (detaching) detach(t3);
			if (detaching) detach(blockquote);
			if (detaching) detach(t8);
			if (detaching) detach(h21);
			if (detaching) detach(t10);
			if (detaching) detach(p1);
			if (detaching) detach(t14);
			if (detaching) detach(pre0);
			if (detaching) detach(t15);
			if (detaching) detach(p2);
			if (detaching) detach(t19);
			if (detaching) detach(p3);
			if (detaching) detach(t23);
			if (detaching) detach(pre1);
			if (detaching) detach(t24);
			if (detaching) detach(h22);
			if (detaching) detach(t26);
			if (detaching) detach(pre2);
			if (detaching) detach(t27);
			if (detaching) detach(h23);
			if (detaching) detach(t29);
			if (detaching) detach(iframe);
			if (detaching) detach(t30);
			if (detaching) detach(h24);
			if (detaching) detach(t32);
			if (detaching) detach(a1);
			if (detaching) detach(t34);
			if (detaching) detach(h25);
			if (detaching) detach(t36);
			if (detaching) detach(p4);
		}
	};
}

class TransformNil extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default TransformNil;