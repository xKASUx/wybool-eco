
/*!
 * TW Elements 1.1.0
 *
 * TW Elements is an open-source UI kit of advanced components for TailwindCSS.
 * Copyright © 2023 MDBootstrap.com
 *
 * Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 *
 * If you would like to purchase a COMMERCIAL, non-AGPL license for TWE, please check out our pricing: https://tw-elements.com/pro/
 */
;(function (N, mt) {
	typeof exports == 'object' && typeof module < 'u'
		? mt(exports)
		: typeof define == 'function' && define.amd
		? define(['exports'], mt)
		: ((N = typeof globalThis < 'u' ? globalThis : N || self), mt((N.te = {})))
})(this, function (N) {
	'use strict'
	var xL = Object.defineProperty
	var CL = (N, mt, O) =>
		mt in N
			? xL(N, mt, { enumerable: !0, configurable: !0, writable: !0, value: O })
			: (N[mt] = O)
	var ke = (N, mt, O) => (CL(N, typeof mt != 'symbol' ? mt + '' : mt, O), O)
	const mt = (() => {
			const s = {}
			let t = 1
			return {
				set(e, i, n) {
					typeof e[i] > 'u' && ((e[i] = { key: i, id: t }), t++),
						(s[e[i].id] = n)
				},
				get(e, i) {
					if (!e || typeof e[i] > 'u') return null
					const n = e[i]
					return n.key === i ? s[n.id] : null
				},
				delete(e, i) {
					if (typeof e[i] > 'u') return
					const n = e[i]
					n.key === i && (delete s[n.id], delete e[i])
				},
			}
		})(),
		O = {
			setData(s, t, e) {
				mt.set(s, t, e)
			},
			getData(s, t) {
				return mt.get(s, t)
			},
			removeData(s, t) {
				mt.delete(s, t)
			},
		},
		lm = 1e6,
		cm = 1e3,
		xa = 'transitionend',
		hm = s =>
			s == null
				? `${s}`
				: {}.toString
						.call(s)
						.match(/\s([a-z]+)/i)[1]
						.toLowerCase(),
		bt = s => {
			do s += Math.floor(Math.random() * lm)
			while (document.getElementById(s))
			return s
		},
		ch = s => {
			let t = s.getAttribute('data-te-target')
			if (!t || t === '#') {
				let e = s.getAttribute('href')
				if (!e || (!e.includes('#') && !e.startsWith('.'))) return null
				e.includes('#') && !e.startsWith('#') && (e = `#${e.split('#')[1]}`),
					(t = e && e !== '#' ? e.trim() : null)
			}
			return t
		},
		Ca = s => {
			const t = ch(s)
			return t && document.querySelector(t) ? t : null
		},
		Ne = s => {
			const t = ch(s)
			return t ? document.querySelector(t) : null
		},
		oo = s => {
			if (!s) return 0
			let { transitionDuration: t, transitionDelay: e } =
				window.getComputedStyle(s)
			const i = Number.parseFloat(t),
				n = Number.parseFloat(e)
			return !i && !n
				? 0
				: ((t = t.split(',')[0]),
				  (e = e.split(',')[0]),
				  (Number.parseFloat(t) + Number.parseFloat(e)) * cm)
		},
		hh = s => {
			s.dispatchEvent(new Event(xa))
		},
		Wi = s =>
			!s || typeof s != 'object'
				? !1
				: (typeof s.jquery < 'u' && (s = s[0]), typeof s.nodeType < 'u'),
		Be = s =>
			Wi(s)
				? s.jquery
					? s[0]
					: s
				: typeof s == 'string' && s.length > 0
				? document.querySelector(s)
				: null,
		L = (s, t, e) => {
			Object.keys(e).forEach(i => {
				const n = e[i],
					o = t[i],
					r = o && Wi(o) ? 'element' : hm(o)
				if (!new RegExp(n).test(r))
					throw new Error(
						`${s.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
					)
			})
		},
		ae = s => {
			if (!s || s.getClientRects().length === 0) return !1
			if (s.style && s.parentNode && s.parentNode.style) {
				const t = getComputedStyle(s),
					e = getComputedStyle(s.parentNode)
				return (
					getComputedStyle(s).getPropertyValue('visibility') === 'visible' ||
					(t.display !== 'none' &&
						e.display !== 'none' &&
						t.visibility !== 'hidden')
				)
			}
			return !1
		},
		ci = s =>
			!s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains('disabled')
				? !0
				: typeof s.disabled < 'u'
				? s.disabled
				: s.hasAttribute('disabled') && s.getAttribute('disabled') !== 'false',
		dh = s => {
			if (!document.documentElement.attachShadow) return null
			if (typeof s.getRootNode == 'function') {
				const t = s.getRootNode()
				return t instanceof ShadowRoot ? t : null
			}
			return s instanceof ShadowRoot
				? s
				: s.parentNode
				? dh(s.parentNode)
				: null
		},
		ro = () => function () {},
		zi = s => {
			s.offsetHeight
		},
		uh = () => {
			const { jQuery: s } = window
			return s && !document.body.hasAttribute('data-te-no-jquery') ? s : null
		},
		Aa = [],
		ph = s => {
			document.readyState === 'loading'
				? (Aa.length ||
						document.addEventListener('DOMContentLoaded', () => {
							Aa.forEach(t => t())
						}),
				  Aa.push(s))
				: s()
		},
		et = () => document.documentElement.dir === 'rtl',
		dm = s => Array.from(s),
		$ = s => document.createElement(s),
		hi = s => {
			typeof s == 'function' && s()
		},
		fh = (s, t, e = !0) => {
			if (!e) {
				hi(s)
				return
			}
			const i = 5,
				n = oo(t) + i
			let o = !1
			const r = ({ target: a }) => {
				a === t && ((o = !0), t.removeEventListener(xa, r), hi(s))
			}
			t.addEventListener(xa, r),
				setTimeout(() => {
					o || hh(t)
				}, n)
		},
		_h = (s, t, e, i) => {
			let n = s.indexOf(t)
			if (n === -1) return s[!e && i ? s.length - 1 : 0]
			const o = s.length
			return (
				(n += e ? 1 : -1),
				i && (n = (n + o) % o),
				s[Math.max(0, Math.min(n, o - 1))]
			)
		},
		um = /[^.]*(?=\..*)\.|.*/,
		pm = /\..*/,
		fm = /::\d+$/,
		wa = {}
	let gh = 1
	const _m = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
		gm = /^(mouseenter|mouseleave)/i,
		mh = new Set([
			'click',
			'dblclick',
			'mouseup',
			'mousedown',
			'contextmenu',
			'mousewheel',
			'DOMMouseScroll',
			'mouseover',
			'mouseout',
			'mousemove',
			'selectstart',
			'selectend',
			'keydown',
			'keypress',
			'keyup',
			'orientationchange',
			'touchstart',
			'touchmove',
			'touchend',
			'touchcancel',
			'pointerdown',
			'pointermove',
			'pointerup',
			'pointerleave',
			'pointercancel',
			'gesturestart',
			'gesturechange',
			'gestureend',
			'focus',
			'blur',
			'change',
			'reset',
			'select',
			'submit',
			'focusin',
			'focusout',
			'load',
			'unload',
			'beforeunload',
			'resize',
			'move',
			'DOMContentLoaded',
			'readystatechange',
			'error',
			'abort',
			'scroll',
		])
	function bh(s, t) {
		return (t && `${t}::${gh++}`) || s.uidEvent || gh++
	}
	function vh(s) {
		const t = bh(s)
		return (s.uidEvent = t), (wa[t] = wa[t] || {}), wa[t]
	}
	function mm(s, t) {
		return function e(i) {
			return (
				(i.delegateTarget = s), e.oneOff && _.off(s, i.type, t), t.apply(s, [i])
			)
		}
	}
	function bm(s, t, e) {
		return function i(n) {
			const o = s.querySelectorAll(t)
			for (let { target: r } = n; r && r !== this; r = r.parentNode)
				for (let a = o.length; a--; '')
					if (o[a] === r)
						return (
							(n.delegateTarget = r),
							i.oneOff && _.off(s, n.type, e),
							e.apply(r, [n])
						)
			return null
		}
	}
	function yh(s, t, e = null) {
		const i = Object.keys(s)
		for (let n = 0, o = i.length; n < o; n++) {
			const r = s[i[n]]
			if (r.originalHandler === t && r.delegationSelector === e) return r
		}
		return null
	}
	function Th(s, t, e) {
		const i = typeof t == 'string',
			n = i ? e : t
		let o = xh(s)
		return mh.has(o) || (o = s), [i, n, o]
	}
	function Eh(s, t, e, i, n) {
		if (typeof t != 'string' || !s) return
		if ((e || ((e = i), (i = null)), gm.test(t))) {
			const p = f =>
				function (b) {
					if (
						!b.relatedTarget ||
						(b.relatedTarget !== b.delegateTarget &&
							!b.delegateTarget.contains(b.relatedTarget))
					)
						return f.call(this, b)
				}
			i ? (i = p(i)) : (e = p(e))
		}
		const [o, r, a] = Th(t, e, i),
			l = vh(s),
			c = l[a] || (l[a] = {}),
			h = yh(c, r, o ? e : null)
		if (h) {
			h.oneOff = h.oneOff && n
			return
		}
		const d = bh(r, t.replace(um, '')),
			u = o ? bm(s, e, i) : mm(s, e)
		;(u.delegationSelector = o ? e : null),
			(u.originalHandler = r),
			(u.oneOff = n),
			(u.uidEvent = d),
			(c[d] = u),
			s.addEventListener(a, u, o)
	}
	function ka(s, t, e, i, n) {
		const o = yh(t[e], i, n)
		o && (s.removeEventListener(e, o, !!n), delete t[e][o.uidEvent])
	}
	function vm(s, t, e, i) {
		const n = t[e] || {}
		Object.keys(n).forEach(o => {
			if (o.includes(i)) {
				const r = n[o]
				ka(s, t, e, r.originalHandler, r.delegationSelector)
			}
		})
	}
	function xh(s) {
		return (s = s.replace(pm, '')), _m[s] || s
	}
	const _ = {
			on(s, t, e, i) {
				Eh(s, t, e, i, !1)
			},
			one(s, t, e, i) {
				Eh(s, t, e, i, !0)
			},
			off(s, t, e, i) {
				if (typeof t != 'string' || !s) return
				const [n, o, r] = Th(t, e, i),
					a = r !== t,
					l = vh(s),
					c = t.startsWith('.')
				if (typeof o < 'u') {
					if (!l || !l[r]) return
					ka(s, l, r, o, n ? e : null)
					return
				}
				c &&
					Object.keys(l).forEach(d => {
						vm(s, l, d, t.slice(1))
					})
				const h = l[r] || {}
				Object.keys(h).forEach(d => {
					const u = d.replace(fm, '')
					if (!a || t.includes(u)) {
						const p = h[d]
						ka(s, l, r, p.originalHandler, p.delegationSelector)
					}
				})
			},
			trigger(s, t, e) {
				if (typeof t != 'string' || !s) return null
				const i = uh(),
					n = xh(t),
					o = t !== n,
					r = mh.has(n)
				let a,
					l = !0,
					c = !0,
					h = !1,
					d = null
				return (
					o &&
						i &&
						((a = i.Event(t, e)),
						i(s).trigger(a),
						(l = !a.isPropagationStopped()),
						(c = !a.isImmediatePropagationStopped()),
						(h = a.isDefaultPrevented())),
					r
						? ((d = document.createEvent('HTMLEvents')), d.initEvent(n, l, !0))
						: (d = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
					typeof e < 'u' &&
						Object.keys(e).forEach(u => {
							Object.defineProperty(d, u, {
								get() {
									return e[u]
								},
							})
						}),
					h && d.preventDefault(),
					c && s.dispatchEvent(d),
					d.defaultPrevented && typeof a < 'u' && a.preventDefault(),
					d
				)
			},
		},
		ct = {
			on(s, t, e, i) {
				const n = t.split(' ')
				for (let o = 0; o < n.length; o++) _.on(s, n[o], e, i)
			},
			off(s, t, e, i) {
				const n = t.split(' ')
				for (let o = 0; o < n.length; o++) _.off(s, n[o], e, i)
			},
		},
		ym = '5.1.3'
	class Mt {
		constructor(t) {
			;(t = Be(t)),
				t &&
					((this._element = t),
					O.setData(this._element, this.constructor.DATA_KEY, this))
		}
		dispose() {
			O.removeData(this._element, this.constructor.DATA_KEY),
				_.off(this._element, this.constructor.EVENT_KEY),
				Object.getOwnPropertyNames(this).forEach(t => {
					this[t] = null
				})
		}
		_queueCallback(t, e, i = !0) {
			fh(t, e, i)
		}
		static getInstance(t) {
			return O.getData(Be(t), this.DATA_KEY)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
		static get VERSION() {
			return ym
		}
		static get NAME() {
			throw new Error(
				'You have to implement the static method "NAME", for each component!'
			)
		}
		static get DATA_KEY() {
			return `te.${this.NAME}`
		}
		static get EVENT_KEY() {
			return `.${this.DATA_KEY}`
		}
	}
	const Tm = 'button',
		Em = 'active'
	class ao extends Mt {
		static get NAME() {
			return Tm
		}
		toggle() {
			this._element.setAttribute(
				'aria-pressed',
				this._element.classList.toggle(Em)
			)
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = ao.getOrCreateInstance(this)
				t === 'toggle' && e[t]()
			})
		}
	}
	var vt = 'top',
		Lt = 'bottom',
		$t = 'right',
		yt = 'left',
		Ps = 'auto',
		ji = [vt, Lt, $t, yt],
		di = 'start',
		Yi = 'end',
		Ch = 'clippingParents',
		Sa = 'viewport',
		Ki = 'popper',
		Ah = 'reference',
		Oa = ji.reduce(function (s, t) {
			return s.concat([t + '-' + di, t + '-' + Yi])
		}, []),
		Ia = [].concat(ji, [Ps]).reduce(function (s, t) {
			return s.concat([t, t + '-' + di, t + '-' + Yi])
		}, []),
		wh = 'beforeRead',
		kh = 'read',
		Sh = 'afterRead',
		Oh = 'beforeMain',
		Ih = 'main',
		Dh = 'afterMain',
		Mh = 'beforeWrite',
		Lh = 'write',
		$h = 'afterWrite',
		lo = [wh, kh, Sh, Oh, Ih, Dh, Mh, Lh, $h]
	function le(s) {
		return s ? (s.nodeName || '').toLowerCase() : null
	}
	function Rt(s) {
		if (s == null) return window
		if (s.toString() !== '[object Window]') {
			var t = s.ownerDocument
			return (t && t.defaultView) || window
		}
		return s
	}
	function ui(s) {
		var t = Rt(s).Element
		return s instanceof t || s instanceof Element
	}
	function Pt(s) {
		var t = Rt(s).HTMLElement
		return s instanceof t || s instanceof HTMLElement
	}
	function Da(s) {
		if (typeof ShadowRoot > 'u') return !1
		var t = Rt(s).ShadowRoot
		return s instanceof t || s instanceof ShadowRoot
	}
	function xm(s) {
		var t = s.state
		Object.keys(t.elements).forEach(function (e) {
			var i = t.styles[e] || {},
				n = t.attributes[e] || {},
				o = t.elements[e]
			!Pt(o) ||
				!le(o) ||
				(Object.assign(o.style, i),
				Object.keys(n).forEach(function (r) {
					var a = n[r]
					a === !1 ? o.removeAttribute(r) : o.setAttribute(r, a === !0 ? '' : a)
				}))
		})
	}
	function Cm(s) {
		var t = s.state,
			e = {
				popper: {
					position: t.options.strategy,
					left: '0',
					top: '0',
					margin: '0',
				},
				arrow: { position: 'absolute' },
				reference: {},
			}
		return (
			Object.assign(t.elements.popper.style, e.popper),
			(t.styles = e),
			t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow),
			function () {
				Object.keys(t.elements).forEach(function (i) {
					var n = t.elements[i],
						o = t.attributes[i] || {},
						r = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]),
						a = r.reduce(function (l, c) {
							return (l[c] = ''), l
						}, {})
					!Pt(n) ||
						!le(n) ||
						(Object.assign(n.style, a),
						Object.keys(o).forEach(function (l) {
							n.removeAttribute(l)
						}))
				})
			}
		)
	}
	const Ma = {
		name: 'applyStyles',
		enabled: !0,
		phase: 'write',
		fn: xm,
		effect: Cm,
		requires: ['computeStyles'],
	}
	function Qt(s) {
		return s.split('-')[0]
	}
	var pi = Math.max,
		co = Math.min,
		Ui = Math.round
	function La() {
		var s = navigator.userAgentData
		return s != null && s.brands && Array.isArray(s.brands)
			? s.brands
					.map(function (t) {
						return t.brand + '/' + t.version
					})
					.join(' ')
			: navigator.userAgent
	}
	function Rh() {
		return !/^((?!chrome|android).)*safari/i.test(La())
	}
	function Xi(s, t, e) {
		t === void 0 && (t = !1), e === void 0 && (e = !1)
		var i = s.getBoundingClientRect(),
			n = 1,
			o = 1
		t &&
			Pt(s) &&
			((n = (s.offsetWidth > 0 && Ui(i.width) / s.offsetWidth) || 1),
			(o = (s.offsetHeight > 0 && Ui(i.height) / s.offsetHeight) || 1))
		var r = ui(s) ? Rt(s) : window,
			a = r.visualViewport,
			l = !Rh() && e,
			c = (i.left + (l && a ? a.offsetLeft : 0)) / n,
			h = (i.top + (l && a ? a.offsetTop : 0)) / o,
			d = i.width / n,
			u = i.height / o
		return {
			width: d,
			height: u,
			top: h,
			right: c + d,
			bottom: h + u,
			left: c,
			x: c,
			y: h,
		}
	}
	function $a(s) {
		var t = Xi(s),
			e = s.offsetWidth,
			i = s.offsetHeight
		return (
			Math.abs(t.width - e) <= 1 && (e = t.width),
			Math.abs(t.height - i) <= 1 && (i = t.height),
			{ x: s.offsetLeft, y: s.offsetTop, width: e, height: i }
		)
	}
	function Ph(s, t) {
		var e = t.getRootNode && t.getRootNode()
		if (s.contains(t)) return !0
		if (e && Da(e)) {
			var i = t
			do {
				if (i && s.isSameNode(i)) return !0
				i = i.parentNode || i.host
			} while (i)
		}
		return !1
	}
	function Jt(s) {
		return Rt(s).getComputedStyle(s)
	}
	function Am(s) {
		return ['table', 'td', 'th'].indexOf(le(s)) >= 0
	}
	function He(s) {
		return (
			(ui(s) ? s.ownerDocument : s.document) || window.document
		).documentElement
	}
	function ho(s) {
		return le(s) === 'html'
			? s
			: s.assignedSlot || s.parentNode || (Da(s) ? s.host : null) || He(s)
	}
	function Nh(s) {
		return !Pt(s) || Jt(s).position === 'fixed' ? null : s.offsetParent
	}
	function wm(s) {
		var t = /firefox/i.test(La()),
			e = /Trident/i.test(La())
		if (e && Pt(s)) {
			var i = Jt(s)
			if (i.position === 'fixed') return null
		}
		var n = ho(s)
		for (
			Da(n) && (n = n.host);
			Pt(n) && ['html', 'body'].indexOf(le(n)) < 0;

		) {
			var o = Jt(n)
			if (
				o.transform !== 'none' ||
				o.perspective !== 'none' ||
				o.contain === 'paint' ||
				['transform', 'perspective'].indexOf(o.willChange) !== -1 ||
				(t && o.willChange === 'filter') ||
				(t && o.filter && o.filter !== 'none')
			)
				return n
			n = n.parentNode
		}
		return null
	}
	function Ns(s) {
		for (var t = Rt(s), e = Nh(s); e && Am(e) && Jt(e).position === 'static'; )
			e = Nh(e)
		return e &&
			(le(e) === 'html' || (le(e) === 'body' && Jt(e).position === 'static'))
			? t
			: e || wm(s) || t
	}
	function Ra(s) {
		return ['top', 'bottom'].indexOf(s) >= 0 ? 'x' : 'y'
	}
	function Bs(s, t, e) {
		return pi(s, co(t, e))
	}
	function km(s, t, e) {
		var i = Bs(s, t, e)
		return i > e ? e : i
	}
	function Bh() {
		return { top: 0, right: 0, bottom: 0, left: 0 }
	}
	function Hh(s) {
		return Object.assign({}, Bh(), s)
	}
	function Vh(s, t) {
		return t.reduce(function (e, i) {
			return (e[i] = s), e
		}, {})
	}
	var Sm = function (t, e) {
		return (
			(t =
				typeof t == 'function'
					? t(Object.assign({}, e.rects, { placement: e.placement }))
					: t),
			Hh(typeof t != 'number' ? t : Vh(t, ji))
		)
	}
	function Om(s) {
		var t,
			e = s.state,
			i = s.name,
			n = s.options,
			o = e.elements.arrow,
			r = e.modifiersData.popperOffsets,
			a = Qt(e.placement),
			l = Ra(a),
			c = [yt, $t].indexOf(a) >= 0,
			h = c ? 'height' : 'width'
		if (!(!o || !r)) {
			var d = Sm(n.padding, e),
				u = $a(o),
				p = l === 'y' ? vt : yt,
				f = l === 'y' ? Lt : $t,
				b =
					e.rects.reference[h] +
					e.rects.reference[l] -
					r[l] -
					e.rects.popper[h],
				v = r[l] - e.rects.reference[l],
				y = Ns(o),
				T = y ? (l === 'y' ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
				x = b / 2 - v / 2,
				E = d[p],
				C = T - u[h] - d[f],
				A = T / 2 - u[h] / 2 + x,
				w = Bs(E, A, C),
				S = l
			e.modifiersData[i] = ((t = {}), (t[S] = w), (t.centerOffset = w - A), t)
		}
	}
	function Im(s) {
		var t = s.state,
			e = s.options,
			i = e.element,
			n = i === void 0 ? '[data-popper-arrow]' : i
		if (
			n != null &&
			!(typeof n == 'string' && ((n = t.elements.popper.querySelector(n)), !n))
		) {
			if (
				({}.NODE_ENV !== 'production' &&
					(Pt(n) ||
						console.error(
							[
								'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
								'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
								'the arrow.',
							].join(' ')
						)),
				!Ph(t.elements.popper, n))
			) {
				;({}).NODE_ENV !== 'production' &&
					console.error(
						[
							'Popper: "arrow" modifier\'s `element` must be a child of the popper',
							'element.',
						].join(' ')
					)
				return
			}
			t.elements.arrow = n
		}
	}
	const Fh = {
		name: 'arrow',
		enabled: !0,
		phase: 'main',
		fn: Om,
		effect: Im,
		requires: ['popperOffsets'],
		requiresIfExists: ['preventOverflow'],
	}
	function Gi(s) {
		return s.split('-')[1]
	}
	var Dm = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
	function Mm(s, t) {
		var e = s.x,
			i = s.y,
			n = t.devicePixelRatio || 1
		return { x: Ui(e * n) / n || 0, y: Ui(i * n) / n || 0 }
	}
	function Wh(s) {
		var t,
			e = s.popper,
			i = s.popperRect,
			n = s.placement,
			o = s.variation,
			r = s.offsets,
			a = s.position,
			l = s.gpuAcceleration,
			c = s.adaptive,
			h = s.roundOffsets,
			d = s.isFixed,
			u = r.x,
			p = u === void 0 ? 0 : u,
			f = r.y,
			b = f === void 0 ? 0 : f,
			v = typeof h == 'function' ? h({ x: p, y: b }) : { x: p, y: b }
		;(p = v.x), (b = v.y)
		var y = r.hasOwnProperty('x'),
			T = r.hasOwnProperty('y'),
			x = yt,
			E = vt,
			C = window
		if (c) {
			var A = Ns(e),
				w = 'clientHeight',
				S = 'clientWidth'
			if (
				(A === Rt(e) &&
					((A = He(e)),
					Jt(A).position !== 'static' &&
						a === 'absolute' &&
						((w = 'scrollHeight'), (S = 'scrollWidth'))),
				(A = A),
				n === vt || ((n === yt || n === $t) && o === Yi))
			) {
				E = Lt
				var k =
					d && A === C && C.visualViewport ? C.visualViewport.height : A[w]
				;(b -= k - i.height), (b *= l ? 1 : -1)
			}
			if (n === yt || ((n === vt || n === Lt) && o === Yi)) {
				x = $t
				var D = d && A === C && C.visualViewport ? C.visualViewport.width : A[S]
				;(p -= D - i.width), (p *= l ? 1 : -1)
			}
		}
		var I = Object.assign({ position: a }, c && Dm),
			M = h === !0 ? Mm({ x: p, y: b }, Rt(e)) : { x: p, y: b }
		if (((p = M.x), (b = M.y), l)) {
			var P
			return Object.assign(
				{},
				I,
				((P = {}),
				(P[E] = T ? '0' : ''),
				(P[x] = y ? '0' : ''),
				(P.transform =
					(C.devicePixelRatio || 1) <= 1
						? 'translate(' + p + 'px, ' + b + 'px)'
						: 'translate3d(' + p + 'px, ' + b + 'px, 0)'),
				P)
			)
		}
		return Object.assign(
			{},
			I,
			((t = {}),
			(t[E] = T ? b + 'px' : ''),
			(t[x] = y ? p + 'px' : ''),
			(t.transform = ''),
			t)
		)
	}
	function Lm(s) {
		var t = s.state,
			e = s.options,
			i = e.gpuAcceleration,
			n = i === void 0 ? !0 : i,
			o = e.adaptive,
			r = o === void 0 ? !0 : o,
			a = e.roundOffsets,
			l = a === void 0 ? !0 : a
		if ({}.NODE_ENV !== 'production') {
			var c = Jt(t.elements.popper).transitionProperty || ''
			r &&
				['transform', 'top', 'right', 'bottom', 'left'].some(function (d) {
					return c.indexOf(d) >= 0
				}) &&
				console.warn(
					[
						'Popper: Detected CSS transitions on at least one of the following',
						'CSS properties: "transform", "top", "right", "bottom", "left".',
						`

`,
						'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
						'for smooth transitions, or remove these properties from the CSS',
						'transition declaration on the popper element if only transitioning',
						'opacity or background-color for example.',
						`

`,
						'We recommend using the popper element as a wrapper around an inner',
						'element that can have any CSS property transitioned for animations.',
					].join(' ')
				)
		}
		var h = {
			placement: Qt(t.placement),
			variation: Gi(t.placement),
			popper: t.elements.popper,
			popperRect: t.rects.popper,
			gpuAcceleration: n,
			isFixed: t.options.strategy === 'fixed',
		}
		t.modifiersData.popperOffsets != null &&
			(t.styles.popper = Object.assign(
				{},
				t.styles.popper,
				Wh(
					Object.assign({}, h, {
						offsets: t.modifiersData.popperOffsets,
						position: t.options.strategy,
						adaptive: r,
						roundOffsets: l,
					})
				)
			)),
			t.modifiersData.arrow != null &&
				(t.styles.arrow = Object.assign(
					{},
					t.styles.arrow,
					Wh(
						Object.assign({}, h, {
							offsets: t.modifiersData.arrow,
							position: 'absolute',
							adaptive: !1,
							roundOffsets: l,
						})
					)
				)),
			(t.attributes.popper = Object.assign({}, t.attributes.popper, {
				'data-popper-placement': t.placement,
			}))
	}
	const Pa = {
		name: 'computeStyles',
		enabled: !0,
		phase: 'beforeWrite',
		fn: Lm,
		data: {},
	}
	var uo = { passive: !0 }
	function $m(s) {
		var t = s.state,
			e = s.instance,
			i = s.options,
			n = i.scroll,
			o = n === void 0 ? !0 : n,
			r = i.resize,
			a = r === void 0 ? !0 : r,
			l = Rt(t.elements.popper),
			c = [].concat(t.scrollParents.reference, t.scrollParents.popper)
		return (
			o &&
				c.forEach(function (h) {
					h.addEventListener('scroll', e.update, uo)
				}),
			a && l.addEventListener('resize', e.update, uo),
			function () {
				o &&
					c.forEach(function (h) {
						h.removeEventListener('scroll', e.update, uo)
					}),
					a && l.removeEventListener('resize', e.update, uo)
			}
		)
	}
	const Na = {
		name: 'eventListeners',
		enabled: !0,
		phase: 'write',
		fn: function () {},
		effect: $m,
		data: {},
	}
	var Rm = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
	function po(s) {
		return s.replace(/left|right|bottom|top/g, function (t) {
			return Rm[t]
		})
	}
	var Pm = { start: 'end', end: 'start' }
	function zh(s) {
		return s.replace(/start|end/g, function (t) {
			return Pm[t]
		})
	}
	function Ba(s) {
		var t = Rt(s),
			e = t.pageXOffset,
			i = t.pageYOffset
		return { scrollLeft: e, scrollTop: i }
	}
	function Ha(s) {
		return Xi(He(s)).left + Ba(s).scrollLeft
	}
	function Nm(s, t) {
		var e = Rt(s),
			i = He(s),
			n = e.visualViewport,
			o = i.clientWidth,
			r = i.clientHeight,
			a = 0,
			l = 0
		if (n) {
			;(o = n.width), (r = n.height)
			var c = Rh()
			;(c || (!c && t === 'fixed')) && ((a = n.offsetLeft), (l = n.offsetTop))
		}
		return { width: o, height: r, x: a + Ha(s), y: l }
	}
	function Bm(s) {
		var t,
			e = He(s),
			i = Ba(s),
			n = (t = s.ownerDocument) == null ? void 0 : t.body,
			o = pi(
				e.scrollWidth,
				e.clientWidth,
				n ? n.scrollWidth : 0,
				n ? n.clientWidth : 0
			),
			r = pi(
				e.scrollHeight,
				e.clientHeight,
				n ? n.scrollHeight : 0,
				n ? n.clientHeight : 0
			),
			a = -i.scrollLeft + Ha(s),
			l = -i.scrollTop
		return (
			Jt(n || e).direction === 'rtl' &&
				(a += pi(e.clientWidth, n ? n.clientWidth : 0) - o),
			{ width: o, height: r, x: a, y: l }
		)
	}
	function Va(s) {
		var t = Jt(s),
			e = t.overflow,
			i = t.overflowX,
			n = t.overflowY
		return /auto|scroll|overlay|hidden/.test(e + n + i)
	}
	function jh(s) {
		return ['html', 'body', '#document'].indexOf(le(s)) >= 0
			? s.ownerDocument.body
			: Pt(s) && Va(s)
			? s
			: jh(ho(s))
	}
	function Hs(s, t) {
		var e
		t === void 0 && (t = [])
		var i = jh(s),
			n = i === ((e = s.ownerDocument) == null ? void 0 : e.body),
			o = Rt(i),
			r = n ? [o].concat(o.visualViewport || [], Va(i) ? i : []) : i,
			a = t.concat(r)
		return n ? a : a.concat(Hs(ho(r)))
	}
	function Fa(s) {
		return Object.assign({}, s, {
			left: s.x,
			top: s.y,
			right: s.x + s.width,
			bottom: s.y + s.height,
		})
	}
	function Hm(s, t) {
		var e = Xi(s, !1, t === 'fixed')
		return (
			(e.top = e.top + s.clientTop),
			(e.left = e.left + s.clientLeft),
			(e.bottom = e.top + s.clientHeight),
			(e.right = e.left + s.clientWidth),
			(e.width = s.clientWidth),
			(e.height = s.clientHeight),
			(e.x = e.left),
			(e.y = e.top),
			e
		)
	}
	function Yh(s, t, e) {
		return t === Sa ? Fa(Nm(s, e)) : ui(t) ? Hm(t, e) : Fa(Bm(He(s)))
	}
	function Vm(s) {
		var t = Hs(ho(s)),
			e = ['absolute', 'fixed'].indexOf(Jt(s).position) >= 0,
			i = e && Pt(s) ? Ns(s) : s
		return ui(i)
			? t.filter(function (n) {
					return ui(n) && Ph(n, i) && le(n) !== 'body'
			  })
			: []
	}
	function Fm(s, t, e, i) {
		var n = t === 'clippingParents' ? Vm(s) : [].concat(t),
			o = [].concat(n, [e]),
			r = o[0],
			a = o.reduce(function (l, c) {
				var h = Yh(s, c, i)
				return (
					(l.top = pi(h.top, l.top)),
					(l.right = co(h.right, l.right)),
					(l.bottom = co(h.bottom, l.bottom)),
					(l.left = pi(h.left, l.left)),
					l
				)
			}, Yh(s, r, i))
		return (
			(a.width = a.right - a.left),
			(a.height = a.bottom - a.top),
			(a.x = a.left),
			(a.y = a.top),
			a
		)
	}
	function Kh(s) {
		var t = s.reference,
			e = s.element,
			i = s.placement,
			n = i ? Qt(i) : null,
			o = i ? Gi(i) : null,
			r = t.x + t.width / 2 - e.width / 2,
			a = t.y + t.height / 2 - e.height / 2,
			l
		switch (n) {
			case vt:
				l = { x: r, y: t.y - e.height }
				break
			case Lt:
				l = { x: r, y: t.y + t.height }
				break
			case $t:
				l = { x: t.x + t.width, y: a }
				break
			case yt:
				l = { x: t.x - e.width, y: a }
				break
			default:
				l = { x: t.x, y: t.y }
		}
		var c = n ? Ra(n) : null
		if (c != null) {
			var h = c === 'y' ? 'height' : 'width'
			switch (o) {
				case di:
					l[c] = l[c] - (t[h] / 2 - e[h] / 2)
					break
				case Yi:
					l[c] = l[c] + (t[h] / 2 - e[h] / 2)
					break
			}
		}
		return l
	}
	function qi(s, t) {
		t === void 0 && (t = {})
		var e = t,
			i = e.placement,
			n = i === void 0 ? s.placement : i,
			o = e.strategy,
			r = o === void 0 ? s.strategy : o,
			a = e.boundary,
			l = a === void 0 ? Ch : a,
			c = e.rootBoundary,
			h = c === void 0 ? Sa : c,
			d = e.elementContext,
			u = d === void 0 ? Ki : d,
			p = e.altBoundary,
			f = p === void 0 ? !1 : p,
			b = e.padding,
			v = b === void 0 ? 0 : b,
			y = Hh(typeof v != 'number' ? v : Vh(v, ji)),
			T = u === Ki ? Ah : Ki,
			x = s.rects.popper,
			E = s.elements[f ? T : u],
			C = Fm(ui(E) ? E : E.contextElement || He(s.elements.popper), l, h, r),
			A = Xi(s.elements.reference),
			w = Kh({ reference: A, element: x, strategy: 'absolute', placement: n }),
			S = Fa(Object.assign({}, x, w)),
			k = u === Ki ? S : A,
			D = {
				top: C.top - k.top + y.top,
				bottom: k.bottom - C.bottom + y.bottom,
				left: C.left - k.left + y.left,
				right: k.right - C.right + y.right,
			},
			I = s.modifiersData.offset
		if (u === Ki && I) {
			var M = I[n]
			Object.keys(D).forEach(function (P) {
				var X = [$t, Lt].indexOf(P) >= 0 ? 1 : -1,
					R = [vt, Lt].indexOf(P) >= 0 ? 'y' : 'x'
				D[P] += M[R] * X
			})
		}
		return D
	}
	function Wm(s, t) {
		t === void 0 && (t = {})
		var e = t,
			i = e.placement,
			n = e.boundary,
			o = e.rootBoundary,
			r = e.padding,
			a = e.flipVariations,
			l = e.allowedAutoPlacements,
			c = l === void 0 ? Ia : l,
			h = Gi(i),
			d = h
				? a
					? Oa
					: Oa.filter(function (f) {
							return Gi(f) === h
					  })
				: ji,
			u = d.filter(function (f) {
				return c.indexOf(f) >= 0
			})
		u.length === 0 &&
			((u = d),
			{}.NODE_ENV !== 'production' &&
				console.error(
					[
						'Popper: The `allowedAutoPlacements` option did not allow any',
						'placements. Ensure the `placement` option matches the variation',
						'of the allowed placements.',
						'For example, "auto" cannot be used to allow "bottom-start".',
						'Use "auto-start" instead.',
					].join(' ')
				))
		var p = u.reduce(function (f, b) {
			return (
				(f[b] = qi(s, {
					placement: b,
					boundary: n,
					rootBoundary: o,
					padding: r,
				})[Qt(b)]),
				f
			)
		}, {})
		return Object.keys(p).sort(function (f, b) {
			return p[f] - p[b]
		})
	}
	function zm(s) {
		if (Qt(s) === Ps) return []
		var t = po(s)
		return [zh(s), t, zh(t)]
	}
	function jm(s) {
		var t = s.state,
			e = s.options,
			i = s.name
		if (!t.modifiersData[i]._skip) {
			for (
				var n = e.mainAxis,
					o = n === void 0 ? !0 : n,
					r = e.altAxis,
					a = r === void 0 ? !0 : r,
					l = e.fallbackPlacements,
					c = e.padding,
					h = e.boundary,
					d = e.rootBoundary,
					u = e.altBoundary,
					p = e.flipVariations,
					f = p === void 0 ? !0 : p,
					b = e.allowedAutoPlacements,
					v = t.options.placement,
					y = Qt(v),
					T = y === v,
					x = l || (T || !f ? [po(v)] : zm(v)),
					E = [v].concat(x).reduce(function (we, Zt) {
						return we.concat(
							Qt(Zt) === Ps
								? Wm(t, {
										placement: Zt,
										boundary: h,
										rootBoundary: d,
										padding: c,
										flipVariations: f,
										allowedAutoPlacements: b,
								  })
								: Zt
						)
					}, []),
					C = t.rects.reference,
					A = t.rects.popper,
					w = new Map(),
					S = !0,
					k = E[0],
					D = 0;
				D < E.length;
				D++
			) {
				var I = E[D],
					M = Qt(I),
					P = Gi(I) === di,
					X = [vt, Lt].indexOf(M) >= 0,
					R = X ? 'width' : 'height',
					z = qi(t, {
						placement: I,
						boundary: h,
						rootBoundary: d,
						altBoundary: u,
						padding: c,
					}),
					Y = X ? (P ? $t : yt) : P ? Lt : vt
				C[R] > A[R] && (Y = po(Y))
				var Gt = po(Y),
					oe = []
				if (
					(o && oe.push(z[M] <= 0),
					a && oe.push(z[Y] <= 0, z[Gt] <= 0),
					oe.every(function (we) {
						return we
					}))
				) {
					;(k = I), (S = !1)
					break
				}
				w.set(I, oe)
			}
			if (S)
				for (
					var re = f ? 3 : 1,
						li = function (Zt) {
							var Pe = E.find(function (Ta) {
								var Vi = w.get(Ta)
								if (Vi)
									return Vi.slice(0, Zt).every(function (rh) {
										return rh
									})
							})
							if (Pe) return (k = Pe), 'break'
						},
						qt = re;
					qt > 0;
					qt--
				) {
					var Ae = li(qt)
					if (Ae === 'break') break
				}
			t.placement !== k &&
				((t.modifiersData[i]._skip = !0), (t.placement = k), (t.reset = !0))
		}
	}
	const Uh = {
		name: 'flip',
		enabled: !0,
		phase: 'main',
		fn: jm,
		requiresIfExists: ['offset'],
		data: { _skip: !1 },
	}
	function Xh(s, t, e) {
		return (
			e === void 0 && (e = { x: 0, y: 0 }),
			{
				top: s.top - t.height - e.y,
				right: s.right - t.width + e.x,
				bottom: s.bottom - t.height + e.y,
				left: s.left - t.width - e.x,
			}
		)
	}
	function Gh(s) {
		return [vt, $t, Lt, yt].some(function (t) {
			return s[t] >= 0
		})
	}
	function Ym(s) {
		var t = s.state,
			e = s.name,
			i = t.rects.reference,
			n = t.rects.popper,
			o = t.modifiersData.preventOverflow,
			r = qi(t, { elementContext: 'reference' }),
			a = qi(t, { altBoundary: !0 }),
			l = Xh(r, i),
			c = Xh(a, n, o),
			h = Gh(l),
			d = Gh(c)
		;(t.modifiersData[e] = {
			referenceClippingOffsets: l,
			popperEscapeOffsets: c,
			isReferenceHidden: h,
			hasPopperEscaped: d,
		}),
			(t.attributes.popper = Object.assign({}, t.attributes.popper, {
				'data-popper-reference-hidden': h,
				'data-popper-escaped': d,
			}))
	}
	const qh = {
		name: 'hide',
		enabled: !0,
		phase: 'main',
		requiresIfExists: ['preventOverflow'],
		fn: Ym,
	}
	function Km(s, t, e) {
		var i = Qt(s),
			n = [yt, vt].indexOf(i) >= 0 ? -1 : 1,
			o =
				typeof e == 'function' ? e(Object.assign({}, t, { placement: s })) : e,
			r = o[0],
			a = o[1]
		return (
			(r = r || 0),
			(a = (a || 0) * n),
			[yt, $t].indexOf(i) >= 0 ? { x: a, y: r } : { x: r, y: a }
		)
	}
	function Um(s) {
		var t = s.state,
			e = s.options,
			i = s.name,
			n = e.offset,
			o = n === void 0 ? [0, 0] : n,
			r = Ia.reduce(function (h, d) {
				return (h[d] = Km(d, t.rects, o)), h
			}, {}),
			a = r[t.placement],
			l = a.x,
			c = a.y
		t.modifiersData.popperOffsets != null &&
			((t.modifiersData.popperOffsets.x += l),
			(t.modifiersData.popperOffsets.y += c)),
			(t.modifiersData[i] = r)
	}
	const Zh = {
		name: 'offset',
		enabled: !0,
		phase: 'main',
		requires: ['popperOffsets'],
		fn: Um,
	}
	function Xm(s) {
		var t = s.state,
			e = s.name
		t.modifiersData[e] = Kh({
			reference: t.rects.reference,
			element: t.rects.popper,
			strategy: 'absolute',
			placement: t.placement,
		})
	}
	const Wa = {
		name: 'popperOffsets',
		enabled: !0,
		phase: 'read',
		fn: Xm,
		data: {},
	}
	function Gm(s) {
		return s === 'x' ? 'y' : 'x'
	}
	function qm(s) {
		var t = s.state,
			e = s.options,
			i = s.name,
			n = e.mainAxis,
			o = n === void 0 ? !0 : n,
			r = e.altAxis,
			a = r === void 0 ? !1 : r,
			l = e.boundary,
			c = e.rootBoundary,
			h = e.altBoundary,
			d = e.padding,
			u = e.tether,
			p = u === void 0 ? !0 : u,
			f = e.tetherOffset,
			b = f === void 0 ? 0 : f,
			v = qi(t, { boundary: l, rootBoundary: c, padding: d, altBoundary: h }),
			y = Qt(t.placement),
			T = Gi(t.placement),
			x = !T,
			E = Ra(y),
			C = Gm(E),
			A = t.modifiersData.popperOffsets,
			w = t.rects.reference,
			S = t.rects.popper,
			k =
				typeof b == 'function'
					? b(Object.assign({}, t.rects, { placement: t.placement }))
					: b,
			D =
				typeof k == 'number'
					? { mainAxis: k, altAxis: k }
					: Object.assign({ mainAxis: 0, altAxis: 0 }, k),
			I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
			M = { x: 0, y: 0 }
		if (A) {
			if (o) {
				var P,
					X = E === 'y' ? vt : yt,
					R = E === 'y' ? Lt : $t,
					z = E === 'y' ? 'height' : 'width',
					Y = A[E],
					Gt = Y + v[X],
					oe = Y - v[R],
					re = p ? -S[z] / 2 : 0,
					li = T === di ? w[z] : S[z],
					qt = T === di ? -S[z] : -w[z],
					Ae = t.elements.arrow,
					we = p && Ae ? $a(Ae) : { width: 0, height: 0 },
					Zt = t.modifiersData['arrow#persistent']
						? t.modifiersData['arrow#persistent'].padding
						: Bh(),
					Pe = Zt[X],
					Ta = Zt[R],
					Vi = Bs(0, w[z], we[z]),
					rh = x
						? w[z] / 2 - re - Vi - Pe - D.mainAxis
						: li - Vi - Pe - D.mainAxis,
					mL = x
						? -w[z] / 2 + re + Vi + Ta + D.mainAxis
						: qt + Vi + Ta + D.mainAxis,
					ah = t.elements.arrow && Ns(t.elements.arrow),
					bL = ah ? (E === 'y' ? ah.clientTop || 0 : ah.clientLeft || 0) : 0,
					Zg = (P = I == null ? void 0 : I[E]) != null ? P : 0,
					vL = Y + rh - Zg - bL,
					yL = Y + mL - Zg,
					Qg = Bs(p ? co(Gt, vL) : Gt, Y, p ? pi(oe, yL) : oe)
				;(A[E] = Qg), (M[E] = Qg - Y)
			}
			if (a) {
				var Jg,
					TL = E === 'x' ? vt : yt,
					EL = E === 'x' ? Lt : $t,
					Fi = A[C],
					Ea = C === 'y' ? 'height' : 'width',
					tm = Fi + v[TL],
					em = Fi - v[EL],
					lh = [vt, yt].indexOf(y) !== -1,
					im = (Jg = I == null ? void 0 : I[C]) != null ? Jg : 0,
					sm = lh ? tm : Fi - w[Ea] - S[Ea] - im + D.altAxis,
					nm = lh ? Fi + w[Ea] + S[Ea] - im - D.altAxis : em,
					om = p && lh ? km(sm, Fi, nm) : Bs(p ? sm : tm, Fi, p ? nm : em)
				;(A[C] = om), (M[C] = om - Fi)
			}
			t.modifiersData[i] = M
		}
	}
	const Qh = {
		name: 'preventOverflow',
		enabled: !0,
		phase: 'main',
		fn: qm,
		requiresIfExists: ['offset'],
	}
	function Zm(s) {
		return { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop }
	}
	function Qm(s) {
		return s === Rt(s) || !Pt(s) ? Ba(s) : Zm(s)
	}
	function Jm(s) {
		var t = s.getBoundingClientRect(),
			e = Ui(t.width) / s.offsetWidth || 1,
			i = Ui(t.height) / s.offsetHeight || 1
		return e !== 1 || i !== 1
	}
	function tb(s, t, e) {
		e === void 0 && (e = !1)
		var i = Pt(t),
			n = Pt(t) && Jm(t),
			o = He(t),
			r = Xi(s, n, e),
			a = { scrollLeft: 0, scrollTop: 0 },
			l = { x: 0, y: 0 }
		return (
			(i || (!i && !e)) &&
				((le(t) !== 'body' || Va(o)) && (a = Qm(t)),
				Pt(t)
					? ((l = Xi(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
					: o && (l.x = Ha(o))),
			{
				x: r.left + a.scrollLeft - l.x,
				y: r.top + a.scrollTop - l.y,
				width: r.width,
				height: r.height,
			}
		)
	}
	function eb(s) {
		var t = new Map(),
			e = new Set(),
			i = []
		s.forEach(function (o) {
			t.set(o.name, o)
		})
		function n(o) {
			e.add(o.name)
			var r = [].concat(o.requires || [], o.requiresIfExists || [])
			r.forEach(function (a) {
				if (!e.has(a)) {
					var l = t.get(a)
					l && n(l)
				}
			}),
				i.push(o)
		}
		return (
			s.forEach(function (o) {
				e.has(o.name) || n(o)
			}),
			i
		)
	}
	function ib(s) {
		var t = eb(s)
		return lo.reduce(function (e, i) {
			return e.concat(
				t.filter(function (n) {
					return n.phase === i
				})
			)
		}, [])
	}
	function sb(s) {
		var t
		return function () {
			return (
				t ||
					(t = new Promise(function (e) {
						Promise.resolve().then(function () {
							;(t = void 0), e(s())
						})
					})),
				t
			)
		}
	}
	function Ve(s) {
		for (
			var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), i = 1;
			i < t;
			i++
		)
			e[i - 1] = arguments[i]
		return [].concat(e).reduce(function (n, o) {
			return n.replace(/%s/, o)
		}, s)
	}
	var fi =
			'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
		nb =
			'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
		Jh = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options']
	function ob(s) {
		s.forEach(function (t) {
			;[]
				.concat(Object.keys(t), Jh)
				.filter(function (e, i, n) {
					return n.indexOf(e) === i
				})
				.forEach(function (e) {
					switch (e) {
						case 'name':
							typeof t.name != 'string' &&
								console.error(
									Ve(
										fi,
										String(t.name),
										'"name"',
										'"string"',
										'"' + String(t.name) + '"'
									)
								)
							break
						case 'enabled':
							typeof t.enabled != 'boolean' &&
								console.error(
									Ve(
										fi,
										t.name,
										'"enabled"',
										'"boolean"',
										'"' + String(t.enabled) + '"'
									)
								)
							break
						case 'phase':
							lo.indexOf(t.phase) < 0 &&
								console.error(
									Ve(
										fi,
										t.name,
										'"phase"',
										'either ' + lo.join(', '),
										'"' + String(t.phase) + '"'
									)
								)
							break
						case 'fn':
							typeof t.fn != 'function' &&
								console.error(
									Ve(fi, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"')
								)
							break
						case 'effect':
							t.effect != null &&
								typeof t.effect != 'function' &&
								console.error(
									Ve(
										fi,
										t.name,
										'"effect"',
										'"function"',
										'"' + String(t.fn) + '"'
									)
								)
							break
						case 'requires':
							t.requires != null &&
								!Array.isArray(t.requires) &&
								console.error(
									Ve(
										fi,
										t.name,
										'"requires"',
										'"array"',
										'"' + String(t.requires) + '"'
									)
								)
							break
						case 'requiresIfExists':
							Array.isArray(t.requiresIfExists) ||
								console.error(
									Ve(
										fi,
										t.name,
										'"requiresIfExists"',
										'"array"',
										'"' + String(t.requiresIfExists) + '"'
									)
								)
							break
						case 'options':
						case 'data':
							break
						default:
							console.error(
								'PopperJS: an invalid property has been provided to the "' +
									t.name +
									'" modifier, valid properties are ' +
									Jh.map(function (i) {
										return '"' + i + '"'
									}).join(', ') +
									'; but "' +
									e +
									'" was provided.'
							)
					}
					t.requires &&
						t.requires.forEach(function (i) {
							s.find(function (n) {
								return n.name === i
							}) == null && console.error(Ve(nb, String(t.name), i, i))
						})
				})
		})
	}
	function rb(s, t) {
		var e = new Set()
		return s.filter(function (i) {
			var n = t(i)
			if (!e.has(n)) return e.add(n), !0
		})
	}
	function ab(s) {
		var t = s.reduce(function (e, i) {
			var n = e[i.name]
			return (
				(e[i.name] = n
					? Object.assign({}, n, i, {
							options: Object.assign({}, n.options, i.options),
							data: Object.assign({}, n.data, i.data),
					  })
					: i),
				e
			)
		}, {})
		return Object.keys(t).map(function (e) {
			return t[e]
		})
	}
	var td =
			'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',
		lb =
			'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',
		ed = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
	function id() {
		for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
			t[e] = arguments[e]
		return !t.some(function (i) {
			return !(i && typeof i.getBoundingClientRect == 'function')
		})
	}
	function fo(s) {
		s === void 0 && (s = {})
		var t = s,
			e = t.defaultModifiers,
			i = e === void 0 ? [] : e,
			n = t.defaultOptions,
			o = n === void 0 ? ed : n
		return function (a, l, c) {
			c === void 0 && (c = o)
			var h = {
					placement: 'bottom',
					orderedModifiers: [],
					options: Object.assign({}, ed, o),
					modifiersData: {},
					elements: { reference: a, popper: l },
					attributes: {},
					styles: {},
				},
				d = [],
				u = !1,
				p = {
					state: h,
					setOptions: function (y) {
						var T = typeof y == 'function' ? y(h.options) : y
						b(),
							(h.options = Object.assign({}, o, h.options, T)),
							(h.scrollParents = {
								reference: ui(a)
									? Hs(a)
									: a.contextElement
									? Hs(a.contextElement)
									: [],
								popper: Hs(l),
							})
						var x = ib(ab([].concat(i, h.options.modifiers)))
						if (
							((h.orderedModifiers = x.filter(function (I) {
								return I.enabled
							})),
							{}.NODE_ENV !== 'production')
						) {
							var E = rb([].concat(x, h.options.modifiers), function (I) {
								var M = I.name
								return M
							})
							if ((ob(E), Qt(h.options.placement) === Ps)) {
								var C = h.orderedModifiers.find(function (I) {
									var M = I.name
									return M === 'flip'
								})
								C ||
									console.error(
										[
											'Popper: "auto" placements require the "flip" modifier be',
											'present and enabled to work.',
										].join(' ')
									)
							}
							var A = Jt(l),
								w = A.marginTop,
								S = A.marginRight,
								k = A.marginBottom,
								D = A.marginLeft
							;[w, S, k, D].some(function (I) {
								return parseFloat(I)
							}) &&
								console.warn(
									[
										'Popper: CSS "margin" styles cannot be used to apply padding',
										'between the popper and its reference element or boundary.',
										'To replicate margin, use the `offset` modifier, as well as',
										'the `padding` option in the `preventOverflow` and `flip`',
										'modifiers.',
									].join(' ')
								)
						}
						return f(), p.update()
					},
					forceUpdate: function () {
						if (!u) {
							var y = h.elements,
								T = y.reference,
								x = y.popper
							if (!id(T, x)) {
								;({}).NODE_ENV !== 'production' && console.error(td)
								return
							}
							;(h.rects = {
								reference: tb(T, Ns(x), h.options.strategy === 'fixed'),
								popper: $a(x),
							}),
								(h.reset = !1),
								(h.placement = h.options.placement),
								h.orderedModifiers.forEach(function (I) {
									return (h.modifiersData[I.name] = Object.assign({}, I.data))
								})
							for (var E = 0, C = 0; C < h.orderedModifiers.length; C++) {
								if ({}.NODE_ENV !== 'production' && ((E += 1), E > 100)) {
									console.error(lb)
									break
								}
								if (h.reset === !0) {
									;(h.reset = !1), (C = -1)
									continue
								}
								var A = h.orderedModifiers[C],
									w = A.fn,
									S = A.options,
									k = S === void 0 ? {} : S,
									D = A.name
								typeof w == 'function' &&
									(h = w({ state: h, options: k, name: D, instance: p }) || h)
							}
						}
					},
					update: sb(function () {
						return new Promise(function (v) {
							p.forceUpdate(), v(h)
						})
					}),
					destroy: function () {
						b(), (u = !0)
					},
				}
			if (!id(a, l)) return {}.NODE_ENV !== 'production' && console.error(td), p
			p.setOptions(c).then(function (v) {
				!u && c.onFirstUpdate && c.onFirstUpdate(v)
			})
			function f() {
				h.orderedModifiers.forEach(function (v) {
					var y = v.name,
						T = v.options,
						x = T === void 0 ? {} : T,
						E = v.effect
					if (typeof E == 'function') {
						var C = E({ state: h, name: y, instance: p, options: x }),
							A = function () {}
						d.push(C || A)
					}
				})
			}
			function b() {
				d.forEach(function (v) {
					return v()
				}),
					(d = [])
			}
			return p
		}
	}
	var cb = fo(),
		hb = [Na, Wa, Pa, Ma],
		db = fo({ defaultModifiers: hb }),
		ub = [Na, Wa, Pa, Ma, Zh, Uh, Qh, Fh, qh],
		Fe = fo({ defaultModifiers: ub })
	const sd = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				afterMain: Dh,
				afterRead: Sh,
				afterWrite: $h,
				applyStyles: Ma,
				arrow: Fh,
				auto: Ps,
				basePlacements: ji,
				beforeMain: Oh,
				beforeRead: wh,
				beforeWrite: Mh,
				bottom: Lt,
				clippingParents: Ch,
				computeStyles: Pa,
				createPopper: Fe,
				createPopperBase: cb,
				createPopperLite: db,
				detectOverflow: qi,
				end: Yi,
				eventListeners: Na,
				flip: Uh,
				hide: qh,
				left: yt,
				main: Ih,
				modifierPhases: lo,
				offset: Zh,
				placements: Ia,
				popper: Ki,
				popperGenerator: fo,
				popperOffsets: Wa,
				preventOverflow: Qh,
				read: kh,
				reference: Ah,
				right: $t,
				start: di,
				top: vt,
				variationPlacements: Oa,
				viewport: Sa,
				write: Lh,
			},
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	)
	function za(s) {
		return s === 'true'
			? !0
			: s === 'false'
			? !1
			: s === Number(s).toString()
			? Number(s)
			: s === '' || s === 'null'
			? null
			: s
	}
	function ja(s) {
		return s.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
	}
	const g = {
		setDataAttribute(s, t, e) {
			s.setAttribute(`data-te-${ja(t)}`, e)
		},
		removeDataAttribute(s, t) {
			s.removeAttribute(`data-te-${ja(t)}`)
		},
		getDataAttributes(s) {
			if (!s) return {}
			const t = {}
			return (
				Object.keys(s.dataset)
					.filter(e => e.startsWith('te'))
					.forEach(e => {
						if (e.startsWith('teClass')) return
						let i = e.replace(/^te/, '')
						;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
							(t[i] = za(s.dataset[e]))
					}),
				t
			)
		},
		getDataClassAttributes(s) {
			if (!s) return {}
			const t = { ...s.dataset }
			return (
				Object.keys(t)
					.filter(e => e.startsWith('teClass'))
					.forEach(e => {
						let i = e.replace(/^teClass/, '')
						;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
							(t[i] = za(t[e]))
					}),
				t
			)
		},
		getDataAttribute(s, t) {
			return za(s.getAttribute(`data-te-${ja(t)}`))
		},
		offset(s) {
			const t = s.getBoundingClientRect()
			return {
				top: t.top + document.body.scrollTop,
				left: t.left + document.body.scrollLeft,
			}
		},
		position(s) {
			return { top: s.offsetTop, left: s.offsetLeft }
		},
		style(s, t) {
			Object.assign(s.style, t)
		},
		toggleClass(s, t) {
			s &&
				Ya(t).forEach(e => {
					s.classList.contains(e) ? s.classList.remove(e) : s.classList.add(e)
				})
		},
		addClass(s, t) {
			Ya(t).forEach(e => !s.classList.contains(e) && s.classList.add(e))
		},
		addStyle(s, t) {
			Object.keys(t).forEach(e => {
				s.style[e] = t[e]
			})
		},
		removeClass(s, t) {
			Ya(t).forEach(e => s.classList.contains(e) && s.classList.remove(e))
		},
		hasClass(s, t) {
			return s.classList.contains(t)
		},
		maxOffset(s) {
			const t = s.getBoundingClientRect()
			return {
				top:
					t.top +
					Math.max(
						document.body.scrollTop,
						document.documentElement.scrollTop,
						window.scrollY
					),
				left:
					t.left +
					Math.max(
						document.body.scrollLeft,
						document.documentElement.scrollLeft,
						window.scrollX
					),
			}
		},
	}
	function Ya(s) {
		return typeof s == 'string' ? s.split(' ') : Array.isArray(s) ? s : !1
	}
	const pb = 3,
		m = {
			closest(s, t) {
				return s.closest(t)
			},
			matches(s, t) {
				return s.matches(t)
			},
			find(s, t = document.documentElement) {
				return [].concat(...Element.prototype.querySelectorAll.call(t, s))
			},
			findOne(s, t = document.documentElement) {
				return Element.prototype.querySelector.call(t, s)
			},
			children(s, t) {
				return [].concat(...s.children).filter(i => i.matches(t))
			},
			parents(s, t) {
				const e = []
				let i = s.parentNode
				for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== pb; )
					this.matches(i, t) && e.push(i), (i = i.parentNode)
				return e
			},
			prev(s, t) {
				let e = s.previousElementSibling
				for (; e; ) {
					if (e.matches(t)) return [e]
					e = e.previousElementSibling
				}
				return []
			},
			next(s, t) {
				let e = s.nextElementSibling
				for (; e; ) {
					if (this.matches(e, t)) return [e]
					e = e.nextElementSibling
				}
				return []
			},
			focusableChildren(s) {
				const t = [
					'a',
					'button',
					'input',
					'textarea',
					'select',
					'details',
					'[tabindex]',
					'[contenteditable="true"]',
				]
					.map(e => `${e}:not([tabindex^="-"])`)
					.join(', ')
				return this.find(t, s).filter(e => !ci(e) && ae(e))
			},
		},
		Ka = 'dropdown',
		_i = '.te.dropdown',
		Ua = '.data-api',
		_o = 'Escape',
		nd = 'Space',
		od = 'Tab',
		Xa = 'ArrowUp',
		go = 'ArrowDown',
		fb = 2,
		_b = new RegExp(`${Xa}|${go}|${_o}`),
		gb = `hide${_i}`,
		mb = `hidden${_i}`,
		bb = `show${_i}`,
		vb = `shown${_i}`,
		yb = `click${_i}${Ua}`,
		rd = `keydown${_i}${Ua}`,
		Tb = `keyup${_i}${Ua}`,
		We = 'show',
		Eb = 'dropup',
		xb = 'dropend',
		Cb = 'dropstart',
		Ab = '[data-te-navbar-ref]',
		mo = '[data-te-dropdown-toggle-ref]',
		Ga = '[data-te-dropdown-menu-ref]',
		wb = '[data-te-navbar-nav-ref]',
		kb =
			'[data-te-dropdown-menu-ref] [data-te-dropdown-item-ref]:not(.disabled):not(:disabled)',
		Sb = et() ? 'top-end' : 'top-start',
		Ob = et() ? 'top-start' : 'top-end',
		Ib = et() ? 'bottom-end' : 'bottom-start',
		Db = et() ? 'bottom-start' : 'bottom-end',
		Mb = et() ? 'left-start' : 'right-start',
		Lb = et() ? 'right-start' : 'left-start',
		$b = [{ opacity: '0' }, { opacity: '1' }],
		Rb = [{ opacity: '1' }, { opacity: '0' }],
		ad = { iterations: 1, easing: 'ease', fill: 'both' },
		Pb = {
			offset: [0, 2],
			boundary: 'clippingParents',
			reference: 'toggle',
			display: 'dynamic',
			popperConfig: null,
			autoClose: !0,
			dropdownAnimation: 'on',
			animationDuration: 550,
		},
		Nb = {
			offset: '(array|string|function)',
			boundary: '(string|element)',
			reference: '(string|element|object)',
			display: 'string',
			popperConfig: '(null|object|function)',
			autoClose: '(boolean|string)',
			dropdownAnimation: 'string',
			animationDuration: 'number',
		}
	class Ft extends Mt {
		constructor(t, e) {
			super(t),
				(this._popper = null),
				(this._config = this._getConfig(e)),
				(this._menu = this._getMenuElement()),
				(this._inNavbar = this._detectNavbar()),
				(this._fadeOutAnimate = null)
			const i = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			;(this._animationCanPlay = this._config.dropdownAnimation === 'on' && !i),
				(this._didInit = !1),
				this._init()
		}
		static get Default() {
			return Pb
		}
		static get DefaultType() {
			return Nb
		}
		static get NAME() {
			return Ka
		}
		toggle() {
			return this._isShown() ? this.hide() : this.show()
		}
		show() {
			if (ci(this._element) || this._isShown(this._menu)) return
			const t = { relatedTarget: this._element }
			if (_.trigger(this._element, bb, t).defaultPrevented) return
			const i = Ft.getParentFromElement(this._element)
			this._inNavbar
				? g.setDataAttribute(this._menu, 'popper', 'none')
				: this._createPopper(i),
				'ontouchstart' in document.documentElement &&
					!i.closest(wb) &&
					[]
						.concat(...document.body.children)
						.forEach(n => _.on(n, 'mouseover', ro)),
				this._element.focus(),
				this._element.setAttribute('aria-expanded', !0),
				this._menu.setAttribute(`data-te-dropdown-${We}`, ''),
				this._animationCanPlay &&
					this._menu.animate($b, {
						...ad,
						duration: this._config.animationDuration,
					}),
				this._element.setAttribute(`data-te-dropdown-${We}`, ''),
				setTimeout(
					() => {
						_.trigger(this._element, vb, t)
					},
					this._animationCanPlay ? this._config.animationDuration : 0
				)
		}
		hide() {
			if (ci(this._element) || !this._isShown(this._menu)) return
			const t = { relatedTarget: this._element }
			this._completeHide(t)
		}
		dispose() {
			this._popper && this._popper.destroy(), super.dispose()
		}
		update() {
			;(this._inNavbar = this._detectNavbar()),
				this._popper && this._popper.update()
		}
		_init() {
			this._didInit ||
				(_.on(document, rd, mo, Ft.dataApiKeydownHandler),
				_.on(document, rd, Ga, Ft.dataApiKeydownHandler),
				_.on(document, yb, Ft.clearMenus),
				_.on(document, Tb, Ft.clearMenus),
				(this._didInit = !0))
		}
		_completeHide(t) {
			;(this._fadeOutAnimate && this._fadeOutAnimate.playState === 'running') ||
				_.trigger(this._element, gb, t).defaultPrevented ||
				('ontouchstart' in document.documentElement &&
					[]
						.concat(...document.body.children)
						.forEach(i => _.off(i, 'mouseover', ro)),
				this._animationCanPlay &&
					(this._fadeOutAnimate = this._menu.animate(Rb, {
						...ad,
						duration: this._config.animationDuration,
					})),
				setTimeout(
					() => {
						this._popper && this._popper.destroy(),
							this._menu.removeAttribute(`data-te-dropdown-${We}`),
							this._element.removeAttribute(`data-te-dropdown-${We}`),
							this._element.setAttribute('aria-expanded', 'false'),
							g.removeDataAttribute(this._menu, 'popper'),
							_.trigger(this._element, mb, t)
					},
					this._animationCanPlay ? this._config.animationDuration : 0
				))
		}
		_getConfig(t) {
			if (
				((t = {
					...this.constructor.Default,
					...g.getDataAttributes(this._element),
					...t,
				}),
				L(Ka, t, this.constructor.DefaultType),
				typeof t.reference == 'object' &&
					!Wi(t.reference) &&
					typeof t.reference.getBoundingClientRect != 'function')
			)
				throw new TypeError(
					`${Ka.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
				)
			return t
		}
		_createPopper(t) {
			if (typeof sd > 'u')
				throw new TypeError(
					"Bootstrap's dropdowns require Popper (https://popper.js.org)"
				)
			let e = this._element
			this._config.reference === 'parent'
				? (e = t)
				: Wi(this._config.reference)
				? (e = Be(this._config.reference))
				: typeof this._config.reference == 'object' &&
				  (e = this._config.reference)
			const i = this._getPopperConfig(),
				n = i.modifiers.find(o => o.name === 'applyStyles' && o.enabled === !1)
			;(this._popper = Fe(e, this._menu, i)),
				n && g.setDataAttribute(this._menu, 'popper', 'static')
		}
		_isShown(t = this._element) {
			return (
				t.dataset[`teDropdown${We.charAt(0).toUpperCase() + We.slice(1)}`] ===
				''
			)
		}
		_getMenuElement() {
			return m.next(this._element, Ga)[0]
		}
		_getPlacement() {
			const t = this._element.parentNode
			if (t.dataset.teDropdownPosition === xb) return Mb
			if (t.dataset.teDropdownPosition === Cb) return Lb
			const e = t.dataset.teDropdownAlignment === 'end'
			return t.dataset.teDropdownPosition === Eb ? (e ? Ob : Sb) : e ? Db : Ib
		}
		_detectNavbar() {
			return this._element.closest(Ab) !== null
		}
		_getOffset() {
			const { offset: t } = this._config
			return typeof t == 'string'
				? t.split(',').map(e => Number.parseInt(e, 10))
				: typeof t == 'function'
				? e => t(e, this._element)
				: t
		}
		_getPopperConfig() {
			const t = {
				placement: this._getPlacement(),
				modifiers: [
					{
						name: 'preventOverflow',
						options: { boundary: this._config.boundary },
					},
					{ name: 'offset', options: { offset: this._getOffset() } },
				],
			}
			return (
				this._config.display === 'static' &&
					(t.modifiers = [{ name: 'applyStyles', enabled: !1 }]),
				{
					...t,
					...(typeof this._config.popperConfig == 'function'
						? this._config.popperConfig(t)
						: this._config.popperConfig),
				}
			)
		}
		_selectMenuItem({ key: t, target: e }) {
			const i = m.find(kb, this._menu).filter(ae)
			i.length && _h(i, e, t === go, !i.includes(e)).focus()
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Ft.getOrCreateInstance(this, t)
				if (typeof t == 'string') {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t]()
				}
			})
		}
		static clearMenus(t) {
			if (t && (t.button === fb || (t.type === 'keyup' && t.key !== od))) return
			const e = m.find(mo)
			for (let i = 0, n = e.length; i < n; i++) {
				const o = Ft.getInstance(e[i])
				if (!o || o._config.autoClose === !1 || !o._isShown()) continue
				const r = { relatedTarget: o._element }
				if (t) {
					const a = t.composedPath(),
						l = a.includes(o._menu)
					if (
						a.includes(o._element) ||
						(o._config.autoClose === 'inside' && !l) ||
						(o._config.autoClose === 'outside' && l) ||
						(o._menu.contains(t.target) &&
							((t.type === 'keyup' && t.key === od) ||
								/input|select|option|textarea|form/i.test(t.target.tagName)))
					)
						continue
					t.type === 'click' && (r.clickEvent = t)
				}
				o._completeHide(r)
			}
		}
		static getParentFromElement(t) {
			return Ne(t) || t.parentNode
		}
		static dataApiKeydownHandler(t) {
			if (
				/input|textarea/i.test(t.target.tagName)
					? t.key === nd ||
					  (t.key !== _o &&
							((t.key !== go && t.key !== Xa) || t.target.closest(Ga)))
					: !_b.test(t.key)
			)
				return
			const e =
				this.dataset[
					`teDropdown${We.charAt(0).toUpperCase() + We.slice(1)}`
				] === ''
			if (
				(!e && t.key === _o) ||
				(t.preventDefault(), t.stopPropagation(), ci(this))
			)
				return
			const i = this.matches(mo) ? this : m.prev(this, mo)[0],
				n = Ft.getOrCreateInstance(i)
			if (t.key === _o) {
				n.hide()
				return
			}
			if (t.key === Xa || t.key === go) {
				e || n.show(), n._selectMenuItem(t)
				return
			}
			;(!e || t.key === nd) && Ft.clearMenus()
		}
	}
	const qa = 'collapse',
		ld = 'te.collapse',
		bo = `.${ld}`,
		cd = { toggle: !0, parent: null },
		Bb = { toggle: 'boolean', parent: '(null|element)' },
		Hb = `show${bo}`,
		Vb = `shown${bo}`,
		Fb = `hide${bo}`,
		Wb = `hidden${bo}`,
		Za = 'data-te-collapse-show',
		hd = 'data-te-collapse-collapsed',
		vo = 'data-te-collapse-collapsing',
		zb = 'data-te-collapse-horizontal',
		Zi = 'data-te-collapse-item',
		dd = `:scope [${Zi}] [${Zi}]`,
		jb = 'width',
		Yb = 'height',
		Kb =
			'[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]',
		ud = '[data-te-collapse-init]',
		Ub = {
			visible: '!visible',
			hidden: 'hidden',
			baseTransition:
				'overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
			collapsing:
				'h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
			collapsingHorizontal:
				'w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none',
		},
		Xb = {
			visible: 'string',
			hidden: 'string',
			baseTransition: 'string',
			collapsing: 'string',
			collapsingHorizontal: 'string',
		}
	class ce extends Mt {
		constructor(t, e, i) {
			super(t),
				(this._isTransitioning = !1),
				(this._config = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._triggerArray = [])
			const n = m.find(ud)
			for (let o = 0, r = n.length; o < r; o++) {
				const a = n[o],
					l = Ca(a),
					c = m.find(l).filter(h => h === this._element)
				l !== null &&
					c.length &&
					((this._selector = l), this._triggerArray.push(a))
			}
			this._initializeChildren(),
				this._config.parent ||
					this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
				this._config.toggle && this.toggle()
		}
		static get Default() {
			return cd
		}
		static get NAME() {
			return qa
		}
		toggle() {
			this._isShown() ? this.hide() : this.show()
		}
		show() {
			if (this._isTransitioning || this._isShown()) return
			let t = [],
				e
			if (this._config.parent) {
				const h = m.find(dd, this._config.parent)
				t = m.find(Kb, this._config.parent).filter(d => !h.includes(d))
			}
			const i = m.findOne(this._selector)
			if (t.length) {
				const h = t.find(d => i !== d)
				if (((e = h ? ce.getInstance(h) : null), e && e._isTransitioning))
					return
			}
			if (_.trigger(this._element, Hb).defaultPrevented) return
			t.forEach(h => {
				i !== h && ce.getOrCreateInstance(h, { toggle: !1 }).hide(),
					e || O.setData(h, ld, null)
			})
			const o = this._getDimension(),
				r =
					o === 'height'
						? this._classes.collapsing
						: this._classes.collapsingHorizontal
			g.removeClass(this._element, this._classes.visible),
				g.removeClass(this._element, this._classes.hidden),
				g.addClass(this._element, r),
				this._element.removeAttribute(Zi),
				this._element.setAttribute(vo, ''),
				(this._element.style[o] = 0),
				this._addAriaAndCollapsedClass(this._triggerArray, !0),
				(this._isTransitioning = !0)
			const a = () => {
					;(this._isTransitioning = !1),
						g.removeClass(this._element, this._classes.hidden),
						g.removeClass(this._element, r),
						g.addClass(this._element, this._classes.visible),
						this._element.removeAttribute(vo),
						this._element.setAttribute(Zi, ''),
						this._element.setAttribute(Za, ''),
						(this._element.style[o] = ''),
						_.trigger(this._element, Vb)
				},
				c = `scroll${o[0].toUpperCase() + o.slice(1)}`
			this._queueCallback(a, this._element, !0),
				(this._element.style[o] = `${this._element[c]}px`)
		}
		hide() {
			if (
				this._isTransitioning ||
				!this._isShown() ||
				_.trigger(this._element, Fb).defaultPrevented
			)
				return
			const e = this._getDimension(),
				i =
					e === 'height'
						? this._classes.collapsing
						: this._classes.collapsingHorizontal
			;(this._element.style[e] = `${
				this._element.getBoundingClientRect()[e]
			}px`),
				zi(this._element),
				g.addClass(this._element, i),
				g.removeClass(this._element, this._classes.visible),
				g.removeClass(this._element, this._classes.hidden),
				this._element.setAttribute(vo, ''),
				this._element.removeAttribute(Zi),
				this._element.removeAttribute(Za)
			const n = this._triggerArray.length
			for (let r = 0; r < n; r++) {
				const a = this._triggerArray[r],
					l = Ne(a)
				l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], !1)
			}
			this._isTransitioning = !0
			const o = () => {
				;(this._isTransitioning = !1),
					g.removeClass(this._element, i),
					g.addClass(this._element, this._classes.visible),
					g.addClass(this._element, this._classes.hidden),
					this._element.removeAttribute(vo),
					this._element.setAttribute(Zi, ''),
					_.trigger(this._element, Wb)
			}
			;(this._element.style[e] = ''), this._queueCallback(o, this._element, !0)
		}
		_isShown(t = this._element) {
			return t.hasAttribute(Za)
		}
		_getConfig(t) {
			return (
				(t = { ...cd, ...g.getDataAttributes(this._element), ...t }),
				(t.toggle = !!t.toggle),
				(t.parent = Be(t.parent)),
				L(qa, t, Bb),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...Ub, ...e, ...t }), L(qa, t, Xb), t
		}
		_getDimension() {
			return this._element.hasAttribute(zb) ? jb : Yb
		}
		_initializeChildren() {
			if (!this._config.parent) return
			const t = m.find(dd, this._config.parent)
			m.find(ud, this._config.parent)
				.filter(e => !t.includes(e))
				.forEach(e => {
					const i = Ne(e)
					i && this._addAriaAndCollapsedClass([e], this._isShown(i))
				})
		}
		_addAriaAndCollapsedClass(t, e) {
			t.length &&
				t.forEach(i => {
					e ? i.removeAttribute(hd) : i.setAttribute(`${hd}`, ''),
						i.setAttribute('aria-expanded', e)
				})
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = {}
				typeof t == 'string' && /show|hide/.test(t) && (e.toggle = !1)
				const i = ce.getOrCreateInstance(this, e)
				if (typeof t == 'string') {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t]()
				}
			})
		}
	}
	const pd = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
		fd = '.sticky-top'
	class Qi {
		constructor() {
			this._element = document.body
		}
		getWidth() {
			const t = document.documentElement.clientWidth
			return Math.abs(window.innerWidth - t)
		}
		hide() {
			const t = this.getWidth()
			this._disableOverFlow(),
				this._setElementAttributes(this._element, 'paddingRight', e => e + t),
				this._setElementAttributes(pd, 'paddingRight', e => e + t),
				this._setElementAttributes(fd, 'marginRight', e => e - t)
		}
		_disableOverFlow() {
			this._saveInitialAttribute(this._element, 'overflow'),
				(this._element.style.overflow = 'hidden')
		}
		_setElementAttributes(t, e, i) {
			const n = this.getWidth(),
				o = r => {
					if (r !== this._element && window.innerWidth > r.clientWidth + n)
						return
					this._saveInitialAttribute(r, e)
					const a = window.getComputedStyle(r)[e]
					r.style[e] = `${i(Number.parseFloat(a))}px`
				}
			this._applyManipulationCallback(t, o)
		}
		reset() {
			this._resetElementAttributes(this._element, 'overflow'),
				this._resetElementAttributes(this._element, 'paddingRight'),
				this._resetElementAttributes(pd, 'paddingRight'),
				this._resetElementAttributes(fd, 'marginRight')
		}
		_saveInitialAttribute(t, e) {
			const i = t.style[e]
			i && g.setDataAttribute(t, e, i)
		}
		_resetElementAttributes(t, e) {
			const i = n => {
				const o = g.getDataAttribute(n, e)
				typeof o > 'u'
					? n.style.removeProperty(e)
					: (g.removeDataAttribute(n, e), (n.style[e] = o))
			}
			this._applyManipulationCallback(t, i)
		}
		_applyManipulationCallback(t, e) {
			Wi(t) ? e(t) : m.find(t, this._element).forEach(e)
		}
		isOverflowing() {
			return this.getWidth() > 0
		}
	}
	const Gb = {
			isVisible: !0,
			isAnimated: !1,
			rootElement: 'body',
			clickCallback: null,
			backdropClasses: null,
		},
		qb = {
			isVisible: 'boolean',
			isAnimated: 'boolean',
			rootElement: '(element|string)',
			clickCallback: '(function|null)',
			backdropClasses: '(array|string|null)',
		},
		_d = 'backdrop',
		gd = `mousedown.te.${_d}`
	class Qa {
		constructor(t) {
			;(this._config = this._getConfig(t)),
				(this._isAppended = !1),
				(this._element = null)
		}
		show(t) {
			if (!this._config.isVisible) {
				hi(t)
				return
			}
			this._append(), this._config.isAnimated && zi(this._getElement())
			const e = this._config.backdropClasses || [
				'opacity-50',
				'transition-all',
				'duration-300',
				'ease-in-out',
				'fixed',
				'top-0',
				'left-0',
				'z-[1040]',
				'bg-black',
				'w-screen',
				'h-screen',
			]
			g.removeClass(this._getElement(), 'opacity-0'),
				g.addClass(this._getElement(), e),
				this._element.setAttribute('data-te-backdrop-show', ''),
				this._emulateAnimation(() => {
					hi(t)
				})
		}
		hide(t) {
			if (!this._config.isVisible) {
				hi(t)
				return
			}
			this._element.removeAttribute('data-te-backdrop-show'),
				this._getElement().classList.add('opacity-0'),
				this._getElement().classList.remove('opacity-50'),
				this._emulateAnimation(() => {
					this.dispose(), hi(t)
				})
		}
		_getElement() {
			if (!this._element) {
				const t = document.createElement('div')
				;(t.className = this._config.className),
					this._config.isAnimated && t.classList.add('opacity-50'),
					(this._element = t)
			}
			return this._element
		}
		_getConfig(t) {
			return (
				(t = { ...Gb, ...(typeof t == 'object' ? t : {}) }),
				(t.rootElement = Be(t.rootElement)),
				L(_d, t, qb),
				t
			)
		}
		_append() {
			this._isAppended ||
				(this._config.rootElement.append(this._getElement()),
				_.on(this._getElement(), gd, () => {
					hi(this._config.clickCallback)
				}),
				(this._isAppended = !0))
		}
		dispose() {
			this._isAppended &&
				(_.off(this._element, gd),
				this._element.remove(),
				(this._isAppended = !1))
		}
		_emulateAnimation(t) {
			fh(t, this._getElement(), this._config.isAnimated)
		}
	}
	class Vs {
		constructor(t, e = {}, i) {
			;(this._element = t),
				(this._toggler = i),
				(this._event = e.event || 'blur'),
				(this._condition = e.condition || (() => !0)),
				(this._selector =
					e.selector ||
					'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'),
				(this._onlyVisible = e.onlyVisible || !1),
				(this._focusableElements = []),
				(this._firstElement = null),
				(this._lastElement = null),
				(this.handler = n => {
					this._condition(n) && !n.shiftKey && n.target === this._lastElement
						? (n.preventDefault(), this._firstElement.focus())
						: this._condition(n) &&
						  n.shiftKey &&
						  n.target === this._firstElement &&
						  (n.preventDefault(), this._lastElement.focus())
				})
		}
		trap() {
			this._setElements(), this._init(), this._setFocusTrap()
		}
		disable() {
			this._focusableElements.forEach(t => {
				t.removeEventListener(this._event, this.handler)
			}),
				this._toggler && this._toggler.focus()
		}
		update() {
			this._setElements(), this._setFocusTrap()
		}
		_init() {
			const t = e => {
				!this._firstElement ||
					e.key !== 'Tab' ||
					this._focusableElements.includes(e.target) ||
					(e.preventDefault(),
					this._firstElement.focus(),
					window.removeEventListener('keydown', t))
			}
			window.addEventListener('keydown', t)
		}
		_filterVisible(t) {
			return t.filter(e => {
				if (!ae(e)) return !1
				const i = m.parents(e, '*')
				for (let n = 0; n < i.length; n++) {
					const o = window.getComputedStyle(i[n])
					if (o && (o.display === 'none' || o.visibility === 'hidden'))
						return !1
				}
				return !0
			})
		}
		_setElements() {
			;(this._focusableElements = m.focusableChildren(this._element)),
				this._onlyVisible &&
					(this._focusableElements = this._filterVisible(
						this._focusableElements
					)),
				(this._firstElement = this._focusableElements[0]),
				(this._lastElement =
					this._focusableElements[this._focusableElements.length - 1])
		}
		_setFocusTrap() {
			this._focusableElements.forEach((t, e) => {
				e === this._focusableElements.length - 1 || e === 0
					? t.addEventListener(this._event, this.handler)
					: t.removeEventListener(this._event, this.handler)
			})
		}
	}
	let md = []
	const yo = (s, t = 'hide') => {
			const e = `click.dismiss${s.EVENT_KEY}`,
				i = s.NAME
			md.includes(i) ||
				(md.push(i),
				_.on(document, e, `[data-te-${i}-dismiss]`, function (n) {
					if (
						(['A', 'AREA'].includes(this.tagName) && n.preventDefault(),
						ci(this))
					)
						return
					const o =
						Ne(this) ||
						this.closest(`.${i}`) ||
						this.closest(`[data-te-${i}-init]`)
					if (!o) return
					s.getOrCreateInstance(o)[t]()
				}))
		},
		bd = 'offcanvas',
		Ji = '.te.offcanvas',
		Zb = `load${Ji}.data-api`,
		Qb = 'Escape',
		vd = { backdrop: !0, keyboard: !0, scroll: !1 },
		Jb = { backdrop: 'boolean', keyboard: 'boolean', scroll: 'boolean' },
		yd = 'show',
		tv = '[data-te-offcanvas-init][data-te-offcanvas-show]',
		ev = `show${Ji}`,
		iv = `shown${Ji}`,
		sv = `hide${Ji}`,
		nv = `hidden${Ji}`,
		ov = `keydown.dismiss${Ji}`
	class ts extends Mt {
		constructor(t, e) {
			super(t),
				(this._config = this._getConfig(e)),
				(this._isShown = !1),
				(this._backdrop = this._initializeBackDrop()),
				(this._focustrap = this._initializeFocusTrap()),
				this._addEventListeners(),
				(this._didInit = !1),
				this._init()
		}
		static get NAME() {
			return bd
		}
		static get Default() {
			return vd
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			if (
				this._isShown ||
				_.trigger(this._element, ev, { relatedTarget: t }).defaultPrevented
			)
				return
			;(this._isShown = !0),
				(this._element.style.visibility = 'visible'),
				this._backdrop.show(),
				this._config.scroll || new Qi().hide(),
				this._element.removeAttribute('aria-hidden'),
				this._element.setAttribute('aria-modal', !0),
				this._element.setAttribute('role', 'dialog'),
				this._element.setAttribute(`data-te-offcanvas-${yd}`, '')
			const i = () => {
				this._config.scroll || this._focustrap.trap(),
					_.trigger(this._element, iv, { relatedTarget: t })
			}
			this._queueCallback(i, this._element, !0)
		}
		hide() {
			if (!this._isShown || _.trigger(this._element, sv).defaultPrevented)
				return
			this._focustrap.disable(),
				this._element.blur(),
				(this._isShown = !1),
				this._element.removeAttribute(`data-te-offcanvas-${yd}`),
				this._backdrop.hide()
			const e = () => {
				this._element.setAttribute('aria-hidden', !0),
					this._element.removeAttribute('aria-modal'),
					this._element.removeAttribute('role'),
					(this._element.style.visibility = 'hidden'),
					this._config.scroll || new Qi().reset(),
					_.trigger(this._element, nv)
			}
			this._queueCallback(e, this._element, !0)
		}
		dispose() {
			this._backdrop.dispose(), this._focustrap.disable(), super.dispose()
		}
		_init() {
			this._didInit ||
				(_.on(window, Zb, () =>
					m.find(tv).forEach(t => ts.getOrCreateInstance(t).show())
				),
				(this._didInit = !0),
				yo(ts))
		}
		_getConfig(t) {
			return (
				(t = {
					...vd,
					...g.getDataAttributes(this._element),
					...(typeof t == 'object' ? t : {}),
				}),
				L(bd, t, Jb),
				t
			)
		}
		_initializeBackDrop() {
			return new Qa({
				isVisible: this._config.backdrop,
				isAnimated: !0,
				rootElement: this._element.parentNode,
				clickCallback: () => this.hide(),
			})
		}
		_initializeFocusTrap() {
			return new Vs(this._element, {
				event: 'keydown',
				condition: t => t.key === 'Tab',
			})
		}
		_addEventListeners() {
			_.on(this._element, ov, t => {
				this._config.keyboard && t.key === Qb && this.hide()
			})
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = ts.getOrCreateInstance(this, t)
				if (typeof t == 'string') {
					if (e[t] === void 0 || t.startsWith('_') || t === 'constructor')
						throw new TypeError(`No method named "${t}"`)
					e[t](this)
				}
			})
		}
	}
	const Ja = 'alert',
		Td = '.te.alert',
		rv = `close${Td}`,
		av = `closed${Td}`,
		Fs = 'data-te-alert-show',
		lv = {
			animation: 'boolean',
			autohide: 'boolean',
			autoclose: 'boolean',
			delay: 'number',
		},
		Ed = { animation: !0, autohide: !0, autoclose: !1, delay: 1e3 },
		cv = {
			fadeIn:
				'animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none',
			fadeOut:
				'animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none',
		},
		hv = { fadeIn: 'string', fadeOut: 'string' }
	class Ws extends Mt {
		constructor(t, e, i) {
			super(t),
				(this._element = t),
				(this._config = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._didInit = !1),
				this._init()
		}
		static get DefaultType() {
			return lv
		}
		static get Default() {
			return Ed
		}
		static get NAME() {
			return Ja
		}
		close() {
			if (_.trigger(this._element, rv).defaultPrevented) return
			let e = 0
			this._config.animation &&
				((e = 300), g.addClass(this._element, this._classes.fadeOut)),
				this._element.removeAttribute(Fs),
				setTimeout(() => {
					this._queueCallback(
						() => this._destroyElement(),
						this._element,
						this._config.animation
					)
				}, e)
		}
		show() {
			if (this._element) {
				if (
					(this._config.autohide && this._setupAutohide(),
					(this._config.autoclose ||
						(this._config.autoclose && this._config.autohide)) &&
						this._setupAutoclose(),
					!this._element.hasAttribute(Fs) &&
						(g.removeClass(this._element, 'hidden'),
						g.addClass(this._element, 'block'),
						ae(this._element)))
				) {
					const t = e => {
						g.removeClass(this._element, 'hidden'),
							g.addClass(this._element, 'block'),
							_.off(e.target, 'animationend', t)
					}
					this._element.setAttribute(Fs, ''),
						_.on(this._element, 'animationend', t)
				}
				this._config.animation &&
					(g.removeClass(this._element, this._classes.fadeOut),
					g.addClass(this._element, this._classes.fadeIn))
			}
		}
		hide() {
			if (this._element && this._element.hasAttribute(Fs)) {
				this._element.removeAttribute(Fs)
				const t = e => {
					g.addClass(this._element, 'hidden'),
						g.removeClass(this._element, 'block'),
						this._timeout !== null &&
							(clearTimeout(this._timeout), (this._timeout = null)),
						_.off(e.target, 'animationend', t)
				}
				_.on(this._element, 'animationend', t),
					g.removeClass(this._element, this._classes.fadeIn),
					g.addClass(this._element, this._classes.fadeOut)
			}
		}
		_init() {
			this._didInit || (yo(Ws, 'close'), (this._didInit = !0))
		}
		_getConfig(t) {
			return (
				(t = {
					...Ed,
					...g.getDataAttributes(this._element),
					...(typeof t == 'object' && t ? t : {}),
				}),
				L(Ja, t, this.constructor.DefaultType),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...cv, ...e, ...t }), L(Ja, t, hv), t
		}
		_setupAutohide() {
			this._timeout = setTimeout(() => {
				this.hide()
			}, this._config.delay)
		}
		_setupAutoclose() {
			this._timeout = setTimeout(() => {
				this.close()
			}, this._config.delay)
		}
		_destroyElement() {
			this._element.remove(), _.trigger(this._element, av), this.dispose()
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Ws.getOrCreateInstance(this)
				if (typeof t == 'string') {
					if (e[t] === void 0 || t.startsWith('_') || t === 'constructor')
						throw new TypeError(`No method named "${t}"`)
					e[t](this)
				}
			})
		}
	}
	const tl = 'carousel',
		Nt = '.te.carousel',
		xd = '.data-api',
		dv = 'ArrowLeft',
		uv = 'ArrowRight',
		pv = 500,
		fv = 40,
		Cd = {
			interval: 5e3,
			keyboard: !0,
			ride: !1,
			pause: 'hover',
			wrap: !0,
			touch: !0,
		},
		_v = {
			interval: '(number|boolean)',
			keyboard: 'boolean',
			ride: '(boolean|string)',
			pause: '(string|boolean)',
			wrap: 'boolean',
			touch: 'boolean',
		},
		gv = {
			pointer: 'touch-pan-y',
			block: '!block',
			visible:
				'data-[te-carousel-fade]:opacity-100 data-[te-carousel-fade]:z-[1]',
			invisible:
				'data-[te-carousel-fade]:z-0 data-[te-carousel-fade]:opacity-0 data-[te-carousel-fade]:duration-[600ms] data-[te-carousel-fade]:delay-600',
			slideRight: 'translate-x-full',
			slideLeft: '-translate-x-full',
		},
		mv = {
			pointer: 'string',
			block: 'string',
			visible: 'string',
			invisible: 'string',
			slideRight: 'string',
			slideLeft: 'string',
		},
		gi = 'next',
		mi = 'prev',
		bi = 'left',
		zs = 'right',
		bv = { [dv]: zs, [uv]: bi },
		vv = `slide${Nt}`,
		el = `slid${Nt}`,
		yv = `keydown${Nt}`,
		Tv = `mouseenter${Nt}`,
		Ev = `mouseleave${Nt}`,
		xv = `touchstart${Nt}`,
		Cv = `touchmove${Nt}`,
		Av = `touchend${Nt}`,
		wv = `pointerdown${Nt}`,
		kv = `pointerup${Nt}`,
		Sv = `dragstart${Nt}`,
		Ov = `load${Nt}${xd}`,
		Iv = `click${Nt}${xd}`,
		Ad = 'data-te-carousel-init',
		vi = 'data-te-carousel-active',
		Dv = 'data-te-carousel-item-end',
		il = 'data-te-carousel-item-start',
		Mv = 'data-te-carousel-item-next',
		Lv = 'data-te-carousel-item-prev',
		$v = 'data-te-carousel-pointer-event',
		Rv = '[data-te-carousel-init]',
		wd = '[data-te-carousel-active]',
		sl = '[data-te-carousel-item]',
		es = `${wd}${sl}`,
		Pv = `${sl} img`,
		Nv = '[data-te-carousel-item-next], [data-te-carousel-item-prev]',
		Bv = '[data-te-carousel-indicators]',
		Hv = '[data-te-target]',
		Vv = '[data-te-slide], [data-te-slide-to]',
		Fv = 'touch',
		Wv = 'pen'
	class he extends Mt {
		constructor(t, e, i) {
			super(t),
				(this._items = null),
				(this._interval = null),
				(this._activeElement = null),
				(this._isPaused = !1),
				(this._isSliding = !1),
				(this.touchTimeout = null),
				(this.touchStartX = 0),
				(this.touchDeltaX = 0),
				(this._config = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._indicatorsElement = m.findOne(Bv, this._element)),
				(this._touchSupported =
					'ontouchstart' in document.documentElement ||
					navigator.maxTouchPoints > 0),
				(this._pointerEvent = !!window.PointerEvent),
				this._setActiveElementClass(),
				this._addEventListeners(),
				(this._didInit = !1),
				this._init(),
				this._config.ride === 'carousel' && this.cycle()
		}
		static get Default() {
			return Cd
		}
		static get NAME() {
			return tl
		}
		next() {
			this._slide(gi)
		}
		nextWhenVisible() {
			!document.hidden && ae(this._element) && this.next()
		}
		prev() {
			this._slide(mi)
		}
		pause(t) {
			t || (this._isPaused = !0),
				m.findOne(Nv, this._element) && (hh(this._element), this.cycle(!0)),
				clearInterval(this._interval),
				(this._interval = null)
		}
		cycle(t) {
			t || (this._isPaused = !1),
				this._interval &&
					(clearInterval(this._interval), (this._interval = null)),
				this._config &&
					this._config.interval &&
					!this._isPaused &&
					(this._updateInterval(),
					(this._interval = setInterval(
						(document.visibilityState ? this.nextWhenVisible : this.next).bind(
							this
						),
						this._config.interval
					)))
		}
		to(t) {
			this._activeElement = m.findOne(es, this._element)
			const e = this._getItemIndex(this._activeElement)
			if (t > this._items.length - 1 || t < 0) return
			if (this._isSliding) {
				_.one(this._element, el, () => this.to(t))
				return
			}
			if (e === t) {
				this.pause(), this.cycle()
				return
			}
			const i = t > e ? gi : mi
			this._slide(i, this._items[t])
		}
		_init() {
			this._didInit ||
				(_.on(document, Iv, Vv, he.dataApiClickHandler),
				_.on(window, Ov, () => {
					const t = m.find(Rv)
					for (let e = 0, i = t.length; e < i; e++)
						he.carouselInterface(t[e], he.getInstance(t[e]))
				}),
				(this._didInit = !0))
		}
		_getConfig(t) {
			return (
				(t = {
					...Cd,
					...g.getDataAttributes(this._element),
					...(typeof t == 'object' ? t : {}),
				}),
				L(tl, t, _v),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...gv, ...e, ...t }), L(tl, t, mv), t
		}
		_enableCycle() {
			if (this._config.ride) {
				if (this._isSliding) {
					_.one(this._element, el, () => this.cycle())
					return
				}
				this.cycle()
			}
		}
		_applyInitialClasses() {
			const t = m.findOne(es, this._element)
			t.classList.add(this._classes.block, ...this._classes.visible.split(' ')),
				this._setActiveIndicatorElement(t)
		}
		_handleSwipe() {
			const t = Math.abs(this.touchDeltaX)
			if (t <= fv) return
			const e = t / this.touchDeltaX
			;(this.touchDeltaX = 0), e && this._slide(e > 0 ? zs : bi)
		}
		_setActiveElementClass() {
			;(this._activeElement = m.findOne(es, this._element)),
				g.addClass(this._activeElement, 'hidden')
		}
		_addEventListeners() {
			this._config.keyboard && _.on(this._element, yv, t => this._keydown(t)),
				this._config.pause === 'hover' &&
					(_.on(this._element, Tv, t => this.pause(t)),
					_.on(this._element, Ev, t => this._enableCycle(t))),
				this._config.touch &&
					this._touchSupported &&
					this._addTouchEventListeners(),
				this._applyInitialClasses()
		}
		_addTouchEventListeners() {
			const t = o =>
					this._pointerEvent && (o.pointerType === Wv || o.pointerType === Fv),
				e = o => {
					t(o)
						? (this.touchStartX = o.clientX)
						: this._pointerEvent || (this.touchStartX = o.touches[0].clientX)
				},
				i = o => {
					this.touchDeltaX =
						o.touches && o.touches.length > 1
							? 0
							: o.touches[0].clientX - this.touchStartX
				},
				n = o => {
					t(o) && (this.touchDeltaX = o.clientX - this.touchStartX),
						this._handleSwipe(),
						this._config.pause === 'hover' &&
							(this.pause(),
							this.touchTimeout && clearTimeout(this.touchTimeout),
							(this.touchTimeout = setTimeout(
								r => this._enableCycle(r),
								pv + this._config.interval
							)))
				}
			m.find(Pv, this._element).forEach(o => {
				_.on(o, Sv, r => r.preventDefault())
			}),
				this._pointerEvent
					? (_.on(this._element, wv, o => e(o)),
					  _.on(this._element, kv, o => n(o)),
					  this._element.classList.add(this._classes.pointer),
					  this._element.setAttribute(`${$v}`, ''))
					: (_.on(this._element, xv, o => e(o)),
					  _.on(this._element, Cv, o => i(o)),
					  _.on(this._element, Av, o => n(o)))
		}
		_keydown(t) {
			if (/input|textarea/i.test(t.target.tagName)) return
			const e = bv[t.key]
			e && (t.preventDefault(), this._slide(e))
		}
		_getItemIndex(t) {
			return (
				(this._items = t && t.parentNode ? m.find(sl, t.parentNode) : []),
				this._items.indexOf(t)
			)
		}
		_getItemByOrder(t, e) {
			const i = t === gi
			return _h(this._items, e, i, this._config.wrap)
		}
		_triggerSlideEvent(t, e) {
			const i = this._getItemIndex(t),
				n = this._getItemIndex(m.findOne(es, this._element))
			return _.trigger(this._element, vv, {
				relatedTarget: t,
				direction: e,
				from: n,
				to: i,
			})
		}
		_setActiveIndicatorElement(t) {
			if (this._indicatorsElement) {
				const e = m.findOne(wd, this._indicatorsElement)
				e.removeAttribute(vi),
					e.removeAttribute('aria-current'),
					e.classList.remove('!opacity-100')
				const i = m.find(Hv, this._indicatorsElement)
				for (let n = 0; n < i.length; n++)
					if (
						Number.parseInt(i[n].getAttribute('data-te-slide-to'), 10) ===
						this._getItemIndex(t)
					) {
						i[n].setAttribute(`${vi}`, ''),
							i[n].setAttribute('aria-current', 'true'),
							i[n].classList.add('!opacity-100')
						break
					}
			}
		}
		_updateInterval() {
			const t = this._activeElement || m.findOne(es, this._element)
			if (!t) return
			const e = Number.parseInt(t.getAttribute('data-te-interval'), 10)
			e
				? ((this._config.defaultInterval =
						this._config.defaultInterval || this._config.interval),
				  (this._config.interval = e))
				: (this._config.interval =
						this._config.defaultInterval || this._config.interval)
		}
		_slide(t, e) {
			const i = this._directionToOrder(t),
				n = m.findOne(es, this._element),
				o = this._getItemIndex(n),
				r = e || this._getItemByOrder(i, n),
				a = this._getItemIndex(r),
				l = !!this._interval,
				c = i === gi,
				h = c ? il : Dv,
				d = c ? Mv : Lv,
				u = this._orderToDirection(i),
				p = h === il ? this._classes.slideLeft : this._classes.slideRight,
				f = h !== il ? this._classes.slideLeft : this._classes.slideRight
			if (r && r.hasAttribute(vi)) {
				this._isSliding = !1
				return
			}
			if (
				this._isSliding ||
				this._triggerSlideEvent(r, u).defaultPrevented ||
				!n ||
				!r
			)
				return
			;(this._isSliding = !0),
				l && this.pause(),
				this._setActiveIndicatorElement(r),
				(this._activeElement = r)
			const v = () => {
				_.trigger(this._element, el, {
					relatedTarget: r,
					direction: u,
					from: o,
					to: a,
				})
			}
			if (this._element.hasAttribute(Ad)) {
				r.setAttribute(`${d}`, ''),
					r.classList.add(this._classes.block, f),
					zi(r),
					n.setAttribute(`${h}`, ''),
					n.classList.add(p, ...this._classes.invisible.split(' ')),
					n.classList.remove(...this._classes.visible.split(' ')),
					r.setAttribute(`${h}`, ''),
					r.classList.add(...this._classes.visible.split(' ')),
					r.classList.remove(this._classes.slideRight, this._classes.slideLeft)
				const y = () => {
					r.removeAttribute(h),
						r.removeAttribute(d),
						r.setAttribute(`${vi}`, ''),
						n.removeAttribute(vi),
						n.classList.remove(
							p,
							...this._classes.invisible.split(' '),
							this._classes.block
						),
						n.removeAttribute(d),
						n.removeAttribute(h),
						(this._isSliding = !1),
						setTimeout(v, 0)
				}
				this._queueCallback(y, n, !0)
			} else n.removeAttribute(vi), n.classList.remove(this._classes.block), r.setAttribute(`${vi}`, ''), r.classList.add(this._classes.block), (this._isSliding = !1), v()
			l && this.cycle()
		}
		_directionToOrder(t) {
			return [zs, bi].includes(t)
				? et()
					? t === bi
						? mi
						: gi
					: t === bi
					? gi
					: mi
				: t
		}
		_orderToDirection(t) {
			return [gi, mi].includes(t)
				? et()
					? t === mi
						? bi
						: zs
					: t === mi
					? zs
					: bi
				: t
		}
		static carouselInterface(t, e) {
			const i = he.getOrCreateInstance(t, e)
			let { _config: n } = i
			typeof e == 'object' && (n = { ...n, ...e })
			const o = typeof e == 'string' ? e : e.slide
			if (typeof e == 'number') {
				i.to(e)
				return
			}
			if (typeof o == 'string') {
				if (typeof i[o] > 'u') throw new TypeError(`No method named "${o}"`)
				i[o]()
			} else n.interval && n.ride === !0 && i.pause()
		}
		static jQueryInterface(t) {
			return this.each(function () {
				he.carouselInterface(this, t)
			})
		}
		static dataApiClickHandler(t) {
			const e = Ne(this)
			if (!e || !e.hasAttribute(Ad)) return
			const i = { ...g.getDataAttributes(e), ...g.getDataAttributes(this) },
				n = this.getAttribute('data-te-slide-to')
			n && (i.interval = !1),
				he.carouselInterface(e, i),
				n && he.getInstance(e).to(n),
				t.preventDefault()
		}
	}
	const nl = 'modal',
		te = '.te.modal',
		kd = 'Escape',
		Sd = { backdrop: !0, keyboard: !0, focus: !0, modalNonInvasive: !1 },
		zv = {
			backdrop: '(boolean|string)',
			keyboard: 'boolean',
			focus: 'boolean',
			modalNonInvasive: 'boolean',
		},
		jv = {
			show: 'transform-none',
			static: 'scale-[1.02]',
			staticProperties: 'transition-scale duration-300 ease-in-out',
			backdrop:
				'opacity-50 transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen',
		},
		Yv = {
			show: 'string',
			static: 'string',
			staticProperties: 'string',
			backdrop: 'string',
		},
		Kv = `hide${te}`,
		Uv = `hidePrevented${te}`,
		Xv = `hidden${te}`,
		Gv = `show${te}`,
		qv = `shown${te}`,
		Od = `resize${te}`,
		Id = `click.dismiss${te}`,
		Dd = `keydown.dismiss${te}`,
		Zv = `mouseup.dismiss${te}`,
		Md = `mousedown.dismiss${te}`,
		Ld = 'data-te-modal-open',
		$d = 'data-te-open',
		js = '[data-te-modal-dialog-ref]',
		Qv = '[data-te-modal-body-ref]'
	class Ys extends Mt {
		constructor(t, e, i) {
			super(t),
				(this._config = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._dialog = m.findOne(js, this._element)),
				(this._backdrop = this._config.modalNonInvasive
					? null
					: this._initializeBackDrop()),
				(this._focustrap = this._initializeFocusTrap()),
				(this._isShown = !1),
				(this._ignoreBackdropClick = !1),
				(this._isTransitioning = !1),
				(this._scrollBar = new Qi()),
				(this._didInit = !1),
				this._init()
		}
		static get Default() {
			return Sd
		}
		static get NAME() {
			return nl
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			this._isShown ||
				this._isTransitioning ||
				_.trigger(this._element, Gv, { relatedTarget: t }).defaultPrevented ||
				((this._isShown = !0),
				this._isAnimated() && (this._isTransitioning = !0),
				!this._config.modalNonInvasive && this._scrollBar.hide(),
				document.body.setAttribute(Ld, 'true'),
				this._adjustDialog(),
				this._setEscapeEvent(),
				this._setResizeEvent(),
				_.on(this._dialog, Md, () => {
					_.one(this._element, Zv, i => {
						i.target === this._element && (this._ignoreBackdropClick = !0)
					})
				}),
				this._showElement(t),
				!this._config.modalNonInvasive && this._showBackdrop())
		}
		hide() {
			if (
				!this._isShown ||
				this._isTransitioning ||
				_.trigger(this._element, Kv).defaultPrevented
			)
				return
			this._isShown = !1
			const e = this._isAnimated()
			e && (this._isTransitioning = !0),
				this._setEscapeEvent(),
				this._setResizeEvent(),
				this._focustrap.disable(),
				m.findOne(js, this._element).classList.remove(this._classes.show),
				_.off(this._element, Id),
				_.off(this._dialog, Md),
				this._queueCallback(() => this._hideModal(), this._element, e),
				this._element.removeAttribute($d)
		}
		dispose() {
			;[window, document, this._dialog].forEach(t => _.off(t, te)),
				this._backdrop && this._backdrop.dispose(),
				this._focustrap.disable(),
				super.dispose()
		}
		handleUpdate() {
			this._adjustDialog()
		}
		_init() {
			this._didInit || (yo(Ys), (this._didInit = !0))
		}
		_initializeBackDrop() {
			return new Qa({
				isVisible: !!this._config.backdrop,
				isAnimated: this._isAnimated(),
				backdropClasses: this._classes.backdrop,
			})
		}
		_initializeFocusTrap() {
			return new Vs(this._element, {
				event: 'keydown',
				condition: t => t.key === 'Tab',
			})
		}
		_getConfig(t) {
			return (
				(t = {
					...Sd,
					...g.getDataAttributes(this._element),
					...(typeof t == 'object' ? t : {}),
				}),
				L(nl, t, zv),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...jv, ...e, ...t }), L(nl, t, Yv), t
		}
		_showElement(t) {
			const e = this._isAnimated(),
				i = m.findOne(Qv, this._dialog)
			;(!this._element.parentNode ||
				this._element.parentNode.nodeType !== Node.ELEMENT_NODE) &&
				document.body.append(this._element),
				(this._element.style.display = 'block'),
				this._element.classList.remove('hidden'),
				this._element.removeAttribute('aria-hidden'),
				this._element.setAttribute('aria-modal', !0),
				this._element.setAttribute('role', 'dialog'),
				this._element.setAttribute(`${$d}`, 'true'),
				(this._element.scrollTop = 0)
			const n = m.findOne(js, this._element)
			n.classList.add(this._classes.show),
				n.classList.remove('opacity-0'),
				n.classList.add('opacity-100'),
				i && (i.scrollTop = 0),
				e && zi(this._element)
			const o = () => {
				this._config.focus && this._focustrap.trap(),
					(this._isTransitioning = !1),
					_.trigger(this._element, qv, { relatedTarget: t })
			}
			this._queueCallback(o, this._dialog, e)
		}
		_setEscapeEvent() {
			this._isShown
				? _.on(document, Dd, t => {
						this._config.keyboard && t.key === kd
							? (t.preventDefault(), this.hide())
							: !this._config.keyboard &&
							  t.key === kd &&
							  this._triggerBackdropTransition()
				  })
				: _.off(this._element, Dd)
		}
		_setResizeEvent() {
			this._isShown
				? _.on(window, Od, () => this._adjustDialog())
				: _.off(window, Od)
		}
		_hideModal() {
			const t = m.findOne(js, this._element)
			t.classList.remove(this._classes.show),
				t.classList.remove('opacity-100'),
				t.classList.add('opacity-0')
			const e = oo(t)
			setTimeout(() => {
				this._element.style.display = 'none'
			}, e),
				this._element.setAttribute('aria-hidden', !0),
				this._element.removeAttribute('aria-modal'),
				this._element.removeAttribute('role'),
				(this._isTransitioning = !1),
				this._backdrop &&
					this._backdrop.hide(() => {
						document.body.removeAttribute(Ld),
							this._resetAdjustments(),
							!this._config.modalNonInvasive && this._scrollBar.reset(),
							_.trigger(this._element, Xv)
					})
		}
		_showBackdrop(t) {
			_.on(this._element, Id, e => {
				if (this._ignoreBackdropClick) {
					this._ignoreBackdropClick = !1
					return
				}
				e.target === e.currentTarget &&
					(this._config.backdrop === !0
						? this.hide()
						: this._config.backdrop === 'static' &&
						  this._triggerBackdropTransition())
			}),
				this._backdrop && this._backdrop.show(t)
		}
		_isAnimated() {
			return !!m.findOne(js, this._element)
		}
		_triggerBackdropTransition() {
			if (_.trigger(this._element, Uv).defaultPrevented) return
			const { classList: e, scrollHeight: i, style: n } = this._element,
				o = i > document.documentElement.clientHeight
			if ((!o && n.overflowY === 'hidden') || e.contains(this._classes.static))
				return
			o || (n.overflowY = 'hidden'),
				e.add(...this._classes.static.split(' ')),
				e.add(...this._classes.staticProperties.split(' '))
			const r = oo(this._element)
			this._queueCallback(() => {
				e.remove(this._classes.static),
					setTimeout(() => {
						e.remove(...this._classes.staticProperties.split(' '))
					}, r),
					o ||
						this._queueCallback(() => {
							n.overflowY = ''
						}, this._dialog)
			}, this._dialog),
				this._element.focus()
		}
		_adjustDialog() {
			const t =
					this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._scrollBar.getWidth(),
				i = e > 0
			;((!i && t && !et()) || (i && !t && et())) &&
				(this._element.style.paddingLeft = `${e}px`),
				((i && !t && !et()) || (!i && t && et())) &&
					(this._element.style.paddingRight = `${e}px`)
		}
		_resetAdjustments() {
			;(this._element.style.paddingLeft = ''),
				(this._element.style.paddingRight = '')
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				const i = Ys.getOrCreateInstance(this, t)
				if (typeof t == 'string') {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t](e)
				}
			})
		}
	}
	const Jv = new Set([
			'background',
			'cite',
			'href',
			'itemtype',
			'longdesc',
			'poster',
			'src',
			'xlink:href',
		]),
		Rd = /^aria-[\w-]*$/i,
		t0 = /^data-te-[\w-]*$/i,
		e0 = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
		i0 =
			/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
		s0 = (s, t) => {
			const e = s.nodeName.toLowerCase()
			if (t.includes(e))
				return Jv.has(e) ? !!(e0.test(s.nodeValue) || i0.test(s.nodeValue)) : !0
			const i = t.filter(n => n instanceof RegExp)
			for (let n = 0, o = i.length; n < o; n++) if (i[n].test(e)) return !0
			return !1
		},
		Pd = {
			'*': ['class', 'dir', 'id', 'lang', 'role', Rd, t0],
			a: ['target', 'href', 'title', 'rel'],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: [],
		},
		n0 = {
			'*': ['class', 'dir', 'id', 'lang', 'role', Rd],
			a: ['target', 'href', 'title', 'rel'],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: [],
		}
	function To(s, t, e) {
		if (!s.length) return s
		if (e && typeof e == 'function') return e(s)
		const n = new window.DOMParser().parseFromString(s, 'text/html'),
			o = [].concat(...n.body.querySelectorAll('*'))
		for (let r = 0, a = o.length; r < a; r++) {
			const l = o[r],
				c = l.nodeName.toLowerCase()
			if (!Object.keys(t).includes(c)) {
				l.remove()
				continue
			}
			const h = [].concat(...l.attributes),
				d = [].concat(t['*'] || [], t[c] || [])
			h.forEach(u => {
				s0(u, d) || l.removeAttribute(u.nodeName)
			})
		}
		return n.body.innerHTML
	}
	const Nd = 'tooltip',
		de = '.te.tooltip',
		o0 = 'te-tooltip',
		r0 = new Set(['sanitize', 'allowList', 'sanitizeFn']),
		a0 = {
			animation: 'boolean',
			template: 'string',
			title: '(string|element|function)',
			trigger: 'string',
			delay: '(number|object)',
			html: 'boolean',
			selector: '(string|boolean)',
			placement: '(string|function)',
			offset: '(array|string|function)',
			container: '(string|element|boolean)',
			fallbackPlacements: 'array',
			boundary: '(string|element)',
			customClass: '(string|function)',
			sanitize: 'boolean',
			sanitizeFn: '(null|function)',
			allowList: 'object',
			popperConfig: '(null|object|function)',
		},
		l0 = {
			AUTO: 'auto',
			TOP: 'top',
			RIGHT: et() ? 'left' : 'right',
			BOTTOM: 'bottom',
			LEFT: et() ? 'right' : 'left',
		},
		c0 = {
			animation: !0,
			template:
				'<div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip"><div data-te-tooltip-inner-ref class="tooltip-inner max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div></div>',
			trigger: 'hover focus',
			title: '',
			delay: 0,
			html: !1,
			selector: !1,
			placement: 'top',
			offset: [0, 0],
			container: !1,
			fallbackPlacements: ['top', 'right', 'bottom', 'left'],
			boundary: 'clippingParents',
			customClass: '',
			sanitize: !0,
			sanitizeFn: null,
			allowList: n0,
			popperConfig: { hide: !0 },
		},
		h0 = {
			HIDE: `hide${de}`,
			HIDDEN: `hidden${de}`,
			SHOW: `show${de}`,
			SHOWN: `shown${de}`,
			INSERTED: `inserted${de}`,
			CLICK: `click${de}`,
			FOCUSIN: `focusin${de}`,
			FOCUSOUT: `focusout${de}`,
			MOUSEENTER: `mouseenter${de}`,
			MOUSELEAVE: `mouseleave${de}`,
		},
		d0 = 'fade',
		u0 = 'modal',
		ol = 'show',
		Ks = 'show',
		rl = 'out',
		Bd = '.tooltip-inner',
		Hd = `.${u0}`,
		Vd = 'hide.te.modal',
		Us = 'hover',
		al = 'focus',
		p0 = 'click',
		f0 = 'manual'
	let is = class rm extends Mt {
		constructor(t, e) {
			if (typeof sd > 'u')
				throw new TypeError(
					"Bootstrap's tooltips require Popper (https://popper.js.org)"
				)
			super(t),
				(this._isEnabled = !0),
				(this._timeout = 0),
				(this._hoverState = ''),
				(this._activeTrigger = {}),
				(this._popper = null),
				(this._config = this._getConfig(e)),
				(this.tip = null),
				this._setListeners()
		}
		static get Default() {
			return c0
		}
		static get NAME() {
			return Nd
		}
		static get Event() {
			return h0
		}
		static get DefaultType() {
			return a0
		}
		enable() {
			this._isEnabled = !0
		}
		disable() {
			this._isEnabled = !1
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled
		}
		toggle(t) {
			if (this._isEnabled)
				if (t) {
					const e = this._initializeOnDelegatedTarget(t)
					;(e._activeTrigger.click = !e._activeTrigger.click),
						e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
				} else {
					if (this.getTipElement().classList.contains(ol)) {
						this._leave(null, this)
						return
					}
					this._enter(null, this)
				}
		}
		dispose() {
			clearTimeout(this._timeout),
				_.off(this._element.closest(Hd), Vd, this._hideModalHandler),
				this.tip && this.tip.remove(),
				this._disposePopper(),
				super.dispose()
		}
		show() {
			if (this._element.style.display === 'none')
				throw new Error('Please use show on visible elements')
			if (!(this.isWithContent() && this._isEnabled)) return
			const t = _.trigger(this._element, this.constructor.Event.SHOW),
				e = dh(this._element),
				i =
					e === null
						? this._element.ownerDocument.documentElement.contains(
								this._element
						  )
						: e.contains(this._element)
			if (t.defaultPrevented || !i) return
			this.constructor.NAME === 'tooltip' &&
				this.tip &&
				this.getTitle() !== this.tip.querySelector(Bd).innerHTML &&
				(this._disposePopper(), this.tip.remove(), (this.tip = null))
			const n = this.getTipElement(),
				o = bt(this.constructor.NAME)
			n.setAttribute('id', o),
				this._element.setAttribute('aria-describedby', o),
				this._config.animation &&
					setTimeout(() => {
						this.tip.classList.add('opacity-100'),
							this.tip.classList.remove('opacity-0')
					}, 100)
			const r =
					typeof this._config.placement == 'function'
						? this._config.placement.call(this, n, this._element)
						: this._config.placement,
				a = this._getAttachment(r)
			this._addAttachmentClass(a)
			const { container: l } = this._config
			if (
				(O.setData(n, this.constructor.DATA_KEY, this),
				this._element.ownerDocument.documentElement.contains(this.tip) ||
					(l.append(n),
					_.trigger(this._element, this.constructor.Event.INSERTED)),
				this._popper
					? this._popper.update()
					: (this._popper = Fe(this._element, n, this._getPopperConfig(a))),
				n.getAttribute('id').includes('tooltip'))
			)
				switch (r) {
					case 'bottom':
						n.classList.add('py-[0.4rem]')
						break
					case 'left':
						n.classList.add('px-[0.4rem]')
						break
					case 'right':
						n.classList.add('px-[0.4rem]')
						break
					default:
						n.classList.add('py-[0.4rem]')
						break
				}
			const h = this._resolvePossibleFunction(this._config.customClass)
			h && n.classList.add(...h.split(' ')),
				'ontouchstart' in document.documentElement &&
					[].concat(...document.body.children).forEach(p => {
						_.on(p, 'mouseover', ro)
					})
			const d = () => {
					const p = this._hoverState
					;(this._hoverState = null),
						_.trigger(this._element, this.constructor.Event.SHOWN),
						p === rl && this._leave(null, this)
				},
				u = this.tip.classList.contains('transition-opacity')
			this._queueCallback(d, this.tip, u)
		}
		hide() {
			if (!this._popper) return
			const t = this.getTipElement(),
				e = () => {
					this._isWithActiveTrigger() ||
						(this._hoverState !== Ks && t.remove(),
						this._cleanTipClass(),
						this._element.removeAttribute('aria-describedby'),
						_.trigger(this._element, this.constructor.Event.HIDDEN),
						this._disposePopper())
				}
			if (
				_.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
			)
				return
			t.classList.add('opacity-0'),
				t.classList.remove('opacity-100'),
				'ontouchstart' in document.documentElement &&
					[]
						.concat(...document.body.children)
						.forEach(o => _.off(o, 'mouseover', ro)),
				(this._activeTrigger[p0] = !1),
				(this._activeTrigger[al] = !1),
				(this._activeTrigger[Us] = !1)
			const n = this.tip.classList.contains('opacity-0')
			this._queueCallback(e, this.tip, n), (this._hoverState = '')
		}
		update() {
			this._popper !== null && this._popper.update()
		}
		isWithContent() {
			return !!this.getTitle()
		}
		getTipElement() {
			if (this.tip) return this.tip
			const t = document.createElement('div')
			t.innerHTML = this._config.template
			const e = t.children[0]
			return (
				this.setContent(e), e.classList.remove(d0, ol), (this.tip = e), this.tip
			)
		}
		setContent(t) {
			this._sanitizeAndSetContent(t, this.getTitle(), Bd)
		}
		_sanitizeAndSetContent(t, e, i) {
			const n = m.findOne(i, t)
			if (!e && n) {
				n.remove()
				return
			}
			this.setElementContent(n, e)
		}
		setElementContent(t, e) {
			if (t !== null) {
				if (Wi(e)) {
					;(e = Be(e)),
						this._config.html
							? e.parentNode !== t && ((t.innerHTML = ''), t.append(e))
							: (t.textContent = e.textContent)
					return
				}
				this._config.html
					? (this._config.sanitize &&
							(e = To(e, this._config.allowList, this._config.sanitizeFn)),
					  (t.innerHTML = e))
					: (t.textContent = e)
			}
		}
		getTitle() {
			const t =
				this._element.getAttribute('data-te-original-title') ||
				this._config.title
			return this._resolvePossibleFunction(t)
		}
		updateAttachment(t) {
			return t === 'right' ? 'end' : t === 'left' ? 'start' : t
		}
		_initializeOnDelegatedTarget(t, e) {
			return (
				e ||
				this.constructor.getOrCreateInstance(
					t.delegateTarget,
					this._getDelegateConfig()
				)
			)
		}
		_getOffset() {
			const { offset: t } = this._config
			return typeof t == 'string'
				? t.split(',').map(e => Number.parseInt(e, 10))
				: typeof t == 'function'
				? e => t(e, this._element)
				: t
		}
		_resolvePossibleFunction(t) {
			return typeof t == 'function' ? t.call(this._element) : t
		}
		_getPopperConfig(t) {
			const e = {
				placement: t,
				modifiers: [
					{
						name: 'flip',
						options: { fallbackPlacements: this._config.fallbackPlacements },
					},
					{ name: 'offset', options: { offset: this._getOffset() } },
					{
						name: 'preventOverflow',
						options: { boundary: this._config.boundary },
					},
					{
						name: 'arrow',
						options: { element: `.${this.constructor.NAME}-arrow` },
					},
					{
						name: 'onChange',
						enabled: !0,
						phase: 'afterWrite',
						fn: i => this._handlePopperPlacementChange(i),
					},
				],
				onFirstUpdate: i => {
					i.options.placement !== i.placement &&
						this._handlePopperPlacementChange(i)
				},
			}
			return {
				...e,
				...(typeof this._config.popperConfig == 'function'
					? this._config.popperConfig(e)
					: this._config.popperConfig),
			}
		}
		_addAttachmentClass(t) {
			this.getTipElement().classList.add(
				`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
			)
		}
		_getAttachment(t) {
			return l0[t.toUpperCase()]
		}
		_setListeners() {
			this._config.trigger.split(' ').forEach(e => {
				if (e === 'click')
					_.on(
						this._element,
						this.constructor.Event.CLICK,
						this._config.selector,
						i => this.toggle(i)
					)
				else if (e !== f0) {
					const i =
							e === Us
								? this.constructor.Event.MOUSEENTER
								: this.constructor.Event.FOCUSIN,
						n =
							e === Us
								? this.constructor.Event.MOUSELEAVE
								: this.constructor.Event.FOCUSOUT
					_.on(this._element, i, this._config.selector, o => this._enter(o)),
						_.on(this._element, n, this._config.selector, o => this._leave(o))
				}
			}),
				(this._hideModalHandler = () => {
					this._element && this.hide()
				}),
				_.on(this._element.closest(Hd), Vd, this._hideModalHandler),
				this._config.selector
					? (this._config = {
							...this._config,
							trigger: 'manual',
							selector: '',
					  })
					: this._fixTitle()
		}
		_fixTitle() {
			const t = this._element.getAttribute('title'),
				e = typeof this._element.getAttribute('data-te-original-title')
			;(t || e !== 'string') &&
				(this._element.setAttribute('data-te-original-title', t || ''),
				t &&
					!this._element.getAttribute('aria-label') &&
					!this._element.textContent &&
					this._element.setAttribute('aria-label', t),
				this._element.setAttribute('title', ''))
		}
		_enter(t, e) {
			if (
				((e = this._initializeOnDelegatedTarget(t, e)),
				t && (e._activeTrigger[t.type === 'focusin' ? al : Us] = !0),
				e.getTipElement().classList.contains(ol) || e._hoverState === Ks)
			) {
				e._hoverState = Ks
				return
			}
			if (
				(clearTimeout(e._timeout),
				(e._hoverState = Ks),
				!e._config.delay || !e._config.delay.show)
			) {
				e.show()
				return
			}
			e._timeout = setTimeout(() => {
				e._hoverState === Ks && e.show()
			}, e._config.delay.show)
		}
		_leave(t, e) {
			if (
				((e = this._initializeOnDelegatedTarget(t, e)),
				t &&
					(e._activeTrigger[t.type === 'focusout' ? al : Us] =
						e._element.contains(t.relatedTarget)),
				!e._isWithActiveTrigger())
			) {
				if (
					(clearTimeout(e._timeout),
					(e._hoverState = rl),
					!e._config.delay || !e._config.delay.hide)
				) {
					e.hide()
					return
				}
				e._timeout = setTimeout(() => {
					e._hoverState === rl && e.hide()
				}, e._config.delay.hide)
			}
		}
		_isWithActiveTrigger() {
			for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0
			return !1
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._element)
			return (
				Object.keys(e).forEach(i => {
					r0.has(i) && delete e[i]
				}),
				(t = {
					...this.constructor.Default,
					...e,
					...(typeof t == 'object' && t ? t : {}),
				}),
				(t.container = t.container === !1 ? document.body : Be(t.container)),
				typeof t.delay == 'number' &&
					(t.delay = { show: t.delay, hide: t.delay }),
				typeof t.title == 'number' && (t.title = t.title.toString()),
				typeof t.content == 'number' && (t.content = t.content.toString()),
				L(Nd, t, this.constructor.DefaultType),
				t.sanitize && (t.template = To(t.template, t.allowList, t.sanitizeFn)),
				t
			)
		}
		_getDelegateConfig() {
			const t = {}
			for (const e in this._config)
				this.constructor.Default[e] !== this._config[e] &&
					(t[e] = this._config[e])
			return t
		}
		_cleanTipClass() {
			const t = this.getTipElement(),
				e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g'),
				i = t.getAttribute('class').match(e)
			i !== null &&
				i.length > 0 &&
				i.map(n => n.trim()).forEach(n => t.classList.remove(n))
		}
		_getBasicClassPrefix() {
			return o0
		}
		_handlePopperPlacementChange(t) {
			const { state: e } = t
			e &&
				((this.tip = e.elements.popper),
				this._cleanTipClass(),
				this._addAttachmentClass(this._getAttachment(e.placement)))
		}
		_disposePopper() {
			this._popper && (this._popper.destroy(), (this._popper = null))
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = rm.getOrCreateInstance(this, t)
				if (typeof t == 'string') {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t]()
				}
			})
		}
	}
	const _0 = 'popover',
		ue = '.te.popover',
		g0 = 'te-popover',
		m0 = {
			...is.Default,
			placement: 'right',
			offset: [0, 8],
			trigger: 'click',
			content: '',
			template:
				'<div class="opacity-0 transition-opacity duration-150 ease-in-out absolute top-0 left-0 z-[1070] block max-w-[267px] break-words bg-white bg-clip-padding border border-neutral-100 rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:bg-neutral-700 dark:border-0 dark:text-white data-[popper-reference-hidden]:hidden" role="tooltip"><h3 class="popover-header py-2 px-4 mb-0 border-b-2 border-neutral-100 rounded-t-lg font-medium empty:hidden dark:border-neutral-500"></h3><div class="popover-body p-4 text-[#212529] dark:text-white"></div></div>',
		},
		b0 = { ...is.DefaultType, content: '(string|element|function)' },
		v0 = {
			HIDE: `hide${ue}`,
			HIDDEN: `hidden${ue}`,
			SHOW: `show${ue}`,
			SHOWN: `shown${ue}`,
			INSERTED: `inserted${ue}`,
			CLICK: `click${ue}`,
			FOCUSIN: `focusin${ue}`,
			FOCUSOUT: `focusout${ue}`,
			MOUSEENTER: `mouseenter${ue}`,
			MOUSELEAVE: `mouseleave${ue}`,
		},
		y0 = '.popover-header',
		T0 = '.popover-body'
	class Eo extends is {
		static get Default() {
			return m0
		}
		static get NAME() {
			return _0
		}
		static get Event() {
			return v0
		}
		static get DefaultType() {
			return b0
		}
		isWithContent() {
			return this.getTitle() || this._getContent()
		}
		setContent(t) {
			this._sanitizeAndSetContent(t, this.getTitle(), y0),
				this._sanitizeAndSetContent(t, this._getContent(), T0)
		}
		_getContent() {
			return this._resolvePossibleFunction(this._config.content)
		}
		_getBasicClassPrefix() {
			return g0
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Eo.getOrCreateInstance(this, t)
				if (typeof t == 'string') {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t]()
				}
			})
		}
	}
	const ll = 'scrollspy',
		cl = '.te.scrollspy',
		Fd = { offset: 10, method: 'auto', target: '' },
		E0 = { offset: 'number', method: 'string', target: '(string|element)' },
		x0 = {
			active:
				'!text-primary dark:!text-primary-400 font-semibold border-l-[0.125rem] border-solid border-blue-500 dark:border-blue-500',
		},
		C0 = { active: 'string' },
		A0 = `activate${cl}`,
		w0 = `scroll${cl}`,
		hl = 'data-te-nav-link-active',
		Wd = '[data-te-dropdown-item-ref]',
		k0 = '[data-te-nav-list-ref]',
		dl = '[data-te-nav-link-ref]',
		S0 = '[data-te-nav-item-ref]',
		zd = '[data-te-list-group-item-ref]',
		ul = `${dl}, ${zd}, ${Wd}`,
		O0 = '[data-te-dropdown-ref]',
		I0 = '[data-te-dropdown-toggle-ref]',
		D0 = 'maxOffset',
		jd = 'position'
	class xo extends Mt {
		constructor(t, e, i) {
			super(t),
				(this._scrollElement =
					this._element.tagName === 'BODY' ? window : this._element),
				(this._config = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._offsets = []),
				(this._targets = []),
				(this._activeTarget = null),
				(this._scrollHeight = 0),
				_.on(this._scrollElement, w0, () => this._process()),
				this.refresh(),
				this._process()
		}
		static get Default() {
			return Fd
		}
		static get NAME() {
			return ll
		}
		refresh() {
			const t = this._scrollElement === this._scrollElement.window ? D0 : jd,
				e = this._config.method === 'auto' ? t : this._config.method,
				i = e === jd ? this._getScrollTop() : 0
			;(this._offsets = []),
				(this._targets = []),
				(this._scrollHeight = this._getScrollHeight()),
				m
					.find(ul, this._config.target)
					.map(o => {
						const r = Ca(o),
							a = r ? m.findOne(r) : null
						if (a) {
							const l = a.getBoundingClientRect()
							if (l.width || l.height) return [g[e](a).top + i, r]
						}
						return null
					})
					.filter(o => o)
					.sort((o, r) => o[0] - r[0])
					.forEach(o => {
						this._offsets.push(o[0]), this._targets.push(o[1])
					})
		}
		dispose() {
			_.off(this._scrollElement, cl), super.dispose()
		}
		_getConfig(t) {
			return (
				(t = {
					...Fd,
					...g.getDataAttributes(this._element),
					...(typeof t == 'object' && t ? t : {}),
				}),
				(t.target = Be(t.target) || document.documentElement),
				L(ll, t, E0),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...x0, ...e, ...t }), L(ll, t, C0), t
		}
		_getScrollTop() {
			return this._scrollElement === window
				? this._scrollElement.pageYOffset
				: this._scrollElement.scrollTop
		}
		_getScrollHeight() {
			return (
				this._scrollElement.scrollHeight ||
				Math.max(
					document.body.scrollHeight,
					document.documentElement.scrollHeight
				)
			)
		}
		_getOffsetHeight() {
			return this._scrollElement === window
				? window.innerHeight
				: this._scrollElement.getBoundingClientRect().height
		}
		_process() {
			const t = this._getScrollTop() + this._config.offset,
				e = this._getScrollHeight(),
				i = this._config.offset + e - this._getOffsetHeight()
			if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
				const n = this._targets[this._targets.length - 1]
				this._activeTarget !== n && this._activate(n)
				return
			}
			if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
				;(this._activeTarget = null), this._clear()
				return
			}
			for (let n = this._offsets.length; n--; )
				this._activeTarget !== this._targets[n] &&
					t >= this._offsets[n] &&
					(typeof this._offsets[n + 1] > 'u' || t < this._offsets[n + 1]) &&
					this._activate(this._targets[n])
		}
		_activate(t) {
			;(this._activeTarget = t), this._clear()
			const e = ul
					.split(',')
					.map(n => `${n}[data-te-target="${t}"],${n}[href="${t}"]`),
				i = m.findOne(e.join(','), this._config.target)
			i.classList.add(...this._classes.active.split(' ')),
				i.setAttribute(hl, ''),
				i.getAttribute(Wd)
					? m
							.findOne(I0, i.closest(O0))
							.classList.add(...this._classes.active.split(' '))
					: m.parents(i, k0).forEach(n => {
							m.prev(n, `${dl}, ${zd}`).forEach(o => {
								o.classList.add(...this._classes.active.split(' ')),
									o.setAttribute(hl, '')
							}),
								m.prev(n, S0).forEach(o => {
									m.children(o, dl).forEach(r =>
										r.classList.add(...this._classes.active.split(' '))
									)
								})
					  }),
				_.trigger(this._scrollElement, A0, { relatedTarget: t })
		}
		_clear() {
			m.find(ul, this._config.target)
				.filter(t => t.classList.contains(...this._classes.active.split(' ')))
				.forEach(t => {
					t.classList.remove(...this._classes.active.split(' ')),
						t.removeAttribute(hl)
				})
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = xo.getOrCreateInstance(this, t)
				if (typeof t == 'string') {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t]()
				}
			})
		}
	}
	const Yd = 'tab',
		Co = '.te.tab',
		M0 = `hide${Co}`,
		L0 = `hidden${Co}`,
		$0 = `show${Co}`,
		R0 = `shown${Co}`,
		P0 = 'data-te-dropdown-menu-ref',
		ss = 'data-te-tab-active',
		Ao = 'data-te-nav-active',
		N0 = '[data-te-dropdown-ref]',
		B0 = '[data-te-nav-ref]',
		Kd = `[${ss}]`,
		H0 = `[${Ao}]`,
		Ud = ':scope > li > .active',
		V0 = '[data-te-dropdown-toggle-ref]',
		F0 = ':scope > [data-te-dropdown-menu-ref] [data-te-dropdown-show]',
		W0 = { show: 'opacity-100', hide: 'opacity-0' },
		z0 = { show: 'string', hide: 'string' }
	class wo extends Mt {
		constructor(t, e) {
			super(t), (this._classes = this._getClasses(e))
		}
		static get NAME() {
			return Yd
		}
		show() {
			if (
				this._element.parentNode &&
				this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
				this._element.getAttribute(Ao) === ''
			)
				return
			let t
			const e = Ne(this._element),
				i = this._element.closest(B0),
				n = m.findOne(H0, i)
			if (i) {
				const l = i.nodeName === 'UL' || i.nodeName === 'OL' ? Ud : Kd
				;(t = m.find(l, i)), (t = t[t.length - 1])
			}
			const o = t ? _.trigger(t, M0, { relatedTarget: this._element }) : null
			if (
				_.trigger(this._element, $0, { relatedTarget: t }).defaultPrevented ||
				(o !== null && o.defaultPrevented)
			)
				return
			this._activate(this._element, i, null, n, this._element)
			const a = () => {
				_.trigger(t, L0, { relatedTarget: this._element }),
					_.trigger(this._element, R0, { relatedTarget: t })
			}
			e ? this._activate(e, e.parentNode, a, n, this._element) : a()
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...W0, ...e, ...t }), L(Yd, t, z0), t
		}
		_activate(t, e, i, n, o) {
			const a = (
					e && (e.nodeName === 'UL' || e.nodeName === 'OL')
						? m.find(Ud, e)
						: m.children(e, Kd)
				)[0],
				l = i && a && a.hasAttribute(ss),
				c = () => this._transitionComplete(t, a, i, n, o)
			a && l
				? (g.removeClass(a, this._classes.show),
				  g.addClass(a, this._classes.hide),
				  this._queueCallback(c, t, !0))
				: c()
		}
		_transitionComplete(t, e, i, n, o) {
			if (e && n) {
				e.removeAttribute(ss), n.removeAttribute(Ao)
				const a = m.findOne(F0, e.parentNode)
				a && a.removeAttribute(ss),
					e.getAttribute('role') === 'tab' &&
						e.setAttribute('aria-selected', !1)
			}
			t.setAttribute(ss, ''),
				o.setAttribute(Ao, ''),
				t.getAttribute('role') === 'tab' && t.setAttribute('aria-selected', !0),
				zi(t),
				t.classList.contains(this._classes.hide) &&
					(g.removeClass(t, this._classes.hide),
					g.addClass(t, this._classes.show))
			let r = t.parentNode
			if (
				(r && r.nodeName === 'LI' && (r = r.parentNode),
				r && r.hasAttribute(P0))
			) {
				const a = t.closest(N0)
				a && m.find(V0, a).forEach(l => l.setAttribute(ss, '')),
					t.setAttribute('aria-expanded', !0)
			}
			i && i()
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = wo.getOrCreateInstance(this)
				if (typeof t == 'string') {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t]()
				}
			})
		}
	}
	const pl = 'toast',
		ze = '.te.toast',
		j0 = `mouseover${ze}`,
		Y0 = `mouseout${ze}`,
		K0 = `focusin${ze}`,
		U0 = `focusout${ze}`,
		X0 = `hide${ze}`,
		G0 = `hidden${ze}`,
		q0 = `show${ze}`,
		Z0 = `shown${ze}`,
		Xd = 'data-te-toast-hide',
		fl = 'data-te-toast-show',
		ko = 'data-te-toast-showing',
		Q0 = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
		Gd = { animation: !0, autohide: !0, delay: 5e3 },
		J0 = {
			fadeIn:
				'animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none',
			fadeOut:
				'animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none',
		},
		ty = { fadeIn: 'string', fadeOut: 'string' }
	class Xs extends Mt {
		constructor(t, e, i) {
			super(t),
				(this._config = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._timeout = null),
				(this._hasMouseInteraction = !1),
				(this._hasKeyboardInteraction = !1),
				this._setListeners(),
				(this._didInit = !1),
				this._init()
		}
		static get DefaultType() {
			return Q0
		}
		static get Default() {
			return Gd
		}
		static get NAME() {
			return pl
		}
		show() {
			if (_.trigger(this._element, q0).defaultPrevented) return
			this._clearTimeout(),
				this._config.animation &&
					(g.removeClass(this._element, this._classes.fadeOut),
					g.addClass(this._element, this._classes.fadeIn))
			const e = () => {
				this._element.removeAttribute(ko),
					_.trigger(this._element, Z0),
					this._maybeScheduleHide()
			}
			this._element.removeAttribute(Xd),
				zi(this._element),
				this._element.setAttribute(fl, ''),
				this._element.setAttribute(ko, ''),
				this._queueCallback(e, this._element, this._config.animation)
		}
		hide() {
			if (
				!this._element ||
				this._element.dataset.teToastShow === void 0 ||
				_.trigger(this._element, X0).defaultPrevented
			)
				return
			const e = () => {
				let i = 0
				this._config.animation &&
					((i = 300),
					g.removeClass(this._element, this._classes.fadeIn),
					g.addClass(this._element, this._classes.fadeOut)),
					setTimeout(() => {
						this._element.setAttribute(Xd, ''),
							this._element.removeAttribute(ko),
							this._element.removeAttribute(fl),
							_.trigger(this._element, G0)
					}, i)
			}
			this._element.setAttribute(ko, ''),
				this._queueCallback(e, this._element, this._config.animation)
		}
		dispose() {
			this._clearTimeout(),
				this._element.dataset.teToastShow !== void 0 &&
					this._element.removeAttribute(fl),
				super.dispose()
		}
		_init() {
			this._didInit || (yo(Xs), (this._didInit = !0))
		}
		_getConfig(t) {
			return (
				(t = {
					...Gd,
					...g.getDataAttributes(this._element),
					...(typeof t == 'object' && t ? t : {}),
				}),
				L(pl, t, this.constructor.DefaultType),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...J0, ...e, ...t }), L(pl, t, ty), t
		}
		_maybeScheduleHide() {
			this._config.autohide &&
				(this._hasMouseInteraction ||
					this._hasKeyboardInteraction ||
					(this._timeout = setTimeout(() => {
						this.hide()
					}, this._config.delay)))
		}
		_onInteraction(t, e) {
			switch (t.type) {
				case 'mouseover':
				case 'mouseout':
					this._hasMouseInteraction = e
					break
				case 'focusin':
				case 'focusout':
					this._hasKeyboardInteraction = e
					break
			}
			if (e) {
				this._clearTimeout()
				return
			}
			const i = t.relatedTarget
			this._element === i ||
				this._element.contains(i) ||
				this._maybeScheduleHide()
		}
		_setListeners() {
			_.on(this._element, j0, t => this._onInteraction(t, !0)),
				_.on(this._element, Y0, t => this._onInteraction(t, !1)),
				_.on(this._element, K0, t => this._onInteraction(t, !0)),
				_.on(this._element, U0, t => this._onInteraction(t, !1))
		}
		_clearTimeout() {
			clearTimeout(this._timeout), (this._timeout = null)
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Xs.getOrCreateInstance(this, t)
				if (typeof t == 'string') {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t](this)
				}
			})
		}
	}
	;(() => {
		var s = {
				454: (i, n, o) => {
					o.d(n, { Z: () => l })
					var r = o(645),
						a = o.n(r)()(function (c) {
							return c[1]
						})
					a.push([
						i.id,
						'INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}',
						'',
					])
					const l = a
				},
				645: i => {
					i.exports = function (n) {
						var o = []
						return (
							(o.toString = function () {
								return this.map(function (r) {
									var a = n(r)
									return r[2] ? '@media '.concat(r[2], ' {').concat(a, '}') : a
								}).join('')
							}),
							(o.i = function (r, a, l) {
								typeof r == 'string' && (r = [[null, r, '']])
								var c = {}
								if (l)
									for (var h = 0; h < this.length; h++) {
										var d = this[h][0]
										d != null && (c[d] = !0)
									}
								for (var u = 0; u < r.length; u++) {
									var p = [].concat(r[u])
									;(l && c[p[0]]) ||
										(a &&
											(p[2]
												? (p[2] = ''.concat(a, ' and ').concat(p[2]))
												: (p[2] = a)),
										o.push(p))
								}
							}),
							o
						)
					}
				},
				810: () => {
					;(function () {
						if (typeof window < 'u')
							try {
								var i = new window.CustomEvent('test', { cancelable: !0 })
								if ((i.preventDefault(), i.defaultPrevented !== !0))
									throw new Error('Could not prevent default')
							} catch {
								var n = function (r, a) {
									var l, c
									return (
										((a = a || {}).bubbles = !!a.bubbles),
										(a.cancelable = !!a.cancelable),
										(l = document.createEvent('CustomEvent')).initCustomEvent(
											r,
											a.bubbles,
											a.cancelable,
											a.detail
										),
										(c = l.preventDefault),
										(l.preventDefault = function () {
											c.call(this)
											try {
												Object.defineProperty(this, 'defaultPrevented', {
													get: function () {
														return !0
													},
												})
											} catch {
												this.defaultPrevented = !0
											}
										}),
										l
									)
								}
								;(n.prototype = window.Event.prototype),
									(window.CustomEvent = n)
							}
					})()
				},
				379: (i, n, o) => {
					var r,
						a = (function () {
							var x = {}
							return function (E) {
								if (x[E] === void 0) {
									var C = document.querySelector(E)
									if (
										window.HTMLIFrameElement &&
										C instanceof window.HTMLIFrameElement
									)
										try {
											C = C.contentDocument.head
										} catch {
											C = null
										}
									x[E] = C
								}
								return x[E]
							}
						})(),
						l = []
					function c(x) {
						for (var E = -1, C = 0; C < l.length; C++)
							if (l[C].identifier === x) {
								E = C
								break
							}
						return E
					}
					function h(x, E) {
						for (var C = {}, A = [], w = 0; w < x.length; w++) {
							var S = x[w],
								k = E.base ? S[0] + E.base : S[0],
								D = C[k] || 0,
								I = ''.concat(k, ' ').concat(D)
							C[k] = D + 1
							var M = c(I),
								P = { css: S[1], media: S[2], sourceMap: S[3] }
							M !== -1
								? (l[M].references++, l[M].updater(P))
								: l.push({ identifier: I, updater: T(P, E), references: 1 }),
								A.push(I)
						}
						return A
					}
					function d(x) {
						var E = document.createElement('style'),
							C = x.attributes || {}
						if (C.nonce === void 0) {
							var A = o.nc
							A && (C.nonce = A)
						}
						if (
							(Object.keys(C).forEach(function (S) {
								E.setAttribute(S, C[S])
							}),
							typeof x.insert == 'function')
						)
							x.insert(E)
						else {
							var w = a(x.insert || 'head')
							if (!w)
								throw new Error(
									"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
								)
							w.appendChild(E)
						}
						return E
					}
					var u,
						p =
							((u = []),
							function (x, E) {
								return (
									(u[x] = E),
									u.filter(Boolean).join(`
`)
								)
							})
					function f(x, E, C, A) {
						var w = C
							? ''
							: A.media
							? '@media '.concat(A.media, ' {').concat(A.css, '}')
							: A.css
						if (x.styleSheet) x.styleSheet.cssText = p(E, w)
						else {
							var S = document.createTextNode(w),
								k = x.childNodes
							k[E] && x.removeChild(k[E]),
								k.length ? x.insertBefore(S, k[E]) : x.appendChild(S)
						}
					}
					function b(x, E, C) {
						var A = C.css,
							w = C.media,
							S = C.sourceMap
						if (
							(w ? x.setAttribute('media', w) : x.removeAttribute('media'),
							S &&
								typeof btoa < 'u' &&
								(A += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
									btoa(unescape(encodeURIComponent(JSON.stringify(S)))),
									' */'
								)),
							x.styleSheet)
						)
							x.styleSheet.cssText = A
						else {
							for (; x.firstChild; ) x.removeChild(x.firstChild)
							x.appendChild(document.createTextNode(A))
						}
					}
					var v = null,
						y = 0
					function T(x, E) {
						var C, A, w
						if (E.singleton) {
							var S = y++
							;(C = v || (v = d(E))),
								(A = f.bind(null, C, S, !1)),
								(w = f.bind(null, C, S, !0))
						} else
							(C = d(E)),
								(A = b.bind(null, C, E)),
								(w = function () {
									;(function (k) {
										if (k.parentNode === null) return !1
										k.parentNode.removeChild(k)
									})(C)
								})
						return (
							A(x),
							function (k) {
								if (k) {
									if (
										k.css === x.css &&
										k.media === x.media &&
										k.sourceMap === x.sourceMap
									)
										return
									A((x = k))
								} else w()
							}
						)
					}
					i.exports = function (x, E) {
						;(E = E || {}).singleton ||
							typeof E.singleton == 'boolean' ||
							(E.singleton =
								(r === void 0 &&
									(r = !!(window && document && document.all && !window.atob)),
								r))
						var C = h((x = x || []), E)
						return function (A) {
							if (
								((A = A || []),
								Object.prototype.toString.call(A) === '[object Array]')
							) {
								for (var w = 0; w < C.length; w++) {
									var S = c(C[w])
									l[S].references--
								}
								for (var k = h(A, E), D = 0; D < C.length; D++) {
									var I = c(C[D])
									l[I].references === 0 && (l[I].updater(), l.splice(I, 1))
								}
								C = k
							}
						}
					}
				},
			},
			t = {}
		function e(i) {
			var n = t[i]
			if (n !== void 0) return n.exports
			var o = (t[i] = { id: i, exports: {} })
			return s[i](o, o.exports, e), o.exports
		}
		;(e.n = i => {
			var n = i && i.__esModule ? () => i.default : () => i
			return e.d(n, { a: n }), n
		}),
			(e.d = (i, n) => {
				for (var o in n)
					e.o(n, o) &&
						!e.o(i, o) &&
						Object.defineProperty(i, o, { enumerable: !0, get: n[o] })
			}),
			(e.o = (i, n) => Object.prototype.hasOwnProperty.call(i, n)),
			(() => {
				var i = e(379),
					n = e.n(i),
					o = e(454)
				function r(l) {
					if (!l.hasAttribute('autocompleted')) {
						l.setAttribute('autocompleted', '')
						var c = new window.CustomEvent('onautocomplete', {
							bubbles: !0,
							cancelable: !0,
							detail: null,
						})
						l.dispatchEvent(c) || (l.value = '')
					}
				}
				function a(l) {
					l.hasAttribute('autocompleted') &&
						(l.removeAttribute('autocompleted'),
						l.dispatchEvent(
							new window.CustomEvent('onautocomplete', {
								bubbles: !0,
								cancelable: !1,
								detail: null,
							})
						))
				}
				n()(o.Z, { insert: 'head', singleton: !1 }),
					o.Z.locals,
					e(810),
					document.addEventListener(
						'animationstart',
						function (l) {
							l.animationName === 'onautofillstart' ? r(l.target) : a(l.target)
						},
						!0
					),
					document.addEventListener(
						'input',
						function (l) {
							l.inputType !== 'insertReplacementText' && 'data' in l
								? a(l.target)
								: r(l.target)
						},
						!0
					)
			})()
	})()
	const _l = 'input',
		So = 'te.input',
		qd = 'data-te-input-wrapper-init',
		Zd = 'data-te-input-notch-ref',
		Qd = 'data-te-input-notch-leading-ref',
		Jd = 'data-te-input-notch-middle-ref',
		ey = 'data-te-input-notch-trailing-ref',
		iy = 'data-te-input-helper-ref',
		sy = 'data-te-input-placeholder-active',
		je = 'data-te-input-state-active',
		tu = 'data-te-input-focused',
		eu = 'data-te-input-form-counter',
		Oo = `[${qd}] input`,
		Io = `[${qd}] textarea`,
		ns = `[${Zd}]`,
		iu = `[${Qd}]`,
		su = `[${Jd}]`,
		ny = `[${iy}]`,
		oy = { inputFormWhite: !1 },
		ry = { inputFormWhite: '(boolean)' },
		nu = {
			notch:
				'group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none',
			notchLeading:
				'pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0',
			notchLeadingNormal:
				'border-neutral-300 dark:border-neutral-300 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-blue-500',
			notchLeadingWhite:
				'border-neutral-200 group-data-[te-input-focused]:shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] group-data-[te-input-focused]:border-white',
			notchMiddle:
				'pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent',
			notchMiddleNormal:
				'border-neutral-300 dark:border-neutral-300 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-blue-500',
			notchMiddleWhite:
				'border-neutral-200 group-data-[te-input-focused]:shadow-[0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white',
			notchTrailing:
				'pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0',
			notchTrailingNormal:
				'border-neutral-300 dark:border-neutral-300 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-blue-500',
			notchTrailingWhite:
				'border-neutral-200 group-data-[te-input-focused]:shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white',
			counter: 'text-right leading-[1.6]',
		},
		ay = {
			notch: 'string',
			notchLeading: 'string',
			notchLeadingNormal: 'string',
			notchLeadingWhite: 'string',
			notchMiddle: 'string',
			notchMiddleNormal: 'string',
			notchMiddleWhite: 'string',
			notchTrailing: 'string',
			notchTrailingNormal: 'string',
			notchTrailingWhite: 'string',
			counter: 'string',
		}
	class Z {
		constructor(t, e, i) {
			;(this._config = this._getConfig(e, t)),
				(this._element = t),
				(this._classes = this._getClasses(i)),
				(this._label = null),
				(this._labelWidth = 0),
				(this._labelMarginLeft = 0),
				(this._notchLeading = null),
				(this._notchMiddle = null),
				(this._notchTrailing = null),
				(this._initiated = !1),
				(this._helper = null),
				(this._counter = !1),
				(this._counterElement = null),
				(this._maxLength = 0),
				(this._leadingIcon = null),
				this._element && (O.setData(t, So, this), this.init())
		}
		static get NAME() {
			return _l
		}
		get input() {
			return (
				m.findOne('input', this._element) ||
				m.findOne('textarea', this._element)
			)
		}
		init() {
			this._initiated ||
				(this._getLabelData(),
				this._applyDivs(),
				this._applyNotch(),
				this._activate(),
				this._getHelper(),
				this._getCounter(),
				this._getEvents(),
				(this._initiated = !0))
		}
		update() {
			this._getLabelData(),
				this._getNotchData(),
				this._applyNotch(),
				this._activate(),
				this._getHelper(),
				this._getCounter()
		}
		forceActive() {
			this.input.setAttribute(je, ''),
				m.findOne(ns, this.input.parentNode).setAttribute(je, '')
		}
		forceInactive() {
			this.input.removeAttribute(je),
				m.findOne(ns, this.input.parentNode).removeAttribute(je)
		}
		dispose() {
			this._removeBorder(),
				O.removeData(this._element, So),
				(this._element = null)
		}
		_getConfig(t, e) {
			return (
				(t = {
					...oy,
					...g.getDataAttributes(e),
					...(typeof t == 'object' ? t : {}),
				}),
				L(_l, t, ry),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...nu, ...e, ...t }), L(_l, t, ay), t
		}
		_getLabelData() {
			;(this._label = m.findOne('label', this._element)),
				this._label === null
					? this._showPlaceholder()
					: (this._getLabelWidth(),
					  this._getLabelPositionInInputGroup(),
					  this._toggleDefaultDatePlaceholder())
		}
		_getHelper() {
			this._helper = m.findOne(ny, this._element)
		}
		_getCounter() {
			;(this._counter = g.getDataAttribute(this.input, 'inputShowcounter')),
				this._counter &&
					((this._maxLength = this.input.maxLength), this._showCounter())
		}
		_getEvents() {
			_.on(this._element, 'focus', 'input', Z.activate(new Z())),
				_.on(this._element, 'input', 'input', Z.activate(new Z())),
				_.on(this._element, 'blur', 'input', Z.deactivate(new Z())),
				_.on(this._element, 'focus', 'textarea', Z.activate(new Z())),
				_.on(this._element, 'input', 'textarea', Z.activate(new Z())),
				_.on(this._element, 'blur', 'textarea', Z.deactivate(new Z())),
				_.on(window, 'shown.te.modal', t => {
					m.find(Oo, t.target).forEach(e => {
						const i = Z.getInstance(e.parentNode)
						i && i.update()
					}),
						m.find(Io, t.target).forEach(e => {
							const i = Z.getInstance(e.parentNode)
							i && i.update()
						})
				}),
				_.on(window, 'shown.te.dropdown', t => {
					const e = t.target.parentNode.querySelector(
						'[data-te-dropdown-menu-ref]'
					)
					e &&
						(m.find(Oo, e).forEach(i => {
							const n = Z.getInstance(i.parentNode)
							n && n.update()
						}),
						m.find(Io, e).forEach(i => {
							const n = Z.getInstance(i.parentNode)
							n && n.update()
						}))
				}),
				_.on(window, 'shown.te.tab', t => {
					let e
					t.target.href
						? (e = t.target.href.split('#')[1])
						: (e = g.getDataAttribute(t.target, 'target').split('#')[1])
					const i = m.findOne(`#${e}`)
					m.find(Oo, i).forEach(n => {
						const o = Z.getInstance(n.parentNode)
						o && o.update()
					}),
						m.find(Io, i).forEach(n => {
							const o = Z.getInstance(n.parentNode)
							o && o.update()
						})
				}),
				_.on(window, 'reset', t => {
					m.find(Oo, t.target).forEach(e => {
						const i = Z.getInstance(e.parentNode)
						i && i.forceInactive()
					}),
						m.find(Io, t.target).forEach(e => {
							const i = Z.getInstance(e.parentNode)
							i && i.forceInactive()
						})
				}),
				_.on(window, 'onautocomplete', t => {
					const e = Z.getInstance(t.target.parentNode)
					!e || !t.cancelable || e.forceActive()
				})
		}
		_showCounter() {
			if (m.find(`[${eu}]`, this._element).length > 0) return
			;(this._counterElement = document.createElement('div')),
				g.addClass(this._counterElement, this._classes.counter),
				this._counterElement.setAttribute(eu, '')
			const e = this.input.value.length
			;(this._counterElement.innerHTML = `${e} / ${this._maxLength}`),
				this._helper.appendChild(this._counterElement),
				this._bindCounter()
		}
		_bindCounter() {
			_.on(this.input, 'input', () => {
				const t = this.input.value.length
				this._counterElement.innerHTML = `${t} / ${this._maxLength}`
			})
		}
		_toggleDefaultDatePlaceholder(t = this.input) {
			if (!(t.getAttribute('type') === 'date')) return
			!(document.activeElement === t) && !t.value
				? (t.style.opacity = 0)
				: (t.style.opacity = 1)
		}
		_showPlaceholder() {
			this.input.setAttribute(sy, '')
		}
		_getNotchData() {
			;(this._notchMiddle = m.findOne(su, this._element)),
				(this._notchLeading = m.findOne(iu, this._element))
		}
		_getLabelWidth() {
			this._labelWidth = this._label.clientWidth * 0.8 + 8
		}
		_getLabelPositionInInputGroup() {
			if (
				((this._labelMarginLeft = 0),
				!this._element.hasAttribute('data-te-input-group-ref'))
			)
				return
			const t = this.input,
				e = m.prev(t, '[data-te-input-group-text-ref]')[0]
			e === void 0
				? (this._labelMarginLeft = 0)
				: (this._labelMarginLeft = e.offsetWidth - 1)
		}
		_applyDivs() {
			const t = this._config.inputFormWhite
					? this._classes.notchLeadingWhite
					: this._classes.notchLeadingNormal,
				e = this._config.inputFormWhite
					? this._classes.notchMiddleWhite
					: this._classes.notchMiddleNormal,
				i = this._config.inputFormWhite
					? this._classes.notchTrailingWhite
					: this._classes.notchTrailingNormal,
				n = m.find(ns, this._element),
				o = $('div')
			g.addClass(o, this._classes.notch),
				o.setAttribute(Zd, ''),
				(this._notchLeading = $('div')),
				g.addClass(this._notchLeading, `${this._classes.notchLeading} ${t}`),
				this._notchLeading.setAttribute(Qd, ''),
				(this._notchMiddle = $('div')),
				g.addClass(this._notchMiddle, `${this._classes.notchMiddle} ${e}`),
				this._notchMiddle.setAttribute(Jd, ''),
				(this._notchTrailing = $('div')),
				g.addClass(this._notchTrailing, `${this._classes.notchTrailing} ${i}`),
				this._notchTrailing.setAttribute(ey, ''),
				!(n.length >= 1) &&
					(o.append(this._notchLeading),
					o.append(this._notchMiddle),
					o.append(this._notchTrailing),
					this._element.append(o))
		}
		_applyNotch() {
			;(this._notchMiddle.style.width = `${this._labelWidth}px`),
				(this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`),
				this._label !== null &&
					(this._label.style.marginLeft = `${this._labelMarginLeft}px`)
		}
		_removeBorder() {
			const t = m.findOne(ns, this._element)
			t && t.remove()
		}
		_activate(t) {
			ph(() => {
				this._getElements(t)
				const e = t ? t.target : this.input,
					i = m.findOne(ns, this._element)
				t && t.type === 'focus' && i && i.setAttribute(tu, ''),
					e.value !== '' &&
						(e.setAttribute(je, ''), i && i.setAttribute(je, '')),
					this._toggleDefaultDatePlaceholder(e)
			})
		}
		_getElements(t) {
			if (
				(t &&
					((this._element = t.target.parentNode),
					(this._label = m.findOne('label', this._element))),
				t && this._label)
			) {
				const e = this._labelWidth
				this._getLabelData(),
					e !== this._labelWidth &&
						((this._notchMiddle = m.findOne(su, t.target.parentNode)),
						(this._notchLeading = m.findOne(iu, t.target.parentNode)),
						this._applyNotch())
			}
		}
		_deactivate(t) {
			const e = t ? t.target : this.input,
				i = m.findOne(ns, e.parentNode)
			i.removeAttribute(tu),
				e.value === '' && (e.removeAttribute(je), i.removeAttribute(je)),
				this._toggleDefaultDatePlaceholder(e)
		}
		static activate(t) {
			return function (e) {
				t._activate(e)
			}
		}
		static deactivate(t) {
			return function (e) {
				t._deactivate(e)
			}
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				let i = O.getData(this, So)
				const n = typeof t == 'object' && t
				if (
					!(!i && /dispose/.test(t)) &&
					(i || (i = new Z(this, n)), typeof t == 'string')
				) {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t](e)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, So)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const ou = 'animation',
		gl = 'te.animation',
		ly = {
			animation: 'string',
			animationStart: 'string',
			animationShowOnLoad: 'boolean',
			onStart: '(null|function)',
			onEnd: '(null|function)',
			onHide: '(null|function)',
			onShow: '(null|function)',
			animationOnScroll: '(string)',
			animationWindowHeight: 'number',
			animationOffset: '(number|string)',
			animationDelay: '(number|string)',
			animationReverse: 'boolean',
			animationInterval: '(number|string)',
			animationRepeat: '(number|boolean)',
			animationReset: 'boolean',
		},
		cy = {
			animation: 'fade',
			animationStart: 'onClick',
			animationShowOnLoad: !0,
			onStart: null,
			onEnd: null,
			onHide: null,
			onShow: null,
			animationOnScroll: 'once',
			animationWindowHeight: 0,
			animationOffset: 0,
			animationDelay: 0,
			animationReverse: !1,
			animationInterval: 0,
			animationRepeat: !1,
			animationReset: !1,
		}
	class Gs {
		constructor(t, e) {
			;(this._element = t),
				(this._animateElement = this._getAnimateElement()),
				(this._isFirstScroll = !0),
				(this._repeatAnimateOnScroll = !0),
				(this._options = this._getConfig(e)),
				this._element && (O.setData(t, gl, this), this._init())
		}
		static get NAME() {
			return ou
		}
		init() {
			this._init()
		}
		startAnimation() {
			this._startAnimation()
		}
		stopAnimation() {
			this._clearAnimationClass()
		}
		changeAnimationType(t) {
			this._options.animation = t
		}
		dispose() {
			_.off(this._element, 'mousedown'),
				_.off(this._animateElement, 'animationend'),
				_.off(window, 'scroll'),
				_.off(this._element, 'mouseover'),
				O.removeData(this._element, gl),
				(this._element = null),
				(this._animateElement = null),
				(this._isFirstScroll = null),
				(this._repeatAnimateOnScroll = null),
				(this._options = null)
		}
		_init() {
			switch (this._options.animationStart) {
				case 'onHover':
					this._bindHoverEvents()
					break
				case 'onLoad':
					this._startAnimation()
					break
				case 'onScroll':
					this._bindScrollEvents()
					break
				case 'onClick':
					this._bindClickEvents()
					break
			}
			this._bindTriggerOnEndCallback(),
				this._options.animationReset && this._bindResetAnimationAfterFinish()
		}
		_getAnimateElement() {
			const t = g.getDataAttribute(this._element, 'animation-target')
			return t ? m.find(t)[0] : this._element
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._animateElement)
			return (t = { ...cy, ...e, ...t }), L(ou, t, ly), t
		}
		_animateOnScroll() {
			const t = g.offset(this._animateElement).top,
				e = this._animateElement.offsetHeight,
				i = window.innerHeight,
				n =
					t + this._options.animationOffset <= i &&
					t + this._options.animationOffset + e >= 0,
				o = this._animateElement.style.visibility === 'visible'
			switch (!0) {
				case n && this._isFirstScroll:
					;(this._isFirstScroll = !1), this._startAnimation()
					break
				case !n && this._isFirstScroll:
					;(this._isFirstScroll = !1), this._hideAnimateElement()
					break
				case n && !o && this._repeatAnimateOnScroll:
					this._options.animationOnScroll !== 'repeat' &&
						(this._repeatAnimateOnScroll = !1),
						this._callback(this._options.onShow),
						this._showAnimateElement(),
						this._startAnimation()
					break
				case !n && o && this._repeatAnimateOnScroll:
					this._hideAnimateElement(),
						this._clearAnimationClass(),
						this._callback(this._options.onHide)
					break
			}
		}
		_addAnimatedClass() {
			g.addClass(this._animateElement, `animate-${this._options.animation}`)
		}
		_clearAnimationClass() {
			this._animateElement.classList.remove(
				`animate-${this._options.animation}`
			)
		}
		_startAnimation() {
			this._callback(this._options.onStart),
				this._addAnimatedClass(),
				this._options.animationRepeat &&
					!this._options.animationInterval &&
					this._setAnimationRepeat(),
				this._options.animationReverse && this._setAnimationReverse(),
				this._options.animationDelay && this._setAnimationDelay(),
				this._options.animationDuration && this._setAnimationDuration(),
				this._options.animationInterval && this._setAnimationInterval()
		}
		_setAnimationReverse() {
			g.style(this._animateElement, {
				animationIterationCount:
					this._options.animationRepeat === !0 ? 'infinite' : '2',
				animationDirection: 'alternate',
			})
		}
		_setAnimationDuration() {
			g.style(this._animateElement, {
				animationDuration: `${this._options.animationDuration}ms`,
			})
		}
		_setAnimationDelay() {
			g.style(this._animateElement, {
				animationDelay: `${this._options.animationDelay}ms`,
			})
		}
		_setAnimationRepeat() {
			g.style(this._animateElement, {
				animationIterationCount:
					this._options.animationRepeat === !0
						? 'infinite'
						: this._options.animationRepeat,
			})
		}
		_setAnimationInterval() {
			_.on(this._animateElement, 'animationend', () => {
				this._clearAnimationClass(),
					setTimeout(() => {
						this._addAnimatedClass()
					}, this._options.animationInterval)
			})
		}
		_hideAnimateElement() {
			g.style(this._animateElement, { visibility: 'hidden' })
		}
		_showAnimateElement() {
			g.style(this._animateElement, { visibility: 'visible' })
		}
		_bindResetAnimationAfterFinish() {
			_.on(this._animateElement, 'animationend', () => {
				this._clearAnimationClass()
			})
		}
		_bindTriggerOnEndCallback() {
			_.on(this._animateElement, 'animationend', () => {
				this._callback(this._options.onEnd)
			})
		}
		_bindScrollEvents() {
			this._options.animationShowOnLoad || this._animateOnScroll(),
				_.on(window, 'scroll', () => {
					this._animateOnScroll()
				})
		}
		_bindClickEvents() {
			_.on(this._element, 'mousedown', () => {
				this._startAnimation()
			})
		}
		_bindHoverEvents() {
			_.one(this._element, 'mouseover', () => {
				this._startAnimation()
			}),
				_.one(this._animateElement, 'animationend', () => {
					setTimeout(() => {
						this._bindHoverEvents()
					}, 100)
				})
		}
		_callback(t) {
			t instanceof Function && t()
		}
		static autoInit(t) {
			t._init()
		}
		static jQueryInterface(t) {
			new Gs(this[0], t).init()
		}
		static getInstance(t) {
			return O.getData(t, gl)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const hy = { property: 'color', defaultValue: null, inherit: !0 },
		os = (s, t) => {
			const { property: e, defaultValue: i, inherit: n } = { ...hy, ...t },
				o = document.createElement('div')
			o.classList.add(s), document.body.appendChild(o)
			const a = window.getComputedStyle(o)[e] || i,
				c = window.getComputedStyle(o.parentElement)[e]
			return document.body.removeChild(o), !n && c && a === c ? i : a || i
		},
		ml = 'ripple',
		Do = 'te.ripple',
		dy =
			'rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%',
		uy = ['[data-te-ripple-init]'],
		Mo = [0, 0, 0],
		py = [
			{
				name: 'primary',
				gradientColor: os('text-primary', {
					defaultValue: '#3B71CA',
					inherit: !1,
				}),
			},
			{
				name: 'secondary',
				gradientColor: os('text-secondary', {
					defaultValue: '#9FA6B2',
					inherit: !1,
				}),
			},
			{
				name: 'success',
				gradientColor: os('text-success', {
					defaultValue: '#14A44D',
					inherit: !1,
				}),
			},
			{
				name: 'danger',
				gradientColor: os('text-danger', {
					defaultValue: '#DC4C64',
					inherit: !1,
				}),
			},
			{
				name: 'warning',
				gradientColor: os('text-warning', {
					defaultValue: '#E4A11B',
					inherit: !1,
				}),
			},
			{
				name: 'info',
				gradientColor: os('text-info', {
					defaultValue: '#54B4D3',
					inherit: !1,
				}),
			},
			{ name: 'light', gradientColor: '#fbfbfb' },
			{ name: 'dark', gradientColor: '#262626' },
		],
		ru = 0.5,
		fy = {
			rippleCentered: !1,
			rippleColor: '',
			rippleColorDark: '',
			rippleDuration: '500ms',
			rippleRadius: 0,
			rippleUnbound: !1,
		},
		_y = {
			rippleCentered: 'boolean',
			rippleColor: 'string',
			rippleColorDark: 'string',
			rippleDuration: 'string',
			rippleRadius: 'number',
			rippleUnbound: 'boolean',
		},
		gy = {
			ripple: 'relative overflow-hidden inline-block align-bottom',
			rippleWave:
				'rounded-[50%] opacity-50 pointer-events-none absolute touch-none scale-0 transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999]',
			unbound: 'overflow-visible',
		},
		my = { ripple: 'string', rippleWave: 'string', unbound: 'string' }
	class Ye {
		constructor(t, e, i) {
			;(this._element = t),
				(this._options = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				this._element &&
					(O.setData(t, Do, this),
					g.addClass(this._element, this._classes.ripple)),
				(this._clickHandler = this._createRipple.bind(this)),
				(this._rippleTimer = null),
				(this._isMinWidthSet = !1),
				(this._initialClasses = null),
				this.init()
		}
		static get NAME() {
			return ml
		}
		init() {
			this._addClickEvent(this._element)
		}
		dispose() {
			O.removeData(this._element, Do),
				_.off(this._element, 'click', this._clickHandler),
				(this._element = null),
				(this._options = null)
		}
		_autoInit(t) {
			uy.forEach(e => {
				m.closest(t.target, e) && (this._element = m.closest(t.target, e))
			}),
				this._element.style.minWidth ||
					(g.style(this._element, {
						'min-width': getComputedStyle(this._element).width,
					}),
					(this._isMinWidthSet = !0)),
				(this._options = this._getConfig()),
				(this._classes = this._getClasses()),
				(this._initialClasses = [...this._element.classList]),
				g.addClass(this._element, this._classes.ripple),
				this._createRipple(t)
		}
		_addClickEvent(t) {
			_.on(t, 'mousedown', this._clickHandler)
		}
		_createRipple(t) {
			this._element.className.indexOf(this._classes.ripple) < 0 &&
				g.addClass(this._element, this._classes.ripple)
			const { layerX: e, layerY: i } = t,
				n = t.offsetX || e,
				o = t.offsetY || i,
				r = this._element.offsetHeight,
				a = this._element.offsetWidth,
				l = this._durationToMsNumber(this._options.rippleDuration),
				c = {
					offsetX: this._options.rippleCentered ? r / 2 : n,
					offsetY: this._options.rippleCentered ? a / 2 : o,
					height: r,
					width: a,
				},
				h = this._getDiameter(c),
				d = this._options.rippleRadius || h / 2,
				u = { delay: l * ru, duration: l - l * ru },
				p = {
					left: this._options.rippleCentered ? `${a / 2 - d}px` : `${n - d}px`,
					top: this._options.rippleCentered ? `${r / 2 - d}px` : `${o - d}px`,
					height: `${this._options.rippleRadius * 2 || h}px`,
					width: `${this._options.rippleRadius * 2 || h}px`,
					transitionDelay: `0s, ${u.delay}ms`,
					transitionDuration: `${l}ms, ${u.duration}ms`,
				},
				f = $('div')
			this._createHTMLRipple({ wrapper: this._element, ripple: f, styles: p }),
				this._removeHTMLRipple({ ripple: f, duration: l })
		}
		_createHTMLRipple({ wrapper: t, ripple: e, styles: i }) {
			Object.keys(i).forEach(n => (e.style[n] = i[n])),
				g.addClass(e, this._classes.rippleWave),
				e.setAttribute('data-te-ripple-ref', ''),
				this._addColor(e, t),
				this._toggleUnbound(t),
				this._appendRipple(e, t)
		}
		_removeHTMLRipple({ ripple: t, duration: e }) {
			this._rippleTimer &&
				(clearTimeout(this._rippleTimer), (this._rippleTimer = null)),
				t &&
					setTimeout(() => {
						t.classList.add('!opacity-0')
					}, 10),
				(this._rippleTimer = setTimeout(() => {
					if (t && (t.remove(), this._element)) {
						m.find('[data-te-ripple-ref]', this._element).forEach(n => {
							n.remove()
						}),
							this._isMinWidthSet &&
								(g.style(this._element, { 'min-width': '' }),
								(this._isMinWidthSet = !1))
						const i = this._initialClasses
							? this._addedNewRippleClasses(
									this._classes.ripple,
									this._initialClasses
							  )
							: this._classes.ripple.split(' ')
						g.removeClass(this._element, i)
					}
				}, e))
		}
		_addedNewRippleClasses(t, e) {
			return t.split(' ').filter(i => e.findIndex(n => i === n) === -1)
		}
		_durationToMsNumber(t) {
			return Number(t.replace('ms', '').replace('s', '000'))
		}
		_getConfig(t = {}) {
			const e = g.getDataAttributes(this._element)
			return (t = { ...fy, ...e, ...t }), L(ml, t, _y), t
		}
		_getClasses(t = {}) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...gy, ...e, ...t }), L(ml, t, my), t
		}
		_getDiameter({ offsetX: t, offsetY: e, height: i, width: n }) {
			const o = e <= i / 2,
				r = t <= n / 2,
				a = (u, p) => Math.sqrt(u ** 2 + p ** 2),
				l = e === i / 2 && t === n / 2,
				c = {
					first: o === !0 && r === !1,
					second: o === !0 && r === !0,
					third: o === !1 && r === !0,
					fourth: o === !1 && r === !1,
				},
				h = {
					topLeft: a(t, e),
					topRight: a(n - t, e),
					bottomLeft: a(t, i - e),
					bottomRight: a(n - t, i - e),
				}
			let d = 0
			return (
				l || c.fourth
					? (d = h.topLeft)
					: c.third
					? (d = h.topRight)
					: c.second
					? (d = h.bottomRight)
					: c.first && (d = h.bottomLeft),
				d * 2
			)
		}
		_appendRipple(t, e) {
			e.appendChild(t),
				setTimeout(() => {
					g.addClass(t, 'opacity-0 scale-100')
				}, 50)
		}
		_toggleUnbound(t) {
			this._options.rippleUnbound === !0
				? g.addClass(t, this._classes.unbound)
				: g.removeClass(t, this._classes.unbound)
		}
		_addColor(t) {
			let e = this._options.rippleColor || 'rgb(0,0,0)'
			;(localStorage.theme === 'dark' ||
				(!('theme' in localStorage) &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)) &&
				(e = this._options.rippleColorDark || this._options.rippleColor)
			const i = py.find(r => r.name === e.toLowerCase()),
				n = i
					? this._colorToRGB(i.gradientColor).join(',')
					: this._colorToRGB(e).join(','),
				o = dy.split('{{color}}').join(`${n}`)
			t.style.backgroundImage = `radial-gradient(circle, ${o})`
		}
		_colorToRGB(t) {
			function e(o) {
				return (
					o.length < 7 && (o = `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}`),
					[
						parseInt(o.substr(1, 2), 16),
						parseInt(o.substr(3, 2), 16),
						parseInt(o.substr(5, 2), 16),
					]
				)
			}
			function i(o) {
				const r = document.body.appendChild(document.createElement('fictum')),
					a = 'rgb(1, 2, 3)'
				return (
					(r.style.color = a),
					r.style.color !== a ||
					((r.style.color = o), r.style.color === a || r.style.color === '')
						? Mo
						: ((o = getComputedStyle(r).color), document.body.removeChild(r), o)
				)
			}
			function n(o) {
				return (o = o.match(/[.\d]+/g).map(r => +Number(r))), (o.length = 3), o
			}
			return t.toLowerCase() === 'transparent'
				? Mo
				: t[0] === '#'
				? e(t)
				: (t.indexOf('rgb') === -1 && (t = i(t)),
				  t.indexOf('rgb') === 0 ? n(t) : Mo)
		}
		static autoInitial(t) {
			return function (e) {
				t._autoInit(e)
			}
		}
		static jQueryInterface(t) {
			return this.each(function () {
				return O.getData(this, Do) ? null : new Ye(this, t)
			})
		}
		static getInstance(t) {
			return O.getData(t, Do)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	function Tt(s) {
		return s.getDate()
	}
	function Lo(s) {
		return s.getDay()
	}
	function ot(s) {
		return s.getMonth()
	}
	function K(s) {
		return s.getFullYear()
	}
	function by(s, t, e) {
		const i = e.startDay,
			n = i > 0 ? 7 - i : 0,
			r = new Date(s, t).getDay() + n
		return r >= 7 ? r - 7 : r
	}
	function bl(s) {
		return vy(s).getDate()
	}
	function vy(s) {
		return ee(s.getFullYear(), s.getMonth() + 1, 0)
	}
	function rs() {
		return new Date()
	}
	function kt(s, t) {
		return St(s, t * 12)
	}
	function St(s, t) {
		const e = ee(s.getFullYear(), s.getMonth() + t, s.getDate()),
			i = Tt(s),
			n = Tt(e)
		return i !== n && e.setDate(0), e
	}
	function as(s, t) {
		return ee(s.getFullYear(), s.getMonth(), s.getDate() + t)
	}
	function ee(s, t, e) {
		const i = new Date(s, t, e)
		return s >= 0 && s < 100 && i.setFullYear(i.getFullYear() - 1900), i
	}
	function au(s) {
		const t = s.split('-'),
			e = t[0],
			i = t[1],
			n = t[2]
		return ee(e, i, n)
	}
	function yy(s) {
		return !Number.isNaN(s.getTime())
	}
	function ls(s, t) {
		return K(s) - K(t) || ot(s) - ot(t) || Tt(s) - Tt(t)
	}
	function yi(s, t) {
		return (
			s.setHours(0, 0, 0, 0),
			t.setHours(0, 0, 0, 0),
			s.getTime() === t.getTime()
		)
	}
	function $o(s, t) {
		const i = K(s) - Ey()
		return Ty(i, t)
	}
	function Ty(s, t) {
		return ((s % t) + t) % t
	}
	function Ey(s, t, e) {
		let i = 0
		return e ? (i = K(e) - s + 1) : t && (i = K(t)), i
	}
	function Ro(s, t, e, i, n, o) {
		const r = new Date()
		r.setHours(0, 0, 0, 0)
		const a = t && ls(s, t) <= -1,
			l = e && ls(s, e) >= 1,
			c = n && ls(s, r) <= -1,
			h = o && ls(s, r) >= 1,
			d = i && i(s) === !1
		return a || l || d || c || h
	}
	function lu(s, t, e, i, n, o) {
		const r = new Date(),
			a = i && K(i),
			l = i && ot(i),
			c = e && K(e),
			h = e && ot(e),
			d = K(r),
			u = ot(r),
			p = l && a && (t > a || (t === a && s > l)),
			f = h && c && (t < c || (t === c && s < h)),
			b = n && (t < d || (t === d && s < u)),
			v = o && (t > d || (t === d && s > u))
		return p || f || b || v
	}
	function vl(s, t, e, i, n) {
		const o = t && K(t),
			r = e && K(e),
			a = K(new Date()),
			l = r && s > r,
			c = o && s < o,
			h = i && s < a,
			d = n && s > a
		return l || c || h || d
	}
	function xy(s, t, e, i, n, o, r, a) {
		const l = new Date()
		return (
			l.setHours(0, 0, 0, 0),
			((s && o && ls(o, l) < 0) || s) && (o = l),
			o && qs(t, o, e, i, n, o, r, a)
		)
	}
	function Cy(s, t, e, i, n, o, r, a) {
		const l = new Date()
		return (
			l.setHours(0, 0, 0, 0),
			((s && n && ls(n, l) < 0) || s) && (n = l),
			n && qs(t, n, e, i, n, o, r, a)
		)
	}
	function qs(s, t, e, i, n, o, r, a) {
		return e === 'days'
			? K(s) === K(t) && ot(s) === ot(t)
			: e === 'months'
			? K(s) === K(t)
			: e === 'years'
			? K(t) >= a && K(t) <= r
			: !1
	}
	const Ay = 'data-te-datepicker-modal-container-ref',
		wy = 'data-te-datepicker-dropdown-container-ref',
		ky = 'data-te-dropdown-backdrop-ref',
		Sy = 'data-te-datepicker-date-text-ref',
		cu = 'data-te-datepicker-view-ref',
		Oy = 'data-te-datepicker-previous-button-ref',
		Iy = 'data-te-datepicker-next-button-ref',
		Dy = 'data-te-datepicker-ok-button-ref',
		My = 'data-te-datepicker-cancel-button-ref',
		Ly = 'data-te-datepicker-clear-button-ref',
		$y = 'data-te-datepicker-view-change-button-ref'
	function Ry(s, t, e, i, n, o, r, a, l, c) {
		const h = ot(s),
			d = K(s),
			u = Tt(s),
			p = Lo(s),
			f = $('div'),
			b = `
        ${hu(s, h, d, t, e, i, n, o, r, a, c)}
    `,
			v = `
      ${Ny(u, p, h, n, c)}
      ${hu(s, h, d, t, e, i, n, o, r, a, c)}
    `
		return (
			n.inline
				? (g.addClass(f, c.datepickerDropdownContainer),
				  f.setAttribute(wy, l),
				  (f.innerHTML = b))
				: (g.addClass(f, c.modalContainer),
				  f.setAttribute(Ay, l),
				  (f.innerHTML = v)),
			f
		)
	}
	function Py(s) {
		const t = $('div')
		return g.addClass(t, s), t.setAttribute(ky, ''), t
	}
	function Ny(s, t, e, i, n) {
		return `
      <div class="${n.datepickerHeader}" data-te-datepicker-header>
        <div class="${n.datepickerTitle}">
          <span class="${n.datepickerTitleText}">${i.title}</span>
        </div>
        <div class="${n.datepickerDate}">
          <span class="${n.datepickerDateText}" ${Sy} >${i.weekdaysShort[t]}, ${i.monthsShort[e]} ${s}</span>
        </div>
      </div>
    `
	}
	function hu(s, t, e, i, n, o, r, a, l, c, h) {
		let d
		return (
			r.inline
				? (d = `
    <div class="${h.datepickerMain}">
      ${uu(t, e, r, h)}
      <div class="${h.datepickerView}" ${cu} tabindex="0">
        ${du(s, e, i, n, o, r, a, l, c, h)}
      </div>
    </div>
  `)
				: (d = `
    <div class="${h.datepickerMain}">
      ${uu(t, e, r, h)}
      <div class="${h.datepickerView}" ${cu} tabindex="0">
        ${du(s, e, i, n, o, r, a, l, c, h)}
      </div>
      ${By(r, h)}
    </div>
  `),
			d
		)
	}
	function du(s, t, e, i, n, o, r, a, l, c) {
		let h
		return (
			o.view === 'days'
				? (h = Po(s, e, o, c))
				: o.view === 'months'
				? (h = No(t, i, n, o, r, c))
				: (h = Bo(s, i, o, a, l, c)),
			h
		)
	}
	function uu(s, t, e, i) {
		return `
    <div class="${i.datepickerDateControls}">
      <button class="${
				i.datepickerViewChangeButton
			}" aria-label="${e.switchToMultiYearViewLabel}" ${$y}>
        ${e.monthsFull[s]} ${t} ${pe(e, i)}
      </button>
      <div class="${i.datepickerArrowControls}">
        <button class="${
					i.datepickerPreviousButton
				}" aria-label="${e.prevMonthLabel}" ${Oy}>${e.changeMonthIconTemplate}</button>
        <button class="${
					i.datepickerNextButton
				}" aria-label="${e.nextMonthLabel}" ${Iy}>${e.changeMonthIconTemplate}</button>
      </div>
    </div>
    `
	}
	function pe(s, t) {
		return `
  <span class="${t.datepickerViewChangeIcon}">
  ${s.viewChangeIconTemplate}
  </span>
  `
	}
	function By(s, t) {
		const e = `<button class="${t.datepickerFooterBtn}" aria-label="${s.okBtnLabel}" ${Dy}>${s.okBtnText}</button>`,
			i = `<button class="${t.datepickerFooterBtn}" aria-label="${s.cancelBtnLabel}" ${My}>${s.cancelBtnText}</button>`,
			n = `<button class="${t.datepickerFooterBtn} ${t.datepickerClearBtn}" aria-label="${s.clearBtnLabel}" ${Ly}>${s.clearBtnText}</button>`
		return `
        <div class="${t.datepickerFooter}">
          
        ${s.removeClearBtn ? '' : n}
        ${s.removeCancelBtn ? '' : i}
        ${s.removeOkBtn ? '' : e}
        </div>
      `
	}
	function Po(s, t, e, i) {
		const n = Hy(s, t, e),
			r = `
      <tr>
        ${e.weekdaysNarrow
					.map(
						(l, c) =>
							`<th class="${i.datepickerDayHeading}" scope="col" aria-label="${e.weekdaysFull[c]}">${l}</th>`
					)
					.join('')}
      </tr>
    `,
			a = n
				.map(
					l => `
        <tr>
          ${l
						.map(
							c => `
              <td
              class="${i.datepickerCell} ${i.datepickerCellSmall}"
              data-te-date="${K(c.date)}-${ot(c.date)}-${Tt(c.date)}"
              aria-label="${c.date}"
              aria-selected="${c.isSelected}"
              ${c.isSelected ? 'data-te-datepicker-cell-selected' : ''}
              ${
								!c.currentMonth || c.disabled
									? 'data-te-datepicker-cell-disabled'
									: ''
							}
              ${c.isToday ? 'data-te-datepicker-cell-current' : ''}
              >
                <div
                  class="${i.datepickerCellContent} ${
								i.datepickerCellContentSmall
							}"
                  style="${c.currentMonth ? 'display: block' : 'display: none'}"
                  >
                  ${c.dayNumber}
                  </div>
              </td>
            `
						)
						.join('')}
        </tr>
      `
				)
				.join('')
		return `
      <table class="${i.datepickerTable}">
        <thead>
          ${r}
        </thead>
        <tbody>
         ${a}
        </tbody>
      </table>
    `
	}
	function Hy(s, t, e) {
		const i = [],
			n = ot(s),
			o = ot(St(s, -1)),
			r = ot(St(s, 1)),
			a = K(s),
			l = by(a, n, e),
			c = bl(s),
			h = bl(St(s, -1)),
			d = 7
		let u = 1,
			p = !1
		for (let f = 1; f < d; f++) {
			const b = []
			if (f === 1) {
				const v = h - l + 1
				for (let T = v; T <= h; T++) {
					const x = ee(a, o, T)
					b.push({
						date: x,
						currentMonth: p,
						isSelected: t && yi(x, t),
						isToday: yi(x, rs()),
						dayNumber: Tt(x),
					})
				}
				p = !0
				const y = d - b.length
				for (let T = 0; T < y; T++) {
					const x = ee(a, n, u)
					b.push({
						date: x,
						currentMonth: p,
						isSelected: t && yi(x, t),
						isToday: yi(x, rs()),
						dayNumber: Tt(x),
						disabled: Ro(
							x,
							e.min,
							e.max,
							e.filter,
							e.disablePast,
							e.disableFuture
						),
					}),
						u++
				}
			} else
				for (let v = 1; v < 8; v++) {
					u > c && ((u = 1), (p = !1))
					const y = ee(a, p ? n : r, u)
					b.push({
						date: y,
						currentMonth: p,
						isSelected: t && yi(y, t),
						isToday: yi(y, rs()),
						dayNumber: Tt(y),
						disabled: Ro(
							y,
							e.min,
							e.max,
							e.filter,
							e.disablePast,
							e.disableFuture
						),
					}),
						u++
				}
			i.push(b)
		}
		return i
	}
	function No(s, t, e, i, n, o) {
		const r = Vy(i, n),
			a = ot(rs()),
			l = K(rs()),
			c = `
      ${r
				.map(
					h => `
          <tr>
            ${h
							.map(d => {
								const u = i.monthsShort.indexOf(d)
								return `
                <td class="${o.datepickerCell} ${o.datepickerCellLarge}"
                ${
									lu(u, s, i.min, i.max, i.disablePast, i.disableFuture)
										? 'data-te-datepicker-cell-disabled'
										: ''
								}
                
                data-te-month="${u}" data-te-year="${s}" aria-label="${d}, ${s}"
                ${u === e && s === t ? 'data-te-datepicker-cell-selected' : ''}
                ${
									u === a && s === l ? 'data-te-datepicker-cell-current' : ''
								}" data-te-month="${u}" data-te-year="${s}" aria-label="${d}, ${s}">
                  <div class="${o.datepickerCellContent} ${
									o.datepickerCellContentLarge
								}">${d}</div>
                </td>
              `
							})
							.join('')}
          </tr>
        `
				)
				.join('')}
    `
		return `
      <table class="${o.datepickerTable}">
        <tbody>
         ${c}
        </tbody>
      </table>
    `
	}
	function Vy(s, t) {
		const e = []
		let i = []
		for (let n = 0; n < s.monthsShort.length; n++)
			if ((i.push(s.monthsShort[n]), i.length === t)) {
				const o = i
				e.push(o), (i = [])
			}
		return e
	}
	function Bo(s, t, e, i, n, o) {
		const r = Fy(s, i, n),
			a = K(rs()),
			l = `
    ${r
			.map(
				c => `
        <tr>
          ${c
						.map(
							h => `
              <td class="${o.datepickerCell} ${
								o.datepickerCellLarge
							}"  aria-label="${h}" data-te-year="${h}"
              ${
								vl(h, e.min, e.max, e.disablePast, e.disableFuture)
									? 'data-te-datepicker-cell-disabled'
									: ''
							}
              ${h === t ? 'data-te-datepicker-cell-selected' : ''}
              ${h === a ? 'data-te-datepicker-cell-current' : ''}
              >
                <div class="${o.datepickerCellContent} ${
								o.datepickerCellContentLarge
							}">${h}</div>
              </td>
            `
						)
						.join('')}
        </tr>
      `
			)
			.join('')}
  `
		return `
      <table class="${o.datepickerTable}">
        <tbody>
        ${l}
        </tbody>
      </table>
    `
	}
	function Fy(s, t, e) {
		const i = [],
			n = K(s),
			o = $o(s, t),
			r = n - o
		let a = []
		for (let l = 0; l < t; l++)
			if ((a.push(r + l), a.length === e)) {
				const c = a
				i.push(c), (a = [])
			}
		return i
	}
	function Wy(s, t) {
		return `
    <button id="${s}" type="button" class="${t}" data-te-datepicker-toggle-button-ref data-te-datepicker-toggle-ref>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
      </svg>  
    </button>
  `
	}
	const cs = 37,
		ut = 38,
		hs = 39,
		ht = 40,
		Ti = 36,
		Ei = 35,
		yl = 33,
		Tl = 34,
		Et = 13,
		Ho = 32,
		xi = 27,
		Ci = 9,
		zy = 8,
		jy = 46,
		ie = 24,
		Vo = 4,
		Fo = 4,
		El = 'datepicker',
		Wo = 'te.datepicker',
		zo = `.${Wo}`,
		Yy = '.data-api',
		Ky = `close${zo}`,
		Uy = `open${zo}`,
		Xy = `dateChange${zo}`,
		jo = `click${zo}${Yy}`,
		pu = 'data-te-datepicker-modal-container-ref',
		fu = 'data-te-datepicker-dropdown-container-ref',
		Yo = '[data-te-datepicker-toggle-ref]',
		Gy = `[${pu}]`,
		qy = `[${fu}]`,
		Zy = '[data-te-datepicker-view-change-button-ref]',
		Qy = '[data-te-datepicker-previous-button-ref]',
		Jy = '[data-te-datepicker-next-button-ref]',
		tT = '[data-te-datepicker-ok-button-ref]',
		eT = '[data-te-datepicker-cancel-button-ref]',
		iT = '[data-te-datepicker-clear-button-ref]',
		sT = '[data-te-datepicker-view-ref]',
		nT = '[data-te-datepicker-toggle-button-ref]',
		oT = '[data-te-datepicker-date-text-ref]',
		rT = '[data-te-dropdown-backdrop-ref]',
		aT =
			'animate-[fade-in_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none',
		lT =
			'animate-[fade-out_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none',
		cT =
			'animate-[fade-in_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none',
		hT =
			'animate-[fade-out_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none',
		dT =
			'flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[328px] h-[512px] bg-white rounded-[0.6rem] shadow-lg z-[1066] xs:max-md:landscape:w-[475px] xs:max-md:landscape:h-[360px] xs:max-md:landscape:flex-row dark:bg-white',
		uT =
			'w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-black/40 z-[1065]',
		pT = 'relative h-full',
		fT =
			'xs:max-md:landscape:h-full h-[120px] px-6 bg-primary flex flex-col rounded-t-lg dark:bg-white',
		_T = 'h-8 flex flex-col justify-end',
		gT = 'text-[10px] font-normal uppercase tracking-[1.7px] text-white',
		mT = 'xs:max-md:landscape:mt-24 h-[72px] flex flex-col justify-end',
		bT = 'text-[34px] font-normal text-white',
		vT = 'outline-none px-3',
		yT = 'px-3 pt-2.5 pb-0 flex justify-between text-black/[64]',
		TT =
			'flex items-center outline-none p-2.5 text-neutral-500 font-medium text-[0.9rem] rounded-xl shadow-none bg-transparent m-0 border-none hover:bg-neutral-200 focus:bg-neutral-200  dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10',
		ET = 'mt-2.5',
		xT =
			'p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent mr-6 hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-auto',
		CT =
			'p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:rotate-180 [&>svg]:mx-auto',
		AT = 'h-14 flex absolute w-full bottom-0 justify-end items-center px-3',
		wT =
			'outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded-[10px] mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10',
		kT = 'mr-auto',
		ST = 'w-10 h-10 text-center text-[12px] font-normal dark:text-white',
		OT =
			'text-center data-[te-datepicker-cell-disabled]:text-neutral-300 data-[te-datepicker-cell-disabled]:cursor-default data-[te-datepicker-cell-disabled]:pointer-events-none data-[te-datepicker-cell-disabled]:hover:cursor-default hover:cursor-pointer group',
		IT = 'w-10 h-10 xs:max-md:landscape:w-8 xs:max-md:landscape:h-8',
		DT = 'w-[76px] h-[42px]',
		MT =
			'mx-auto group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-neutral-300 group-[[data-te-datepicker-cell-selected]]:bg-primary group-[[data-te-datepicker-cell-selected]]:text-white group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-neutral-100 group-[[data-te-datepicker-cell-focused]]:data-[te-datepicker-cell-selected]:bg-primary group-[[data-te-datepicker-cell-current]]:border-solid group-[[data-te-datepicker-cell-current]]:border-black group-[[data-te-datepicker-cell-current]]:border dark:group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-white/10 dark:group-[[data-te-datepicker-cell-current]]:border-white dark:text-white dark:group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-white/10 dark:group-[[data-te-datepicker-cell-disabled]]:text-neutral-500',
		LT = 'w-9 h-9 leading-9 rounded-[50%] text-[13px]',
		$T = 'w-[72px] h-10 leading-10 py-[1px] px-0.5 rounded-[999px]',
		RT = 'mx-auto w-[304px]',
		PT =
			'flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200',
		NT =
			'inline-block pointer-events-none ml-[3px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-neutral-500 dark:[&>svg]:fill-white',
		BT =
			'w-[328px] h-[380px] bg-white rounded-lg shadow-[0px_2px_15px_-3px_rgba(0,0,0,.07),_0px_10px_20px_-2px_rgba(0,0,0,.04)] z-[1066] dark:bg-white',
		HT = {
			title: 'Select date',
			container: 'body',
			disablePast: !1,
			disableFuture: !1,
			monthsFull: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			monthsShort: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
			weekdaysFull: [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			],
			weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			weekdaysNarrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			okBtnText: 'Ok',
			clearBtnText: 'Clear',
			cancelBtnText: 'Cancel',
			okBtnLabel: 'Confirm selection',
			clearBtnLabel: 'Clear selection',
			cancelBtnLabel: 'Cancel selection',
			nextMonthLabel: 'Next month',
			prevMonthLabel: 'Previous month',
			nextYearLabel: 'Next year',
			prevYearLabel: 'Previous year',
			changeMonthIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  `,
			nextMultiYearLabel: 'Next 24 years',
			prevMultiYearLabel: 'Previous 24 years',
			switchToMultiYearViewLabel: 'Choose year and month',
			switchToMonthViewLabel: 'Choose date',
			switchToDayViewLabel: 'Choose date',
			startDate: null,
			startDay: 0,
			format: 'dd/mm/yyyy',
			view: 'days',
			viewChangeIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  `,
			min: null,
			max: null,
			filter: null,
			inline: !1,
			toggleButton: !0,
			disableToggleButton: !1,
			disableInput: !1,
			animations: !0,
			confirmDateOnSelect: !1,
			removeOkBtn: !1,
			removeCancelBtn: !1,
			removeClearBtn: !1,
		},
		VT = {
			title: 'string',
			container: 'string',
			disablePast: 'boolean',
			disableFuture: 'boolean',
			monthsFull: 'array',
			monthsShort: 'array',
			weekdaysFull: 'array',
			weekdaysShort: 'array',
			weekdaysNarrow: 'array',
			okBtnText: 'string',
			clearBtnText: 'string',
			cancelBtnText: 'string',
			okBtnLabel: 'string',
			clearBtnLabel: 'string',
			cancelBtnLabel: 'string',
			nextMonthLabel: 'string',
			prevMonthLabel: 'string',
			nextYearLabel: 'string',
			prevYearLabel: 'string',
			nextMultiYearLabel: 'string',
			prevMultiYearLabel: 'string',
			changeMonthIconTemplate: 'string',
			switchToMultiYearViewLabel: 'string',
			switchToMonthViewLabel: 'string',
			switchToDayViewLabel: 'string',
			startDate: '(null|string|date)',
			startDay: 'number',
			format: 'string',
			view: 'string',
			viewChangeIconTemplate: 'string',
			min: '(null|string|date)',
			max: '(null|string|date)',
			filter: '(null|function)',
			inline: 'boolean',
			toggleButton: 'boolean',
			disableToggleButton: 'boolean',
			disableInput: 'boolean',
			animations: 'boolean',
			confirmDateOnSelect: 'boolean',
			removeOkBtn: 'boolean',
			removeCancelBtn: 'boolean',
			removeClearBtn: 'boolean',
		},
		FT = {
			fadeIn: aT,
			fadeOut: lT,
			fadeInShort: cT,
			fadeOutShort: hT,
			modalContainer: dT,
			datepickerBackdrop: uT,
			datepickerMain: pT,
			datepickerHeader: fT,
			datepickerTitle: _T,
			datepickerTitleText: gT,
			datepickerDate: mT,
			datepickerDateText: bT,
			datepickerView: vT,
			datepickerDateControls: yT,
			datepickerViewChangeButton: TT,
			datepickerViewChangeIcon: NT,
			datepickerArrowControls: ET,
			datepickerPreviousButton: xT,
			datepickerNextButton: CT,
			datepickerFooter: AT,
			datepickerFooterBtn: wT,
			datepickerClearBtn: kT,
			datepickerDayHeading: ST,
			datepickerCell: OT,
			datepickerCellSmall: IT,
			datepickerCellLarge: DT,
			datepickerCellContent: MT,
			datepickerCellContentSmall: LT,
			datepickerCellContentLarge: $T,
			datepickerTable: RT,
			datepickerToggleButton: PT,
			datepickerDropdownContainer: BT,
		},
		WT = {
			fadeIn: 'string',
			fadeOut: 'string',
			fadeInShort: 'string',
			fadeOutShort: 'string',
			modalContainer: 'string',
			datepickerBackdrop: 'string',
			datepickerMain: 'string',
			datepickerHeader: 'string',
			datepickerTitle: 'string',
			datepickerTitleText: 'string',
			datepickerDate: 'string',
			datepickerDateText: 'string',
			datepickerView: 'string',
			datepickerDateControls: 'string',
			datepickerViewChangeButton: 'string',
			datepickerArrowControls: 'string',
			datepickerPreviousButton: 'string',
			datepickerNextButton: 'string',
			datepickerFooter: 'string',
			datepickerFooterBtn: 'string',
			datepickerClearBtn: 'string',
			datepickerDayHeading: 'string',
			datepickerCell: 'string',
			datepickerCellSmall: 'string',
			datepickerCellLarge: 'string',
			datepickerCellContent: 'string',
			datepickerCellContentSmall: 'string',
			datepickerCellContentLarge: 'string',
			datepickerTable: 'string',
			datepickerToggleButton: 'string',
			datepickerDropdownContainer: 'string',
		}
	class xl {
		constructor(t, e, i) {
			;(this._element = t),
				(this._input = m.findOne('input', this._element)),
				(this._options = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._activeDate = new Date()),
				(this._selectedDate = null),
				(this._selectedYear = null),
				(this._selectedMonth = null),
				(this._headerDate = null),
				(this._headerYear = null),
				(this._headerMonth = null),
				(this._view = this._options.view),
				(this._popper = null),
				(this._focusTrap = null),
				(this._isOpen = !1),
				(this._toggleButtonId = bt('datepicker-toggle-')),
				(this._animations =
					!window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
					this._options.animations),
				(this._scrollBar = new Qi()),
				this._element && O.setData(t, Wo, this),
				this._init(),
				this.toggleButton &&
					this._options.disableToggle &&
					(this.toggleButton.disabled = 'true'),
				this._options.disableInput && (this._input.disabled = 'true')
		}
		static get NAME() {
			return El
		}
		get container() {
			return (
				m.findOne(`[${pu}='${this._toggleButtonId}']`) ||
				m.findOne(`[${fu}='${this._toggleButtonId}']`)
			)
		}
		get options() {
			return this._options
		}
		get activeCell() {
			let t
			return (
				this._view === 'days' && (t = this._getActiveDayCell()),
				this._view === 'months' && (t = this._getActiveMonthCell()),
				this._view === 'years' && (t = this._getActiveYearCell()),
				t
			)
		}
		get activeDay() {
			return Tt(this._activeDate)
		}
		get activeMonth() {
			return ot(this._activeDate)
		}
		get activeYear() {
			return K(this._activeDate)
		}
		get firstYearInView() {
			return this.activeYear - $o(this._activeDate, ie)
		}
		get lastYearInView() {
			return this.firstYearInView + ie - 1
		}
		get viewChangeButton() {
			return m.findOne(Zy, this.container)
		}
		get previousButton() {
			return m.findOne(Qy, this.container)
		}
		get nextButton() {
			return m.findOne(Jy, this.container)
		}
		get okButton() {
			return m.findOne(tT, this.container)
		}
		get cancelButton() {
			return m.findOne(eT, this.container)
		}
		get clearButton() {
			return m.findOne(iT, this.container)
		}
		get datesContainer() {
			return m.findOne(sT, this.container)
		}
		get toggleButton() {
			return m.findOne(nT, this._element)
		}
		update(t = {}) {
			this._options = this._getConfig({ ...this._options, ...t })
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._element)
			if (
				((t = { ...HT, ...e, ...t }),
				L(El, t, VT),
				t.max && typeof t.max == 'string' && (t.max = new Date(t.max)),
				t.min && typeof t.min == 'string' && (t.min = new Date(t.min)),
				t.startDay && t.startDay !== 0)
			) {
				const i = this._getNewDaysOrderArray(t)
				t.weekdaysNarrow = i
			}
			return t
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...FT, ...e, ...t }), L(El, t, WT), t
		}
		_getContainer() {
			return m.findOne(this._options.container)
		}
		_getNewDaysOrderArray(t) {
			const e = t.startDay,
				i = t.weekdaysNarrow
			return i.slice(e).concat(i.slice(0, e))
		}
		_init() {
			!this.toggleButton &&
				this._options.toggleButton &&
				(this._appendToggleButton(),
				(this._input.readOnly || this._input.disabled) &&
					(this.toggleButton.style.pointerEvents = 'none')),
				this._listenToUserInput(),
				this._listenToToggleClick(),
				this._listenToToggleKeydown()
		}
		_appendToggleButton() {
			const t = Wy(this._toggleButtonId, this._classes.datepickerToggleButton)
			this._element.insertAdjacentHTML('beforeend', t)
		}
		open() {
			if (this._input.readOnly || this._input.disabled) return
			const t = _.trigger(this._element, Uy)
			if (this._isOpen || t.defaultPrevented) return
			this._setInitialDate()
			const e = Py(this._classes.datepickerBackdrop),
				i = Ry(
					this._activeDate,
					this._selectedDate,
					this._selectedYear,
					this._selectedMonth,
					this._options,
					Fo,
					ie,
					Vo,
					this._toggleButtonId,
					this._classes
				)
			this._options.inline
				? this._openDropdown(i)
				: (this._openModal(e, i), this._scrollBar.hide()),
				this._animations &&
					(g.addClass(this.container, this._classes.fadeIn),
					g.addClass(e, this._classes.fadeInShort)),
				this._setFocusTrap(this.container),
				this._listenToDateSelection(),
				this._addControlsListeners(),
				this._updateControlsDisabledState(),
				this._listenToEscapeClick(),
				this._listenToKeyboardNavigation(),
				this._listenToDatesContainerFocus(),
				this._listenToDatesContainerBlur(),
				this._asyncFocusDatesContainer(),
				this._updateViewControlsAndAttributes(this._view),
				(this._isOpen = !0),
				setTimeout(() => {
					this._listenToOutsideClick()
				}, 0)
		}
		_openDropdown(t) {
			;(this._popper = Fe(this._input, t, { placement: 'bottom-start' })),
				this._getContainer().appendChild(t)
		}
		_openModal(t, e) {
			const i = this._getContainer()
			i.appendChild(t), i.appendChild(e)
		}
		_setFocusTrap(t) {
			;(this._focusTrap = new Vs(t, {
				event: 'keydown',
				condition: e => e.key === 'Tab',
			})),
				this._focusTrap.trap()
		}
		_listenToUserInput() {
			_.on(this._input, 'input', t => {
				this._handleUserInput(t.target.value)
			})
		}
		_listenToToggleClick() {
			_.on(this._element, jo, Yo, t => {
				t.preventDefault(), this.open()
			})
		}
		_listenToToggleKeydown() {
			_.on(this._element, 'keydown', Yo, t => {
				t.keyCode === Et && !this._isOpen && this.open()
			})
		}
		_listenToDateSelection() {
			_.on(this.datesContainer, 'click', t => {
				this._handleDateSelection(t)
			})
		}
		_handleDateSelection(t) {
			const e =
					t.target.nodeName === 'DIV'
						? t.target.parentNode.dataset
						: t.target.dataset,
				i = t.target.nodeName === 'DIV' ? t.target.parentNode : t.target
			if ((e.teDate && this._pickDay(e.teDate, i), e.teMonth && e.teYear)) {
				const n = parseInt(e.teMonth, 10),
					o = parseInt(e.teYear, 10)
				this._pickMonth(n, o)
			}
			if (e.teYear && !e.teMonth) {
				const n = parseInt(e.teYear, 10)
				this._pickYear(n)
			}
			this._options.inline ||
				this._updateHeaderDate(
					this._activeDate,
					this._options.monthsShort,
					this._options.weekdaysShort
				)
		}
		_updateHeaderDate(t, e, i) {
			const n = m.findOne(oT, this.container),
				o = ot(t),
				r = Tt(t),
				a = Lo(t)
			n.innerHTML = `${i[a]}, ${e[o]} ${r}`
		}
		_addControlsListeners() {
			_.on(this.nextButton, 'click', () => {
				this._view === 'days'
					? this.nextMonth()
					: this._view === 'years'
					? this.nextYears()
					: this.nextYear(),
					this._updateControlsDisabledState()
			}),
				_.on(this.previousButton, 'click', () => {
					this._view === 'days'
						? this.previousMonth()
						: this._view === 'years'
						? this.previousYears()
						: this.previousYear(),
						this._updateControlsDisabledState()
				}),
				_.on(this.viewChangeButton, 'click', () => {
					this._view === 'days'
						? this._changeView('years')
						: (this._view === 'years' || this._view === 'months') &&
						  this._changeView('days')
				}),
				this._options.inline || this._listenToFooterButtonsClick()
		}
		_listenToFooterButtonsClick() {
			_.on(this.okButton, 'click', () => this.handleOk()),
				_.on(this.cancelButton, 'click', () => this.handleCancel()),
				_.on(this.clearButton, 'click', () => this.handleClear())
		}
		_listenToOutsideClick() {
			_.on(document, jo, t => {
				const e = t.target === this.container,
					i = this.container && this.container.contains(t.target)
				!e && !i && this.close()
			})
		}
		_listenToEscapeClick() {
			_.on(document, 'keydown', t => {
				t.keyCode === xi && this._isOpen && this.close()
			})
		}
		_listenToKeyboardNavigation() {
			_.on(this.datesContainer, 'keydown', t => {
				this._handleKeydown(t)
			})
		}
		_listenToDatesContainerFocus() {
			_.on(this.datesContainer, 'focus', () => {
				this._focusActiveCell(this.activeCell)
			})
		}
		_listenToDatesContainerBlur() {
			_.on(this.datesContainer, 'blur', () => {
				this._removeCurrentFocusStyles()
			})
		}
		_handleKeydown(t) {
			this._view === 'days' && this._handleDaysViewKeydown(t),
				this._view === 'months' && this._handleMonthsViewKeydown(t),
				this._view === 'years' && this._handleYearsViewKeydown(t)
		}
		_handleDaysViewKeydown(t) {
			const e = this._activeDate,
				i = this.activeCell
			switch (t.keyCode) {
				case cs:
					this._activeDate = as(this._activeDate, et() ? 1 : -1)
					break
				case hs:
					this._activeDate = as(this._activeDate, et() ? -1 : 1)
					break
				case ut:
					this._activeDate = as(this._activeDate, -7)
					break
				case ht:
					this._activeDate = as(this._activeDate, 7)
					break
				case Ti:
					this._activeDate = as(this._activeDate, 1 - Tt(this._activeDate))
					break
				case Ei:
					this._activeDate = as(
						this._activeDate,
						bl(this._activeDate) - Tt(this._activeDate)
					)
					break
				case yl:
					this._activeDate = St(this._activeDate, -1)
					break
				case Tl:
					this._activeDate = St(this._activeDate, 1)
					break
				case Et:
				case Ho:
					this._selectDate(this._activeDate),
						this._handleDateSelection(t),
						t.preventDefault()
					return
				default:
					return
			}
			qs(
				e,
				this._activeDate,
				this._view,
				ie,
				this._options.min,
				this._options.max
			) || this._changeView('days'),
				this._removeHighlightFromCell(i),
				this._focusActiveCell(this.activeCell),
				t.preventDefault()
		}
		_asyncFocusDatesContainer() {
			setTimeout(() => {
				this.datesContainer.focus()
			}, 0)
		}
		_focusActiveCell(t) {
			t && t.setAttribute('data-te-datepicker-cell-focused', '')
		}
		_removeHighlightFromCell(t) {
			t && t.removeAttribute('data-te-datepicker-cell-focused')
		}
		_getActiveDayCell() {
			const t = m.find('td', this.datesContainer)
			return Array.from(t).find(i => {
				const n = au(i.dataset.teDate)
				return yi(n, this._activeDate)
			})
		}
		_handleMonthsViewKeydown(t) {
			const e = this._activeDate,
				i = this.activeCell
			switch (t.keyCode) {
				case cs:
					this._activeDate = St(this._activeDate, et() ? 1 : -1)
					break
				case hs:
					this._activeDate = St(this._activeDate, et() ? -1 : 1)
					break
				case ut:
					this._activeDate = St(this._activeDate, -4)
					break
				case ht:
					this._activeDate = St(this._activeDate, 4)
					break
				case Ti:
					this._activeDate = St(this._activeDate, -this.activeMonth)
					break
				case Ei:
					this._activeDate = St(this._activeDate, 11 - this.activeMonth)
					break
				case yl:
					this._activeDate = kt(this._activeDate, -1)
					break
				case Tl:
					this._activeDate = kt(this._activeDate, 1)
					break
				case Et:
				case Ho:
					this._selectMonth(this.activeMonth)
					return
				default:
					return
			}
			qs(
				e,
				this._activeDate,
				this._view,
				ie,
				this._options.min,
				this._options.max
			) || this._changeView('months'),
				this._removeHighlightFromCell(i),
				this._focusActiveCell(this.activeCell),
				t.preventDefault()
		}
		_getActiveMonthCell() {
			const t = m.find('td', this.datesContainer)
			return Array.from(t).find(i => {
				const n = parseInt(i.dataset.teYear, 10),
					o = parseInt(i.dataset.teMonth, 10)
				return n === this.activeYear && o === this.activeMonth
			})
		}
		_handleYearsViewKeydown(t) {
			const e = this._activeDate,
				i = this.activeCell,
				n = 4,
				o = 24
			switch (t.keyCode) {
				case cs:
					this._activeDate = kt(this._activeDate, et() ? 1 : -1)
					break
				case hs:
					this._activeDate = kt(this._activeDate, et() ? -1 : 1)
					break
				case ut:
					this._activeDate = kt(this._activeDate, -n)
					break
				case ht:
					this._activeDate = kt(this._activeDate, n)
					break
				case Ti:
					this._activeDate = kt(this._activeDate, -$o(this._activeDate, o))
					break
				case Ei:
					this._activeDate = kt(
						this._activeDate,
						o - $o(this._activeDate, o) - 1
					)
					break
				case yl:
					this._activeDate = kt(this._activeDate, -o)
					break
				case Tl:
					this._activeDate = kt(this._activeDate, o)
					break
				case Et:
				case Ho:
					this._selectYear(this.activeYear)
					return
				default:
					return
			}
			qs(
				e,
				this._activeDate,
				this._view,
				ie,
				this._options.min,
				this._options.max
			) || this._changeView('years'),
				this._removeHighlightFromCell(i),
				this._focusActiveCell(this.activeCell),
				t.preventDefault()
		}
		_getActiveYearCell() {
			const t = m.find('td', this.datesContainer)
			return Array.from(t).find(
				i => parseInt(i.dataset.teYear, 10) === this.activeYear
			)
		}
		_setInitialDate() {
			this._input.value
				? this._handleUserInput(this._input.value)
				: this._options.startDate
				? (this._activeDate = new Date(this._options.startDate))
				: (this._activeDate = new Date())
		}
		close() {
			const t = _.trigger(this._element, Ky)
			!this._isOpen ||
				t.defaultPrevented ||
				(this._removeDatepickerListeners(),
				this._animations && g.addClass(this.container, this._classes.fadeOut),
				this._options.inline ? this._closeDropdown() : this._closeModal(),
				(this._isOpen = !1),
				(this._view = this._options.view),
				this.toggleButton ? this.toggleButton.focus() : this._input.focus())
		}
		_closeDropdown() {
			const t = m.findOne(qy),
				e = this._getContainer()
			window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
				(t && e.removeChild(t), this._popper && this._popper.destroy()),
				t.addEventListener('animationend', () => {
					t && e.removeChild(t), this._popper && this._popper.destroy()
				}),
				this._removeFocusTrap()
		}
		_closeModal() {
			const t = m.findOne(rT),
				e = m.findOne(Gy)
			!e ||
				!t ||
				(this._animations
					? (g.addClass(t, this._classes.fadeOutShort),
					  t.addEventListener('animationend', () => {
							this._removePicker(t, e), this._scrollBar.reset()
					  }))
					: (this._removePicker(t, e), this._scrollBar.reset()))
		}
		_removePicker(t, e) {
			const i = this._getContainer()
			i.removeChild(t), i.removeChild(e)
		}
		_removeFocusTrap() {
			this._focusTrap && (this._focusTrap.disable(), (this._focusTrap = null))
		}
		_removeDatepickerListeners() {
			_.off(this.nextButton, 'click'),
				_.off(this.previousButton, 'click'),
				_.off(this.viewChangeButton, 'click'),
				_.off(this.okButton, 'click'),
				_.off(this.cancelButton, 'click'),
				_.off(this.clearButton, 'click'),
				_.off(this.datesContainer, 'click'),
				_.off(this.datesContainer, 'keydown'),
				_.off(this.datesContainer, 'focus'),
				_.off(this.datesContainer, 'blur'),
				_.off(document, jo)
		}
		dispose() {
			this._isOpen && this.close(), this._removeInputAndToggleListeners()
			const t = m.findOne(`#${this._toggleButtonId}`)
			t && this._element.removeChild(t),
				O.removeData(this._element, Wo),
				(this._element = null),
				(this._input = null),
				(this._options = null),
				(this._activeDate = null),
				(this._selectedDate = null),
				(this._selectedYear = null),
				(this._selectedMonth = null),
				(this._headerDate = null),
				(this._headerYear = null),
				(this._headerMonth = null),
				(this._view = null),
				(this._popper = null),
				(this._focusTrap = null)
		}
		_removeInputAndToggleListeners() {
			_.off(this._input, 'input'),
				_.off(this._element, jo, Yo),
				_.off(this._element, 'keydown', Yo)
		}
		handleOk() {
			this._confirmSelection(this._headerDate), this.close()
		}
		_selectDate(t, e = this.activeCell) {
			const {
				min: i,
				max: n,
				filter: o,
				disablePast: r,
				disableFuture: a,
			} = this._options
			Ro(t, i, n, o, r, a) ||
				(this._removeCurrentSelectionStyles(),
				this._removeCurrentFocusStyles(),
				this._addSelectedStyles(e),
				(this._selectedDate = t),
				(this._selectedYear = K(t)),
				(this._selectedMonth = ot(t)),
				(this._headerDate = t),
				(this._options.inline || this.options.confirmDateOnSelect) &&
					(this._confirmSelection(t), this.close()))
		}
		_selectYear(t, e = this.activeCell) {
			this._removeCurrentSelectionStyles(),
				this._removeCurrentFocusStyles(),
				this._addSelectedStyles(e),
				(this._headerYear = t),
				this._asyncChangeView('months')
		}
		_selectMonth(t, e = this.activeCell) {
			this._removeCurrentSelectionStyles(),
				this._removeCurrentFocusStyles(),
				this._addSelectedStyles(e),
				(this._headerMonth = t),
				this._asyncChangeView('days')
		}
		_removeSelectedStyles(t) {
			t && t.removeAttribute('data-te-datepicker-cell-selected')
		}
		_addSelectedStyles(t) {
			t && t.setAttribute('data-te-datepicker-cell-selected', '')
		}
		_confirmSelection(t) {
			if (t) {
				const e = this.formatDate(t)
				;(this._input.value = e),
					_.trigger(this._element, Xy, { date: t }),
					_.trigger(this._input, 'input')
			}
		}
		handleCancel() {
			;(this._selectedDate = null),
				(this._selectedYear = null),
				(this._selectedMonth = null),
				this.close()
		}
		handleClear() {
			;(this._selectedDate = null),
				(this._selectedMonth = null),
				(this._selectedYear = null),
				(this._headerDate = null),
				(this._headerMonth = null),
				(this._headerYear = null),
				this._removeCurrentSelectionStyles(),
				(this._input.value = ''),
				this._setInitialDate(),
				this._changeView('days'),
				this._updateHeaderDate(
					this._activeDate,
					this._options.monthsShort,
					this._options.weekdaysShort
				)
		}
		_removeCurrentSelectionStyles() {
			const t = m.findOne('[data-te-datepicker-cell-selected]', this.container)
			t && t.removeAttribute('data-te-datepicker-cell-selected')
		}
		_removeCurrentFocusStyles() {
			const t = m.findOne('[data-te-datepicker-cell-focused]', this.container)
			t && t.removeAttribute('data-te-datepicker-cell-focused')
		}
		formatDate(t) {
			const e = Tt(t),
				i = this._addLeadingZero(Tt(t)),
				n = this._options.weekdaysShort[Lo(t)],
				o = this._options.weekdaysFull[Lo(t)],
				r = ot(t) + 1,
				a = this._addLeadingZero(ot(t) + 1),
				l = this._options.monthsShort[ot(t)],
				c = this._options.monthsFull[ot(t)],
				h = K(t).toString().length === 2 ? K(t) : K(t).toString().slice(2, 4),
				d = K(t),
				u = this._options.format.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
			let p = ''
			return (
				u.forEach(f => {
					switch (f) {
						case 'dddd':
							f = f.replace(f, o)
							break
						case 'ddd':
							f = f.replace(f, n)
							break
						case 'dd':
							f = f.replace(f, i)
							break
						case 'd':
							f = f.replace(f, e)
							break
						case 'mmmm':
							f = f.replace(f, c)
							break
						case 'mmm':
							f = f.replace(f, l)
							break
						case 'mm':
							f = f.replace(f, a)
							break
						case 'm':
							f = f.replace(f, r)
							break
						case 'yyyy':
							f = f.replace(f, d)
							break
						case 'yy':
							f = f.replace(f, h)
							break
					}
					p += f
				}),
				p
			)
		}
		_addLeadingZero(t) {
			return parseInt(t, 10) < 10 ? `0${t}` : t
		}
		_pickDay(t, e) {
			const i = au(t),
				{
					min: n,
					max: o,
					filter: r,
					disablePast: a,
					disableFuture: l,
				} = this._options
			Ro(i, n, o, r, a, l) || ((this._activeDate = i), this._selectDate(i, e))
		}
		_pickYear(t) {
			const { min: e, max: i, disablePast: n, disableFuture: o } = this._options
			if (vl(t, e, i, n, o)) return
			const r = ee(t, this.activeMonth, this.activeDay)
			;(this._activeDate = r), (this._selectedDate = r), this._selectYear(t)
		}
		_pickMonth(t, e) {
			const { min: i, max: n, disablePast: o, disableFuture: r } = this._options
			if (lu(t, e, i, n, o, r) || vl(e, i, n, o, r)) return
			const a = ee(e, t, this.activeDay)
			;(this._activeDate = a), this._selectMonth(t)
		}
		nextMonth() {
			const t = St(this._activeDate, 1),
				e = Po(t, this._headerDate, this._options, this._classes)
			;(this._activeDate = t),
				(this.viewChangeButton.textContent = `${
					this._options.monthsFull[this.activeMonth]
				} ${this.activeYear}`),
				(this.viewChangeButton.innerHTML += pe(this._options, this._classes)),
				(this.datesContainer.innerHTML = e)
		}
		previousMonth() {
			const t = St(this._activeDate, -1)
			this._activeDate = t
			const e = Po(t, this._headerDate, this._options, this._classes)
			;(this.viewChangeButton.textContent = `${
				this._options.monthsFull[this.activeMonth]
			} ${this.activeYear}`),
				(this.viewChangeButton.innerHTML += pe(this._options, this._classes)),
				(this.datesContainer.innerHTML = e)
		}
		nextYear() {
			const t = kt(this._activeDate, 1)
			;(this._activeDate = t),
				(this.viewChangeButton.textContent = `${this.activeYear}`),
				(this.viewChangeButton.innerHTML += pe(this._options, this._classes))
			const e = No(
				this.activeYear,
				this._selectedYear,
				this._selectedMonth,
				this._options,
				Fo,
				this._classes
			)
			this.datesContainer.innerHTML = e
		}
		previousYear() {
			const t = kt(this._activeDate, -1)
			;(this._activeDate = t),
				(this.viewChangeButton.textContent = `${this.activeYear}`),
				(this.viewChangeButton.innerHTML += pe(this._options, this._classes))
			const e = No(
				this.activeYear,
				this._selectedYear,
				this._selectedMonth,
				this._options,
				Fo,
				this._classes
			)
			this.datesContainer.innerHTML = e
		}
		nextYears() {
			const t = kt(this._activeDate, 24)
			this._activeDate = t
			const e = Bo(t, this._selectedYear, this._options, ie, Vo, this._classes)
			;(this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`),
				(this.viewChangeButton.innerHTML += pe(this._options, this._classes)),
				(this.datesContainer.innerHTML = e)
		}
		previousYears() {
			const t = kt(this._activeDate, -24)
			this._activeDate = t
			const e = Bo(t, this._selectedYear, this._options, ie, Vo, this._classes)
			;(this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`),
				(this.viewChangeButton.innerHTML += pe(this._options, this._classes)),
				(this.datesContainer.innerHTML = e)
		}
		_asyncChangeView(t) {
			setTimeout(() => {
				this._changeView(t)
			}, 0)
		}
		_changeView(t) {
			;(this._view = t),
				this.datesContainer.blur(),
				t === 'days' &&
					(this.datesContainer.innerHTML = Po(
						this._activeDate,
						this._headerDate,
						this._options,
						this._classes
					)),
				t === 'months' &&
					(this.datesContainer.innerHTML = No(
						this.activeYear,
						this._selectedYear,
						this._selectedMonth,
						this._options,
						Fo,
						this._classes
					)),
				t === 'years' &&
					(this.datesContainer.innerHTML = Bo(
						this._activeDate,
						this._selectedYear,
						this._options,
						ie,
						Vo,
						this._classes
					)),
				this.datesContainer.focus(),
				this._updateViewControlsAndAttributes(t),
				this._updateControlsDisabledState()
		}
		_updateViewControlsAndAttributes(t) {
			t === 'days' &&
				((this.viewChangeButton.textContent = `${
					this._options.monthsFull[this.activeMonth]
				} ${this.activeYear}`),
				(this.viewChangeButton.innerHTML += pe(this._options, this._classes)),
				this.viewChangeButton.setAttribute(
					'aria-label',
					this._options.switchToMultiYearViewLabel
				),
				this.previousButton.setAttribute(
					'aria-label',
					this._options.prevMonthLabel
				),
				this.nextButton.setAttribute(
					'aria-label',
					this._options.nextMonthLabel
				)),
				t === 'months' &&
					((this.viewChangeButton.textContent = `${this.activeYear}`),
					(this.viewChangeButton.innerHTML += pe(this._options, this._classes)),
					this.viewChangeButton.setAttribute(
						'aria-label',
						this._options.switchToDayViewLabel
					),
					this.previousButton.setAttribute(
						'aria-label',
						this._options.prevYearLabel
					),
					this.nextButton.setAttribute(
						'aria-label',
						this._options.nextYearLabel
					)),
				t === 'years' &&
					((this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`),
					(this.viewChangeButton.innerHTML += pe(this._options, this._classes)),
					this.viewChangeButton.setAttribute(
						'aria-label',
						this._options.switchToMonthViewLabel
					),
					this.previousButton.setAttribute(
						'aria-label',
						this._options.prevMultiYearLabel
					),
					this.nextButton.setAttribute(
						'aria-label',
						this._options.nextMultiYearLabel
					))
		}
		_updateControlsDisabledState() {
			xy(
				this._options.disableFuture,
				this._activeDate,
				this._view,
				ie,
				this._options.min,
				this._options.max,
				this.lastYearInView,
				this.firstYearInView
			)
				? (this.nextButton.disabled = !0)
				: (this.nextButton.disabled = !1),
				Cy(
					this._options.disablePast,
					this._activeDate,
					this._view,
					ie,
					this._options.min,
					this._options.max,
					this.lastYearInView,
					this.firstYearInView
				)
					? (this.previousButton.disabled = !0)
					: (this.previousButton.disabled = !1)
		}
		_handleUserInput(t) {
			const e = this._getDelimeters(this._options.format),
				i = this._parseDate(t, this._options.format, e)
			yy(i)
				? ((this._activeDate = i),
				  (this._selectedDate = i),
				  (this._selectedYear = K(i)),
				  (this._selectedMonth = ot(i)),
				  (this._headerDate = i))
				: ((this._activeDate = new Date()),
				  (this._selectedDate = null),
				  (this._selectedMonth = null),
				  (this._selectedYear = null),
				  (this._headerDate = null),
				  (this._headerMonth = null),
				  (this._headerYear = null))
		}
		_getDelimeters(t) {
			return t.match(/[^(dmy)]{1,}/g)
		}
		_parseDate(t, e, i) {
			let n
			i[0] !== i[1] ? (n = i[0] + i[1]) : (n = i[0])
			const o = new RegExp(`[${n}]`),
				r = t.split(o),
				a = e.split(o),
				l = e.indexOf('mmm') !== -1,
				c = []
			for (let b = 0; b < a.length; b++)
				a[b].indexOf('yy') !== -1 && (c[0] = { value: r[b], format: a[b] }),
					a[b].indexOf('m') !== -1 && (c[1] = { value: r[b], format: a[b] }),
					a[b].indexOf('d') !== -1 &&
						a[b].length <= 2 &&
						(c[2] = { value: r[b], format: a[b] })
			let h
			e.indexOf('mmmm') !== -1
				? (h = this._options.monthsFull)
				: (h = this._options.monthsShort)
			const d = Number(c[0].value),
				u = l
					? this.getMonthNumberByMonthName(c[1].value, h)
					: Number(c[1].value) - 1,
				p = Number(c[2].value)
			return ee(d, u, p)
		}
		getMonthNumberByMonthName(t, e) {
			return e.findIndex(i => i === t)
		}
		static getInstance(t) {
			return O.getData(t, Wo)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const zT = (
			{
				format24: s,
				okLabel: t,
				cancelLabel: e,
				headID: i,
				footerID: n,
				bodyID: o,
				pickerID: r,
				clearLabel: a,
				inline: l,
				showClearBtn: c,
				amLabel: h,
				pmLabel: d,
			},
			u
		) => {
			const p = `<div id='${r}' class='${
					u.timepickerWrapper
				}' data-te-timepicker-wrapper>
      <div class="${u.timepickerContainer}">
        <div class="${
					u.timepickerElements
				}" data-te-timepicker-elements-wrapper>
        <div id='${i}' class='${u.timepickerHead}' style='padding-right:${
					s ? 50 : 10
				}px'>
        <div class='${u.timepickerHeadContent}'>
            <div class="${u.timepickerCurrentWrapper}">
              <span class="${u.timepickerCurrentButtonWrapper}">
                <button type='button' class='${
									u.timepickerCurrentButton
								}' tabindex="0" data-te-timepicker-active data-te-timepicker-current data-te-timepicker-hour data-te-ripple-init>21</button>
              </span>
              <button type='button' class='${
								u.timepickerDot
							}' disabled>:</button>
            <span class="${u.timepickerCurrentButtonWrapper}">
              <button type='button' class='${
								u.timepickerCurrentButton
							}' tabindex="0" data-te-timepicker-current data-te-timepicker-minute data-te-ripple-init>21</button>
            </span>
            </div>
            ${
							s
								? ''
								: `<div class="${u.timepickerModeWrapper}">
                  <button type='button' class="${u.timepickerModeAm}" tabindex="0" data-te-timepicker-am data-te-timepicker-hour-mode data-te-ripple-init>${h}</button>
                  <button class="${u.timepickerModePm}" tabindex="0" data-te-timepicker-pm data-te-timepicker-hour-mode data-te-ripple-init>${d}</button>
                </div>`
						}
        </div>
      </div>
      ${
				l
					? ''
					: `<div id='${o}' class='${
							u.timepickerClockWrapper
					  }' data-te-timepicker-clock-wrapper>
            <div class='${u.timepickerClock}' data-te-timepicker-clock>
              <span class='${
								u.timepickerMiddleDot
							}' data-te-timepicker-middle-dot></span>
              <div class='${
								u.timepickerHandPointer
							}' data-te-timepicker-hand-pointer>
                <div class='${
									u.timepickerPointerCircle
								}' data-te-timepicker-circle></div>
              </div>
              ${
								s
									? '<div class="' +
									  u.timepickerClockInner +
									  '" data-te-timepicker-clock-inner></div>'
									: ''
							}
            </div>
          </div>`
			}
    </div>
    <div id='${n}' class='${u.timepickerFooterWrapper}'>
      <div class="${u.timepickerFooter}">
        ${
					c
						? `<button type='button' class='${u.timepickerFooterButton}' data-te-timepicker-clear tabindex="0" data-te-ripple-init>${a}</button>`
						: ''
				}
        <button type='button' class='${
					u.timepickerFooterButton
				}' data-te-timepicker-cancel tabindex="0" data-te-ripple-init>${e}</button>
        <button type='button' class='${
					u.timepickerFooterButton
				}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
      </div>
    </div>
  </div>
</div>`,
				f = `<div id='${r}' class='${
					u.timepickerInlineWrapper
				}' data-te-timepicker-wrapper>
        <div class="${u.timepickerInlineContainer}">
          <div class="${
						u.timepickerInlineElements
					}" data-te-timepicker-elements-wrapper>
          <div id='${i}' class='${u.timepickerInlineHead}'
          style='padding-right:10px'>
          <div class='${u.timepickerInlineHeadContent}'>
              <div class="${u.timepickerCurrentWrapper}">
                <span class="${
									u.timepickerInlineHourWrapper
								}" data-te-timepicker-inline-hour-icons>
                  <span class="${
										u.timepickerInlineIconUp
									}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-hour>
                    <span class="${u.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>   
                    </span>
                  </span>
                  <button type='button' class='${
										u.timepickerInlineCurrentButton
									}' data-te-timepicker-hour data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                  <span class="${
										u.timepickerInlineIconDown
									}" data-te-timepicker-icon-inline-hour data-te-timepicker-icon-down>
                    <span class="${u.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>  
                    </span>
                  </span>
                </span>
                <button type='button' class='${
									u.timepickerInlineDot
								}' data-te-timepicker-current-inline disabled>:</button>
              <span class="${u.timepickerCurrentMinuteWrapper}">
                <span class="${
									u.timepickerInlineIconUp
								}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-minute>
                  <span class="${u.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </span>
                </span>
                <button type='button' class='${
									u.timepickerInlineCurrentButton
								}' data-te-timepicker-minute data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                <span class="${
									u.timepickerInlineIconDown
								}" data-te-timepicker-icon-inline-minute data-te-timepicker-icon-down>
                  <span class="${u.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> 
                  </span>
                </span>
              </span>
              </div>
              ${
								s
									? ''
									: `<div class="${u.timepickerInlineModeWrapper}">
                      <button type='button' class="${u.timepickerInlineModeAm}" data-te-timepicker-am data-te-timepicker-hour-mode tabindex="0" data-te-ripple-init>${h}</button>
                      <button class="${u.timepickerInlineModePm}" data-te-timepicker-hour-mode data-te-timepicker-pm tabindex="0" data-te-ripple-init>${d}</button>
                      <button type='button' class='${u.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
                    </div>`
							}
              ${
								s
									? `<button class='${u.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>`
									: ''
							}
          </div>
        </div>
      </div>
    </div>
</div>`
			return l ? f : p
		},
		jT = (s, t, e) => {
			const { iconSVG: i } = s
			return `
  <button id="${t}" tabindex="0" type="button" class="${e.timepickerToggleButton}" data-te-toggle="timepicker" data-te-timepicker-toggle-button data-te-timepicker-icon>
    ${i}
  </button>
`
		},
		Ko = 'data-te-timepicker-disabled',
		Uo = 'data-te-timepicker-active',
		Ai = s => {
			if (s === '') return
			let t, e, i, n
			return (
				_u(s)
					? ((t = s.getHours()),
					  (n = t),
					  (e = s.getMinutes()),
					  (t %= 12),
					  n === 0 && t === 0 && (i = 'AM'),
					  (t = t || 12),
					  i === void 0 && (i = Number(n) >= 12 ? 'PM' : 'AM'),
					  (e = e < 10 ? `0${e}` : e))
					: (([t, e, i] = j(s, !1)),
					  (n = t),
					  (t %= 12),
					  n === 0 && t === 0 && (i = 'AM'),
					  (t = t || 12),
					  i === void 0 && (i = Number(n) >= 12 ? 'PM' : 'AM')),
				{ hours: t, minutes: e, amOrPm: i }
			)
		},
		_u = s =>
			s &&
			Object.prototype.toString.call(s) === '[object Date]' &&
			!Number.isNaN(s),
		gu = s => {
			if (s === '') return
			let t, e
			return (
				_u(s)
					? ((t = s.getHours()), (e = s.getMinutes()))
					: ([t, e] = j(s, !1)),
				(e = Number(e) < 10 ? `0${Number(e)}` : e),
				{ hours: t, minutes: e }
			)
		},
		YT = (s, t, e) =>
			_.on(document, s, t, ({ target: i }) => {
				if (i.hasAttribute(Uo)) return
				document.querySelectorAll(t).forEach(o => {
					o.hasAttribute(Uo) &&
						(g.removeClass(o, e.opacity), o.removeAttribute(Uo))
				}),
					g.addClass(i, e.opacity),
					i.setAttribute(Uo, '')
			}),
		mu = ({ clientX: s, clientY: t, touches: e }, i, n = !1) => {
			const { left: o, top: r } = i.getBoundingClientRect()
			let a = {}
			return (
				!n || !e
					? (a = { x: s - o, y: t - r })
					: n &&
					  Object.keys(e).length > 0 &&
					  (a = { x: e[0].clientX - o, y: e[0].clientY - r }),
				a
			)
		},
		Xo = () =>
			(navigator.maxTouchPoints &&
				navigator.maxTouchPoints > 2 &&
				/MacIntel/.test(navigator.platform)) ||
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			),
		j = (s, t = !0) =>
			t
				? s.value.replace(/:/gi, ' ').split(' ')
				: s.replace(/:/gi, ' ').split(' '),
		bu = (s, t) => {
			const [e, i, n] = j(s, !1),
				[o, r, a] = j(t, !1)
			return (n === 'PM' && a === 'AM') || (n === a && e > o) || i > r
		},
		vu = () => {
			const s = new Date(),
				t = s.getHours(),
				e = s.getMinutes()
			return `${t}:${e < 10 ? `0${e}` : e}`
		},
		Ke = (s, t, e) => {
			if (!t) return s
			let i = vu()
			return (
				e && (i = `${Ai(i).hours}:${Ai(i).minutes} ${Ai(i).amOrPm}`),
				((s !== '' && bu(i, s)) || s === '') && (s = i),
				s
			)
		},
		Ue = (s, t, e) => {
			if (!t) return s
			let i = vu()
			return (
				e && (i = `${Ai(i).hours}:${Ai(i).minutes} ${Ai(i).amOrPm}`),
				((s !== '' && !bu(i, s)) || s === '') && (s = i),
				s
			)
		},
		KT = (
			{ format12: s, maxTime: t, minTime: e, disablePast: i, disableFuture: n },
			o,
			r
		) => {
			const a = j(o)[1]
			;(e = Ke(e, i, s)), (t = Ue(t, n, s))
			const [l, c, h] = j(t, !1),
				[d, u, p] = j(e, !1)
			if (h !== void 0 || p !== void 0) return [r, a]
			if (
				!(l !== '' && d === '' && Number(r) > Number(l)) &&
				!(
					l === '' &&
					d !== '' &&
					c === void 0 &&
					u !== '' &&
					Number(r) < Number(d)
				)
			)
				return [r, a]
		},
		yu = (s, t, e, i) => {
			s.forEach(n => {
				;(t = t === '12' && i ? '0' : t),
					(n.textContent === '00' ||
						Number(n.textContent === '12' && i ? '0' : n.textContent) > t) &&
						(g.addClass(n, e.tipsDisabled), n.setAttribute(Ko, ''))
			})
		},
		Tu = (s, t, e, i) => {
			s.forEach(n => {
				;(t = t === '12' && i ? '0' : t),
					n.textContent !== '00' &&
						Number(n.textContent === '12' && i ? '0' : n.textContent) <
							Number(t) &&
						(g.addClass(n, e.tipsDisabled), n.setAttribute(Ko, ''))
			})
		},
		Eu = (s, t, e, i) => {
			if (t === '12' || t === '24') return
			const n = e ? 12 : 24
			return i === 'max'
				? (Number(s) === n ? 0 : Number(s)) > Number(t)
				: (Number(s) === n ? 0 : Number(s)) < Number(t)
		},
		UT = (s, t, e, i, n, o) => {
			s.forEach(r => {
				;(Eu(i, e, o, 'max') ||
					(Number(r.textContent) > t && Number(i) === Number(e))) &&
					(g.addClass(r, n.tipsDisabled), r.setAttribute(Ko, ''))
			})
		},
		XT = (s, t, e, i, n, o) => {
			s.forEach(r => {
				;(Eu(i, e, o, 'min') ||
					(Number(r.textContent) < t && Number(i) === Number(e))) &&
					(g.addClass(r, n.tipsDisabled), r.setAttribute(Ko, ''))
			})
		},
		GT = s => (s.startsWith('0') ? Number(s.slice(1)) : Number(s)),
		Zs = 'timepicker',
		W = `data-te-${Zs}`,
		xu = '[data-te-toggle]',
		Go = `te.${Zs}`,
		fe = `.${Go}`,
		_e = '.data-api',
		Cu = `click${fe}${_e}`,
		qo = `keydown${fe}${_e}`,
		Au = `mousedown${fe}${_e}`,
		wu = `mouseup${fe}${_e}`,
		ku = `mousemove${fe}${_e}`,
		Su = `mouseleave${fe}${_e}`,
		Ou = `mouseover${fe}${_e}`,
		Iu = `touchmove${fe}${_e}`,
		Du = `touchend${fe}${_e}`,
		Mu = `touchstart${fe}${_e}`,
		qT = `[${W}-am]`,
		ZT = `[${W}-pm]`,
		QT = `[${W}-format24]`,
		Zo = `[${W}-current]`,
		Qo = `[${W}-hour-mode]`,
		JT = `[${W}-toggle-button]`,
		Cl = `${W}-cancel`,
		Lu = `${W}-clear`,
		Al = `${W}-submit`,
		tE = `${W}-icon`,
		wl = `${W}-icon-up`,
		kl = `${W}-icon-down`,
		eE = `${W}-icon-inline-hour`,
		iE = `${W}-icon-inline-minute`,
		$u = `${W}-inline-hour-icons`,
		sE = `${W}-current-inline`,
		nE = 'readonly',
		oE = `${W}-invalid-feedback`,
		Sl = `${W}-is-invalid`,
		Xe = `${W}-disabled`,
		J = `${W}-active`,
		rE = `${W}-input`,
		wi = `${W}-clock`,
		Qs = `${W}-clock-inner`,
		Ol = `${W}-wrapper`,
		Ru = `${W}-clock-wrapper`,
		Jo = `${W}-hour`,
		Il = `${W}-minute`,
		tr = `${W}-tips-element`,
		_t = `${W}-tips-hours`,
		xt = `${W}-tips-minutes`,
		Bt = `${W}-tips-inner`,
		er = `${W}-tips-inner-element`,
		Pu = `${W}-middle-dot`,
		Dl = `${W}-hand-pointer`,
		Ml = `${W}-circle`,
		Nu = `${W}-modal`,
		aE = {
			appendValidationInfo: !0,
			bodyID: '',
			cancelLabel: 'Cancel',
			clearLabel: 'Clear',
			closeModalOnBackdropClick: !0,
			closeModalOnMinutesClick: !1,
			container: 'body',
			defaultTime: '',
			disabled: !1,
			disablePast: !1,
			disableFuture: !1,
			enableValidation: !0,
			focusInputAfterApprove: !1,
			footerID: '',
			format12: !0,
			format24: !1,
			headID: '',
			increment: !1,
			inline: !1,
			invalidLabel: 'Invalid Time Format',
			maxTime: '',
			minTime: '',
			modalID: '',
			okLabel: 'Ok',
			overflowHidden: !0,
			pickerID: '',
			readOnly: !1,
			showClearBtn: !0,
			switchHoursToMinutesOnClick: !0,
			iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
			withIcon: !0,
			pmLabel: 'PM',
			amLabel: 'AM',
			animations: !0,
		},
		lE = {
			appendValidationInfo: 'boolean',
			bodyID: 'string',
			cancelLabel: 'string',
			clearLabel: 'string',
			closeModalOnBackdropClick: 'boolean',
			closeModalOnMinutesClick: 'boolean',
			container: 'string',
			disabled: 'boolean',
			disablePast: 'boolean',
			disableFuture: 'boolean',
			enableValidation: 'boolean',
			footerID: 'string',
			format12: 'boolean',
			format24: 'boolean',
			headID: 'string',
			increment: 'boolean',
			inline: 'boolean',
			invalidLabel: 'string',
			modalID: 'string',
			okLabel: 'string',
			overflowHidden: 'boolean',
			pickerID: 'string',
			readOnly: 'boolean',
			showClearBtn: 'boolean',
			switchHoursToMinutesOnClick: 'boolean',
			defaultTime: '(string|date|number)',
			iconSVG: 'string',
			withIcon: 'boolean',
			pmLabel: 'string',
			amLabel: 'string',
			animations: 'boolean',
		},
		cE = {
			tips: 'absolute rounded-[100%] w-[32px] h-[32px] text-center cursor-pointer text-[1.1rem] rounded-[100%] bg-transparent flex justify-center items-center font-light focus:outline-none selection:bg-transparent',
			tipsActive: 'text-white bg-[#3b71ca] font-normal',
			tipsDisabled: 'text-[#b3afaf] pointer-events-none bg-transparent',
			transform: 'transition-[transform,height] ease-in-out duration-[400ms]',
			modal: 'z-[1065]',
			clockAnimation: 'animate-[show-up-clock_350ms_linear]',
			opacity: '!opacity-100',
			timepickerWrapper:
				'touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col fixed',
			timepickerContainer:
				'flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] min-[320px]:max-[825px]:landscape:rounded-lg',
			timepickerElements:
				'flex flex-col min-w-[310px] min-h-[325px] bg-white rounded-t-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape:min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around',
			timepickerHead:
				'bg-[#3b71ca] dark:bg-white h-[100px] rounded-t-lg pr-[24px] pl-[50px] py-[10px] min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center',
			timepickerHeadContent:
				'min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly',
			timepickerCurrentWrapper: '[direction:ltr] rtl:[direction:rtl]',
			timepickerCurrentButtonWrapper: 'relative h-full',
			timepickerCurrentButton:
				'text-[3.75rem] font-light leading-[1.2] tracking-[-0.00833em] text-white opacity-[.54] border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none ',
			timepickerDot:
				'font-light leading-[1.2] tracking-[-0.00833em] text-[3.75rem] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal',
			timepickerModeWrapper:
				'flex flex-col justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row',
			timepickerModeAm:
				'p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none',
			timepickerModePm:
				'p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none',
			timepickerClockWrapper:
				'min-w-[310px] max-w-[325px] min-h-[305px] overflow-x-hidden h-full flex justify-center flex-col items-center dark:bg-zinc-500',
			timepickerClock:
				'relative rounded-[100%] w-[260px] h-[260px] cursor-default my-0 mx-auto bg-[#00000012] dark:bg-zinc-600/50',
			timepickerMiddleDot:
				'top-1/2 left-1/2 w-[6px] h-[6px] -translate-y-1/2 -translate-x-1/2 rounded-[50%] bg-[#3b71ca] absolute',
			timepickerHandPointer:
				'bg-[#3b71ca] bottom-1/2 h-2/5 left-[calc(50%-1px)] rtl:!left-auto origin-[center_bottom_0] rtl:!origin-[50%_50%_0] w-[2px] absolute',
			timepickerPointerCircle:
				'-top-[21px] -left-[15px] w-[4px] border-[14px] border-solid border-[#3b71ca] h-[4px] box-content rounded-[100%] absolute',
			timepickerClockInner:
				'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-[100%]',
			timepickerFooterWrapper:
				'rounded-b-lg flex justify-between items-center w-full h-[56px] px-[12px] bg-white dark:bg-zinc-500',
			timepickerFooter: 'w-full flex justify-between',
			timepickerFooterButton:
				'text-[0.8rem] min-w-[64px] box-border font-medium leading-[40px] rounded-[10px] tracking-[0.1rem] uppercase text-[#3b71ca] dark:text-white border-none bg-transparent transition-[background-color,box-shadow,border] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0ms] outline-none py-0 px-[10px] h-[40px] mb-[10px] hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none',
			timepickerInlineWrapper:
				'touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col rounded-lg',
			timepickerInlineContainer:
				'flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]',
			timepickerInlineElements:
				'flex flex-col min-h-[auto] min-w-[310px] bg-white rounded-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:rounded-bl-lg min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape::min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around',
			timepickerInlineHead:
				'bg-[#3b71ca] dark:bg-white h-[100px] rounded-t-lg min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center p-0 rounded-b-lg',
			timepickerInlineHeadContent:
				'min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly items-center',
			timepickerInlineHourWrapper: 'relative h-full !opacity-100',
			timepickerCurrentMinuteWrapper: 'relative h-full',
			timepickerInlineIconUp:
				'absolute text-white -top-[35px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center',
			timepickerInlineIconSvg: 'h-4 w-4',
			timepickerInlineCurrentButton:
				'font-light leading-[1.2] tracking-[-0.00833em] text-white border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal !opacity-100 cursor-pointer focus:bg-[#00000026] hover:outline-none focus:outline-none text-[2.5rem] hover:bg-[unset]',
			timepickerInlineIconDown:
				'absolute text-white -bottom-[47px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center',
			timepickerInlineDot:
				'font-light leading-[1.2] tracking-[-0.00833em] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal text-[2.5rem]',
			timepickerInlineModeWrapper:
				'flex justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row',
			timepickerInlineModeAm:
				'hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer mr-2 ml-6',
			timepickerInlineModePm:
				'hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer',
			timepickerInlineSubmitButton:
				'hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none text-[0.8rem] box-border font-medium leading-[40px] tracking-[.1rem] uppercase border-none bg-transparent [transition:background-color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,box-shadow_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,border_250ms_cubic-bezier(0.4,0,0.2,1)_0ms] outline-none rounded-[100%] h-[48px] min-w-[48px] inline-block ml-[30px] text-white py-1 px-2 mb-0',
			timepickerToggleButton:
				'h-4 w-4 ml-auto absolute outline-none border-none bg-transparent right-1.5 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer hover:text-[#3b71ca] focus:text-[#3b71ca] dark:hover:text-[#3b71ca] dark:focus:text-[#3b71ca] dark:text-white',
		},
		hE = {
			tips: 'string',
			tipsActive: 'string',
			tipsDisabled: 'string',
			transform: 'string',
			modal: 'string',
			clockAnimation: 'string',
			opacity: 'string',
			timepickerWrapper: 'string',
			timepickerContainer: 'string',
			timepickerElements: 'string',
			timepickerHead: 'string',
			timepickerHeadContent: 'string',
			timepickerCurrentWrapper: 'string',
			timepickerCurrentButtonWrapper: 'string',
			timepickerCurrentButton: 'string',
			timepickerDot: 'string',
			timepickerModeWrapper: 'string',
			timepickerModeAm: 'string',
			timepickerModePm: 'string',
			timepickerClockWrapper: 'string',
			timepickerClock: 'string',
			timepickerMiddleDot: 'string',
			timepickerHandPointer: 'string',
			timepickerPointerCircle: 'string',
			timepickerClockInner: 'string',
			timepickerFooterWrapper: 'string',
			timepickerFooterButton: 'string',
			timepickerInlineWrapper: 'string',
			timepickerInlineContainer: 'string',
			timepickerInlineElements: 'string',
			timepickerInlineHead: 'string',
			timepickerInlineHeadContent: 'string',
			timepickerInlineHourWrapper: 'string',
			timepickerCurrentMinuteWrapper: 'string',
			timepickerInlineIconUp: 'string',
			timepickerInlineIconSvg: 'string',
			timepickerInlineCurrentButton: 'string',
			timepickerInlineIconDown: 'string',
			timepickerInlineDot: 'string',
			timepickerInlineModeWrapper: 'string',
			timepickerInlineModeAm: 'string',
			timepickerInlineModePm: 'string',
			timepickerInlineSubmitButton: 'string',
			timepickerToggleButton: 'string',
		}
	class Ll {
		constructor(t, e = {}, i) {
			ke(this, '_toggleAmPm', t => {
				t === 'PM'
					? ((this._isPmEnabled = !0), (this._isAmEnabled = !1))
					: t === 'AM' && ((this._isPmEnabled = !1), (this._isAmEnabled = !0))
			})
			ke(this, '_toggleBackgroundColorCircle', t => {
				if (this._modal.querySelector(`${t}[${J}]`) !== null) {
					g.addStyle(this._circle, { backgroundColor: '#1976d2' })
					return
				}
				g.addStyle(this._circle, { backgroundColor: 'transparent' })
			})
			ke(this, '_toggleClassActive', (t, { textContent: e }, i) => {
				const n = [...t].find(o => Number(o) === Number(e))
				return i.forEach(o => {
					if (!o.hasAttribute(Xe)) {
						if (o.textContent === n) {
							g.addClass(o, this._classes.tipsActive), o.setAttribute(J, '')
							return
						}
						g.removeClass(o, this._classes.tipsActive), o.removeAttribute(J)
					}
				})
			})
			ke(this, '_makeMinutesDegrees', (t, e) => {
				const { increment: i } = this._options
				return (
					t < 0
						? ((e = Math.round(360 + t / 6) % 60),
						  (t = 360 + Math.round(t / 6) * 6))
						: ((e = Math.round(t / 6) % 60), (t = Math.round(t / 6) * 6)),
					i &&
						((t = Math.round(t / 30) * 30),
						(e = (Math.round(t / 6) * 6) / 6),
						e === 60 && (e = '00')),
					t >= 360 && (t = 0),
					{ degrees: t, minute: e, addDegrees: i ? 30 : 6 }
				)
			})
			ke(this, '_makeHourDegrees', (t, e, i) => {
				if (t)
					return (
						this._hasTargetInnerClass(t)
							? e < 0
								? ((i = Math.round(360 + e / 30) % 24), (e = 360 + e))
								: ((i = Math.round(e / 30) + 12), i === 12 && (i = '00'))
							: e < 0
							? ((i = Math.round(360 + e / 30) % 12), (e = 360 + e))
							: ((i = Math.round(e / 30) % 12),
							  (i === 0 || i > 12) && (i = 12)),
						e >= 360 && (e = 0),
						{ degrees: e, hour: i, addDegrees: 30 }
					)
			})
			ke(
				this,
				'_makeInnerHoursDegrees',
				(t, e) => (
					t < 0
						? ((e = Math.round(360 + t / 30) % 24), (t = 360 + t))
						: ((e = Math.round(t / 30) + 12), e === 12 && (e = '00')),
					{ degrees: t, hour: e, addDegrees: 30 }
				)
			)
			ke(this, '_getAppendClock', (t = [], e = `[${wi}]`, i) => {
				let { minTime: n, maxTime: o } = this._options
				const {
					inline: r,
					format12: a,
					disablePast: l,
					disableFuture: c,
				} = this._options
				;(n = Ke(n, l, a)), (o = Ue(o, c, a))
				const [h, d, u] = j(o, !1),
					[p, f, b] = j(n, !1)
				!r &&
					a &&
					this._isInvalidTimeFormat &&
					!this._AM.hasAttribute(J) &&
					(g.addClass(this._PM, this._classes.opacity),
					this._PM.setAttribute(J, ''))
				const v = m.findOne(e),
					y = 360 / t.length
				function T(A) {
					return A * (Math.PI / 180)
				}
				if (v === null) return
				const x = (v.offsetWidth - 32) / 2,
					E = (v.offsetHeight - 32) / 2,
					C = x - 4
				setTimeout(() => {
					let A
					a && (A = m.findOne(`${Qo}[${J}]`).textContent),
						this._handleDisablingTipsMinTime(A, b, f, p),
						this._handleDisablingTipsMaxTime(A, u, d, h)
				}, 0),
					[...t].forEach((A, w) => {
						const S = T(w * y),
							k = $('span'),
							D = $('span')
						;(D.innerHTML = A),
							g.addClass(k, this._classes.tips),
							k.setAttribute(i, '')
						const I = k.offsetWidth,
							M = k.offsetHeight
						return (
							g.addStyle(k, {
								left: `${x + Math.sin(S) * C - I}px`,
								bottom: `${E + Math.cos(S) * C - M}px`,
							}),
							t.includes('05') && k.setAttribute(xt, ''),
							t.includes('13')
								? D.setAttribute(er, '')
								: D.setAttribute(tr, ''),
							k.appendChild(D),
							v.appendChild(k)
						)
					})
			})
			;(this._element = t),
				this._element && O.setData(t, Go, this),
				(this._document = document),
				(this._options = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._currentTime = null),
				(this._toggleButtonId = bt('timepicker-toggle-')),
				(this.hoursArray = [
					'12',
					'1',
					'2',
					'3',
					'4',
					'5',
					'6',
					'7',
					'8',
					'9',
					'10',
					'11',
				]),
				(this.innerHours = [
					'00',
					'13',
					'14',
					'15',
					'16',
					'17',
					'18',
					'19',
					'20',
					'21',
					'22',
					'23',
				]),
				(this.minutesArray = [
					'00',
					'05',
					'10',
					'15',
					'20',
					'25',
					'30',
					'35',
					'40',
					'45',
					'50',
					'55',
				]),
				(this.input = m.findOne('input', this._element)),
				(this.dataWithIcon = t.dataset.withIcon),
				(this.dataToggle = t.dataset.toggle),
				(this.customIcon = m.findOne(JT, this._element)),
				this._checkToggleButton(),
				(this.inputFormatShow = m.findOne(QT, this._element)),
				(this.inputFormat =
					this.inputFormatShow === null
						? ''
						: Object.values(this.inputFormatShow.dataset)[0]),
				(this.elementToggle = m.findOne(xu, this._element)),
				(this.toggleElement = Object.values(t.querySelector(xu).dataset)[0]),
				(this._hour = null),
				(this._minutes = null),
				(this._AM = null),
				(this._PM = null),
				(this._wrapper = null),
				(this._modal = null),
				(this._hand = null),
				(this._circle = null),
				(this._focusTrap = null),
				(this._popper = null),
				(this._interval = null),
				(this._timeoutInterval = null),
				(this._inputValue =
					this._options.defaultTime !== ''
						? this._options.defaultTime
						: this.input.value),
				this._options.format24 &&
					((this._options.format12 = !1),
					(this._currentTime = gu(this._inputValue))),
				this._options.format12 &&
					((this._options.format24 = !1),
					(this._currentTime = Ai(this._inputValue))),
				this._options.readOnly && this.input.setAttribute(nE, !0),
				this.inputFormat === 'true' &&
					this.inputFormat !== '' &&
					((this._options.format12 = !1),
					(this._options.format24 = !0),
					(this._currentTime = gu(this._inputValue))),
				(this._animations =
					!window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
					this._options.animations),
				this.init(),
				(this._isHours = !0),
				(this._isMinutes = !1),
				(this._isInvalidTimeFormat = !1),
				(this._isMouseMove = !1),
				(this._isInner = !1),
				(this._isAmEnabled = !1),
				(this._isPmEnabled = !1),
				this._options.format12 &&
					!this._options.defaultTime &&
					(this._isPmEnabled = !0),
				(this._objWithDataOnChange = { degrees: null }),
				(this._scrollBar = new Qi())
		}
		static get NAME() {
			return Zs
		}
		init() {
			const { format12: t, format24: e, enableValidation: i } = this._options
			let n, o, r
			if ((this.input.setAttribute(rE, ''), this._currentTime !== void 0)) {
				const { hours: a, minutes: l, amOrPm: c } = this._currentTime
				;(n = Number(a) < 10 ? 0 : ''),
					(o = `${n}${Number(a)}:${l}`),
					(r = c),
					t
						? (this.input.value = `${o} ${r}`)
						: e && (this.input.value = `${o}`)
			} else (n = ''), (o = ''), (r = ''), (this.input.value = '')
			this.input.value.length > 0 &&
				this.input.value !== '' &&
				(this.input.setAttribute(J, ''), _.trigger(this.input, 'input')),
				!(this._options === null && this._element === null) &&
					(i && this._getValidate('keydown change blur focus'),
					this._handleOpen(),
					this._listenToToggleKeydown())
		}
		dispose() {
			this._removeModal(),
				this._element !== null && O.removeData(this._element, Go),
				setTimeout(() => {
					;(this._element = null),
						(this._options = null),
						(this.input = null),
						(this._focusTrap = null)
				}, 350),
				_.off(
					this._element,
					'click',
					`[data-te-toggle='${this.toggleElement}']`
				),
				_.off(
					this._element,
					'keydown',
					`[data-te-toggle='${this.toggleElement}']`
				)
		}
		update(t = {}) {
			this._options = this._getConfig({ ...this._options, ...t })
		}
		_checkToggleButton() {
			this.customIcon === null &&
				(this.dataWithIcon !== void 0 &&
					((this._options.withIcon = null),
					this.dataWithIcon === 'true' &&
						this._appendToggleButton(this._options)),
				this._options.withIcon && this._appendToggleButton(this._options))
		}
		_appendToggleButton() {
			const t = jT(this._options, this._toggleButtonId, this._classes)
			this.input.insertAdjacentHTML('afterend', t)
		}
		_getDomElements() {
			;(this._hour = m.findOne(`[${Jo}]`)),
				(this._minutes = m.findOne(`[${Il}]`)),
				(this._AM = m.findOne(qT)),
				(this._PM = m.findOne(ZT)),
				(this._wrapper = m.findOne(`[${Ol}]`)),
				(this._modal = m.findOne(`[${Nu}]`)),
				(this._hand = m.findOne(`[${Dl}]`)),
				(this._circle = m.findOne(`[${Ml}]`)),
				(this._clock = m.findOne(`[${wi}]`)),
				(this._clockInner = m.findOne(`[${Qs}]`))
		}
		_handlerMaxMinHoursOptions(t, e, i, n, o, r) {
			if (!e && !i) return !0
			const {
					format24: a,
					format12: l,
					disablePast: c,
					disableFuture: h,
				} = this._options,
				{ _isAmEnabled: d, _isPmEnabled: u } = this,
				p = r.keyCode,
				f =
					r.target.hasAttribute(Qs) ||
					r.target.hasAttribute(Bt) ||
					r.target.hasAttribute(er)
			;(i = Ke(i, c, l)),
				(e = Ue(e, h, l)),
				typeof e != 'number' && (e = j(e, !1)[0])
			const b = e !== '' ? e * 30 : '',
				v = i !== '' ? i * 30 : ''
			t < 0 && (t = 360 + t), (t = t === 360 ? 0 : t)
			const y = () => {
					const w = document.querySelectorAll(`[${tr}]`),
						S = document.querySelectorAll(`[${er}]`),
						k = GT(this._hour.innerText)
					let D, I, M
					return (
						p === ut ? (I = 1) : p === ht && (I = -1),
						k === 12 && p === ut
							? (M = 1)
							: k === 0 && p === ut
							? (M = 13)
							: k === 0 && p === ht
							? (M = 23)
							: k === 13 && p === ht
							? (M = 0)
							: k === 1 && p === ht
							? (M = 12)
							: (M = k + I),
						w.forEach(P => {
							Number(P.textContent) === M && (D = P)
						}),
						S.forEach(P => {
							Number(P.textContent) === M && (D = P)
						}),
						!D.parentElement.hasAttribute(Xe)
					)
				},
				T = () => {
					const w = i !== '' && i > 12 ? (i - 12) * 30 : '',
						S = e !== '' && e > 12 ? (e - 12) * 30 : ''
					if (!((w && t < w) || (S && t > S) || (e && e < 12))) return !0
				}
			if (a && r.type !== 'keydown' && f) return T()
			if (r.type === 'keydown') return y()
			const x = !o || (o === 'PM' && u) || (i !== '' && o === 'AM' && d),
				E = !n || (n === 'PM' && u) || (e !== '' && n === 'AM' && d),
				C = () => {
					const w = v === 360 && l ? 0 : v
					if (i) {
						if ((o === 'PM' && d) || (x && t < w)) return
					} else return !0
					return !0
				},
				A = () => {
					const w = b === 360 && l ? 0 : b
					if (e) {
						if ((n === 'AM' && u) || (E && t > w)) return
					} else return !0
					return !0
				}
			return C() && A()
		}
		_handleKeyboard() {
			_.on(this._document, qo, '', t => {
				let e, i, n
				const {
					increment: o,
					maxTime: r,
					minTime: a,
					format12: l,
					disablePast: c,
					disableFuture: h,
				} = this._options
				let d = j(a, !1)[0],
					u = j(r, !1)[0]
				const p = j(a, !1)[2],
					f = j(r, !1)[2]
				;(d = Ke(d, c, l)),
					(u = Ue(u, h, l)),
					typeof u != 'number' && (u = j(u, !1)[0])
				const b = m.findOne(`[${xt}]`) === null,
					v = m.findOne(`[${Bt}]`) !== null,
					y = Number(this._hand.style.transform.replace(/[^\d-]/g, '')),
					T = m.find(`[${xt}]`, this._modal),
					x = m.find(`[${_t}]`, this._modal),
					E = m.find(`[${Bt}]`, this._modal)
				let C = this._makeHourDegrees(t.target, y, e).hour
				const { degrees: A, addDegrees: w } = this._makeHourDegrees(
					t.target,
					y,
					e
				)
				let { minute: S, degrees: k } = this._makeMinutesDegrees(y, i)
				const D = this._makeMinutesDegrees(y, i).addDegrees
				let { hour: I } = this._makeInnerHoursDegrees(y, n)
				if (t.keyCode === xi) {
					const M = m.findOne(`[${Cl}]`, this._modal)
					_.trigger(M, 'click')
				} else if (b) {
					if (
						(v &&
							(t.keyCode === hs &&
								((this._isInner = !1),
								g.addStyle(this._hand, { height: 'calc(40% + 1px)' }),
								(this._hour.textContent = this._setHourOrMinute(
									C > 12 ? 1 : C
								)),
								this._toggleClassActive(this.hoursArray, this._hour, x),
								this._toggleClassActive(this.innerHours, this._hour, E)),
							t.keyCode === cs &&
								((this._isInner = !0),
								g.addStyle(this._hand, { height: '21.5%' }),
								(this._hour.textContent = this._setHourOrMinute(
									I >= 24 || I === '00' ? 0 : I
								)),
								this._toggleClassActive(this.innerHours, this._hour, E),
								this._toggleClassActive(this.hoursArray, this._hour - 1, x))),
						t.keyCode === ut)
					) {
						if (!this._handlerMaxMinHoursOptions(A + 30, u, d, f, p, t)) return
						g.addStyle(this._hand, { transform: `rotateZ(${A + w}deg)` }),
							this._isInner
								? ((I += 1),
								  I === 24 ? (I = 0) : (I === 25 || I === '001') && (I = 13),
								  (this._hour.textContent = this._setHourOrMinute(I)),
								  this._toggleClassActive(this.innerHours, this._hour, E))
								: ((C += 1),
								  (this._hour.textContent = this._setHourOrMinute(
										C > 12 ? 1 : C
								  )),
								  this._toggleClassActive(this.hoursArray, this._hour, x))
					}
					if (t.keyCode === ht) {
						if (!this._handlerMaxMinHoursOptions(A - 30, u, d, f, p, t)) return
						g.addStyle(this._hand, { transform: `rotateZ(${A - w}deg)` }),
							this._isInner
								? ((I -= 1),
								  I === 12 ? (I = 0) : I === -1 && (I = 23),
								  (this._hour.textContent = this._setHourOrMinute(I)),
								  this._toggleClassActive(this.innerHours, this._hour, E))
								: ((C -= 1),
								  (this._hour.textContent = this._setHourOrMinute(
										C === 0 ? 12 : C
								  )),
								  this._toggleClassActive(this.hoursArray, this._hour, x))
					}
				} else
					t.keyCode === ut &&
						((k += D),
						g.addStyle(this._hand, { transform: `rotateZ(${k}deg)` }),
						(S += 1),
						o && ((S += 4), S === '0014' && (S = 5)),
						(this._minutes.textContent = this._setHourOrMinute(S > 59 ? 0 : S)),
						this._toggleClassActive(this.minutesArray, this._minutes, T),
						this._toggleBackgroundColorCircle(`[${xt}]`)),
						t.keyCode === ht &&
							((k -= D),
							g.addStyle(this._hand, { transform: `rotateZ(${k}deg)` }),
							o ? (S -= 5) : (S -= 1),
							S === -1 ? (S = 59) : S === -5 && (S = 55),
							(this._minutes.textContent = this._setHourOrMinute(S)),
							this._toggleClassActive(this.minutesArray, this._minutes, T),
							this._toggleBackgroundColorCircle(`[${xt}]`))
			})
		}
		_setActiveClassToTipsOnOpen(t, ...e) {
			if (!this._isInvalidTimeFormat)
				if (this._options.format24) {
					const i = m.find(`[${_t}]`, this._modal),
						n = m.find(`[${Bt}]`, this._modal)
					this._addActiveClassToTip(i, t), this._addActiveClassToTip(n, t)
				} else {
					;[...e].filter(
						n => (
							n.toLowerCase() === 'pm'
								? (g.addClass(this._PM, this._classes.opacity),
								  this._PM.setAttribute(J, ''))
								: n.toLowerCase() === 'am'
								? (g.addClass(this._AM, this._classes.opacity),
								  this._AM.setAttribute(J, ''))
								: (g.removeClass(this._AM, this._classes.opacity),
								  g.removeClass(this._PM, this._classes.opacity),
								  this._AM.removeAttribute(J),
								  this._PM.removeAttribute(J)),
							n
						)
					)
					const i = m.find(`[${_t}]`, this._modal)
					this._addActiveClassToTip(i, t)
				}
		}
		_setTipsAndTimesDependOnInputValue(t, e) {
			const { inline: i, format12: n } = this._options
			if (this._isInvalidTimeFormat)
				(this._hour.textContent = '12'),
					(this._minutes.textContent = '00'),
					i || g.addStyle(this._hand, { transform: 'rotateZ(0deg)' }),
					n &&
						(g.addClass(this._PM, this._classes.opacity),
						this._PM.setAttribute(J, ''))
			else {
				const o = t > 12 ? t * 30 - 360 : t * 30
				;(this._hour.textContent = t),
					(this._minutes.textContent = e),
					i ||
						(g.addStyle(this._hand, { transform: `rotateZ(${o}deg)` }),
						g.addStyle(this._circle, { backgroundColor: '#1976d2' }),
						(Number(t) > 12 || t === '00') &&
							g.addStyle(this._hand, { height: '21.5%' }))
			}
		}
		_listenToToggleKeydown() {
			_.on(
				this._element,
				'keydown',
				`[data-te-toggle='${this.toggleElement}']`,
				t => {
					t.keyCode === Et &&
						(t.preventDefault(), _.trigger(this.elementToggle, 'click'))
				}
			)
		}
		_handleOpen() {
			const t = this._getContainer()
			ct.on(
				this._element,
				'click',
				`[data-te-toggle='${this.toggleElement}']`,
				e => {
					if (this._options === null) return
					const i = g.getDataAttribute(this.input, 'toggle') !== null ? 200 : 0
					setTimeout(() => {
						g.addStyle(this.elementToggle, { pointerEvents: 'none' }),
							this.elementToggle.blur()
						let n
						j(this.input)[0] === ''
							? (n = ['12', '00', 'PM'])
							: (n = j(this.input))
						const { modalID: o, inline: r, format12: a } = this._options,
							[l, c, h] = n,
							d = $('div')
						if (
							((Number(l) > 12 || l === '00') && (this._isInner = !0),
							this.input.blur(),
							e.target.blur(),
							(d.innerHTML = zT(this._options, this._classes)),
							g.addClass(d, this._classes.modal),
							d.setAttribute(Nu, ''),
							d.setAttribute('role', 'dialog'),
							d.setAttribute('tabIndex', '-1'),
							d.setAttribute('id', o),
							r
								? ((this._popper = Fe(this.input, d, {
										placement: 'bottom-start',
								  })),
								  t.appendChild(d))
								: (t.appendChild(d), this._scrollBar.hide()),
							this._getDomElements(),
							this._animations
								? this._toggleBackdropAnimation()
								: g.addClass(this._wrapper, this._classes.opacity),
							this._setActiveClassToTipsOnOpen(l, c, h),
							this._appendTimes(),
							this._setActiveClassToTipsOnOpen(l, c, h),
							this._setTipsAndTimesDependOnInputValue(l, c),
							this.input.value === '')
						) {
							const u = m.find(`[${_t}]`, this._modal)
							a &&
								(g.addClass(this._PM, this._classes.opacity),
								this._PM.setAttribute(J, '')),
								(this._hour.textContent = '12'),
								(this._minutes.textContent = '00'),
								this._addActiveClassToTip(u, Number(this._hour.textContent))
						}
						if (
							(this._handleSwitchTimeMode(),
							this._handleOkButton(),
							this._handleClose(),
							r)
						)
							this._handleHoverInlineBtn(),
								this._handleDocumentClickInline(),
								this._handleInlineClicks()
						else {
							this._handleSwitchHourMinute(),
								this._handleClockClick(),
								this._handleKeyboard()
							const u = document.querySelector(`${Zo}[${J}]`)
							g.addClass(u, this._classes.opacity),
								g.addStyle(this._hour, { pointerEvents: 'none' }),
								g.addStyle(this._minutes, { pointerEvents: '' })
						}
						;(this._focusTrap = new Vs(this._wrapper, {
							event: 'keydown',
							condition: ({ key: u }) => u === 'Tab',
						})),
							this._focusTrap.trap()
					}, i)
				}
			)
		}
		_handleInlineClicks() {
			let t, e
			const i = p => {
					let f = p
					return f > 59 ? (f = 0) : f < 0 && (f = 59), f
				},
				n = p => {
					let f = p
					return (
						this._options.format24
							? (f > 24 ? (f = 1) : f < 0 && (f = 23), f > 23 && (f = 0))
							: (f > 12 ? (f = 1) : f < 1 && (f = 12), f > 12 && (f = 1)),
						f
					)
				},
				o = p => {
					const f = n(p)
					this._hour.textContent = this._setHourOrMinute(f)
				},
				r = p => {
					const f = i(p)
					this._minutes.textContent = this._setHourOrMinute(f)
				},
				a = () => {
					;(t = n(t) + 1), o(t)
				},
				l = () => {
					;(e = i(e) + 1), r(e)
				},
				c = () => {
					;(t = n(t) - 1), o(t)
				},
				h = () => {
					;(e = i(e) - 1), r(e)
				},
				d = () => {
					clearInterval(this._interval), clearTimeout(this._timeoutInterval)
				},
				u = p => {
					d(),
						(this._timeoutInterval = setTimeout(() => {
							this._interval = setInterval(p, 100)
						}, 500))
				}
			ct.on(
				this._modal,
				'click mousedown mouseup touchstart touchend contextmenu',
				`[${wl}], [${kl}]`,
				p => {
					;(t = Number(this._hour.textContent)),
						(e = Number(this._minutes.textContent))
					const { target: f, type: b } = p,
						v = b === 'mousedown' || b === 'touchstart'
					f.closest(`[${wl}]`)
						? f.closest(`[${wl}]`).parentNode.hasAttribute($u)
							? v
								? u(a)
								: b === 'mouseup' || b === 'touchend' || b === 'contextmenu'
								? d()
								: a()
							: v
							? u(l)
							: b === 'mouseup' || b === 'touchend' || b === 'contextmenu'
							? d()
							: l()
						: f.closest(`[${kl}]`) &&
						  (f.closest(`[${kl}]`).parentNode.hasAttribute($u)
								? v
									? u(c)
									: b === 'mouseup' || b === 'touchend'
									? d()
									: c()
								: v
								? u(h)
								: b === 'mouseup' || b === 'touchend'
								? d()
								: h())
				}
			),
				_.on(window, qo, p => {
					const f = p.code,
						b = document.activeElement.hasAttribute(Jo),
						v = document.activeElement.hasAttribute(Il),
						y = document.activeElement === document.body
					switch (
						((t = Number(this._hour.textContent)),
						(e = Number(this._minutes.textContent)),
						f)
					) {
						case 'ArrowUp':
							p.preventDefault(), y || b ? (this._hour.focus(), a()) : v && l()
							break
						case 'ArrowDown':
							p.preventDefault(), y || b ? (this._hour.focus(), c()) : v && h()
							break
					}
				})
		}
		_handleClose() {
			_.on(
				this._modal,
				'click',
				`[${Ol}], [${Cl}], [${Lu}]`,
				({ target: t }) => {
					const { closeModalOnBackdropClick: e } = this._options,
						i = () => {
							var n
							g.addStyle(this.elementToggle, { pointerEvents: 'auto' }),
								this._animations && this._toggleBackdropAnimation(!0),
								this._removeModal(),
								(n = this._focusTrap) == null || n.disable(),
								(this._focusTrap = null),
								this.elementToggle
									? this.elementToggle.focus()
									: this.input && this.input.focus()
						}
					if (t.hasAttribute(Lu)) {
						this._toggleAmPm('PM'),
							(this.input.value = ''),
							this.input.removeAttribute(J)
						let n
						j(this.input)[0] === ''
							? (n = ['12', '00', 'PM'])
							: (n = j(this.input))
						const [o, r, a] = n
						this._setTipsAndTimesDependOnInputValue('12', '00'),
							this._setActiveClassToTipsOnOpen(o, r, a),
							this._hour.click()
					} else
						(t.hasAttribute(Cl) ||
							t.hasAttribute(Al) ||
							(t.hasAttribute(Ol) && e)) &&
							i()
				}
			)
		}
		showValueInput() {
			return this.input.value
		}
		_handleOkButton() {
			ct.on(this._modal, 'click', `[${Al}]`, () => {
				let { maxTime: t, minTime: e } = this._options
				const {
						format12: i,
						format24: n,
						readOnly: o,
						focusInputAfterApprove: r,
						disablePast: a,
						disableFuture: l,
					} = this._options,
					c = this._document.querySelector(`${Qo}[${J}]`),
					h = `${this._hour.textContent}:${this._minutes.textContent}`,
					d = Number(this._hour.textContent),
					u = d === 12 && i ? 0 : d,
					p = Number(this._minutes.textContent)
				;(e = Ke(e, a, i)), (t = Ue(t, l, i))
				let [f, b, v] = j(t, !1),
					[y, T, x] = j(e, !1)
				;(y = y === '12' && i ? '00' : y), (f = f === '12' && i ? '00' : f)
				const E = u < Number(y),
					C = u > Number(f)
				let A = !0
				c && (A = v === c.textContent)
				let w = !0
				c && (w = x === c.textContent)
				const S = p > b && u === Number(f),
					k = p < T && u === Number(y)
				if (
					(this.input.setAttribute(J, ''),
					g.addStyle(this.elementToggle, { pointerEvents: 'auto' }),
					t !== '')
				) {
					if (A && (C || S)) return
					if (v === 'AM' && c.textContent === 'PM') return
				}
				;(e !== '' &&
					((w && (E || k)) || (x === 'PM' && c.textContent === 'AM'))) ||
					(KT(this._options, this.input, this._hour.textContent) !== void 0 &&
						(this._isInvalidTimeFormat && this.input.removeAttribute(Sl),
						!o && r && this.input.focus(),
						g.addStyle(this.elementToggle, { pointerEvents: 'auto' }),
						n
							? (this.input.value = h)
							: c === null
							? (this.input.value = `${h} PM`)
							: (this.input.value = `${h} ${c.textContent}`),
						this._animations && this._toggleBackdropAnimation(!0),
						this._removeModal(),
						_.trigger(this.input, 'input.te.timepicker'),
						_.trigger(this.input, 'input')))
			})
		}
		_handleHoverInlineBtn() {
			ct.on(
				this._modal,
				'mouseover mouseleave',
				`[${sE}]`,
				({ type: t, target: e }) => {
					const i = m.find(`[${eE}]`, this._modal),
						n = m.find(`[${iE}]`, this._modal),
						o = (l, c) =>
							l.forEach(h => {
								if (c) {
									g.addClass(h, this._classes.opacity), h.setAttribute(J, '')
									return
								}
								g.removeClass(h, this._classes.opacity), h.removeAttribute(J)
							}),
						a = e.hasAttribute(Jo) ? i : n
					o(a, t === 'mouseover')
				}
			)
		}
		_handleDocumentClickInline() {
			_.on(document, Cu, ({ target: t }) => {
				if (this._modal && !this._modal.contains(t) && !t.hasAttribute(tE)) {
					if (
						(clearInterval(this._interval),
						g.addStyle(this.elementToggle, { pointerEvents: 'auto' }),
						this._removeModal(),
						!this._animations)
					)
						return
					this._toggleBackdropAnimation(!0)
				}
			})
		}
		_handleSwitchHourMinute() {
			YT('click', Zo, this._classes),
				_.on(this._modal, 'click', Zo, () => {
					const { format24: t } = this._options,
						e = m.find(Zo, this._modal),
						i = m.find(`[${xt}]`, this._modal),
						n = m.find(`[${_t}]`, this._modal),
						o = m.find(`[${Bt}]`, this._modal),
						r = Number(this._hour.textContent),
						a = Number(this._minutes.textContent),
						l = (c, h) => {
							n.forEach(u => u.remove()),
								i.forEach(u => u.remove()),
								g.addClass(this._hand, this._classes.transform),
								setTimeout(() => {
									g.removeClass(this._hand, this._classes.transform)
								}, 401),
								this._getAppendClock(c, `[${wi}]`, h)
							const d = () => {
								const u = m.find(`[${_t}]`, this._modal),
									p = m.find(`[${xt}]`, this._modal)
								this._addActiveClassToTip(u, r), this._addActiveClassToTip(p, a)
							}
							if (!t)
								setTimeout(() => {
									d()
								}, 401)
							else {
								const u = m.find(`[${Bt}]`, this._modal)
								setTimeout(() => {
									this._addActiveClassToTip(u, r), d()
								}, 401)
							}
						}
					e.forEach(c => {
						c.hasAttribute(J) &&
							(c.hasAttribute(Il)
								? (g.addClass(this._hand, this._classes.transform),
								  g.addStyle(this._hand, {
										transform: `rotateZ(${this._minutes.textContent * 6}deg)`,
										height: 'calc(40% + 1px)',
								  }),
								  t && o.length > 0 && o.forEach(h => h.remove()),
								  l(this.minutesArray, xt),
								  (this._hour.style.pointerEvents = ''),
								  (this._minutes.style.pointerEvents = 'none'))
								: c.hasAttribute(Jo) &&
								  (g.addStyle(this._hand, {
										transform: `rotateZ(${this._hour.textContent * 30}deg)`,
								  }),
								  Number(this._hour.textContent) > 12
										? (g.addStyle(this._hand, {
												transform: `rotateZ(${
													this._hour.textContent * 30 - 360
												}deg)`,
												height: '21.5%',
										  }),
										  Number(this._hour.textContent) > 12 &&
												g.addStyle(this._hand, { height: '21.5%' }))
										: g.addStyle(this._hand, { height: 'calc(40% + 1px)' }),
								  t && this._getAppendClock(this.innerHours, `[${Qs}]`, Bt),
								  o.length > 0 && o.forEach(h => h.remove()),
								  l(this.hoursArray, _t),
								  g.addStyle(this._hour, { pointerEvents: 'none' }),
								  g.addStyle(this._minutes, { pointerEvents: '' })))
					})
				})
		}
		_handleDisablingTipsMaxTime(t, e, i, n) {
			if (!this._options.maxTime && !this._options.disableFuture) return
			const o = m.find(`[${_t}]`),
				r = m.find(`[${Bt}]`),
				a = m.find(`[${xt}]`)
			if (!e || e === t) {
				yu(r, n, this._classes, this._options.format12),
					yu(o, n, this._classes, this._options.format12),
					UT(
						a,
						i,
						n,
						this._hour.textContent,
						this._classes,
						this._options.format12
					)
				return
			}
			e === 'AM' &&
				t === 'PM' &&
				(o.forEach(l => {
					g.addClass(l, this._classes.tipsDisabled), l.setAttribute(Xe, '')
				}),
				a.forEach(l => {
					g.addClass(l, this._classes.tipsDisabled), l.setAttribute(Xe, '')
				}))
		}
		_handleDisablingTipsMinTime(t, e, i, n) {
			if (!this._options.minTime && !this._options.disablePast) return
			const o = m.find(`[${_t}]`),
				r = m.find(`[${Bt}]`),
				a = m.find(`[${xt}]`)
			!e || e === t
				? (Tu(o, n, this._classes, this._options.format12),
				  Tu(r, n, this._classes, this._options.format12),
				  XT(
						a,
						i,
						n,
						this._hour.textContent,
						this._classes,
						this._options.format12
				  ))
				: e === 'PM' &&
				  t === 'AM' &&
				  (o.forEach(l => {
						g.addClass(l, this._classes.tipsDisabled), l.setAttribute(Xe, '')
				  }),
				  a.forEach(l => {
						g.addClass(l, this._classes.tipsDisabled), l.setAttribute(Xe, '')
				  }))
		}
		_handleSwitchTimeMode() {
			_.on(document, 'click', Qo, ({ target: t }) => {
				let { maxTime: e, minTime: i } = this._options
				const { disablePast: n, disableFuture: o, format12: r } = this._options
				;(i = Ke(i, n, r)), (e = Ue(e, o, r))
				const [a, l, c] = j(e, !1),
					[h, d, u] = j(i, !1),
					p = m.find(`[${_t}]`),
					f = m.find(`[${xt}]`)
				;(() => {
					p.forEach(v => {
						g.removeClass(v, this._classes.tipsDisabled), v.removeAttribute(Xe)
					}),
						f.forEach(v => {
							g.removeClass(v, this._classes.tipsDisabled),
								v.removeAttribute(Xe)
						})
				})(),
					this._handleDisablingTipsMinTime(t.textContent, u, d, h),
					this._handleDisablingTipsMaxTime(t.textContent, c, l, a),
					this._toggleAmPm(t.textContent),
					t.hasAttribute(J) ||
						(m.find(Qo).forEach(y => {
							y.hasAttribute(J) &&
								(g.removeClass(y, this._classes.opacity), y.removeAttribute(J))
						}),
						g.addClass(t, this._classes.opacity),
						t.setAttribute(J, ''))
			})
		}
		_handleClockClick() {
			let { maxTime: t, minTime: e } = this._options
			const { disablePast: i, disableFuture: n, format12: o } = this._options
			;(e = Ke(e, i, o)), (t = Ue(t, n, o))
			const r = j(t, !1)[2],
				a = j(e, !1)[2],
				l = j(t, !1)[0],
				c = j(e, !1)[0],
				h = m.findOne(`[${Ru}]`)
			ct.on(
				document,
				`${Au} ${wu} ${ku} ${Su} ${Ou} ${Mu} ${Iu} ${Du}`,
				'',
				d => {
					Xo() || d.preventDefault()
					const { type: u, target: p } = d,
						{ closeModalOnMinutesClick: f, switchHoursToMinutesOnClick: b } =
							this._options,
						v = m.findOne(`[${xt}]`, this._modal) !== null,
						y = m.findOne(`[${_t}]`, this._modal) !== null,
						T = m.findOne(`[${Bt}]`, this._modal) !== null,
						x = m.find(`[${xt}]`, this._modal),
						E = mu(d, h),
						C = h.offsetWidth / 2
					let A = Math.atan2(E.y - C, E.x - C)
					if (Xo()) {
						const D = mu(d, h, !0)
						A = Math.atan2(D.y - C, D.x - C)
					}
					let w = null,
						S = null,
						k = null
					if (
						u === 'mousedown' ||
						u === 'mousemove' ||
						u === 'touchmove' ||
						u === 'touchstart'
					)
						(u === 'mousedown' || u === 'touchstart' || u === 'touchmove') &&
							(this._hasTargetInnerClass(p) ||
								p.hasAttribute(Ru) ||
								p.hasAttribute(wi) ||
								p.hasAttribute(xt) ||
								p.hasAttribute(_t) ||
								p.hasAttribute(Ml) ||
								p.hasAttribute(Dl) ||
								p.hasAttribute(Pu) ||
								p.hasAttribute(tr)) &&
							((this._isMouseMove = !0),
							Xo() &&
								d.touches &&
								((w = d.touches[0].clientX),
								(S = d.touches[0].clientY),
								(k = document.elementFromPoint(w, S))))
					else if (u === 'mouseup' || u === 'touchend') {
						if (
							((this._isMouseMove = !1),
							this._hasTargetInnerClass(p) ||
								p.hasAttribute(wi) ||
								p.hasAttribute(_t) ||
								p.hasAttribute(Ml) ||
								p.hasAttribute(Dl) ||
								p.hasAttribute(Pu) ||
								p.hasAttribute(tr))
						) {
							if ((y || T) && b) {
								const D =
									Number(this._hour.textContent) > l ||
									Number(this._hour.textContent) < c
								if (this._options.format24 && l !== '' && c !== '' && D) return
								if (
									this._options.format24 &&
									c !== '' &&
									Number(this._hour.textContent) < c
								)
									return
							}
							_.trigger(this._minutes, 'click')
						}
						if (v && f) {
							const D = m.findOne(`[${Al}]`, this._modal)
							_.trigger(D, 'click')
						}
					}
					if (v) {
						let D
						const I = Math.trunc((A * 180) / Math.PI) + 90,
							{ degrees: M, minute: P } = this._makeMinutesDegrees(I, D)
						if (this._handlerMaxMinMinutesOptions(M, P) === void 0) return
						const { degrees: X, minute: R } = this._handlerMaxMinMinutesOptions(
							M,
							P
						)
						if (this._isMouseMove) {
							if (
								(g.addStyle(this._hand, { transform: `rotateZ(${X}deg)` }),
								R === void 0)
							)
								return
							const z = () => (R >= 10 || R === '00' ? R : `0${R}`)
							;(this._minutes.textContent = z()),
								this._toggleClassActive(this.minutesArray, this._minutes, x),
								this._toggleBackgroundColorCircle(`[${xt}]`),
								(this._objWithDataOnChange.degreesMinutes = X),
								(this._objWithDataOnChange.minutes = R)
						}
					}
					if (y || T) {
						let D,
							I = Math.trunc((A * 180) / Math.PI) + 90
						if (
							((I = Math.round(I / 30) * 30),
							g.addStyle(this._circle, { backgroundColor: '#1976d2' }),
							this._makeHourDegrees(p, I, D) === void 0)
						)
							return
						const M = () => {
							if (Xo() && I && k) {
								const { degrees: P, hour: X } = this._makeHourDegrees(k, I, D)
								return this._handleMoveHand(k, X, P)
							} else {
								const { degrees: P, hour: X } = this._makeHourDegrees(p, I, D)
								return this._handleMoveHand(p, X, P)
							}
						}
						;(this._objWithDataOnChange.degreesHours = I),
							this._handlerMaxMinHoursOptions(I, l, c, r, a, d) && M()
					}
					d.stopPropagation()
				}
			)
		}
		_hasTargetInnerClass(t) {
			return t.hasAttribute(Qs) || t.hasAttribute(Bt) || t.hasAttribute(er)
		}
		_handleMoveHand(t, e, i) {
			const n = m.find(`[${_t}]`, this._modal),
				o = m.find(`[${Bt}]`, this._modal)
			this._isMouseMove &&
				(this._hasTargetInnerClass(t)
					? g.addStyle(this._hand, { height: '21.5%' })
					: g.addStyle(this._hand, { height: 'calc(40% + 1px)' }),
				g.addStyle(this._hand, { transform: `rotateZ(${i}deg)` }),
				(this._hour.textContent = e >= 10 || e === '00' ? e : `0${e}`),
				this._toggleClassActive(this.hoursArray, this._hour, n),
				this._toggleClassActive(this.innerHours, this._hour, o),
				(this._objWithDataOnChange.hour = e >= 10 || e === '00' ? e : `0${e}`))
		}
		_handlerMaxMinMinutesOptions(t, e) {
			let { maxTime: i, minTime: n } = this._options
			const {
				format12: o,
				increment: r,
				disablePast: a,
				disableFuture: l,
			} = this._options
			;(n = Ke(n, a, o)), (i = Ue(i, l, o))
			const c = j(i, !1)[1],
				h = j(n, !1)[1],
				d = j(i, !1)[0],
				u = j(n, !1)[0],
				p = u === '12' && o ? '0' : u,
				f = d === '12' && o ? '0' : d,
				b = j(i, !1)[2],
				v = j(n, !1)[2],
				y = c !== '' ? c * 6 : '',
				T = h !== '' ? h * 6 : '',
				x = Number(this._hour.textContent),
				E = x === 12 && o ? 0 : x
			if (!b && !v) {
				if (i !== '' && n !== '') {
					if ((Number(f) === E && t > y) || (Number(p) === E && t < T)) return t
				} else if (n !== '' && E <= Number(p)) {
					if (t <= T - 6) return t
				} else if (i !== '' && E >= Number(f) && t >= y + 6) return t
			} else {
				if (n !== '') {
					if (v === 'PM' && this._isAmEnabled) return
					if (v === 'PM' && this._isPmEnabled) {
						if (E < Number(p)) return
						if (E <= Number(p) && t <= T - 6) return t
					} else if (v === 'AM' && this._isAmEnabled) {
						if (E < Number(p)) return
						if (E <= Number(p) && t <= T - 6) return t
					}
				}
				if (i !== '') {
					if (b === 'AM' && this._isPmEnabled) return
					if (b === 'PM' && this._isPmEnabled) {
						if (E >= Number(f) && t >= y + 6) return t
					} else if (
						b === 'AM' &&
						this._isAmEnabled &&
						E >= Number(f) &&
						t >= y + 6
					)
						return t
				}
			}
			return (
				r && (t = Math.round(t / 30) * 30),
				t < 0 ? (t = 360 + t) : t >= 360 && (t = 0),
				{ degrees: t, minute: e }
			)
		}
		_removeModal() {
			this._animations
				? setTimeout(() => {
						this._removeModalElements(), this._scrollBar.reset()
				  }, 300)
				: (this._removeModalElements(), this._scrollBar.reset()),
				ct.off(
					this._document,
					`${Cu} ${qo} ${Au} ${wu} ${ku} ${Su} ${Ou} ${Mu} ${Iu} ${Du}`
				),
				_.off(window, qo)
		}
		_removeModalElements() {
			this._modal && this._modal.remove()
		}
		_toggleBackdropAnimation(t = !1) {
			t
				? this._wrapper.classList.add('animate-[fade-out_350ms_ease-in-out]')
				: (this._wrapper.classList.add('animate-[fade-in_350ms_ease-in-out]'),
				  this._options.inline ||
						g.addClass(this._clock, this._classes.clockAnimation)),
				setTimeout(() => {
					this._wrapper.classList.remove(
						'animate-[fade-out_350ms_ease-in-out]',
						'animate-[fade-in_350ms_ease-in-out]'
					)
				}, 351)
		}
		_addActiveClassToTip(t, e) {
			t.forEach(i => {
				Number(i.textContent) === Number(e) &&
					(g.addClass(i, this._classes.tipsActive), i.setAttribute(J, ''))
			})
		}
		_setHourOrMinute(t) {
			return t < 10 ? `0${t}` : t
		}
		_appendTimes() {
			const { format24: t } = this._options
			if (t) {
				this._getAppendClock(this.hoursArray, `[${wi}]`, _t),
					this._getAppendClock(this.innerHours, `[${Qs}]`, Bt)
				return
			}
			this._getAppendClock(this.hoursArray, `[${wi}]`, _t)
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._element)
			return (t = { ...aE, ...e, ...t }), L(Zs, t, lE), t
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...cE, ...e, ...t }), L(Zs, t, hE), t
		}
		_getContainer() {
			return m.findOne(this._options.container)
		}
		_getValidate(t) {
			const {
				format24: e,
				format12: i,
				appendValidationInfo: n,
			} = this._options
			ct.on(this.input, t, ({ target: o }) => {
				if (this._options === null || this.input.value === '') return
				const r = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/,
					a = /^([01]\d|2[0-3])(:[0-5]\d)$/,
					l = r.test(o.value)
				if ((a.test(o.value) !== !0 && e) || (l !== !0 && i)) {
					n && this.input.setAttribute(Sl, ''),
						g.addStyle(o, { marginBottom: 0 }),
						(this._isInvalidTimeFormat = !0)
					return
				}
				this.input.removeAttribute(Sl), (this._isInvalidTimeFormat = !1)
				const h = m.findOne(`[${oE}]`)
				h !== null && h.remove()
			})
		}
		static getInstance(t) {
			return O.getData(t, Go)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const dE = { threshold: 10, direction: 'all' }
	let uE = class {
			constructor(t, e) {
				;(this._element = t),
					(this._startPosition = null),
					(this._options = { ...dE, ...e })
			}
			handleTouchStart(t) {
				this._startPosition = this._getCoordinates(t)
			}
			handleTouchMove(t) {
				if (!this._startPosition) return
				const e = this._getCoordinates(t),
					i = {
						x: e.x - this._startPosition.x,
						y: e.y - this._startPosition.y,
					},
					n = this._getDirection(i)
				if (this._options.direction === 'all') {
					if (
						n.y.value < this._options.threshold &&
						n.x.value < this._options.threshold
					)
						return
					const r = n.y.value > n.x.value ? n.y.direction : n.x.direction
					_.trigger(this._element, `swipe${r}`),
						_.trigger(this._element, 'swipe', { direction: r }),
						(this._startPosition = null)
					return
				}
				const o =
					this._options.direction === 'left' || this._options === 'right'
						? 'x'
						: 'y'
				n[o].direction === this._options.direction &&
					n[o].value > this._options.threshold &&
					(_.trigger(this._element, `swipe${n[o].direction}`),
					(this._startPosition = null))
			}
			handleTouchEnd() {
				this._startPosition = null
			}
			_getCoordinates(t) {
				const [e] = t.touches
				return { x: e.clientX, y: e.clientY }
			}
			_getDirection(t) {
				return {
					x: { direction: t.x < 0 ? 'left' : 'right', value: Math.abs(t.x) },
					y: { direction: t.y < 0 ? 'up' : 'down', value: Math.abs(t.y) },
				}
			}
		},
		pE = class {
			constructor(t, e = 'swipe', i = {}) {
				;(this._element = t),
					(this._event = e),
					(this.swipe = new uE(t, i)),
					(this._touchStartHandler = this._handleTouchStart.bind(this)),
					(this._touchMoveHandler = this._handleTouchMove.bind(this)),
					(this._touchEndHandler = this._handleTouchEnd.bind(this))
			}
			dispose() {
				this._element.removeEventListener(
					'touchstart',
					this._touchStartHandler
				),
					this._element.removeEventListener(
						'touchmove',
						this._touchMoveHandler
					),
					window.removeEventListener('touchend', this._touchEndHandler)
			}
			init() {
				this._element.addEventListener('touchstart', t =>
					this._handleTouchStart(t)
				),
					this._element.addEventListener('touchmove', t =>
						this._handleTouchMove(t)
					),
					window.addEventListener('touchend', t => this._handleTouchEnd(t))
			}
			_handleTouchStart(t) {
				this[this._event].handleTouchStart(t)
			}
			_handleTouchMove(t) {
				this[this._event].handleTouchMove(t)
			}
			_handleTouchEnd(t) {
				this[this._event].handleTouchEnd(t)
			}
		}
	const $l = 'stepper',
		ir = 'te.stepper',
		ds = `.${ir}`,
		Js = `data-te-${$l}`,
		tn = 'horizontal',
		ge = 'vertical',
		fE = `onChangeStep${ds}`,
		_E = `onChangedStep${ds}`,
		gE = {
			stepperType: 'string',
			stepperLinear: 'boolean',
			stepperNoEditable: 'boolean',
			stepperActive: 'string',
			stepperCompleted: 'string',
			stepperInvalid: 'string',
			stepperDisabled: 'string',
			stepperVerticalBreakpoint: 'number',
			stepperMobileBreakpoint: 'number',
			stepperMobileBarBreakpoint: 'number',
			stepperAnimationDuration: 'number',
			slideInLeftAnimation: 'string',
			slideOutLeftAnimation: 'string',
			slideInRightAnimation: 'string',
			slideOutRightAnimation: 'string',
		},
		mE = {
			stepperType: tn,
			stepperLinear: !1,
			stepperNoEditable: !1,
			stepperActive: '',
			stepperCompleted: '',
			stepperInvalid: '',
			stepperDisabled: '',
			stepperVerticalBreakpoint: 0,
			stepperMobileBreakpoint: 0,
			stepperMobileBarBreakpoint: 4,
			stepperAnimationDuration: 800,
			slideInLeftAnimation: 'animate-[slide-in-left_0.8s_both]',
			slideOutLeftAnimation: 'animate-[slide-out-left_0.8s_both]',
			slideInRightAnimation: 'animate-[slide-in-right_0.8s_both]',
			slideOutRightAnimation: 'animate-[slide-out-right_0.8s_both]',
		},
		Bu = `mousedown${ds}`,
		Hu = `keydown${ds}`,
		bE = `keyup${ds}`,
		Vu = `resize${ds}`,
		Ge = `[${Js}-step-ref]`,
		Ct = `[${Js}-head-ref]`,
		Fu = `[${Js}-head-text-ref]`,
		sr = `[${Js}-head-icon-ref]`,
		At = `[${Js}-content-ref]`
	class Wu {
		constructor(t, e) {
			;(this._element = t),
				(this._options = this._getConfig(e)),
				(this._elementHeight = 0),
				(this._steps = m.find(`${Ge}`, this._element)),
				(this._currentView = ''),
				(this._activeStepIndex = 0),
				(this._verticalStepperStyles = []),
				(this._timeout = 0),
				this._element && (O.setData(t, ir, this), this._init())
		}
		static get NAME() {
			return $l
		}
		get activeStep() {
			return this._steps[this._activeStepIndex]
		}
		get activeStepIndex() {
			return this._activeStepIndex
		}
		dispose() {
			this._steps.forEach(t => {
				_.off(t, Bu), _.off(t, Hu)
			}),
				_.off(window, Vu),
				O.removeData(this._element, ir),
				(this._element = null)
		}
		changeStep(t) {
			this._toggleStep(t)
		}
		nextStep() {
			this._toggleStep(this._activeStepIndex + 1)
		}
		previousStep() {
			this._toggleStep(this._activeStepIndex - 1)
		}
		_init() {
			const t = m
					.find(`${Ge}`, this._element)
					[this._activeStepIndex].setAttribute('data-te', 'active-step'),
				e = m.find(`${Fu}`, this._element),
				i = m.find(`${sr}`, this._element)
			switch (
				(t
					? ((this._activeStepIndex = this._steps.indexOf(t)),
					  this._toggleStepClass(
							this._activeStepIndex,
							'add',
							this._options.stepperActive
					  ),
					  e[this._activeStepIndex].classList.add('font-medium'),
					  i[this._activeStepIndex].classList.add('!bg-primary-100'),
					  i[this._activeStepIndex].classList.add('!text-primary-700'))
					: (e[this._activeStepIndex].classList.add('font-medium'),
					  i[this._activeStepIndex].classList.add('!bg-primary-100'),
					  i[this._activeStepIndex].classList.add('!text-primary-700'),
					  this._toggleStepClass(
							this._activeStepIndex,
							'add',
							this._options.stepperActive
					  )),
				this._bindMouseDown(),
				this._bindKeysNavigation(),
				this._options.stepperType)
			) {
				case ge:
					this._toggleVertical()
					break
				default:
					this._toggleHorizontal()
					break
			}
			;(this._options.stepperVerticalBreakpoint ||
				this._options.stepperMobileBreakpoint) &&
				this._toggleStepperView(),
				this._bindResize()
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._element)
			return (t = { ...mE, ...e, ...t }), L($l, t, gE), t
		}
		_bindMouseDown() {
			this._steps.forEach(t => {
				const e = m.findOne(`${Ct}`, t)
				_.on(e, Bu, i => {
					const n = m.parents(i.target, `${Ge}`)[0],
						o = this._steps.indexOf(n)
					i.preventDefault(), this._toggleStep(o)
				})
			})
		}
		_bindResize() {
			_.on(window, Vu, () => {
				this._currentView === ge && this._setSingleStepHeight(this.activeStep),
					this._currentView === tn && this._setHeight(this.activeStep),
					(this._options.stepperVerticalBreakpoint ||
						this._options.stepperMobileBreakpoint) &&
						this._toggleStepperView()
			})
		}
		_toggleStepperView() {
			const t = this._options.stepperVerticalBreakpoint < window.innerWidth,
				e = this._options.stepperVerticalBreakpoint > window.innerWidth,
				i = this._options.stepperMobileBreakpoint > window.innerWidth
			t && this._currentView !== tn && this._toggleHorizontal(),
				e &&
					!i &&
					this._currentView !== ge &&
					(this._steps.forEach(n => {
						const o = m.findOne(`${At}`, n)
						this._resetStepperHeight(), this._showElement(o)
					}),
					this._toggleVertical())
		}
		_toggleStep(t) {
			if (this._activeStepIndex === t) return
			this._options.stepperNoEditable && this._toggleDisabled()
			const e = this._activeStepIndex,
				i = _.trigger(this.activeStep, fE, {
					currentStep: this._activeStepIndex,
					nextStep: t,
				})
			;(t > this._activeStepIndex && i.defaultPrevented) ||
				(this._showElement(m.findOne(`${At}`, this._steps[t])),
				this._toggleActive(t),
				t > this._activeStepIndex &&
					this._toggleCompleted(this._activeStepIndex),
				this._currentView === tn
					? this._animateHorizontalStep(t)
					: (this._animateVerticalStep(t),
					  this._setSingleStepHeight(this._steps[t])),
				this._toggleStepTabIndex(
					m.findOne(`${Ct}`, this.activeStep),
					m.findOne(`${Ct}`, this._steps[t])
				),
				(this._activeStepIndex = t),
				this._steps[this._activeStepIndex].setAttribute(
					'data-te',
					'active-step'
				),
				this._steps.forEach((n, o) => {
					n[this._activeStepIndex] !== o && n.removeAttribute('data-te')
				}),
				_.trigger(this.activeStep, _E, {
					currentStep: this._activeStepIndex,
					prevStep: e,
				}))
		}
		_resetStepperHeight() {
			this._element.style.height = ''
		}
		_setStepsHeight() {
			this._steps.forEach(t => {
				const e = m.findOne(`${At}`, t),
					i = window.getComputedStyle(e)
				this._verticalStepperStyles.push({
					paddingTop: parseFloat(i.paddingTop),
					paddingBottom: parseFloat(i.paddingBottom),
				})
				const n = e.scrollHeight
				e.style.height = `${n}px`
			})
		}
		_setSingleStepHeight(t) {
			const e = m.findOne(`${At}`, t),
				i = this.activeStep === t,
				n = this._steps.indexOf(t)
			let o
			i
				? ((e.style.height = ''), (o = e.scrollHeight))
				: (o =
						e.scrollHeight +
						this._verticalStepperStyles[n].paddingTop +
						this._verticalStepperStyles[n].paddingBottom),
				(e.style.height = `${o}px`)
		}
		_toggleVertical() {
			;(this._currentView = ge),
				this._setStepsHeight(),
				this._hideInactiveSteps()
		}
		_toggleHorizontal() {
			;(this._currentView = tn),
				this._setHeight(this.activeStep),
				this._hideInactiveSteps()
		}
		_toggleStepperClass() {
			m.findOne('[data-te-stepper-type]', this._element) !== null &&
				this._steps.forEach(e => {
					m.findOne(`${At}`, e).classList.remove('!my-0'),
						m.findOne(`${At}`, e).classList.remove('!py-0'),
						m.findOne(`${At}`, e).classList.remove('!h-0')
				})
		}
		_toggleStepClass(t, e, i) {
			i && this._steps[t].classList[e](i)
		}
		_bindKeysNavigation() {
			this._toggleStepTabIndex(!1, m.findOne(`${Ct}`, this.activeStep)),
				this._steps.forEach(t => {
					const e = m.findOne(`${Ct}`, t)
					_.on(e, Hu, i => {
						const n = m.parents(i.currentTarget, `${Ge}`)[0],
							o = m.next(n, `${Ge}`)[0],
							r = m.prev(n, `${Ge}`)[0],
							a = m.findOne(`${Ct}`, n),
							l = m.findOne(`${Ct}`, this.activeStep)
						let c = null,
							h = null
						if (
							(o && (c = m.findOne(`${Ct}`, o)),
							r && (h = m.findOne(`${Ct}`, r)),
							i.keyCode === cs &&
								this._currentView !== ge &&
								(h
									? (this._toggleStepTabIndex(a, h),
									  this._toggleOutlineStyles(a, h),
									  h.focus())
									: c &&
									  (this._toggleStepTabIndex(a, c),
									  this._toggleOutlineStyles(a, c),
									  c.focus())),
							i.keyCode === hs &&
								this._currentView !== ge &&
								(c
									? (this._toggleStepTabIndex(a, c),
									  this._toggleOutlineStyles(a, c),
									  c.focus())
									: h &&
									  (this._toggleStepTabIndex(a, h),
									  this._toggleOutlineStyles(a, h),
									  h.focus())),
							i.keyCode === ht &&
								this._currentView === ge &&
								(i.preventDefault(),
								c &&
									(this._toggleStepTabIndex(a, c),
									this._toggleOutlineStyles(a, c),
									c.focus())),
							i.keyCode === ut &&
								this._currentView === ge &&
								(i.preventDefault(),
								h &&
									(this._toggleStepTabIndex(a, h),
									this._toggleOutlineStyles(a, h),
									h.focus())),
							i.keyCode === Ti)
						) {
							const d = m.findOne(`${Ct}`, this._steps[0])
							this._toggleStepTabIndex(a, d),
								this._toggleOutlineStyles(a, d),
								d.focus()
						}
						if (i.keyCode === Ei) {
							const d = this._steps[this._steps.length - 1],
								u = m.findOne(`${Ct}`, d)
							this._toggleStepTabIndex(a, u),
								this._toggleOutlineStyles(a, u),
								u.focus()
						}
						;(i.keyCode === Et || i.keyCode === Ho) &&
							(i.preventDefault(), this.changeStep(this._steps.indexOf(n))),
							i.keyCode === Ci &&
								(this._toggleStepTabIndex(a, l),
								this._toggleOutlineStyles(a, !1),
								l.focus())
					}),
						_.on(e, bE, i => {
							const n = m.parents(i.currentTarget, `${Ge}`)[0],
								o = m.findOne(`${Ct}`, n),
								r = m.findOne(`${Ct}`, this.activeStep)
							i.keyCode === Ci &&
								(this._toggleStepTabIndex(o, r),
								this._toggleOutlineStyles(!1, r),
								r.focus())
						})
				})
		}
		_toggleStepTabIndex(t, e) {
			t && t.setAttribute('tabIndex', -1), e && e.setAttribute('tabIndex', 0)
		}
		_toggleOutlineStyles(t, e) {
			t && (t.style.outline = ''), e && (e.style.outline = 'revert')
		}
		_toggleDisabled() {
			const t = m.find(`${Ct}`, this._element),
				e = m.find(`${sr}`, this._element)
			t[this._activeStepIndex].classList.add('color-[#858585]'),
				t[this._activeStepIndex].classList.add('cursor-default'),
				e[this._activeStepIndex].classList.add('!bg-[#858585]'),
				this._toggleStepClass(
					this._activeStepIndex,
					'add',
					this._options.stepperDisabled
				)
		}
		_toggleActive(t) {
			const e = m.find(`${Fu}`, this._element),
				i = m.find(`${sr}`, this._element)
			e[t].classList.add('font-medium'),
				i[t].classList.add('!bg-primary-100'),
				i[t].classList.add('!text-primary-700'),
				i[t].classList.remove('!bg-success-100'),
				i[t].classList.remove('!text-success-700'),
				e[this._activeStepIndex].classList.remove('font-medium'),
				i[this._activeStepIndex].classList.remove('!bg-primary-100'),
				i[this._activeStepIndex].classList.remove('!text-primary-700'),
				this._toggleStepClass(t, 'add', this._options.stepperActive),
				this._toggleStepClass(
					this._activeStepIndex,
					'remove',
					this._options.stepperActive
				)
		}
		_toggleCompleted(t) {
			const e = m.find(`${sr}`, this._element)
			this._options.stepperNoEditable
				? this._steps[t].classList.add('pointer-events-none')
				: (e[t].classList.add('!bg-success-100'),
				  e[t].classList.add('!text-success-700')),
				e[t].classList.remove('!bg-danger-100'),
				e[t].classList.remove('!text-danger-700'),
				this._toggleStepClass(t, 'add', this._options.stepperCompleted),
				this._toggleStepClass(t, 'remove', this._options.stepperInvalid)
		}
		_hideInactiveSteps() {
			this._steps.forEach(t => {
				if (!t.getAttribute('data-te')) {
					const e = m.findOne(`${At}`, t)
					e.classList.remove('translate-x-[150%]'), this._hideElement(e)
				}
			})
		}
		_setHeight(t) {
			const e = m.findOne(`${At}`, t),
				i = getComputedStyle(e),
				n = m.findOne(`${Ct}`, t),
				o = getComputedStyle(n),
				r =
					e.offsetHeight + parseFloat(i.marginTop) + parseFloat(i.marginBottom),
				a =
					n.offsetHeight + parseFloat(o.marginTop) + parseFloat(o.marginBottom)
			this._element.style.height = `${a + r}px`
		}
		_hideElement(t) {
			!m.parents(t, `${Ge}`)[0].getAttribute('data-te') &&
			this._currentView !== ge
				? (t.style.display = 'none')
				: (t.classList.add('!my-0'),
				  t.classList.add('!py-0'),
				  t.classList.add('!h-0'))
		}
		_showElement(t) {
			this._currentView === ge
				? (t.classList.remove('!my-0'),
				  t.classList.remove('!py-0'),
				  t.classList.remove('!h-0'))
				: (t.style.display = 'block')
		}
		_animateHorizontalStep(t) {
			clearTimeout(this._timeout), this._clearStepsAnimation()
			const e = t > this._activeStepIndex,
				i = m.findOne(`${At}`, this._steps[t]),
				n = m.findOne(`${At}`, this.activeStep)
			let o, r
			this._steps.forEach((a, l) => {
				const c = m.findOne(`${At}`, a)
				l !== t && l !== this._activeStepIndex && this._hideElement(c)
			}),
				e
					? ((r = this._options.slideOutLeftAnimation),
					  (o = this._options.slideInRightAnimation))
					: ((r = this._options.slideOutRightAnimation),
					  (o = this._options.slideInLeftAnimation)),
				n.classList.add(r),
				i.classList.add(o),
				this._setHeight(this._steps[t]),
				(this._timeout = setTimeout(() => {
					this._hideElement(n), this._clearStepsAnimation()
				}, this._options.stepperAnimationDuration))
		}
		_clearStepsAnimation() {
			this._steps.forEach(t => {
				m.findOne(`${At}`, t).classList.remove(
					this._options.slideInLeftAnimation,
					this._options.slideOutLeftAnimation,
					this._options.slideInRightAnimation,
					this._options.slideOutRightAnimation
				)
			})
		}
		_animateVerticalStep(t) {
			const e = m.findOne(`${At}`, this._steps[t]),
				i = m.findOne(`${At}`, this.activeStep)
			this._hideElement(i), this._showElement(e)
		}
		static getInstance(t) {
			return O.getData(t, ir)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const zu = 'data-te-input-state-active',
		nr = 'data-te-input-selected',
		ju = 'data-te-input-multiple-active',
		Yu = '[data-te-form-check-input]'
	class Ku {
		constructor(t, e, i, n, o, r, a, l, c, h, d) {
			;(this.id = t),
				(this.nativeOption = e),
				(this.multiple = i),
				(this.value = n),
				(this.label = o),
				(this.selected = r),
				(this.disabled = a),
				(this.hidden = l),
				(this.secondaryText = c),
				(this.groupId = h),
				(this.icon = d),
				(this.node = null),
				(this.active = !1)
		}
		select() {
			this.multiple ? this._selectMultiple() : this._selectSingle()
		}
		_selectSingle() {
			this.selected ||
				(this.node.setAttribute(nr, ''),
				this.node.setAttribute('aria-selected', !0),
				(this.selected = !0),
				this.nativeOption && (this.nativeOption.selected = !0))
		}
		_selectMultiple() {
			if (!this.selected) {
				const t = m.findOne(Yu, this.node)
				;(t.checked = !0),
					this.node.setAttribute(nr, ''),
					this.node.setAttribute('aria-selected', !0),
					(this.selected = !0),
					this.nativeOption && (this.nativeOption.selected = !0)
			}
		}
		deselect() {
			this.multiple ? this._deselectMultiple() : this._deselectSingle()
		}
		_deselectSingle() {
			this.selected &&
				(this.node.removeAttribute(nr),
				this.node.setAttribute('aria-selected', !1),
				(this.selected = !1),
				this.nativeOption && (this.nativeOption.selected = !1))
		}
		_deselectMultiple() {
			if (this.selected) {
				const t = m.findOne(Yu, this.node)
				;(t.checked = !1),
					this.node.removeAttribute(nr),
					this.node.setAttribute('aria-selected', !1),
					(this.selected = !1),
					this.nativeOption && (this.nativeOption.selected = !1)
			}
		}
		setNode(t) {
			this.node = t
		}
		setActiveStyles() {
			if (!this.active) {
				if (this.multiple) {
					this.node.setAttribute(ju, '')
					return
				}
				;(this.active = !0), this.node.setAttribute(zu, '')
			}
		}
		removeActiveStyles() {
			this.active && ((this.active = !1), this.node.removeAttribute(zu)),
				this.multiple && this.node.removeAttribute(ju)
		}
	}
	class vE {
		constructor(t = !1) {
			;(this._multiple = t), (this._selections = [])
		}
		select(t) {
			this._multiple ? this._selections.push(t) : (this._selections = [t])
		}
		deselect(t) {
			if (this._multiple) {
				const e = this._selections.findIndex(i => t === i)
				this._selections.splice(e, 1)
			} else this._selections = []
		}
		clear() {
			this._selections = []
		}
		get selection() {
			return this._selections[0]
		}
		get selections() {
			return this._selections
		}
		get label() {
			return this._selections[0] && this.selection.label
		}
		get labels() {
			return this._selections.map(t => t.label).join(', ')
		}
		get value() {
			return this.selections[0] && this.selection.value
		}
		get values() {
			return this._selections.map(t => t.value)
		}
	}
	function Rl(s) {
		return s.filter(t => !t.disabled).every(t => t.selected)
	}
	const yE = 'data-te-select-form-outline-ref',
		TE = 'data-te-select-wrapper-ref',
		EE = 'data-te-select-input-ref',
		xE = 'data-te-select-clear-btn-ref',
		CE = 'data-te-select-dropdown-container-ref',
		AE = 'data-te-select-dropdown-ref',
		wE = 'data-te-select-options-wrapper-ref',
		kE = 'data-te-select-options-list-ref',
		SE = 'data-te-select-input-filter-ref',
		Uu = 'data-te-select-option-ref',
		OE = 'data-te-select-option-all-ref',
		IE = 'data-te-select-option-text-ref',
		DE = 'data-te-form-check-input',
		ME = 'data-te-select-option-group-ref',
		LE = 'data-te-select-option-group-label-ref',
		Xu = 'data-te-select-selected',
		$E = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`,
		RE = s => {
			s.code === 'Tab' || s.code === 'Esc' || s.preventDefault()
		}
	function or(s, t, e, i, n) {
		t.selectSize === 'default' && g.addClass(s, e),
			t.selectSize === 'sm' && g.addClass(s, i),
			t.selectSize === 'lg' && g.addClass(s, n)
	}
	function PE(s, t, e, i, n) {
		const o = document.createElement('div')
		o.setAttribute('id', s), o.setAttribute(TE, '')
		const r = $('div')
		r.setAttribute(yE, ''), g.addClass(r, i.formOutline)
		const a = $('input'),
			l = t.selectFilter ? 'combobox' : 'listbox',
			c = t.multiple ? 'true' : 'false',
			h = t.disabled ? 'true' : 'false'
		a.setAttribute(EE, ''),
			g.addClass(a, i.selectInput),
			or(
				a,
				t,
				i.selectInputSizeDefault,
				i.selectInputSizeSm,
				i.selectInputSizeLg
			),
			t.selectFormWhite && g.addClass(a, i.selectInputWhite),
			a.setAttribute('type', 'text'),
			a.setAttribute('role', l),
			a.setAttribute('aria-multiselectable', c),
			a.setAttribute('aria-disabled', h),
			a.setAttribute('aria-haspopup', 'true'),
			a.setAttribute('aria-expanded', !1),
			t.tabIndex && a.setAttribute('tabIndex', t.tabIndex),
			t.disabled && a.setAttribute('disabled', ''),
			t.selectPlaceholder !== '' &&
				a.setAttribute('placeholder', t.selectPlaceholder),
			t.selectValidation
				? (g.addStyle(a, {
						'pointer-events': 'none',
						'caret-color': 'transparent',
				  }),
				  g.addStyle(r, { cursor: 'pointer' }))
				: a.setAttribute('readonly', 'true'),
			t.selectValidation &&
				(a.setAttribute('required', 'true'),
				a.setAttribute('aria-required', 'true'),
				a.addEventListener('keydown', RE))
		const d = $('div')
		g.addClass(d, i.selectValidationValid)
		const u = document.createTextNode(`${t.selectValidFeedback}`)
		d.appendChild(u)
		const p = $('div')
		g.addClass(p, i.selectValidationInvalid)
		const f = document.createTextNode(`${t.selectInvalidFeedback}`)
		p.appendChild(f)
		const b = $('span')
		b.setAttribute(xE, ''),
			g.addClass(b, i.selectClearBtn),
			or(b, t, i.selectClearBtnDefault, i.selectClearBtnSm, i.selectClearBtnLg),
			t.selectFormWhite && g.addClass(b, i.selectClearBtnWhite)
		const v = document.createTextNode('✕')
		b.appendChild(v), b.setAttribute('tabindex', '0')
		const y = $('span')
		return (
			g.addClass(y, i.selectArrow),
			or(y, t, i.selectArrowDefault, i.selectArrowSm, i.selectArrowLg),
			t.selectFormWhite && g.addClass(y, i.selectArrowWhite),
			(y.innerHTML = n || $E),
			r.appendChild(a),
			e &&
				(g.addClass(e, i.selectLabel),
				or(
					e,
					t,
					i.selectLabelSizeDefault,
					i.selectLabelSizeSm,
					i.selectLabelSizeLg
				),
				t.selectFormWhite && g.addClass(e, i.selectLabelWhite),
				r.appendChild(e)),
			t.selectValidation && (r.appendChild(d), r.appendChild(p)),
			t.selectClearButton && r.appendChild(b),
			r.appendChild(y),
			o.appendChild(r),
			o
		)
	}
	function Gu(s, t, e, i, n, o, r, a) {
		const l = document.createElement('div')
		l.setAttribute(CE, ''),
			g.addClass(l, a.selectDropdownContainer),
			l.setAttribute('id', `${s}`),
			(l.style.width = `${e}px`)
		const c = document.createElement('div')
		c.setAttribute('tabindex', 0),
			c.setAttribute(AE, ''),
			g.addClass(c, a.dropdown)
		const h = $('div')
		h.setAttribute(wE, ''),
			g.addClass(h, a.optionsWrapper),
			g.addClass(h, a.optionsWrapperScrollbar),
			(h.style.maxHeight = `${i}px`)
		const d = qu(o, n, t, a)
		return (
			h.appendChild(d),
			t.selectFilter && c.appendChild(NE(t.selectSearchPlaceholder, a)),
			c.appendChild(h),
			r && c.appendChild(r),
			l.appendChild(c),
			l
		)
	}
	function qu(s, t, e, i) {
		const n = $('div')
		n.setAttribute(kE, ''), g.addClass(n, i.optionsList)
		let o
		return (
			e.multiple ? (o = HE(s, t, e, i)) : (o = BE(s, e, i)),
			o.forEach(r => {
				n.appendChild(r)
			}),
			n
		)
	}
	function NE(s, t) {
		const e = $('div')
		g.addClass(e, t.inputGroup)
		const i = $('input')
		return (
			i.setAttribute(SE, ''),
			g.addClass(i, t.selectFilterInput),
			(i.placeholder = s),
			i.setAttribute('role', 'searchbox'),
			i.setAttribute('type', 'text'),
			e.appendChild(i),
			e
		)
	}
	function BE(s, t, e) {
		return Zu(s, t, e)
	}
	function HE(s, t, e, i) {
		let n = null
		e.selectAll && (n = VE(t, s, e, i))
		const o = Zu(s, e, i)
		return n ? [n, ...o] : o
	}
	function Zu(s, t, e) {
		const i = []
		return (
			s.forEach(n => {
				if (Object.prototype.hasOwnProperty.call(n, 'options')) {
					const r = jE(n, t, e)
					i.push(r)
				} else i.push(Qu(n, t, e))
			}),
			i
		)
	}
	function VE(s, t, e, i) {
		const n = Rl(t),
			o = $('div')
		o.setAttribute(Uu, '')
		const r = i.selectAllOption || i.selectOption
		return (
			g.addClass(o, r),
			o.setAttribute(OE, ''),
			g.addStyle(o, { height: `${e.selectOptionHeight}px` }),
			o.setAttribute('role', 'option'),
			o.setAttribute('aria-selected', n),
			n && o.setAttribute(Xu, ''),
			o.appendChild(Ju(s, e, i)),
			s.setNode(o),
			o
		)
	}
	function Qu(s, t, e) {
		if (s.node) return s.node
		const i = $('div')
		return (
			i.setAttribute(Uu, ''),
			g.addClass(i, e.selectOption),
			g.addStyle(i, { height: `${t.selectOptionHeight}px` }),
			g.setDataAttribute(i, 'id', s.id),
			i.setAttribute('role', 'option'),
			i.setAttribute('aria-selected', s.selected),
			i.setAttribute('aria-disabled', s.disabled),
			s.selected && i.setAttribute(Xu, ''),
			s.disabled && i.setAttribute('data-te-select-option-disabled', !0),
			s.hidden && g.addClass(i, 'hidden'),
			i.appendChild(Ju(s, t, e)),
			s.icon && i.appendChild(zE(s, e)),
			s.setNode(i),
			i
		)
	}
	function Ju(s, t, e) {
		const i = $('span')
		i.setAttribute(IE, ''), g.addClass(i, e.selectOptionText)
		const n = document.createTextNode(s.label)
		return (
			t.multiple && i.appendChild(WE(s, e)),
			i.appendChild(n),
			(s.secondaryText || typeof s.secondaryText == 'number') &&
				i.appendChild(FE(s.secondaryText, e)),
			i
		)
	}
	function FE(s, t) {
		const e = $('span')
		g.addClass(e, t.selectOptionSecondaryText)
		const i = document.createTextNode(s)
		return e.appendChild(i), e
	}
	function WE(s, t) {
		const e = $('input')
		e.setAttribute('type', 'checkbox'),
			g.addClass(e, t.formCheckInput),
			e.setAttribute(DE, '')
		const i = $('label')
		return (
			s.selected && e.setAttribute('checked', !0),
			s.disabled && e.setAttribute('disabled', !0),
			e.appendChild(i),
			e
		)
	}
	function zE(s, t) {
		const e = $('span'),
			i = $('img')
		return (
			g.addClass(i, t.selectOptionIcon), (i.src = s.icon), e.appendChild(i), e
		)
	}
	function jE(s, t, e) {
		const i = $('div')
		i.setAttribute(ME, ''),
			g.addClass(i, e.selectOptionGroup),
			i.setAttribute('role', 'group'),
			i.setAttribute('id', s.id),
			s.hidden && g.addClass(i, 'hidden')
		const n = $('label')
		return (
			n.setAttribute(LE, ''),
			g.addClass(n, e.selectOptionGroupLabel),
			g.addStyle(n, { height: `${t.selectOptionHeight}px` }),
			n.setAttribute('for', s.id),
			(n.textContent = s.label),
			i.appendChild(n),
			s.options.forEach(o => {
				i.appendChild(Qu(o, t, e))
			}),
			i
		)
	}
	function YE(s, t) {
		const e = $('div')
		return (
			(e.textContent = s),
			g.addClass(e, t.selectLabel),
			g.addClass(e, t.selectFakeValue),
			e
		)
	}
	const Pl = 'select',
		en = 'te.select',
		sn = `.${en}`,
		KE = `close${sn}`,
		UE = `open${sn}`,
		tp = `optionSelect${sn}`,
		ep = `optionDeselect${sn}`,
		XE = `valueChange${sn}`,
		GE = 'change',
		ip = 'data-te-select-init',
		sp = 'data-te-select-no-results-ref',
		np = 'data-te-select-open',
		wt = 'data-te-input-state-active',
		qe = 'data-te-input-focused',
		Nl = 'data-te-input-disabled',
		qE = 'data-te-select-option-group-label-ref',
		ZE = 'data-te-select-option-all-ref',
		nn = 'data-te-select-selected',
		QE = '[data-te-select-label-ref]',
		op = '[data-te-select-input-ref]',
		JE = '[data-te-select-input-filter-ref]',
		tx = '[data-te-select-dropdown-ref]',
		ex = '[data-te-select-options-wrapper-ref]',
		rp = '[data-te-select-options-list-ref]',
		ix = '[data-te-select-option-ref]',
		sx = '[data-te-select-clear-btn-ref]',
		nx = '[data-te-select-custom-content-ref]',
		ox = `[${sp}]`,
		ap = '[data-te-select-form-outline-ref]',
		rx = '[data-te-select-toggle]',
		Bl = '[data-te-input-notch-ref]',
		ax = {
			selectAutoSelect: !1,
			selectContainer: 'body',
			selectClearButton: !1,
			disabled: !1,
			selectDisplayedLabels: 5,
			selectFormWhite: !1,
			multiple: !1,
			selectOptionsSelectedLabel: 'options selected',
			selectOptionHeight: 38,
			selectAll: !0,
			selectAllLabel: 'Выбрать все',
			selectSearchPlaceholder: 'Поиск...',
			selectSize: 'default',
			selectVisibleOptions: 5,
			selectFilter: !1,
			selectFilterDebounce: 300,
			selectNoResultText: 'Ничего не найдено',
			selectValidation: !1,
			selectValidFeedback: 'Valid',
			selectInvalidFeedback: 'Invalid',
			selectPlaceholder: '',
		},
		lx = {
			selectAutoSelect: 'boolean',
			selectContainer: 'string',
			selectClearButton: 'boolean',
			disabled: 'boolean',
			selectDisplayedLabels: 'number',
			selectFormWhite: 'boolean',
			multiple: 'boolean',
			selectOptionsSelectedLabel: 'string',
			selectOptionHeight: 'number',
			selectAll: 'boolean',
			selectAllLabel: 'string',
			selectSearchPlaceholder: 'string',
			selectSize: 'string',
			selectVisibleOptions: 'number',
			selectFilter: 'boolean',
			selectFilterDebounce: 'number',
			selectNoResultText: 'string',
			selectValidation: 'boolean',
			selectValidFeedback: 'string',
			selectInvalidFeedback: 'string',
			selectPlaceholder: 'string',
		},
		cx = {
			dropdown:
				'relative outline-none min-w-[100px] m-0 scale-y-[0.8] opacity-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none data-[te-select-open]:scale-100 data-[te-select-open]:opacity-100 dark:bg-white',
			formCheckInput:
				"relative float-left mt-[0.15rem] mr-[8px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-500 dark:checked:border-blue-500 dark:checked:bg-blue-500 checked:bg-blue-500 checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent",
			formOutline: 'relative',
			initialized: 'hidden',
			inputGroup:
				'flex items-center whitespace-nowrap p-2.5 text-center text-base font-normal leading-[1.6] text-gray-700 dark:bg-white dark:text-red-200 dark:placeholder:text-gray-400',
			noResult: 'flex items-center px-4',
			optionsList: 'list-none m-0 p-0',
			optionsWrapper: 'overflow-y-auto',
			optionsWrapperScrollbar:
				'[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded',
			selectArrow:
				'absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5',
			selectArrowWhite:
				'text-gray-50 peer-focus:!text-white peer-data-[te-input-focused]:!text-white',
			selectArrowDefault: 'top-2',
			selectArrowLg: 'top-[13px]',
			selectArrowSm: 'top-1',
			selectClearBtn:
				'absolute top-2 right-9 text-black cursor-pointer focus:text-primary outline-none dark:text-gray-700',
			selectClearBtnWhite: '!text-gray-50',
			selectClearBtnDefault: 'top-2 text-base',
			selectClearBtnLg: 'top-[11px] text-base',
			selectClearBtnSm: 'top-1 text-[0.8rem]',
			selectDropdownContainer: 'z-[1070]',
			selectFakeValue:
				'transform-none hidden data-[te-input-state-active]:block',
			selectFilterInput:
				'relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out motion-reduce:transition-none focus:border-blue-500 focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-700 dark:placeholder:text-gray-400',
			selectInput:
				'peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-700 dark:placeholder:text-gray-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600',
			selectInputWhite: '!text-gray-50',
			selectInputSizeDefault: 'py-[0.32rem] px-3 leading-[1.6]',
			selectInputSizeLg: 'py-[0.32rem] px-3 leading-[2.15]',
			selectInputSizeSm: 'py-[0.33rem] px-3 text-xs leading-[1.5]',
			selectLabel:
				'pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-700 dark:peer-focus:text-black data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary',
			selectLabelWhite: '!text-gray-50',
			selectLabelSizeDefault:
				'pt-[0.37rem] leading-[1.6] peer-focus:-translate-y-[0.9rem] peer-data-[te-input-state-active]:-translate-y-[0.9rem] data-[te-input-state-active]:-translate-y-[0.9rem]',
			selectLabelSizeLg:
				'pt-[0.37rem] leading-[2.15] peer-focus:-translate-y-[1.15rem] peer-data-[te-input-state-active]:-translate-y-[1.15rem] data-[te-input-state-active]:-translate-y-[1.15rem]',
			selectLabelSizeSm:
				'pt-[0.37rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem] peer-data-[te-input-state-active]:-translate-y-[0.75rem] data-[te-input-state-active]:-translate-y-[0.75rem]',
			selectOption:
				'flex flex-row items-center justify-between w-full px-4 truncate text-gray-700 bg-transparent select-none cursor-pointer data-[te-input-multiple-active]:bg-black/5 hover:[&:not([data-te-select-option-disabled])]:bg-black/5 data-[te-input-state-active]:bg-black/5 data-[te-select-option-selected]:data-[te-input-state-active]:bg-black/5 data-[te-select-selected]:data-[te-select-option-disabled]:cursor-default data-[te-select-selected]:data-[te-select-option-disabled]:text-gray-400 data-[te-select-selected]:data-[te-select-option-disabled]:bg-transparent data-[te-select-option-selected]:bg-black/[0.02] data-[te-select-option-disabled]:text-gray-400 data-[te-select-option-disabled]:cursor-default group-data-[te-select-option-group-ref]/opt:pl-7 dark:text-gray-700 dark:hover:[&:not([data-te-select-option-disabled])]:bg-white/30 dark:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-selected]:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-disabled]:text-gray-400 dark:data-[te-input-multiple-active]:bg-white/30',
			selectAllOption: '',
			selectOptionGroup: 'group/opt',
			selectOptionGroupLabel:
				'flex flex-row items-center w-full px-4 truncate bg-transparent text-black/50 select-none dark:text-gray-300',
			selectOptionIcon: 'w-7 h-7 rounded-full',
			selectOptionSecondaryText:
				'block text-[0.8rem] text-gray-500 dark:text-gray-300',
			selectOptionText: 'group',
			selectValidationValid:
				'hidden absolute -mt-3 w-auto text-sm text-green-600 cursor-pointer group-data-[te-was-validated]/validation:peer-valid:block',
			selectValidationInvalid:
				'hidden absolute -mt-3 w-auto text-sm text-[rgb(220,76,100)] cursor-pointer group-data-[te-was-validated]/validation:peer-invalid:block',
		},
		hx = {
			dropdown: 'string',
			formCheckInput: 'string',
			formOutline: 'string',
			initialized: 'string',
			inputGroup: 'string',
			noResult: 'string',
			optionsList: 'string',
			optionsWrapper: 'string',
			optionsWrapperScrollbar: 'string',
			selectArrow: 'string',
			selectArrowDefault: 'string',
			selectArrowLg: 'string',
			selectArrowSm: 'string',
			selectClearBtn: 'string',
			selectClearBtnDefault: 'string',
			selectClearBtnLg: 'string',
			selectClearBtnSm: 'string',
			selectDropdownContainer: 'string',
			selectFakeValue: 'string',
			selectFilterInput: 'string',
			selectInput: 'string',
			selectInputSizeDefault: 'string',
			selectInputSizeLg: 'string',
			selectInputSizeSm: 'string',
			selectLabel: 'string',
			selectLabelSizeDefault: 'string',
			selectLabelSizeLg: 'string',
			selectLabelSizeSm: 'string',
			selectOption: 'string',
			selectAllOption: 'string',
			selectOptionGroup: 'string',
			selectOptionGroupLabel: 'string',
			selectOptionIcon: 'string',
			selectOptionSecondaryText: 'string',
			selectOptionText: 'string',
		}
	class on {
		constructor(t, e, i) {
			;(this._element = t),
				(this._config = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				this._config.selectPlaceholder &&
					!this._config.multiple &&
					this._addPlaceholderOption(),
				(this._optionsToRender = this._getOptionsToRender(t)),
				(this._plainOptions = this._getPlainOptions(this._optionsToRender)),
				(this._filteredOptionsList = null),
				(this._selectionModel = new vE(this.multiple)),
				(this._activeOptionIndex = -1),
				(this._activeOption = null),
				(this._wrapperId = bt('select-wrapper-')),
				(this._dropdownContainerId = bt('select-dropdown-container-')),
				(this._selectAllId = bt('select-all-')),
				(this._debounceTimeoutId = null),
				(this._dropdownHeight =
					this._config.selectOptionHeight * this._config.selectVisibleOptions),
				(this._popper = null),
				(this._input = null),
				(this._label = m.next(this._element, QE)[0]),
				(this._notch = null),
				(this._fakeValue = null),
				(this._isFakeValueActive = !1),
				(this._customContent = m.next(t, nx)[0]),
				(this._toggleButton = null),
				(this._elementToggle = null),
				(this._wrapper = null),
				(this._inputEl = null),
				(this._dropdownContainer = null),
				(this._container = null),
				(this._selectAllOption = null),
				this._init(),
				(this._mutationObserver = null),
				(this._isOpen = !1),
				this._addMutationObserver(),
				this._element && O.setData(t, en, this)
		}
		static get NAME() {
			return Pl
		}
		get filterInput() {
			return m.findOne(JE, this._dropdownContainer)
		}
		get dropdown() {
			return m.findOne(tx, this._dropdownContainer)
		}
		get optionsList() {
			return m.findOne(rp, this._dropdownContainer)
		}
		get optionsWrapper() {
			return m.findOne(ex, this._dropdownContainer)
		}
		get clearButton() {
			return m.findOne(sx, this._wrapper)
		}
		get options() {
			return this._filteredOptionsList
				? this._filteredOptionsList
				: this._plainOptions
		}
		get value() {
			return this.multiple
				? this._selectionModel.values
				: this._selectionModel.value
		}
		get multiple() {
			return this._config.multiple
		}
		get hasSelectAll() {
			return this.multiple && this._config.selectAll
		}
		get hasSelection() {
			return (
				this._selectionModel.selection ||
				this._selectionModel.selections.length > 0
			)
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._element)
			return (
				(t = { ...ax, ...e, ...t }),
				this._element.hasAttribute('multiple') && (t.multiple = !0),
				this._element.hasAttribute('disabled') && (t.disabled = !0),
				this._element.tabIndex &&
					(t.tabIndex = this._element.getAttribute('tabIndex')),
				L(Pl, t, lx),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...cx, ...e, ...t }), L(Pl, t, hx), t
		}
		_addPlaceholderOption() {
			const t = new Option('', '', !0, !0)
			;(t.hidden = !0), (t.selected = !0), this._element.prepend(t)
		}
		_getOptionsToRender(t) {
			const e = []
			return (
				t.childNodes.forEach(n => {
					if (n.nodeName === 'OPTGROUP') {
						const o = {
							id: bt('group-'),
							label: n.label,
							disabled: n.hasAttribute('disabled'),
							hidden: n.hasAttribute('hidden'),
							options: [],
						}
						n.childNodes.forEach(a => {
							a.nodeName === 'OPTION' &&
								o.options.push(this._createOptionObject(a, o))
						}),
							e.push(o)
					} else n.nodeName === 'OPTION' && e.push(this._createOptionObject(n))
				}),
				e
			)
		}
		_getPlainOptions(t) {
			if (!m.findOne('optgroup', this._element)) return t
			const i = []
			return (
				t.forEach(n => {
					Object.prototype.hasOwnProperty.call(n, 'options')
						? n.options.forEach(r => {
								i.push(r)
						  })
						: i.push(n)
				}),
				i
			)
		}
		_createOptionObject(t, e = {}) {
			const i = bt('option-'),
				n = e.id ? e.id : null,
				o = e.disabled ? e.disabled : !1,
				r = t.selected || t.hasAttribute(nn),
				a = t.hasAttribute('disabled') || o,
				l = t.hasAttribute('hidden') || (e && e.hidden),
				c = this.multiple,
				h = t.value,
				d = t.label,
				u = g.getDataAttribute(t, 'selectSecondaryText'),
				p = g.getDataAttribute(t, 'select-icon')
			return new Ku(i, t, c, h, d, r, a, l, u, n, p)
		}
		_getNavigationOptions() {
			const t = this.options.filter(e => !e.hidden)
			return this.hasSelectAll ? [this._selectAllOption, ...t] : t
		}
		_init() {
			this._renderMaterialWrapper(),
				(this._wrapper = m.findOne(`#${this._wrapperId}`)),
				(this._input = m.findOne(op, this._wrapper)),
				this._config.disabled && this._input.setAttribute(Nl, '')
			const t = this._config.selectContainer
			t === 'body'
				? (this._container = document.body)
				: (this._container = m.findOne(t)),
				this._initOutlineInput(),
				this._setDefaultSelections(),
				this._updateInputValue(),
				this._appendFakeValue(),
				this._updateFakeLabelPosition(),
				this._updateLabelPosition(),
				this._updateClearButtonVisibility(),
				this._bindComponentEvents(),
				this.hasSelectAll &&
					(this._selectAllOption = this._createSelectAllOption()),
				(this._dropdownContainer = Gu(
					this._dropdownContainerId,
					this._config,
					this._input.offsetWidth,
					this._dropdownHeight,
					this._selectAllOption,
					this._optionsToRender,
					this._customContent,
					this._classes
				)),
				this._setFirstActiveOption(),
				this._listenToFocusChange()
		}
		_renderMaterialWrapper() {
			const t = PE(
				this._wrapperId,
				this._config,
				this._label,
				this._classes,
				this._config.customArrow
			)
			this._element.parentNode.insertBefore(t, this._element),
				g.addClass(this._element, this._classes.initialized),
				t.appendChild(this._element)
		}
		_initOutlineInput() {
			const t = m.findOne(ap, this._wrapper)
			new Z(
				t,
				{ inputFormWhite: this._config.selectFormWhite },
				this._classes
			).init(),
				(this._notch = m.findOne(Bl, this._wrapper))
		}
		_bindComponentEvents() {
			this._listenToComponentKeydown(),
				this._listenToWrapperClick(),
				this._listenToClearBtnClick(),
				this._listenToClearBtnKeydown()
		}
		_setDefaultSelections() {
			this.options.forEach(t => {
				t.selected && this._selectionModel.select(t)
			})
		}
		_listenToComponentKeydown() {
			_.on(this._wrapper, 'keydown', this._handleKeydown.bind(this))
		}
		_handleKeydown(t) {
			this._isOpen && !this._config.selectFilter
				? this._handleOpenKeydown(t)
				: this._handleClosedKeydown(t)
		}
		_handleOpenKeydown(t) {
			const e = t.keyCode,
				i = e === xi || (e === ut && t.altKey) || e === Ci
			if (
				(e === Ci &&
					this._config.selectAutoSelect &&
					!this.multiple &&
					this._handleAutoSelection(this._activeOption),
				i)
			) {
				this.close(), this._input.focus()
				return
			}
			switch (e) {
				case ht:
					this._setNextOptionActive(), this._scrollToOption(this._activeOption)
					break
				case ut:
					this._setPreviousOptionActive(),
						this._scrollToOption(this._activeOption)
					break
				case Ti:
					this._setFirstOptionActive(), this._scrollToOption(this._activeOption)
					break
				case Ei:
					this._setLastOptionActive(), this._scrollToOption(this._activeOption)
					break
				case Et:
					t.preventDefault(),
						this._activeOption &&
							(this.hasSelectAll && this._activeOptionIndex === 0
								? this._handleSelectAll()
								: this._handleSelection(this._activeOption))
					return
				default:
					return
			}
			t.preventDefault()
		}
		_handleClosedKeydown(t) {
			const e = t.keyCode
			if (
				(e === Et && t.preventDefault(),
				(e === Et || (e === ht && t.altKey) || (e === ht && this.multiple)) &&
					this.open(),
				this.multiple)
			)
				switch (e) {
					case ht:
						this.open()
						break
					case ut:
						this.open()
						break
					default:
						return
				}
			else
				switch (e) {
					case ht:
						this._setNextOptionActive(),
							this._handleSelection(this._activeOption)
						break
					case ut:
						this._setPreviousOptionActive(),
							this._handleSelection(this._activeOption)
						break
					case Ti:
						this._setFirstOptionActive(),
							this._handleSelection(this._activeOption)
						break
					case Ei:
						this._setLastOptionActive(),
							this._handleSelection(this._activeOption)
						break
					default:
						return
				}
			t.preventDefault()
		}
		_scrollToOption(t) {
			if (!t) return
			let e
			const i = this.options.filter(h => !h.hidden)
			this.hasSelectAll ? (e = i.indexOf(t) + 1) : (e = i.indexOf(t))
			const n = this._getNumberOfGroupsBeforeOption(e),
				o = e + n,
				r = this.optionsWrapper,
				a = r.offsetHeight,
				l = this._config.selectOptionHeight,
				c = r.scrollTop
			if (e > -1) {
				const h = o * l,
					d = h + l > c + a
				h < c
					? (r.scrollTop = h)
					: d
					? (r.scrollTop = h - a + l)
					: (r.scrollTop = c)
			}
		}
		_getNumberOfGroupsBeforeOption(t) {
			const e = this.options.filter(r => !r.hidden),
				i = this._optionsToRender.filter(r => !r.hidden),
				n = this.hasSelectAll ? t - 1 : t
			let o = 0
			for (let r = 0; r <= n; r++)
				e[r].groupId && i[o] && i[o].id && e[r].groupId === i[o].id && o++
			return o
		}
		_setNextOptionActive() {
			let t = this._activeOptionIndex + 1
			const e = this._getNavigationOptions()
			if (e[t]) {
				for (; e[t].disabled; ) if (((t += 1), !e[t])) return
				this._updateActiveOption(e[t], t)
			}
		}
		_setPreviousOptionActive() {
			let t = this._activeOptionIndex - 1
			const e = this._getNavigationOptions()
			if (e[t]) {
				for (; e[t].disabled; ) if (((t -= 1), !e[t])) return
				this._updateActiveOption(e[t], t)
			}
		}
		_setFirstOptionActive() {
			const e = this._getNavigationOptions()
			this._updateActiveOption(e[0], 0)
		}
		_setLastOptionActive() {
			const t = this._getNavigationOptions(),
				e = t.length - 1
			this._updateActiveOption(t[e], e)
		}
		_updateActiveOption(t, e) {
			const i = this._activeOption
			i && i.removeActiveStyles(),
				t.setActiveStyles(),
				(this._activeOptionIndex = e),
				(this._activeOption = t)
		}
		_listenToWrapperClick() {
			_.on(this._wrapper, 'click', () => {
				this.toggle()
			})
		}
		_listenToClearBtnClick() {
			_.on(this.clearButton, 'click', t => {
				t.preventDefault(), t.stopPropagation(), this._handleClear()
			})
		}
		_listenToClearBtnKeydown() {
			_.on(this.clearButton, 'keydown', t => {
				t.keyCode === Et &&
					(this._handleClear(), t.preventDefault(), t.stopPropagation())
			})
		}
		_handleClear() {
			if (this.multiple)
				this._selectionModel.clear(),
					this._deselectAllOptions(this.options),
					this.hasSelectAll && this._updateSelectAllState()
			else {
				const t = this._selectionModel.selection
				this._selectionModel.clear(), t.deselect()
			}
			;(this._fakeValue.textContent = ''),
				this._updateInputValue(),
				this._updateFakeLabelPosition(),
				this._updateLabelPosition(),
				this._updateClearButtonVisibility(),
				this._emitValueChangeEvent(null),
				this._emitNativeChangeEvent()
		}
		_listenToOptionsClick() {
			_.on(this.optionsWrapper, 'click', t => {
				if (t.target.hasAttribute(qE)) return
				const i =
					t.target.nodeName === 'DIV' ? t.target : m.closest(t.target, ix)
				if (i.hasAttribute(ZE)) {
					this._handleSelectAll()
					return
				}
				const o = i.dataset.teId,
					r = this.options.find(a => a.id === o)
				r && !r.disabled && this._handleSelection(r)
			})
		}
		_handleSelectAll() {
			this._selectAllOption.selected
				? (this._deselectAllOptions(this.options),
				  this._selectAllOption.deselect())
				: (this._selectAllOptions(this.options),
				  this._selectAllOption.select()),
				this._updateInputValue(),
				this._updateFakeLabelPosition(),
				this._updateLabelPosition(),
				this._updateClearButtonVisibility(),
				this._emitValueChangeEvent(this.value),
				this._emitNativeChangeEvent()
		}
		_selectAllOptions(t) {
			t.forEach(e => {
				!e.selected &&
					!e.disabled &&
					(this._selectionModel.select(e), e.select())
			})
		}
		_deselectAllOptions(t) {
			t.forEach(e => {
				e.selected &&
					!e.disabled &&
					(this._selectionModel.deselect(e), e.deselect())
			})
		}
		_handleSelection(t) {
			this.multiple
				? (this._handleMultiSelection(t),
				  this.hasSelectAll && this._updateSelectAllState())
				: this._handleSingleSelection(t),
				this._updateInputValue(),
				this._updateFakeLabelPosition(),
				this._updateLabelPosition(),
				this._updateClearButtonVisibility()
		}
		_handleAutoSelection(t) {
			this._singleOptionSelect(t),
				this._updateInputValue(),
				this._updateFakeLabelPosition(),
				this._updateLabelPosition(),
				this._updateClearButtonVisibility()
		}
		_handleSingleSelection(t) {
			this._singleOptionSelect(t), this.close(), this._input.focus()
		}
		_singleOptionSelect(t) {
			const e = this._selectionModel.selections[0]
			e &&
				e !== t &&
				(this._selectionModel.deselect(e),
				e.deselect(),
				e.node.setAttribute(nn, !1),
				_.trigger(this._element, ep, { value: e.value })),
				(!e || (e && t !== e)) &&
					(this._selectionModel.select(t),
					t.select(),
					t.node.setAttribute(nn, !0),
					_.trigger(this._element, tp, { value: t.value }),
					this._emitValueChangeEvent(this.value),
					this._emitNativeChangeEvent())
		}
		_handleMultiSelection(t) {
			t.selected
				? (this._selectionModel.deselect(t),
				  t.deselect(),
				  t.node.setAttribute(nn, !1),
				  _.trigger(this._element, ep, { value: t.value }))
				: (this._selectionModel.select(t),
				  t.select(),
				  t.node.setAttribute(nn, !0),
				  _.trigger(this._element, tp, { value: t.value })),
				this._emitValueChangeEvent(this.value),
				this._emitNativeChangeEvent()
		}
		_emitValueChangeEvent(t) {
			_.trigger(this._element, XE, { value: t })
		}
		_emitNativeChangeEvent() {
			_.trigger(this._element, GE)
		}
		_updateInputValue() {
			const t = this.multiple
				? this._selectionModel.labels
				: this._selectionModel.label
			let e
			this.multiple &&
			this._config.selectDisplayedLabels !== -1 &&
			this._selectionModel.selections.length >
				this._config.selectDisplayedLabels
				? (e = `${this._selectionModel.selections.length} ${this._config.selectOptionsSelectedLabel}`)
				: (e = t),
				!this.multiple &&
				!this._isSelectionValid(this._selectionModel.selection)
					? (this._input.value = '')
					: this._isLabelEmpty(this._selectionModel.selection)
					? (this._input.value = ' ')
					: e
					? (this._input.value = e)
					: this.multiple || !this._optionsToRender[0]
					? (this._input.value = '')
					: (this._input.value = this._optionsToRender[0].label)
		}
		_isSelectionValid(t) {
			return !(t && (t.disabled || t.value === ''))
		}
		_isLabelEmpty(t) {
			return !!(t && t.label === '')
		}
		_appendFakeValue() {
			if (!this._selectionModel.selection || this._selectionModel._multiple)
				return
			const t = this._selectionModel.selection.label
			;(this._fakeValue = YE(t, this._classes)),
				m.findOne(ap, this._wrapper).appendChild(this._fakeValue)
		}
		_updateLabelPosition() {
			const t = this._element.hasAttribute(ip),
				e = this._input.value !== ''
			this._label &&
				(t && (e || this._isOpen || this._isFakeValueActive)
					? (this._label.setAttribute(wt, ''), this._notch.setAttribute(wt, ''))
					: (this._label.removeAttribute(wt),
					  this._notch.removeAttribute(wt, '')))
		}
		_updateLabelPositionWhileClosing() {
			this._label &&
				(this._input.value !== '' || this._isFakeValueActive
					? (this._label.setAttribute(wt, ''), this._notch.setAttribute(wt, ''))
					: (this._label.removeAttribute(wt), this._notch.removeAttribute(wt)))
		}
		_updateFakeLabelPosition() {
			this._fakeValue &&
				(this._input.value === '' &&
				this._fakeValue.innerHTML !== '' &&
				!this._config.selectPlaceholder
					? ((this._isFakeValueActive = !0),
					  this._fakeValue.setAttribute(wt, ''))
					: ((this._isFakeValueActive = !1),
					  this._fakeValue.removeAttribute(wt)))
		}
		_updateClearButtonVisibility() {
			if (!this.clearButton) return
			this._selectionModel.selection ||
			this._selectionModel.selections.length > 0
				? g.addStyle(this.clearButton, { display: 'block' })
				: g.addStyle(this.clearButton, { display: 'none' })
		}
		_updateSelectAllState() {
			const t = this._selectAllOption.selected,
				e = Rl(this.options)
			!e && t
				? this._selectAllOption.deselect()
				: e && !t && this._selectAllOption.select()
		}
		toggle() {
			this._isOpen ? this.close() : this.open()
		}
		open() {
			const t = this._config.disabled,
				e = _.trigger(this._element, UE)
			this._isOpen ||
				t ||
				e.defaultPrevented ||
				(this._openDropdown(),
				this._updateDropdownWidth(),
				this._setFirstActiveOption(),
				this._scrollToOption(this._activeOption),
				this._config.selectFilter &&
					(setTimeout(() => {
						this.filterInput.focus()
					}, 0),
					this._listenToSelectSearch(),
					this._listenToDropdownKeydown()),
				this._listenToOptionsClick(),
				this._listenToOutsideClick(),
				this._listenToWindowResize(),
				(this._isOpen = !0),
				this._updateLabelPosition(),
				this._setInputActiveStyles())
		}
		_openDropdown() {
			;(this._popper = Fe(this._input, this._dropdownContainer, {
				placement: 'bottom-start',
				modifiers: [{ name: 'offset', options: { offset: [0, 1] } }],
			})),
				this._container.appendChild(this._dropdownContainer),
				setTimeout(() => {
					this.dropdown.setAttribute(np, '')
				}, 0)
		}
		_updateDropdownWidth() {
			const t = this._input.offsetWidth
			g.addStyle(this._dropdownContainer, { width: `${t}px` })
		}
		_setFirstActiveOption() {
			const t = this._getNavigationOptions(),
				e = this._activeOption
			e && e.removeActiveStyles()
			const i = this.multiple
				? this._selectionModel.selections[0]
				: this._selectionModel.selection
			i
				? ((this._activeOption = i),
				  i.setActiveStyles(),
				  (this._activeOptionIndex = t.findIndex(n => n === i)))
				: ((this._activeOption = null), (this._activeOptionIndex = -1))
		}
		_setInputActiveStyles() {
			this._input.setAttribute(qe, ''),
				m.findOne(Bl, this._wrapper).setAttribute(qe, '')
		}
		_listenToWindowResize() {
			_.on(window, 'resize', this._handleWindowResize.bind(this))
		}
		_handleWindowResize() {
			this._dropdownContainer && this._updateDropdownWidth()
		}
		_listenToSelectSearch() {
			this.filterInput.addEventListener('input', t => {
				const e = t.target.value,
					i = this._config.selectFilterDebounce
				this._debounceFilter(e, i)
			})
		}
		_debounceFilter(t, e) {
			this._debounceTimeoutId && clearTimeout(this._debounceTimeoutId),
				(this._debounceTimeoutId = setTimeout(() => {
					this._filterOptions(t)
				}, e))
		}
		_filterOptions(t) {
			const e = []
			this._optionsToRender.forEach(o => {
				const r = Object.prototype.hasOwnProperty.call(o, 'options'),
					a = !r && o.label.toLowerCase().includes(t.toLowerCase()),
					l = {}
				r &&
					((l.label = o.label),
					(l.options = this._filter(t, o.options)),
					l.options.length > 0 && e.push(l)),
					a && e.push(o)
			})
			const i = this._config.selectNoResultText !== '',
				n = e.length !== 0
			if (n)
				this._updateOptionsListTemplate(e),
					this._popper.forceUpdate(),
					(this._filteredOptionsList = this._getPlainOptions(e)),
					this.hasSelectAll && this._updateSelectAllState(),
					this._setFirstActiveOption()
			else if (!n && i) {
				const o = this._getNoResultTemplate()
				this.optionsWrapper.innerHTML = o
			}
		}
		_updateOptionsListTemplate(t) {
			const e =
					m.findOne(rp, this._dropdownContainer) ||
					m.findOne(ox, this._dropdownContainer),
				i = qu(t, this._selectAllOption, this._config, this._classes)
			this.optionsWrapper.removeChild(e), this.optionsWrapper.appendChild(i)
		}
		_getNoResultTemplate() {
			return `<div class="${this._classes.noResult}" ${sp} style="height: ${this._config.selectOptionHeight}px">${this._config.selectNoResultText}</div>`
		}
		_filter(t, e) {
			const i = t.toLowerCase()
			return e.filter(n => n.label.toLowerCase().includes(i))
		}
		_listenToDropdownKeydown() {
			_.on(this.dropdown, 'keydown', this._handleOpenKeydown.bind(this))
		}
		_listenToOutsideClick() {
			;(this._outsideClick = this._handleOutSideClick.bind(this)),
				_.on(document, 'click', this._outsideClick)
		}
		_listenToFocusChange(t = !0) {
			if (t === !1) {
				_.off(this._input, 'focus', () => this._notch.setAttribute(qe, '')),
					_.off(this._input, 'blur', () => this._notch.removeAttribute(qe))
				return
			}
			_.on(this._input, 'focus', () => this._notch.setAttribute(qe, '')),
				_.on(this._input, 'blur', () => this._notch.removeAttribute(qe))
		}
		_handleOutSideClick(t) {
			const e = this._wrapper && this._wrapper.contains(t.target),
				i = t.target === this._dropdownContainer,
				n =
					this._dropdownContainer && this._dropdownContainer.contains(t.target)
			let o
			this._toggleButton || (this._elementToggle = m.find(rx)),
				this._elementToggle &&
					this._elementToggle.forEach(r => {
						const a = g.getDataAttribute(r, 'select-toggle')
						;(a === this._element.id || this._element.classList.contains(a)) &&
							((this._toggleButton = r),
							(o = this._toggleButton.contains(t.target)))
					}),
				!e && !i && !n && !o && this.close()
		}
		close() {
			const t = _.trigger(this._element, KE),
				e = oo(this._dropdownContainer.children[0])
			!this._isOpen ||
				t.defaultPrevented ||
				(this._config.selectFilter &&
					this.hasSelectAll &&
					(this._resetFilterState(),
					this._updateOptionsListTemplate(this._optionsToRender),
					this._config.multiple && this._updateSelectAllState()),
				this._removeDropdownEvents(),
				this.dropdown.removeAttribute(np),
				setTimeout(() => {
					this._input.removeAttribute(qe),
						this._input.blur(),
						m.findOne(Bl, this._wrapper).removeAttribute(qe),
						this._label &&
							!this.hasSelection &&
							(this._label.removeAttribute(wt),
							this._notch.setAttribute(wt, ''),
							this._input.removeAttribute(wt),
							this._notch.removeAttribute(wt)),
						this._updateLabelPositionWhileClosing()
				}, 0),
				setTimeout(() => {
					this._container &&
						this._dropdownContainer.parentNode === this._container &&
						this._container.removeChild(this._dropdownContainer),
						this._popper.destroy(),
						(this._isOpen = !1),
						_.off(this.dropdown, 'transitionend')
				}, e))
		}
		_resetFilterState() {
			;(this.filterInput.value = ''), (this._filteredOptionsList = null)
		}
		_removeDropdownEvents() {
			_.off(document, 'click', this._outsideClick),
				this._config.selectFilter && _.off(this.dropdown, 'keydown'),
				_.off(this.optionsWrapper, 'click')
		}
		_addMutationObserver() {
			;(this._mutationObserver = new MutationObserver(() => {
				this._wrapper && (this._updateSelections(), this._updateDisabledState())
			})),
				this._observeMutationObserver()
		}
		_updateSelections() {
			;(this._optionsToRender = this._getOptionsToRender(this._element)),
				(this._plainOptions = this._getPlainOptions(this._optionsToRender)),
				this._selectionModel.clear(),
				this._setDefaultSelections(),
				this._updateInputValue(),
				this._updateFakeLabelPosition(),
				this._updateLabelPosition(),
				this._updateClearButtonVisibility(),
				this.hasSelectAll && this._updateSelectAllState()
			const t =
				this._config.filter && this.filterInput && this.filterInput.value
			this._isOpen && !t
				? (this._updateOptionsListTemplate(this._optionsToRender),
				  this._setFirstActiveOption())
				: this._isOpen && t
				? (this._filterOptions(this.filterInput.value),
				  this._setFirstActiveOption())
				: (this._dropdownContainer = Gu(
						this._dropdownContainerId,
						this._config,
						this._input.offsetWidth,
						this._dropdownHeight,
						this._selectAllOption,
						this._optionsToRender,
						this._customContent,
						this._classes
				  ))
		}
		_updateDisabledState() {
			const t = m.findOne(op, this._wrapper)
			this._element.hasAttribute('disabled')
				? ((this._config.disabled = !0),
				  t.setAttribute('disabled', ''),
				  t.setAttribute(Nl, ''))
				: ((this._config.disabled = !1),
				  t.removeAttribute('disabled'),
				  t.removeAttribute(Nl))
		}
		_observeMutationObserver() {
			this._mutationObserver &&
				this._mutationObserver.observe(this._element, {
					attributes: !0,
					childList: !0,
					characterData: !0,
					subtree: !0,
				})
		}
		_disconnectMutationObserver() {
			this.mutationObserver &&
				(this._mutationObserver.disconnect(), (this._mutationObserver = null))
		}
		_createSelectAllOption() {
			const t = this._selectAllId,
				e = null,
				i = !0,
				n = 'select-all',
				o = this._config.selectAllLabel,
				r = Rl(this.options),
				a = !1,
				l = !1,
				c = null,
				h = null,
				d = null
			return new Ku(t, e, i, n, o, r, a, l, c, h, d)
		}
		dispose() {
			this._removeComponentEvents(),
				this._destroyMaterialSelect(),
				this._listenToFocusChange(!1),
				O.removeData(this._element, en)
		}
		_removeComponentEvents() {
			_.off(this.input, 'click'),
				_.off(this.wrapper, this._handleKeydown.bind(this)),
				_.off(this.clearButton, 'click'),
				_.off(this.clearButton, 'keydown'),
				_.off(window, 'resize', this._handleWindowResize.bind(this))
		}
		_destroyMaterialSelect() {
			this._isOpen && this.close(), this._destroyMaterialTemplate()
		}
		_destroyMaterialTemplate() {
			const t = this._wrapper.parentNode,
				e = m.find('label', this._wrapper)
			t.appendChild(this._element),
				e.forEach(i => {
					t.appendChild(i)
				}),
				e.forEach(i => {
					i.removeAttribute(wt)
				}),
				g.removeClass(this._element, this._classes.initialized),
				this._element.removeAttribute(ip),
				t.removeChild(this._wrapper)
		}
		setValue(t) {
			this.options
				.filter(i => i.selected)
				.forEach(i => (i.nativeOption.selected = !1)),
				Array.isArray(t)
					? t.forEach(i => {
							this._selectByValue(i)
					  })
					: this._selectByValue(t),
				this._updateSelections(),
				this._emitValueChangeEvent(this.value)
		}
		_selectByValue(t) {
			const e = this.options.find(i => i.value === t)
			return e ? ((e.nativeOption.selected = !0), !0) : !1
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				let i = O.getData(this, en)
				const n = typeof t == 'object' && t
				if (
					!(!i && /dispose/.test(t)) &&
					(i || (i = new on(this, n)), typeof t == 'string')
				) {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t](e)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, en)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const dx = (
			{ inputID: s, labelText: t },
			e
		) => `<div data-te-chips-input-wrapper data-te-input-wrapper-init class="${e.chipsInputWrapper}">
      <input
          type="text"
          class="${e.chipsInput}"
          id="${s}"
          placeholder="Example label" />
        <label
          for="${s}"
          class="${e.chipsLabel}"
          >${t}
        </label>
      </div>
    </div>`,
		ux = (
			{ text: s, iconSVG: t },
			e
		) => `<div data-te-chip-init data-te-ripple-init class="${e.chipElement}">
    <span data-te-chip-text>${s}</span> 
      <span data-te-chip-close class="${e.chipCloseIcon}">
        ${t}
      </span>
  </div>`,
		rr = 'chip',
		px = `te.${rr}`,
		lp = 'data-te-chip-close',
		Hl = `[${lp}]`,
		fx = 'delete.te.chips',
		_x = 'select.te.chip',
		gx =
			'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',
		mx = {
			text: 'string',
			closeIcon: 'boolean',
			img: 'object',
			iconSVG: 'string',
		},
		bx = { text: '', closeIcon: !1, img: { path: '', alt: '' }, iconSVG: gx },
		vx = {
			icon: 'float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:text-[#8b8b8b] transition-all duration-200 ease-in-out',
			chipElement:
				'flex justify-between items-center h-[32px] leading-loose py-[5px] px-[12px] mr-4 my-[5px] text-[13px] font-normal text-[#4f4f4f] cursor-pointer bg-[#eceff1] dark:text-white dark:bg-neutral-300 rounded-[16px] transition-[opacity] duration-300 ease-linear [word-wrap: break-word] shadow-none normal-case hover:!shadow-none active:bg-[#cacfd1] inline-block font-medium leading-normal text-[#4f4f4f] text-center no-underline align-middle cursor-pointer select-none border-[.125rem] border-solid border-transparent py-1.5 px-3 text-xs rounded',
			chipCloseIcon:
				'w-4 float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:fill-[#8b8b8b] dark:fill-gray-400 dark:hover:fill-gray-100 transition-all duration-200 ease-in-out',
		},
		yx = { icon: 'string', chipElement: 'string', chipCloseIcon: 'string' }
	class ki {
		constructor(t, e = {}, i) {
			;(this._element = t),
				(this._options = this._getConfig(e)),
				(this._classes = this._getClasses(i))
		}
		static get NAME() {
			return rr
		}
		init() {
			this._appendCloseIcon(),
				this._handleDelete(),
				this._handleTextChip(),
				this._handleClickOnChip()
		}
		dispose() {
			;(this._element = null),
				(this._options = null),
				_.off(this._element, 'click')
		}
		appendChip() {
			const { text: t, closeIcon: e, iconSVG: i } = this._options
			return ux({ text: t, closeIcon: e, iconSVG: i }, this._classes)
		}
		_appendCloseIcon(t = this._element) {
			if (!(m.find(Hl, this._element).length > 0) && this._options.closeIcon) {
				const e = $('span')
				;(e.classList = this._classes.icon),
					e.setAttribute(lp),
					(e.innerHTML = this._options.iconSVG),
					t.insertAdjacentElement('beforeend', e)
			}
		}
		_handleClickOnChip() {
			_.on(this._element, 'click', t => {
				const { textContent: e } = t.target,
					i = {}
				;(i.tag = e.trim()), _.trigger(_x, { event: t, obj: i })
			})
		}
		_handleDelete() {
			m.find(Hl, this._element).length !== 0 &&
				_.on(this._element, 'click', Hl, () => {
					_.trigger(this._element, fx), this._element.remove()
				})
		}
		_handleTextChip() {
			this._element.innerText === '' &&
				(this._element.innerText = this._options.text)
		}
		_getConfig(t) {
			const e = { ...bx, ...g.getDataAttributes(this._element), ...t }
			return L(rr, e, mx), e
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...vx, ...e, ...t }), L(rr, t, yx), t
		}
		static getInstance(t) {
			return O.getData(t, px)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const rn = 'chips',
		an = `data-te-${rn}`,
		cp = `te.${rn}`,
		Tx = `${an}-input-init`,
		Wt = `${an}-active`,
		hp = `${an}-initial`,
		dp = `${an}-placeholder`,
		Ex = `${an}-input-wrapper`,
		Vl = 'data-te-chip-init',
		up = 'data-te-chip-close',
		pp = 'data-te-chip-text',
		xx = `[${Wt}]`,
		Fl = `[${Vl}]`,
		Cx = `${Fl}${xx}`,
		Wl = `[${up}]`,
		Ax = `[${Ex}]`,
		wx = `[${pp}]`,
		kx = `[${dp}]`,
		Sx = 'data-te-input-notch-leading-ref',
		Ox = 'data-te-input-notch-middle-ref',
		Ix = `[${Sx}]`,
		Dx = `[${Ox}]`,
		us = 'data-te-input-state-active',
		zl = '[data-te-input-notch-ref]',
		Mx = 'add.te.chips',
		Lx = 'arrowDown.te.chips',
		$x = 'arrowLeft.te.chips',
		Rx = 'arrowRight.te.chips',
		Px = 'arrowUp.te.chips',
		fp = 'delete.te.chips',
		_p = 'select.te.chips',
		Nx = {
			inputID: 'string',
			parentSelector: 'string',
			initialValues: 'array',
			editable: 'boolean',
			labelText: 'string',
			inputClasses: 'object',
			inputOptions: 'object',
		},
		Bx = {
			inputID: bt('chips-input-'),
			parentSelector: '',
			initialValues: [{ tag: 'init1' }, { tag: 'init2' }],
			editable: !1,
			labelText: 'Example label',
			inputClasses: {},
			inputOptions: {},
		},
		Hx = {
			opacity: 'opacity-0',
			inputWrapperPadding: 'p-[5px]',
			transition:
				'transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
			contentEditable:
				'outline-none !border-[3px] !border-solid !border-[#b2b3b4]',
			chipsInputWrapper:
				'relative flex items-center flex-wrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
			chipsInput:
				'peer block min-h-[auto] w-[150px] rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-700 dark:placeholder:text-gray-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0',
			chipsLabel:
				'pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-700 dark:peer-focus:text-gray-200',
		},
		Vx = {
			opacity: 'string',
			inputWrapperPadding: 'string',
			transition: 'string',
			contentEditable: 'string',
			chipsInputWrapper: 'string',
			chipsInput: 'string',
			chipsLabel: 'string',
		}
	class gp extends ki {
		constructor(e, i = {}, n) {
			super(e, i)
			ke(this, '_handleBlurInput', ({ target: e }) => {
				e.value.length > 0 && this._handleCreateChip(e, e.value),
					this.allChips.length > 0
						? (e.setAttribute(Wt, ''),
						  this.input.setAttribute(us, ''),
						  m.findOne(zl, this.input.parentNode).setAttribute(us, ''),
						  this.chipsInputWrapper.classList.add(
								...this._classes.inputWrapperPadding.split(' ')
						  ))
						: (e.removeAttribute(Wt),
						  this.input.removeAttribute(us),
						  m.findOne(zl, this.input.parentNode).removeAttribute(us),
						  this.chipsInputWrapper.classList.remove(
								...this._classes.inputWrapperPadding.split(' ')
						  )),
					this.allChips.forEach(i => i.removeAttribute(Wt))
			})
			;(this._element = e),
				(this._inputInstance = null),
				this._element && O.setData(e, cp, this),
				(this._options = this._getConfig(i)),
				(this._classes = this._getClasses(n)),
				(this.numberClicks = 0),
				this.init()
		}
		static get NAME() {
			return rn
		}
		get activeChip() {
			return m.findOne(Cx, this._element)
		}
		get input() {
			return m.findOne('input', this._element)
		}
		get allChips() {
			return m.find(Fl, this._element)
		}
		get chipsInputWrapper() {
			return m.findOne(Ax, this._element)
		}
		init() {
			this._setChipsClass(),
				this._appendInputToElement(dp),
				this._handleInitialValue(),
				this._handleInputText(),
				this._handleKeyboard(),
				this._handleChipsOnSelect(),
				this._handleEditable(),
				this._handleChipsFocus(),
				this._handleClicksOnChips(),
				this._inputInstance._getLabelWidth(),
				this._inputInstance._applyNotch()
		}
		dispose() {
			;(this._element = null), (this._options = null)
		}
		_getNotchData() {
			;(this._notchMiddle = m.findOne(Dx, this._element)),
				(this._notchLeading = m.findOne(Ix, this._element))
		}
		_setChipsClass() {
			this._element.setAttribute(Tx, '')
		}
		_handleDeleteEvents(e) {
			const [i] = this.allChips.slice(-1)
			if (this.activeChip === null) i.remove(), this._handleEvents(e, fp)
			else {
				const n = this.allChips.findIndex(a => a === this.activeChip),
					o = this._handleActiveChipAfterRemove(n),
					r = []
				if (this.activeChip === null) return
				this.activeChip.remove(),
					this._handleEvents(e, fp),
					(this.numberClicks = n),
					o.setAttribute(Wt, ''),
					this.allChips.forEach(a => {
						a.hasAttribute(Wt) &&
							(r.push(a),
							r.length > 1 && this.allChips.forEach(l => l.remove()))
					})
			}
		}
		_handleUpEvents(e) {
			;(this.numberClicks += 1),
				this.numberClicks === this.allChips.length + 1 &&
					(this.numberClicks = 0),
				this._handleRightKeyboardArrow(this.numberClicks),
				this._handleEvents(e, Rx),
				this._handleEvents(e, Px)
		}
		_handleDownEvents(e) {
			;(this.numberClicks -= 1),
				this.numberClicks <= 0 && (this.numberClicks = this.allChips.length),
				this._handleLeftKeyboardArrow(this.numberClicks),
				this._handleEvents(e, $x),
				this._handleEvents(e, Lx)
		}
		_keyboardEvents(e) {
			const { target: i, keyCode: n, ctrlKey: o } = e
			i.value.length > 0 ||
				this.allChips.length === 0 ||
				(n === zy || n === jy
					? this._handleDeleteEvents(e)
					: n === hs || n === ut
					? this._handleUpEvents(e)
					: n === cs || n === ht
					? this._handleDownEvents(e)
					: n === 65 && o && this._handleAddActiveClass())
		}
		_handleKeyboard() {
			_.on(this.input, 'keydown', e => this._keyboardEvents(e))
		}
		_handleEditable() {
			const { editable: e } = this._options
			e &&
				this.allChips.forEach(i => {
					_.on(i, 'dblclick', n => {
						const o = m.findOne(Wl, i)
						i.classList.add(...this._classes.contentEditable.split(' ')),
							(i.contentEditable = !0),
							i.focus(),
							setTimeout(() => {
								g.addStyle(o, { display: 'none' })
							}, 200),
							o.classList.add(...this._classes.opacity.split(' ')),
							n.target.textContent,
							_.trigger(i, _p, { event: n, allChips: this.allChips })
					}),
						_.on(document, 'click', ({ target: n }) => {
							const o = m.findOne(Wl, i),
								r = m.findOne(wx, i),
								a = n === i,
								l = i && i.contains(n)
							!a &&
								!l &&
								((i.contentEditable = !1),
								i.classList.remove(...this._classes.contentEditable.split(' ')),
								r.textContent !== '' &&
									setTimeout(() => {
										g.addStyle(o, { display: 'block' }),
											o.classList.remove(...this._classes.opacity.split(' '))
									}, 160)),
								r.textContent === '' &&
									(setTimeout(() => {
										i.classList.add(...this._classes.opacity.split(' '))
									}, 200),
									setTimeout(() => {
										i.remove()
									}, 300))
						})
				})
		}
		_handleRemoveActiveClass() {
			this.allChips.forEach(e => e.removeAttribute(Wt))
		}
		_handleAddActiveClass() {
			this.allChips.forEach(e => e.setAttribute(Wt, ''))
		}
		_handleRightKeyboardArrow(e) {
			this._handleRemoveActiveClass(),
				e === 0 && (e = 1),
				this._handleAddActiveClassWithKebyboard(e)
		}
		_handleLeftKeyboardArrow(e) {
			this._handleRemoveActiveClass(),
				this._handleAddActiveClassWithKebyboard(e)
		}
		_handleActiveChipAfterRemove(e) {
			const i = e === 0 ? 1 : e - 1
			return this.allChips[i]
		}
		_handleClicksOnChips() {
			_.on(this._element, 'click', () => {
				this.allChips.length === 0 &&
					(this.chipsInputWrapper.classList.remove(
						...this._classes.inputWrapperPadding.split(' ')
					),
					this.input.removeAttribute(Wt))
			})
		}
		_handleTextContent() {
			const e = []
			return (
				this.allChips.forEach(i => e.push({ tag: i.textContent.trim() })), e
			)
		}
		_handleEvents(e, i) {
			const n = this._handleTextContent(),
				o = this.allChips.filter(r => r.hasAttribute(Wt) && r)
			_.trigger(this._element, i, {
				event: e,
				allChips: this.allChips,
				arrOfObjects: n,
				active: o,
				activeObj: { tag: o.length <= 0 ? '' : o[0].textContent.trim() },
			})
		}
		_handleChipsFocus() {
			_.on(this._element, 'click', ({ target: { attributes: e } }) => {
				const i = [...e].map(n => n.name)
				i.includes(Vl) || i.includes(up) || i.includes(pp) || this.input.focus()
			})
		}
		_handleInitialValue() {
			if ((this._appendInputToElement(hp), this._element.hasAttribute(hp))) {
				const { initialValues: e } = this._options
				e.forEach(({ tag: i }) => this._handleCreateChip(this.input, i)),
					m.findOne(zl, this.input.parentNode).setAttribute(us, ''),
					this.input.setAttribute(Wt, ''),
					this.input.setAttribute(us, '')
			}
			this.allChips.length > 0 &&
				(this.chipsInputWrapper.classList.add(
					...this._classes.inputWrapperPadding.split(' ')
				),
				this.chipsInputWrapper.classList.add(
					...this._classes.transition.split(' ')
				))
		}
		_handleKeysInputToElement(e) {
			const { keyCode: i, target: n } = e
			if (n.hasAttribute(Vl)) {
				const o = m.findOne(Wl, n)
				i === Et &&
					((n.contentEditable = !1),
					n.classList.remove(...this._classes.contentEditable.split(' ')),
					n.textContent !== ''
						? setTimeout(() => {
								g.addStyle(o, { display: 'block' }),
									o.classList.remove(...this._classes.opacity.split(' '))
						  }, 160)
						: n.textContent === '' &&
						  (setTimeout(() => {
								n.classList.add(...this._classes.opacity.split(' '))
						  }, 200),
						  setTimeout(() => {
								n.remove()
						  }, 300)))
				return
			}
			if (i === Et) {
				if (n.value === '') return
				this._handleCreateChip(n, n.value),
					this._handleRemoveActiveClass(),
					(this.numberClicks = this.allChips.length + 1),
					this._handleEvents(e, Mx)
			}
			this.allChips.length > 0
				? (this.chipsInputWrapper.classList.add(
						...this._classes.inputWrapperPadding.split(' ')
				  ),
				  this.chipsInputWrapper.classList.add(
						...this._classes.transition.split(' ')
				  ))
				: this.chipsInputWrapper.classList.remove(
						...this._classes.inputWrapperPadding.split(' ')
				  )
		}
		_handleInputText() {
			const e = m.findOne(kx, this._element)
			_.on(this._element, 'keyup', e, i => this._handleKeysInputToElement(i)),
				_.on(this.input, 'blur', i => this._handleBlurInput(i))
		}
		_appendInputToElement(e) {
			if (!this._element.hasAttribute(e)) return
			const i = dx(this._options, this._classes)
			this._element.insertAdjacentHTML('beforeend', i)
			const n = m.findOne('[data-te-chips-input-wrapper]', this._element)
			this._inputInstance = new Z(
				n,
				this._options.inputOptions,
				this._options.inputClasses
			)
		}
		_handleCreateChip(e, i) {
			const n = $('div'),
				o = ki.getInstance(n),
				r = new ki(o, { text: i }, this._classes)
			this._options.parentSelector !== ''
				? document
						.querySelector(this._options.parentSelector)
						.insertAdjacentHTML('beforeend', r.appendChip())
				: e.insertAdjacentHTML('beforebegin', r.appendChip()),
				(e.value = ''),
				m.find(Fl).forEach(a => {
					let l = ki.getInstance(a)
					return l || (l = new ki(a, {}, this._classes)), l.init()
				}),
				this._handleEditable()
		}
		_handleChipsOnSelect() {
			this.allChips.forEach(e => {
				_.on(this._element, 'click', i => {
					_.trigger(e, _p, { event: i, allChips: this.allChips })
				})
			})
		}
		_handleAddActiveClassWithKebyboard(e) {
			let i
			this.allChips[e - 1] === void 0
				? (i = this.allChips[e - 2])
				: (i = this.allChips[e - 1]),
				i.setAttribute(Wt)
		}
		_getConfig(e) {
			const i = { ...Bx, ...g.getDataAttributes(this._element), ...e }
			return L(rn, i, Nx), i
		}
		_getClasses(e) {
			const i = g.getDataClassAttributes(this._element)
			return (e = { ...Hx, ...i, ...e }), L(rn, e, Vx), e
		}
		static getInstance(e) {
			return O.getData(e, cp)
		}
		static getOrCreateInstance(e, i = {}) {
			return this.getInstance(e) || new this(e, typeof i == 'object' ? i : null)
		}
	}
	const Ze = { plugins: { legend: { labels: { color: 'rgb(102,102,102)' } } } },
		ln = {
			line: {
				options: {
					...Ze,
					elements: {
						line: {
							backgroundColor: 'rgba(59, 112, 202, 0.0)',
							borderColor: 'rgb(59, 112, 202)',
							borderWidth: 2,
							tension: 0,
						},
						point: {
							borderColor: 'rgb(59, 112, 202)',
							backgroundColor: 'rgb(59, 112, 202)',
						},
					},
					responsive: !0,
					legend: { display: !0 },
					tooltips: { intersect: !1, mode: 'index' },
					datasets: { borderColor: 'red' },
					scales: {
						x: {
							stacked: !0,
							grid: { display: !1 },
							ticks: { fontColor: 'rgba(0,0,0, 0.5)' },
						},
						y: {
							stacked: !1,
							grid: {
								borderDash: [2],
								drawBorder: !1,
								zeroLineColor: 'rgba(0,0,0,0)',
								zeroLineBorderDash: [2],
								zeroLineBorderDashOffset: [2],
							},
							ticks: { fontColor: 'rgba(0,0,0, 0.5)' },
						},
					},
				},
			},
			bar: {
				options: {
					...Ze,
					backgroundColor: 'rgb(59, 112, 202)',
					borderWidth: 0,
					responsive: !0,
					legend: { display: !0 },
					tooltips: { intersect: !1, mode: 'index' },
					scales: {
						x: {
							stacked: !0,
							grid: { display: !1 },
							ticks: { fontColor: 'rgba(0,0,0, 0.5)' },
						},
						y: {
							stacked: !0,
							grid: {
								borderDash: [2],
								drawBorder: !1,
								zeroLineColor: 'rgba(0,0,0,0)',
								zeroLineBorderDash: [2],
								zeroLineBorderDashOffset: [2],
							},
							ticks: { fontColor: 'rgba(0,0,0, 0.5)' },
						},
					},
				},
			},
			pie: {
				options: {
					...Ze,
					elements: { arc: { backgroundColor: 'rgb(59, 112, 202)' } },
					responsive: !0,
					legend: { display: !0 },
				},
			},
			doughnut: {
				options: {
					...Ze,
					elements: { arc: { backgroundColor: 'rgb(59, 112, 202)' } },
					responsive: !0,
					legend: { display: !0 },
				},
			},
			polarArea: {
				options: {
					...Ze,
					elements: { arc: { backgroundColor: 'rgba(59, 112, 202, 0.5)' } },
					responsive: !0,
					legend: { display: !0 },
				},
			},
			radar: {
				options: {
					...Ze,
					elements: {
						line: {
							backgroundColor: 'rgba(59, 112, 202, 0.5)',
							borderColor: 'rgb(59, 112, 202)',
							borderWidth: 2,
						},
						point: {
							borderColor: 'rgb(59, 112, 202)',
							backgroundColor: 'rgb(59, 112, 202)',
						},
					},
					responsive: !0,
					legend: { display: !0 },
				},
			},
			scatter: {
				options: {
					...Ze,
					elements: {
						line: {
							backgroundColor: 'rgba(59, 112, 202, 0.5)',
							borderColor: 'rgb(59, 112, 202)',
							borderWidth: 2,
							tension: 0,
						},
						point: {
							borderColor: 'rgb(59, 112, 202)',
							backgroundColor: 'rgba(59, 112, 202, 0.5)',
						},
					},
					responsive: !0,
					legend: { display: !0 },
					tooltips: { intersect: !1, mode: 'index' },
					datasets: { borderColor: 'red' },
					scales: {
						x: {
							stacked: !0,
							grid: { display: !1 },
							ticks: { fontColor: 'rgba(0,0,0, 0.5)' },
						},
						y: {
							stacked: !1,
							grid: {
								borderDash: [2],
								drawBorder: !1,
								zeroLineColor: 'rgba(0,0,0,0)',
								zeroLineBorderDash: [2],
								zeroLineBorderDashOffset: [2],
							},
							ticks: { fontColor: 'rgba(0,0,0, 0.5)' },
						},
					},
				},
			},
			bubble: {
				options: {
					...Ze,
					elements: {
						point: {
							borderColor: 'rgb(59, 112, 202)',
							backgroundColor: 'rgba(59, 112, 202, 0.5)',
						},
					},
					responsive: !0,
					legend: { display: !0 },
					scales: {
						x: {
							grid: { display: !1 },
							ticks: { fontColor: 'rgba(0,0,0, 0.5)' },
						},
						y: {
							grid: {
								borderDash: [2],
								drawBorder: !1,
								zeroLineColor: 'rgba(0,0,0,0)',
								zeroLineBorderDash: [2],
								zeroLineBorderDashOffset: [2],
							},
							ticks: { fontColor: 'rgba(0,0,0, 0.5)' },
						},
					},
				},
			},
		}
	var Fx = function (t) {
		return Wx(t) && !zx(t)
	}
	function Wx(s) {
		return !!s && typeof s == 'object'
	}
	function zx(s) {
		var t = Object.prototype.toString.call(s)
		return t === '[object RegExp]' || t === '[object Date]' || Kx(s)
	}
	var jx = typeof Symbol == 'function' && Symbol.for,
		Yx = jx ? Symbol.for('react.element') : 60103
	function Kx(s) {
		return s.$$typeof === Yx
	}
	function Ux(s) {
		return Array.isArray(s) ? [] : {}
	}
	function cn(s, t) {
		return t.clone !== !1 && t.isMergeableObject(s) ? ps(Ux(s), s, t) : s
	}
	function Xx(s, t, e) {
		return s.concat(t).map(function (i) {
			return cn(i, e)
		})
	}
	function Gx(s, t) {
		if (!t.customMerge) return ps
		var e = t.customMerge(s)
		return typeof e == 'function' ? e : ps
	}
	function qx(s) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(s).filter(function (t) {
					return Object.propertyIsEnumerable.call(s, t)
			  })
			: []
	}
	function mp(s) {
		return Object.keys(s).concat(qx(s))
	}
	function bp(s, t) {
		try {
			return t in s
		} catch {
			return !1
		}
	}
	function Zx(s, t) {
		return (
			bp(s, t) &&
			!(
				Object.hasOwnProperty.call(s, t) &&
				Object.propertyIsEnumerable.call(s, t)
			)
		)
	}
	function Qx(s, t, e) {
		var i = {}
		return (
			e.isMergeableObject(s) &&
				mp(s).forEach(function (n) {
					i[n] = cn(s[n], e)
				}),
			mp(t).forEach(function (n) {
				Zx(s, n) ||
					(bp(s, n) && e.isMergeableObject(t[n])
						? (i[n] = Gx(n, e)(s[n], t[n], e))
						: (i[n] = cn(t[n], e)))
			}),
			i
		)
	}
	function ps(s, t, e) {
		;(e = e || {}),
			(e.arrayMerge = e.arrayMerge || Xx),
			(e.isMergeableObject = e.isMergeableObject || Fx),
			(e.cloneUnlessOtherwiseSpecified = cn)
		var i = Array.isArray(t),
			n = Array.isArray(s),
			o = i === n
		return o ? (i ? e.arrayMerge(s, t, e) : Qx(s, t, e)) : cn(t, e)
	}
	ps.all = function (t, e) {
		if (!Array.isArray(t)) throw new Error('first argument should be an array')
		return t.reduce(function (i, n) {
			return ps(i, n, e)
		}, {})
	}
	var Jx = ps,
		jl = Jx
	const vp = 'chart',
		ar = 'te.chart',
		tC = 'chart',
		Yl = (s, t, e) => {
			const i = (n, o, r) => {
				const a = n.slice()
				return (
					o.forEach((l, c) => {
						typeof a[c] > 'u'
							? (a[c] = r.cloneUnlessOtherwiseSpecified(l, r))
							: r.isMergeableObject(l)
							? (a[c] = jl(n[c], l, r))
							: n.indexOf(l) === -1 && a.push(l)
					}),
					a
				)
			}
			return jl(e[t], s, { arrayMerge: i })
		},
		eC = {
			darkTicksColor: '#fff',
			darkLabelColor: '#fff',
			darkGridLinesColor: '#555',
			darkmodeOff: 'undefined',
			darkMode: null,
			darkBgColor: '#262626',
			darkBgColorLight: '#fff',
			options: null,
		},
		iC = {
			darkTicksColor: 'string',
			darkLabelColor: 'string',
			darkGridLinesColor: 'string',
			darkmodeOff: '(string|null)',
			darkMode: '(string|null)',
			darkBgColor: 'string',
			darkBgColorLight: 'string',
			options: '(object|null)',
		}
	let yp = class am {
		constructor(t, e, i = {}, n = {}) {
			this._waitForCharts(t, e, i, n)
		}
		async _getChartjs() {
			const {
				Chart: t,
				ArcElement: e,
				LineElement: i,
				BarElement: n,
				PointElement: o,
				BarController: r,
				BubbleController: a,
				DoughnutController: l,
				LineController: c,
				PieController: h,
				PolarAreaController: d,
				RadarController: u,
				ScatterController: p,
				CategoryScale: f,
				LinearScale: b,
				LogarithmicScale: v,
				RadialLinearScale: y,
				TimeScale: T,
				TimeSeriesScale: x,
				Decimation: E,
				Filler: C,
				Legend: A,
				Title: w,
				Tooltip: S,
				SubTitle: k,
			} = await Promise.resolve().then(() => UM)
			return (
				t.register(
					e,
					i,
					n,
					o,
					r,
					a,
					l,
					c,
					h,
					d,
					u,
					p,
					f,
					b,
					v,
					y,
					T,
					x,
					E,
					C,
					A,
					w,
					S,
					k
				),
				t
			)
		}
		async _getChartDataLabels() {
			return await Promise.resolve().then(() => gL)
		}
		async _waitForCharts(t, e, i = {}, n = {}) {
			if (
				((this._Chartjs = await this._getChartjs()),
				(this._ChartDataLabels = await this._getChartDataLabels()),
				(this._element = t),
				(this._data = e),
				(this._options = i),
				(this._type = e.type),
				(this._canvas = null),
				(this._chart = null),
				(this._darkOptions = this._getDarkConfig(n)),
				(this._darkModeClassContainer = document.querySelector('html')),
				(this._prevConfig = null),
				(this._observer = null),
				this._element &&
					(O.setData(t, ar, this),
					g.addClass(this._element, tC),
					this._chartConstructor()),
				this._darkOptions.darkmodeOff !== null)
			) {
				const o =
					this._darkOptions.darkMode === 'dark'
						? 'dark'
						: this._darkOptions.darkMode === 'light'
						? 'light'
						: this.systemColorMode
				this._handleMode(o),
					(this._observer = new MutationObserver(
						this._observerCallback.bind(this)
					)),
					this._observer.observe(this._darkModeClassContainer, {
						attributes: !0,
					})
			}
		}
		static get NAME() {
			return vp
		}
		get systemColorMode() {
			return (
				localStorage.theme ||
				(this._darkModeClassContainer.classList.contains('dark')
					? 'dark'
					: 'light')
			)
		}
		dispose() {
			this._observer.disconnect(),
				O.removeData(this._element, ar),
				(this._element = null)
		}
		update(t, e) {
			t &&
				((this._data = { ...this._data, ...t }),
				(this._chart.data = this._data))
			const i = Object.prototype.hasOwnProperty.call(e, 'options')
				? e
				: { options: { ...e } }
			;(this._options = jl(this._options, i)),
				(this._chart.options = Yl(this._options, this._type, ln).options),
				this._chart.update()
		}
		setTheme(t) {
			;(t !== 'dark' && t !== 'light') || !this._data || this._handleMode(t)
		}
		_getDarkConfig(t) {
			let e = {}
			const i = g.getDataAttributes(this._element)
			Object.keys(i).forEach(c => c.startsWith('dark') && (e[c] = i[c])),
				(e = { ...eC, ...e })
			const n = {
					y: {
						ticks: { color: e.darkTicksColor },
						grid: { color: e.darkGridLinesColor },
					},
					x: {
						ticks: { color: e.darkTicksColor },
						grid: { color: e.darkGridLinesColor },
					},
				},
				o = {
					r: {
						ticks: { color: e.darkTicksColor, backdropColor: e.darkBgColor },
						grid: { color: e.darkGridLinesColor },
						pointLabels: { color: e.darkTicksColor },
					},
				},
				l = {
					scales: ['pie', 'doughnut', 'polarArea', 'radar'].includes(this._type)
						? ['polarArea', 'radar'].includes(this._type)
							? o
							: {}
						: n,
					plugins: { legend: { labels: { color: e.darkLabelColor } } },
				}
			return (t = { ...e, options: { ...l }, ...t }), L(vp, t, iC), t
		}
		_chartConstructor() {
			if (this._data) {
				this._createCanvas()
				const t = Yl(this._options, this._type, ln),
					e = []
				t.dataLabelsPlugin && e.push(this._ChartDataLabels.default),
					(this._prevConfig = t),
					(this._chart = new this._Chartjs(this._canvas, {
						...this._data,
						...t,
						plugins: e,
					}))
			}
		}
		_createCanvas() {
			this._canvas ||
				(this._element.nodeName === 'CANVAS'
					? (this._canvas = this._element)
					: ((this._canvas = $('canvas')),
					  this._element.appendChild(this._canvas)))
		}
		_handleMode(t) {
			t === 'dark'
				? (this._changeDatasetBorderColor(),
				  this.update(null, this._darkOptions.options))
				: (this._changeDatasetBorderColor(!1),
				  this._prevConfig && this.update(null, this._prevConfig))
		}
		_observerCallback(t) {
			for (const e of t)
				e.type === 'attributes' && this._handleMode(this.systemColorMode)
		}
		_changeDatasetBorderColor(t = !0) {
			;[...this._data.data.datasets].forEach(
				e =>
					['pie', 'doughnut', 'polarArea'].includes(this._type) &&
					(e.borderColor = t
						? this._darkOptions.darkBgColor
						: this._darkOptions.darkBgColorLight)
			)
		}
		static jQueryInterface(t, e, i) {
			return this.each(function () {
				let n = O.getData(this, ar)
				if (!(!n && /dispose/.test(t))) {
					if (!n) {
						const o = e ? Yl(e, i, ln) : ln[i]
						n = new am(this, { ...t, ...o })
					}
					if (typeof t == 'string') {
						if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
						n[t](e, i)
					}
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, ar)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	/*!
	 * perfect-scrollbar v1.5.3
	 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
	 * Licensed under MIT
	 */ function me(s) {
		return getComputedStyle(s)
	}
	function Ot(s, t) {
		for (var e in t) {
			var i = t[e]
			typeof i == 'number' && (i = i + 'px'), (s.style[e] = i)
		}
		return s
	}
	function lr(s) {
		var t = document.createElement('div')
		return (t.className = s), t
	}
	var Tp =
		typeof Element < 'u' &&
		(Element.prototype.matches ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector)
	function Qe(s, t) {
		if (!Tp) throw new Error('No element matching method supported')
		return Tp.call(s, t)
	}
	function fs(s) {
		s.remove ? s.remove() : s.parentNode && s.parentNode.removeChild(s)
	}
	function Ep(s, t) {
		return Array.prototype.filter.call(s.children, function (e) {
			return Qe(e, t)
		})
	}
	var at = {
			main: 'ps',
			rtl: 'ps__rtl',
			element: {
				thumb: function (s) {
					return 'ps__thumb-' + s
				},
				rail: function (s) {
					return 'ps__rail-' + s
				},
				consuming: 'ps__child--consume',
			},
			state: {
				focus: 'ps--focus',
				clicking: 'ps--clicking',
				active: function (s) {
					return 'ps--active-' + s
				},
				scrolling: function (s) {
					return 'ps--scrolling-' + s
				},
			},
		},
		xp = { x: null, y: null }
	function Cp(s, t) {
		var e = s.element.classList,
			i = at.state.scrolling(t)
		e.contains(i) ? clearTimeout(xp[t]) : e.add(i)
	}
	function Ap(s, t) {
		xp[t] = setTimeout(function () {
			return s.isAlive && s.element.classList.remove(at.state.scrolling(t))
		}, s.settings.scrollingThreshold)
	}
	function sC(s, t) {
		Cp(s, t), Ap(s, t)
	}
	var hn = function (t) {
			;(this.element = t), (this.handlers = {})
		},
		wp = { isEmpty: { configurable: !0 } }
	;(hn.prototype.bind = function (t, e) {
		typeof this.handlers[t] > 'u' && (this.handlers[t] = []),
			this.handlers[t].push(e),
			this.element.addEventListener(t, e, !1)
	}),
		(hn.prototype.unbind = function (t, e) {
			var i = this
			this.handlers[t] = this.handlers[t].filter(function (n) {
				return e && n !== e ? !0 : (i.element.removeEventListener(t, n, !1), !1)
			})
		}),
		(hn.prototype.unbindAll = function () {
			for (var t in this.handlers) this.unbind(t)
		}),
		(wp.isEmpty.get = function () {
			var s = this
			return Object.keys(this.handlers).every(function (t) {
				return s.handlers[t].length === 0
			})
		}),
		Object.defineProperties(hn.prototype, wp)
	var _s = function () {
		this.eventElements = []
	}
	;(_s.prototype.eventElement = function (t) {
		var e = this.eventElements.filter(function (i) {
			return i.element === t
		})[0]
		return e || ((e = new hn(t)), this.eventElements.push(e)), e
	}),
		(_s.prototype.bind = function (t, e, i) {
			this.eventElement(t).bind(e, i)
		}),
		(_s.prototype.unbind = function (t, e, i) {
			var n = this.eventElement(t)
			n.unbind(e, i),
				n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1)
		}),
		(_s.prototype.unbindAll = function () {
			this.eventElements.forEach(function (t) {
				return t.unbindAll()
			}),
				(this.eventElements = [])
		}),
		(_s.prototype.once = function (t, e, i) {
			var n = this.eventElement(t),
				o = function (r) {
					n.unbind(e, o), i(r)
				}
			n.bind(e, o)
		})
	function cr(s) {
		if (typeof window.CustomEvent == 'function') return new CustomEvent(s)
		var t = document.createEvent('CustomEvent')
		return t.initCustomEvent(s, !1, !1, void 0), t
	}
	function hr(s, t, e, i, n) {
		i === void 0 && (i = !0), n === void 0 && (n = !1)
		var o
		if (t === 'top')
			o = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down']
		else if (t === 'left')
			o = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right']
		else throw new Error('A proper axis should be provided')
		nC(s, e, o, i, n)
	}
	function nC(s, t, e, i, n) {
		var o = e[0],
			r = e[1],
			a = e[2],
			l = e[3],
			c = e[4],
			h = e[5]
		i === void 0 && (i = !0), n === void 0 && (n = !1)
		var d = s.element
		;(s.reach[l] = null),
			d[a] < 1 && (s.reach[l] = 'start'),
			d[a] > s[o] - s[r] - 1 && (s.reach[l] = 'end'),
			t &&
				(d.dispatchEvent(cr('ps-scroll-' + l)),
				t < 0
					? d.dispatchEvent(cr('ps-scroll-' + c))
					: t > 0 && d.dispatchEvent(cr('ps-scroll-' + h)),
				i && sC(s, l)),
			s.reach[l] &&
				(t || n) &&
				d.dispatchEvent(cr('ps-' + l + '-reach-' + s.reach[l]))
	}
	function st(s) {
		return parseInt(s, 10) || 0
	}
	function oC(s) {
		return (
			Qe(s, 'input,[contenteditable]') ||
			Qe(s, 'select,[contenteditable]') ||
			Qe(s, 'textarea,[contenteditable]') ||
			Qe(s, 'button,[contenteditable]')
		)
	}
	function rC(s) {
		var t = me(s)
		return (
			st(t.width) +
			st(t.paddingLeft) +
			st(t.paddingRight) +
			st(t.borderLeftWidth) +
			st(t.borderRightWidth)
		)
	}
	var gs = {
		isWebKit:
			typeof document < 'u' &&
			'WebkitAppearance' in document.documentElement.style,
		supportsTouch:
			typeof window < 'u' &&
			('ontouchstart' in window ||
				('maxTouchPoints' in window.navigator &&
					window.navigator.maxTouchPoints > 0) ||
				(window.DocumentTouch && document instanceof window.DocumentTouch)),
		supportsIePointer: typeof navigator < 'u' && navigator.msMaxTouchPoints,
		isChrome:
			typeof navigator < 'u' &&
			/Chrome/i.test(navigator && navigator.userAgent),
	}
	function Se(s) {
		var t = s.element,
			e = Math.floor(t.scrollTop),
			i = t.getBoundingClientRect()
		;(s.containerWidth = Math.round(i.width)),
			(s.containerHeight = Math.round(i.height)),
			(s.contentWidth = t.scrollWidth),
			(s.contentHeight = t.scrollHeight),
			t.contains(s.scrollbarXRail) ||
				(Ep(t, at.element.rail('x')).forEach(function (n) {
					return fs(n)
				}),
				t.appendChild(s.scrollbarXRail)),
			t.contains(s.scrollbarYRail) ||
				(Ep(t, at.element.rail('y')).forEach(function (n) {
					return fs(n)
				}),
				t.appendChild(s.scrollbarYRail)),
			!s.settings.suppressScrollX &&
			s.containerWidth + s.settings.scrollXMarginOffset < s.contentWidth
				? ((s.scrollbarXActive = !0),
				  (s.railXWidth = s.containerWidth - s.railXMarginWidth),
				  (s.railXRatio = s.containerWidth / s.railXWidth),
				  (s.scrollbarXWidth = kp(
						s,
						st((s.railXWidth * s.containerWidth) / s.contentWidth)
				  )),
				  (s.scrollbarXLeft = st(
						((s.negativeScrollAdjustment + t.scrollLeft) *
							(s.railXWidth - s.scrollbarXWidth)) /
							(s.contentWidth - s.containerWidth)
				  )))
				: (s.scrollbarXActive = !1),
			!s.settings.suppressScrollY &&
			s.containerHeight + s.settings.scrollYMarginOffset < s.contentHeight
				? ((s.scrollbarYActive = !0),
				  (s.railYHeight = s.containerHeight - s.railYMarginHeight),
				  (s.railYRatio = s.containerHeight / s.railYHeight),
				  (s.scrollbarYHeight = kp(
						s,
						st((s.railYHeight * s.containerHeight) / s.contentHeight)
				  )),
				  (s.scrollbarYTop = st(
						(e * (s.railYHeight - s.scrollbarYHeight)) /
							(s.contentHeight - s.containerHeight)
				  )))
				: (s.scrollbarYActive = !1),
			s.scrollbarXLeft >= s.railXWidth - s.scrollbarXWidth &&
				(s.scrollbarXLeft = s.railXWidth - s.scrollbarXWidth),
			s.scrollbarYTop >= s.railYHeight - s.scrollbarYHeight &&
				(s.scrollbarYTop = s.railYHeight - s.scrollbarYHeight),
			aC(t, s),
			s.scrollbarXActive
				? t.classList.add(at.state.active('x'))
				: (t.classList.remove(at.state.active('x')),
				  (s.scrollbarXWidth = 0),
				  (s.scrollbarXLeft = 0),
				  (t.scrollLeft = s.isRtl === !0 ? s.contentWidth : 0)),
			s.scrollbarYActive
				? t.classList.add(at.state.active('y'))
				: (t.classList.remove(at.state.active('y')),
				  (s.scrollbarYHeight = 0),
				  (s.scrollbarYTop = 0),
				  (t.scrollTop = 0))
	}
	function kp(s, t) {
		return (
			s.settings.minScrollbarLength &&
				(t = Math.max(t, s.settings.minScrollbarLength)),
			s.settings.maxScrollbarLength &&
				(t = Math.min(t, s.settings.maxScrollbarLength)),
			t
		)
	}
	function aC(s, t) {
		var e = { width: t.railXWidth },
			i = Math.floor(s.scrollTop)
		t.isRtl
			? (e.left =
					t.negativeScrollAdjustment +
					s.scrollLeft +
					t.containerWidth -
					t.contentWidth)
			: (e.left = s.scrollLeft),
			t.isScrollbarXUsingBottom
				? (e.bottom = t.scrollbarXBottom - i)
				: (e.top = t.scrollbarXTop + i),
			Ot(t.scrollbarXRail, e)
		var n = { top: i, height: t.railYHeight }
		t.isScrollbarYUsingRight
			? t.isRtl
				? (n.right =
						t.contentWidth -
						(t.negativeScrollAdjustment + s.scrollLeft) -
						t.scrollbarYRight -
						t.scrollbarYOuterWidth -
						9)
				: (n.right = t.scrollbarYRight - s.scrollLeft)
			: t.isRtl
			? (n.left =
					t.negativeScrollAdjustment +
					s.scrollLeft +
					t.containerWidth * 2 -
					t.contentWidth -
					t.scrollbarYLeft -
					t.scrollbarYOuterWidth)
			: (n.left = t.scrollbarYLeft + s.scrollLeft),
			Ot(t.scrollbarYRail, n),
			Ot(t.scrollbarX, {
				left: t.scrollbarXLeft,
				width: t.scrollbarXWidth - t.railBorderXWidth,
			}),
			Ot(t.scrollbarY, {
				top: t.scrollbarYTop,
				height: t.scrollbarYHeight - t.railBorderYWidth,
			})
	}
	function lC(s) {
		s.element,
			s.event.bind(s.scrollbarY, 'mousedown', function (t) {
				return t.stopPropagation()
			}),
			s.event.bind(s.scrollbarYRail, 'mousedown', function (t) {
				var e =
						t.pageY -
						window.pageYOffset -
						s.scrollbarYRail.getBoundingClientRect().top,
					i = e > s.scrollbarYTop ? 1 : -1
				;(s.element.scrollTop += i * s.containerHeight),
					Se(s),
					t.stopPropagation()
			}),
			s.event.bind(s.scrollbarX, 'mousedown', function (t) {
				return t.stopPropagation()
			}),
			s.event.bind(s.scrollbarXRail, 'mousedown', function (t) {
				var e =
						t.pageX -
						window.pageXOffset -
						s.scrollbarXRail.getBoundingClientRect().left,
					i = e > s.scrollbarXLeft ? 1 : -1
				;(s.element.scrollLeft += i * s.containerWidth),
					Se(s),
					t.stopPropagation()
			})
	}
	function cC(s) {
		Sp(s, [
			'containerWidth',
			'contentWidth',
			'pageX',
			'railXWidth',
			'scrollbarX',
			'scrollbarXWidth',
			'scrollLeft',
			'x',
			'scrollbarXRail',
		]),
			Sp(s, [
				'containerHeight',
				'contentHeight',
				'pageY',
				'railYHeight',
				'scrollbarY',
				'scrollbarYHeight',
				'scrollTop',
				'y',
				'scrollbarYRail',
			])
	}
	function Sp(s, t) {
		var e = t[0],
			i = t[1],
			n = t[2],
			o = t[3],
			r = t[4],
			a = t[5],
			l = t[6],
			c = t[7],
			h = t[8],
			d = s.element,
			u = null,
			p = null,
			f = null
		function b(T) {
			T.touches && T.touches[0] && (T[n] = T.touches[0].pageY),
				(d[l] = u + f * (T[n] - p)),
				Cp(s, c),
				Se(s),
				T.stopPropagation(),
				T.type.startsWith('touch') &&
					T.changedTouches.length > 1 &&
					T.preventDefault()
		}
		function v() {
			Ap(s, c),
				s[h].classList.remove(at.state.clicking),
				s.event.unbind(s.ownerDocument, 'mousemove', b)
		}
		function y(T, x) {
			;(u = d[l]),
				x && T.touches && (T[n] = T.touches[0].pageY),
				(p = T[n]),
				(f = (s[i] - s[e]) / (s[o] - s[a])),
				x
					? s.event.bind(s.ownerDocument, 'touchmove', b)
					: (s.event.bind(s.ownerDocument, 'mousemove', b),
					  s.event.once(s.ownerDocument, 'mouseup', v),
					  T.preventDefault()),
				s[h].classList.add(at.state.clicking),
				T.stopPropagation()
		}
		s.event.bind(s[r], 'mousedown', function (T) {
			y(T)
		}),
			s.event.bind(s[r], 'touchstart', function (T) {
				y(T, !0)
			})
	}
	function hC(s) {
		var t = s.element,
			e = function () {
				return Qe(t, ':hover')
			},
			i = function () {
				return Qe(s.scrollbarX, ':focus') || Qe(s.scrollbarY, ':focus')
			}
		function n(o, r) {
			var a = Math.floor(t.scrollTop)
			if (o === 0) {
				if (!s.scrollbarYActive) return !1
				if (
					(a === 0 && r > 0) ||
					(a >= s.contentHeight - s.containerHeight && r < 0)
				)
					return !s.settings.wheelPropagation
			}
			var l = t.scrollLeft
			if (r === 0) {
				if (!s.scrollbarXActive) return !1
				if (
					(l === 0 && o < 0) ||
					(l >= s.contentWidth - s.containerWidth && o > 0)
				)
					return !s.settings.wheelPropagation
			}
			return !0
		}
		s.event.bind(s.ownerDocument, 'keydown', function (o) {
			if (
				!(
					(o.isDefaultPrevented && o.isDefaultPrevented()) ||
					o.defaultPrevented
				) &&
				!(!e() && !i())
			) {
				var r = document.activeElement
					? document.activeElement
					: s.ownerDocument.activeElement
				if (r) {
					if (r.tagName === 'IFRAME') r = r.contentDocument.activeElement
					else for (; r.shadowRoot; ) r = r.shadowRoot.activeElement
					if (oC(r)) return
				}
				var a = 0,
					l = 0
				switch (o.which) {
					case 37:
						o.metaKey
							? (a = -s.contentWidth)
							: o.altKey
							? (a = -s.containerWidth)
							: (a = -30)
						break
					case 38:
						o.metaKey
							? (l = s.contentHeight)
							: o.altKey
							? (l = s.containerHeight)
							: (l = 30)
						break
					case 39:
						o.metaKey
							? (a = s.contentWidth)
							: o.altKey
							? (a = s.containerWidth)
							: (a = 30)
						break
					case 40:
						o.metaKey
							? (l = -s.contentHeight)
							: o.altKey
							? (l = -s.containerHeight)
							: (l = -30)
						break
					case 32:
						o.shiftKey ? (l = s.containerHeight) : (l = -s.containerHeight)
						break
					case 33:
						l = s.containerHeight
						break
					case 34:
						l = -s.containerHeight
						break
					case 36:
						l = s.contentHeight
						break
					case 35:
						l = -s.contentHeight
						break
					default:
						return
				}
				;(s.settings.suppressScrollX && a !== 0) ||
					(s.settings.suppressScrollY && l !== 0) ||
					((t.scrollTop -= l),
					(t.scrollLeft += a),
					Se(s),
					n(a, l) && o.preventDefault())
			}
		})
	}
	function dC(s) {
		var t = s.element
		function e(r, a) {
			var l = Math.floor(t.scrollTop),
				c = t.scrollTop === 0,
				h = l + t.offsetHeight === t.scrollHeight,
				d = t.scrollLeft === 0,
				u = t.scrollLeft + t.offsetWidth === t.scrollWidth,
				p
			return (
				Math.abs(a) > Math.abs(r) ? (p = c || h) : (p = d || u),
				p ? !s.settings.wheelPropagation : !0
			)
		}
		function i(r) {
			var a = r.deltaX,
				l = -1 * r.deltaY
			return (
				(typeof a > 'u' || typeof l > 'u') &&
					((a = (-1 * r.wheelDeltaX) / 6), (l = r.wheelDeltaY / 6)),
				r.deltaMode && r.deltaMode === 1 && ((a *= 10), (l *= 10)),
				a !== a && l !== l && ((a = 0), (l = r.wheelDelta)),
				r.shiftKey ? [-l, -a] : [a, l]
			)
		}
		function n(r, a, l) {
			if (!gs.isWebKit && t.querySelector('select:focus')) return !0
			if (!t.contains(r)) return !1
			for (var c = r; c && c !== t; ) {
				if (c.classList.contains(at.element.consuming)) return !0
				var h = me(c)
				if (l && h.overflowY.match(/(scroll|auto)/)) {
					var d = c.scrollHeight - c.clientHeight
					if (
						d > 0 &&
						((c.scrollTop > 0 && l < 0) || (c.scrollTop < d && l > 0))
					)
						return !0
				}
				if (a && h.overflowX.match(/(scroll|auto)/)) {
					var u = c.scrollWidth - c.clientWidth
					if (
						u > 0 &&
						((c.scrollLeft > 0 && a < 0) || (c.scrollLeft < u && a > 0))
					)
						return !0
				}
				c = c.parentNode
			}
			return !1
		}
		function o(r) {
			var a = i(r),
				l = a[0],
				c = a[1]
			if (!n(r.target, l, c)) {
				var h = !1
				s.settings.useBothWheelAxes
					? s.scrollbarYActive && !s.scrollbarXActive
						? (c
								? (t.scrollTop -= c * s.settings.wheelSpeed)
								: (t.scrollTop += l * s.settings.wheelSpeed),
						  (h = !0))
						: s.scrollbarXActive &&
						  !s.scrollbarYActive &&
						  (l
								? (t.scrollLeft += l * s.settings.wheelSpeed)
								: (t.scrollLeft -= c * s.settings.wheelSpeed),
						  (h = !0))
					: ((t.scrollTop -= c * s.settings.wheelSpeed),
					  (t.scrollLeft += l * s.settings.wheelSpeed)),
					Se(s),
					(h = h || e(l, c)),
					h && !r.ctrlKey && (r.stopPropagation(), r.preventDefault())
			}
		}
		typeof window.onwheel < 'u'
			? s.event.bind(t, 'wheel', o)
			: typeof window.onmousewheel < 'u' && s.event.bind(t, 'mousewheel', o)
	}
	function uC(s) {
		if (!gs.supportsTouch && !gs.supportsIePointer) return
		var t = s.element
		function e(f, b) {
			var v = Math.floor(t.scrollTop),
				y = t.scrollLeft,
				T = Math.abs(f),
				x = Math.abs(b)
			if (x > T) {
				if (
					(b < 0 && v === s.contentHeight - s.containerHeight) ||
					(b > 0 && v === 0)
				)
					return window.scrollY === 0 && b > 0 && gs.isChrome
			} else if (T > x && ((f < 0 && y === s.contentWidth - s.containerWidth) || (f > 0 && y === 0))) return !0
			return !0
		}
		function i(f, b) {
			;(t.scrollTop -= b), (t.scrollLeft -= f), Se(s)
		}
		var n = {},
			o = 0,
			r = {},
			a = null
		function l(f) {
			return f.targetTouches ? f.targetTouches[0] : f
		}
		function c(f) {
			return f.pointerType && f.pointerType === 'pen' && f.buttons === 0
				? !1
				: !!(
						(f.targetTouches && f.targetTouches.length === 1) ||
						(f.pointerType &&
							f.pointerType !== 'mouse' &&
							f.pointerType !== f.MSPOINTER_TYPE_MOUSE)
				  )
		}
		function h(f) {
			if (c(f)) {
				var b = l(f)
				;(n.pageX = b.pageX),
					(n.pageY = b.pageY),
					(o = new Date().getTime()),
					a !== null && clearInterval(a)
			}
		}
		function d(f, b, v) {
			if (!t.contains(f)) return !1
			for (var y = f; y && y !== t; ) {
				if (y.classList.contains(at.element.consuming)) return !0
				var T = me(y)
				if (v && T.overflowY.match(/(scroll|auto)/)) {
					var x = y.scrollHeight - y.clientHeight
					if (
						x > 0 &&
						((y.scrollTop > 0 && v < 0) || (y.scrollTop < x && v > 0))
					)
						return !0
				}
				if (b && T.overflowX.match(/(scroll|auto)/)) {
					var E = y.scrollWidth - y.clientWidth
					if (
						E > 0 &&
						((y.scrollLeft > 0 && b < 0) || (y.scrollLeft < E && b > 0))
					)
						return !0
				}
				y = y.parentNode
			}
			return !1
		}
		function u(f) {
			if (c(f)) {
				var b = l(f),
					v = { pageX: b.pageX, pageY: b.pageY },
					y = v.pageX - n.pageX,
					T = v.pageY - n.pageY
				if (d(f.target, y, T)) return
				i(y, T), (n = v)
				var x = new Date().getTime(),
					E = x - o
				E > 0 && ((r.x = y / E), (r.y = T / E), (o = x)),
					e(y, T) && f.preventDefault()
			}
		}
		function p() {
			s.settings.swipeEasing &&
				(clearInterval(a),
				(a = setInterval(function () {
					if (s.isInitialized) {
						clearInterval(a)
						return
					}
					if (!r.x && !r.y) {
						clearInterval(a)
						return
					}
					if (Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01) {
						clearInterval(a)
						return
					}
					if (!s.element) {
						clearInterval(a)
						return
					}
					i(r.x * 30, r.y * 30), (r.x *= 0.8), (r.y *= 0.8)
				}, 10)))
		}
		gs.supportsTouch
			? (s.event.bind(t, 'touchstart', h),
			  s.event.bind(t, 'touchmove', u),
			  s.event.bind(t, 'touchend', p))
			: gs.supportsIePointer &&
			  (window.PointerEvent
					? (s.event.bind(t, 'pointerdown', h),
					  s.event.bind(t, 'pointermove', u),
					  s.event.bind(t, 'pointerup', p))
					: window.MSPointerEvent &&
					  (s.event.bind(t, 'MSPointerDown', h),
					  s.event.bind(t, 'MSPointerMove', u),
					  s.event.bind(t, 'MSPointerUp', p)))
	}
	var pC = function () {
			return {
				handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
				maxScrollbarLength: null,
				minScrollbarLength: null,
				scrollingThreshold: 1e3,
				scrollXMarginOffset: 0,
				scrollYMarginOffset: 0,
				suppressScrollX: !1,
				suppressScrollY: !1,
				swipeEasing: !0,
				useBothWheelAxes: !1,
				wheelPropagation: !0,
				wheelSpeed: 1,
			}
		},
		fC = {
			'click-rail': lC,
			'drag-thumb': cC,
			keyboard: hC,
			wheel: dC,
			touch: uC,
		},
		dn = function (t, e) {
			var i = this
			if (
				(e === void 0 && (e = {}),
				typeof t == 'string' && (t = document.querySelector(t)),
				!t || !t.nodeName)
			)
				throw new Error(
					'no element is specified to initialize PerfectScrollbar'
				)
			;(this.element = t), t.classList.add(at.main), (this.settings = pC())
			for (var n in e) this.settings[n] = e[n]
			;(this.containerWidth = null),
				(this.containerHeight = null),
				(this.contentWidth = null),
				(this.contentHeight = null)
			var o = function () {
					return t.classList.add(at.state.focus)
				},
				r = function () {
					return t.classList.remove(at.state.focus)
				}
			;(this.isRtl = me(t).direction === 'rtl'),
				this.isRtl === !0 && t.classList.add(at.rtl),
				(this.isNegativeScroll = (function () {
					var c = t.scrollLeft,
						h = null
					return (
						(t.scrollLeft = -1), (h = t.scrollLeft < 0), (t.scrollLeft = c), h
					)
				})()),
				(this.negativeScrollAdjustment = this.isNegativeScroll
					? t.scrollWidth - t.clientWidth
					: 0),
				(this.event = new _s()),
				(this.ownerDocument = t.ownerDocument || document),
				(this.scrollbarXRail = lr(at.element.rail('x'))),
				t.appendChild(this.scrollbarXRail),
				(this.scrollbarX = lr(at.element.thumb('x'))),
				this.scrollbarXRail.appendChild(this.scrollbarX),
				this.scrollbarX.setAttribute('tabindex', 0),
				this.event.bind(this.scrollbarX, 'focus', o),
				this.event.bind(this.scrollbarX, 'blur', r),
				(this.scrollbarXActive = null),
				(this.scrollbarXWidth = null),
				(this.scrollbarXLeft = null)
			var a = me(this.scrollbarXRail)
			;(this.scrollbarXBottom = parseInt(a.bottom, 10)),
				isNaN(this.scrollbarXBottom)
					? ((this.isScrollbarXUsingBottom = !1),
					  (this.scrollbarXTop = st(a.top)))
					: (this.isScrollbarXUsingBottom = !0),
				(this.railBorderXWidth =
					st(a.borderLeftWidth) + st(a.borderRightWidth)),
				Ot(this.scrollbarXRail, { display: 'block' }),
				(this.railXMarginWidth = st(a.marginLeft) + st(a.marginRight)),
				Ot(this.scrollbarXRail, { display: '' }),
				(this.railXWidth = null),
				(this.railXRatio = null),
				(this.scrollbarYRail = lr(at.element.rail('y'))),
				t.appendChild(this.scrollbarYRail),
				(this.scrollbarY = lr(at.element.thumb('y'))),
				this.scrollbarYRail.appendChild(this.scrollbarY),
				this.scrollbarY.setAttribute('tabindex', 0),
				this.event.bind(this.scrollbarY, 'focus', o),
				this.event.bind(this.scrollbarY, 'blur', r),
				(this.scrollbarYActive = null),
				(this.scrollbarYHeight = null),
				(this.scrollbarYTop = null)
			var l = me(this.scrollbarYRail)
			;(this.scrollbarYRight = parseInt(l.right, 10)),
				isNaN(this.scrollbarYRight)
					? ((this.isScrollbarYUsingRight = !1),
					  (this.scrollbarYLeft = st(l.left)))
					: (this.isScrollbarYUsingRight = !0),
				(this.scrollbarYOuterWidth = this.isRtl ? rC(this.scrollbarY) : null),
				(this.railBorderYWidth =
					st(l.borderTopWidth) + st(l.borderBottomWidth)),
				Ot(this.scrollbarYRail, { display: 'block' }),
				(this.railYMarginHeight = st(l.marginTop) + st(l.marginBottom)),
				Ot(this.scrollbarYRail, { display: '' }),
				(this.railYHeight = null),
				(this.railYRatio = null),
				(this.reach = {
					x:
						t.scrollLeft <= 0
							? 'start'
							: t.scrollLeft >= this.contentWidth - this.containerWidth
							? 'end'
							: null,
					y:
						t.scrollTop <= 0
							? 'start'
							: t.scrollTop >= this.contentHeight - this.containerHeight
							? 'end'
							: null,
				}),
				(this.isAlive = !0),
				this.settings.handlers.forEach(function (c) {
					return fC[c](i)
				}),
				(this.lastScrollTop = Math.floor(t.scrollTop)),
				(this.lastScrollLeft = t.scrollLeft),
				this.event.bind(this.element, 'scroll', function (c) {
					return i.onScroll(c)
				}),
				Se(this)
		}
	;(dn.prototype.update = function () {
		this.isAlive &&
			((this.negativeScrollAdjustment = this.isNegativeScroll
				? this.element.scrollWidth - this.element.clientWidth
				: 0),
			Ot(this.scrollbarXRail, { display: 'block' }),
			Ot(this.scrollbarYRail, { display: 'block' }),
			(this.railXMarginWidth =
				st(me(this.scrollbarXRail).marginLeft) +
				st(me(this.scrollbarXRail).marginRight)),
			(this.railYMarginHeight =
				st(me(this.scrollbarYRail).marginTop) +
				st(me(this.scrollbarYRail).marginBottom)),
			Ot(this.scrollbarXRail, { display: 'none' }),
			Ot(this.scrollbarYRail, { display: 'none' }),
			Se(this),
			hr(this, 'top', 0, !1, !0),
			hr(this, 'left', 0, !1, !0),
			Ot(this.scrollbarXRail, { display: '' }),
			Ot(this.scrollbarYRail, { display: '' }))
	}),
		(dn.prototype.onScroll = function (t) {
			this.isAlive &&
				(Se(this),
				hr(this, 'top', this.element.scrollTop - this.lastScrollTop),
				hr(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
				(this.lastScrollTop = Math.floor(this.element.scrollTop)),
				(this.lastScrollLeft = this.element.scrollLeft))
		}),
		(dn.prototype.destroy = function () {
			this.isAlive &&
				(this.event.unbindAll(),
				fs(this.scrollbarX),
				fs(this.scrollbarY),
				fs(this.scrollbarXRail),
				fs(this.scrollbarYRail),
				this.removePsClasses(),
				(this.element = null),
				(this.scrollbarX = null),
				(this.scrollbarY = null),
				(this.scrollbarXRail = null),
				(this.scrollbarYRail = null),
				(this.isAlive = !1))
		}),
		(dn.prototype.removePsClasses = function () {
			this.element.className = this.element.className
				.split(' ')
				.filter(function (t) {
					return !t.match(/^ps([-_].+|)$/)
				})
				.join(' ')
		})
	const Kl = 'perfectScrollbar',
		_C = 'perfect-scrollbar',
		dr = 'te.perfectScrollbar',
		be = 'te',
		ve = 'ps',
		Ul = [
			{ te: `scrollX.${be}.${ve}`, ps: 'ps-scroll-x' },
			{ te: `scrollY.${be}.${ve}`, ps: 'ps-scroll-y' },
			{ te: `scrollUp.${be}.${ve}`, ps: 'ps-scroll-up' },
			{ te: `scrollDown.${be}.${ve}`, ps: 'ps-scroll-down' },
			{ te: `scrollLeft.${be}.${ve}`, ps: 'ps-scroll-left' },
			{ te: `scrollRight.${be}.${ve}`, ps: 'ps-scroll-right' },
			{ te: `scrollXEnd.${be}.${ve}`, ps: 'ps-x-reach-end' },
			{ te: `scrollYEnd.${be}.${ve}`, ps: 'ps-y-reach-end' },
			{ te: `scrollXStart.${be}.${ve}`, ps: 'ps-x-reach-start' },
			{ te: `scrollYStart.${be}.${ve}`, ps: 'ps-y-reach-start' },
		],
		gC = {
			handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
			wheelSpeed: 1,
			wheelPropagation: !0,
			swipeEasing: !0,
			minScrollbarLength: null,
			maxScrollbarLength: null,
			scrollingThreshold: 1e3,
			useBothWheelAxes: !1,
			suppressScrollX: !1,
			suppressScrollY: !1,
			scrollXMarginOffset: 0,
			scrollYMarginOffset: 0,
			positionRight: !0,
		},
		mC = {
			handlers: '(string|array)',
			wheelSpeed: 'number',
			wheelPropagation: 'boolean',
			swipeEasing: 'boolean',
			minScrollbarLength: '(number|null)',
			maxScrollbarLength: '(number|null)',
			scrollingThreshold: 'number',
			useBothWheelAxes: 'boolean',
			suppressScrollX: 'boolean',
			suppressScrollY: 'boolean',
			scrollXMarginOffset: 'number',
			scrollYMarginOffset: 'number',
			positionRight: 'boolean',
		},
		bC = {
			ps: 'group/ps overflow-hidden [overflow-anchor:none] touch-none',
			railX:
				'group/x absolute bottom-0 h-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-x]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-x]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none',
			railXColors:
				'group-[&.ps--active-x]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]',
			railXThumb:
				'absolute bottom-0.5 rounded-md h-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_height_.2s_ease-in-out] group-hover/x:h-[11px] group-focus/x:h-[0.6875rem] group-[&.ps--clicking]/x:bg-[#999] group-[&.ps--clicking]/x:h-[11px] outline-none',
			railXThumbColors:
				'bg-[#aaa] group-hover/x:bg-[#999] group-focus/x:bg-[#999]',
			railY:
				'group/y absolute right-0 w-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-y]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-y]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none',
			railYColors:
				'group-[&.ps--active-y]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]',
			railYThumb:
				'absolute right-0.5 rounded-md w-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_width_.2s_ease-in-out,_opacity] group-hover/y:w-[11px] group-focus/y:w-[0.6875rem] group-[&.ps--clicking]/y:w-[11px] outline-none',
			railYThumbColors:
				'bg-[#aaa] group-hover/y:bg-[#999] group-focus/y:bg-[#999] group-[&.ps--clicking]/y:bg-[#999]',
		},
		vC = {
			ps: 'string',
			railX: 'string',
			railXColors: 'string',
			railXThumb: 'string',
			railXThumbColors: 'string',
			railY: 'string',
			railYColors: 'string',
			railYThumb: 'string',
			railYThumbColors: 'string',
		}
	class ms {
		constructor(t, e = {}, i = {}) {
			;(this._element = t),
				(this._options = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this.perfectScrollbar = null),
				(this._observer = null),
				(this._psClasses = [
					{
						ps: 'ps__rail-x',
						te: this._classes.railX,
						teColor: this._classes.railXColors,
					},
					{
						ps: 'ps__rail-y',
						te: this._classes.railY,
						teColor: this._classes.railYColors,
					},
					{
						ps: 'ps__thumb-x',
						te: this._classes.railXThumb,
						teColor: this._classes.railXThumbColors,
					},
					{
						ps: 'ps__thumb-y',
						te: this._classes.railYThumb,
						teColor: this._classes.railYThumbColors,
					},
				]),
				this._element &&
					(O.setData(t, dr, this), g.addClass(this._element, _C)),
				this.init()
		}
		static get NAME() {
			return Kl
		}
		get railX() {
			return m.findOne('.ps__rail-x', this._element)
		}
		get railY() {
			return m.findOne('.ps__rail-y', this._element)
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._element)
			return (
				e.handlers !== void 0 && (e.handlers = e.handlers.split(' ')),
				(t = { ...gC, ...e, ...t }),
				L(Kl, t, mC),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...bC, ...e, ...t }), L(Kl, t, vC), t
		}
		dispose() {
			this._options.positionRight && this._observer.disconnect(),
				O.removeData(this._element, dr),
				(this._element = null),
				(this._dataAttrOptions = null),
				(this._options = null),
				this.perfectScrollbar.destroy(),
				this.removeEvent(Ul),
				(this.perfectScrollbar = null)
		}
		init() {
			if (
				((this.perfectScrollbar = new dn(this._element, this._options)),
				this._addPerfectScrollbarStyles(),
				this._updateScrollPosition(),
				this.perfectScrollbar.update(),
				this._initEvents(Ul),
				this._options.positionRight)
			) {
				this._observer = new ResizeObserver(() => {
					setTimeout(() => {
						this._updateScrollPosition()
					}, 100)
				})
				const t = { attributes: !0, attributeFilter: ['class', 'className'] }
				this._observer.observe(this._element, t)
			}
		}
		_updateScrollPosition() {
			const t = getComputedStyle(this._element).getPropertyValue('height'),
				e = getComputedStyle(this._element).getPropertyValue('width')
			this.railX &&
				(this.railX.style.transform = `translateY(calc(-100% + ${
					this._canTransform(t) ? t : '0px'
				}))`),
				this.railY &&
					(this.railY.style.transform = `translateX(calc(-100% + ${
						this._canTransform(e) ? e : '0px'
					}))`)
		}
		_canTransform(t) {
			return t && t.includes('px')
		}
		update() {
			return this.perfectScrollbar.update()
		}
		_initEvents(t = []) {
			t.forEach(({ ps: e, te: i }) =>
				_.on(this._element, e, n => _.trigger(this._element, i, { e: n }))
			)
		}
		_addPerfectScrollbarStyles() {
			this._psClasses.forEach(t => {
				const e = m.findOne(`.${t.ps}`, this._element)
				g.addClass(e, t.te), g.addClass(e, t.teColor)
			}),
				g.addClass(this._element, this._classes.ps),
				g.removeClass(this._element, 'ps')
		}
		removeEvent(t) {
			let e = []
			typeof t == 'string' && (e = Ul.filter(({ te: i }) => i === t)),
				e.forEach(({ ps: i, te: n }) => {
					_.off(this._element, i), _.off(this._element, n)
				})
		}
		static jQueryInterface(t) {
			return this.each(function () {
				let e = O.getData(this, dr)
				const i = typeof t == 'object' && t
				if (
					!(!e && /dispose|hide/.test(t)) &&
					(e || (e = new ms(this, i)), typeof t == 'string')
				) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t]()
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, dr)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const yC = 'data-te-datatable-select-ref',
		TC = 'data-te-datatable-pagination-nav-ref',
		EC = 'data-te-datatable-pagination-right-ref',
		xC = 'data-te-datatable-pagination-left-ref',
		CC = 'data-te-datatable-pagination-start-ref',
		AC = 'data-te-datatable-pagination-end-ref',
		wC = (
			{
				text: s,
				entries: t,
				entriesOptions: e,
				fullPagination: i,
				rowsText: n,
				allText: o,
				paginationStartIconTemplate: r,
				paginationLeftIconTemplate: a,
				paginationRightIconTemplate: l,
				paginationEndIconTemplate: c,
				classes: h,
			},
			d,
			u
		) => {
			const p = e.map(f =>
				f === 'All'
					? `<option value="${f}" ${f === t ? 'selected' : ''}>${o}</option>`
					: `<option value="${f}" ${f === t ? 'selected' : ''}>${f}</option>`
			).join(`
`)
			return `
<div class="${h.pagination} ${u ? `${h.paginationBordered}` : ''} ${
				h.borderColor
			} ${h.color}">
  <div class="${h.selectItemsWrapper}">  
    <p class="${h.paginationRowsText} ${
				d ? `${h.loadingPaginationRowsText}` : ''
			}">${n}</p>
    <div class="${h.selectWrapper} ${
				d ? `${h.loadingPaginationSelectWrapper}` : ''
			}">
      <select name="entries"
        ${d ? 'disabled' : ''} class="select" ${yC}>
        ${p}
      </select>
    </div>
  </div>
  <div class="${h.paginationNav} ${d ? `${h.loadingPaginationNav}` : ''}" ${TC}>
  ${s}
  </div>
  <div class="${h.paginationButtonsWrapper}">
    ${
			i
				? `<button data-te-ripple-init data-te-ripple-color="dark" class="${h.paginationStartButton}" ${CC}>
           ${r}
          </button>`
				: ''
		}
    <button data-te-ripple-init data-te-ripple-color="dark" class="${
			h.paginationLeftButton
		}" ${xC}>
      ${a}
  </button>
    <button data-te-ripple-init data-te-ripple-color="dark" class="${
			h.paginationRightButton
		}" ${EC}>
      ${l}
  </button>
    ${
			i
				? `<button data-te-ripple-init data-te-ripple-color="dark" class="${h.paginationEndButton}" ${AC}>
           ${c}
          </button>`
				: ''
		}
  </div>
</div>
`
		},
		kC = 'data-te-datatable-sort-icon-ref',
		SC = 'data-te-datatable-header-checkbox-ref',
		OC = (s, t, e, i, n, o, r, a) => {
			const l = e
					? `
  <th scope="col">
    <div class="${a.checkboxHeaderWrapper}">
      <input
        class="${a.checkboxHeader}"
        type="checkbox"
        value=""
        ${SC}
        />
    </div>
  </th>
  `
					: '<th scope="col"></th>',
				c = s.map((h, d) => {
					const u = h.fixed
						? s
								.filter((p, f) => p.fixed === h.fixed && f < d)
								.reduce((p, f) => p + f.width, 0)
						: null
					return `<th class="${a.column} ${i ? `${a.tableBordered}` : ''} ${
						a.borderColor
					} ${n ? `${a.sm}` : ''} ${
						h.fixed ? `${a.fixedHeader} ${a.color}` : ''
					} ${o ? `${a.loadingColumn}` : ''}" style="${
						h.fixed ? `${h.fixed === 'right' ? 'right' : 'left'}: ${u}px;` : ''
					}" scope="col">${
						h.sort
							? `<div class="${a.sortIconWrapper}"><span class="${a.sortIcon} ${
									o ? 'invisible' : ''
							  }" data-te-sort="${h.field}" ${kC}>${r}</span>`
							: ''
					} <span class="${h.sort ? '' : 'pl-[18px]'}">${
						h.label
					}</span></div></th>`
				})
			return [t ? l : '', ...c].join(`
`)
		},
		IC = 'data-te-datatable-row-ref',
		DC = 'data-te-datatable-row-checkbox-ref',
		MC = 'data-te-datatable-cell-ref',
		LC = ({
			rows: s,
			columns: t,
			noFoundMessage: e,
			edit: i,
			selectable: n,
			loading: o,
			bordered: r,
			borderless: a,
			striped: l,
			hover: c,
			sm: h,
			classes: d,
		}) => {
			const u = s.map(p => {
				const f = `
      <td data-te-field="checkbox" class="${
				r ? `${d.tableBordered} ${d.borderColor}` : ''
			}">
        <div class="${d.checkboxRowWrapper}">
          <input
            class="${d.checkboxRow}"
            type="checkbox"
            value=""
            data-te-row-index="${p.rowIndex}"  ${DC}/>
        </div>
      </td>`,
					b = t
						.map((v, y) => {
							const T = {}
							if (
								(v.width &&
									((T['min-width'] = `${v.width - 1}px`),
									(T['max-width'] = `${v.width}px`),
									(T.width = `${v.width}px`)),
								v.fixed)
							) {
								const E = t
									.filter((C, A) => C.fixed === v.fixed && A < y)
									.reduce((C, A) => C + A.width, 0)
								T[v.fixed === 'right' ? 'right' : 'left'] = `${E}px`
							}
							return `<td style="${Object.keys(T)
								.map(E => `${E}: ${T[E]}`)
								.join('; ')}" class="${d.rowItem} ${d.borderColor} ${
								i ? `${d.edit}` : ''
							} ${r ? `${d.tableBordered}` : ''} ${h ? `${d.sm}` : ''} ${
								v.fixed ? `${d.fixedHeader} ${d.color}` : ''
							}" ${MC} data-te-field="${v.field}" ${
								i && 'contenteditable="true"'
							}>${p[v.field]}</td>`
						})
						.join('')
				return `<tr scope="row" class="${d.row} ${d.borderColor} ${
					d.rowAnimation
				} ${l ? `${d.striped}` : ''} ${a ? `${d.borderless}` : ''} ${
					c ? `${d.hoverRow}` : ''
				}" data-te-index="${p.rowIndex}" ${IC}>${n ? f : ''}${b}</tr>`
			})
			return s.length > 0 || o
				? u.join(`
`)
				: `<tr class="${d.noFoundMessageWrapper} ${d.borderColor}"><td class="${d.noFoundMessage}">${e}</td></tr>`
		},
		$C = 'data-te-datatable-inner-ref',
		RC = 'data-te-datatable-header-ref',
		Op = ({
			columns: s,
			rows: t,
			noFoundMessage: e,
			edit: i,
			multi: n,
			selectable: o,
			loading: r,
			loadingMessage: a,
			pagination: l,
			bordered: c,
			borderless: h,
			striped: d,
			hover: u,
			fixedHeader: p,
			sm: f,
			sortIconTemplate: b,
			classes: v,
		}) => {
			const y = LC({
					rows: t,
					columns: s,
					noFoundMessage: e,
					edit: i,
					loading: r,
					selectable: o,
					bordered: c,
					borderless: h,
					striped: d,
					hover: u,
					sm: f,
					classes: v,
				}),
				T = OC(s, o, n, c, f, r, b, v)
			return {
				table: `
<div class="${v.color}" ${$C}>
  <table class="${v.table}">
    <thead class="${v.tableHeader} ${c ? `${v.tableBordered}` : ''} ${
					h ? `${v.borderless}` : ''
				} ${v.borderColor}" ${RC}>
      <tr>
        ${T}
      </tr>
    </thead>
    <tbody class="${p ? `${v.fixedHeaderBody}` : ''}">
      ${r ? '' : y}
    </tbody>
  </table>
</div>
${
	r
		? `
  <div class="${v.loadingItemsWrapper}">
    <div class="${v.loadingProgressBarWrapper}">
      <div class="${v.loadingProgressBar}"></div>
    </div>
  </div>
<p class="${v.loadingMessage}">${a}</p>
`
		: ''
}
${l.enable ? wC(l, r, c) : ''}
  `,
				rows: y,
				column: T,
			}
		},
		PC = ({ rows: s, field: t, order: e }) =>
			s.sort((n, o) => {
				let r = n[t],
					a = o[t]
				return (
					typeof r == 'string' && (r = r.toLowerCase()),
					typeof a == 'string' && (a = a.toLowerCase()),
					r < a ? (e === 'desc' ? 1 : -1) : r > a ? (e === 'desc' ? -1 : 1) : 0
				)
			}),
		NC = (s, t, e) => {
			if (!t) return s
			const i = n => {
				const o = document.createElement('div')
				return (
					(o.innerHTML = n),
					(n = o.textContent || o.innerText || ''),
					n.toString().toLowerCase().match(t.toLowerCase())
				)
			}
			return s.filter(n => {
				if (e && typeof e == 'string') return i(n[e])
				let o = Object.values(n)
				return (
					e &&
						Array.isArray(e) &&
						(o = Object.keys(n)
							.filter(r => e.includes(r))
							.map(r => n[r])),
					o.filter(r => i(r)).length > 0
				)
			})
		},
		Ip = ({ rows: s, entries: t, activePage: e }) => {
			const i = e * t
			return s.slice(i, i + Number(t))
		},
		un = 'datatable',
		Ht = `data-te-${un}`,
		pn = `te.${un}`,
		ur = `.${pn}`,
		BC = `[${Ht}-inner-ref]`,
		Xl = `[${Ht}-cell-ref]`,
		HC = `[${Ht}-header-ref]`,
		VC = `[${Ht}-header-checkbox-ref]`,
		FC = `[${Ht}-pagination-right-ref]`,
		WC = `[${Ht}-pagination-left-ref]`,
		zC = `[${Ht}-pagination-start-ref]`,
		jC = `[${Ht}-pagination-end-ref]`,
		YC = `[${Ht}-pagination-nav-ref]`,
		KC = `[${Ht}-select-ref]`,
		Gl = `[${Ht}-sort-icon-ref]`,
		fn = `[${Ht}-row-ref]`,
		ql = `[${Ht}-row-checkbox-ref]`,
		UC = `selectRows${ur}`,
		Dp = `render${ur}`,
		XC = `rowClick${ur}`,
		GC = `update${ur}`,
		qC = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg>`,
		ZC = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>`,
		QC = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>`,
		JC = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>`,
		tA = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
</svg>`,
		eA = 'border-neutral-200 dark:border-neutral-500',
		iA = 'border-none',
		sA =
			"relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-500 checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-300 dark:checked:border-blue-500 dark:checked:bg-blue-500 checked:bg-blue-500 dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400",
		nA = 'mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center',
		oA =
			"relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-500 checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-300 dark:checked:border-blue-500 dark:checked:bg-blue-500 checked:bg-blue-500 dark:checked:bg-blue-500 checked:bg-blue-500 dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400",
		rA = 'mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center',
		aA = 'bg-white dark:bg-neutral-800',
		lA = 'py-4 pl-1 text-clip overflow-hidden text-[#212529] dark:text-white',
		cA = 'focus:outline-none',
		hA = 'sticky top-0 z-30',
		dA = 'sticky z-10 bg-inherit',
		uA = 'hover:bg-neutral-100 dark:hover:bg-neutral-700',
		pA =
			'pointer-events-none cursor-none text-neutral-400 dark:text-neutral-300',
		fA = 'h-[2px] relative w-full overflow-hidden',
		_A =
			'text-center text-neutral-500 font-ligh text-sm my-4 dark:text-neutral-400',
		gA = 'text-neutral-500 dark:text-neutral-300',
		mA = 'text-neutral-500 dark:text-neutral-300',
		bA = 'pointer-events-none cursor-none',
		vA = 'h-full w-[45%] bg-primary-400 dark:bg-primary-600',
		yA = 'h-full animate-[progress_3s_ease-in-out_infinite]',
		TA = 'pl-2 py-3 font-light text-sm dark:text-neutral-300',
		EA = 'border-b',
		xA =
			'flex md:flex-row justify-end items-center py-2 space-x-4 text-sm flex-col leading-[1.6]',
		CA = 'border border-t-0',
		AA = 'order-1 my-3 md:order-none md:my-0 md:pr-1',
		wA =
			'inline-block rounded p-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-300',
		kA =
			'inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-300',
		SA = 'font-normal order-2 mb-3 md:order-none md:mb-0',
		OA =
			'inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-300',
		IA = 'font-light',
		DA =
			'inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-300',
		MA = 'border-b',
		LA = 'transition ease-in-out duration-300 motion-reduce:transition-none',
		$A = 'whitespace-nowrap text-clip overflow-auto px-[1.4rem] py-4',
		RA = 'relative',
		PA = '!bg-neutral-100 dark:!bg-neutral-300',
		NA = 'flex items-center space-x-4 order-3 md:order-none',
		BA = 'w-[70px]',
		HA = '!py-2',
		VA =
			'w-[15px] h-[10px] origin-bottom font-black mr-1 opacity-0 text-neutral-500 group-hover:opacity-100 transition hover:ease-in-out transform ease-linear duration-300 motion-reduce:transition-none dark:text-neutral-400',
		FA = 'flex flex-row group',
		WA =
			'[&:nth-child(odd)]:bg-neutral-50 [&:nth-child(odd)]:dark:bg-neutral-700',
		zA = 'border',
		jA = 'border-b font-normal px-[1.4rem]',
		YA = 'text-left text-sm font-light w-full leading-[1.6]',
		KA = {
			bordered: 'boolean',
			borderless: 'boolean',
			clickableRows: 'boolean',
			defaultValue: 'string',
			edit: 'boolean',
			entries: '(number|string)',
			entriesOptions: 'array',
			fullPagination: 'boolean',
			hover: 'boolean',
			loading: 'boolean',
			loadingMessage: 'string',
			maxWidth: '(null|number|string)',
			maxHeight: '(null|number|string)',
			multi: 'boolean',
			noFoundMessage: 'string',
			pagination: 'boolean',
			selectable: 'boolean',
			sm: 'boolean',
			sortField: '(null|string)',
			sortOrder: 'string',
			fixedHeader: 'boolean',
			striped: 'boolean',
			rowsText: 'string',
			ofText: 'string',
			allText: 'string',
			forceSort: 'boolean',
			sortIconTemplate: 'string',
			paginationStartIconTemplate: 'string',
			paginationEndIconTemplate: 'string',
			paginationLeftIconTemplate: 'string',
			paginationRightIconTemplate: 'string',
		},
		UA = {
			bordered: !1,
			borderless: !1,
			clickableRows: !1,
			defaultValue: '-',
			edit: !1,
			entries: 10,
			entriesOptions: [10, 25, 50, 200],
			fixedHeader: !1,
			fullPagination: !1,
			hover: !1,
			loading: !1,
			loadingMessage: 'Loading results...',
			maxWidth: null,
			maxHeight: null,
			multi: !1,
			noFoundMessage: 'No matching results found',
			pagination: !0,
			selectable: !1,
			sm: !1,
			sortField: null,
			sortOrder: 'asc',
			striped: !1,
			rowsText: 'Rows per page:',
			ofText: 'of',
			allText: 'All',
			forceSort: !1,
			sortIconTemplate: qC,
			paginationStartIconTemplate: ZC,
			paginationEndIconTemplate: tA,
			paginationLeftIconTemplate: QC,
			paginationRightIconTemplate: JC,
		},
		XA = {
			label: 'string',
			field: 'string',
			fixed: '(boolean|string)',
			format: '(function|null)',
			width: '(number|null)',
			sort: 'boolean',
			columnIndex: 'number',
		},
		GA = {
			label: '',
			field: '',
			fixed: !1,
			format: null,
			width: null,
			sort: !0,
			columnIndex: 0,
		},
		qA = {
			table: YA,
			tableHeader: jA,
			column: lA,
			pagination: xA,
			selectWrapper: BA,
			scroll: RA,
			tableBordered: zA,
			paginationBordered: CA,
			borderless: iA,
			checkboxRowWrapper: rA,
			checkboxRow: oA,
			checkboxHeaderWrapper: nA,
			checkboxHeader: sA,
			row: MA,
			rowItem: $A,
			striped: WA,
			sortIconWrapper: FA,
			sortIcon: VA,
			paginationRowsText: IA,
			paginationNav: SA,
			paginationButtonsWrapper: AA,
			hoverRow: uA,
			borderColor: eA,
			color: aA,
			fixedHeader: hA,
			fixedHeaderBody: dA,
			selectableRow: PA,
			rowAnimation: LA,
			sm: HA,
			edit: cA,
			selectItemsWrapper: NA,
			paginationStartButton: DA,
			paginationLeftButton: kA,
			paginationRightButton: OA,
			paginationEndButton: wA,
			loadingItemsWrapper: fA,
			loadingProgressBarWrapper: yA,
			loadingProgressBar: vA,
			loadingMessage: _A,
			loadingPaginationRowsText: mA,
			loadingPaginationSelectWrapper: bA,
			loadingPaginationNav: gA,
			loadingColumn: pA,
			noFoundMessageWrapper: EA,
			noFoundMessage: TA,
		},
		ZA = {
			table: 'string',
			tableHeader: 'string',
			column: 'string',
			pagination: 'string',
			selectWrapper: 'string',
			scroll: 'string',
			tableBordered: 'string',
			paginationBordered: 'string',
			borderless: 'string',
			checkboxRowWrapper: 'string',
			checkboxRow: 'string',
			checkboxHeaderWrapper: 'string',
			checkboxHeader: 'string',
			row: 'string',
			rowItem: 'string',
			striped: 'string',
			sortIconWrapper: 'string',
			sortIcon: 'string',
			paginationRowsText: 'string',
			paginationNav: 'string',
			paginationButtonsWrapper: 'string',
			hoverRow: 'string',
			borderColor: 'string',
			color: 'string',
			fixedHeader: 'string',
			fixedHeaderBody: 'string',
			selectableRow: 'string',
			rowAnimation: 'string',
			sm: 'string',
			edit: 'string',
			selectItemsWrapper: 'string',
			paginationStartButton: 'string',
			paginationLeftButton: 'string',
			paginationRightButton: 'string',
			paginationEndButton: 'string',
			loadingItemsWrapper: 'string',
			loadingProgressBarWrapper: 'string',
			loadingProgressBar: 'string',
			loadingMessage: 'string',
			loadingPaginationRowsText: 'string',
			loadingPaginationSelectWrapper: 'string',
			loadingPaginationNav: 'string',
			loadingColumn: 'string',
			noFoundMessageWrapper: 'string',
			noFoundMessage: 'string',
		}
	class pr {
		constructor(t, e = {}, i = {}, n = {}) {
			;(this._element = t),
				(this._options = this._getOptions(i)),
				(this._classes = this._getClasses(n)),
				(this._sortReverse = !1),
				(this._activePage = 0),
				(this._search = ''),
				(this._searchColumn = null),
				(this._paginationLeft = null),
				(this._paginationRight = null),
				(this._paginationStart = null),
				(this._paginationEnd = null),
				(this._select = null),
				(this._selectInstance = null),
				(this._selected = []),
				(this._checkboxes = null),
				(this._headerCheckbox = null),
				(this._rows = this._getRows(e.rows)),
				(this._columns = this._getColumns(e.columns)),
				this._element &&
					(O.setData(t, pn, this),
					(this._perfectScrollbar = null),
					this._setup())
		}
		static get NAME() {
			return un
		}
		get columns() {
			return this._columns.map((t, e) => {
				let i = { ...GA, field: `field_${e}`, columnIndex: e }
				return (
					typeof t == 'string'
						? (i.label = t)
						: typeof t == 'object' && (i = { ...i, ...t }),
					L('column', i, XA),
					i
				)
			})
		}
		get rows() {
			return this._rows.map((t, e) => {
				const i = { rowIndex: e }
				return (
					Array.isArray(t)
						? this.columns.forEach((n, o) => {
								t[o] === 0
									? (i[n.field] = t[o])
									: (i[n.field] = t[o] || this._options.defaultValue)
						  })
						: typeof t == 'object' &&
						  this.columns.forEach(n => {
								t[n.field] === 0
									? (i[n.field] = t[n.field])
									: (i[n.field] = t[n.field] || this._options.defaultValue)
						  }),
					i
				)
			})
		}
		get searchResult() {
			return NC(this.rows, this._search, this._searchColumn)
		}
		get computedRows() {
			let t = [...this.searchResult]
			return (
				this._options.sortOrder &&
					(t = PC({
						rows: t,
						field: this._options.sortField,
						order: this._options.sortOrder,
					})),
				this._options.pagination &&
					(this._options.entries === 'All'
						? (t = Ip({
								rows: t,
								entries: t.length,
								activePage: this._activePage,
						  }))
						: (t = Ip({
								rows: t,
								entries: this._options.entries,
								activePage: this._activePage,
						  }))),
				t
			)
		}
		get pages() {
			return this._options.entries === 'All'
				? 1
				: Math.ceil(this.searchResult.length / this._options.entries)
		}
		get navigationText() {
			const t = this._activePage * this._options.entries
			return this.searchResult.length === 0
				? `0 ${this._options.ofText} 0`
				: this._options.entries === 'All'
				? `1 - ${this.searchResult.length} ${this._options.ofText} ${this.searchResult.length}`
				: `${t + 1} - ${this.computedRows.length + t} ${this._options.ofText} ${
						this.searchResult.length
				  }`
		}
		get tableOptions() {
			return {
				classes: this._classes,
				columns: this.columns,
				rows: this.computedRows,
				noFoundMessage: this._options.noFoundMessage,
				edit: this._options.edit,
				loading: this._options.loading,
				loaderClass: this._options.loaderClass,
				loadingMessage: this._options.loadingMessage,
				selectable: this._options.selectable,
				multi: this._options.multi,
				bordered: this._options.bordered,
				borderless: this._options.borderless,
				striped: this._options.striped,
				hover: this._options.hover,
				fixedHeader: this._options.fixedHeader,
				sm: this._options.sm,
				sortIconTemplate: this._options.sortIconTemplate,
				pagination: {
					enable: this._options.pagination,
					text: this.navigationText,
					entries: this._options.entries,
					entriesOptions: this._options.entriesOptions,
					fullPagination: this._options.fullPagination,
					rowsText: this._options.rowsText,
					ofText: this._options.ofText,
					allText: this._options.allText,
					paginationStartIconTemplate:
						this._options.paginationStartIconTemplate,
					paginationLeftIconTemplate: this._options.paginationLeftIconTemplate,
					paginationRightIconTemplate:
						this._options.paginationRightIconTemplate,
					paginationEndIconTemplate: this._options.paginationEndIconTemplate,
					classes: this._classes,
				},
				forceSort: this._options.forceSort,
			}
		}
		update(t, e = {}) {
			t && t.rows && (this._rows = t.rows),
				t && t.columns && (this._columns = t.columns),
				this._clearClassList(e),
				(this._options = this._getOptions({ ...this._options, ...e })),
				this._setup(),
				this._performSort()
		}
		dispose() {
			this._selectInstance && this._selectInstance.dispose(),
				O.removeData(this._element, pn),
				this._removeEventListeners(),
				this._perfectScrollbar.destroy(),
				(this._element = null)
		}
		search(t, e) {
			;(this._search = t),
				(this._searchColumn = e),
				(this._activePage = 0),
				this._options.pagination && this._toggleDisableState(),
				this._renderRows(),
				this._options.maxHeight &&
					((this._perfectScrollbar.element.scrollTop = 0),
					this._perfectScrollbar.update())
		}
		sort(t, e = 'asc') {
			;(this._options.sortOrder = e),
				typeof t == 'string'
					? (this._options.sortField = this.columns.find(
							n => n.label === t
					  ).field)
					: (this._options.sortField = t.field)
			const i = m.findOne(
				`[data-te-sort="${this._options.sortField}"]`,
				this._element
			)
			;(this._activePage = 0),
				this._toggleDisableState(),
				this._renderRows(),
				this._setActiveSortIcon(i)
		}
		setActivePage(t) {
			t < this.pages && this._changeActivePage(t)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...qA, ...e, ...t }), L(un, t, ZA), t
		}
		_changeActivePage(t) {
			;(this._activePage = t), this._toggleDisableState(), this._renderRows()
		}
		_clearClassList(t) {
			;['hover', 'bordered', 'borderless', 'sm', 'striped'].forEach(e => {
				this._options[e] && !t[e] && g.removeDataAttribute(`data-te-${e}`)
			})
		}
		_emitSelectEvent() {
			_.trigger(this._element, UC, {
				selectedRows: this.rows.filter(
					t => this._selected.indexOf(t.rowIndex) !== -1
				),
				selectedIndexes: this._selected,
				allSelected: this._selected.length === this.rows.length,
			})
		}
		_getRows(t = []) {
			const e = m.findOne('tbody', this._element)
			return e
				? [
						...m.find('tr', e).map(n => m.find('td', n).map(o => o.innerHTML)),
						...t,
				  ]
				: t
		}
		_getColumns(t = []) {
			const e = m.findOne('thead', this._element)
			if (!e) return t
			const i = m.findOne('tr', e)
			return [
				...m
					.find('th', i)
					.map(o => ({ label: o.innerHTML, ...g.getDataAttributes(o) })),
				...t,
			]
		}
		_getCSSValue(t) {
			return typeof t == 'string' ? t : `${t}px`
		}
		_getOptions(t) {
			const e = { ...UA, ...g.getDataAttributes(this._element), ...t }
			return L(un, e, KA), e
		}
		_setActiveRows() {
			m.find(fn, this._element).forEach(t => {
				this._selected.includes(g.getDataAttribute(t, 'index'))
					? g.addClass(t, `active ${this._classes.selectableRow}`)
					: g.removeClass(t, `active ${this._classes.selectableRow}`)
			})
		}
		_setEntries(t) {
			;(this._options = this._getOptions({
				...this._options,
				entries: t.target.value,
			})),
				this._activePage > this.pages - 1 &&
					(this._activePage = this.pages - 1),
				this._toggleDisableState(),
				this._renderRows()
		}
		_setSelected() {
			m.find(ql, this._element).forEach(t => {
				const e = g.getDataAttribute(t, 'rowIndex')
				t.checked = this._selected.includes(e)
			}),
				this._setActiveRows()
		}
		_setActiveSortIcon(t) {
			m.find(Gl, this._element).forEach(e => {
				const i = this._options.sortOrder === 'desc' && e === t ? 180 : 0
				g.style(e, { transform: `rotate(${i}deg)` }),
					e === t && this._options.sortOrder
						? g.addClass(e, 'opacity-100')
						: g.removeClass(e, 'opacity-100')
			})
		}
		_setup() {
			this._renderTable(),
				this._options.pagination && this._setupPagination(),
				this._options.edit && this._setupEditable(),
				this._options.clickableRows && this._setupClickableRows(),
				this._options.selectable && this._setupSelectable(),
				this._setupScroll(),
				this._setupSort()
		}
		_setupClickableRows() {
			m.find(fn, this._element).forEach(t => {
				const e = g.getDataAttribute(t, 'index')
				g.addClass(t, 'cursor-pointer'),
					_.on(t, 'click', i => {
						m.matches(i.target, ql) ||
							_.trigger(this._element, XC, { index: e, row: this.rows[e] })
					})
			})
		}
		_setupEditable() {
			m.find(fn, this._element).forEach(t => {
				const e = g.getDataAttribute(t, 'index')
				m.find(Xl, t).forEach(i => {
					_.on(i, 'input', n => this._updateRow(n, e))
				})
			})
		}
		_setupScroll() {
			const t = m.findOne(BC, this._element),
				e = {}
			if (
				(this._options.maxHeight &&
					(e.maxHeight = this._getCSSValue(this._options.maxHeight)),
				this._options.maxWidth)
			) {
				const i = this._getCSSValue(this._options.maxWidth)
				;(e.maxWidth = i), g.style(this._element, { maxWidth: i })
			}
			if (
				(g.style(t, e),
				g.addClass(t, `${this._classes.scroll}`),
				this._options.fixedHeader)
			) {
				let i = m.find(HC, this._element)
				this._options.selectable &&
					(i = i.filter(
						(n, o) => (
							g.addClass(
								n,
								`${this._classes.fixedHeader} ${this._classes.color}`
							),
							o !== 0
						)
					)),
					i.forEach((n, o) => {
						g.addClass(
							n,
							`${this._classes.fixedHeader} ${this._classes.color}`
						),
							this.columns[o].fixed && g.addClass(n, '!z-40')
					})
			}
			this._perfectScrollbar = new ms(t)
		}
		_setupSort() {
			m.find(Gl, this._element).forEach(t => {
				const e = g.getDataAttribute(t, 'sort'),
					[i] = m.parents(t, 'th')
				if (this.columns.sort) g.addClass(i, 'cursor-pointer')
				else return
				e === this._options.sortField && this._setActiveSortIcon(t),
					_.on(i, 'click', () => {
						this._options.sortField === e && this._options.sortOrder === 'asc'
							? (this._options.sortOrder = 'desc')
							: this._options.sortField === e &&
							  this._options.sortOrder === 'desc'
							? (this._options.sortOrder = this._options.forceSort
									? 'asc'
									: null)
							: (this._options.sortOrder = 'asc'),
							(this._options.sortField = e),
							(this._activePage = 0),
							this._performSort(),
							this._setActiveSortIcon(t)
					})
			})
		}
		_performSort() {
			this._toggleDisableState(), this._renderRows()
		}
		_setupSelectable() {
			;(this._checkboxes = m.find(ql, this._element)),
				(this._headerCheckbox = m.findOne(VC, this._element)),
				_.on(this._headerCheckbox, 'input', t => this._toggleSelectAll(t)),
				this._checkboxes.forEach(t => {
					const e = g.getDataAttribute(t, 'rowIndex')
					_.on(t, 'input', i => this._toggleSelectRow(i, e))
				})
		}
		_setupPagination() {
			;(this._paginationRight = m.findOne(FC, this._element)),
				(this._paginationLeft = m.findOne(WC, this._element)),
				_.on(this._paginationRight, 'click', () =>
					this._changeActivePage(this._activePage + 1)
				),
				_.on(this._paginationLeft, 'click', () =>
					this._changeActivePage(this._activePage - 1)
				),
				this._options.fullPagination &&
					((this._paginationStart = m.findOne(zC, this._element)),
					(this._paginationEnd = m.findOne(jC, this._element)),
					_.on(this._paginationStart, 'click', () => this._changeActivePage(0)),
					_.on(this._paginationEnd, 'click', () =>
						this._changeActivePage(this.pages - 1)
					)),
				this._toggleDisableState(),
				this._setupPaginationSelect()
		}
		_setupPaginationSelect() {
			;(this._select = m.findOne(KC, this._element)),
				(this._selectInstance = new on(this._select)),
				_.on(this._select, 'valueChange.te.select', t => this._setEntries(t))
		}
		_removeEventListeners() {
			this._options.pagination &&
				(_.off(this._paginationRight, 'click'),
				_.off(this._paginationLeft, 'click'),
				_.off(this._select, 'valueChange.te.select'),
				this._options.fullPagination &&
					(_.off(this._paginationStart, 'click'),
					_.off(this._paginationEnd, 'click'))),
				this._options.edit &&
					m.find(Xl, this._element).forEach(t => {
						_.off(t, 'input')
					}),
				this._options.clickableRows &&
					m.find(fn, this._element).forEach(t => {
						_.off(t, 'click')
					}),
				m.find(Gl, this._element).forEach(t => {
					const [e] = m.parents(t, 'th')
					_.off(e, 'click')
				}),
				this._options.selectable &&
					(_.off(this._headerCheckbox, 'input'),
					this._checkboxes.forEach(t => {
						_.off(t, 'input')
					}))
		}
		_renderTable() {
			;(this._element.innerHTML = Op(this.tableOptions).table),
				this._formatCells(),
				_.trigger(this._element, Dp)
		}
		_renderRows() {
			const t = m.findOne('tbody', this._element)
			if (this._options.pagination) {
				const e = m.findOne(YC, this._element)
				e.innerText = this.navigationText
			}
			;(t.innerHTML = Op(this.tableOptions).rows),
				this._formatCells(),
				this._options.edit && this._setupEditable(),
				this._options.selectable &&
					(this._setupSelectable(), this._setSelected()),
				this._options.clickableRows && this._setupClickableRows(),
				_.trigger(this._element, Dp)
		}
		_formatCells() {
			m.find(fn, this._element).forEach(e => {
				const i = g.getDataAttribute(e, 'index')
				m.find(Xl, e).forEach(o => {
					const r = g.getDataAttribute(o, 'field'),
						a = this.columns.find(l => l.field === r)
					a && a.format !== null && a.format(o, this.rows[i][r])
				})
			})
		}
		_toggleDisableState() {
			this._options.pagination !== !1 &&
				(this._activePage === 0 || this._options.loading
					? (this._paginationLeft.setAttribute('disabled', ''),
					  this._options.fullPagination &&
							this._paginationStart.setAttribute('disabled', ''))
					: (this._paginationLeft.removeAttribute('disabled'),
					  this._options.fullPagination &&
							this._paginationStart.removeAttribute('disabled')),
				this._activePage === this.pages - 1 ||
				this._options.loading ||
				this.pages === 0
					? (this._paginationRight.setAttribute('disabled', ''),
					  this._options.fullPagination &&
							this._paginationEnd.setAttribute('disabled', ''))
					: (this._paginationRight.removeAttribute('disabled'),
					  this._options.fullPagination &&
							this._paginationEnd.removeAttribute('disabled')))
		}
		_toggleSelectAll(t) {
			t.target.checked
				? (this._selected = this.rows.map(e => e.rowIndex))
				: (this._selected = []),
				this._setSelected(),
				this._emitSelectEvent()
		}
		_toggleSelectRow(t, e) {
			t.target.checked
				? this._options.multi && !this._selected.includes(e)
					? (this._selected = [...this._selected, e])
					: ((this._selected = [e]),
					  this._checkboxes.forEach(i => {
							i !== t.target && (i.checked = !1)
					  }))
				: (this._selected = this._selected.filter(i => i !== e)),
				this._options.multi &&
					!t.target.checked &&
					(this._headerCheckbox.checked = !1),
				this._setActiveRows(),
				this._emitSelectEvent()
		}
		_updateRow(t, e) {
			const i = g.getDataAttribute(t.target, 'field'),
				n = t.target.textContent,
				o = this._rows[e]
			if (Array.isArray(o)) {
				const a = this.columns.find(l => l.field === i).columnIndex
				o[a] = n
			} else o[i] = n
			_.trigger(this._element, GC, { rows: this._rows, columns: this._columns })
		}
		static jQueryInterface(t, e, i) {
			return this.each(function () {
				let n = O.getData(this, pn)
				const o = typeof t == 'object' && t
				if (
					!(!n && /dispose/.test(t)) &&
					(n || (n = new pr(this, o, e)), typeof t == 'string')
				) {
					if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
					n[t](e, i)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, pn)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const Mp = 'rating',
		fr = 'te.rating',
		QA = 'data-te-rating-init',
		JA = '[data-te-rating-icon-ref]',
		bs = `.${fr}`,
		tw = 'ArrowLeft',
		ew = 'ArrowRight',
		iw = {
			tooltip: 'string',
			value: '(string|number)',
			readonly: 'boolean',
			after: 'string',
			before: 'string',
			dynamic: 'boolean',
			active: 'string',
		},
		sw = {
			tooltip: 'top',
			value: '',
			readonly: !1,
			after: '',
			before: '',
			dynamic: !1,
			active: 'fill-current',
		},
		Lp = `onSelect${bs}`,
		nw = `onHover${bs}`,
		$p = `keyup${bs}`,
		Rp = `focusout${bs}`,
		Pp = `keydown${bs}`,
		Np = `mousedown${bs}`
	class Bp {
		constructor(t, e) {
			;(this._element = t),
				(this._icons = m.find(JA, this._element)),
				(this._options = this._getConfig(e)),
				(this._index = -1),
				(this._savedIndex = null),
				(this._originalClassList = []),
				(this._originalIcons = []),
				(this._fn = {}),
				(this._tooltips = []),
				this._element && (O.setData(t, fr, this), this._init())
		}
		static get NAME() {
			return Mp
		}
		dispose() {
			O.removeData(this._element, fr),
				this._options.readonly ||
					(_.off(this._element, $p),
					_.off(this._element, Rp),
					_.off(this._element, Pp),
					this._element.removeEventListener('mouseleave', this._fn.mouseleave),
					this._icons.forEach((t, e) => {
						_.off(t, Np),
							t.removeEventListener('mouseenter', this._fn.mouseenter[e]),
							g.removeClass(t, 'cursor-pointer')
					}),
					this._tooltips.forEach(t => {
						t._element.removeAttribute(QA), t.dispose()
					}),
					this._icons.forEach(t => t.removeAttribute('tabIndex'))),
				(this._element = null)
		}
		_init() {
			this._options.readonly ||
				(this._bindMouseEnter(),
				this._bindMouseLeave(),
				this._bindMouseDown(),
				this._bindKeyDown(),
				this._bindKeyUp(),
				this._bindFocusLost(),
				this._icons.forEach(t => {
					g.addClass(t, 'cursor-pointer')
				})),
				this._options.dynamic &&
					(this._saveOriginalClassList(), this._saveOriginalIcons()),
				this._setCustomText(),
				this._setToolTips(),
				this._options.value &&
					((this._index = this._options.value - 1),
					this._updateRating(this._index))
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._element)
			return (t = { ...sw, ...e, ...t }), L(Mp, t, iw), t
		}
		_bindMouseEnter() {
			;(this._fn.mouseenter = []),
				this._icons.forEach((t, e) => {
					t.addEventListener(
						'mouseenter',
						(this._fn.mouseenter[e] = i => {
							;(this._index = this._icons.indexOf(i.target)),
								this._updateRating(this._index),
								this._triggerEvents(t, nw)
						})
					)
				})
		}
		_bindMouseLeave() {
			this._element.addEventListener(
				'mouseleave',
				(this._fn.mouseleave = () => {
					this._savedIndex !== null
						? (this._updateRating(this._savedIndex),
						  (this._index = this._savedIndex))
						: this._options.value
						? (this._updateRating(this._options.value - 1),
						  (this._index = this._options.value - 1))
						: ((this._index = -1), this._clearRating())
				})
			)
		}
		_bindMouseDown() {
			this._icons.forEach(t => {
				_.on(t, Np, () => {
					this._setElementOutline('none'),
						(this._savedIndex = this._index),
						this._triggerEvents(t, Lp)
				})
			})
		}
		_bindKeyDown() {
			;(this._element.tabIndex = 0),
				_.on(this._element, Pp, t => this._updateAfterKeyDown(t))
		}
		_bindKeyUp() {
			_.on(this._element, $p, () => this._setElementOutline('auto'))
		}
		_bindFocusLost() {
			_.on(this._element, Rp, () => this._setElementOutline('none'))
		}
		_setElementOutline(t) {
			this._element.style.outline = t
		}
		_triggerEvents(t, e) {
			_.trigger(t, e, { value: this._index + 1 })
		}
		_updateAfterKeyDown(t) {
			const e = this._icons.length - 1,
				i = this._index
			t.key === ew && this._index < e && (this._index += 1),
				t.key === tw && this._index > -1 && (this._index -= 1),
				i !== this._index &&
					((this._savedIndex = this._index),
					this._updateRating(this._savedIndex),
					this._triggerEvents(this._icons[this._savedIndex], Lp))
		}
		_updateRating(t) {
			this._clearRating(),
				this._options.dynamic && this._restoreOriginalIcon(t),
				this._icons.forEach((e, i) => {
					i <= t && g.addClass(e.querySelector('svg'), this._options.active)
				})
		}
		_clearRating() {
			this._icons.forEach((t, e) => {
				const i = t.querySelector('svg')
				this._options.dynamic &&
					((t.classList = this._originalClassList[e]),
					(i.innerHTML = this._originalIcons[e])),
					g.removeClass(i, this._options.active)
			})
		}
		_setToolTips() {
			this._icons.forEach((t, e) => {
				const i = g.getDataAttribute(t, 'toggle')
				t.title &&
					!i &&
					(g.setDataAttribute(t, 'toggle', 'tooltip'),
					(this._tooltips[e] = new is(t, { placement: this._options.tooltip })))
			})
		}
		_setCustomText() {
			this._icons.forEach(t => {
				const e = g.getDataAttribute(t, 'after'),
					i = g.getDataAttribute(t, 'before')
				e && t.insertAdjacentHTML('afterEnd', e),
					i && t.insertAdjacentHTML('beforeBegin', i)
			})
		}
		_saveOriginalClassList() {
			this._icons.forEach(t => {
				const e = t.classList.value
				this._originalClassList.push(e)
			})
		}
		_saveOriginalIcons() {
			this._icons.forEach(t => {
				const e = t.querySelector('svg').innerHTML
				this._originalIcons.push(e)
			})
		}
		_restoreOriginalIcon(t) {
			const e = this._originalClassList[t],
				i = this._originalIcons[t]
			this._icons.forEach((n, o) => {
				if (o <= t) {
					const r = n.querySelector('svg')
					;(r.innerHTML = i), (n.classList = e)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, fr)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const Zl = 'popconfirm',
		_n = 'te.popconfirm',
		Hp = `.${_n}`,
		ow = `cancel${Hp}`,
		rw = `confirm${Hp}`,
		aw = '[data-te-popconfirm-body]',
		Ql = 'data-te-popconfirm-popover',
		lw = 'data-te-popconfirm-modal',
		Vp = 'data-te-popconfirm-backdrop',
		cw = {
			popconfirmMode: 'string',
			message: 'string',
			cancelText: '(null|string)',
			okText: '(null|string)',
			popconfirmIconTemplate: 'string',
			cancelLabel: '(null|string)',
			confirmLabel: '(null|string)',
			position: '(null|string)',
		},
		hw = {
			popconfirmMode: 'inline',
			message: 'Are you sure?',
			cancelText: 'Cancel',
			okText: 'OK',
			popconfirmIconTemplate: '',
			cancelLabel: 'Cancel',
			confirmLabel: 'Confirm',
			position: 'bottom',
		},
		dw = {
			backdrop: 'string',
			body: 'string',
			btnCancel: 'string',
			btnConfirm: 'string',
			btnsContainer: 'string',
			fade: 'string',
			icon: 'string',
			message: 'string',
			messageText: 'string',
			modal: 'string',
			popover: 'string',
		},
		uw = {
			backdrop:
				'h-full w-full z-[1070] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center',
			body: 'p-[1rem] bg-white rounded-[0.5rem] opacity-0 dark:bg-neutral-700',
			btnCancel:
				'inline-block rounded bg-primary-100 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200',
			btnConfirm:
				'inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]',
			btnsContainer: 'flex justify-end space-x-2',
			fade: 'transition-opacity duration-[150ms] ease-linear',
			icon: 'pr-2',
			message: 'flex mb-3',
			messageText: 'text-neutral-600 dark:text-white',
			modal: 'absolute w-[300px] z-[1080] shadow-sm rounded-[0.5rem]',
			popover: 'w-[300px] border-0 rounded-[0.5rem] z-[1080] shadow-sm',
		}
	class _r {
		constructor(t, e, i) {
			;(this._element = t),
				(this._options = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._popper = null),
				(this._cancelButton = ''),
				(this._confirmButton = ''),
				(this._isOpen = !1),
				(this._uid = this._element.id
					? `popconfirm-${this._element.id}`
					: bt('popconfirm-')),
				t && O.setData(t, _n, this),
				(this._clickHandler = this.open.bind(this)),
				_.on(this._element, 'click', this._clickHandler)
		}
		static get NAME() {
			return Zl
		}
		get container() {
			return m.findOne(`#${this._uid}`)
		}
		get popconfirmBody() {
			return m.findOne(aw, this.container)
		}
		dispose() {
			;(this._isOpen || this.container !== null) && this.close(),
				O.removeData(this._element, _n),
				_.off(this._element, 'click', this._clickHandler),
				(this._element = null)
		}
		open() {
			this._isOpen ||
				(this._options.popconfirmMode === 'inline'
					? this._openPopover(this._getPopoverTemplate())
					: this._openModal(this._getModalTemplate()),
				this._handleCancelButtonClick(),
				this._handleConfirmButtonClick(),
				this._listenToEscapeKey(),
				this._listenToOutsideClick())
		}
		close() {
			if (this._isOpen) {
				if (this._popper !== null || m.findOne(`[${Ql}]`) !== null)
					_.on(
						this.popconfirmBody,
						'transitionend',
						this._handlePopconfirmTransitionEnd.bind(this)
					),
						g.removeClass(this.popconfirmBody, 'opacity-100')
				else {
					const t = m.findOne(`[${Vp}]`)
					g.removeClass(this.popconfirmBody, 'opacity-100'),
						document.body.removeChild(t),
						(this._isOpen = !1)
				}
				_.off(document, 'click', this._handleOutsideClick.bind(this)),
					_.off(document, 'keydown', this._handleEscapeKey.bind(this))
			}
		}
		_handlePopconfirmTransitionEnd(t) {
			if (t.target !== this.popconfirmBody) return
			const e = m.findOne(`[${Ql}]`)
			_.off(this.popconfirmBody, 'transitionend'),
				this._isOpen &&
					t &&
					t.propertyName === 'opacity' &&
					(this._popper.destroy(),
					e && document.body.removeChild(e),
					(this._isOpen = !1))
		}
		_getPopoverTemplate() {
			const t = $('div'),
				e = this._getPopconfirmTemplate()
			return (
				t.setAttribute(Ql, ''),
				g.addClass(t, this._classes.popover),
				(t.id = this._uid),
				(t.innerHTML = e),
				t
			)
		}
		_getModalTemplate() {
			const t = $('div'),
				e = this._getPopconfirmTemplate()
			return (
				t.setAttribute(lw, ''),
				g.addClass(t, `${this._classes.modal}`),
				(t.id = this._uid),
				(t.innerHTML = e),
				t
			)
		}
		_getPopconfirmTemplate() {
			return `<div data-te-popconfirm-body class="${this._classes.body}">
      <p class="${this._classes.message}">
      ${
				this._options.popconfirmIconTemplate
					? `<span class="${this._classes.icon}">${this._options.popconfirmIconTemplate}</span>`
					: ''
			}
      <span class="${this._classes.messageText}">${this._options.message}</span>
      </p>
      <div class="${this._classes.btnsContainer}">
      ${
				this._options.cancelText
					? `<button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-cancel" aria-label="${this._options.cancelLabel}"
        class="${this._classes.btnCancel}">${this._options.cancelText}</button>`
					: ''
			}
      <button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-confirm"
      aria-label="${this._options.confirmLabel}"
      class="${
				this._classes.btnConfirm
			}">${this._options.okText ? this._options.okText : 'Ok'}</button>
      </div>
    </div>`
		}
		_getConfig(t) {
			return (
				(t = { ...hw, ...g.getDataAttributes(this._element), ...t }),
				L(Zl, t, cw),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...uw, ...e, ...t }), L(Zl, t, dw), t
		}
		_openPopover(t) {
			;(this._popper = Fe(this._element, t, {
				placement: this._translatePositionValue(),
				modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
			})),
				document.body.appendChild(t),
				setTimeout(() => {
					g.addClass(this.popconfirmBody, `${this._classes.fade} opacity-100`),
						(this._isOpen = !0)
				}, 0)
		}
		_openModal(t) {
			const e = $('div')
			e.setAttribute(Vp, ''),
				g.addClass(e, this._classes.backdrop),
				document.body.appendChild(e),
				e.appendChild(t),
				g.addClass(this.popconfirmBody, 'opacity-100'),
				(this._isOpen = !0)
		}
		_handleCancelButtonClick() {
			const t = this.container
			;(this._cancelButton = m.findOne('#popconfirm-button-cancel', t)),
				Ye.getOrCreateInstance(this._cancelButton, { rippleColor: 'light' }),
				this._cancelButton !== null &&
					_.on(this._cancelButton, 'click', () => {
						this.close(), _.trigger(this._element, ow)
					})
		}
		_handleConfirmButtonClick() {
			const t = this.container
			;(this._confirmButton = m.findOne('#popconfirm-button-confirm', t)),
				Ye.getOrCreateInstance(this._confirmButton, { rippleColor: 'light' }),
				_.on(this._confirmButton, 'click', () => {
					this.close(), _.trigger(this._element, rw)
				})
		}
		_listenToEscapeKey() {
			_.on(document, 'keydown', this._handleEscapeKey.bind(this))
		}
		_handleEscapeKey(t) {
			t.keyCode === xi && this.close()
		}
		_listenToOutsideClick() {
			_.on(document, 'click', this._handleOutsideClick.bind(this))
		}
		_handleOutsideClick(t) {
			const e = this.container,
				i = t.target === e,
				n = e && e.contains(t.target),
				o = t.target === this._element,
				r = this._element && this._element.contains(t.target)
			!i && !n && !o && !r && this.close()
		}
		_translatePositionValue() {
			switch (this._options.position) {
				case 'top left':
					return 'top-end'
				case 'top':
					return 'top'
				case 'top right':
					return 'top-start'
				case 'bottom left':
					return 'bottom-end'
				case 'bottom':
					return 'bottom'
				case 'bottom right':
					return 'bottom-start'
				case 'left':
					return 'left'
				case 'left top':
					return 'left-end'
				case 'left bottom':
					return 'left-start'
				case 'right':
					return 'right'
				case 'right top':
					return 'right-end'
				case 'right bottom':
					return 'right-start'
				case void 0:
					return 'bottom'
				default:
					return 'bottom'
			}
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				const i = O.getData(this, _n),
					n = typeof t == 'object' && t
				if (!(!i && /dispose/.test(t))) {
					if (!i) return new _r(this, n)
					if (typeof t == 'string') {
						if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
						i[t](e)
					}
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, _n)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const Jl = 'lightbox',
		gn = 'te.lightbox',
		vs = `click${`.${gn}`}.data-api`,
		Fp = '[data-te-lightbox-init]',
		pw = `${Fp} img:not([data-te-lightbox-disabled])`,
		Wp = 'data-te-lightbox-caption',
		fw = 'data-te-lightbox-disabled',
		ye = 'data-te-lightbox-active',
		_w = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
`,
		gw = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
`,
		mw = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
`,
		bw = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
</svg>
`,
		vw = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
</svg>
`,
		yw = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
</svg>
`,
		Tw = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`,
		Ew = {
			container: 'string',
			zoomLevel: '(number|string)',
			prevIconTemplate: 'string',
			nextIconTemplate: 'string',
			showFullscreenIconTemplate: 'string',
			hideFullscreenIconTemplate: 'string',
			zoomInIconTemplate: 'string',
			closeIconTemplate: 'string',
			zoomOutIconTemplate: 'string',
			spinnerContent: 'string',
		},
		xw = {
			container: 'body',
			zoomLevel: 1,
			prevIconTemplate: _w,
			nextIconTemplate: gw,
			showFullscreenIconTemplate: mw,
			hideFullscreenIconTemplate: bw,
			zoomInIconTemplate: vw,
			zoomOutIconTemplate: yw,
			closeIconTemplate: Tw,
			spinnerContent: 'Loading...',
		},
		Cw = {
			caption:
				'text-white text-ellipsis overflow-hidden whitespace-nowrap mx-[10px] text-center',
			captionWrapper:
				'fixed left-0 bottom-0 w-full h-[50px] flex justify-center items-center',
			closeBtn:
				'border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none',
			fullscreenBtn:
				'border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none',
			gallery:
				'invisible fixed left-0 top-0 w-full h-full z-[1100] pointer-events-none opacity-0 bg-[#000000e6] transition-all duration-[400ms] motion-reduce:transition-none',
			galleryContent:
				'fixed top-[50px] left-[50px] w-[calc(100%-100px)] h-[calc(100%-100px)]',
			galleryCounter:
				'flex justify-center items-center px-[10px] mb-0 h-full text-[#b3b3b3]',
			img: 'absolute left-0 top-0 w-full max-h-full h-auto cursor-pointer pointer-events-auto',
			imgWrapper:
				'absolute top-0 left-0 w-full h-full opacity-0 transform scale-[0.25] transition-all duration-[400ms] ease-out pointer-events-none motion-reduce:transition-none motion-reduce:transform-none',
			leftTools: 'float-left h-full',
			loader:
				'fixed left-0 top-0 z-[2] w-full h-full text-neutral-50 opacity-1 flex justify-center items-center pointer-events-none transition-opacity duration-[1000ms] motion-reduce:transition-none',
			nextBtn:
				'border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none',
			nextBtnWrapper:
				'fixed right-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none',
			prevBtn:
				'border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none',
			prevBtnWrapper:
				'fixed left-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none',
			rightTools: 'float-right',
			spinner:
				'inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]',
			spinnerContent:
				'!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]',
			toolbar:
				'absolute top-0 left-0 w-full h-[50px] z-20 transition-opacity duration-[400ms] motion-reduce:transition-none',
			vertical: 'h-full max-h-full w-auto',
			zoomBtn:
				'border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none',
		},
		Aw = {
			caption: 'string',
			captionWrapper: 'string',
			closeBtn: 'string',
			fullscreenBtn: 'string',
			gallery: 'string',
			galleryContent: 'string',
			galleryCounter: 'string',
			img: 'string',
			imgWrapper: 'string',
			leftTools: 'string',
			loader: 'string',
			nextBtn: 'string',
			nextBtnWrapper: 'string',
			prevBtn: 'string',
			prevBtnWrapper: 'string',
			rightTools: 'string',
			spinner: 'string',
			spinnerContent: 'string',
			toolbar: 'string',
			vertical: 'string',
			zoomBtn: 'string',
		}
	class ys {
		constructor(t, e = {}, i) {
			;(this._element = t),
				(this._options = e),
				(this._classes = this._getClasses(i)),
				this._getContainer(),
				(this._id = `lightbox-${Math.random().toString(36).substr(2, 9)}`),
				(this._activeImg = 0),
				(this._images = []),
				(this._zoom = 1),
				(this._gallery = null),
				(this._galleryToolbar = null),
				(this._galleryContent = null),
				(this._loader = null),
				(this._imgCounter = null),
				(this._animating = !1),
				(this._fullscreen = !1),
				(this._zoomBtn = null),
				(this._fullscreenBtn = null),
				(this._toolsToggleTimer = 0),
				(this._mousedown = !1),
				(this._mousedownPositionX = 0),
				(this._mousedownPositionY = 0),
				(this._originalPositionX = 0),
				(this._originalPositionY = 0),
				(this._positionX = 0),
				(this._positionY = 0),
				(this._zoomTimer = 0),
				(this._tapCounter = 0),
				(this._tapTime = 0),
				(this._rightArrow = null),
				(this._leftArrowWrapper = null),
				(this._rightArrowWrapper = null),
				(this._initiated = !1),
				(this._multitouch = !1),
				(this._touchZoomPosition = []),
				this._element && (O.setData(t, gn, this), this.init())
		}
		static get NAME() {
			return Jl
		}
		get activeImg() {
			return this._activeImg
		}
		get currentImg() {
			return m.findOne(`[${ye}]`, this._galleryContent)
		}
		get options() {
			const t = {
				...xw,
				...g.getDataAttributes(this._element),
				...this._options,
			}
			return L(Jl, t, Ew), t
		}
		init() {
			this._initiated || (this._appendTemplate(), (this._initiated = !0))
		}
		open(t = 0) {
			this._getImages(),
				this._setActiveImg(t),
				this._sortImages(),
				this._triggerEvents('open', 'opened'),
				this._loadImages().then(e => {
					this._resizeImages(e),
						this._toggleTemplate(),
						this._addEvents(),
						this._focusFullscreenBtn()
				})
		}
		close() {
			this.reset(),
				this._removeEvents(),
				this._toggleTemplate(),
				this._triggerEvents('close', 'closed')
		}
		slide(t = 'right') {
			this._animating === !0 ||
				this._images.length <= 1 ||
				(this._triggerEvents('slide', 'slided'),
				this._beforeSlideEvents(),
				t === 'right' && this._slideHorizontally(t),
				t === 'left' && this._slideHorizontally(t),
				t === 'first' && this._slideToTarget(t),
				t === 'last' && this._slideToTarget(t),
				this._afterSlideEvents())
		}
		zoomIn() {
			this._zoom >= 3 ||
				(this._triggerEvents('zoomIn', 'zoomedIn'),
				(this._zoom += parseFloat(this.options.zoomLevel)),
				g.style(this.currentImg.parentNode, {
					transform: `scale(${this._zoom})`,
				}),
				this._updateZoomBtn())
		}
		zoomOut() {
			this._zoom <= 1 ||
				(this._triggerEvents('zoomOut', 'zoomedOut'),
				(this._zoom -= parseFloat(this.options.zoomLevel)),
				g.style(this.currentImg.parentNode, {
					transform: `scale(${this._zoom})`,
				}),
				this._updateZoomBtn(),
				this._updateImgPosition())
		}
		toggleFullscreen() {
			this._fullscreen === !1
				? (this._fullscreenBtn.setAttribute(ye, ''),
				  (this._fullscreenBtn.innerHTML =
						this.options.hideFullscreenIconTemplate),
				  this._gallery.requestFullscreen && this._gallery.requestFullscreen(),
				  (this._fullscreen = !0))
				: (this._fullscreenBtn.removeAttribute(ye),
				  document.exitFullscreen && document.exitFullscreen(),
				  (this._fullscreen = !1))
		}
		reset() {
			this._restoreDefaultFullscreen(),
				this._restoreDefaultPosition(),
				this._restoreDefaultZoom(),
				clearTimeout(this._toolsToggleTimer),
				clearTimeout(this._doubleTapTimer)
		}
		dispose() {
			_.off(document, vs, pw, this.toggle),
				this._galleryContent && this._removeEvents(),
				this._gallery && this._gallery.remove(),
				O.removeData(this._element, gn),
				(this._element = null)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...Cw, ...e, ...t }), L(Jl, t, Aw), t
		}
		_getImages() {
			const e = m.find('img', this._element).filter(i => !i.hasAttribute(fw))
			this._images = e
		}
		_getContainer() {
			this._container = m.findOne(this.options.container)
		}
		_setActiveImg(t) {
			this._activeImg =
				typeof t == 'number' ? t : this._images.indexOf(t.target)
		}
		_appendTemplate() {
			;(this._gallery = $('div')),
				g.addClass(this._gallery, `${this._classes.gallery}`),
				(this._element.dataset.id = this._id),
				(this._gallery.id = this._id),
				this._appendLoader(),
				this._appendToolbar(),
				this._appendContent(),
				this._appendArrows(),
				this._appendCaption(),
				this._container.append(this._gallery)
		}
		_appendToolbar() {
			;(this._galleryToolbar = $('div')),
				(this._imgCounter = $('p')),
				(this._fullscreenBtn = $('button')),
				(this._zoomBtn = $('button'))
			const t = $('button'),
				e = $('div'),
				i = $('div')
			g.addClass(this._galleryToolbar, `${this._classes.toolbar}`),
				g.addClass(this._imgCounter, `${this._classes.galleryCounter}`),
				g.addClass(this._fullscreenBtn, `${this._classes.fullscreenBtn}`),
				g.addClass(this._zoomBtn, `${this._classes.zoomInBtn}`),
				g.addClass(this._zoomBtn, this._classes.zoomBtn),
				g.addClass(e, `${this._classes.leftTools}`),
				g.addClass(i, `${this._classes.rightTools}`),
				g.addClass(t, `${this._classes.closeBtn}`),
				(this._fullscreenBtn.innerHTML =
					this.options.showFullscreenIconTemplate),
				(t.innerHTML = this.options.closeIconTemplate),
				(this._zoomBtn.innerHTML = this.options.zoomInIconTemplate),
				this._fullscreenBtn.setAttribute('aria-label', 'Toggle fullscreen'),
				this._zoomBtn.setAttribute('aria-label', 'Zoom in'),
				t.setAttribute('aria-label', 'Close'),
				_.on(this._fullscreenBtn, vs, () => this.toggleFullscreen()),
				_.on(this._zoomBtn, vs, () => this._toggleZoom()),
				_.on(t, vs, () => this.close()),
				e.append(this._imgCounter),
				i.append(this._fullscreenBtn),
				i.append(this._zoomBtn),
				i.append(t),
				this._galleryToolbar.append(e),
				this._galleryToolbar.append(i),
				this._gallery.append(this._galleryToolbar)
		}
		_appendContent() {
			;(this._galleryContent = $('div')),
				g.addClass(this._galleryContent, `${this._classes.galleryContent}`),
				this._gallery.append(this._galleryContent)
		}
		_appendLoader() {
			this._loader = $('div')
			const t = $('div'),
				e = $('span')
			g.addClass(this._loader, `${this._classes.loader}`),
				g.addClass(t, `${this._classes.spinner}`),
				g.addClass(e, `${this._classes.spinnerContent}`),
				t.setAttribute('role', 'status'),
				(e.innerHTML = this.options.spinnerContent),
				t.append(e),
				this._loader.append(t),
				this._gallery.append(this._loader)
		}
		_appendArrows() {
			;(this._leftArrowWrapper = $('div')),
				g.addClass(this._leftArrowWrapper, `${this._classes.prevBtnWrapper}`)
			const t = $('button')
			t.setAttribute('aria-label', 'Previous'),
				g.addClass(t, `${this._classes.prevBtn}`),
				_.on(t, vs, () => this.slide('left')),
				this._leftArrowWrapper.append(t),
				(this._rightArrowWrapper = $('div')),
				g.addClass(this._rightArrowWrapper, `${this._classes.nextBtnWrapper}`),
				(this._rightArrow = $('button')),
				this._rightArrow.setAttribute('aria-label', 'Next'),
				g.addClass(this._rightArrow, `${this._classes.nextBtn}`),
				_.on(this._rightArrow, vs, () => this.slide()),
				this._rightArrowWrapper.append(this._rightArrow),
				(this._rightArrow.innerHTML = this.options.nextIconTemplate),
				(t.innerHTML = this.options.prevIconTemplate),
				this._getImages(),
				!(this._images.length <= 1) &&
					(this._gallery.append(this._leftArrowWrapper),
					this._gallery.append(this._rightArrowWrapper))
		}
		_appendCaption() {
			const t = $('div'),
				e = $('p')
			e.setAttribute(Wp, ''),
				g.addClass(t, `${this._classes.captionWrapper}`),
				g.addClass(e, `${this._classes.caption}`),
				t.append(e),
				this._gallery.append(t)
		}
		_sortImages() {
			for (let t = 0; t < this._activeImg; t++)
				this._images.push(this._images.shift())
		}
		async _loadImages() {
			const t = [],
				e = []
			this._galleryContent.innerHTML = ''
			let i = 0
			return (
				this._images.forEach((n, o) => {
					t.push(
						new Promise(r => {
							const a = new Image(),
								l = $('div')
							g.addClass(l, `${this._classes.imgWrapper}`),
								g.addClass(a, `${this._classes.img}`),
								this._addImgStyles(a, l, i, o, n),
								l.append(a),
								this._galleryContent.append(l),
								(a.onload = r),
								(a.src = n.dataset.teImg || n.src),
								e.push(a),
								(i += 100)
						})
					)
				}),
				await Promise.all(t),
				e
			)
		}
		_addImgStyles(t, e, i, n, o) {
			;(t.alt = o.alt),
				(t.draggable = !1),
				g.style(e, { position: 'absolute', left: `${i}%`, top: 0 }),
				(o.dataset.teCaption || o.dataset.teCaption === '') &&
					(t.dataset.caption = o.dataset.teCaption),
				i === 0
					? (o.width < o.height && g.addClass(t, `${this._classes.vertical}`),
					  g.style(e, { opacity: 1 }),
					  t.setAttribute(ye, ''))
					: t.removeAttribute(ye),
				n === this._images.length - 1 &&
					this._images.length > 1 &&
					g.style(e, { left: '-100%' })
		}
		_resizeImages(t) {
			t.forEach(e => {
				this._calculateImgSize(e)
			})
		}
		_calculateImgSize(t) {
			t.width >= t.height
				? ((t.style.width = '100%'),
				  (t.style.maxWidth = '100%'),
				  (t.style.height = 'auto'),
				  (t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`),
				  (t.style.left = 0))
				: ((t.style.height = '100%'),
				  (t.style.maxHeight = '100%'),
				  (t.style.width = 'auto'),
				  (t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`),
				  (t.style.top = 0)),
				t.width >= t.parentNode.offsetWidth &&
					((t.style.width = `${t.parentNode.offsetWidth}px`),
					(t.style.height = 'auto'),
					(t.style.left = 0),
					(t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`)),
				t.height >= t.parentNode.offsetHeight &&
					((t.style.height = `${t.parentNode.offsetHeight}px`),
					(t.style.width = 'auto'),
					(t.style.top = 0),
					(t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`)),
				(this._positionX = parseFloat(t.style.left) || 0),
				(this._positionY = parseFloat(t.style.top) || 0)
		}
		_onResize() {
			;(this._images = m.find('img', this._galleryContent)),
				this._images.forEach(t => {
					this._calculateImgSize(t)
				})
		}
		_onFullscreenChange() {
			;(document.webkitIsFullScreen ||
				document.mozFullScreen ||
				document.msFullscreenElement) === void 0 &&
				((this._fullscreen = !1),
				(this._fullscreenBtn.innerHTML =
					this.options.showFullscreenIconTemplate),
				this._fullscreenBtn.removeAttribute(ye))
		}
		_beforeSlideEvents() {
			this._animationStart(),
				this._restoreDefaultZoom(),
				this._restoreDefaultPosition(),
				this._resetDoubleTap()
		}
		_slideHorizontally(t) {
			;(this._images = m.find('img', this._galleryContent)),
				this._images.forEach(e => {
					let i
					t === 'right'
						? ((i = parseInt(e.parentNode.style.left, 10) - 100),
						  i < -100 && (i = (this._images.length - 2) * 100))
						: ((i = parseInt(e.parentNode.style.left, 10) + 100),
						  i === (this._images.length - 1) * 100 && (i = -100)),
						this._slideImg(e, i)
				}),
				this._updateActiveImg(t)
		}
		_slideImg(t, e) {
			e === 0
				? (t.setAttribute(ye, ''),
				  g.style(t.parentNode, { opacity: 1, transform: 'scale(1)' }))
				: (t.removeAttribute(ye),
				  g.style(t.parentNode, { opacity: 0, transform: 'scale(0.25)' })),
				(t.parentNode.style.left = `${e}%`)
		}
		_slideToTarget(t) {
			;(t === 'first' && this._activeImg === 0) ||
				(t === 'last' && this._activeImg === this._images.length - 1) ||
				(this.reset(),
				this._removeEvents(),
				this._showLoader(),
				this._getImages(),
				(this._activeImg = t === 'first' ? 0 : this._images.length - 1),
				this._sortImages(),
				g.style(this.currentImg.parentNode, {
					transform: 'scale(0.25)',
					opacity: 0,
				}),
				setTimeout(() => {
					this._loadImages().then(e => {
						this._resizeImages(e),
							this._addEvents(),
							this._updateCaption(),
							this._hideLoader(),
							setTimeout(() => {
								g.style(this.currentImg.parentNode, {
									transform: 'scale(1)',
									opacity: 1,
								})
							}, 10)
					})
				}, 400))
		}
		_updateActiveImg(t) {
			t === 'right' &&
				(this._activeImg === this._images.length - 1
					? (this._activeImg = 0)
					: this._activeImg++),
				t === 'left' &&
					(this._activeImg === 0
						? (this._activeImg = this._images.length - 1)
						: this._activeImg--)
		}
		_afterSlideEvents() {
			this._updateCounter(), this._updateCaption()
		}
		_updateCounter() {
			this._images.length <= 1 ||
				setTimeout(() => {
					this._imgCounter.innerHTML = `${this._activeImg + 1} / ${
						this._images.length
					}`
				}, 200)
		}
		_updateCaption() {
			setTimeout(() => {
				let t = this.currentImg.alt
				;(this.currentImg.dataset.caption ||
					this.currentImg.dataset.caption === '') &&
					(t = this.currentImg.dataset.caption),
					(m.findOne(`[${Wp}]`, this._gallery).innerHTML = t)
			}, 200)
		}
		_toggleTemplate() {
			this._gallery.style.visibility === 'visible'
				? (g.style(this.currentImg.parentNode, { transform: 'scale(0.25)' }),
				  setTimeout(() => {
						this._hideGallery(), this._enableScroll(), this._showLoader()
				  }, 100))
				: (this._showGallery(),
				  this._disableScroll(),
				  this._updateCounter(),
				  this._updateCaption(),
				  this._setToolsToggleTimout(),
				  this._hideLoader())
		}
		_showLoader() {
			g.style(this._loader, { opacity: 1 })
		}
		_hideLoader() {
			g.style(this._loader, { opacity: 0 })
		}
		_hideGallery() {
			g.style(this._gallery, {
				opacity: 0,
				pointerEvents: 'none',
				visibility: 'hidden',
			})
		}
		_showGallery() {
			g.style(this._gallery, {
				opacity: 1,
				pointerEvents: 'initial',
				visibility: 'visible',
			}),
				setTimeout(() => {
					g.style(this.currentImg.parentNode, { transform: 'scale(1)' })
				}, 50)
		}
		_toggleZoom() {
			this._zoom !== 1 ? this.zoomOut() : this.zoomIn()
		}
		_updateZoomBtn() {
			this._zoom > 1
				? (this._zoomBtn.setAttribute(ye, ''),
				  this._zoomBtn.setAttribute('aria-label', 'Zoom out'),
				  (this._zoomBtn.innerHTML = this.options.zoomOutIconTemplate))
				: (this._zoomBtn.removeAttribute(ye),
				  this._zoomBtn.setAttribute('aria-label', 'Zoom in'),
				  (this._zoomBtn.innerHTML = this.options.zoomInIconTemplate))
		}
		_updateImgPosition() {
			this._zoom === 1 && this._restoreDefaultPosition()
		}
		_addEvents() {
			const t = m.find('img', this._galleryContent)
			;(this._onWindowTouchmove = this._onWindowTouchmove.bind(this)),
				(this._onWindowTouchstart = this._onWindowTouchstart.bind(this)),
				(this._onImgMousedown = this._onMousedown.bind(this)),
				(this._onImgMousemove = this._onMousemove.bind(this)),
				(this._onImgWheel = this._onZoom.bind(this)),
				(this._onImgMouseup = this._onMouseup.bind(this)),
				(this._onImgTouchend = this._onTouchend.bind(this)),
				(this._onImgDoubleClick = this._onDoubleClick.bind(this)),
				(this._onWindowResize = this._onResize.bind(this)),
				(this._onWindowFullscreenChange = this._onFullscreenChange.bind(this)),
				(this._onAnyImgAction = this._resetToolsToggler.bind(this)),
				(this._onGalleryClick = this._onBackdropClick.bind(this)),
				(this._onKeyupEvent = this._onKeyup.bind(this)),
				(this._onRightArrowKeydownEvent = this._onRightArrowKeydown.bind(this)),
				(this._onFullscreenBtnKeydownEvent =
					this._onFullscreenBtnKeydown.bind(this)),
				t.forEach(e => {
					_.on(e, 'mousedown', this._onImgMousedown, { passive: !0 }),
						_.on(e, 'touchstart', this._onImgMousedown, { passive: !0 }),
						_.on(e, 'mousemove', this._onImgMousemove, { passive: !0 }),
						_.on(e, 'touchmove', this._onImgMousemove, { passive: !0 }),
						_.on(e, 'wheel', this._onImgWheel, { passive: !0 }),
						_.on(e, 'dblclick', this._onImgDoubleClick, { passive: !0 })
				}),
				document.addEventListener('touchmove', this._onWindowTouchmove, {
					passive: !1,
				}),
				_.on(window, 'touchstart', this._onWindowTouchstart),
				_.on(window, 'mouseup', this._onImgMouseup),
				_.on(window, 'touchend', this._onImgTouchend),
				_.on(window, 'resize', this._onWindowResize),
				_.on(window, 'orientationchange', this._onWindowResize),
				_.on(window, 'keyup', this._onKeyupEvent),
				_.on(window, 'fullscreenchange', this._onWindowFullscreenChange),
				_.on(this._gallery, 'mousemove', this._onAnyImgAction),
				_.on(this._gallery, 'click', this._onGalleryClick),
				_.on(this._rightArrow, 'keydown', this._onRightArrowKeydownEvent),
				_.on(this._fullscreenBtn, 'keydown', this._onFullscreenBtnKeydownEvent)
		}
		_removeEvents() {
			m.find('img', this._galleryContent).forEach(e => {
				_.off(e, 'mousedown', this._onImgMousedown),
					_.off(e, 'touchstart', this._onImgMousedown),
					_.off(e, 'mousemove', this._onImgMousemove),
					_.off(e, 'touchmove', this._onImgMousemove),
					_.off(e, 'wheel', this._onImgWheel),
					_.off(e, 'dblclick', this._onImgDoubleClick)
			}),
				document.removeEventListener('touchmove', this._onWindowTouchmove, {
					passive: !1,
				}),
				_.off(window, 'touchstart', this._onWindowTouchstart),
				_.off(window, 'mouseup', this._onImgMouseup),
				_.off(window, 'touchend', this._onImgTouchend),
				_.off(window, 'resize', this._onWindowResize),
				_.off(window, 'orientationchange', this._onWindowResize),
				_.off(window, 'keyup', this._onKeyupEvent),
				_.off(window, 'fullscreenchange', this._onWindowFullscreenChange),
				_.off(this._gallery, 'mousemove', this._onAnyImgAction),
				_.off(this._gallery, 'click', this._onGalleryClick),
				_.off(this._rightArrow, 'keydown', this._onRightArrowKeydownEvent),
				_.off(this._fullscreenBtn, 'keydown', this._onFullscreenBtnKeydownEvent)
		}
		_onMousedown(t) {
			const e = t.touches,
				i = e ? e[0].clientX : t.clientX,
				n = e ? e[0].clientY : t.clientY
			;(this._originalPositionX = parseFloat(this.currentImg.style.left) || 0),
				(this._originalPositionY = parseFloat(this.currentImg.style.top) || 0),
				(this._positionX = this._originalPositionX),
				(this._positionY = this._originalPositionY),
				(this._mousedownPositionX = i * (1 / this._zoom) - this._positionX),
				(this._mousedownPositionY = n * (1 / this._zoom) - this._positionY),
				(this._mousedown = !0),
				t.type === 'touchstart' &&
					t.touches.length > 1 &&
					((this._multitouch = !0), (this._touchZoomPosition = t.touches))
		}
		_onMousemove(t) {
			if (!this._mousedown) return
			const e = t.touches,
				i = e ? e[0].clientX : t.clientX,
				n = e ? e[0].clientY : t.clientY
			if ((e && this._resetToolsToggler(), !this._multitouch))
				if (this._zoom !== 1)
					(this._positionX = i * (1 / this._zoom) - this._mousedownPositionX),
						(this._positionY = n * (1 / this._zoom) - this._mousedownPositionY),
						g.style(this.currentImg, {
							left: `${this._positionX}px`,
							top: `${this._positionY}px`,
						})
				else {
					if (this._images.length <= 1) return
					;(this._positionX = i * (1 / this._zoom) - this._mousedownPositionX),
						g.style(this.currentImg, { left: `${this._positionX}px` })
				}
		}
		_onMouseup(t) {
			;(this._mousedown = !1), this._moveImg(t.target)
		}
		_onTouchend(t) {
			;(this._mousedown = !1),
				this._multitouch
					? t.targetTouches.length === 0 &&
					  ((this._multitouch = !1), (this._touchZoomPosition = []))
					: this._multitouch ||
					  (this._checkDoubleTap(t), this._moveImg(t.target))
		}
		_calculateTouchZoom(t) {
			const e = Math.hypot(
					this._touchZoomPosition[1].pageX - this._touchZoomPosition[0].pageX,
					this._touchZoomPosition[1].pageY - this._touchZoomPosition[0].pageY
				),
				i = Math.hypot(
					t.touches[1].pageX - t.touches[0].pageX,
					t.touches[1].pageY - t.touches[0].pageY
				),
				n = Math.abs(e - i),
				o = t.view.screen.width
			n > o * 0.03 &&
				(e <= i ? this.zoomIn() : this.zoomOut(),
				(this._touchZoomPosition = t.touches))
		}
		_onWindowTouchstart(t) {
			t.touches.length > 1 &&
				((this._multitouch = !0), (this._touchZoomPosition = t.touches))
		}
		_onWindowTouchmove(t) {
			t.preventDefault(),
				t.type === 'touchmove' &&
					t.targetTouches.length > 1 &&
					this._calculateTouchZoom(t)
		}
		_onRightArrowKeydown(t) {
			switch (t.keyCode) {
				case 9:
					if (t.shiftKey) break
					t.preventDefault(), this._focusFullscreenBtn()
					break
			}
		}
		_onFullscreenBtnKeydown(t) {
			switch (t.keyCode) {
				case 9:
					if (!t.shiftKey) break
					t.preventDefault(), this._focusRightArrow()
					break
			}
		}
		_onKeyup(t) {
			switch ((this._resetToolsToggler(), t.keyCode)) {
				case 39:
					this.slide()
					break
				case 37:
					this.slide('left')
					break
				case 27:
					this.close()
					break
				case 36:
					this.slide('first')
					break
				case 35:
					this.slide('last')
					break
				case 38:
					this.zoomIn()
					break
				case 40:
					this.zoomOut()
					break
			}
		}
		_focusFullscreenBtn() {
			setTimeout(() => {
				this._fullscreenBtn.focus()
			}, 100)
		}
		_focusRightArrow() {
			this._rightArrow.focus()
		}
		_moveImg(t) {
			if (
				this._multitouch ||
				this._zoom !== 1 ||
				t !== this.currentImg ||
				this._images.length <= 1
			)
				return
			const e = this._positionX - this._originalPositionX
			e > 0 ? this.slide('left') : e < 0 && this.slide()
		}
		_checkDoubleTap(t) {
			clearTimeout(this._doubleTapTimer)
			const i = new Date().getTime() - this._tapTime
			this._tapCounter > 0 && i < 500
				? (this._onDoubleClick(t),
				  (this._doubleTapTimer = setTimeout(() => {
						;(this._tapTime = new Date().getTime()), (this._tapCounter = 0)
				  }, 300)))
				: (this._tapCounter++, (this._tapTime = new Date().getTime()))
		}
		_resetDoubleTap() {
			;(this._tapTime = 0),
				(this._tapCounter = 0),
				clearTimeout(this._doubleTapTimer)
		}
		_onDoubleClick(t) {
			this._multitouch ||
				(t.touches || this._setNewPositionOnZoomIn(t),
				this._zoom !== 1 ? this._restoreDefaultZoom() : this.zoomIn())
		}
		_onZoom(t) {
			if (t.deltaY > 0) this.zoomOut()
			else {
				if (this._zoom >= 3) return
				this._setNewPositionOnZoomIn(t), this.zoomIn()
			}
		}
		_onBackdropClick(t) {
			this._resetToolsToggler(), t.target.tagName === 'DIV' && this.close()
		}
		_setNewPositionOnZoomIn(t) {
			clearTimeout(this._zoomTimer),
				(this._positionX = window.innerWidth / 2 - t.offsetX - 50),
				(this._positionY = window.innerHeight / 2 - t.offsetY - 50),
				(this.currentImg.style.transition = 'all 0.5s ease-out'),
				(this.currentImg.style.left = `${this._positionX}px`),
				(this.currentImg.style.top = `${this._positionY}px`),
				(this._zoomTimer = setTimeout(() => {
					this.currentImg.style.transition = 'none'
				}, 500))
		}
		_resetToolsToggler() {
			this._showTools(),
				clearTimeout(this._toolsToggleTimer),
				this._setToolsToggleTimout()
		}
		_setToolsToggleTimout() {
			this._toolsToggleTimer = setTimeout(() => {
				this._hideTools(), clearTimeout(this._toolsToggleTimer)
			}, 4e3)
		}
		_hideTools() {
			g.style(this._galleryToolbar, { opacity: 0 }),
				g.style(this._leftArrowWrapper, { opacity: 0 }),
				g.style(this._rightArrowWrapper, { opacity: 0 })
		}
		_showTools() {
			g.style(this._galleryToolbar, { opacity: 1 }),
				g.style(this._leftArrowWrapper, { opacity: 1 }),
				g.style(this._rightArrowWrapper, { opacity: 1 })
		}
		_disableScroll() {
			g.addClass(document.body, 'overflow-y-hidden relative'),
				document.documentElement.scrollHeight >
					document.documentElement.clientHeight &&
					g.addClass(document.body, 'md:pr-[17px]')
		}
		_enableScroll() {
			setTimeout(() => {
				g.removeClass(document.body, 'overflow-y-hidden relative'),
					g.removeClass(document.body, 'md:pr-[17px]')
			}, 300)
		}
		_animationStart() {
			;(this._animating = !0),
				setTimeout(() => {
					this._animating = !1
				}, 400)
		}
		_restoreDefaultZoom() {
			this._zoom !== 1 &&
				((this._zoom = 1),
				g.style(this.currentImg.parentNode, {
					transform: `scale(${this._zoom})`,
				}),
				this._updateZoomBtn(),
				this._updateImgPosition())
		}
		_restoreDefaultFullscreen() {
			this._fullscreen && this.toggleFullscreen()
		}
		_restoreDefaultPosition() {
			clearTimeout(this._zoomTimer)
			const t = this.currentImg
			g.style(this.currentImg.parentNode, { left: 0, top: 0 }),
				g.style(this.currentImg, {
					transition: 'all 0.5s ease-out',
					left: 0,
					top: 0,
				}),
				this._calculateImgSize(t),
				setTimeout(() => {
					g.style(this.currentImg, { transition: 'none' })
				}, 500)
		}
		async _triggerEvents(t, e) {
			_.trigger(this._element, `${t}.te.lightbox`),
				e &&
					(await setTimeout(() => {
						_.trigger(this._element, `${e}.te.lightbox`)
					}, 505))
		}
		static getInstance(t) {
			return O.getData(t, gn)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
		static toggle() {
			return function (t) {
				const e = m.closest(t.target, `${Fp}`)
				;(ys.getInstance(e) || new ys(e)).open(t)
			}
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				let i = O.getData(this, gn)
				const n = typeof t == 'object' && t
				if (
					!(!i && /dispose/.test(t)) &&
					(i || (i = new ys(this, n)), typeof t == 'string')
				) {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t](e)
				}
			})
		}
	}
	const ww = {
			isRequired: 'This is required',
			isEmail: 'Please enter a valid email address',
			isLongerThan: 'This field must be longer than {length} characters',
			isShorterThan: 'This field must be shorter than {length} characters',
			isChecked: 'This is required',
			isPhone: 'Please enter a valid phone number',
			isNumber: 'Expected value with type Number',
			isString: 'Expected value with type String',
			isBoolean: 'Expected value with type Boolean',
			isDate: 'Please enter a valid date',
			is12hFormat: 'Please enter a valid time in 12h format',
			is24hFormat: 'Please enter a valid time in 24h format',
		},
		kw = {
			isRequired: (s, t) => ((s == null ? void 0 : s.trim()) ? !0 : t),
			isEmail: (s, t) =>
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s) ? !0 : t,
			isLongerThan: (s, t, e) => (s.length > e ? !0 : t.replace('{length}', e)),
			isShorterThan: (s, t, e) =>
				s.length < e ? !0 : t.replace('{length}', e),
			isChecked: s => (s ? !0 : 'This is required'),
			isPhone: (s, t) => (s.length === 9 ? !0 : t),
			isNumber: (s, t) => (s && !isNaN(Number(s)) ? !0 : t),
			isString: (s, t) => (typeof s == 'string' ? !0 : t),
			isBoolean: (s, t) => (typeof s == 'boolean' ? !0 : t),
			isDate: (s, t) => {
				const e = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/
				return s.match(e) ? !0 : t
			},
			is12hFormat: (s, t) => {
				const e = /^(0?[1-9]|1[0-2]):[0-5][0-9] [APap][mM]$/
				return s.match(e) ? !0 : t
			},
			is24hFormat: (s, t) => {
				const e = /^(?:[01]\d|2[0-3]):[0-5][0-9]$/
				return s.match(e) ? !0 : t
			},
		},
		tc = 'validation',
		ec = 'te.validation',
		gr = `.${ec}`,
		zp = 'data-te-validate',
		mr = 'data-te-validated',
		br = 'data-te-validation-state',
		vr = 'data-te-validation-feedback',
		ic = 'data-te-valid-feedback',
		yr = 'data-te-invalid-feedback',
		jp = 'data-te-validation-ruleset',
		Sw = 'data-te-submit-btn-ref',
		Ow = `[${zp}]`,
		Iw = '[data-te-input-notch-ref] div',
		Dw = `[${Sw}]`,
		Mw = `validated${gr}`,
		Lw = `valid${gr}`,
		$w = `invalid${gr}`,
		Rw = `changed${gr}`,
		Pw = {
			validFeedback: 'string',
			invalidFeedback: 'string',
			disableFeedback: 'boolean',
			customRules: 'object',
			customErrorMessages: 'object',
			activeValidation: 'boolean',
			submitCallback: '(function|null)',
		},
		Yp = {
			validFeedback: 'Looks good!',
			invalidFeedback: 'Something is wrong!',
			disableFeedback: !1,
			customRules: {},
			customErrorMessages: {},
			activeValidation: !1,
			submitCallback: null,
		},
		Nw = {
			notchLeadingValid:
				'border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[-1px_0_0_#14a44d,_0_1px_0_0_#14a44d,_0_-1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]',
			notchMiddleValid:
				'border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[0_1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]',
			notchTrailingValid:
				'border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[1px_0_0_#14a44d,_0_-1px_0_0_#14a44d,_0_1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]',
			notchLeadingInvalid:
				'border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[-1px_0_0_#dc4c64,_0_1px_0_0_#dc4c64,_0_-1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]',
			notchMiddleInvalid:
				'border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[0_1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]',
			notchTrailingInvalid:
				'border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[1px_0_0_#dc4c64,_0_-1px_0_0_#dc4c64,_0_1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]',
			basicInputValid:
				'!border-[#14a44d] focus:!border-[#14a44d] focus:!shadow-[inset_0_0_0_1px_#14a44d]',
			basicInputInvalid:
				'!border-[#dc4c64] focus:!border-[#dc4c64] focus:!shadow-[inset_0_0_0_1px_#dc4c64]',
			checkboxValid:
				'checked:!border-[#14a44d] checked:!bg-[#14a44d] checked:after:!bg-[#14a44d]',
			checkboxInvalid:
				'checked:!border-[#dc4c64] checked:!bg-[#dc4c64] checked:after:!bg-[#dc4c64]',
			radioValid: 'checked:!border-[#14a44d] checked:after:!bg-[#14a44d]',
			radioInvalid: 'checked:!border-[#dc4c64] checked:after:!bg-[#dc4c64]',
			labelValid: '!text-[#14a44d]',
			labelInvalid: '!text-[#dc4c64]',
			validFeedback:
				'absolute top-full left-0 m-1 w-auto text-sm text-[#14a44d] animate-[fade-in_0.3s_both]',
			invalidFeedback:
				'absolute top-full left-0 m-1 w-auto text-sm text-[#dc4c64] animate-[fade-in_0.3s_both]',
			elementValidated: 'mb-8',
		},
		Bw = {
			notchLeadingValid: 'string',
			notchMiddleValid: 'string',
			notchTrailingValid: 'string',
			notchLeadingInvalid: 'string',
			notchMiddleInvalid: 'string',
			notchTrailingInvalid: 'string',
			basicInputValid: 'string',
			basicInputInvalid: 'string',
			checkboxValid: 'string',
			checkboxInvalid: 'string',
			radioValid: 'string',
			radioInvalid: 'string',
			labelValid: 'string',
			labelInvalid: 'string',
			validFeedback: 'string',
			invalidFeedback: 'string',
			elementValidated: 'string',
		}
	class Tr extends Mt {
		constructor(t, e, i) {
			super(t),
				(this._element = t),
				this._element && O.setData(t, ec, this),
				(this._config = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._isValid = !0),
				(this._shouldApplyInputEvents = !0),
				(this._submitCallback = null),
				(this._errorMessages = { ...ww, ...this._config.customErrorMessages }),
				(this._validationElements = this._getValidationElements()),
				this._validationElements.forEach(({ element: n, input: o }) => {
					this._createFeedbackWrapper(n, o)
				}),
				(this._validationObserver = this._watchForValidationChanges()),
				this._validationObserver.observe(this._element, { attributes: !0 }),
				(this._submitButton = null),
				this._handleSubmitButton(),
				(this._validationResult = [])
		}
		static get DefaultType() {
			return Pw
		}
		static get Default() {
			return Yp
		}
		static get NAME() {
			return tc
		}
		dispose() {
			var t
			;(t = this._validationObserver) == null || t.disconnect(),
				(this._validationObserver = null),
				(this._submitCallback = null),
				this._element.removeAttribute(mr),
				this._removeInputEvents(),
				this._removeValidationTraces(),
				(this._validationResult = []),
				this._submitButton && _.off(this._submitButton, 'click'),
				this._config.activeValidation &&
					(this._validationElements.forEach(e => {
						const { input: i } = e
						_.off(i, 'input')
					}),
					(this._shouldApplyInputEvents = !0))
		}
		_removeValidationTraces() {
			this._removeFeedbackWrapper(),
				this._validationElements.forEach(
					({ element: t, classes: e, initialHTML: i }) => {
						;(t.className = e),
							(t.innerHTML = i),
							t.removeAttribute(br),
							t.removeAttribute(yr),
							t.removeAttribute(ic)
					}
				),
				(this._validationElements = [])
		}
		_getValidationElements() {
			return m.find(Ow, this._element).map(e => {
				const i = m.findOne('input', e) || m.findOne('textarea', e),
					n = m.findOne('select', e)
				return {
					id:
						i.name ||
						i.id ||
						(n == null ? void 0 : n.name) ||
						bt('validation-'),
					element: e,
					type: e.getAttribute(zp),
					input: i,
					validFeedback: e.getAttribute(ic),
					invalidFeedback: e.getAttribute(yr),
					classes: e.className,
					initialHTML: e.innerHTML,
					ruleset: e.getAttribute(jp),
				}
			})
		}
		_createFeedbackWrapper(t, e) {
			if (t.querySelectorAll(`[${vr}]`).length > 0) return
			const i = document.createElement('span')
			i.setAttribute(vr, ''), e.parentNode.appendChild(i)
		}
		_removeFeedbackWrapper() {
			m.find(`[${vr}]`, this._element).forEach(e => {
				e.remove()
			})
		}
		_watchForValidationChanges() {
			return new MutationObserver(e => {
				e.forEach(i => {
					const { attributeName: n } = i
					n === mr &&
						(this._handleValidation(),
						this._config.activeValidation &&
							this._shouldApplyInputEvents &&
							this._applyInputEvents())
				})
			})
		}
		_handleValidation() {
			this._element.getAttribute(mr) &&
				((this._validationResult = []),
				(this._isValid = !0),
				this._validationElements.forEach(t => this._validateSingleElement(t)),
				this._emitEvents(this._isValid),
				this._submitCallback && this._submitCallback(this._isValid))
		}
		_validateSingleElement(t) {
			var c
			const { element: e, type: i, input: n, ruleset: o, id: r } = t
			o && this._validateByRuleset(t)
			const a = e.getAttribute(br)
			if (a !== 'valid' && a !== 'invalid') return
			const l = a.replace(a.charAt(0), a.charAt(0).toUpperCase())
			i === 'input' && this._restyleNotches(e, l),
				i === 'basic' && this._restyleBasicInputs(n, l),
				(i === 'checkbox' || i === 'radio') && this._restyleCheckboxes(n, l, i),
				this._restyleLabels(e, l),
				a === 'invalid' && (this._isValid = !1),
				this._config.disableFeedback || this._applyFeedback(e, a),
				_.trigger(this._element, Rw, {
					value: {
						name: r,
						result: a,
						validation:
							(c = this._validationResult[r]) == null ? void 0 : c.validation,
					},
				})
		}
		_validateByRuleset({
			element: t,
			type: e,
			invalidFeedback: i,
			input: n,
			id: o,
		}) {
			const r = this._getRuleset(t)
			if (!r.length) return
			const a = e === 'checkbox' || e === 'radio' ? n.checked : n.value
			let l = '',
				c = []
			for (const h of r) {
				const d = h.callback(
					a,
					this._errorMessages[h.name] || this._config.invalidFeedback,
					h.parameter
				)
				c.push({ result: d === !0, name: h.name, fullName: h.fullName }),
					typeof d == 'string' && !l && (l = d)
			}
			if (((this._validationResult[o] = { element: t, validation: c }), !l)) {
				t.setAttribute(br, 'valid')
				return
			}
			t.setAttribute(br, 'invalid'), i || t.setAttribute(yr, l)
		}
		_handleInputChange(t) {
			this._validateSingleElement(t)
		}
		_getRuleset(t) {
			const i = t.getAttribute(jp).split('|')
			let n = []
			const o = { ...kw, ...this._config.customRules }
			return (
				i.forEach(r => {
					const a = this._getRuleData(r, o)
					a.callback ? n.push(a) : console.warn(`Rule ${r} does not exist`)
				}),
				n
			)
		}
		_getRuleData(t, e) {
			const i = t.split('(')
			return {
				callback: e[i[0]],
				parameter: i[1] ? i[1].split(')')[0] : null,
				name: i[0],
				fullName: t,
			}
		}
		_applyFeedback(t, e) {
			const i = m.findOne(`[${vr}]`, t),
				n = t.getAttribute(ic) || this._config.validFeedback,
				o = t.getAttribute(yr) || this._config.invalidFeedback
			g.addClass(t, this._classes.elementValidated),
				(i.textContent = e === 'valid' ? n : o),
				(i.className =
					this._classes[e === 'valid' ? 'validFeedback' : 'invalidFeedback'])
		}
		_restyleCheckboxes(t, e, i) {
			g.removeClass(t, this._classes.checkboxValid),
				g.removeClass(t, this._classes.checkboxInvalid),
				g.addClass(t, this._classes[`${i}${e}`])
		}
		_restyleBasicInputs(t, e) {
			g.removeClass(t, this._classes.basicInputValid),
				g.removeClass(t, this._classes.basicInputInvalid),
				g.addClass(t, this._classes[`basicInput${e}`])
		}
		_restyleNotches(t, e) {
			m.find(Iw, t).forEach((n, o) => {
				let r =
					o === 0 ? 'notchLeading' : o === 1 ? 'notchMiddle' : 'notchTrailing'
				;(n.className = ''),
					g.addClass(n, nu[r]),
					(r += e),
					g.addClass(n, this._classes[r])
			})
		}
		_restyleLabels(t, e) {
			const i = m.find('label', t)
			i.length &&
				i.forEach(n => {
					g.removeClass(n, this._classes.labelValid),
						g.removeClass(n, this._classes.labelInvalid),
						g.addClass(n, this._classes[`label${e}`])
				})
		}
		_emitEvents(t) {
			if ((_.trigger(this._element, Mw), t)) {
				_.trigger(this._element, Lw, { value: this._validationResult })
				return
			}
			_.trigger(this._element, $w, { value: this._validationResult })
		}
		_applyInputEvents() {
			this._validationElements.forEach(t => {
				const { input: e, element: i } = t
				_.on(e, 'input', () => this._handleInputChange(t)),
					_.on(i, 'valueChange.te.select', () => this._delayedInputChange(t)),
					_.on(i, 'itemSelect.te.autocomplete', () =>
						this._delayedInputChange(t)
					)
			}),
				(this._shouldApplyInputEvents = !1)
		}
		_removeInputEvents() {
			this._validationElements.forEach(t => {
				const { input: e, element: i } = t
				_.off(e, 'input', () => this._handleInputChange(t)),
					_.off(i, 'valueChange.te.select', () => this._delayedInputChange(t)),
					_.off(i, 'itemSelect.te.autocomplete', () =>
						this._delayedInputChange(t)
					)
			})
		}
		_delayedInputChange(t) {
			setTimeout(() => {
				this._handleInputChange(t)
			}, 10)
		}
		_handleSubmitButton() {
			;(this._submitButton = m.findOne(Dw, this._element)),
				this._submitButton &&
					_.on(this._submitButton, 'click', t =>
						this._handleSubmitButtonClick(t)
					)
		}
		_handleSubmitButtonClick(t) {
			if ((this._element.setAttribute(mr, !0), this._config.submitCallback)) {
				this._submitCallback = e => this._config.submitCallback(t, e)
				return
			}
		}
		_getConfig(t) {
			return (
				(t = {
					...Yp,
					...g.getDataAttributes(this._element),
					...(typeof t == 'object' && t ? t : {}),
				}),
				L(tc, t, this.constructor.DefaultType),
				t
			)
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...Nw, ...e, ...t }), L(tc, t, Bw), t
		}
		static getInstance(t) {
			return O.getData(t, ec)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Tr.getOrCreateInstance(this)
				if (typeof t == 'string') {
					if (e[t] === void 0 || t.startsWith('_') || t === 'constructor')
						throw new TypeError(`No method named "${t}"`)
					e[t](this)
				}
			})
		}
	}
	class mn {
		_getCoordinates(t) {
			const [e] = t.touches
			return { x: e.clientX, y: e.clientY }
		}
		_getDirection({ x: t, y: e }) {
			return {
				x: { direction: t < 0 ? 'left' : 'right', value: Math.abs(t) },
				y: { direction: e < 0 ? 'up' : 'down', value: Math.abs(e) },
			}
		}
		_getOrigin({ x: t, y: e }, { x: i, y: n }) {
			return { x: t - i, y: e - n }
		}
		_getDistanceBetweenTwoPoints(t, e, i, n) {
			return Math.hypot(e - t, n - i)
		}
		_getMidPoint({ x1: t, x2: e, y1: i, y2: n }) {
			return { x: (t + e) / 2, y: (i + n) / 2 }
		}
		_getVectorLength({ x1: t, x2: e, y1: i, y2: n }) {
			return Math.sqrt((e - t) ** 2 + (n - i) ** 2)
		}
		_getRightMostTouch(t) {
			let e = null
			const i = Number.MIN_VALUE
			return (
				t.forEach(n => {
					n.clientX > i && (e = n)
				}),
				e
			)
		}
		_getAngle(t, e, i, n) {
			return Math.atan2(n - e, i - t)
		}
		_getAngularDistance(t, e) {
			return e - t
		}
		_getCenterXY({ x1: t, x2: e, y1: i, y2: n }) {
			return { x: t + (e - t) / 2, y: i + (n - i) / 2 }
		}
		_getPinchTouchOrigin(t) {
			const [e, i] = t,
				n = { x1: e.clientX, x2: i.clientX, y1: e.clientY, y2: i.clientY }
			return [this._getVectorLength(n), this._getCenterXY(n)]
		}
		_getPosition({ x1: t, x2: e, y1: i, y2: n }) {
			return { x1: t, x2: e, y1: i, y2: n }
		}
	}
	const sc = 'press',
		Hw = 'pressup',
		Vw = { time: 'number', pointers: 'number' },
		Fw = { time: 250, pointers: 1 }
	class Ww extends mn {
		constructor(t, e = {}) {
			super(),
				(this._element = t),
				(this._options = this._getConfig(e)),
				(this._timer = null)
		}
		static get NAME() {
			return sc
		}
		handleTouchStart(t) {
			const { time: e, pointers: i } = this._options
			t.touches.length === i &&
				(this._timer = setTimeout(() => {
					_.trigger(this._element, sc, { touch: t, time: e }),
						_.trigger(this._element, Hw, { touch: t })
				}, e))
		}
		handleTouchEnd() {
			clearTimeout(this._timer)
		}
		_getConfig(t) {
			const e = { ...Fw, ...g.getDataAttributes(this._element), ...t }
			return L(sc, e, Vw), e
		}
	}
	const zw = 'swipe',
		jw = { threshold: 'number', direction: 'string' },
		Yw = { threshold: 10, direction: 'all' }
	class Kw {
		constructor(t, e) {
			;(this._element = t),
				(this._startPosition = null),
				(this._options = this._getConfig(e))
		}
		handleTouchStart(t) {
			this._startPosition = this._getCoordinates(t)
		}
		handleTouchMove(t) {
			if (!this._startPosition) return
			const e = this._getCoordinates(t),
				i = { x: e.x - this._startPosition.x, y: e.y - this._startPosition.y },
				n = this._getDirection(i)
			if (this._options.direction === 'all') {
				if (
					n.y.value < this._options.threshold &&
					n.x.value < this._options.threshold
				)
					return
				const r = n.y.value > n.x.value ? n.y.direction : n.x.direction
				_.trigger(this._element, `swipe${r}`, { touch: t }),
					_.trigger(this._element, 'swipe', { touch: t, direction: r }),
					(this._startPosition = null)
				return
			}
			const o =
				this._options.direction === 'left' || this._options === 'right'
					? 'x'
					: 'y'
			n[o].direction === this._options.direction &&
				n[o].value > this._options.threshold &&
				(_.trigger(this._element, `swipe${n[o].direction}`, { touch: t }),
				(this._startPosition = null))
		}
		handleTouchEnd() {
			this._startPosition = null
		}
		_getCoordinates(t) {
			const [e] = t.touches
			return { x: e.clientX, y: e.clientY }
		}
		_getDirection(t) {
			return {
				x: { direction: t.x < 0 ? 'left' : 'right', value: Math.abs(t.x) },
				y: { direction: t.y < 0 ? 'up' : 'down', value: Math.abs(t.y) },
			}
		}
		_getConfig(t) {
			const e = { ...Yw, ...g.getDataAttributes(this._element), ...t }
			return L(zw, e, jw), e
		}
	}
	const Je = 'pan',
		Uw = `${Je}start`,
		Xw = `${Je}end`,
		Gw = `${Je}move`,
		qw = 'left',
		Zw = 'right',
		Qw = { threshold: 'number', direction: 'string', pointers: 'number' },
		Jw = { threshold: 20, direction: 'all', pointers: 1 }
	class tk extends mn {
		constructor(t, e = {}) {
			super(),
				(this._element = t),
				(this._options = this._getConfig(e)),
				(this._startTouch = null)
		}
		static get NAME() {
			return Je
		}
		handleTouchStart(t) {
			;(this._startTouch = this._getCoordinates(t)),
				(this._movedTouch = t),
				_.trigger(this._element, Uw, { touch: t })
		}
		handleTouchMove(t) {
			t.type === 'touchmove' && t.preventDefault()
			const { threshold: e, direction: i } = this._options,
				n = this._getCoordinates(t),
				o = this._getCoordinates(this._movedTouch),
				r = this._getOrigin(n, this._startTouch),
				a = this._getOrigin(n, o),
				l = this._getDirection(r),
				c = this._getDirection(a),
				{ x: h, y: d } = l
			if (i === 'all' && (d.value > e || h.value > e)) {
				const p = d.value > h.value ? d.direction : h.direction
				_.trigger(this._element, `${Je}${p}`, { touch: t }),
					_.trigger(this._element, Je, { ...a, touch: t })
			}
			const u = i === qw || i === Zw ? 'x' : 'y'
			c[u].direction === i &&
				l[u].value > e &&
				_.trigger(this._element, `${Je}${i}`, { touch: t, [u]: n[u] - o[u] }),
				(this._movedTouch = t),
				_.trigger(this._element, Gw, { touch: t })
		}
		handleTouchEnd(t) {
			t.type === 'touchend' && t.preventDefault(),
				(this._movedTouch = null),
				(this._startTouch = null),
				_.trigger(this._element, Xw, { touch: t })
		}
		_getConfig(t) {
			const e = { ...Jw, ...g.getDataAttributes(this._element), ...t }
			return L(Je, e, Qw), e
		}
	}
	const Ts = 'pinch',
		ek = `${Ts}end`,
		ik = `${Ts}start`,
		sk = `${Ts}move`,
		nk = { threshold: 'number', pointers: 'number' },
		ok = { threshold: 10, pointers: 2 }
	class rk extends mn {
		constructor(t, e = {}) {
			super(),
				(this._element = t),
				(this._options = this._getConfig(e)),
				(this._startTouch = null),
				(this._origin = null),
				(this._touch = null),
				(this._math = null),
				(this._ratio = null)
		}
		static get NAME() {
			return Ts
		}
		get isNumber() {
			return (
				typeof this._startTouch == 'number' &&
				typeof this._touch == 'number' &&
				!isNaN(this._startTouch) &&
				!isNaN(this._touch)
			)
		}
		handleTouchStart(t) {
			if (t.touches.length !== this._options.pointers) return
			t.type === 'touchstart' && t.preventDefault()
			const [e, i] = this._getPinchTouchOrigin(t.touches)
			;(this._touch = e),
				(this._origin = i),
				(this._startTouch = this._touch),
				_.trigger(this._element, ik, {
					touch: t,
					ratio: this._ratio,
					origin: this._origin,
				})
		}
		handleTouchMove(t) {
			const { threshold: e, pointers: i } = this._options
			t.touches.length === i &&
				(t.type === 'touchmove' && t.preventDefault(),
				(this._touch = this._getPinchTouchOrigin(t.touches)[0]),
				(this._ratio = this._touch / this._startTouch),
				this.isNumber &&
					(this._origin.x > e || this._origin.y > e) &&
					((this._startTouch = this._touch),
					_.trigger(this._element, Ts, {
						touch: t,
						ratio: this._ratio,
						origin: this._origin,
					}),
					_.trigger(this._element, sk, {
						touch: t,
						ratio: this._ratio,
						origin: this._origin,
					})))
		}
		handleTouchEnd(t) {
			this.isNumber &&
				((this._startTouch = null),
				_.trigger(this._element, ek, {
					touch: t,
					ratio: this._ratio,
					origin: this._origin,
				}))
		}
		_getConfig(t) {
			const e = { ...ok, ...g.getDataAttributes(this._element), ...t }
			return L(Ts, e, nk), e
		}
	}
	const nc = 'tap',
		ak = {
			interval: 'number',
			time: 'number',
			taps: 'number',
			pointers: 'number',
		},
		lk = { interval: 500, time: 250, taps: 1, pointers: 1 }
	class ck extends mn {
		constructor(t, e) {
			super(),
				(this._element = t),
				(this._options = this._getConfig(e)),
				(this._timer = null),
				(this._tapCount = 0)
		}
		static get NAME() {
			return nc
		}
		handleTouchStart(t) {
			const { x: e, y: i } = this._getCoordinates(t),
				{ interval: n, taps: o, pointers: r } = this._options
			return (
				t.touches.length === r &&
					((this._tapCount += 1),
					this._tapCount === 1 &&
						(this._timer = setTimeout(() => {
							this._tapCount = 0
						}, n)),
					this._tapCount === o &&
						(clearTimeout(this._timer),
						(this._tapCount = 0),
						_.trigger(this._element, nc, {
							touch: t,
							origin: { x: e, y: i },
						}))),
				t
			)
		}
		handleTouchEnd() {}
		handleTouchMove() {}
		_getConfig(t) {
			const e = { ...lk, ...g.getDataAttributes(this._element), ...t }
			return L(nc, e, ak), e
		}
	}
	const bn = 'rotate',
		hk = `${bn}end`,
		dk = `${bn}start`,
		uk = { angle: 'number', pointers: 'number' },
		pk = { angle: 0, pointers: 2 }
	class fk extends mn {
		constructor(t, e) {
			super(),
				(this._element = t),
				(this._options = this._getConfig(e)),
				(this._origin = {})
		}
		static get NAME() {
			return bn
		}
		handleTouchStart(t) {
			t.type === 'touchstart' && t.preventDefault(),
				!(t.touches.length < 2) &&
					((this._startTouch = t),
					(this._origin = {}),
					_.trigger(this._element, dk, { touch: t }))
		}
		handleTouchMove(t) {
			t.type === 'touchmove' && t.preventDefault()
			let e, i
			const n = t.touches
			if (n.length === 1 && this._options.pointers === 1) {
				const {
					left: o,
					top: r,
					width: a,
					height: l,
				} = this._element.getBoundingClientRect()
				;(e = { x: o + a / 2, y: r + l / 2 }), (i = n[0])
			} else if (t.touches.length === 2 && this._options.pointers === 2) {
				const [o, r] = t.touches,
					a = { x1: r.clientX, x2: o.clientX, y1: r.clientY, y2: o.clientY }
				;(e = this._getMidPoint(a)), (i = this._getRightMostTouch(t.touches))
			} else return
			;(this.currentAngle = this._getAngle(e.x, e.y, i.clientX, i.clientY)),
				this._origin.initialAngle
					? ((this._origin.change = this._getAngularDistance(
							this._origin.previousAngle,
							this.currentAngle
					  )),
					  (this._origin.distance += this._origin.change))
					: ((this._origin.initialAngle = this._origin.previousAngle =
							this.currentAngle),
					  (this._origin.distance = this._origin.change = 0)),
				(this._origin.previousAngle = this.currentAngle),
				(this.rotate = {
					currentAngle: this.currentAngle,
					distance: this._origin.distance,
					change: this._origin.change,
				}),
				_.trigger(this._element, bn, { ...this.rotate, touch: t })
		}
		handleTouchEnd(t) {
			t.type === 'touchend' && t.preventDefault(),
				(this._origin = {}),
				_.trigger(this._element, hk, { touch: t })
		}
		_getConfig(t) {
			const e = { ...pk, ...g.getDataAttributes(this._element), ...t }
			return L(bn, e, uk), e
		}
	}
	const oc = 'touch',
		rc = `te.${oc}`,
		_k = { event: 'string' },
		gk = { event: 'swipe' }
	class Er {
		constructor(t, e = {}) {
			;(this._element = t),
				(this._options = this._getConfig(e)),
				(this._event = this._options.event),
				(this.swipe = this._event === 'swipe' ? new Kw(t, e) : null),
				(this.press = this._event === 'press' ? new Ww(t, e) : null),
				(this.pan = this._event === 'pan' ? new tk(t, e) : null),
				(this.pinch = this._event === 'pinch' ? new rk(t, e) : null),
				(this.tap = this._event === 'tap' ? new ck(t, e) : null),
				(this.rotate = this._event === 'rotate' ? new fk(t, e) : null),
				(this._touchStartHandler = i => this._handleTouchStart(i)),
				(this._touchMoveHandler = i => this._handleTouchMove(i)),
				(this._touchEndHandler = i => this._handleTouchEnd(i)),
				_.on(this._element, 'touchstart', this._touchStartHandler),
				_.on(this._element, 'touchmove', this._touchMoveHandler),
				_.on(this._element, 'touchend', this._touchEndHandler),
				this._element && O.setData(t, rc, this)
		}
		static get NAME() {
			return oc
		}
		dispose() {
			_.off(this._element, 'touchstart', this._touchStartHandler),
				_.off(this._element, 'touchmove', this._touchMoveHandler),
				_.off(this._element, 'touchend', this._touchEndHandler),
				(this.swipe = null),
				(this.press = null),
				(this.pan = null),
				(this.pinch = null),
				(this.tap = null),
				(this.rotate = null)
		}
		_getConfig(t) {
			const e = { ...gk, ...g.getDataAttributes(this._element), ...t }
			return L(oc, e, _k), e
		}
		_handleTouchStart(t) {
			this[this._event].handleTouchStart(t)
		}
		_handleTouchMove(t) {
			this[this._event].handleTouchMove && this[this._event].handleTouchMove(t)
		}
		_handleTouchEnd(t) {
			this[this._event].handleTouchEnd(t)
		}
		static jQueryInterface(t) {
			return this.each(function () {
				let e = O.getData(this, rc)
				const i = typeof t == 'object' && t
				if (
					!(!e && /dispose/.test(t)) &&
					(e || (e = new Er(this, i)), typeof t == 'string')
				) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					return e[t]
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, rc)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const ac = 'smoothScroll',
		vn = `te.${ac}`,
		lc = `.${vn}`,
		mk = {
			container: 'string',
			offset: 'number',
			easing: 'string',
			duration: 'number',
		},
		bk = { container: 'body', offset: 0, easing: 'linear', duration: 500 },
		vk = `scrollStart${lc}`,
		yk = `scrollEnd${lc}`,
		Tk = `scrollCancel${lc}`
	class xr {
		constructor(t, e = {}) {
			;(this._element = t),
				(this._options = this._getConfig(e)),
				(this._href = this._element.getAttribute('href')),
				(this.isCancel = !1),
				this._element && (O.setData(t, vn, this), this._setup())
		}
		static get NAME() {
			return ac
		}
		get isWindow() {
			return this._options.container === 'body'
		}
		get containerToScroll() {
			return this.isWindow
				? document.documentElement
				: m.findOne(this._options.container, document.documentElement)
		}
		get elFromHrefExist() {
			return !!m.findOne(this._href, this.containerToScroll)
		}
		get offsetFromEl() {
			const t = this.containerToScroll.scrollTop,
				e = m.findOne(this._href, this.containerToScroll)
			if (this.isWindow) return g.offset(e).top - this._options.offset + t
			const i = e.getBoundingClientRect().y,
				n = this.containerToScroll.getBoundingClientRect().y
			return i - n - this._options.offset + t
		}
		get easingFunction() {
			const t = this._options.easing,
				e = `_motion${t[0].toUpperCase()}${t.slice(1)}`
			return this[e] ? this[e] : this._motionLinear
		}
		dispose() {
			_.off(this._element, 'click', this._handleClick),
				O.removeData(this._element, vn),
				(this._element = null)
		}
		cancelScroll() {
			this.isCancel = !0
		}
		_getConfig(t) {
			const e = { ...bk, ...g.getDataAttributes(this._element), ...t }
			return L(ac, e, mk), e
		}
		_inViewport() {
			if (this.isWindow) return !0
			const t = this.containerToScroll.getBoundingClientRect()
			return (
				t.top >= 0 &&
				t.bottom <=
					(window.innerHeight || document.documentElement.clientHeight)
			)
		}
		_setup() {
			const t = typeof this._href < 'u',
				e = this._href.includes('#')
			t &&
				e &&
				this.elFromHrefExist &&
				(this._scrollOnClickEvent(), this._preventNativeScroll())
		}
		_scrollOnClickEvent() {
			_.on(this._element, 'click', t => {
				this._handleClick(t)
			})
		}
		_handleClick(t) {
			t.preventDefault(), (this.isCancel = !1), _.trigger(this._element, vk)
			const e = this.containerToScroll,
				i = this.containerToScroll.scrollTop,
				n = this.offsetFromEl,
				o = 0,
				r = 1 / this._options.duration,
				a = 4.25,
				l = this.easingFunction
			this._inViewport()
				? this._scrollOnNextTick(e, i, n, o, r, a, l)
				: (this._scrollOnNextTick(
						document.documentElement,
						document.documentElement.scrollTop,
						this.containerToScroll.offsetTop,
						o,
						r,
						a,
						l
				  ),
				  setTimeout(() => {
						this._scrollOnNextTick(e, i, n, o, r, a, l), (this.isCancel = !1)
				  }, this._options.duration))
		}
		_scrollOnNextTick(t, e, i, n, o, r, a) {
			const l = n < 0,
				c = n > 1,
				h = o <= 0
			if (l || c || h || this.isCancel) {
				if (this.isCancel) {
					this.isInViewport && (this.isCancel = !1),
						_.trigger(this._element, Tk)
					return
				}
				_.trigger(this._element, yk), (t.scrollTop = i)
				return
			}
			t.scrollTo({ top: e - (e - i) * a(n) }),
				(n += o * r),
				setTimeout(() => {
					this._scrollOnNextTick(t, e, i, n, o, r, a)
				})
		}
		_preventDefault(t) {
			t.preventDefault()
		}
		_preventNativeScroll() {
			let t = !1
			try {
				window.addEventListener(
					'test',
					null,
					Object.defineProperty({}, 'passive', { get: () => (t = !0) })
				)
			} catch (n) {
				this._scrollError = n
			}
			const e = t ? { passive: !1 } : !1,
				i = 'onwheel' in $('div') ? 'wheel' : 'mousewheel'
			this.isWindow &&
				(this._deleteScrollOnStart(e, i),
				this._addScrollOnEnd(e, i),
				this._addScrollOnCancel(e, i))
		}
		_deleteScrollOnStart(t, e) {
			_.on(this._element, 'scrollStart.te.smoothScroll', () => {
				window.addEventListener(e, this._preventDefault, t),
					window.addEventListener('touchmove', this._preventDefault, t)
			})
		}
		_addScrollOnEnd(t, e) {
			_.on(this._element, 'scrollEnd.te.smoothScroll', () => {
				window.removeEventListener(e, this._preventDefault, t),
					window.removeEventListener('touchmove', this._preventDefault, t)
			})
		}
		_addScrollOnCancel(t, e) {
			_.on(this._element, 'scrollCancel.te.smoothScroll', () => {
				window.removeEventListener(e, this._preventDefault, t),
					window.removeEventListener('touchmove', this._preventDefault, t)
			})
		}
		_motionLinear(t) {
			return t
		}
		_motionEaseInQuad(t) {
			return t * t
		}
		_motionEaseInCubic(t) {
			return t * t * t
		}
		_motionEaseInQuart(t) {
			return t * t * t * t
		}
		_motionEaseInQuint(t) {
			return t * t * t * t * t
		}
		_motionEaseInOutQuad(t) {
			return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
		}
		_motionEaseInOutCubic(t) {
			return (
				(t /= 0.5), t < 1 ? (t * t * t) / 2 : ((t -= 2), (t * t * t + 2) / 2)
			)
		}
		_motionEaseInOutQuart(t) {
			return (
				(t /= 0.5),
				t < 1 ? 0.5 * t * t * t * t : ((t -= 2), -(t * t * t * t - 2) / 2)
			)
		}
		_motionEaseInOutQuint(t) {
			return (
				(t /= 0.5),
				t < 1
					? (t * t * t * t * t) / 2
					: ((t -= 2), (t * t * t * t * t + 2) / 2)
			)
		}
		_motionEaseOutQuad(t) {
			return -t * (t - 2)
		}
		_motionEaseOutCubic(t) {
			return t--, t * t * t + 1
		}
		_motionEaseOutQuart(t) {
			return t--, -(t * t * t * t - 1)
		}
		_motionEaseOutQuint(t) {
			return t--, t * t * t * t * t + 1
		}
		static getInstance(t) {
			return O.getData(t, vn)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
		static jQueryInterface(t) {
			return this.each(function () {
				let e = O.getData(this, vn)
				const i = typeof t == 'object' && t
				if ((e || (e = new xr(this, i)), typeof t == 'string')) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t](this)
				}
			})
		}
	}
	const Kp = 'lazyLoad',
		Cr = 'te.lazyLoad',
		Ek = '[data-te-lazy-load-init]',
		Up = 'data-te-lazy-load',
		xk = 'onLoad.te.lazy',
		Ck = 'onError.te.lazy',
		Xp = ['img', 'video'],
		Ak = {
			lazySrc: '(string|null)',
			lazyDelay: 'number',
			lazyAnimation: 'string',
			lazyOffset: 'number',
			lazyPlaceholder: '(string|undefined)',
			lazyError: '(string|undefined)',
		},
		wk = {
			lazySrc: null,
			lazyDelay: 500,
			lazyAnimation: '[fade-in_1s_ease-in-out]',
			lazyOffset: 0,
		}
	class yn {
		constructor(t, e) {
			;(this._element = t),
				this._element && O.setData(t, Cr, this),
				(this._options = this._getConfig(e)),
				(this.scrollHandler = this._scrollHandler.bind(this)),
				(this.errorHandler = this._setElementError.bind(this)),
				(this._childrenInstances = null),
				this._init()
		}
		static get NAME() {
			return Kp
		}
		get offsetValues() {
			return this._element.getBoundingClientRect()
		}
		get inViewport() {
			if (this.parent) {
				const t = this.parent.getBoundingClientRect()
				return (
					t.y > 0 &&
					t.y < window.innerHeight &&
					this.offsetValues.y >= t.y &&
					this.offsetValues.y <= t.y + t.height &&
					this.offsetValues.y <= window.innerHeight
				)
			}
			return (
				this.offsetValues.top + this._options.lazyOffset <=
					window.innerHeight && this.offsetValues.bottom >= 0
			)
		}
		get parent() {
			const [t] = m.parents(this._element, Ek)
			return t
		}
		get node() {
			return this._element.nodeName
		}
		get isContainer() {
			return !m.matches(this._element, Xp)
		}
		dispose() {
			O.removeData(this._element, Cr),
				this._animation &&
					(this._animation.dispose(), (this._animation = null)),
				(this._element = null),
				this._childrenInstances &&
					this._childrenInstances.forEach(t => t.dispose())
		}
		_init() {
			if ((this._element.setAttribute(Up, ''), this.isContainer)) {
				this._setupContainer()
				return
			}
			this._setupElement()
		}
		_setupElement() {
			_.one(this._element, 'error', this.errorHandler),
				this._options.lazyPlaceholder && this._setPlaceholder(),
				(this._animation = new Gs(this._element, {
					animation: `${this._options.lazyAnimation}`,
					animationStart: 'onLoad',
				})),
				_.one(this._element, 'load', () => this._scrollHandler()),
				this.parent && _.on(this.parent, 'scroll', this.scrollHandler),
				_.on(window, 'scroll', this.scrollHandler)
		}
		_scrollHandler() {
			this.inViewport &&
				((this._timeout = setTimeout(() => {
					this._setSrc(),
						this._element.removeAttribute(Up),
						this._removeAttrs(),
						this._animation.init()
				}, this._options.lazyDelay)),
				this.parent && _.off(this.parent, 'scroll', this.scrollHandler),
				_.off(window, 'scroll', this.scrollHandler))
		}
		_setElementError() {
			!this._options.lazyError || this._element.src === this._options.lazyError
				? (this._element.alt = '404 not found')
				: this._element.setAttribute('src', this._options.lazyError),
				_.trigger(this._element, Ck)
		}
		_setSrc() {
			this._element.setAttribute('src', this._options.lazySrc),
				_.trigger(this._element, xk)
		}
		_setPlaceholder() {
			this.node === 'IMG'
				? this._element.setAttribute('src', this._options.lazyPlaceholder)
				: this.node === 'VIDEO' &&
				  this._element.setAttribute('poster', this._options.lazyPlaceholder)
		}
		_removeAttrs() {
			;['src', 'delay', 'animation', 'placeholder', 'offset', 'error'].forEach(
				t => {
					g.removeDataAttribute(this._element, `lazy-${t}`)
				}
			)
		}
		_setupContainer() {
			this._childrenInstances = m
				.children(this._element, Xp)
				.map(t => new yn(t, this._options))
		}
		_getConfig(t) {
			const e = { ...wk, ...t, ...g.getDataAttributes(this._element) }
			return L(Kp, e, Ak), e
		}
		static getInstance(t) {
			return O.getData(t, Cr)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
		static jQueryInterface(t) {
			return this.each(function () {
				let e = O.getData(this, Cr)
				const i = typeof t == 'object' && t
				if ((e || (e = new yn(this, i)), typeof t == 'string')) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t](this)
				}
			})
		}
	}
	const Gp = 'clipboard',
		Tn = 'te.clipboard',
		kk = `.${Tn}`,
		Sk = { clipboardTarget: null },
		Ok = { clipboardTarget: 'null|string' },
		Ik = `copy${kk}`
	class Ar {
		constructor(t, e = {}) {
			;(this._element = t),
				(this._options = e),
				this._element &&
					(O.setData(t, Tn, this),
					(this._initCopy = this._initCopy.bind(this)),
					this._setup())
		}
		static get NAME() {
			return Gp
		}
		get options() {
			const t = {
				...Sk,
				...g.getDataAttributes(this._element),
				...this._options,
			}
			return L(Gp, t, Ok), t
		}
		get clipboardTarget() {
			return m.findOne(this.options.clipboardTarget)
		}
		get copyText() {
			const t = this.clipboardTarget.hasAttribute('data-te-clipboard-text'),
				e = this.clipboardTarget.value,
				i = this.clipboardTarget.textContent
			return t
				? this.clipboardTarget.getAttribute('data-te-clipboard-text')
				: e || i
		}
		dispose() {
			_.off(this._element, 'click', this._initCopy),
				O.removeData(this._element, Tn),
				(this._element = null)
		}
		_setup() {
			_.on(this._element, 'click', this._initCopy)
		}
		_initCopy() {
			const t = this._createNewInput()
			document.body.appendChild(t),
				this._selectInput(t),
				_.trigger(this._element, Ik, { copyText: this.copyText }),
				t.remove()
		}
		_createNewInput() {
			const t =
					this.clipboardTarget.tagName === 'TEXTAREA' ? 'textarea' : 'input',
				e = $(t)
			return (
				(e.value = this.copyText), g.addClass(e, '-left-[9999px] absolute'), e
			)
		}
		_selectInput(t) {
			t.select(),
				t.focus(),
				t.setSelectionRange(0, 99999),
				document.execCommand('copy')
		}
		static jQueryInterface(t) {
			return this.each(function () {
				let e = O.getData(this, Tn)
				const i = typeof t == 'object' && t
				if ((e || (e = new Ar(this, i)), typeof t == 'string')) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t](this)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, Tn)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const cc = 'infiniteScroll',
		wr = `te.${cc}`,
		Dk = { infiniteDirection: 'y' },
		Mk = { infiniteDirection: 'string' }
	class kr {
		constructor(t, e) {
			;(this._element = t),
				this._element && O.setData(t, wr, this),
				(this._options = this._getConfig(e)),
				(this.scrollHandler = this._scrollHandler.bind(this)),
				this._init()
		}
		static get NAME() {
			return cc
		}
		get rect() {
			return this._element.getBoundingClientRect()
		}
		get condition() {
			return this._element === window
				? Math.abs(
						window.scrollY +
							window.innerHeight -
							document.documentElement.scrollHeight
				  ) < 1
				: this._options.infiniteDirection === 'x'
				? this.rect.width + this._element.scrollLeft + 10 >=
				  this._element.scrollWidth
				: Math.ceil(this.rect.height + this._element.scrollTop) >=
				  this._element.scrollHeight
		}
		dispose() {
			_.off(this._element, 'scroll', this.scrollHandler),
				O.removeData(this._element, wr),
				(this._element = null)
		}
		_init() {
			_.on(this._element, 'scroll', () => this._scrollHandler())
		}
		_scrollHandler() {
			this.condition && _.trigger(this._element, 'complete.te.infiniteScroll'),
				_.off(this._element, 'scroll', this.scrollHandler)
		}
		_getConfig(t) {
			const e = {
				...Dk,
				...(this._element !== window ? g.getDataAttributes(this._element) : {}),
				...t,
			}
			return L(cc, e, Mk), e
		}
		static getInstance(t) {
			return O.getData(t, wr)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
		static jQueryInterface(t) {
			return this.each(function () {
				let e = O.getData(this, wr)
				const i = typeof t == 'object' && t
				if ((e || (e = new kr(this, i)), typeof t == 'string')) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t](this)
				}
			})
		}
	}
	function Lk({ backdropID: s }, t) {
		const e = $('div')
		return g.addClass(e, `${t.backdrop} ${t.backdropColor}`), (e.id = s), e
	}
	const En = 'loadingManagement',
		Sr = `te.${En}`,
		$k = '[data-te-loading-icon-ref]',
		Rk = '[data-te-loading-text-ref]',
		Pk = `show.te.${En}`,
		Nk = {
			backdrop: '(null|boolean)',
			backdropID: '(null|string|number)',
			delay: '(null|number)',
			loader: '(null|string|number)',
			parentSelector: '(null|string)',
			loadingIcon: 'boolean',
			loadingText: 'boolean',
			scroll: 'boolean',
		},
		Bk = {
			backdrop: !0,
			backdropID: null,
			delay: 0,
			loader: '',
			parentSelector: null,
			scroll: !0,
			loadingText: !0,
			loadingIcon: !0,
		},
		Hk = {
			loadingSpinner:
				'absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center z-40',
			spinnerColor: 'text-primary dark:text-primary-400',
			backdrop: 'w-full h-full fixed top-0 left-0 bottom-0 right-0 z-30',
			backdropColor: 'bg-[rgba(0,0,0,0.4)]',
		},
		Vk = {
			loadingSpinner: 'string',
			spinnerColor: 'string',
			backdrop: 'string',
			backdropColor: 'string',
		}
	class Or {
		constructor(t, e = {}, i) {
			;(this._element = t),
				(this._options = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				this._element && O.setData(t, Sr, this),
				(this._backdropElement = null),
				(this._parentElement = m.findOne(this._options.parentSelector)),
				(this._loadingIcon = m.findOne($k, this._element)),
				(this._loadingText = m.findOne(Rk, this._element)),
				this.init()
		}
		static get NAME() {
			return En
		}
		init() {
			const t = this._loadingIcon.cloneNode(!0),
				e = this._loadingText.cloneNode(!0)
			this._removeElementsOnStart(),
				setTimeout(() => {
					g.addClass(
						this._element,
						`${this._classes.loadingSpinner} ${this._classes.spinnerColor}`
					),
						this._setBackdrop(),
						this._setLoadingIcon(t),
						this._setLoadingText(e),
						this._setScrollOption(),
						_.trigger(this._element, Pk)
				}, this._options.delay)
		}
		dispose() {
			O.removeData(this._element, Sr),
				g.removeClass(
					this._element,
					`${this._classes.loadingSpinner} ${this._classes.spinnerColor}`
				)
			const t = this._options.delay
			setTimeout(() => {
				this._removeBackdrop(),
					(this._backdropElement = null),
					(this._element = null),
					(this._options = null)
			}, t)
		}
		_setBackdrop() {
			const { backdrop: t } = this._options
			t &&
				((this._backdropElement = Lk(this._options, this._classes)),
				this._parentElement !== null
					? (g.addClass(this._element, 'absolute'),
					  g.addClass(this._parentElement, 'relative'),
					  g.addClass(this._backdropElement, 'absolute'),
					  this._parentElement.appendChild(this._backdropElement))
					: (g.addClass(this._element, '!fixed'),
					  document.body.appendChild(this._backdropElement),
					  document.body.appendChild(this._element)))
		}
		_removeBackdrop() {
			const { backdrop: t } = this._options
			t &&
				(this._parentElement !== null
					? (g.removeClass(this._element, 'absolute'),
					  g.removeClass(this._parentElement, 'relative'),
					  this._backdropElement.remove())
					: (this._backdropElement.remove(), this._element.remove()))
		}
		_setLoadingIcon(t) {
			if (!this._options.loadingIcon) {
				t.remove()
				return
			}
			this._element.appendChild(t), (t.id = this._options.loader)
		}
		_setLoadingText(t) {
			if (!this._options.loadingText) {
				t.remove()
				return
			}
			this._element.appendChild(t)
		}
		_removeElementsOnStart() {
			this._element !== null &&
				(this._loadingIcon.remove(), this._loadingText.remove())
		}
		_setScrollOption() {
			if (this._options.scroll) {
				if (this._parentElement === null) {
					g.addClass(document.body, 'overflow-auto')
					return
				}
				g.addClass(this._parentElement, 'overflow-auto')
			} else {
				if (this._parentElement === null) {
					g.addClass(document.body, 'overflow-hidden')
					return
				}
				g.addClass(this._parentElement, 'overflow-hidden')
			}
		}
		_getConfig(t) {
			const e = { ...Bk, ...g.getDataAttributes(this._element), ...t }
			return L(En, e, Nk), e
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...Hk, ...e, ...t }), L(En, t, Vk), t
		}
		static getInstance(t) {
			return O.getData(t, Sr)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
		static jQueryInterface(t) {
			return this.each(function () {
				let e = O.getData(this, Sr)
				const i = typeof t == 'object' && t
				if ((e || (e = new Or(this, i)), typeof t == 'string')) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`)
					e[t](this)
				}
			})
		}
	}
	const Fk = s => {
			const t = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/,
				e = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/
			return s.match(t) || s.match(e)
		},
		Wk = s =>
			s && Object.prototype.toString.call(s) === '[object Date]' && !isNaN(s),
		zk = s => s.getMonth(),
		jk = s => s.getFullYear(),
		Yk = s => s.match(/[^(dmy)]{1,}/g),
		Kk = (s, t, e, i) => {
			let n
			e[0] !== e[1] ? (n = e[0] + e[1]) : (n = e[0])
			const o = new RegExp(`[${n}]`),
				r = s.split(o),
				a = t.split(o),
				l = t.indexOf('mmm') !== -1,
				c = []
			for (let b = 0; b < a.length; b++)
				a[b].indexOf('yy') !== -1 && (c[0] = { value: r[b], format: a[b] }),
					a[b].indexOf('m') !== -1 && (c[1] = { value: r[b], format: a[b] }),
					a[b].indexOf('d') !== -1 &&
						a[b].length <= 2 &&
						(c[2] = { value: r[b], format: a[b] })
			let h
			t.indexOf('mmmm') !== -1 ? (h = i.monthsFull) : (h = i.monthsShort)
			const d = Number(c[0].value),
				u = l ? Uk(c[1].value, h) : Number(c[1].value) - 1,
				p = Number(c[2].value)
			return ee(d, u, p)
		},
		Uk = (s, t) => t.findIndex(e => e === s),
		Xk = (s, t, e) => `
  <button type="button" class="${e.pickerIcon}" data-te-datepicker-toggle-button-ref>
    ${s}
  </button>
  <button type="button" class="${e.pickerIcon}" data-te-timepicker-toggle-button-ref>
    ${t}
  </button>
`,
		Gk = (s, t) => `
  <button type="button" class="${t.toggleButton}" data-te-date-timepicker-toggle-ref>
    ${s} 
  </button>
`,
		Ir = 'datetimepicker',
		xn = `te.${Ir}`,
		hc = `.${xn}`,
		qp = 'data-te-datepicker-init',
		Zp = 'data-te-timepicker-init',
		qk = 'data-te-datepicker-header',
		Zk = 'data-te-datepicker-cancel-button-ref',
		Qk = 'data-te-datepicker-ok-button-ref',
		dc = 'data-te-timepicker-wrapper',
		Qp = 'data-te-timepicker-cancel',
		Jk = 'data-te-timepicker-submit',
		tS = 'data-te-timepicker-clear',
		Jp = 'data-te-buttons-timepicker',
		eS = 'data-te-date-timepicker-toggle-ref',
		iS = 'data-te-datepicker-toggle-button-ref',
		sS = 'data-te-timepicker-toggle-button-ref',
		nS = `[${Zp}]`,
		oS = `[${qp}]`,
		rS = `[${eS}]`,
		aS = `[${sS}]`,
		lS = '[data-te-input-notch-ref]',
		cS = '[data-te-date-timepicker-toggle-ref]',
		hS = '[data-te-timepicker-elements-wrapper]',
		dS = '[data-te-timepicker-clock-wrapper]',
		uS = `open${hc}`,
		pS = `close${hc}`,
		fS = `datetimeChange${hc}`,
		tf = 'close.te.datepicker',
		ef = 'input.te.timepicker',
		Es = $('div'),
		sf = {
			inline: !1,
			toggleButton: !0,
			container: 'body',
			disabled: !1,
			disablePast: !1,
			disableFuture: !1,
			defaultTime: '',
			defaultDate: '',
			timepicker: {},
			datepicker: {},
			showFormat: !1,
			dateTimepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
  </svg>`,
			datepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
  </svg>`,
			timepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
		},
		_S = {
			inline: 'boolean',
			toggleButton: 'boolean',
			container: 'string',
			disabled: 'boolean',
			disablePast: 'boolean',
			disableFuture: 'boolean',
			defaultTime: '(string|date|number)',
			defaultDate: '(string|date|number)',
			timepicker: 'object',
			datepicker: 'object',
			showFormat: 'boolean',
			dateTimepickerToggleIconTemplate: 'string',
			datepickerToggleIconTemplate: 'string',
			timepickerToggleIconTemplate: 'string',
		},
		gS = {
			toggleButton:
				'flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200',
			pickerIcon:
				'[&>svg]:w-6 [&>svg]:h-6 [&>svg]:mx-auto [&>svg]:pointer-events-none w-1/2 px-1.5 py-[1px] rounded-[10px] min-h-[40px] cursor-pointer outline-none border-none text-white hover:bg-primary-600 dark:hover:bg-neutral-300',
			buttonsContainer:
				'flex justify-evenly items-end bg-primary dark:bg-white dark:data-[te-buttons-timepicker]:bg-white',
			timepicker: {},
			datepicker: {},
		},
		mS = {
			toggleButton: 'string',
			pickerIcon: 'string',
			buttonsContainer: 'string',
			timepicker: 'object',
			datepicker: 'object',
		}
	class Dr {
		constructor(t, e, i) {
			;(this._element = t),
				(this._input = m.findOne('input', this._element)),
				(this._options = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				(this._timepicker = null),
				(this._datepicker = null),
				(this._dateValue = this._options.defaultDate
					? this._options.defaultDate
					: ''),
				(this._timeValue = this._options.defaultTime
					? this._options.defaultTime
					: ''),
				(this._isInvalidTimeFormat = !1),
				(this._format = this._options.datepicker.format
					? this._options.datepicker.format
					: 'dd/mm/yyyy'),
				(this._cancel = !1),
				(this._scrollBar = new Qi()),
				this._element && O.setData(t, xn, this),
				this._init()
		}
		static get NAME() {
			return Ir
		}
		get toggleButton() {
			return m.findOne(rS, this._element)
		}
		get notch() {
			return m.findOne(lS, this._element)
		}
		dispose() {
			_.off(this._element, 'click', this._openDatePicker),
				_.off(this._input, 'input', this._handleInput),
				_.off(this._element, 'click'),
				O.removeData(this._element, xn),
				this._removeTimePicker(),
				this._removeDatepicker(),
				this.toggleButton.remove(),
				(this._options = sf),
				(this._timepicker = null),
				(this._datepicker = null),
				(this._dateValue = null),
				(this._timeValue = null),
				(this._isInvalidTimeFormat = null)
		}
		update(t = {}) {
			const e = this._getConfig({ ...this._options, ...t })
			this.dispose(), (this._options = e), this._init()
		}
		_init() {
			this._addDatepicker(),
				this._addTimePicker(),
				this._appendToggleButton(),
				this._listenToToggleClick(),
				this._listenToUserInput(),
				this._disableInput(),
				this._setInitialDefaultInput(),
				this._applyFormatPlaceholder(),
				this._options.disablePast && this._handleTimepickerDisablePast(),
				this._options.disableFuture && this._handleTimepickerDisableFuture()
		}
		_removeDatepicker() {
			const t = this._element.querySelector(oS)
			t && t.remove()
		}
		_addDatepicker() {
			const t = $('div')
			t.id = this._element.id
				? `datepicker-${this._element.id}`
				: bt('datepicker-')
			const e = '<input type="text">'
			;(t.innerHTML = e),
				t.setAttribute(qp, ''),
				this._element.appendChild(t),
				g.addClass(t, 'hidden')
			let i = {
				...this._options.datepicker,
				container: this._options.container,
				disablePast: this._options.disablePast,
				disableFuture: this._options.disableFuture,
			}
			;(this._options.inline || this._options.datepicker.inline) &&
				(i = { ...i, inline: !0 }),
				(this._datepicker = new xl(t, i, { ...this._classes.datepicker })),
				(this._datepicker._input.value = this._dateValue)
		}
		_removeTimePicker() {
			const t = this._element.querySelector(nS)
			t && (t.remove(), this._scrollBar.reset())
		}
		_addTimePicker() {
			const t = $('div')
			t.id = this._element.id
				? `timepicker-${this._element.id}`
				: bt('timepicker-')
			const e = '<input type="text">'
			;(t.innerHTML = e),
				t.setAttribute(Zp, ''),
				this._element.appendChild(t),
				g.addClass(t, 'hidden')
			let i = {
				...this._options.timepicker,
				container: this._options.container,
			}
			;(this._options.inline || this._options.timepicker.inline) &&
				(i = { ...i, inline: !0 }),
				(this._timepicker = new Ll(t, i, { ...this._classes.timepicker })),
				(this._timepicker.input.value = this._timeValue)
		}
		_addIconButtons() {
			if (
				(g.addClass(Es, this._classes.buttonsContainer),
				(Es.innerHTML = Xk(
					this._options.datepickerToggleIconTemplate,
					this._options.timepickerToggleIconTemplate,
					this._classes
				)),
				Es.removeAttribute(Jp),
				!(this._options.inline || this._options.datepicker.inline))
			) {
				if ((this._scrollBar.hide(), this._datepicker._isOpen))
					m.findOne(`[${qk}]`, document.body).appendChild(Es)
				else if (this._timepicker._modal && !this._options.timepicker.inline) {
					const t = m.findOne(hS, document.body),
						e = m.findOne(dS, document.body)
					Es.setAttribute(Jp, ''), t.insertBefore(Es, e)
				}
			}
		}
		_enableOrDisableToggleButton() {
			this._options.disabled
				? ((this.toggleButton.disabled = !0),
				  g.addClass(this.toggleButton, 'pointer-events-none'))
				: ((this.toggleButton.disabled = !1),
				  g.removeClass(this.toggleButton, 'pointer-events-none'))
		}
		_appendToggleButton() {
			this._options.toggleButton &&
				(this._element.insertAdjacentHTML(
					'beforeend',
					Gk(this._options.dateTimepickerToggleIconTemplate, this._classes)
				),
				this._enableOrDisableToggleButton())
		}
		_applyFormatPlaceholder() {
			this._options.showFormat && (this._input.placeholder = this._format)
		}
		_listenToCancelClick() {
			const t = m.findOne(`[${Zk}]`, document.body)
			_.one(t, 'mousedown', () => {
				;(this._cancel = !0), this._scrollBar.reset(), _.off(t, 'mousedown')
			})
		}
		_listenToToggleClick() {
			_.on(this._element, 'click', cS, t => {
				t.preventDefault(), this._openDatePicker()
			})
		}
		_listenToUserInput() {
			_.on(this._input, 'input', t => {
				this._handleInput(t.target.value)
			})
		}
		_disableInput() {
			this._options.disabled && (this._input.disabled = 'true')
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._element)
			return (t = { ...sf, ...e, ...t }), L(Ir, t, _S), t
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...gS, ...e, ...t }), L(Ir, t, mS), t
		}
		_handleInput(t) {
			const e = t.split(', '),
				i = Yk(this._format),
				n = e[0],
				o = e[1] || '',
				r = Kk(n, this._format, i, this._datepicker._options)
			e.length === 2 &&
				(Wk(r) && Fk(o)
					? ((this._dateValue = n),
					  (this._timeValue = o),
					  (this._datepicker._input.value = this._dateValue),
					  (this._datepicker._activeDate = this._dateValue),
					  (this._datepicker._selectedYear = jk(r)),
					  (this._datepicker._selectedMonth = zk(r)),
					  (this._datepicker._headerDate = r),
					  (this._timepicker.input.value = this._timeValue),
					  (this._timepicker._isInvalidTimeFormat = !1))
					: ((this._datepicker._activeDate = new Date()),
					  (this._datepicker._selectedDate = null),
					  (this._datepicker._selectedMonth = null),
					  (this._datepicker._selectedYear = null),
					  (this._datepicker._headerDate = null),
					  (this._datepicker._headerMonth = null),
					  (this._datepicker._headerYear = null),
					  (this._timepicker._isInvalidTimeFormat = !0)))
		}
		_openDatePicker() {
			if (_.trigger(this._element, uS).defaultPrevented) return
			this._datepicker.open(),
				this._options.inline || this._scrollBar.hide(),
				(this._options.inline || this._options.datepicker.inline) &&
					this._openDropdownDate(),
				this._addIconButtons(),
				this._listenToCancelClick(),
				this._options.inline &&
					this._datepicker._isOpen &&
					g.addClass(this.toggleButton, 'pointer-events-none'),
				_.one(this._datepicker._element, tf, () => {
					if (
						((this._dateValue = this._datepicker._input.value),
						this._updateInputValue(),
						this._cancel)
					) {
						this._cancel = !1
						return
					}
					let i = !1
					_.on(this._datepicker.container, 'click', n => {
						;(!this._datepicker._selectedDate && n.target.hasAttribute(Qk)) ||
							i ||
							(this._openTimePicker(),
							(i = !0),
							setTimeout(() => {
								i = !1
							}, 500))
					}),
						setTimeout(() => {
							m.findOne(`[${dc}]`, document.body) || this._scrollBar.reset()
						}, 10),
						this._options.inline &&
							g.removeClass(this.toggleButton, 'pointer-events-none')
				})
			const e = m.findOne(aS, document.body)
			_.on(e, 'click', () => {
				this._datepicker.close(),
					this._scrollBar.hide(),
					_.trigger(this._datepicker._element, tf)
			})
		}
		_handleTimepickerDisablePast() {
			const t = new Date()
			t.setHours(0, 0, 0, 0),
				_.on(this._datepicker._element, 'dateChange.te.datepicker', () => {
					this._datepicker._selectedDate.getTime() === t.getTime()
						? this._timepicker.update({ disablePast: !0 })
						: this._timepicker.update({ disablePast: !1 })
				})
		}
		_handleTimepickerDisableFuture() {
			const t = new Date()
			t.setHours(0, 0, 0, 0),
				_.on(this._datepicker._element, 'dateChange.te.datepicker', () => {
					this._datepicker._selectedDate.getTime() === t.getTime()
						? this._timepicker.update({ disableFuture: !0 })
						: this._timepicker.update({ disableFuture: !1 })
				})
		}
		_handleEscapeKey() {
			_.one(document.body, 'keyup', () => {
				setTimeout(() => {
					m.findOne(`[${dc}]`, document.body) || this._scrollBar.reset()
				}, 250)
			})
		}
		_handleCancelButton() {
			const t = m.findOne(`[${Qp}]`, document.body)
			_.one(t, 'mousedown', () => {
				this._scrollBar.reset()
			})
		}
		_openDropdownDate() {
			const t = this._datepicker._popper
			;(t.state.elements.reference = this._input), this._scrollBar.reset()
		}
		_openTimePicker() {
			_.trigger(this._timepicker.elementToggle, 'click'),
				setTimeout(() => {
					if (
						(this._addIconButtons(),
						(this._options.inline || this._options.timepicker.inline) &&
							this._openDropdownTime(),
						this._timepicker._modal)
					) {
						const t = m.findOne(`[${Qp}]`, document.body)
						this._handleEscapeKey(),
							this._handleCancelButton(),
							_.on(this._timepicker._modal, 'click', e => {
								;(e.target.hasAttribute(dc) || e.target.hasAttribute(Jk)) &&
									setTimeout(() => {
										this._scrollBar.reset()
									}, 200),
									e.target.hasAttribute(tS) &&
										_.trigger(this._timepicker._element, ef),
									e.target.hasAttribute(iS) &&
										(_.trigger(t, 'click'),
										setTimeout(() => {
											this._openDatePicker(), this._scrollBar.hide()
										}, 200))
							})
					}
				}),
				_.one(this._timepicker._element, ef, () => {
					;(this._timeValue = this._timepicker.input.value),
						this._updateInputValue(),
						_.trigger(this._element, pS)
				})
		}
		_openDropdownTime() {
			const t = this._timepicker._popper
			;(t.state.elements.reference = this._input),
				t.update(),
				this._scrollBar.reset()
		}
		_setInitialDefaultInput() {
			;(this._options.defaultDate || this._options.defaultTime) &&
				this._updateInputValue()
		}
		_updateInputValue() {
			;(this._timeValue &&
				this._dateValue &&
				((this._input.value = `${this._dateValue}, ${this._timeValue}`),
				_.trigger(this._element, fS, { value: this._input.value })
					.defaultPrevented)) ||
				(_.trigger(this._input, 'focus'),
				this.notch && this.notch.removeAttribute('data-te-input-focused'))
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				let i = O.getData(this, xn)
				const n = typeof t == 'object' && t
				if (
					!(!i && /dispose/.test(t)) &&
					(i || (i = new Dr(this, n)), typeof t == 'string')
				) {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t](e)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, xn)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const Mr = 'sticky',
		Cn = `te.${Mr}`,
		nf = `.${Cn}`,
		bS = `active${nf}`,
		vS = `inactive${nf}`,
		yS = {
			stickyAnimationSticky: '',
			stickyAnimationUnsticky: '',
			stickyBoundary: !1,
			stickyDelay: 0,
			stickyDirection: 'down',
			stickyMedia: 0,
			stickyOffset: 0,
			stickyPosition: 'top',
			stickyZIndex: 100,
		},
		TS = {
			stickyAnimationSticky: 'string',
			stickyAnimationUnsticky: 'string',
			stickyBoundary: '(boolean|string)',
			stickyDelay: 'number',
			stickyDirection: 'string',
			stickyMedia: 'number',
			stickyOffset: 'number',
			stickyPosition: 'string',
			stickyZIndex: '(string|number)',
		},
		ES = { stickyActive: '' },
		xS = { stickyActive: 'string' }
	class Lr {
		constructor(t, e, i) {
			;(this._element = t),
				(this._hiddenElement = null),
				(this._elementPositionStyles = {}),
				(this._scrollDirection = ''),
				(this._isSticked = !1),
				(this._elementOffsetTop = null),
				(this._scrollTop = 0),
				(this._pushPoint = ''),
				(this._manuallyDeactivated = !1),
				this._element &&
					((this._options = this._getConfig(e)),
					(this._classes = this._getClasses(i)),
					O.setData(t, Cn, this),
					this._init())
		}
		static get NAME() {
			return Mr
		}
		dispose() {
			const { stickyAnimationUnsticky: t } = this._options
			let { animationDuration: e } = getComputedStyle(this._element)
			;(e = t !== '' ? parseFloat(e) * 1e3 : 0),
				this._disableSticky(),
				setTimeout(() => {
					O.removeData(this._element, Cn),
						(this._element = null),
						(this._options = null),
						(this._hiddenElement = null),
						(this._elementPositionStyles = null),
						(this._scrollDirection = null),
						(this._isSticked = null),
						(this._elementOffsetTop = null),
						(this._scrollTop = null),
						(this._pushPoint = null),
						(this._manuallyDeactivated = null)
				}, e)
		}
		active() {
			this._isSticked ||
				(this._createHiddenElement(),
				this._enableSticky(),
				this._changeBoundaryPosition(),
				(this._isSticked = !0),
				(this._manuallyDeactivated = !1))
		}
		inactive() {
			this._isSticked &&
				(this._disableSticky(),
				(this._isSticked = !1),
				(this._manuallyDeactivated = !0))
		}
		_init() {
			this._userActivityListener()
		}
		_userActivityListener() {
			_.on(window, 'resize', () => {
				this._updateElementPosition(), this._updateElementOffset()
			}),
				_.on(window, 'scroll', () => {
					if (
						!this._element ||
						window.innerWidth <= this._options.stickyMedia ||
						this._manuallyDeactivated
					)
						return
					const t = document.documentElement,
						{ stickyDirection: e } = this._options,
						i = window.pageYOffset || t.scrollTop
					this._updateElementOffset(),
						this._updatePushPoint(),
						this._updateScrollDirection(i),
						this._clearInProgressAnimations()
					const n = [this._scrollDirection, 'both'].includes(e),
						o = this._pushPoint <= i,
						r = o && !this._isSticked && n,
						a = (!o || !n) && this._isSticked
					r &&
						(this._createHiddenElement(),
						this._enableSticky(),
						this._changeBoundaryPosition(),
						(this._isSticked = !0)),
						a && (this._disableSticky(), (this._isSticked = !1)),
						this._isSticked &&
							(this._updatePosition({ styles: this._elementPositionStyles }),
							this._changeBoundaryPosition()),
						(this._scrollTop = i <= 0 ? 0 : i)
				})
		}
		_updatePushPoint() {
			this._options.stickyPosition === 'top'
				? (this._pushPoint = this._elementOffsetTop - this._options.stickyDelay)
				: (this._pushPoint =
						this._elementOffsetTop +
						this._element.height -
						document.body.scrollHeight +
						this._options.stickyDelay)
		}
		_updateElementOffset() {
			this._hiddenElement
				? (this._elementOffsetTop = this._hiddenElement.offsetTop)
				: (this._elementOffsetTop = this._element.offsetTop),
				this._options.stickyAnimationUnsticky &&
					(this._elementOffsetTop += this._element.height || 0)
		}
		_updateElementPosition() {
			if (this._hiddenElement) {
				const { left: t } = this._hiddenElement.getBoundingClientRect()
				this._elementPositionStyles = { left: `${t}px` }
			} else this._elementPositionStyles = {}
			this._setStyle(this._element, this._elementPositionStyles)
		}
		_updateScrollDirection(t) {
			t > this._scrollTop
				? (this._scrollDirection = 'down')
				: (this._scrollDirection = 'up')
		}
		_clearInProgressAnimations() {
			const t = this._scrollDirection === 'up',
				e = this._element.classList.contains(
					this._options.stickyAnimationUnsticky
				),
				i = window.scrollY <= this._elementOffsetTop - this._element.height
			t &&
				e &&
				i &&
				(this._removeUnstickyAnimation(),
				this._resetStyles(),
				this._removeHiddenElement())
		}
		_enableSticky() {
			const {
					stickyAnimationSticky: t,
					stickyAnimationUnsticky: e,
					stickyOffset: i,
					stickyPosition: n,
					stickyZIndex: o,
				} = this._options,
				{ height: r, left: a, width: l } = this._element.getBoundingClientRect()
			t !== '' && this._toggleClass(t, e, this._element),
				this._toggleClass(this._classes.stickyActive, '', this._element),
				this._setStyle(this._element, {
					top: n === 'top' && `${0 + i}px`,
					bottom: n === 'bottom' && `${0 + i}px`,
					height: `${r}px`,
					width: `${l}px`,
					left: `${a}px`,
					zIndex: `${o}`,
					position: 'fixed',
				}),
				(this._hiddenElement.hidden = !1),
				_.trigger(this._element, bS)
		}
		_changeBoundaryPosition() {
			const {
					stickyPosition: t,
					stickyBoundary: e,
					stickyOffset: i,
				} = this._options,
				{ height: n } = this._element.getBoundingClientRect(),
				o = {
					height: this._element.parentElement.getBoundingClientRect().height,
					...this._getOffset(this._element.parentElement),
				}
			let r
			const a = m.findOne(e)
			a ? (r = this._getOffset(a).top - n - i) : (r = o.height + o[t] - n - i)
			const l = t === 'top',
				c = t === 'bottom',
				h = e,
				d = r < 0,
				u = r > o.height - n
			let p
			l && (d && h ? (p = { top: `${i + r}px` }) : (p = { top: `${i + 0}px` })),
				c &&
					(d && h
						? (p = { bottom: `${i + r}px` })
						: u && h
						? (p = { bottom: `${i + o.bottom}px` })
						: (p = { bottom: `${i + 0}px` })),
				this._setStyle(this._element, p)
		}
		_disableSticky() {
			const { stickyAnimationUnsticky: t, stickyAnimationSticky: e } =
				this._options
			let { animationDuration: i } = getComputedStyle(this._element)
			;(i = t !== '' ? parseFloat(i) * 1e3 : 0),
				this._options.stickyAnimationUnsticky !== '' &&
					this._toggleClass(t, e, this._element),
				setTimeout(() => {
					this._element.classList.contains(e) ||
						(this._removeUnstickyAnimation(),
						this._resetStyles(),
						this._removeHiddenElement(),
						this._toggleClass('', this._classes.stickyActive, this._element),
						_.trigger(this._element, vS))
				}, i)
		}
		_createHiddenElement() {
			this._hiddenElement ||
				(this._hiddenElement = this._copyElement(this._element))
		}
		_removeHiddenElement() {
			this._hiddenElement &&
				(this._hiddenElement.remove(), (this._hiddenElement = null))
		}
		_removeUnstickyAnimation() {
			this._toggleClass(
				'',
				this._options.stickyAnimationUnsticky,
				this._element
			)
		}
		_resetStyles() {
			this._setStyle(this._element, {
				top: null,
				bottom: null,
				position: null,
				left: null,
				zIndex: null,
				width: null,
				height: null,
			})
		}
		_updatePosition({ styles: t }) {
			this._setStyle(this._element, t)
		}
		_toggleClass(t, e, i) {
			t && g.addClass(i, t), e && g.removeClass(i, e)
		}
		_getOffset(t) {
			const e = g.offset(t),
				i = t.getBoundingClientRect(),
				n = e.left === 0 && e.top === 0 ? 0 : window.innerHeight - i.bottom
			return { ...e, bottom: n }
		}
		_copyElement(t) {
			const { height: e, width: i } = t.getBoundingClientRect(),
				n = t.cloneNode(!1)
			return (
				(n.hidden = !0),
				this._setStyle(n, { height: `${e}px`, width: `${i}px`, opacity: '0' }),
				t.parentElement.insertBefore(n, t),
				n
			)
		}
		_getConfig(t = {}) {
			const e = g.getDataAttributes(this._element)
			return (t = { ...yS, ...e, ...t }), L(Mr, t, TS), t
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...ES, ...e, ...t }), L(Mr, t, xS), t
		}
		_setStyle(t, e) {
			Object.keys(e).forEach(i => {
				t.style[i] = e[i]
			})
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				let i = O.getData(this, Cn)
				const n = typeof t == 'object' && t
				if (
					!(!i && /dispose|hide/.test(t)) &&
					(i || (i = new Lr(this, n)), typeof t == 'string')
				) {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t](e)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, Cn)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const CS = 'data-te-autocomplete-dropdown-ref',
		AS = 'data-te-autocomplete-items-list-ref',
		wS = 'data-te-autocomplete-item-ref',
		kS = 'data-te-autocomplete-loader-ref'
	function SS(s, t) {
		const { id: e, items: i, width: n, options: o } = s,
			r = $('div')
		g.addClass(r, t.dropdownContainer),
			g.addStyle(r, { width: `${n}px` }),
			r.setAttribute('id', e)
		const a = $('div')
		a.setAttribute(CS, ''), g.addClass(a, t.dropdown)
		const l = $('ul'),
			c = o.listHeight
		l.setAttribute(AS, ''),
			g.addClass(l, t.autocompleteList),
			g.addClass(l, t.scrollbar),
			g.addStyle(l, { maxHeight: `${c}px` }),
			l.setAttribute('role', 'listbox')
		const h = of(i, o)
		return (l.innerHTML = h), a.appendChild(l), r.appendChild(a), r
	}
	function of(s = [], t, e) {
		const i = t.displayValue,
			n = t.itemContent
		return `
    ${s
			.map((o, r) => {
				const a = typeof n == 'function' ? To(n(o), Pd, null) : i(o)
				return `<li data-te-index="${r}" role="option" class="${e}" ${wS} >${a}</li>`
			})
			.join('')}
  `
	}
	function OS(s) {
		const t = $('div')
		t.setAttribute(kS, ''),
			g.addClass(t, s.autocompleteLoader),
			g.addClass(t, s.spinnerIcon),
			t.setAttribute('role', 'status')
		const e =
			'<span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">Loading...</span>'
		return (t.innerHTML = e), t
	}
	function IS(s, t) {
		return `<li class="${t.autocompleteItem}">${s}</li>`
	}
	const uc = 'autocomplete',
		An = 'te.autocomplete',
		xs = 'data-te-input-state-active',
		pc = 'data-te-autocomplete-item-active',
		rf = 'data-te-input-focused',
		af = 'data-te-autocomplete-state-open',
		DS = 'data-te-autocomplete-custom-content-ref',
		MS = '[data-te-autocomplete-dropdown-ref]',
		$r = '[data-te-autocomplete-items-list-ref]',
		lf = '[data-te-autocomplete-item-ref]',
		LS = '[data-te-autocomplete-loader-ref]',
		$S = `[${DS}]`,
		RS = '[data-te-input-notch-ref]',
		Rr = `.${An}`,
		PS = `close${Rr}`,
		NS = `open${Rr}`,
		cf = `itemSelect${Rr}`,
		BS = `update${Rr}`,
		HS = {
			autoSelect: !1,
			container: 'body',
			customContent: '',
			debounce: 300,
			displayValue: s => s,
			filter: null,
			itemContent: null,
			listHeight: 190,
			loaderCloseDelay: 300,
			noResults: 'No results found',
			threshold: 0,
		},
		VS = {
			autoSelect: 'boolean',
			container: 'string',
			customContent: 'string',
			debounce: 'number',
			displayValue: 'function',
			filter: '(null|function)',
			itemContent: '(null|function)',
			listHeight: 'number',
			loaderCloseDelay: 'number',
			noResults: 'string',
			threshold: 'number',
		},
		FS = {
			autocompleteItem:
				'flex flex-row items-center justify-between w-full px-4 py-[0.4375rem] truncate text-gray-700 bg-transparent select-none cursor-pointer hover:[&:not([data-te-autocomplete-option-disabled])]:bg-black/5 data-[te-autocomplete-item-active]:bg-black/5 data-[data-te-autocomplete-option-disabled]:text-gray-400 data-[data-te-autocomplete-option-disabled]:cursor-default dark:text-gray-700 dark:hover:[&:not([data-te-autocomplete-option-disabled])]:bg-white/30 dark:data-[te-autocomplete-item-active]:bg-white/30',
			autocompleteList: 'list-none m-0 p-0 overflow-y-auto',
			autocompleteLoader:
				'absolute right-1 top-2 w-[1.4rem] h-[1.4rem] border-[0.15em]',
			dropdown:
				'relative outline-none min-w-[100px] m-0 scale-y-[0.8] opacity-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none data-[te-autocomplete-state-open]:scale-y-100 data-[te-autocomplete-state-open]:opacity-100 dark:bg-white',
			dropdownContainer: 'z-[1070]',
			scrollbar:
				'[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded',
			spinnerIcon:
				'inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
		},
		WS = {
			autocompleteItem: 'string',
			autocompleteList: 'string',
			autocompleteLoader: 'string',
			dropdown: 'string',
			dropdownContainer: 'string',
			scrollbar: 'string',
			spinnerIcon: 'string',
		}
	class Pr {
		constructor(t, e, i) {
			;(this._element = t),
				(this._options = this._getConfig(e)),
				(this._classes = this._getClasses(i)),
				this._getContainer(),
				(this._input = m.findOne('input', t)),
				(this._notch = m.findOne(RS, t)),
				(this._customContent = m.findOne($S, t)),
				(this._loader = OS(this._classes)),
				(this._popper = null),
				(this._debounceTimeoutId = null),
				(this._loaderTimeout = null),
				(this._activeItemIndex = -1),
				(this._activeItem = null),
				(this._filteredResults = null),
				(this._lastQueryValue = null),
				(this._canOpenOnFocus = !0),
				(this._isOpen = !1),
				(this._outsideClickHandler = this._handleOutsideClick.bind(this)),
				(this._inputFocusHandler = this._handleInputFocus.bind(this)),
				(this._userInputHandler = this._handleUserInput.bind(this)),
				(this._keydownHandler = this._handleKeydown.bind(this)),
				t && O.setData(t, An, this),
				this._init()
		}
		static get NAME() {
			return uc
		}
		get filter() {
			return this._options.filter
		}
		get dropdown() {
			return m.findOne(MS, this._dropdownContainer)
		}
		get items() {
			return m.find(lf, this._dropdownContainer)
		}
		get itemsList() {
			return m.findOne($r, this._dropdownContainer)
		}
		initSearch(t) {
			this._filterResults(t)
		}
		_getContainer() {
			this._container = m.findOne(this._options.container)
		}
		_getConfig(t) {
			const e = g.getDataAttributes(this._element)
			return (t = { ...HS, ...e, ...t }), L(uc, t, VS), t
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...FS, ...e, ...t }), L(uc, t, WS), t
		}
		_init() {
			this._initDropdown(),
				this._updateInputState(),
				this._setInputAriaAttributes(),
				this._listenToInputFocus(),
				this._listenToUserInput(),
				this._listenToKeydown()
		}
		_initDropdown() {
			this._dropdownContainerId = this._element.id
				? `autocomplete-dropdown-${this._element.id}`
				: bt('autocomplete-dropdown-')
			const t = {
				id: this._dropdownContainerId,
				items: [],
				width: this._input.offsetWidth,
				options: this._options,
			}
			if (
				((this._dropdownContainer = SS(t, this._classes)),
				this._options.customContent !== '')
			) {
				const e = this._options.customContent,
					i = To(e, Pd, null)
				this.dropdown.insertAdjacentHTML('beforeend', i)
			}
		}
		_setInputAriaAttributes() {
			this._input.setAttribute('role', 'combobox'),
				this._input.setAttribute('aria-expanded', !1),
				this._input.setAttribute('aria-owns', this._dropdownContainerId),
				this._input.setAttribute('aria-haspopup', !0),
				this._input.setAttribute('autocomplete', 'off')
		}
		_updateInputState() {
			var t, e
			this._input.value !== '' || this._isOpen
				? (this._input.setAttribute(xs, ''),
				  (t = this._notch) == null || t.setAttribute(xs, ''))
				: (this._input.removeAttribute(xs),
				  (e = this._notch) == null || e.removeAttribute(xs))
		}
		_listenToInputFocus() {
			_.on(this._input, 'focus', this._inputFocusHandler)
		}
		_handleInputFocus(t) {
			const { value: e } = t.target,
				i = this._options.threshold
			if (!this._canOpenOnFocus) {
				this._canOpenOnFocus = !0
				return
			}
			e.length < i ||
				(this._lastQueryValue !== e ? this._filterResults(e) : this.open())
		}
		_listenToWindowResize() {
			_.on(window, 'resize', this._handleWindowResize.bind(this))
		}
		_handleWindowResize() {
			this._dropdownContainer && this._updateDropdownWidth()
		}
		_updateDropdownWidth() {
			const t = this._input.offsetWidth
			g.addStyle(this._dropdownContainer, { width: `${t}px` })
		}
		_listenToUserInput() {
			_.on(this._input, 'input', this._userInputHandler)
		}
		_handleUserInput(t) {
			const { value: e } = t.target,
				i = this._options.threshold,
				n = this._options.debounce
			if (this.filter) {
				if (e.length < i) {
					this._isOpen && this.close()
					return
				}
				this._debounceFilter(e, n)
			}
		}
		_debounceFilter(t, e) {
			this._debounceTimeoutId && clearTimeout(this._debounceTimeoutId),
				(this._debounceTimeoutId = setTimeout(() => {
					this._filterResults(t)
				}, e))
		}
		_filterResults(t) {
			this._lastQueryValue = t
			const e = this.filter(t)
			this._isPromise(e) ? this._asyncUpdateResults(e) : this._updateResults(e)
		}
		_isPromise(t) {
			return !!t && typeof t.then == 'function'
		}
		_asyncUpdateResults(t) {
			this._resetActiveItem(),
				this._showLoader(),
				t.then(e => {
					this._updateResults(e),
						(this._loaderTimeout = setTimeout(() => {
							this._hideLoader(), (this._loaderTimeout = null)
						}, this._options.loaderCloseDelay))
				})
		}
		_resetActiveItem() {
			const t = this._activeItem
			t &&
				(t.removeAttribute(pc),
				(this._activeItem = null),
				(this._activeItemIndex = -1))
		}
		_showLoader() {
			this._element.appendChild(this._loader)
		}
		_hideLoader() {
			m.findOne(LS, this._element) && this._element.removeChild(this._loader)
		}
		_updateResults(t) {
			this._resetActiveItem(),
				(this._filteredResults = t),
				_.trigger(this._element, BS, { results: t })
			const e = m.findOne($r, this._dropdownContainer),
				i = of(t, this._options, this._classes.autocompleteItem),
				n = IS(this._options.noResults, this._classes)
			t.length === 0 && this._options.noResults !== ''
				? (e.innerHTML = n)
				: (e.innerHTML = i),
				this._isOpen || this.open(),
				this._popper && this._popper.forceUpdate()
		}
		_listenToKeydown() {
			_.on(this._element, 'keydown', this._keydownHandler)
		}
		_handleKeydown(t) {
			this._isOpen ? this._handleOpenKeydown(t) : this._handleClosedKeydown(t)
		}
		_handleOpenKeydown(t) {
			const e = t.keyCode
			if (
				(e === Ci && this._options.autoSelect && this._selectActiveItem(),
				e === xi || (e === ut && t.altKey))
			) {
				this.close(), this._input.focus()
				return
			}
			if (e === xi || (e === ut && t.altKey) || e === Ci) {
				this.close(), this._input.focus()
				return
			}
			switch (e) {
				case ht:
					this._setActiveItem(this._activeItemIndex + 1),
						this._scrollToItem(this._activeItem)
					break
				case ut:
					this._setActiveItem(this._activeItemIndex - 1),
						this._scrollToItem(this._activeItem)
					break
				case Ti:
					this._activeItemIndex > -1
						? (this._setActiveItem(0), this._scrollToItem(this._activeItem))
						: this._input.setSelectionRange(0, 0)
					break
				case Ei:
					if (this._activeItemIndex > -1)
						this._setActiveItem(this.items.length - 1),
							this._scrollToItem(this._activeItem)
					else {
						const n = this._input.value.length
						this._input.setSelectionRange(n, n)
					}
					break
				case Et:
					if ((t.preventDefault(), this._activeItemIndex > -1)) {
						const n = this._filteredResults[this._activeItemIndex]
						this._handleSelection(n)
					}
					return
				default:
					return
			}
			t.preventDefault()
		}
		_setActiveItem(t) {
			const e = this.items
			e[t] && this._updateActiveItem(e[t], t)
		}
		_updateActiveItem(t, e) {
			const i = this._activeItem
			i && i.removeAttribute(pc),
				t.setAttribute(pc, ''),
				(this._activeItemIndex = e),
				(this._activeItem = t)
		}
		_scrollToItem(t) {
			if (!t) return
			const e = this.itemsList,
				i = e.offsetHeight,
				n = this.items.indexOf(t),
				o = t.offsetHeight,
				r = e.scrollTop
			if (n > -1) {
				const a = n * o,
					l = a + o > r + i
				a < r
					? (e.scrollTop = a)
					: l
					? (e.scrollTop = a - i + o)
					: (e.scrollTop = r)
			}
		}
		_handleClosedKeydown(t) {
			t.key === 'Enter' && t.preventDefault()
			const e = t.keyCode
			;(e === Et || e === ht || e === ht) && this.open()
		}
		open() {
			this._lastQueryValue === null && this._filterResults('')
			const t = _.trigger(this._element, NS)
			this._isOpen ||
				t.defaultPrevented ||
				(this._updateDropdownWidth(),
				this._listenToWindowResize(),
				(this._popper = Fe(this._element, this._dropdownContainer, {
					modifiers: [{ name: 'offset', options: { offset: [0, 1] } }],
				})),
				this._container.appendChild(this._dropdownContainer),
				this._listenToOutsideClick(),
				this._listenToItemsClick(),
				setTimeout(() => {
					this.dropdown.setAttribute(af, ''),
						(this._isOpen = !0),
						this._setInputActiveStyles(),
						this._updateInputState()
				}, 0))
		}
		_listenToOutsideClick() {
			_.on(document, 'click', this._outsideClickHandler)
		}
		_handleOutsideClick(t) {
			const e = this._input === t.target,
				i = t.target === this._dropdownContainer,
				n =
					this._dropdownContainer && this._dropdownContainer.contains(t.target)
			!e && !i && !n && this.close()
		}
		_listenToItemsClick() {
			const t = m.findOne($r, this._dropdownContainer)
			_.on(t, 'click', this._handleItemsClick.bind(this))
		}
		_handleItemsClick(t) {
			const e = m.closest(t.target, lf),
				i = g.getDataAttribute(e, 'index'),
				n = this._filteredResults[i]
			this._handleSelection(n)
		}
		_selectActiveItem() {
			const t = this._filteredResults[this._activeItemIndex]
			if (!t) return
			const e = this._options.displayValue(t)
			_.trigger(this._element, cf, { value: t }).defaultPrevented ||
				setTimeout(() => {
					;(this._canOpenOnFocus = !1),
						this._updateInputValue(e),
						this._updateInputState()
				}, 0)
		}
		_handleSelection(t) {
			const e = this._options.displayValue(t),
				i = _.trigger(this._element, cf, { value: t })
			t !== void 0 &&
				(i.defaultPrevented ||
					setTimeout(() => {
						;(this._canOpenOnFocus = !1),
							this._updateInputValue(e),
							this._updateInputState(),
							this._input.focus(),
							this.close()
					}, 0))
		}
		_updateInputValue(t) {
			this._input.value = t
		}
		_setInputActiveStyles() {
			this._input.setAttribute(rf, '')
		}
		close() {
			var e
			const t = _.trigger(this._element, PS)
			!this._isOpen ||
				t.defaultPrevented ||
				(this._resetActiveItem(),
				this._removeDropdownEvents(),
				this.dropdown.removeAttribute(af),
				_.on(
					this.dropdown,
					'transitionend',
					this._handleDropdownTransitionEnd.bind(this)
				),
				this._input.removeAttribute(rf),
				this._input.value ||
					(this._input.removeAttribute(xs),
					(e = this._notch) == null || e.removeAttribute(xs)))
		}
		_removeDropdownEvents() {
			const t = m.findOne($r, this._dropdownContainer)
			_.off(t, 'click'),
				_.off(document, 'click', this._outsideClickHandler),
				_.off(window, 'resize', this._handleWindowResize.bind(this))
		}
		_handleDropdownTransitionEnd(t) {
			this._isOpen &&
				t &&
				t.propertyName === 'opacity' &&
				(this._popper.destroy(),
				this._dropdownContainer &&
					this._container.removeChild(this._dropdownContainer),
				(this._isOpen = !1),
				_.off(this.dropdown, 'transitionend'),
				(this._canOpenOnFocus = !0))
		}
		dispose() {
			this._isOpen && this.close(),
				this._removeInputAndElementEvents(),
				this._dropdownContainer.remove(),
				O.removeData(this._element, An)
		}
		_removeInputAndElementEvents() {
			_.off(this._input, 'focus', this._inputFocusHandler),
				_.off(this._input, 'input', this._userInputHandler),
				_.off(this._element, 'keydown', this._keydownHandler)
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				let i = O.getData(this, An)
				const n = typeof t == 'object' && t
				if (
					!(!i && /dispose/.test(t)) &&
					(i || (i = new Pr(this, n)), typeof t == 'string')
				) {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t](e)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, An)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const zS = (s, t) => `<div class="${s.connectContainer}" ${t}>
  <div class="${s.connect}"></div>
  </div>`,
		jS = (s, t) => `<div class="${s.hand}" ${t}>
    <span></span>
  </div>`,
		YS = (s, t) => `
    <span class="${s.tooltip}" ${t}>
      <span class="${s.tooltipValue}"></span>
    </span>
    `,
		Si = s => (s.type === 'touchmove' ? s.touches[0].clientX : s.clientX),
		Nr = 'multiRangeSlider',
		Br = `te.${Nr}`,
		hf = `valueChanged${`.${Br}`}`,
		Oi = 'data-te-active',
		df = 'data-te-multi-range-slider-hand-ref',
		uf = 'data-te-multi-range-slider-connect-ref',
		pf = 'data-te-multi-range-slider-tooltip-ref',
		KS = {
			max: 'number',
			min: 'number',
			numberOfRanges: 'number',
			startValues: '(array|string)',
			step: '(string|null|number)',
			tooltip: 'boolean',
		},
		US = {
			max: 100,
			min: 0,
			numberOfRanges: 2,
			startValues: [0, 100],
			step: null,
			tooltip: !1,
		},
		XS = {
			connect:
				'z-10 h-full w-full bg-[#eee] will-change-transform dark:bg-[#4f4f4f]',
			connectContainer:
				'relative border-[1px] border-[#eee] z-0 h-full w-full overflow-hidden dark:border-[#4f4f4f]',
			container:
				'apperance-none relative m-auto w-full cursor-pointer h-1 border-0 bg-transparent p-0 focus:outline-none dark:border-[#4f4f4f]',
			hand: 'apperance-none absolute top-[50%] border-0 -mt-1 h-4 w-4 cursor-pointer rounded-[50%] border-0 bg-primary transition-colors ease-in-out will-change-transform active:bg-[#c4d4ef] active:z-60',
			tooltip:
				'absolute -top-[18px] origin-[50%_50%] -translate-x-[6px] -rotate-45 scale-0 rounded-bl-none rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-primary text-white transition-all duration-[200ms] data-[te-active]:-top-[38px] data-[te-active]:scale-100',
			tooltipValue:
				'block h-[30px] w-[30px] -translate-x-[6px] translate-y-[6px] rotate-45 text-center text-[10px]',
		},
		GS = {
			container: 'string',
			connectContainer: 'string',
			connect: 'string',
			hand: 'string',
			tooltip: 'string',
			tooltipValue: 'string',
		}
	class Hr extends Mt {
		constructor(t, e, i) {
			super(t),
				(this._options = this._getConfig(e)),
				(this._mousemove = !1),
				(this._classes = this._getClasses(i)),
				(this._maxTranslation = null),
				(this._minTranslation = null),
				(this._currentStepValue = null),
				(this._canChangeStep = !1),
				this.init()
		}
		static get NAME() {
			return Nr
		}
		get hands() {
			return m.find(`[${df}]`, this._element)
		}
		get connect() {
			return m.findOne(`[${uf}]`, this._element)
		}
		get leftConnectRect() {
			return this.connect.getBoundingClientRect().left
		}
		get handActive() {
			return m.findOne(`[${Oi}]`)
		}
		get activeTooltipValue() {
			return m.find(`[${pf}]`).filter(n => n.hasAttribute(Oi))[0].children[0]
		}
		init() {
			this._setContainerClasses(),
				this._setRangeConnectsElement(),
				this._setRangeHandleElements(),
				this._setMaxAndMinTranslation(),
				this._setTransofrmationOnStart(),
				this._handleClickEventOnHand(),
				this._handleEndMoveEventDocument(),
				this._handleClickOnRange(),
				this._setTooltipToHand()
		}
		dispose() {
			O.removeData(this._element, Br),
				(this._options = null),
				(this._mousemove = null),
				(this._maxTranslation = null),
				(this._minTranslation = null),
				(this._currentStepValue = null),
				(this._canChangeStep = null),
				this.hands.forEach(t => {
					ct.off(t, 'mousedown touchstart'), ct.off(t, 'mouseup touchend')
				}),
				ct.off(document, 'mousemove touchmove'),
				ct.off(document, 'mouseup touchend'),
				ct.off(this.connect, 'mousedown touchstart')
		}
		_setMaxAndMinTranslation() {
			;(this._maxTranslation =
				this.connect.offsetWidth - this.hands[0].offsetWidth / 2),
				(this._minTranslation =
					this.connect.offsetLeft - this.hands[0].offsetWidth / 2)
		}
		_setTransofrmationOnStart() {
			const { max: t, min: e } = this._options
			let { startValues: i } = this._options
			typeof i == 'string' && (i = JSON.parse(i.replace(/'/g, '"'))),
				i.length === 0
					? this.hands.forEach(n => {
							g.setDataAttribute(
								n,
								'translation',
								Math.round(this._minTranslation)
							),
								g.addStyle(n, {
									transform: `translate(${this._minTranslation}px,-25%)`,
								})
					  })
					: this.hands.forEach((n, o) => {
							if (i[o] > t || i[o] < e) return
							if (i[o] === void 0) {
								g.setDataAttribute(
									n,
									'translation',
									Math.round(this._maxTranslation)
								),
									g.addStyle(n, {
										transform: `translate(${this._maxTranslation}px,-25%)`,
										zIndex: this.hands.length - o,
									})
								return
							}
							const a =
								((i[o] - e) / (t - e)) * this.connect.offsetWidth -
								n.offsetWidth / 2
							g.setDataAttribute(n, 'translation', Math.round(a)),
								g.addStyle(n, {
									transform: `translate(${a}px,-25%)`,
									zIndex: this.hands.length - o,
								})
					  })
		}
		_handleOutOfMaxRangeValue(t, e) {
			this._updateHand(t, this._maxTranslation),
				this._options.tooltip && (this.activeTooltipValue.innerText = e)
		}
		_handleOutOfMinRangeValue(t, e) {
			this._updateHand(t, this._minTranslation),
				this._options.tooltip && (this.activeTooltipValue.innerText = e)
		}
		_handleNormalMove(t, e, i) {
			this._updateHand(t, e),
				this._options.tooltip &&
					(this.activeTooltipValue.innerText = Math.round(i))
		}
		_handleClickEventOnHand() {
			const { max: t, min: e, step: i } = this._options
			this.hands.forEach(n => {
				ct.on(n, 'mousedown touchstart', o => {
					if (
						((this._mousemove = !0),
						n.setAttribute(Oi, ''),
						this._options.tooltip && n.children[1].setAttribute(Oi, ''),
						this._handleMoveEvent(n),
						this._handleEndMoveEvent(n, o),
						!this._canChangeStep && i !== null)
					)
						return
					const r = Si(o) - this.leftConnectRect - n.offsetWidth / 2,
						a =
							((Si(o) - this.leftConnectRect) /
								(this.connect.offsetWidth / (t - e))) %
							(t - e)
					r >= this._maxTranslation
						? this._handleOutOfMaxRangeValue(n, t)
						: r <= this._minTranslation
						? this._handleOutOfMinRangeValue(n, e)
						: this._handleNormalMove(n, r, a)
				})
			})
		}
		_setContainerClasses() {
			g.addClass(this._element, this._classes.container)
		}
		_setRangeConnectsElement() {
			this._element.insertAdjacentHTML(
				'afterbegin',
				zS(
					{
						connectContainer: this._classes.connectContainer,
						connect: this._classes.connect,
					},
					uf
				)
			)
		}
		_setRangeHandleElements() {
			for (let t = 0; t < this._options.numberOfRanges; t++)
				this._element.insertAdjacentHTML(
					'beforeend',
					jS({ hand: this._classes.hand }, df)
				)
			this.hands.forEach((t, e) => {
				t.setAttribute('aria-orientation', 'horizontal'),
					t.setAttribute('role', 'slider'),
					g.setDataAttribute(t, 'handle', e)
			})
		}
		_setTooltipToHand() {
			this._options.tooltip &&
				this.hands.forEach(t =>
					t.insertAdjacentHTML(
						'beforeend',
						YS(
							{
								tooltip: this._classes.tooltip,
								tooltipValue: this._classes.tooltipValue,
							},
							pf
						)
					)
				)
		}
		_handleMoveEvent(t) {
			const { tooltip: e, step: i } = this._options
			ct.on(document, 'mousemove touchmove', n => {
				n.type === 'mousemove' && n.preventDefault()
				const { max: o, min: r, numberOfRanges: a } = this._options
				if (t.hasAttribute(Oi)) {
					const l =
						((Si(n) - this.leftConnectRect) / this.connect.offsetWidth) * o
					let c =
						(((Si(n) - this.leftConnectRect) /
							(this.connect.offsetWidth / (o - r))) %
							(o - r)) +
						r
					if (
						(this._currentStepValue === Math.round(c) ||
							Math.round(c) % i !== 0) &&
						i !== null
					) {
						this._canChangeStep = !1
						return
					}
					this._canChangeStep = !0
					let h = Si(n) - this.leftConnectRect - t.offsetWidth / 2
					const d = g.getDataAttribute(this.handActive, 'handle'),
						u = g.getDataAttribute(this.handActive, 'translation')
					if (c < r) (h = r - t.offsetWidth / 2), (c = r)
					else if (l >= o) return
					const p = this.hands.map(f => g.getDataAttribute(f, 'translation'))
					if (a < 2)
						Math.round(c) % i === 0 && i !== null
							? ((this._currentStepValue = Math.round(c)),
							  g.addStyle(t, { transform: `translate(${h}px,-25%)` }),
							  e && (this.activeTooltipValue.innerText = Math.round(c)))
							: i === null &&
							  (g.addStyle(t, { transform: `translate(${h}px,-25%)` }),
							  e && (this.activeTooltipValue.innerText = Math.round(c))),
							g.setDataAttribute(t, 'translation', h)
					else {
						const f = d > 0 && d < a - 1
						let b = h,
							v = !1
						const y = p[d + 1],
							T = p[d - 1]
						d === 0 && u >= y
							? ((b = y), (v = h <= b))
							: d === a - 1 && u <= T
							? ((b = T), (v = h >= b))
							: f &&
							  (u >= y || u <= T) &&
							  ((b = u >= y ? y : T), (v = b === y ? h <= b : h >= b)),
							Math.round(c) % i === 0 && i !== null
								? ((this._currentStepValue = Math.round(c)),
								  g.addStyle(t, { transform: `translate(${b}px,-25%)` }),
								  e &&
										b === h &&
										this.activeTooltipValue !== null &&
										(this.activeTooltipValue.innerText = Math.round(c)))
								: i === null &&
								  (g.addStyle(t, { transform: `translate(${b}px,-25%)` }),
								  e &&
										b === h &&
										this.activeTooltipValue !== null &&
										(this.activeTooltipValue.innerText = Math.round(c))),
							g.setDataAttribute(t, 'translation', v ? h : b)
					}
					this._canChangeStep && this._handleEventChangeValuesOnRange()
				}
			})
		}
		_handleEventChangeValuesOnRange() {
			const { max: t, min: e, numberOfRanges: i } = this._options,
				n = r => {
					const a =
						r.getBoundingClientRect().left -
						this.leftConnectRect +
						r.offsetWidth / 2
					let l = (a / (this.connect.offsetWidth / (t - e))) % (t - e)
					return (
						a === this.connect.offsetWidth ? (l = t) : (l += e),
						g.setDataAttribute(r, 'value', Math.round(l * 10) / 10),
						{ value: l }
					)
				}
			if (i < 2) {
				const { value: r } = n(this.hands[0])
				_.trigger(this._element, hf, {
					values: { value: r + e, rounded: Math.round(r + e) },
				})
				return
			}
			const o = this.hands.map(r => n(r))
			_.trigger(this._element, hf, {
				values: {
					value: o.map(({ value: r }) => r + e),
					rounded: o.map(({ value: r }) => Math.round(r + e)),
				},
			})
		}
		_resetHandState(t, e) {
			_.off(t, e),
				t.removeAttribute(Oi),
				this._options.tooltip && t.children[1].removeAttribute(Oi)
		}
		_handleEndMoveEventDocument() {
			ct.on(document, 'mouseup touchend', () => {
				this._mousemove &&
					(this.hands.forEach(t => {
						this._resetHandState(t, 'mousemove')
					}),
					ct.off(document, 'mousemove touchmove'),
					(this._mousemove = !1))
			})
		}
		_handleEndMoveEvent(t) {
			ct.on(t, 'mouseup touchend', () => {
				this._resetHandState(t, 'mousemove'),
					ct.off(document, 'mousemove touchmove'),
					(this._mousemove = !1)
			})
		}
		_handleClickOnRange() {
			this._options.step === null &&
				ct.on(this.connect, 'mousedown touchstart', t => {
					const e = []
					let i = 0
					if (
						(this.hands.forEach(n => {
							this._mousemove = !0
							const o = Si(t),
								r = n.offsetWidth,
								a = g.getDataAttribute(n, 'translation'),
								l = o - this.leftConnectRect - r / 2
							this._options.numberOfRanges < 2
								? this._updateHand(n, l)
								: (e.push(Math.abs(l - a)),
								  e.forEach((c, h) => {
										c < e[i] && (i = h)
								  }))
						}),
						this._options.numberOfRanges >= 2)
					) {
						const n =
							Si(t) - this.leftConnectRect - this.hands[i].offsetWidth / 2
						this._updateAdjacentHands(i, n)
					}
					this._handleEventChangeValuesOnRange()
				})
		}
		_updateHand(t, e) {
			g.addStyle(t, { transform: `translate(${e}px,-25%)` }),
				g.setDataAttribute(t, 'translation', e)
		}
		_updateAdjacentHands(t, e) {
			const i = this.hands[t + 1],
				n = this.hands[t - 1],
				o = i ? g.getDataAttribute(i, 'translation') : void 0,
				r = n ? g.getDataAttribute(n, 'translation') : void 0
			i && e > o
				? this._updateHand(i, e)
				: n && e < r
				? this._updateHand(n, e)
				: this._updateHand(this.hands[t], e)
		}
		_getConfig(t) {
			const e = { ...US, ...g.getDataAttributes(this._element), ...t }
			return L(Nr, e, KS), e
		}
		_getClasses(t) {
			const e = g.getDataClassAttributes(this._element)
			return (t = { ...XS, ...e, ...t }), L(Nr, t, GS), t
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				let i = O.getData(this, Br)
				const n = typeof t == 'object' && t
				if (
					!(!i && /dispose|hide/.test(t)) &&
					(i || (i = new Hr(this, n)), typeof t == 'string')
				) {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t](e)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, Br)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	const qS = s => {
			ph(() => {
				const t = uh()
				if (t) {
					const e = s.NAME,
						i = t.fn[e]
					;(t.fn[e] = s.jQueryInterface),
						(t.fn[e].Constructor = s),
						(t.fn[e].noConflict = () => ((t.fn[e] = i), s.jQueryInterface))
				}
			})
		},
		ZS = (s, t) => {
			_.on(document, `click.te.${s.NAME}`, t, function (e) {
				e.preventDefault(), s.getOrCreateInstance(this).toggle()
			})
		},
		QS = (s, t) => {
			_.on(document, `click.te.${s.NAME}.data-api`, t, function (e) {
				if (
					(['A', 'AREA'].includes(this.tagName) && e.preventDefault(), ci(this))
				)
					return
				s.getOrCreateInstance(this).show()
			})
		},
		JS = (s, t) => {
			_.on(document, `click.te.${s.NAME}.data-api`, t, function (e) {
				const i = Ne(this)
				if (
					(['A', 'AREA'].includes(this.tagName) && e.preventDefault(), ci(this))
				)
					return
				_.one(i, s.EVENT_HIDDEN, () => {
					ae(this) && this.focus()
				})
				const n = m.findOne(s.OPEN_SELECTOR)
				n && n !== i && s.getInstance(n).hide(),
					s.getOrCreateInstance(i).toggle(this)
			})
		},
		tO = (s, t) => {
			_.on(document, `click.te.${s.NAME}`, t, e => {
				e.preventDefault()
				const i = e.target.closest(t)
				s.getOrCreateInstance(i).toggle()
			})
		},
		eO = (s, t) => {
			_.on(document, `click.te.${s.NAME}`, t, function (e) {
				const i = Ne(this)
				;['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
					_.one(i, s.EVENT_SHOW, r => {
						r.defaultPrevented ||
							_.one(i, s.EVENT_HIDDEN, () => {
								ae(this) && this.focus()
							})
					})
				const n = m.findOne(`[${s.OPEN_SELECTOR}="true"]`)
				n && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this)
			})
		},
		iO = (s, t) => {
			_.one(document, 'mousedown', t, s.autoInitial(new s()))
		},
		sO = (s, t) => {
			_.on(document, `click.te.${s.NAME}.data-api`, t, function (e) {
				;(e.target.tagName === 'A' ||
					(e.delegateTarget && e.delegateTarget.tagName === 'A')) &&
					e.preventDefault()
				const i = Ca(this)
				m.find(i).forEach(o => {
					s.getOrCreateInstance(o, { toggle: !1 }).toggle()
				})
			})
		},
		nO = (s, t) => {
			;[].slice.call(document.querySelectorAll(t)).map(function (i) {
				return new s(i)
			})
		},
		oO = (s, t) => {
			;[].slice.call(document.querySelectorAll(t)).map(function (i) {
				return new s(i)
			})
		},
		rO = (s, t) => {
			m.find(t).forEach(e => {
				new s(e)
			}),
				_.on(
					document,
					`click.te.${s.NAME}.data-api`,
					`${t} img:not([data-te-lightbox-disabled])`,
					s.toggle()
				)
		},
		aO = (s, t) => {
			const e = o =>
					(o[0] === '{' && o[o.length - 1] === '}') ||
					(o[0] === '[' && o[o.length - 1] === ']'),
				i = o =>
					typeof o != 'string'
						? o
						: e(o)
						? JSON.parse(o.replace(/'/g, '"'))
						: o,
				n = o => {
					const r = {}
					return (
						Object.keys(o).forEach(a => {
							if (a.match(/dataset.*/)) {
								const l = a.slice(7, 8).toLowerCase().concat(a.slice(8))
								r[l] = i(o[a])
							}
						}),
						r
					)
				}
			m.find(t).forEach(o => {
				if (
					g.getDataAttribute(o, 'chart') !== 'bubble' &&
					g.getDataAttribute(o, 'chart') !== 'scatter'
				) {
					const r = g.getDataAttributes(o),
						a = { data: { datasets: [n(r)] } }
					return (
						r.chart && (a.type = r.chart),
						r.labels &&
							(a.data.labels = JSON.parse(r.labels.replace(/'/g, '"'))),
						new s(o, { ...a, ...ln[a.type] })
					)
				}
				return null
			})
		}
	class lO {
		constructor() {
			this.inits = []
		}
		get initialized() {
			return this.inits
		}
		isInited(t) {
			return this.inits.includes(t)
		}
		add(t) {
			this.isInited(t) || this.inits.push(t)
		}
	}
	const fc = new lO(),
		wn = {
			alert: { name: 'Alert', selector: '[data-te-alert-init]', isToggler: !1 },
			animation: {
				name: 'Animate',
				selector: '[data-te-animation-init]',
				isToggler: !1,
			},
			carousel: {
				name: 'Carousel',
				selector: '[data-te-carousel-init]',
				isToggler: !1,
			},
			chips: {
				name: 'ChipsInput',
				selector: '[data-te-chips-input-init]',
				isToggler: !1,
			},
			chip: {
				name: 'Chip',
				selector: '[data-te-chip-init]',
				isToggler: !1,
				onInit: 'init',
			},
			datepicker: {
				name: 'Datepicker',
				selector: '[data-te-datepicker-init]',
				isToggler: !1,
			},
			datetimepicker: {
				name: 'Datetimepicker',
				selector: '[data-te-date-timepicker-init]',
				isToggler: !1,
			},
			input: {
				name: 'Input',
				selector: '[data-te-input-wrapper-init]',
				isToggler: !1,
			},
			perfectScrollbar: {
				name: 'PerfectScrollbar',
				selector: '[data-te-perfect-scrollbar-init]',
				isToggler: !1,
			},
			rating: {
				name: 'Rating',
				selector: '[data-te-rating-init]',
				isToggler: !1,
			},
			scrollspy: {
				name: 'ScrollSpy',
				selector: "[data-te-spy='scroll']",
				isToggler: !1,
			},
			select: {
				name: 'Select',
				selector: '[data-te-select-init]',
				isToggler: !1,
			},
			sidenav: {
				name: 'Sidenav',
				selector: '[data-te-sidenav-init]',
				isToggler: !1,
			},
			stepper: {
				name: 'Stepper',
				selector: '[data-te-stepper-init]',
				isToggler: !1,
			},
			timepicker: {
				name: 'Timepicker',
				selector: '[data-te-timepicker-init]',
				isToggler: !1,
			},
			toast: { name: 'Toast', selector: '[data-te-toast-init]', isToggler: !1 },
			datatable: { name: 'Datatable', selector: '[data-te-datatable-init]' },
			popconfirm: {
				name: 'Popconfirm',
				selector: "[data-te-toggle='popconfirm']",
			},
			validation: { name: 'Validation', selector: '[data-te-validation-init]' },
			smoothScroll: {
				name: 'SmoothScroll',
				selector: 'a[data-te-smooth-scroll-init]',
			},
			lazyLoad: { name: 'LazyLoad', selector: '[data-te-lazy-load-init]' },
			clipboard: { name: 'Clipboard', selector: '[data-te-clipboard-init]' },
			infiniteScroll: {
				name: 'InfiniteScroll',
				selector: '[data-te-infinite-scroll-init]',
			},
			loadingManagement: {
				name: 'LoadingManagement',
				selector: '[data-te-loading-management-init]',
			},
			sticky: { name: 'Sticky', selector: '[data-te-sticky-init]' },
			multiRangeSlider: {
				name: 'MultiRangeSlider',
				selector: '[data-te-multi-range-slider-init]',
			},
			chart: {
				name: 'Chart',
				selector: '[data-te-chart]',
				isToggler: !1,
				advanced: aO,
			},
			button: {
				name: 'Button',
				selector: "[data-te-toggle='button']",
				isToggler: !0,
				callback: tO,
			},
			collapse: {
				name: 'Collapse',
				selector: '[data-te-collapse-init]',
				isToggler: !0,
				callback: sO,
			},
			dropdown: {
				name: 'Dropdown',
				selector: '[data-te-dropdown-toggle-ref]',
				isToggler: !0,
				callback: ZS,
			},
			modal: {
				name: 'Modal',
				selector: "[data-te-toggle='modal']",
				isToggler: !0,
				callback: eO,
			},
			ripple: {
				name: 'Ripple',
				selector: '[data-te-ripple-init]',
				isToggler: !0,
				callback: iO,
			},
			offcanvas: {
				name: 'Offcanvas',
				selector: '[data-te-offcanvas-toggle]',
				isToggler: !0,
				callback: JS,
			},
			tab: {
				name: 'Tab',
				selector:
					"[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
				isToggler: !0,
				callback: QS,
			},
			tooltip: {
				name: 'Tooltip',
				selector: "[data-te-toggle='tooltip']",
				isToggler: !1,
				callback: nO,
			},
			popover: {
				name: 'Popover',
				selector: "[data-te-toggle='popover']",
				isToggler: !0,
				callback: oO,
			},
			lightbox: {
				name: 'Lightbox',
				selector: '[data-te-lightbox-init]',
				isToggler: !0,
				callback: rO,
			},
			touch: { name: 'Touch', selector: '[data-te-touch-init]' },
		},
		cO = s => wn[s.NAME] || null,
		hO = (s, t) => {
			if (!s || (!t.allowReinits && fc.isInited(s.NAME))) return
			fc.add(s.NAME)
			const e = cO(s),
				i = (e == null ? void 0 : e.isToggler) || !1
			if ((qS(s), e != null && e.advanced)) {
				e == null || e.advanced(s, e == null ? void 0 : e.selector)
				return
			}
			if (i) {
				e == null || e.callback(s, e == null ? void 0 : e.selector)
				return
			}
			m.find(e == null ? void 0 : e.selector).forEach(n => {
				let o = s.getInstance(n)
				o || ((o = new s(n)), e != null && e.onInit && o[e.onInit]())
			})
		},
		dO = (s, t) => {
			s.forEach(e => hO(e, t))
		},
		uO = { allowReinits: !1, checkOtherImports: !1 },
		ff = (s, t = {}) => {
			t = { ...uO, ...t }
			const e = Object.keys(wn).map(i => {
				if (!!document.querySelector(wn[i].selector)) {
					const o = s[wn[i].name]
					return (
						!o &&
							!fc.isInited(i) &&
							t.checkOtherImports &&
							console.warn(
								`Please import ${wn[i].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
							),
						o
					)
				}
			})
			dO(e, t)
		},
		_f = 'sidenav',
		Vr = 'te.sidenav',
		pO = 'data-te-sidenav-rotate-icon-ref',
		_c = '[data-te-sidenav-toggle-ref]',
		fO = '[data-te-collapse-init]',
		_O = '[data-te-sidenav-slim="true"]',
		gO = '[data-te-sidenav-slim="false"]',
		mO = '[data-te-sidenav-menu-ref]',
		Cs = '[data-te-sidenav-collapse-ref]',
		kn = '[data-te-sidenav-link-ref]',
		bO = et() ? 100 : -100,
		vO = et() ? -100 : 100,
		yO = {
			sidenavAccordion: '(boolean)',
			sidenavBackdrop: '(boolean)',
			sidenavBackdropClass: '(null|string)',
			sidenavCloseOnEsc: '(boolean)',
			sidenavColor: '(string)',
			sidenavContent: '(null|string)',
			sidenavExpandable: '(boolean)',
			sidenavExpandOnHover: '(boolean)',
			sidenavFocusTrap: '(boolean)',
			sidenavHidden: '(boolean)',
			sidenavMode: '(string)',
			sidenavModeBreakpointOver: '(null|string|number)',
			sidenavModeBreakpointSide: '(null|string|number)',
			sidenavModeBreakpointPush: '(null|string|number)',
			sidenavBreakpointSm: '(number)',
			sidenavBreakpointMd: '(number)',
			sidenavBreakpointLg: '(number)',
			sidenavBreakpointXl: '(number)',
			sidenavBreakpoint2xl: '(number)',
			sidenavScrollContainer: '(null|string)',
			sidenavSlim: '(boolean)',
			sidenavSlimCollapsed: '(boolean)',
			sidenavSlimWidth: '(number)',
			sidenavPosition: '(string)',
			sidenavRight: '(boolean)',
			sidenavTransitionDuration: '(number)',
			sidenavWidth: '(number)',
		},
		TO = {
			sidenavAccordion: !1,
			sidenavBackdrop: !0,
			sidenavBackdropClass: null,
			sidenavCloseOnEsc: !0,
			sidenavColor: 'primary',
			sidenavContent: null,
			sidenavExpandable: !0,
			sidenavExpandOnHover: !1,
			sidenavFocusTrap: !0,
			sidenavHidden: !0,
			sidenavMode: 'over',
			sidenavModeBreakpointOver: null,
			sidenavModeBreakpointSide: null,
			sidenavModeBreakpointPush: null,
			sidenavBreakpointSm: 640,
			sidenavBreakpointMd: 768,
			sidenavBreakpointLg: 1024,
			sidenavBreakpointXl: 1280,
			sidenavBreakpoint2xl: 1536,
			sidenavScrollContainer: null,
			sidenavSlim: !1,
			sidenavSlimCollapsed: !1,
			sidenavSlimWidth: 77,
			sidenavPosition: 'fixed',
			sidenavRight: !1,
			sidenavTransitionDuration: 300,
			sidenavWidth: 240,
		}
	class Ii {
		constructor(t, e = {}) {
			ke(this, '_addBackdropOnInit', () => {
				this._options.sidenavHidden ||
					(this._backdrop.show(),
					_.off(this._element, 'transitionend', this._addBackdropOnInit))
			})
			;(this._element = t),
				(this._options = e),
				(this._ID = bt('')),
				(this._content = null),
				(this._initialContentStyle = null),
				(this._slimCollapsed = !1),
				(this._activeNode = null),
				(this._tempSlim = !1),
				(this._backdrop = this._initializeBackDrop()),
				(this._focusTrap = null),
				(this._perfectScrollbar = null),
				(this._touch = null),
				this._setModeFromBreakpoints(),
				(this.escHandler = i => {
					i.keyCode === xi &&
						this.toggler &&
						ae(this.toggler) &&
						(this._update(!1), _.off(window, 'keydown', this.escHandler))
				}),
				(this.hashHandler = () => {
					this._setActiveElements()
				}),
				t && (O.setData(t, Vr, this), this._setup()),
				this.options.sidenavBackdrop &&
					!this.options.sidenavHidden &&
					this.options.sidenavMode === 'over' &&
					_.on(this._element, 'transitionend', this._addBackdropOnInit),
				(this._didInit = !1),
				this._init()
		}
		static get NAME() {
			return _f
		}
		get container() {
			if (this.options.sidenavPosition === 'fixed') return m.findOne('body')
			const t = e =>
				!e.parentNode || e.parentNode === document
					? e
					: e.parentNode.style.position === 'relative' ||
					  e.parentNode.classList.contains('relative')
					? e.parentNode
					: t(e.parentNode)
			return t(this._element)
		}
		get isVisible() {
			let t = 0,
				e = window.innerWidth
			if (this.options.sidenavPosition !== 'fixed') {
				const n = this.container.getBoundingClientRect()
				;(t = n.x), (e = n.x + n.width)
			}
			const { x: i } = this._element.getBoundingClientRect()
			if (
				(this.options.sidenavRight && !et()) ||
				(!this.options.sidenavRight && et())
			) {
				let n = 0
				if (
					(this.container.scrollHeight > this.container.clientHeight &&
						(n = this.container.offsetWidth - this.container.clientWidth),
					this.container.tagName === 'BODY')
				) {
					const o = document.documentElement.clientWidth
					n = Math.abs(window.innerWidth - o)
				}
				return Math.abs(i + n - e) > 10
			}
			return Math.abs(i - t) < 10
		}
		get links() {
			return m.find(kn, this._element)
		}
		get navigation() {
			return m.find(mO, this._element)
		}
		get options() {
			const t = {
				...TO,
				...g.getDataAttributes(this._element),
				...this._options,
			}
			return L(_f, t, yO), t
		}
		get sidenavStyle() {
			return {
				width: `${this.width}px`,
				height: this.options.sidenavPosition === 'fixed' ? '100vh' : '100%',
				position: this.options.sidenavPosition,
				transition: `all ${this.transitionDuration} linear`,
			}
		}
		get toggler() {
			return m.find(_c).find(e => {
				const i = g.getDataAttribute(e, 'target')
				return m.findOne(i) === this._element
			})
		}
		get transitionDuration() {
			return `${this.options.sidenavTransitionDuration / 1e3}s`
		}
		get translation() {
			return this.options.sidenavRight ? vO : bO
		}
		get width() {
			return this._slimCollapsed
				? this.options.sidenavSlimWidth
				: this.options.sidenavWidth
		}
		get isBackdropVisible() {
			return !!this._backdrop._element
		}
		changeMode(t) {
			this._setMode(t)
		}
		dispose() {
			_.off(window, 'keydown', this.escHandler),
				this.options.sidenavBackdrop && this._backdrop.dispose(),
				_.off(window, 'hashchange', this.hashHandler),
				this._touch.dispose(),
				O.removeData(this._element, Vr),
				(this._element = null)
		}
		hide() {
			this._emitEvents(!1),
				this._update(!1),
				this._options.sidenavBackdrop &&
					this.isBackdropVisible &&
					this._backdrop.hide()
		}
		show() {
			this._emitEvents(!0),
				this._update(!0),
				this._options.sidenavBackdrop &&
					this._options.sidenavMode === 'over' &&
					this._backdrop.show()
		}
		toggle() {
			this._emitEvents(!this.isVisible), this._update(!this.isVisible)
		}
		toggleSlim() {
			this._setSlim(!this._slimCollapsed)
		}
		update(t) {
			;(this._options = t), this._setup()
		}
		getBreakpoint(t) {
			return this._transformBreakpointValuesToObject()[t]
		}
		_init() {
			this._didInit ||
				(_.on(document, 'click', _c, Ii.toggleSidenav()), (this._didInit = !0))
		}
		_transformBreakpointValuesToObject() {
			return {
				sm: this.options.sidenavBreakpointSm,
				md: this.options.sidenavBreakpointMd,
				lg: this.options.sidenavBreakpointLg,
				xl: this.options.sidenavBreakpointXl,
				'2xl': this.options.sidenavBreakpoint2xl,
			}
		}
		_setModeFromBreakpoints() {
			const t = window.innerWidth,
				e = this._transformBreakpointValuesToObject()
			if (t === void 0 || !e) return
			const i =
					typeof this.options.sidenavModeBreakpointOver == 'number'
						? t - this.options.sidenavModeBreakpointOver
						: t - e[this.options.sidenavModeBreakpointOver],
				n =
					typeof this.options.sidenavModeBreakpointSide == 'number'
						? t - this.options.sidenavModeBreakpointSide
						: t - e[this.options.sidenavModeBreakpointSide],
				o =
					typeof this.options.sidenavModeBreakpointPush == 'number'
						? t - this.options.sidenavModeBreakpointPush
						: t - e[this.options.sidenavModeBreakpointPush],
				r = (l, c) => (l - c < 0 ? -1 : c - l < 0 ? 1 : 0),
				a = [i, n, o].filter(l => l != null && l >= 0).sort(r)[0]
			i > 0 && i === a
				? ((this._options.sidenavMode = 'over'),
				  (this._options.sidenavHidden = !0))
				: n > 0 && n === a
				? (this._options.sidenavMode = 'side')
				: o > 0 && o === a && (this._options.sidenavMode = 'push')
		}
		_collapseItems() {
			this.navigation.forEach(t => {
				m.find(Cs, t).forEach(i => {
					ce.getInstance(i).hide()
				})
			})
		}
		_getOffsetValue(t, { index: e, property: i, offsets: n }) {
			const o = this._getPxValue(this._initialContentStyle[e][n[i].property]),
				r = t ? n[i].value : 0
			return o + r
		}
		_getProperty(...t) {
			return t
				.map((e, i) => (i === 0 ? e : e[0].toUpperCase().concat(e.slice(1))))
				.join('')
		}
		_getPxValue(t) {
			return t ? parseFloat(t) : 0
		}
		_handleSwipe(t, e) {
			e &&
			this._slimCollapsed &&
			this.options.sidenavSlim &&
			this.options.sidenavExpandable
				? this.toggleSlim()
				: e ||
				  (this._slimCollapsed ||
				  !this.options.sidenavSlim ||
				  !this.options.sidenavExpandable
						? this.toggler && ae(this.toggler) && this.toggle()
						: this.toggleSlim())
		}
		_isActive(t, e) {
			return e
				? e === t
				: t.attributes.href
				? new URL(t, window.location.href).href === window.location.href
				: !1
		}
		_isAllToBeCollapsed() {
			return (
				m
					.find(fO, this._element)
					.filter(i => i.getAttribute('aria-expanded') === 'true').length === 0
			)
		}
		_isAllCollapsed() {
			return m.find(Cs, this._element).filter(t => ae(t)).length === 0
		}
		_initializeBackDrop() {
			if (!this.options.sidenavBackdrop) return
			const t = this.options.sidenavBackdropClass
				? this.options.sidenavBackdropClass.split(' ')
				: this.options.sidenavPosition
				? [
						'opacity-50',
						'transition-all',
						'duration-300',
						'ease-in-out',
						this.options.sidenavPosition,
						'top-0',
						'left-0',
						'z-50',
						'bg-black/10',
						'dark:bg-black-60',
						'w-full',
						'h-full',
						this._element.id,
				  ]
				: null
			return new Qa({
				isVisible: this.options.sidenavBackdrop,
				isAnimated: !0,
				rootElement: this._element.parentNode,
				backdropClasses: t,
				clickCallback: () => this.hide(),
			})
		}
		_updateBackdrop(t) {
			if (this.options.sidenavMode === 'over') {
				t
					? this._backdrop.show()
					: this.isBackdropVisible && this._backdrop.hide()
				return
			}
			this.isBackdropVisible && this._backdrop.hide()
		}
		_setup() {
			this._setupTouch(),
				this.options.sidenavFocusTrap && this._setupFocusTrap(),
				this._setupCollapse(),
				this.options.sidenavSlim && this._setupSlim(),
				this._setupInitialStyling(),
				this._setupScrolling(),
				this.options.sidenavContent && this._setupContent(),
				this._setupActiveState(),
				this._setupRippleEffect(),
				this.options.sidenavHidden || this._updateOffsets(!0, !0),
				this.options.sidenavMode === 'over' && this._setTabindex(!0)
		}
		_setupActiveState() {
			this._setActiveElements(),
				this.links.forEach(t => {
					_.on(t, 'click', () => this._setActiveElements(t)),
						_.on(t, 'keydown', e => {
							e.keyCode === Et && this._setActiveElements(t)
						})
				}),
				_.on(window, 'hashchange', this.hashHandler)
		}
		_setupCollapse() {
			this.navigation.forEach((t, e) => {
				m.find(Cs, t).forEach((n, o) =>
					this._setupCollapseList({ list: n, index: o, menu: t, menuIndex: e })
				)
			})
		}
		_generateCollpaseID(t, e) {
			return `sidenav-collapse-${this._ID}-${e}-${t}`
		}
		_setupCollapseList({ list: t, index: e, menu: i, menuIndex: n }) {
			const o = this._generateCollpaseID(e, n)
			t.setAttribute('id', o), t.setAttribute('data-te-collapse-item', '')
			const [r] = m.prev(t, kn)
			g.setDataAttribute(r, 'collapse-init', ''),
				r.setAttribute('href', `#${o}`),
				r.setAttribute('role', 'button')
			const a =
				ce.getInstance(t) ||
				new ce(t, { toggle: !1, parent: this.options.sidenavAccordion ? i : t })
			;(t.dataset.teSidenavStateShow === '' ||
				t.dataset.teCollapseShow === '') &&
				this._rotateArrow(r, !1),
				_.on(r, 'click', l => {
					this._toggleCategory(l, a, t),
						this._tempSlim &&
							this._isAllToBeCollapsed() &&
							(this._setSlim(!0), (this._tempSlim = !1)),
						this.options.sidenavMode === 'over' &&
							this._focusTrap &&
							this._focusTrap.update()
				}),
				_.on(t, 'show.te.collapse', () => this._rotateArrow(r, !1)),
				_.on(t, 'hide.te.collapse', () => this._rotateArrow(r, !0)),
				_.on(t, 'shown.te.collapse', () => {
					this.options.sidenavMode === 'over' &&
						this._focusTrap &&
						this._focusTrap.update()
				}),
				_.on(t, 'hidden.te.collapse', () => {
					this._tempSlim &&
						this._isAllCollapsed() &&
						(this._setSlim(!0), (this._tempSlim = !1)),
						this.options.sidenavMode === 'over' &&
							this._focusTrap &&
							this._focusTrap.update()
				})
		}
		_setupContent() {
			;(this._content = m.find(this.options.sidenavContent)),
				this._content.forEach(t => {
					const e = [
						'!p',
						'!m',
						'!px',
						'!pl',
						'!pr',
						'!mx',
						'!ml',
						'!mr',
						'!-p',
						'!-m',
						'!-px',
						'!-pl',
						'!-pr',
						'!-mx',
						'!-ml',
						'!-mr',
					]
					;[...t.classList]
						.filter(n => e.findIndex(o => n.includes(o)) >= 0)
						.forEach(n => t.classList.remove(n))
				}),
				(this._initialContentStyle = this._content.map(t => {
					const {
						paddingLeft: e,
						paddingRight: i,
						marginLeft: n,
						marginRight: o,
						transition: r,
					} = window.getComputedStyle(t)
					return {
						paddingLeft: e,
						paddingRight: i,
						marginLeft: n,
						marginRight: o,
						transition: r,
					}
				}))
		}
		_setupFocusTrap() {
			this._focusTrap = new Vs(
				this._element,
				{ event: 'keydown', condition: t => t.keyCode === Ci, onlyVisible: !0 },
				this.toggler
			)
		}
		_setupInitialStyling() {
			this._setColor(), g.style(this._element, this.sidenavStyle)
		}
		_setupScrolling() {
			let t = this._element
			if (this.options.sidenavScrollContainer) {
				t = m.findOne(this.options.sidenavScrollContainer, this._element)
				const i = dm(t.parentNode.children)
					.filter(n => n !== t)
					.reduce((n, o) => n + o.clientHeight, 0)
				g.style(t, { maxHeight: `calc(100% - ${i}px)`, position: 'relative' })
			}
			this._perfectScrollbar = new ms(t, {
				suppressScrollX: !0,
				handlers: ['click-rail', 'drag-thumb', 'wheel', 'touch'],
			})
		}
		_setupSlim() {
			;(this._slimCollapsed = this.options.sidenavSlimCollapsed),
				this._toggleSlimDisplay(this._slimCollapsed),
				this.options.sidenavExpandOnHover &&
					(this._element.addEventListener('mouseenter', () => {
						this._slimCollapsed && this._setSlim(!1)
					}),
					this._element.addEventListener('mouseleave', () => {
						this._slimCollapsed || this._setSlim(!0)
					}))
		}
		_setupRippleEffect() {
			this.links.forEach(t => {
				let e = Ye.getInstance(t),
					i = this.options.sidenavColor
				if (e && e._options.sidenavColor !== this.options.sidenavColor)
					e.dispose()
				else if (e) return
				;(localStorage.theme === 'dark' ||
					(!('theme' in localStorage) &&
						window.matchMedia('(prefers-color-scheme: dark)').matches)) &&
					(i = 'white'),
					(e = new Ye(t, { rippleColor: i }))
			})
		}
		_setupTouch() {
			;(this._touch = new pE(this._element, 'swipe', { threshold: 20 })),
				this._touch.init(),
				_.on(this._element, 'swipeleft', t =>
					this._handleSwipe(t, this.options.sidenavRight)
				),
				_.on(this._element, 'swiperight', t =>
					this._handleSwipe(t, !this.options.sidenavRight)
				)
		}
		_setActive(t, e) {
			t.setAttribute('data-te-sidebar-state-active', ''),
				this._activeNode && t.removeAttribute('data-te-sidebar-state-active'),
				(this._activeNode = t)
			const [i] = m.parents(this._activeNode, Cs)
			if (!i) {
				this._setActiveCategory()
				return
			}
			const [n] = m.prev(i, kn)
			this._setActiveCategory(n),
				!e && !this._slimCollapsed && ce.getInstance(i).show()
		}
		_setActiveCategory(t) {
			this.navigation.forEach(e => {
				m.find(Cs, e).forEach(n => {
					const [o] = m.prev(n, kn)
					o !== t
						? o.removeAttribute('data-te-sidenav-state-active')
						: o.setAttribute('data-te-sidenav-state-active', '')
				})
			})
		}
		_setActiveElements(t) {
			this.navigation.forEach(e => {
				m.find(kn, e)
					.filter(n => m.next(n, Cs).length === 0)
					.forEach(n => {
						this._isActive(n, t) &&
							n !== this._activeNode &&
							this._setActive(n, t)
					})
			}),
				t && this._updateFocus(this.isVisible)
		}
		_setColor() {
			const t = [
					'primary',
					'secondary',
					'success',
					'info',
					'warning',
					'danger',
					'light',
					'dark',
				],
				{ sidenavColor: e } = this.options,
				i = t.includes(e) ? e : 'primary'
			t.forEach(n => {
				this._element.classList.remove(`sidenav-${n}`)
			}),
				g.addClass(this._element, `sidenav-${i}`)
		}
		_setContentOffsets(t, e, i) {
			this._content.forEach((n, o) => {
				const r = this._getOffsetValue(t, {
						index: o,
						property: 'padding',
						offsets: e,
					}),
					a = this._getOffsetValue(t, {
						index: o,
						property: 'margin',
						offsets: e,
					}),
					l = {}
				if (
					(i || (l.transition = `all ${this.transitionDuration} linear`),
					(l[e.padding.property] = `${r}px`),
					(l[e.margin.property] = `${a}px`),
					g.style(n, l),
					!!t)
				) {
					if (i) {
						g.style(n, { transition: this._initialContentStyle[o].transition })
						return
					}
					_.on(n, 'transitionend', () => {
						g.style(n, { transition: this._initialContentStyle[o].transition })
					})
				}
			})
		}
		_setMode(t) {
			this.options.sidenavMode !== t &&
				((this._options.sidenavMode = t), this._update(this.isVisible))
		}
		_setSlim(t) {
			const e = t ? ['collapse', 'collapsed'] : ['expand', 'expanded']
			this._triggerEvents(...e),
				t && this._collapseItems(),
				(this._slimCollapsed = t),
				this._toggleSlimDisplay(t),
				g.style(this._element, { width: `${this.width}px` }),
				this._updateOffsets(this.isVisible)
		}
		_setTabindex(t) {
			this.links.forEach(e => {
				e.tabIndex = t ? 0 : -1
			})
		}
		_emitEvents(t) {
			const e = t ? ['show', 'shown'] : ['hide', 'hidden']
			this._triggerEvents(...e)
		}
		_rotateArrow(t, e) {
			const [i] = m.children(t, `[${pO}]`)
			i && (e ? g.removeClass(i, 'rotate-180') : g.addClass(i, 'rotate-180'))
		}
		_toggleCategory(t, e) {
			t.preventDefault(),
				e.toggle(),
				this._slimCollapsed &&
					this.options.sidenavExpandable &&
					((this._tempSlim = !0), this._setSlim(!1))
		}
		_toggleSlimDisplay(t) {
			const e = m.find(_O, this._element),
				i = m.find(gO, this._element),
				n = () => {
					e.forEach(o => {
						g.style(o, { display: this._slimCollapsed ? 'unset' : 'none' })
					}),
						i.forEach(o => {
							g.style(o, { display: this._slimCollapsed ? 'none' : 'unset' })
						})
				}
			t ? setTimeout(() => n(), this.options.sidenavTransitionDuration) : n()
		}
		async _triggerEvents(t, e) {
			_.trigger(this._element, `${t}.te.sidenav`),
				e &&
					(await setTimeout(() => {
						_.trigger(this._element, `${e}.te.sidenav`)
					}, this.options.sidenavTransitionDuration + 5))
		}
		_isiPhone() {
			return /iPhone|iPod/i.test(navigator.userAgent)
		}
		_update(t) {
			t && this._isiPhone() && g.addClass(this._element, 'ps--scrolling-y'),
				this.toggler && this._updateTogglerAria(t),
				this._updateDisplay(t),
				this.options.sidenavBackdrop && this._updateBackdrop(t),
				this._updateOffsets(t),
				t &&
					this.options.sidenavCloseOnEsc &&
					this.options.sidenavMode !== 'side' &&
					_.on(window, 'keydown', this.escHandler),
				this.options.sidenavFocusTrap && this._updateFocus(t)
		}
		_updateDisplay(t) {
			const e = t ? 0 : this.translation
			g.style(this._element, { transform: `translateX(${e}%)` })
		}
		_updateFocus(t) {
			if (
				(this._setTabindex(t),
				this.options.sidenavMode === 'over' && this.options.sidenavFocusTrap)
			) {
				if (t) {
					this._focusTrap.trap()
					return
				}
				this._focusTrap.disable()
			}
			this._focusTrap.disable()
		}
		_updateOffsets(t, e = !1) {
			const [i, n] = this.options.sidenavRight
					? ['right', 'left']
					: ['left', 'right'],
				o = {
					property: this._getProperty('padding', i),
					value: this.options.sidenavMode === 'over' ? 0 : this.width,
				},
				r = {
					property: this._getProperty('margin', n),
					value: this.options.sidenavMode === 'push' ? -1 * this.width : 0,
				}
			_.trigger(this._element, 'update.te.sidenav', { margin: r, padding: o }),
				this._content &&
					((this._content.className = ''),
					this._setContentOffsets(t, { padding: o, margin: r }, e))
		}
		_updateTogglerAria(t) {
			this.toggler.setAttribute('aria-expanded', t)
		}
		static toggleSidenav() {
			return function (t) {
				const e = m.closest(t.target, _c),
					i = g.getDataAttributes(e).target
				m.find(i).forEach(n => {
					;(Ii.getInstance(n) || new Ii(n)).toggle()
				})
			}
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				let i = O.getData(this, Vr)
				const n = typeof t == 'object' && t
				if (
					!(!i && /dispose/.test(t)) &&
					(i || (i = new Ii(this, n)), typeof t == 'string')
				) {
					if (typeof i[t] > 'u') throw new TypeError(`No method named "${t}"`)
					i[t](e)
				}
			})
		}
		static getInstance(t) {
			return O.getData(t, Vr)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, typeof e == 'object' ? e : null)
		}
	}
	ff({
		Animate: Gs,
		Alert: Ws,
		Button: ao,
		ChipsInput: gp,
		Chip: ki,
		Dropdown: Ft,
		Carousel: he,
		Collapse: ce,
		Offcanvas: ts,
		Modal: Ys,
		Popover: Eo,
		ScrollSpy: xo,
		Select: on,
		Tab: wo,
		Toast: Xs,
		Tooltip: is,
		Ripple: Ye,
		Datepicker: xl,
		Timepicker: Ll,
		Sidenav: Ii,
		Stepper: Wu,
		Input: Z,
		PerfectScrollbar: ms,
		Rating: Bp,
		Chart: yp,
		Datatable: pr,
		Popconfirm: _r,
		SmoothScroll: xr,
		Lightbox: ys,
		Validation: Tr,
		Touch: Er,
		LazyLoad: yn,
		Datetimepicker: Dr,
		Clipboard: Ar,
		InfiniteScroll: kr,
		LoadingManagement: Or,
		Autocomplete: Pr,
		Sticky: Lr,
		MultiRangeSlider: Hr,
	})
	/*!
	 * Chart.js v3.9.1
	 * https://www.chartjs.org
	 * (c) 2022 Chart.js Contributors
	 * Released under the MIT License
	 */ function Oe() {}
	const EO = (function () {
		let s = 0
		return function () {
			return s++
		}
	})()
	function H(s) {
		return s === null || typeof s > 'u'
	}
	function Q(s) {
		if (Array.isArray && Array.isArray(s)) return !0
		const t = Object.prototype.toString.call(s)
		return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]'
	}
	function V(s) {
		return s !== null && Object.prototype.toString.call(s) === '[object Object]'
	}
	const rt = s => (typeof s == 'number' || s instanceof Number) && isFinite(+s)
	function zt(s, t) {
		return rt(s) ? s : t
	}
	function B(s, t) {
		return typeof s > 'u' ? t : s
	}
	const xO = (s, t) =>
			typeof s == 'string' && s.endsWith('%') ? parseFloat(s) / 100 : s / t,
		gf = (s, t) =>
			typeof s == 'string' && s.endsWith('%') ? (parseFloat(s) / 100) * t : +s
	function G(s, t, e) {
		if (s && typeof s.call == 'function') return s.apply(e, t)
	}
	function U(s, t, e, i) {
		let n, o, r
		if (Q(s))
			if (((o = s.length), i)) for (n = o - 1; n >= 0; n--) t.call(e, s[n], n)
			else for (n = 0; n < o; n++) t.call(e, s[n], n)
		else if (V(s))
			for (r = Object.keys(s), o = r.length, n = 0; n < o; n++)
				t.call(e, s[r[n]], r[n])
	}
	function Fr(s, t) {
		let e, i, n, o
		if (!s || !t || s.length !== t.length) return !1
		for (e = 0, i = s.length; e < i; ++e)
			if (
				((n = s[e]),
				(o = t[e]),
				n.datasetIndex !== o.datasetIndex || n.index !== o.index)
			)
				return !1
		return !0
	}
	function Wr(s) {
		if (Q(s)) return s.map(Wr)
		if (V(s)) {
			const t = Object.create(null),
				e = Object.keys(s),
				i = e.length
			let n = 0
			for (; n < i; ++n) t[e[n]] = Wr(s[e[n]])
			return t
		}
		return s
	}
	function mf(s) {
		return ['__proto__', 'prototype', 'constructor'].indexOf(s) === -1
	}
	function CO(s, t, e, i) {
		if (!mf(s)) return
		const n = t[s],
			o = e[s]
		V(n) && V(o) ? Te(n, o, i) : (t[s] = Wr(o))
	}
	function Te(s, t, e) {
		const i = Q(t) ? t : [t],
			n = i.length
		if (!V(s)) return s
		e = e || {}
		const o = e.merger || CO
		for (let r = 0; r < n; ++r) {
			if (((t = i[r]), !V(t))) continue
			const a = Object.keys(t)
			for (let l = 0, c = a.length; l < c; ++l) o(a[l], s, t, e)
		}
		return s
	}
	function Sn(s, t) {
		return Te(s, t, { merger: AO })
	}
	function AO(s, t, e) {
		if (!mf(s)) return
		const i = t[s],
			n = e[s]
		V(i) && V(n)
			? Sn(i, n)
			: Object.prototype.hasOwnProperty.call(t, s) || (t[s] = Wr(n))
	}
	const bf = { '': s => s, x: s => s.x, y: s => s.y }
	function ti(s, t) {
		return (bf[t] || (bf[t] = wO(t)))(s)
	}
	function wO(s) {
		const t = kO(s)
		return e => {
			for (const i of t) {
				if (i === '') break
				e = e && e[i]
			}
			return e
		}
	}
	function kO(s) {
		const t = s.split('.'),
			e = []
		let i = ''
		for (const n of t)
			(i += n),
				i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (e.push(i), (i = ''))
		return e
	}
	function gc(s) {
		return s.charAt(0).toUpperCase() + s.slice(1)
	}
	const jt = s => typeof s < 'u',
		ei = s => typeof s == 'function',
		vf = (s, t) => {
			if (s.size !== t.size) return !1
			for (const e of s) if (!t.has(e)) return !1
			return !0
		}
	function SO(s) {
		return (
			s.type === 'mouseup' || s.type === 'click' || s.type === 'contextmenu'
		)
	}
	const it = Math.PI,
		q = 2 * it,
		OO = q + it,
		zr = Number.POSITIVE_INFINITY,
		IO = it / 180,
		nt = it / 2,
		On = it / 4,
		yf = (it * 2) / 3,
		Yt = Math.log10,
		Ee = Math.sign
	function Tf(s) {
		const t = Math.round(s)
		s = In(s, t, s / 1e3) ? t : s
		const e = Math.pow(10, Math.floor(Yt(s))),
			i = s / e
		return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e
	}
	function DO(s) {
		const t = [],
			e = Math.sqrt(s)
		let i
		for (i = 1; i < e; i++) s % i === 0 && (t.push(i), t.push(s / i))
		return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t
	}
	function As(s) {
		return !isNaN(parseFloat(s)) && isFinite(s)
	}
	function In(s, t, e) {
		return Math.abs(s - t) < e
	}
	function MO(s, t) {
		const e = Math.round(s)
		return e - t <= s && e + t >= s
	}
	function Ef(s, t, e) {
		let i, n, o
		for (i = 0, n = s.length; i < n; i++)
			(o = s[i][e]),
				isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)))
	}
	function se(s) {
		return s * (it / 180)
	}
	function mc(s) {
		return s * (180 / it)
	}
	function xf(s) {
		if (!rt(s)) return
		let t = 1,
			e = 0
		for (; Math.round(s * t) / t !== s; ) (t *= 10), e++
		return e
	}
	function Cf(s, t) {
		const e = t.x - s.x,
			i = t.y - s.y,
			n = Math.sqrt(e * e + i * i)
		let o = Math.atan2(i, e)
		return o < -0.5 * it && (o += q), { angle: o, distance: n }
	}
	function bc(s, t) {
		return Math.sqrt(Math.pow(t.x - s.x, 2) + Math.pow(t.y - s.y, 2))
	}
	function LO(s, t) {
		return ((s - t + OO) % q) - it
	}
	function Vt(s) {
		return ((s % q) + q) % q
	}
	function Dn(s, t, e, i) {
		const n = Vt(s),
			o = Vt(t),
			r = Vt(e),
			a = Vt(o - n),
			l = Vt(r - n),
			c = Vt(n - o),
			h = Vt(n - r)
		return n === o || n === r || (i && o === r) || (a > l && c < h)
	}
	function dt(s, t, e) {
		return Math.max(t, Math.min(e, s))
	}
	function $O(s) {
		return dt(s, -32768, 32767)
	}
	function Ie(s, t, e, i = 1e-6) {
		return s >= Math.min(t, e) - i && s <= Math.max(t, e) + i
	}
	function vc(s, t, e) {
		e = e || (r => s[r] < t)
		let i = s.length - 1,
			n = 0,
			o
		for (; i - n > 1; ) (o = (n + i) >> 1), e(o) ? (n = o) : (i = o)
		return { lo: n, hi: i }
	}
	const De = (s, t, e, i) => vc(s, e, i ? n => s[n][t] <= e : n => s[n][t] < e),
		RO = (s, t, e) => vc(s, e, i => s[i][t] >= e)
	function PO(s, t, e) {
		let i = 0,
			n = s.length
		for (; i < n && s[i] < t; ) i++
		for (; n > i && s[n - 1] > e; ) n--
		return i > 0 || n < s.length ? s.slice(i, n) : s
	}
	const Af = ['push', 'pop', 'shift', 'splice', 'unshift']
	function NO(s, t) {
		if (s._chartjs) {
			s._chartjs.listeners.push(t)
			return
		}
		Object.defineProperty(s, '_chartjs', {
			configurable: !0,
			enumerable: !1,
			value: { listeners: [t] },
		}),
			Af.forEach(e => {
				const i = '_onData' + gc(e),
					n = s[e]
				Object.defineProperty(s, e, {
					configurable: !0,
					enumerable: !1,
					value(...o) {
						const r = n.apply(this, o)
						return (
							s._chartjs.listeners.forEach(a => {
								typeof a[i] == 'function' && a[i](...o)
							}),
							r
						)
					},
				})
			})
	}
	function wf(s, t) {
		const e = s._chartjs
		if (!e) return
		const i = e.listeners,
			n = i.indexOf(t)
		n !== -1 && i.splice(n, 1),
			!(i.length > 0) &&
				(Af.forEach(o => {
					delete s[o]
				}),
				delete s._chartjs)
	}
	function kf(s) {
		const t = new Set()
		let e, i
		for (e = 0, i = s.length; e < i; ++e) t.add(s[e])
		return t.size === i ? s : Array.from(t)
	}
	const Sf = (function () {
		return typeof window > 'u'
			? function (s) {
					return s()
			  }
			: window.requestAnimationFrame
	})()
	function Of(s, t, e) {
		const i = e || (r => Array.prototype.slice.call(r))
		let n = !1,
			o = []
		return function (...r) {
			;(o = i(r)),
				n ||
					((n = !0),
					Sf.call(window, () => {
						;(n = !1), s.apply(t, o)
					}))
		}
	}
	function BO(s, t) {
		let e
		return function (...i) {
			return (
				t ? (clearTimeout(e), (e = setTimeout(s, t, i))) : s.apply(this, i), t
			)
		}
	}
	const yc = s => (s === 'start' ? 'left' : s === 'end' ? 'right' : 'center'),
		gt = (s, t, e) => (s === 'start' ? t : s === 'end' ? e : (t + e) / 2),
		HO = (s, t, e, i) =>
			s === (i ? 'left' : 'right') ? e : s === 'center' ? (t + e) / 2 : t
	function If(s, t, e) {
		const i = t.length
		let n = 0,
			o = i
		if (s._sorted) {
			const { iScale: r, _parsed: a } = s,
				l = r.axis,
				{ min: c, max: h, minDefined: d, maxDefined: u } = r.getUserBounds()
			d &&
				(n = dt(
					Math.min(
						De(a, r.axis, c).lo,
						e ? i : De(t, l, r.getPixelForValue(c)).lo
					),
					0,
					i - 1
				)),
				u
					? (o =
							dt(
								Math.max(
									De(a, r.axis, h, !0).hi + 1,
									e ? 0 : De(t, l, r.getPixelForValue(h), !0).hi + 1
								),
								n,
								i
							) - n)
					: (o = i - n)
		}
		return { start: n, count: o }
	}
	function Df(s) {
		const { xScale: t, yScale: e, _scaleRanges: i } = s,
			n = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max }
		if (!i) return (s._scaleRanges = n), !0
		const o =
			i.xmin !== t.min ||
			i.xmax !== t.max ||
			i.ymin !== e.min ||
			i.ymax !== e.max
		return Object.assign(i, n), o
	}
	const jr = s => s === 0 || s === 1,
		Mf = (s, t, e) =>
			-(Math.pow(2, 10 * (s -= 1)) * Math.sin(((s - t) * q) / e)),
		Lf = (s, t, e) => Math.pow(2, -10 * s) * Math.sin(((s - t) * q) / e) + 1,
		Mn = {
			linear: s => s,
			easeInQuad: s => s * s,
			easeOutQuad: s => -s * (s - 2),
			easeInOutQuad: s =>
				(s /= 0.5) < 1 ? 0.5 * s * s : -0.5 * (--s * (s - 2) - 1),
			easeInCubic: s => s * s * s,
			easeOutCubic: s => (s -= 1) * s * s + 1,
			easeInOutCubic: s =>
				(s /= 0.5) < 1 ? 0.5 * s * s * s : 0.5 * ((s -= 2) * s * s + 2),
			easeInQuart: s => s * s * s * s,
			easeOutQuart: s => -((s -= 1) * s * s * s - 1),
			easeInOutQuart: s =>
				(s /= 0.5) < 1
					? 0.5 * s * s * s * s
					: -0.5 * ((s -= 2) * s * s * s - 2),
			easeInQuint: s => s * s * s * s * s,
			easeOutQuint: s => (s -= 1) * s * s * s * s + 1,
			easeInOutQuint: s =>
				(s /= 0.5) < 1
					? 0.5 * s * s * s * s * s
					: 0.5 * ((s -= 2) * s * s * s * s + 2),
			easeInSine: s => -Math.cos(s * nt) + 1,
			easeOutSine: s => Math.sin(s * nt),
			easeInOutSine: s => -0.5 * (Math.cos(it * s) - 1),
			easeInExpo: s => (s === 0 ? 0 : Math.pow(2, 10 * (s - 1))),
			easeOutExpo: s => (s === 1 ? 1 : -Math.pow(2, -10 * s) + 1),
			easeInOutExpo: s =>
				jr(s)
					? s
					: s < 0.5
					? 0.5 * Math.pow(2, 10 * (s * 2 - 1))
					: 0.5 * (-Math.pow(2, -10 * (s * 2 - 1)) + 2),
			easeInCirc: s => (s >= 1 ? s : -(Math.sqrt(1 - s * s) - 1)),
			easeOutCirc: s => Math.sqrt(1 - (s -= 1) * s),
			easeInOutCirc: s =>
				(s /= 0.5) < 1
					? -0.5 * (Math.sqrt(1 - s * s) - 1)
					: 0.5 * (Math.sqrt(1 - (s -= 2) * s) + 1),
			easeInElastic: s => (jr(s) ? s : Mf(s, 0.075, 0.3)),
			easeOutElastic: s => (jr(s) ? s : Lf(s, 0.075, 0.3)),
			easeInOutElastic(s) {
				return jr(s)
					? s
					: s < 0.5
					? 0.5 * Mf(s * 2, 0.1125, 0.45)
					: 0.5 + 0.5 * Lf(s * 2 - 1, 0.1125, 0.45)
			},
			easeInBack(s) {
				return s * s * ((1.70158 + 1) * s - 1.70158)
			},
			easeOutBack(s) {
				return (s -= 1) * s * ((1.70158 + 1) * s + 1.70158) + 1
			},
			easeInOutBack(s) {
				let t = 1.70158
				return (s /= 0.5) < 1
					? 0.5 * (s * s * (((t *= 1.525) + 1) * s - t))
					: 0.5 * ((s -= 2) * s * (((t *= 1.525) + 1) * s + t) + 2)
			},
			easeInBounce: s => 1 - Mn.easeOutBounce(1 - s),
			easeOutBounce(s) {
				return s < 1 / 2.75
					? 7.5625 * s * s
					: s < 2 / 2.75
					? 7.5625 * (s -= 1.5 / 2.75) * s + 0.75
					: s < 2.5 / 2.75
					? 7.5625 * (s -= 2.25 / 2.75) * s + 0.9375
					: 7.5625 * (s -= 2.625 / 2.75) * s + 0.984375
			},
			easeInOutBounce: s =>
				s < 0.5
					? Mn.easeInBounce(s * 2) * 0.5
					: Mn.easeOutBounce(s * 2 - 1) * 0.5 + 0.5,
		}
	/*!
	 * @kurkle/color v0.2.1
	 * https://github.com/kurkle/color#readme
	 * (c) 2022 Jukka Kurkela
	 * Released under the MIT License
	 */ function Ln(s) {
		return (s + 0.5) | 0
	}
	const ii = (s, t, e) => Math.max(Math.min(s, e), t)
	function $n(s) {
		return ii(Ln(s * 2.55), 0, 255)
	}
	function si(s) {
		return ii(Ln(s * 255), 0, 255)
	}
	function Me(s) {
		return ii(Ln(s / 2.55) / 100, 0, 1)
	}
	function $f(s) {
		return ii(Ln(s * 100), 0, 100)
	}
	const Kt = {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			4: 4,
			5: 5,
			6: 6,
			7: 7,
			8: 8,
			9: 9,
			A: 10,
			B: 11,
			C: 12,
			D: 13,
			E: 14,
			F: 15,
			a: 10,
			b: 11,
			c: 12,
			d: 13,
			e: 14,
			f: 15,
		},
		Tc = [...'0123456789ABCDEF'],
		VO = s => Tc[s & 15],
		FO = s => Tc[(s & 240) >> 4] + Tc[s & 15],
		Yr = s => (s & 240) >> 4 === (s & 15),
		WO = s => Yr(s.r) && Yr(s.g) && Yr(s.b) && Yr(s.a)
	function zO(s) {
		var t = s.length,
			e
		return (
			s[0] === '#' &&
				(t === 4 || t === 5
					? (e = {
							r: 255 & (Kt[s[1]] * 17),
							g: 255 & (Kt[s[2]] * 17),
							b: 255 & (Kt[s[3]] * 17),
							a: t === 5 ? Kt[s[4]] * 17 : 255,
					  })
					: (t === 7 || t === 9) &&
					  (e = {
							r: (Kt[s[1]] << 4) | Kt[s[2]],
							g: (Kt[s[3]] << 4) | Kt[s[4]],
							b: (Kt[s[5]] << 4) | Kt[s[6]],
							a: t === 9 ? (Kt[s[7]] << 4) | Kt[s[8]] : 255,
					  })),
			e
		)
	}
	const jO = (s, t) => (s < 255 ? t(s) : '')
	function YO(s) {
		var t = WO(s) ? VO : FO
		return s ? '#' + t(s.r) + t(s.g) + t(s.b) + jO(s.a, t) : void 0
	}
	const KO =
		/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
	function Rf(s, t, e) {
		const i = t * Math.min(e, 1 - e),
			n = (o, r = (o + s / 30) % 12) =>
				e - i * Math.max(Math.min(r - 3, 9 - r, 1), -1)
		return [n(0), n(8), n(4)]
	}
	function UO(s, t, e) {
		const i = (n, o = (n + s / 60) % 6) =>
			e - e * t * Math.max(Math.min(o, 4 - o, 1), 0)
		return [i(5), i(3), i(1)]
	}
	function XO(s, t, e) {
		const i = Rf(s, 1, 0.5)
		let n
		for (
			t + e > 1 && ((n = 1 / (t + e)), (t *= n), (e *= n)), n = 0;
			n < 3;
			n++
		)
			(i[n] *= 1 - t - e), (i[n] += t)
		return i
	}
	function GO(s, t, e, i, n) {
		return s === n
			? (t - e) / i + (t < e ? 6 : 0)
			: t === n
			? (e - s) / i + 2
			: (s - t) / i + 4
	}
	function Ec(s) {
		const e = s.r / 255,
			i = s.g / 255,
			n = s.b / 255,
			o = Math.max(e, i, n),
			r = Math.min(e, i, n),
			a = (o + r) / 2
		let l, c, h
		return (
			o !== r &&
				((h = o - r),
				(c = a > 0.5 ? h / (2 - o - r) : h / (o + r)),
				(l = GO(e, i, n, h, o)),
				(l = l * 60 + 0.5)),
			[l | 0, c || 0, a]
		)
	}
	function xc(s, t, e, i) {
		return (Array.isArray(t) ? s(t[0], t[1], t[2]) : s(t, e, i)).map(si)
	}
	function Cc(s, t, e) {
		return xc(Rf, s, t, e)
	}
	function qO(s, t, e) {
		return xc(XO, s, t, e)
	}
	function ZO(s, t, e) {
		return xc(UO, s, t, e)
	}
	function Pf(s) {
		return ((s % 360) + 360) % 360
	}
	function QO(s) {
		const t = KO.exec(s)
		let e = 255,
			i
		if (!t) return
		t[5] !== i && (e = t[6] ? $n(+t[5]) : si(+t[5]))
		const n = Pf(+t[2]),
			o = +t[3] / 100,
			r = +t[4] / 100
		return (
			t[1] === 'hwb'
				? (i = qO(n, o, r))
				: t[1] === 'hsv'
				? (i = ZO(n, o, r))
				: (i = Cc(n, o, r)),
			{ r: i[0], g: i[1], b: i[2], a: e }
		)
	}
	function JO(s, t) {
		var e = Ec(s)
		;(e[0] = Pf(e[0] + t)),
			(e = Cc(e)),
			(s.r = e[0]),
			(s.g = e[1]),
			(s.b = e[2])
	}
	function tI(s) {
		if (!s) return
		const t = Ec(s),
			e = t[0],
			i = $f(t[1]),
			n = $f(t[2])
		return s.a < 255
			? `hsla(${e}, ${i}%, ${n}%, ${Me(s.a)})`
			: `hsl(${e}, ${i}%, ${n}%)`
	}
	const Nf = {
			x: 'dark',
			Z: 'light',
			Y: 're',
			X: 'blu',
			W: 'gr',
			V: 'medium',
			U: 'slate',
			A: 'ee',
			T: 'ol',
			S: 'or',
			B: 'ra',
			C: 'lateg',
			D: 'ights',
			R: 'in',
			Q: 'turquois',
			E: 'hi',
			P: 'ro',
			O: 'al',
			N: 'le',
			M: 'de',
			L: 'yello',
			F: 'en',
			K: 'ch',
			G: 'arks',
			H: 'ea',
			I: 'ightg',
			J: 'wh',
		},
		Bf = {
			OiceXe: 'f0f8ff',
			antiquewEte: 'faebd7',
			aqua: 'ffff',
			aquamarRe: '7fffd4',
			azuY: 'f0ffff',
			beige: 'f5f5dc',
			bisque: 'ffe4c4',
			black: '0',
			blanKedOmond: 'ffebcd',
			Xe: 'ff',
			XeviTet: '8a2be2',
			bPwn: 'a52a2a',
			burlywood: 'deb887',
			caMtXe: '5f9ea0',
			KartYuse: '7fff00',
			KocTate: 'd2691e',
			cSO: 'ff7f50',
			cSnflowerXe: '6495ed',
			cSnsilk: 'fff8dc',
			crimson: 'dc143c',
			cyan: 'ffff',
			xXe: '8b',
			xcyan: '8b8b',
			xgTMnPd: 'b8860b',
			xWay: 'a9a9a9',
			xgYF: '6400',
			xgYy: 'a9a9a9',
			xkhaki: 'bdb76b',
			xmagFta: '8b008b',
			xTivegYF: '556b2f',
			xSange: 'ff8c00',
			xScEd: '9932cc',
			xYd: '8b0000',
			xsOmon: 'e9967a',
			xsHgYF: '8fbc8f',
			xUXe: '483d8b',
			xUWay: '2f4f4f',
			xUgYy: '2f4f4f',
			xQe: 'ced1',
			xviTet: '9400d3',
			dAppRk: 'ff1493',
			dApskyXe: 'bfff',
			dimWay: '696969',
			dimgYy: '696969',
			dodgerXe: '1e90ff',
			fiYbrick: 'b22222',
			flSOwEte: 'fffaf0',
			foYstWAn: '228b22',
			fuKsia: 'ff00ff',
			gaRsbSo: 'dcdcdc',
			ghostwEte: 'f8f8ff',
			gTd: 'ffd700',
			gTMnPd: 'daa520',
			Way: '808080',
			gYF: '8000',
			gYFLw: 'adff2f',
			gYy: '808080',
			honeyMw: 'f0fff0',
			hotpRk: 'ff69b4',
			RdianYd: 'cd5c5c',
			Rdigo: '4b0082',
			ivSy: 'fffff0',
			khaki: 'f0e68c',
			lavFMr: 'e6e6fa',
			lavFMrXsh: 'fff0f5',
			lawngYF: '7cfc00',
			NmoncEffon: 'fffacd',
			ZXe: 'add8e6',
			ZcSO: 'f08080',
			Zcyan: 'e0ffff',
			ZgTMnPdLw: 'fafad2',
			ZWay: 'd3d3d3',
			ZgYF: '90ee90',
			ZgYy: 'd3d3d3',
			ZpRk: 'ffb6c1',
			ZsOmon: 'ffa07a',
			ZsHgYF: '20b2aa',
			ZskyXe: '87cefa',
			ZUWay: '778899',
			ZUgYy: '778899',
			ZstAlXe: 'b0c4de',
			ZLw: 'ffffe0',
			lime: 'ff00',
			limegYF: '32cd32',
			lRF: 'faf0e6',
			magFta: 'ff00ff',
			maPon: '800000',
			VaquamarRe: '66cdaa',
			VXe: 'cd',
			VScEd: 'ba55d3',
			VpurpN: '9370db',
			VsHgYF: '3cb371',
			VUXe: '7b68ee',
			VsprRggYF: 'fa9a',
			VQe: '48d1cc',
			VviTetYd: 'c71585',
			midnightXe: '191970',
			mRtcYam: 'f5fffa',
			mistyPse: 'ffe4e1',
			moccasR: 'ffe4b5',
			navajowEte: 'ffdead',
			navy: '80',
			Tdlace: 'fdf5e6',
			Tive: '808000',
			TivedBb: '6b8e23',
			Sange: 'ffa500',
			SangeYd: 'ff4500',
			ScEd: 'da70d6',
			pOegTMnPd: 'eee8aa',
			pOegYF: '98fb98',
			pOeQe: 'afeeee',
			pOeviTetYd: 'db7093',
			papayawEp: 'ffefd5',
			pHKpuff: 'ffdab9',
			peru: 'cd853f',
			pRk: 'ffc0cb',
			plum: 'dda0dd',
			powMrXe: 'b0e0e6',
			purpN: '800080',
			YbeccapurpN: '663399',
			Yd: 'ff0000',
			Psybrown: 'bc8f8f',
			PyOXe: '4169e1',
			saddNbPwn: '8b4513',
			sOmon: 'fa8072',
			sandybPwn: 'f4a460',
			sHgYF: '2e8b57',
			sHshell: 'fff5ee',
			siFna: 'a0522d',
			silver: 'c0c0c0',
			skyXe: '87ceeb',
			UXe: '6a5acd',
			UWay: '708090',
			UgYy: '708090',
			snow: 'fffafa',
			sprRggYF: 'ff7f',
			stAlXe: '4682b4',
			tan: 'd2b48c',
			teO: '8080',
			tEstN: 'd8bfd8',
			tomato: 'ff6347',
			Qe: '40e0d0',
			viTet: 'ee82ee',
			JHt: 'f5deb3',
			wEte: 'ffffff',
			wEtesmoke: 'f5f5f5',
			Lw: 'ffff00',
			LwgYF: '9acd32',
		}
	function eI() {
		const s = {},
			t = Object.keys(Bf),
			e = Object.keys(Nf)
		let i, n, o, r, a
		for (i = 0; i < t.length; i++) {
			for (r = a = t[i], n = 0; n < e.length; n++)
				(o = e[n]), (a = a.replace(o, Nf[o]))
			;(o = parseInt(Bf[r], 16)),
				(s[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255])
		}
		return s
	}
	let Kr
	function iI(s) {
		Kr || ((Kr = eI()), (Kr.transparent = [0, 0, 0, 0]))
		const t = Kr[s.toLowerCase()]
		return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 }
	}
	const sI =
		/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
	function nI(s) {
		const t = sI.exec(s)
		let e = 255,
			i,
			n,
			o
		if (t) {
			if (t[7] !== i) {
				const r = +t[7]
				e = t[8] ? $n(r) : ii(r * 255, 0, 255)
			}
			return (
				(i = +t[1]),
				(n = +t[3]),
				(o = +t[5]),
				(i = 255 & (t[2] ? $n(i) : ii(i, 0, 255))),
				(n = 255 & (t[4] ? $n(n) : ii(n, 0, 255))),
				(o = 255 & (t[6] ? $n(o) : ii(o, 0, 255))),
				{ r: i, g: n, b: o, a: e }
			)
		}
	}
	function oI(s) {
		return (
			s &&
			(s.a < 255
				? `rgba(${s.r}, ${s.g}, ${s.b}, ${Me(s.a)})`
				: `rgb(${s.r}, ${s.g}, ${s.b})`)
		)
	}
	const Ac = s =>
			s <= 0.0031308 ? s * 12.92 : Math.pow(s, 1 / 2.4) * 1.055 - 0.055,
		ws = s => (s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4))
	function rI(s, t, e) {
		const i = ws(Me(s.r)),
			n = ws(Me(s.g)),
			o = ws(Me(s.b))
		return {
			r: si(Ac(i + e * (ws(Me(t.r)) - i))),
			g: si(Ac(n + e * (ws(Me(t.g)) - n))),
			b: si(Ac(o + e * (ws(Me(t.b)) - o))),
			a: s.a + e * (t.a - s.a),
		}
	}
	function Ur(s, t, e) {
		if (s) {
			let i = Ec(s)
			;(i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1))),
				(i = Cc(i)),
				(s.r = i[0]),
				(s.g = i[1]),
				(s.b = i[2])
		}
	}
	function Hf(s, t) {
		return s && Object.assign(t || {}, s)
	}
	function Vf(s) {
		var t = { r: 0, g: 0, b: 0, a: 255 }
		return (
			Array.isArray(s)
				? s.length >= 3 &&
				  ((t = { r: s[0], g: s[1], b: s[2], a: 255 }),
				  s.length > 3 && (t.a = si(s[3])))
				: ((t = Hf(s, { r: 0, g: 0, b: 0, a: 1 })), (t.a = si(t.a))),
			t
		)
	}
	function aI(s) {
		return s.charAt(0) === 'r' ? nI(s) : QO(s)
	}
	class Xr {
		constructor(t) {
			if (t instanceof Xr) return t
			const e = typeof t
			let i
			e === 'object'
				? (i = Vf(t))
				: e === 'string' && (i = zO(t) || iI(t) || aI(t)),
				(this._rgb = i),
				(this._valid = !!i)
		}
		get valid() {
			return this._valid
		}
		get rgb() {
			var t = Hf(this._rgb)
			return t && (t.a = Me(t.a)), t
		}
		set rgb(t) {
			this._rgb = Vf(t)
		}
		rgbString() {
			return this._valid ? oI(this._rgb) : void 0
		}
		hexString() {
			return this._valid ? YO(this._rgb) : void 0
		}
		hslString() {
			return this._valid ? tI(this._rgb) : void 0
		}
		mix(t, e) {
			if (t) {
				const i = this.rgb,
					n = t.rgb
				let o
				const r = e === o ? 0.5 : e,
					a = 2 * r - 1,
					l = i.a - n.a,
					c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2
				;(o = 1 - c),
					(i.r = 255 & (c * i.r + o * n.r + 0.5)),
					(i.g = 255 & (c * i.g + o * n.g + 0.5)),
					(i.b = 255 & (c * i.b + o * n.b + 0.5)),
					(i.a = r * i.a + (1 - r) * n.a),
					(this.rgb = i)
			}
			return this
		}
		interpolate(t, e) {
			return t && (this._rgb = rI(this._rgb, t._rgb, e)), this
		}
		clone() {
			return new Xr(this.rgb)
		}
		alpha(t) {
			return (this._rgb.a = si(t)), this
		}
		clearer(t) {
			const e = this._rgb
			return (e.a *= 1 - t), this
		}
		greyscale() {
			const t = this._rgb,
				e = Ln(t.r * 0.3 + t.g * 0.59 + t.b * 0.11)
			return (t.r = t.g = t.b = e), this
		}
		opaquer(t) {
			const e = this._rgb
			return (e.a *= 1 + t), this
		}
		negate() {
			const t = this._rgb
			return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
		}
		lighten(t) {
			return Ur(this._rgb, 2, t), this
		}
		darken(t) {
			return Ur(this._rgb, 2, -t), this
		}
		saturate(t) {
			return Ur(this._rgb, 1, t), this
		}
		desaturate(t) {
			return Ur(this._rgb, 1, -t), this
		}
		rotate(t) {
			return JO(this._rgb, t), this
		}
	}
	function Ff(s) {
		return new Xr(s)
	}
	function Wf(s) {
		if (s && typeof s == 'object') {
			const t = s.toString()
			return t === '[object CanvasPattern]' || t === '[object CanvasGradient]'
		}
		return !1
	}
	function zf(s) {
		return Wf(s) ? s : Ff(s)
	}
	function wc(s) {
		return Wf(s) ? s : Ff(s).saturate(0.5).darken(0.1).hexString()
	}
	const Di = Object.create(null),
		kc = Object.create(null)
	function Rn(s, t) {
		if (!t) return s
		const e = t.split('.')
		for (let i = 0, n = e.length; i < n; ++i) {
			const o = e[i]
			s = s[o] || (s[o] = Object.create(null))
		}
		return s
	}
	function Sc(s, t, e) {
		return typeof t == 'string' ? Te(Rn(s, t), e) : Te(Rn(s, ''), t)
	}
	class lI {
		constructor(t) {
			;(this.animation = void 0),
				(this.backgroundColor = 'rgba(0,0,0,0.1)'),
				(this.borderColor = 'rgba(0,0,0,0.1)'),
				(this.color = '#666'),
				(this.datasets = {}),
				(this.devicePixelRatio = e => e.chart.platform.getDevicePixelRatio()),
				(this.elements = {}),
				(this.events = [
					'mousemove',
					'mouseout',
					'click',
					'touchstart',
					'touchmove',
				]),
				(this.font = {
					family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					size: 12,
					style: 'normal',
					lineHeight: 1.2,
					weight: null,
				}),
				(this.hover = {}),
				(this.hoverBackgroundColor = (e, i) => wc(i.backgroundColor)),
				(this.hoverBorderColor = (e, i) => wc(i.borderColor)),
				(this.hoverColor = (e, i) => wc(i.color)),
				(this.indexAxis = 'x'),
				(this.interaction = {
					mode: 'nearest',
					intersect: !0,
					includeInvisible: !1,
				}),
				(this.maintainAspectRatio = !0),
				(this.onHover = null),
				(this.onClick = null),
				(this.parsing = !0),
				(this.plugins = {}),
				(this.responsive = !0),
				(this.scale = void 0),
				(this.scales = {}),
				(this.showLine = !0),
				(this.drawActiveElementsOnTop = !0),
				this.describe(t)
		}
		set(t, e) {
			return Sc(this, t, e)
		}
		get(t) {
			return Rn(this, t)
		}
		describe(t, e) {
			return Sc(kc, t, e)
		}
		override(t, e) {
			return Sc(Di, t, e)
		}
		route(t, e, i, n) {
			const o = Rn(this, t),
				r = Rn(this, i),
				a = '_' + e
			Object.defineProperties(o, {
				[a]: { value: o[e], writable: !0 },
				[e]: {
					enumerable: !0,
					get() {
						const l = this[a],
							c = r[n]
						return V(l) ? Object.assign({}, c, l) : B(l, c)
					},
					set(l) {
						this[a] = l
					},
				},
			})
		}
	}
	var F = new lI({
		_scriptable: s => !s.startsWith('on'),
		_indexable: s => s !== 'events',
		hover: { _fallback: 'interaction' },
		interaction: { _scriptable: !1, _indexable: !1 },
	})
	function cI(s) {
		return !s || H(s.size) || H(s.family)
			? null
			: (s.style ? s.style + ' ' : '') +
					(s.weight ? s.weight + ' ' : '') +
					s.size +
					'px ' +
					s.family
	}
	function Gr(s, t, e, i, n) {
		let o = t[n]
		return (
			o || ((o = t[n] = s.measureText(n).width), e.push(n)), o > i && (i = o), i
		)
	}
	function hI(s, t, e, i) {
		i = i || {}
		let n = (i.data = i.data || {}),
			o = (i.garbageCollect = i.garbageCollect || [])
		i.font !== t &&
			((n = i.data = {}), (o = i.garbageCollect = []), (i.font = t)),
			s.save(),
			(s.font = t)
		let r = 0
		const a = e.length
		let l, c, h, d, u
		for (l = 0; l < a; l++)
			if (((d = e[l]), d != null && Q(d) !== !0)) r = Gr(s, n, o, r, d)
			else if (Q(d))
				for (c = 0, h = d.length; c < h; c++)
					(u = d[c]), u != null && !Q(u) && (r = Gr(s, n, o, r, u))
		s.restore()
		const p = o.length / 2
		if (p > e.length) {
			for (l = 0; l < p; l++) delete n[o[l]]
			o.splice(0, p)
		}
		return r
	}
	function Mi(s, t, e) {
		const i = s.currentDevicePixelRatio,
			n = e !== 0 ? Math.max(e / 2, 0.5) : 0
		return Math.round((t - n) * i) / i + n
	}
	function jf(s, t) {
		;(t = t || s.getContext('2d')),
			t.save(),
			t.resetTransform(),
			t.clearRect(0, 0, s.width, s.height),
			t.restore()
	}
	function Oc(s, t, e, i) {
		Yf(s, t, e, i, null)
	}
	function Yf(s, t, e, i, n) {
		let o, r, a, l, c, h
		const d = t.pointStyle,
			u = t.rotation,
			p = t.radius
		let f = (u || 0) * IO
		if (
			d &&
			typeof d == 'object' &&
			((o = d.toString()),
			o === '[object HTMLImageElement]' || o === '[object HTMLCanvasElement]')
		) {
			s.save(),
				s.translate(e, i),
				s.rotate(f),
				s.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
				s.restore()
			return
		}
		if (!(isNaN(p) || p <= 0)) {
			switch ((s.beginPath(), d)) {
				default:
					n ? s.ellipse(e, i, n / 2, p, 0, 0, q) : s.arc(e, i, p, 0, q),
						s.closePath()
					break
				case 'triangle':
					s.moveTo(e + Math.sin(f) * p, i - Math.cos(f) * p),
						(f += yf),
						s.lineTo(e + Math.sin(f) * p, i - Math.cos(f) * p),
						(f += yf),
						s.lineTo(e + Math.sin(f) * p, i - Math.cos(f) * p),
						s.closePath()
					break
				case 'rectRounded':
					;(c = p * 0.516),
						(l = p - c),
						(r = Math.cos(f + On) * l),
						(a = Math.sin(f + On) * l),
						s.arc(e - r, i - a, c, f - it, f - nt),
						s.arc(e + a, i - r, c, f - nt, f),
						s.arc(e + r, i + a, c, f, f + nt),
						s.arc(e - a, i + r, c, f + nt, f + it),
						s.closePath()
					break
				case 'rect':
					if (!u) {
						;(l = Math.SQRT1_2 * p),
							(h = n ? n / 2 : l),
							s.rect(e - h, i - l, 2 * h, 2 * l)
						break
					}
					f += On
				case 'rectRot':
					;(r = Math.cos(f) * p),
						(a = Math.sin(f) * p),
						s.moveTo(e - r, i - a),
						s.lineTo(e + a, i - r),
						s.lineTo(e + r, i + a),
						s.lineTo(e - a, i + r),
						s.closePath()
					break
				case 'crossRot':
					f += On
				case 'cross':
					;(r = Math.cos(f) * p),
						(a = Math.sin(f) * p),
						s.moveTo(e - r, i - a),
						s.lineTo(e + r, i + a),
						s.moveTo(e + a, i - r),
						s.lineTo(e - a, i + r)
					break
				case 'star':
					;(r = Math.cos(f) * p),
						(a = Math.sin(f) * p),
						s.moveTo(e - r, i - a),
						s.lineTo(e + r, i + a),
						s.moveTo(e + a, i - r),
						s.lineTo(e - a, i + r),
						(f += On),
						(r = Math.cos(f) * p),
						(a = Math.sin(f) * p),
						s.moveTo(e - r, i - a),
						s.lineTo(e + r, i + a),
						s.moveTo(e + a, i - r),
						s.lineTo(e - a, i + r)
					break
				case 'line':
					;(r = n ? n / 2 : Math.cos(f) * p),
						(a = Math.sin(f) * p),
						s.moveTo(e - r, i - a),
						s.lineTo(e + r, i + a)
					break
				case 'dash':
					s.moveTo(e, i), s.lineTo(e + Math.cos(f) * p, i + Math.sin(f) * p)
					break
			}
			s.fill(), t.borderWidth > 0 && s.stroke()
		}
	}
	function Pn(s, t, e) {
		return (
			(e = e || 0.5),
			!t ||
				(s &&
					s.x > t.left - e &&
					s.x < t.right + e &&
					s.y > t.top - e &&
					s.y < t.bottom + e)
		)
	}
	function qr(s, t) {
		s.save(),
			s.beginPath(),
			s.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
			s.clip()
	}
	function Zr(s) {
		s.restore()
	}
	function dI(s, t, e, i, n) {
		if (!t) return s.lineTo(e.x, e.y)
		if (n === 'middle') {
			const o = (t.x + e.x) / 2
			s.lineTo(o, t.y), s.lineTo(o, e.y)
		} else (n === 'after') != !!i ? s.lineTo(t.x, e.y) : s.lineTo(e.x, t.y)
		s.lineTo(e.x, e.y)
	}
	function uI(s, t, e, i) {
		if (!t) return s.lineTo(e.x, e.y)
		s.bezierCurveTo(
			i ? t.cp1x : t.cp2x,
			i ? t.cp1y : t.cp2y,
			i ? e.cp2x : e.cp1x,
			i ? e.cp2y : e.cp1y,
			e.x,
			e.y
		)
	}
	function Li(s, t, e, i, n, o = {}) {
		const r = Q(t) ? t : [t],
			a = o.strokeWidth > 0 && o.strokeColor !== ''
		let l, c
		for (s.save(), s.font = n.string, pI(s, o), l = 0; l < r.length; ++l)
			(c = r[l]),
				a &&
					(o.strokeColor && (s.strokeStyle = o.strokeColor),
					H(o.strokeWidth) || (s.lineWidth = o.strokeWidth),
					s.strokeText(c, e, i, o.maxWidth)),
				s.fillText(c, e, i, o.maxWidth),
				fI(s, e, i, c, o),
				(i += n.lineHeight)
		s.restore()
	}
	function pI(s, t) {
		t.translation && s.translate(t.translation[0], t.translation[1]),
			H(t.rotation) || s.rotate(t.rotation),
			t.color && (s.fillStyle = t.color),
			t.textAlign && (s.textAlign = t.textAlign),
			t.textBaseline && (s.textBaseline = t.textBaseline)
	}
	function fI(s, t, e, i, n) {
		if (n.strikethrough || n.underline) {
			const o = s.measureText(i),
				r = t - o.actualBoundingBoxLeft,
				a = t + o.actualBoundingBoxRight,
				l = e - o.actualBoundingBoxAscent,
				c = e + o.actualBoundingBoxDescent,
				h = n.strikethrough ? (l + c) / 2 : c
			;(s.strokeStyle = s.fillStyle),
				s.beginPath(),
				(s.lineWidth = n.decorationWidth || 2),
				s.moveTo(r, h),
				s.lineTo(a, h),
				s.stroke()
		}
	}
	function Nn(s, t) {
		const { x: e, y: i, w: n, h: o, radius: r } = t
		s.arc(e + r.topLeft, i + r.topLeft, r.topLeft, -nt, it, !0),
			s.lineTo(e, i + o - r.bottomLeft),
			s.arc(e + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, it, nt, !0),
			s.lineTo(e + n - r.bottomRight, i + o),
			s.arc(
				e + n - r.bottomRight,
				i + o - r.bottomRight,
				r.bottomRight,
				nt,
				0,
				!0
			),
			s.lineTo(e + n, i + r.topRight),
			s.arc(e + n - r.topRight, i + r.topRight, r.topRight, 0, -nt, !0),
			s.lineTo(e + r.topLeft, i)
	}
	const _I = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
		gI = new RegExp(
			/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
		)
	function mI(s, t) {
		const e = ('' + s).match(_I)
		if (!e || e[1] === 'normal') return t * 1.2
		switch (((s = +e[2]), e[3])) {
			case 'px':
				return s
			case '%':
				s /= 100
				break
		}
		return t * s
	}
	const bI = s => +s || 0
	function Ic(s, t) {
		const e = {},
			i = V(t),
			n = i ? Object.keys(t) : t,
			o = V(s) ? (i ? r => B(s[r], s[t[r]]) : r => s[r]) : () => s
		for (const r of n) e[r] = bI(o(r))
		return e
	}
	function Kf(s) {
		return Ic(s, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
	}
	function $i(s) {
		return Ic(s, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
	}
	function pt(s) {
		const t = Kf(s)
		return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t
	}
	function lt(s, t) {
		;(s = s || {}), (t = t || F.font)
		let e = B(s.size, t.size)
		typeof e == 'string' && (e = parseInt(e, 10))
		let i = B(s.style, t.style)
		i &&
			!('' + i).match(gI) &&
			(console.warn('Invalid font style specified: "' + i + '"'), (i = ''))
		const n = {
			family: B(s.family, t.family),
			lineHeight: mI(B(s.lineHeight, t.lineHeight), e),
			size: e,
			style: i,
			weight: B(s.weight, t.weight),
			string: '',
		}
		return (n.string = cI(n)), n
	}
	function tt(s, t, e, i) {
		let n = !0,
			o,
			r,
			a
		for (o = 0, r = s.length; o < r; ++o)
			if (
				((a = s[o]),
				a !== void 0 &&
					(t !== void 0 && typeof a == 'function' && ((a = a(t)), (n = !1)),
					e !== void 0 && Q(a) && ((a = a[e % a.length]), (n = !1)),
					a !== void 0))
			)
				return i && !n && (i.cacheable = !1), a
	}
	function vI(s, t, e) {
		const { min: i, max: n } = s,
			o = gf(t, (n - i) / 2),
			r = (a, l) => (e && a === 0 ? 0 : a + l)
		return { min: r(i, -Math.abs(o)), max: r(n, o) }
	}
	function ni(s, t) {
		return Object.assign(Object.create(s), t)
	}
	function Dc(s, t = [''], e = s, i, n = () => s[0]) {
		jt(i) || (i = Zf('_fallback', s))
		const o = {
			[Symbol.toStringTag]: 'Object',
			_cacheable: !0,
			_scopes: s,
			_rootScopes: e,
			_fallback: i,
			_getTarget: n,
			override: r => Dc([r, ...s], t, e, i),
		}
		return new Proxy(o, {
			deleteProperty(r, a) {
				return delete r[a], delete r._keys, delete s[0][a], !0
			},
			get(r, a) {
				return Xf(r, a, () => kI(a, t, s, r))
			},
			getOwnPropertyDescriptor(r, a) {
				return Reflect.getOwnPropertyDescriptor(r._scopes[0], a)
			},
			getPrototypeOf() {
				return Reflect.getPrototypeOf(s[0])
			},
			has(r, a) {
				return Qf(r).includes(a)
			},
			ownKeys(r) {
				return Qf(r)
			},
			set(r, a, l) {
				const c = r._storage || (r._storage = n())
				return (r[a] = c[a] = l), delete r._keys, !0
			},
		})
	}
	function ks(s, t, e, i) {
		const n = {
			_cacheable: !1,
			_proxy: s,
			_context: t,
			_subProxy: e,
			_stack: new Set(),
			_descriptors: Uf(s, i),
			setContext: o => ks(s, o, e, i),
			override: o => ks(s.override(o), t, e, i),
		}
		return new Proxy(n, {
			deleteProperty(o, r) {
				return delete o[r], delete s[r], !0
			},
			get(o, r, a) {
				return Xf(o, r, () => TI(o, r, a))
			},
			getOwnPropertyDescriptor(o, r) {
				return o._descriptors.allKeys
					? Reflect.has(s, r)
						? { enumerable: !0, configurable: !0 }
						: void 0
					: Reflect.getOwnPropertyDescriptor(s, r)
			},
			getPrototypeOf() {
				return Reflect.getPrototypeOf(s)
			},
			has(o, r) {
				return Reflect.has(s, r)
			},
			ownKeys() {
				return Reflect.ownKeys(s)
			},
			set(o, r, a) {
				return (s[r] = a), delete o[r], !0
			},
		})
	}
	function Uf(s, t = { scriptable: !0, indexable: !0 }) {
		const {
			_scriptable: e = t.scriptable,
			_indexable: i = t.indexable,
			_allKeys: n = t.allKeys,
		} = s
		return {
			allKeys: n,
			scriptable: e,
			indexable: i,
			isScriptable: ei(e) ? e : () => e,
			isIndexable: ei(i) ? i : () => i,
		}
	}
	const yI = (s, t) => (s ? s + gc(t) : t),
		Mc = (s, t) =>
			V(t) &&
			s !== 'adapters' &&
			(Object.getPrototypeOf(t) === null || t.constructor === Object)
	function Xf(s, t, e) {
		if (Object.prototype.hasOwnProperty.call(s, t)) return s[t]
		const i = e()
		return (s[t] = i), i
	}
	function TI(s, t, e) {
		const { _proxy: i, _context: n, _subProxy: o, _descriptors: r } = s
		let a = i[t]
		return (
			ei(a) && r.isScriptable(t) && (a = EI(t, a, s, e)),
			Q(a) && a.length && (a = xI(t, a, s, r.isIndexable)),
			Mc(t, a) && (a = ks(a, n, o && o[t], r)),
			a
		)
	}
	function EI(s, t, e, i) {
		const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e
		if (a.has(s))
			throw new Error(
				'Recursion detected: ' + Array.from(a).join('->') + '->' + s
			)
		return (
			a.add(s),
			(t = t(o, r || i)),
			a.delete(s),
			Mc(s, t) && (t = Lc(n._scopes, n, s, t)),
			t
		)
	}
	function xI(s, t, e, i) {
		const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e
		if (jt(o.index) && i(s)) t = t[o.index % t.length]
		else if (V(t[0])) {
			const l = t,
				c = n._scopes.filter(h => h !== l)
			t = []
			for (const h of l) {
				const d = Lc(c, n, s, h)
				t.push(ks(d, o, r && r[s], a))
			}
		}
		return t
	}
	function Gf(s, t, e) {
		return ei(s) ? s(t, e) : s
	}
	const CI = (s, t) => (s === !0 ? t : typeof s == 'string' ? ti(t, s) : void 0)
	function AI(s, t, e, i, n) {
		for (const o of t) {
			const r = CI(e, o)
			if (r) {
				s.add(r)
				const a = Gf(r._fallback, e, n)
				if (jt(a) && a !== e && a !== i) return a
			} else if (r === !1 && jt(i) && e !== i) return null
		}
		return !1
	}
	function Lc(s, t, e, i) {
		const n = t._rootScopes,
			o = Gf(t._fallback, e, i),
			r = [...s, ...n],
			a = new Set()
		a.add(i)
		let l = qf(a, r, e, o || e, i)
		return l === null ||
			(jt(o) && o !== e && ((l = qf(a, r, o, l, i)), l === null))
			? !1
			: Dc(Array.from(a), [''], n, o, () => wI(t, e, i))
	}
	function qf(s, t, e, i, n) {
		for (; e; ) e = AI(s, t, e, i, n)
		return e
	}
	function wI(s, t, e) {
		const i = s._getTarget()
		t in i || (i[t] = {})
		const n = i[t]
		return Q(n) && V(e) ? e : n
	}
	function kI(s, t, e, i) {
		let n
		for (const o of t)
			if (((n = Zf(yI(o, s), e)), jt(n))) return Mc(s, n) ? Lc(e, i, s, n) : n
	}
	function Zf(s, t) {
		for (const e of t) {
			if (!e) continue
			const i = e[s]
			if (jt(i)) return i
		}
	}
	function Qf(s) {
		let t = s._keys
		return t || (t = s._keys = SI(s._scopes)), t
	}
	function SI(s) {
		const t = new Set()
		for (const e of s)
			for (const i of Object.keys(e).filter(n => !n.startsWith('_'))) t.add(i)
		return Array.from(t)
	}
	function Jf(s, t, e, i) {
		const { iScale: n } = s,
			{ key: o = 'r' } = this._parsing,
			r = new Array(i)
		let a, l, c, h
		for (a = 0, l = i; a < l; ++a)
			(c = a + e), (h = t[c]), (r[a] = { r: n.parse(ti(h, o), c) })
		return r
	}
	const OI = Number.EPSILON || 1e-14,
		Ss = (s, t) => t < s.length && !s[t].skip && s[t],
		t_ = s => (s === 'x' ? 'y' : 'x')
	function II(s, t, e, i) {
		const n = s.skip ? t : s,
			o = t,
			r = e.skip ? t : e,
			a = bc(o, n),
			l = bc(r, o)
		let c = a / (a + l),
			h = l / (a + l)
		;(c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h)
		const d = i * c,
			u = i * h
		return {
			previous: { x: o.x - d * (r.x - n.x), y: o.y - d * (r.y - n.y) },
			next: { x: o.x + u * (r.x - n.x), y: o.y + u * (r.y - n.y) },
		}
	}
	function DI(s, t, e) {
		const i = s.length
		let n,
			o,
			r,
			a,
			l,
			c = Ss(s, 0)
		for (let h = 0; h < i - 1; ++h)
			if (((l = c), (c = Ss(s, h + 1)), !(!l || !c))) {
				if (In(t[h], 0, OI)) {
					e[h] = e[h + 1] = 0
					continue
				}
				;(n = e[h] / t[h]),
					(o = e[h + 1] / t[h]),
					(a = Math.pow(n, 2) + Math.pow(o, 2)),
					!(a <= 9) &&
						((r = 3 / Math.sqrt(a)),
						(e[h] = n * r * t[h]),
						(e[h + 1] = o * r * t[h]))
			}
	}
	function MI(s, t, e = 'x') {
		const i = t_(e),
			n = s.length
		let o,
			r,
			a,
			l = Ss(s, 0)
		for (let c = 0; c < n; ++c) {
			if (((r = a), (a = l), (l = Ss(s, c + 1)), !a)) continue
			const h = a[e],
				d = a[i]
			r &&
				((o = (h - r[e]) / 3),
				(a[`cp1${e}`] = h - o),
				(a[`cp1${i}`] = d - o * t[c])),
				l &&
					((o = (l[e] - h) / 3),
					(a[`cp2${e}`] = h + o),
					(a[`cp2${i}`] = d + o * t[c]))
		}
	}
	function LI(s, t = 'x') {
		const e = t_(t),
			i = s.length,
			n = Array(i).fill(0),
			o = Array(i)
		let r,
			a,
			l,
			c = Ss(s, 0)
		for (r = 0; r < i; ++r)
			if (((a = l), (l = c), (c = Ss(s, r + 1)), !!l)) {
				if (c) {
					const h = c[t] - l[t]
					n[r] = h !== 0 ? (c[e] - l[e]) / h : 0
				}
				o[r] = a
					? c
						? Ee(n[r - 1]) !== Ee(n[r])
							? 0
							: (n[r - 1] + n[r]) / 2
						: n[r - 1]
					: n[r]
			}
		DI(s, n, o), MI(s, o, t)
	}
	function Qr(s, t, e) {
		return Math.max(Math.min(s, e), t)
	}
	function $I(s, t) {
		let e,
			i,
			n,
			o,
			r,
			a = Pn(s[0], t)
		for (e = 0, i = s.length; e < i; ++e)
			(r = o),
				(o = a),
				(a = e < i - 1 && Pn(s[e + 1], t)),
				o &&
					((n = s[e]),
					r &&
						((n.cp1x = Qr(n.cp1x, t.left, t.right)),
						(n.cp1y = Qr(n.cp1y, t.top, t.bottom))),
					a &&
						((n.cp2x = Qr(n.cp2x, t.left, t.right)),
						(n.cp2y = Qr(n.cp2y, t.top, t.bottom))))
	}
	function RI(s, t, e, i, n) {
		let o, r, a, l
		if (
			(t.spanGaps && (s = s.filter(c => !c.skip)),
			t.cubicInterpolationMode === 'monotone')
		)
			LI(s, n)
		else {
			let c = i ? s[s.length - 1] : s[0]
			for (o = 0, r = s.length; o < r; ++o)
				(a = s[o]),
					(l = II(c, a, s[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension)),
					(a.cp1x = l.previous.x),
					(a.cp1y = l.previous.y),
					(a.cp2x = l.next.x),
					(a.cp2y = l.next.y),
					(c = a)
		}
		t.capBezierPoints && $I(s, e)
	}
	function e_() {
		return typeof window < 'u' && typeof document < 'u'
	}
	function $c(s) {
		let t = s.parentNode
		return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t
	}
	function Jr(s, t, e) {
		let i
		return (
			typeof s == 'string'
				? ((i = parseInt(s, 10)),
				  s.indexOf('%') !== -1 && (i = (i / 100) * t.parentNode[e]))
				: (i = s),
			i
		)
	}
	const ta = s => window.getComputedStyle(s, null)
	function PI(s, t) {
		return ta(s).getPropertyValue(t)
	}
	const NI = ['top', 'right', 'bottom', 'left']
	function Ri(s, t, e) {
		const i = {}
		e = e ? '-' + e : ''
		for (let n = 0; n < 4; n++) {
			const o = NI[n]
			i[o] = parseFloat(s[t + '-' + o + e]) || 0
		}
		return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i
	}
	const BI = (s, t, e) => (s > 0 || t > 0) && (!e || !e.shadowRoot)
	function HI(s, t) {
		const e = s.touches,
			i = e && e.length ? e[0] : s,
			{ offsetX: n, offsetY: o } = i
		let r = !1,
			a,
			l
		if (BI(n, o, s.target)) (a = n), (l = o)
		else {
			const c = t.getBoundingClientRect()
			;(a = i.clientX - c.left), (l = i.clientY - c.top), (r = !0)
		}
		return { x: a, y: l, box: r }
	}
	function Pi(s, t) {
		if ('native' in s) return s
		const { canvas: e, currentDevicePixelRatio: i } = t,
			n = ta(e),
			o = n.boxSizing === 'border-box',
			r = Ri(n, 'padding'),
			a = Ri(n, 'border', 'width'),
			{ x: l, y: c, box: h } = HI(s, e),
			d = r.left + (h && a.left),
			u = r.top + (h && a.top)
		let { width: p, height: f } = t
		return (
			o && ((p -= r.width + a.width), (f -= r.height + a.height)),
			{
				x: Math.round((((l - d) / p) * e.width) / i),
				y: Math.round((((c - u) / f) * e.height) / i),
			}
		)
	}
	function VI(s, t, e) {
		let i, n
		if (t === void 0 || e === void 0) {
			const o = $c(s)
			if (!o) (t = s.clientWidth), (e = s.clientHeight)
			else {
				const r = o.getBoundingClientRect(),
					a = ta(o),
					l = Ri(a, 'border', 'width'),
					c = Ri(a, 'padding')
				;(t = r.width - c.width - l.width),
					(e = r.height - c.height - l.height),
					(i = Jr(a.maxWidth, o, 'clientWidth')),
					(n = Jr(a.maxHeight, o, 'clientHeight'))
			}
		}
		return { width: t, height: e, maxWidth: i || zr, maxHeight: n || zr }
	}
	const Rc = s => Math.round(s * 10) / 10
	function FI(s, t, e, i) {
		const n = ta(s),
			o = Ri(n, 'margin'),
			r = Jr(n.maxWidth, s, 'clientWidth') || zr,
			a = Jr(n.maxHeight, s, 'clientHeight') || zr,
			l = VI(s, t, e)
		let { width: c, height: h } = l
		if (n.boxSizing === 'content-box') {
			const d = Ri(n, 'border', 'width'),
				u = Ri(n, 'padding')
			;(c -= u.width + d.width), (h -= u.height + d.height)
		}
		return (
			(c = Math.max(0, c - o.width)),
			(h = Math.max(0, i ? Math.floor(c / i) : h - o.height)),
			(c = Rc(Math.min(c, r, l.maxWidth))),
			(h = Rc(Math.min(h, a, l.maxHeight))),
			c && !h && (h = Rc(c / 2)),
			{ width: c, height: h }
		)
	}
	function i_(s, t, e) {
		const i = t || 1,
			n = Math.floor(s.height * i),
			o = Math.floor(s.width * i)
		;(s.height = n / i), (s.width = o / i)
		const r = s.canvas
		return (
			r.style &&
				(e || (!r.style.height && !r.style.width)) &&
				((r.style.height = `${s.height}px`), (r.style.width = `${s.width}px`)),
			s.currentDevicePixelRatio !== i || r.height !== n || r.width !== o
				? ((s.currentDevicePixelRatio = i),
				  (r.height = n),
				  (r.width = o),
				  s.ctx.setTransform(i, 0, 0, i, 0, 0),
				  !0)
				: !1
		)
	}
	const WI = (function () {
		let s = !1
		try {
			const t = {
				get passive() {
					return (s = !0), !1
				},
			}
			window.addEventListener('test', null, t),
				window.removeEventListener('test', null, t)
		} catch {}
		return s
	})()
	function s_(s, t) {
		const e = PI(s, t),
			i = e && e.match(/^(\d+)(\.\d+)?px$/)
		return i ? +i[1] : void 0
	}
	function Ni(s, t, e, i) {
		return { x: s.x + e * (t.x - s.x), y: s.y + e * (t.y - s.y) }
	}
	function zI(s, t, e, i) {
		return {
			x: s.x + e * (t.x - s.x),
			y:
				i === 'middle'
					? e < 0.5
						? s.y
						: t.y
					: i === 'after'
					? e < 1
						? s.y
						: t.y
					: e > 0
					? t.y
					: s.y,
		}
	}
	function jI(s, t, e, i) {
		const n = { x: s.cp2x, y: s.cp2y },
			o = { x: t.cp1x, y: t.cp1y },
			r = Ni(s, n, e),
			a = Ni(n, o, e),
			l = Ni(o, t, e),
			c = Ni(r, a, e),
			h = Ni(a, l, e)
		return Ni(c, h, e)
	}
	const n_ = new Map()
	function YI(s, t) {
		t = t || {}
		const e = s + JSON.stringify(t)
		let i = n_.get(e)
		return i || ((i = new Intl.NumberFormat(s, t)), n_.set(e, i)), i
	}
	function Bn(s, t, e) {
		return YI(t, e).format(s)
	}
	const KI = function (s, t) {
			return {
				x(e) {
					return s + s + t - e
				},
				setWidth(e) {
					t = e
				},
				textAlign(e) {
					return e === 'center' ? e : e === 'right' ? 'left' : 'right'
				},
				xPlus(e, i) {
					return e - i
				},
				leftForLtr(e, i) {
					return e - i
				},
			}
		},
		UI = function () {
			return {
				x(s) {
					return s
				},
				setWidth(s) {},
				textAlign(s) {
					return s
				},
				xPlus(s, t) {
					return s + t
				},
				leftForLtr(s, t) {
					return s
				},
			}
		}
	function Os(s, t, e) {
		return s ? KI(t, e) : UI()
	}
	function o_(s, t) {
		let e, i
		;(t === 'ltr' || t === 'rtl') &&
			((e = s.canvas.style),
			(i = [
				e.getPropertyValue('direction'),
				e.getPropertyPriority('direction'),
			]),
			e.setProperty('direction', t, 'important'),
			(s.prevTextDirection = i))
	}
	function r_(s, t) {
		t !== void 0 &&
			(delete s.prevTextDirection,
			s.canvas.style.setProperty('direction', t[0], t[1]))
	}
	function a_(s) {
		return s === 'angle'
			? { between: Dn, compare: LO, normalize: Vt }
			: { between: Ie, compare: (t, e) => t - e, normalize: t => t }
	}
	function l_({ start: s, end: t, count: e, loop: i, style: n }) {
		return {
			start: s % e,
			end: t % e,
			loop: i && (t - s + 1) % e === 0,
			style: n,
		}
	}
	function XI(s, t, e) {
		const { property: i, start: n, end: o } = e,
			{ between: r, normalize: a } = a_(i),
			l = t.length
		let { start: c, end: h, loop: d } = s,
			u,
			p
		if (d) {
			for (c += l, h += l, u = 0, p = l; u < p && r(a(t[c % l][i]), n, o); ++u)
				c--, h--
			;(c %= l), (h %= l)
		}
		return h < c && (h += l), { start: c, end: h, loop: d, style: s.style }
	}
	function c_(s, t, e) {
		if (!e) return [s]
		const { property: i, start: n, end: o } = e,
			r = t.length,
			{ compare: a, between: l, normalize: c } = a_(i),
			{ start: h, end: d, loop: u, style: p } = XI(s, t, e),
			f = []
		let b = !1,
			v = null,
			y,
			T,
			x
		const E = () => l(n, x, y) && a(n, x) !== 0,
			C = () => a(o, y) === 0 || l(o, x, y),
			A = () => b || E(),
			w = () => !b || C()
		for (let S = h, k = h; S <= d; ++S)
			(T = t[S % r]),
				!T.skip &&
					((y = c(T[i])),
					y !== x &&
						((b = l(y, n, o)),
						v === null && A() && (v = a(y, n) === 0 ? S : k),
						v !== null &&
							w() &&
							(f.push(l_({ start: v, end: S, loop: u, count: r, style: p })),
							(v = null)),
						(k = S),
						(x = y)))
		return (
			v !== null &&
				f.push(l_({ start: v, end: d, loop: u, count: r, style: p })),
			f
		)
	}
	function h_(s, t) {
		const e = [],
			i = s.segments
		for (let n = 0; n < i.length; n++) {
			const o = c_(i[n], s.points, t)
			o.length && e.push(...o)
		}
		return e
	}
	function GI(s, t, e, i) {
		let n = 0,
			o = t - 1
		if (e && !i) for (; n < t && !s[n].skip; ) n++
		for (; n < t && s[n].skip; ) n++
		for (n %= t, e && (o += n); o > n && s[o % t].skip; ) o--
		return (o %= t), { start: n, end: o }
	}
	function qI(s, t, e, i) {
		const n = s.length,
			o = []
		let r = t,
			a = s[t],
			l
		for (l = t + 1; l <= e; ++l) {
			const c = s[l % n]
			c.skip || c.stop
				? a.skip ||
				  ((i = !1),
				  o.push({ start: t % n, end: (l - 1) % n, loop: i }),
				  (t = r = c.stop ? l : null))
				: ((r = l), a.skip && (t = l)),
				(a = c)
		}
		return r !== null && o.push({ start: t % n, end: r % n, loop: i }), o
	}
	function ZI(s, t) {
		const e = s.points,
			i = s.options.spanGaps,
			n = e.length
		if (!n) return []
		const o = !!s._loop,
			{ start: r, end: a } = GI(e, n, o, i)
		if (i === !0) return d_(s, [{ start: r, end: a, loop: o }], e, t)
		const l = a < r ? a + n : a,
			c = !!s._fullLoop && r === 0 && a === n - 1
		return d_(s, qI(e, r, l, c), e, t)
	}
	function d_(s, t, e, i) {
		return !i || !i.setContext || !e ? t : QI(s, t, e, i)
	}
	function QI(s, t, e, i) {
		const n = s._chart.getContext(),
			o = u_(s.options),
			{
				_datasetIndex: r,
				options: { spanGaps: a },
			} = s,
			l = e.length,
			c = []
		let h = o,
			d = t[0].start,
			u = d
		function p(f, b, v, y) {
			const T = a ? -1 : 1
			if (f !== b) {
				for (f += l; e[f % l].skip; ) f -= T
				for (; e[b % l].skip; ) b += T
				f % l !== b % l &&
					(c.push({ start: f % l, end: b % l, loop: v, style: y }),
					(h = y),
					(d = b % l))
			}
		}
		for (const f of t) {
			d = a ? d : f.start
			let b = e[d % l],
				v
			for (u = d + 1; u <= f.end; u++) {
				const y = e[u % l]
				;(v = u_(
					i.setContext(
						ni(n, {
							type: 'segment',
							p0: b,
							p1: y,
							p0DataIndex: (u - 1) % l,
							p1DataIndex: u % l,
							datasetIndex: r,
						})
					)
				)),
					JI(v, h) && p(d, u - 1, f.loop, h),
					(b = y),
					(h = v)
			}
			d < u - 1 && p(d, u - 1, f.loop, h)
		}
		return c
	}
	function u_(s) {
		return {
			backgroundColor: s.backgroundColor,
			borderCapStyle: s.borderCapStyle,
			borderDash: s.borderDash,
			borderDashOffset: s.borderDashOffset,
			borderJoinStyle: s.borderJoinStyle,
			borderWidth: s.borderWidth,
			borderColor: s.borderColor,
		}
	}
	function JI(s, t) {
		return t && JSON.stringify(s) !== JSON.stringify(t)
	}
	/*!
	 * Chart.js v3.9.1
	 * https://www.chartjs.org
	 * (c) 2022 Chart.js Contributors
	 * Released under the MIT License
	 */ class tD {
		constructor() {
			;(this._request = null),
				(this._charts = new Map()),
				(this._running = !1),
				(this._lastDate = void 0)
		}
		_notify(t, e, i, n) {
			const o = e.listeners[n],
				r = e.duration
			o.forEach(a =>
				a({
					chart: t,
					initial: e.initial,
					numSteps: r,
					currentStep: Math.min(i - e.start, r),
				})
			)
		}
		_refresh() {
			this._request ||
				((this._running = !0),
				(this._request = Sf.call(window, () => {
					this._update(),
						(this._request = null),
						this._running && this._refresh()
				})))
		}
		_update(t = Date.now()) {
			let e = 0
			this._charts.forEach((i, n) => {
				if (!i.running || !i.items.length) return
				const o = i.items
				let r = o.length - 1,
					a = !1,
					l
				for (; r >= 0; --r)
					(l = o[r]),
						l._active
							? (l._total > i.duration && (i.duration = l._total),
							  l.tick(t),
							  (a = !0))
							: ((o[r] = o[o.length - 1]), o.pop())
				a && (n.draw(), this._notify(n, i, t, 'progress')),
					o.length ||
						((i.running = !1),
						this._notify(n, i, t, 'complete'),
						(i.initial = !1)),
					(e += o.length)
			}),
				(this._lastDate = t),
				e === 0 && (this._running = !1)
		}
		_getAnims(t) {
			const e = this._charts
			let i = e.get(t)
			return (
				i ||
					((i = {
						running: !1,
						initial: !0,
						items: [],
						listeners: { complete: [], progress: [] },
					}),
					e.set(t, i)),
				i
			)
		}
		listen(t, e, i) {
			this._getAnims(t).listeners[e].push(i)
		}
		add(t, e) {
			!e || !e.length || this._getAnims(t).items.push(...e)
		}
		has(t) {
			return this._getAnims(t).items.length > 0
		}
		start(t) {
			const e = this._charts.get(t)
			e &&
				((e.running = !0),
				(e.start = Date.now()),
				(e.duration = e.items.reduce((i, n) => Math.max(i, n._duration), 0)),
				this._refresh())
		}
		running(t) {
			if (!this._running) return !1
			const e = this._charts.get(t)
			return !(!e || !e.running || !e.items.length)
		}
		stop(t) {
			const e = this._charts.get(t)
			if (!e || !e.items.length) return
			const i = e.items
			let n = i.length - 1
			for (; n >= 0; --n) i[n].cancel()
			;(e.items = []), this._notify(t, e, Date.now(), 'complete')
		}
		remove(t) {
			return this._charts.delete(t)
		}
	}
	var xe = new tD()
	const p_ = 'transparent',
		eD = {
			boolean(s, t, e) {
				return e > 0.5 ? t : s
			},
			color(s, t, e) {
				const i = zf(s || p_),
					n = i.valid && zf(t || p_)
				return n && n.valid ? n.mix(i, e).hexString() : t
			},
			number(s, t, e) {
				return s + (t - s) * e
			},
		}
	class f_ {
		constructor(t, e, i, n) {
			const o = e[i]
			n = tt([t.to, n, o, t.from])
			const r = tt([t.from, o, n])
			;(this._active = !0),
				(this._fn = t.fn || eD[t.type || typeof r]),
				(this._easing = Mn[t.easing] || Mn.linear),
				(this._start = Math.floor(Date.now() + (t.delay || 0))),
				(this._duration = this._total = Math.floor(t.duration)),
				(this._loop = !!t.loop),
				(this._target = e),
				(this._prop = i),
				(this._from = r),
				(this._to = n),
				(this._promises = void 0)
		}
		active() {
			return this._active
		}
		update(t, e, i) {
			if (this._active) {
				this._notify(!1)
				const n = this._target[this._prop],
					o = i - this._start,
					r = this._duration - o
				;(this._start = i),
					(this._duration = Math.floor(Math.max(r, t.duration))),
					(this._total += o),
					(this._loop = !!t.loop),
					(this._to = tt([t.to, e, n, t.from])),
					(this._from = tt([t.from, n, e]))
			}
		}
		cancel() {
			this._active &&
				(this.tick(Date.now()), (this._active = !1), this._notify(!1))
		}
		tick(t) {
			const e = t - this._start,
				i = this._duration,
				n = this._prop,
				o = this._from,
				r = this._loop,
				a = this._to
			let l
			if (((this._active = o !== a && (r || e < i)), !this._active)) {
				;(this._target[n] = a), this._notify(!0)
				return
			}
			if (e < 0) {
				this._target[n] = o
				return
			}
			;(l = (e / i) % 2),
				(l = r && l > 1 ? 2 - l : l),
				(l = this._easing(Math.min(1, Math.max(0, l)))),
				(this._target[n] = this._fn(o, a, l))
		}
		wait() {
			const t = this._promises || (this._promises = [])
			return new Promise((e, i) => {
				t.push({ res: e, rej: i })
			})
		}
		_notify(t) {
			const e = t ? 'res' : 'rej',
				i = this._promises || []
			for (let n = 0; n < i.length; n++) i[n][e]()
		}
	}
	const iD = ['x', 'y', 'borderWidth', 'radius', 'tension'],
		sD = ['color', 'borderColor', 'backgroundColor']
	F.set('animation', {
		delay: void 0,
		duration: 1e3,
		easing: 'easeOutQuart',
		fn: void 0,
		from: void 0,
		loop: void 0,
		to: void 0,
		type: void 0,
	})
	const nD = Object.keys(F.animation)
	F.describe('animation', {
		_fallback: !1,
		_indexable: !1,
		_scriptable: s => s !== 'onProgress' && s !== 'onComplete' && s !== 'fn',
	}),
		F.set('animations', {
			colors: { type: 'color', properties: sD },
			numbers: { type: 'number', properties: iD },
		}),
		F.describe('animations', { _fallback: 'animation' }),
		F.set('transitions', {
			active: { animation: { duration: 400 } },
			resize: { animation: { duration: 0 } },
			show: {
				animations: {
					colors: { from: 'transparent' },
					visible: { type: 'boolean', duration: 0 },
				},
			},
			hide: {
				animations: {
					colors: { to: 'transparent' },
					visible: { type: 'boolean', easing: 'linear', fn: s => s | 0 },
				},
			},
		})
	class Pc {
		constructor(t, e) {
			;(this._chart = t), (this._properties = new Map()), this.configure(e)
		}
		configure(t) {
			if (!V(t)) return
			const e = this._properties
			Object.getOwnPropertyNames(t).forEach(i => {
				const n = t[i]
				if (!V(n)) return
				const o = {}
				for (const r of nD) o[r] = n[r]
				;((Q(n.properties) && n.properties) || [i]).forEach(r => {
					;(r === i || !e.has(r)) && e.set(r, o)
				})
			})
		}
		_animateOptions(t, e) {
			const i = e.options,
				n = rD(t, i)
			if (!n) return []
			const o = this._createAnimations(n, i)
			return (
				i.$shared &&
					oD(t.options.$animations, i).then(
						() => {
							t.options = i
						},
						() => {}
					),
				o
			)
		}
		_createAnimations(t, e) {
			const i = this._properties,
				n = [],
				o = t.$animations || (t.$animations = {}),
				r = Object.keys(e),
				a = Date.now()
			let l
			for (l = r.length - 1; l >= 0; --l) {
				const c = r[l]
				if (c.charAt(0) === '$') continue
				if (c === 'options') {
					n.push(...this._animateOptions(t, e))
					continue
				}
				const h = e[c]
				let d = o[c]
				const u = i.get(c)
				if (d)
					if (u && d.active()) {
						d.update(u, h, a)
						continue
					} else d.cancel()
				if (!u || !u.duration) {
					t[c] = h
					continue
				}
				;(o[c] = d = new f_(u, t, c, h)), n.push(d)
			}
			return n
		}
		update(t, e) {
			if (this._properties.size === 0) {
				Object.assign(t, e)
				return
			}
			const i = this._createAnimations(t, e)
			if (i.length) return xe.add(this._chart, i), !0
		}
	}
	function oD(s, t) {
		const e = [],
			i = Object.keys(t)
		for (let n = 0; n < i.length; n++) {
			const o = s[i[n]]
			o && o.active() && e.push(o.wait())
		}
		return Promise.all(e)
	}
	function rD(s, t) {
		if (!t) return
		let e = s.options
		if (!e) {
			s.options = t
			return
		}
		return (
			e.$shared &&
				(s.options = e =
					Object.assign({}, e, { $shared: !1, $animations: {} })),
			e
		)
	}
	function __(s, t) {
		const e = (s && s.options) || {},
			i = e.reverse,
			n = e.min === void 0 ? t : 0,
			o = e.max === void 0 ? t : 0
		return { start: i ? o : n, end: i ? n : o }
	}
	function aD(s, t, e) {
		if (e === !1) return !1
		const i = __(s, e),
			n = __(t, e)
		return { top: n.end, right: i.end, bottom: n.start, left: i.start }
	}
	function lD(s) {
		let t, e, i, n
		return (
			V(s)
				? ((t = s.top), (e = s.right), (i = s.bottom), (n = s.left))
				: (t = e = i = n = s),
			{ top: t, right: e, bottom: i, left: n, disabled: s === !1 }
		)
	}
	function g_(s, t) {
		const e = [],
			i = s._getSortedDatasetMetas(t)
		let n, o
		for (n = 0, o = i.length; n < o; ++n) e.push(i[n].index)
		return e
	}
	function m_(s, t, e, i = {}) {
		const n = s.keys,
			o = i.mode === 'single'
		let r, a, l, c
		if (t !== null) {
			for (r = 0, a = n.length; r < a; ++r) {
				if (((l = +n[r]), l === e)) {
					if (i.all) continue
					break
				}
				;(c = s.values[l]),
					rt(c) && (o || t === 0 || Ee(t) === Ee(c)) && (t += c)
			}
			return t
		}
	}
	function cD(s) {
		const t = Object.keys(s),
			e = new Array(t.length)
		let i, n, o
		for (i = 0, n = t.length; i < n; ++i) (o = t[i]), (e[i] = { x: o, y: s[o] })
		return e
	}
	function b_(s, t) {
		const e = s && s.options.stacked
		return e || (e === void 0 && t.stack !== void 0)
	}
	function hD(s, t, e) {
		return `${s.id}.${t.id}.${e.stack || e.type}`
	}
	function dD(s) {
		const { min: t, max: e, minDefined: i, maxDefined: n } = s.getUserBounds()
		return {
			min: i ? t : Number.NEGATIVE_INFINITY,
			max: n ? e : Number.POSITIVE_INFINITY,
		}
	}
	function uD(s, t, e) {
		const i = s[t] || (s[t] = {})
		return i[e] || (i[e] = {})
	}
	function v_(s, t, e, i) {
		for (const n of t.getMatchingVisibleMetas(i).reverse()) {
			const o = s[n.index]
			if ((e && o > 0) || (!e && o < 0)) return n.index
		}
		return null
	}
	function y_(s, t) {
		const { chart: e, _cachedMeta: i } = s,
			n = e._stacks || (e._stacks = {}),
			{ iScale: o, vScale: r, index: a } = i,
			l = o.axis,
			c = r.axis,
			h = hD(o, r, i),
			d = t.length
		let u
		for (let p = 0; p < d; ++p) {
			const f = t[p],
				{ [l]: b, [c]: v } = f,
				y = f._stacks || (f._stacks = {})
			;(u = y[c] = uD(n, h, b)),
				(u[a] = v),
				(u._top = v_(u, r, !0, i.type)),
				(u._bottom = v_(u, r, !1, i.type))
		}
	}
	function Nc(s, t) {
		const e = s.scales
		return Object.keys(e)
			.filter(i => e[i].axis === t)
			.shift()
	}
	function pD(s, t) {
		return ni(s, {
			active: !1,
			dataset: void 0,
			datasetIndex: t,
			index: t,
			mode: 'default',
			type: 'dataset',
		})
	}
	function fD(s, t, e) {
		return ni(s, {
			active: !1,
			dataIndex: t,
			parsed: void 0,
			raw: void 0,
			element: e,
			index: t,
			mode: 'default',
			type: 'data',
		})
	}
	function Hn(s, t) {
		const e = s.controller.index,
			i = s.vScale && s.vScale.axis
		if (i) {
			t = t || s._parsed
			for (const n of t) {
				const o = n._stacks
				if (!o || o[i] === void 0 || o[i][e] === void 0) return
				delete o[i][e]
			}
		}
	}
	const Bc = s => s === 'reset' || s === 'none',
		T_ = (s, t) => (t ? s : Object.assign({}, s)),
		_D = (s, t, e) =>
			s && !t.hidden && t._stacked && { keys: g_(e, !0), values: null }
	class Ut {
		constructor(t, e) {
			;(this.chart = t),
				(this._ctx = t.ctx),
				(this.index = e),
				(this._cachedDataOpts = {}),
				(this._cachedMeta = this.getMeta()),
				(this._type = this._cachedMeta.type),
				(this.options = void 0),
				(this._parsing = !1),
				(this._data = void 0),
				(this._objectData = void 0),
				(this._sharedOptions = void 0),
				(this._drawStart = void 0),
				(this._drawCount = void 0),
				(this.enableOptionSharing = !1),
				(this.supportsDecimation = !1),
				(this.$context = void 0),
				(this._syncList = []),
				this.initialize()
		}
		initialize() {
			const t = this._cachedMeta
			this.configure(),
				this.linkScales(),
				(t._stacked = b_(t.vScale, t)),
				this.addElements()
		}
		updateIndex(t) {
			this.index !== t && Hn(this._cachedMeta), (this.index = t)
		}
		linkScales() {
			const t = this.chart,
				e = this._cachedMeta,
				i = this.getDataset(),
				n = (d, u, p, f) => (d === 'x' ? u : d === 'r' ? f : p),
				o = (e.xAxisID = B(i.xAxisID, Nc(t, 'x'))),
				r = (e.yAxisID = B(i.yAxisID, Nc(t, 'y'))),
				a = (e.rAxisID = B(i.rAxisID, Nc(t, 'r'))),
				l = e.indexAxis,
				c = (e.iAxisID = n(l, o, r, a)),
				h = (e.vAxisID = n(l, r, o, a))
			;(e.xScale = this.getScaleForId(o)),
				(e.yScale = this.getScaleForId(r)),
				(e.rScale = this.getScaleForId(a)),
				(e.iScale = this.getScaleForId(c)),
				(e.vScale = this.getScaleForId(h))
		}
		getDataset() {
			return this.chart.data.datasets[this.index]
		}
		getMeta() {
			return this.chart.getDatasetMeta(this.index)
		}
		getScaleForId(t) {
			return this.chart.scales[t]
		}
		_getOtherScale(t) {
			const e = this._cachedMeta
			return t === e.iScale ? e.vScale : e.iScale
		}
		reset() {
			this._update('reset')
		}
		_destroy() {
			const t = this._cachedMeta
			this._data && wf(this._data, this), t._stacked && Hn(t)
		}
		_dataCheck() {
			const t = this.getDataset(),
				e = t.data || (t.data = []),
				i = this._data
			if (V(e)) this._data = cD(e)
			else if (i !== e) {
				if (i) {
					wf(i, this)
					const n = this._cachedMeta
					Hn(n), (n._parsed = [])
				}
				e && Object.isExtensible(e) && NO(e, this),
					(this._syncList = []),
					(this._data = e)
			}
		}
		addElements() {
			const t = this._cachedMeta
			this._dataCheck(),
				this.datasetElementType && (t.dataset = new this.datasetElementType())
		}
		buildOrUpdateElements(t) {
			const e = this._cachedMeta,
				i = this.getDataset()
			let n = !1
			this._dataCheck()
			const o = e._stacked
			;(e._stacked = b_(e.vScale, e)),
				e.stack !== i.stack && ((n = !0), Hn(e), (e.stack = i.stack)),
				this._resyncElements(t),
				(n || o !== e._stacked) && y_(this, e._parsed)
		}
		configure() {
			const t = this.chart.config,
				e = t.datasetScopeKeys(this._type),
				i = t.getOptionScopes(this.getDataset(), e, !0)
			;(this.options = t.createResolver(i, this.getContext())),
				(this._parsing = this.options.parsing),
				(this._cachedDataOpts = {})
		}
		parse(t, e) {
			const { _cachedMeta: i, _data: n } = this,
				{ iScale: o, _stacked: r } = i,
				a = o.axis
			let l = t === 0 && e === n.length ? !0 : i._sorted,
				c = t > 0 && i._parsed[t - 1],
				h,
				d,
				u
			if (this._parsing === !1) (i._parsed = n), (i._sorted = !0), (u = n)
			else {
				Q(n[t])
					? (u = this.parseArrayData(i, n, t, e))
					: V(n[t])
					? (u = this.parseObjectData(i, n, t, e))
					: (u = this.parsePrimitiveData(i, n, t, e))
				const p = () => d[a] === null || (c && d[a] < c[a])
				for (h = 0; h < e; ++h)
					(i._parsed[h + t] = d = u[h]), l && (p() && (l = !1), (c = d))
				i._sorted = l
			}
			r && y_(this, u)
		}
		parsePrimitiveData(t, e, i, n) {
			const { iScale: o, vScale: r } = t,
				a = o.axis,
				l = r.axis,
				c = o.getLabels(),
				h = o === r,
				d = new Array(n)
			let u, p, f
			for (u = 0, p = n; u < p; ++u)
				(f = u + i),
					(d[u] = { [a]: h || o.parse(c[f], f), [l]: r.parse(e[f], f) })
			return d
		}
		parseArrayData(t, e, i, n) {
			const { xScale: o, yScale: r } = t,
				a = new Array(n)
			let l, c, h, d
			for (l = 0, c = n; l < c; ++l)
				(h = l + i),
					(d = e[h]),
					(a[l] = { x: o.parse(d[0], h), y: r.parse(d[1], h) })
			return a
		}
		parseObjectData(t, e, i, n) {
			const { xScale: o, yScale: r } = t,
				{ xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
				c = new Array(n)
			let h, d, u, p
			for (h = 0, d = n; h < d; ++h)
				(u = h + i),
					(p = e[u]),
					(c[h] = { x: o.parse(ti(p, a), u), y: r.parse(ti(p, l), u) })
			return c
		}
		getParsed(t) {
			return this._cachedMeta._parsed[t]
		}
		getDataElement(t) {
			return this._cachedMeta.data[t]
		}
		applyStack(t, e, i) {
			const n = this.chart,
				o = this._cachedMeta,
				r = e[t.axis],
				a = { keys: g_(n, !0), values: e._stacks[t.axis] }
			return m_(a, r, o.index, { mode: i })
		}
		updateRangeFromParsed(t, e, i, n) {
			const o = i[e.axis]
			let r = o === null ? NaN : o
			const a = n && i._stacks[e.axis]
			n && a && ((n.values = a), (r = m_(n, o, this._cachedMeta.index))),
				(t.min = Math.min(t.min, r)),
				(t.max = Math.max(t.max, r))
		}
		getMinMax(t, e) {
			const i = this._cachedMeta,
				n = i._parsed,
				o = i._sorted && t === i.iScale,
				r = n.length,
				a = this._getOtherScale(t),
				l = _D(e, i, this.chart),
				c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
				{ min: h, max: d } = dD(a)
			let u, p
			function f() {
				p = n[u]
				const b = p[a.axis]
				return !rt(p[t.axis]) || h > b || d < b
			}
			for (
				u = 0;
				u < r && !(!f() && (this.updateRangeFromParsed(c, t, p, l), o));
				++u
			);
			if (o) {
				for (u = r - 1; u >= 0; --u)
					if (!f()) {
						this.updateRangeFromParsed(c, t, p, l)
						break
					}
			}
			return c
		}
		getAllParsedValues(t) {
			const e = this._cachedMeta._parsed,
				i = []
			let n, o, r
			for (n = 0, o = e.length; n < o; ++n)
				(r = e[n][t.axis]), rt(r) && i.push(r)
			return i
		}
		getMaxOverflow() {
			return !1
		}
		getLabelAndValue(t) {
			const e = this._cachedMeta,
				i = e.iScale,
				n = e.vScale,
				o = this.getParsed(t)
			return {
				label: i ? '' + i.getLabelForValue(o[i.axis]) : '',
				value: n ? '' + n.getLabelForValue(o[n.axis]) : '',
			}
		}
		_update(t) {
			const e = this._cachedMeta
			this.update(t || 'default'),
				(e._clip = lD(
					B(this.options.clip, aD(e.xScale, e.yScale, this.getMaxOverflow()))
				))
		}
		update(t) {}
		draw() {
			const t = this._ctx,
				e = this.chart,
				i = this._cachedMeta,
				n = i.data || [],
				o = e.chartArea,
				r = [],
				a = this._drawStart || 0,
				l = this._drawCount || n.length - a,
				c = this.options.drawActiveElementsOnTop
			let h
			for (i.dataset && i.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
				const d = n[h]
				d.hidden || (d.active && c ? r.push(d) : d.draw(t, o))
			}
			for (h = 0; h < r.length; ++h) r[h].draw(t, o)
		}
		getStyle(t, e) {
			const i = e ? 'active' : 'default'
			return t === void 0 && this._cachedMeta.dataset
				? this.resolveDatasetElementOptions(i)
				: this.resolveDataElementOptions(t || 0, i)
		}
		getContext(t, e, i) {
			const n = this.getDataset()
			let o
			if (t >= 0 && t < this._cachedMeta.data.length) {
				const r = this._cachedMeta.data[t]
				;(o = r.$context || (r.$context = fD(this.getContext(), t, r))),
					(o.parsed = this.getParsed(t)),
					(o.raw = n.data[t]),
					(o.index = o.dataIndex = t)
			} else (o = this.$context || (this.$context = pD(this.chart.getContext(), this.index))), (o.dataset = n), (o.index = o.datasetIndex = this.index)
			return (o.active = !!e), (o.mode = i), o
		}
		resolveDatasetElementOptions(t) {
			return this._resolveElementOptions(this.datasetElementType.id, t)
		}
		resolveDataElementOptions(t, e) {
			return this._resolveElementOptions(this.dataElementType.id, e, t)
		}
		_resolveElementOptions(t, e = 'default', i) {
			const n = e === 'active',
				o = this._cachedDataOpts,
				r = t + '-' + e,
				a = o[r],
				l = this.enableOptionSharing && jt(i)
			if (a) return T_(a, l)
			const c = this.chart.config,
				h = c.datasetElementScopeKeys(this._type, t),
				d = n ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
				u = c.getOptionScopes(this.getDataset(), h),
				p = Object.keys(F.elements[t]),
				f = () => this.getContext(i, n),
				b = c.resolveNamedOptions(u, p, f, d)
			return b.$shared && ((b.$shared = l), (o[r] = Object.freeze(T_(b, l)))), b
		}
		_resolveAnimations(t, e, i) {
			const n = this.chart,
				o = this._cachedDataOpts,
				r = `animation-${e}`,
				a = o[r]
			if (a) return a
			let l
			if (n.options.animation !== !1) {
				const h = this.chart.config,
					d = h.datasetAnimationScopeKeys(this._type, e),
					u = h.getOptionScopes(this.getDataset(), d)
				l = h.createResolver(u, this.getContext(t, i, e))
			}
			const c = new Pc(n, l && l.animations)
			return l && l._cacheable && (o[r] = Object.freeze(c)), c
		}
		getSharedOptions(t) {
			if (t.$shared)
				return (
					this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
				)
		}
		includeOptions(t, e) {
			return !e || Bc(t) || this.chart._animationsDisabled
		}
		_getSharedOptions(t, e) {
			const i = this.resolveDataElementOptions(t, e),
				n = this._sharedOptions,
				o = this.getSharedOptions(i),
				r = this.includeOptions(e, o) || o !== n
			return (
				this.updateSharedOptions(o, e, i),
				{ sharedOptions: o, includeOptions: r }
			)
		}
		updateElement(t, e, i, n) {
			Bc(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i)
		}
		updateSharedOptions(t, e, i) {
			t && !Bc(e) && this._resolveAnimations(void 0, e).update(t, i)
		}
		_setStyle(t, e, i, n) {
			t.active = n
			const o = this.getStyle(e, n)
			this._resolveAnimations(e, i, n).update(t, {
				options: (!n && this.getSharedOptions(o)) || o,
			})
		}
		removeHoverStyle(t, e, i) {
			this._setStyle(t, i, 'active', !1)
		}
		setHoverStyle(t, e, i) {
			this._setStyle(t, i, 'active', !0)
		}
		_removeDatasetHoverStyle() {
			const t = this._cachedMeta.dataset
			t && this._setStyle(t, void 0, 'active', !1)
		}
		_setDatasetHoverStyle() {
			const t = this._cachedMeta.dataset
			t && this._setStyle(t, void 0, 'active', !0)
		}
		_resyncElements(t) {
			const e = this._data,
				i = this._cachedMeta.data
			for (const [a, l, c] of this._syncList) this[a](l, c)
			this._syncList = []
			const n = i.length,
				o = e.length,
				r = Math.min(o, n)
			r && this.parse(0, r),
				o > n
					? this._insertElements(n, o - n, t)
					: o < n && this._removeElements(o, n - o)
		}
		_insertElements(t, e, i = !0) {
			const n = this._cachedMeta,
				o = n.data,
				r = t + e
			let a
			const l = c => {
				for (c.length += e, a = c.length - 1; a >= r; a--) c[a] = c[a - e]
			}
			for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType()
			this._parsing && l(n._parsed),
				this.parse(t, e),
				i && this.updateElements(o, t, e, 'reset')
		}
		updateElements(t, e, i, n) {}
		_removeElements(t, e) {
			const i = this._cachedMeta
			if (this._parsing) {
				const n = i._parsed.splice(t, e)
				i._stacked && Hn(i, n)
			}
			i.data.splice(t, e)
		}
		_sync(t) {
			if (this._parsing) this._syncList.push(t)
			else {
				const [e, i, n] = t
				this[e](i, n)
			}
			this.chart._dataChanges.push([this.index, ...t])
		}
		_onDataPush() {
			const t = arguments.length
			this._sync(['_insertElements', this.getDataset().data.length - t, t])
		}
		_onDataPop() {
			this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
		}
		_onDataShift() {
			this._sync(['_removeElements', 0, 1])
		}
		_onDataSplice(t, e) {
			e && this._sync(['_removeElements', t, e])
			const i = arguments.length - 2
			i && this._sync(['_insertElements', t, i])
		}
		_onDataUnshift() {
			this._sync(['_insertElements', 0, arguments.length])
		}
	}
	;(Ut.defaults = {}),
		(Ut.prototype.datasetElementType = null),
		(Ut.prototype.dataElementType = null)
	function gD(s, t) {
		if (!s._cache.$bar) {
			const e = s.getMatchingVisibleMetas(t)
			let i = []
			for (let n = 0, o = e.length; n < o; n++)
				i = i.concat(e[n].controller.getAllParsedValues(s))
			s._cache.$bar = kf(i.sort((n, o) => n - o))
		}
		return s._cache.$bar
	}
	function mD(s) {
		const t = s.iScale,
			e = gD(t, s.type)
		let i = t._length,
			n,
			o,
			r,
			a
		const l = () => {
			r === 32767 ||
				r === -32768 ||
				(jt(a) && (i = Math.min(i, Math.abs(r - a) || i)), (a = r))
		}
		for (n = 0, o = e.length; n < o; ++n) (r = t.getPixelForValue(e[n])), l()
		for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
			(r = t.getPixelForTick(n)), l()
		return i
	}
	function bD(s, t, e, i) {
		const n = e.barThickness
		let o, r
		return (
			H(n)
				? ((o = t.min * e.categoryPercentage), (r = e.barPercentage))
				: ((o = n * i), (r = 1)),
			{ chunk: o / i, ratio: r, start: t.pixels[s] - o / 2 }
		)
	}
	function vD(s, t, e, i) {
		const n = t.pixels,
			o = n[s]
		let r = s > 0 ? n[s - 1] : null,
			a = s < n.length - 1 ? n[s + 1] : null
		const l = e.categoryPercentage
		r === null && (r = o - (a === null ? t.end - t.start : a - o)),
			a === null && (a = o + o - r)
		const c = o - ((o - Math.min(r, a)) / 2) * l
		return {
			chunk: ((Math.abs(a - r) / 2) * l) / i,
			ratio: e.barPercentage,
			start: c,
		}
	}
	function yD(s, t, e, i) {
		const n = e.parse(s[0], i),
			o = e.parse(s[1], i),
			r = Math.min(n, o),
			a = Math.max(n, o)
		let l = r,
			c = a
		Math.abs(r) > Math.abs(a) && ((l = a), (c = r)),
			(t[e.axis] = c),
			(t._custom = { barStart: l, barEnd: c, start: n, end: o, min: r, max: a })
	}
	function E_(s, t, e, i) {
		return Q(s) ? yD(s, t, e, i) : (t[e.axis] = e.parse(s, i)), t
	}
	function x_(s, t, e, i) {
		const n = s.iScale,
			o = s.vScale,
			r = n.getLabels(),
			a = n === o,
			l = []
		let c, h, d, u
		for (c = e, h = e + i; c < h; ++c)
			(u = t[c]),
				(d = {}),
				(d[n.axis] = a || n.parse(r[c], c)),
				l.push(E_(u, d, o, c))
		return l
	}
	function Hc(s) {
		return s && s.barStart !== void 0 && s.barEnd !== void 0
	}
	function TD(s, t, e) {
		return s !== 0 ? Ee(s) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1)
	}
	function ED(s) {
		let t, e, i, n, o
		return (
			s.horizontal
				? ((t = s.base > s.x), (e = 'left'), (i = 'right'))
				: ((t = s.base < s.y), (e = 'bottom'), (i = 'top')),
			t ? ((n = 'end'), (o = 'start')) : ((n = 'start'), (o = 'end')),
			{ start: e, end: i, reverse: t, top: n, bottom: o }
		)
	}
	function xD(s, t, e, i) {
		let n = t.borderSkipped
		const o = {}
		if (!n) {
			s.borderSkipped = o
			return
		}
		if (n === !0) {
			s.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 }
			return
		}
		const { start: r, end: a, reverse: l, top: c, bottom: h } = ED(s)
		n === 'middle' &&
			e &&
			((s.enableBorderRadius = !0),
			(e._top || 0) === i
				? (n = c)
				: (e._bottom || 0) === i
				? (n = h)
				: ((o[C_(h, r, a, l)] = !0), (n = c))),
			(o[C_(n, r, a, l)] = !0),
			(s.borderSkipped = o)
	}
	function C_(s, t, e, i) {
		return i ? ((s = CD(s, t, e)), (s = A_(s, e, t))) : (s = A_(s, t, e)), s
	}
	function CD(s, t, e) {
		return s === t ? e : s === e ? t : s
	}
	function A_(s, t, e) {
		return s === 'start' ? t : s === 'end' ? e : s
	}
	function AD(s, { inflateAmount: t }, e) {
		s.inflateAmount = t === 'auto' ? (e === 1 ? 0.33 : 0) : t
	}
	class Vn extends Ut {
		parsePrimitiveData(t, e, i, n) {
			return x_(t, e, i, n)
		}
		parseArrayData(t, e, i, n) {
			return x_(t, e, i, n)
		}
		parseObjectData(t, e, i, n) {
			const { iScale: o, vScale: r } = t,
				{ xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
				c = o.axis === 'x' ? a : l,
				h = r.axis === 'x' ? a : l,
				d = []
			let u, p, f, b
			for (u = i, p = i + n; u < p; ++u)
				(b = e[u]),
					(f = {}),
					(f[o.axis] = o.parse(ti(b, c), u)),
					d.push(E_(ti(b, h), f, r, u))
			return d
		}
		updateRangeFromParsed(t, e, i, n) {
			super.updateRangeFromParsed(t, e, i, n)
			const o = i._custom
			o &&
				e === this._cachedMeta.vScale &&
				((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)))
		}
		getMaxOverflow() {
			return 0
		}
		getLabelAndValue(t) {
			const e = this._cachedMeta,
				{ iScale: i, vScale: n } = e,
				o = this.getParsed(t),
				r = o._custom,
				a = Hc(r)
					? '[' + r.start + ', ' + r.end + ']'
					: '' + n.getLabelForValue(o[n.axis])
			return { label: '' + i.getLabelForValue(o[i.axis]), value: a }
		}
		initialize() {
			;(this.enableOptionSharing = !0), super.initialize()
			const t = this._cachedMeta
			t.stack = this.getDataset().stack
		}
		update(t) {
			const e = this._cachedMeta
			this.updateElements(e.data, 0, e.data.length, t)
		}
		updateElements(t, e, i, n) {
			const o = n === 'reset',
				{
					index: r,
					_cachedMeta: { vScale: a },
				} = this,
				l = a.getBasePixel(),
				c = a.isHorizontal(),
				h = this._getRuler(),
				{ sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n)
			for (let p = e; p < e + i; p++) {
				const f = this.getParsed(p),
					b =
						o || H(f[a.axis])
							? { base: l, head: l }
							: this._calculateBarValuePixels(p),
					v = this._calculateBarIndexPixels(p, h),
					y = (f._stacks || {})[a.axis],
					T = {
						horizontal: c,
						base: b.base,
						enableBorderRadius:
							!y || Hc(f._custom) || r === y._top || r === y._bottom,
						x: c ? b.head : v.center,
						y: c ? v.center : b.head,
						height: c ? v.size : Math.abs(b.size),
						width: c ? Math.abs(b.size) : v.size,
					}
				u &&
					(T.options =
						d || this.resolveDataElementOptions(p, t[p].active ? 'active' : n))
				const x = T.options || t[p].options
				xD(T, x, y, r), AD(T, x, h.ratio), this.updateElement(t[p], p, T, n)
			}
		}
		_getStacks(t, e) {
			const { iScale: i } = this._cachedMeta,
				n = i
					.getMatchingVisibleMetas(this._type)
					.filter(l => l.controller.options.grouped),
				o = i.options.stacked,
				r = [],
				a = l => {
					const c = l.controller.getParsed(e),
						h = c && c[l.vScale.axis]
					if (H(h) || isNaN(h)) return !0
				}
			for (const l of n)
				if (
					!(e !== void 0 && a(l)) &&
					((o === !1 ||
						r.indexOf(l.stack) === -1 ||
						(o === void 0 && l.stack === void 0)) &&
						r.push(l.stack),
					l.index === t)
				)
					break
			return r.length || r.push(void 0), r
		}
		_getStackCount(t) {
			return this._getStacks(void 0, t).length
		}
		_getStackIndex(t, e, i) {
			const n = this._getStacks(t, i),
				o = e !== void 0 ? n.indexOf(e) : -1
			return o === -1 ? n.length - 1 : o
		}
		_getRuler() {
			const t = this.options,
				e = this._cachedMeta,
				i = e.iScale,
				n = []
			let o, r
			for (o = 0, r = e.data.length; o < r; ++o)
				n.push(i.getPixelForValue(this.getParsed(o)[i.axis], o))
			const a = t.barThickness
			return {
				min: a || mD(e),
				pixels: n,
				start: i._startPixel,
				end: i._endPixel,
				stackCount: this._getStackCount(),
				scale: i,
				grouped: t.grouped,
				ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
			}
		}
		_calculateBarValuePixels(t) {
			const {
					_cachedMeta: { vScale: e, _stacked: i },
					options: { base: n, minBarLength: o },
				} = this,
				r = n || 0,
				a = this.getParsed(t),
				l = a._custom,
				c = Hc(l)
			let h = a[e.axis],
				d = 0,
				u = i ? this.applyStack(e, a, i) : h,
				p,
				f
			u !== h && ((d = u - h), (u = h)),
				c &&
					((h = l.barStart),
					(u = l.barEnd - l.barStart),
					h !== 0 && Ee(h) !== Ee(l.barEnd) && (d = 0),
					(d += h))
			const b = !H(n) && !c ? n : d
			let v = e.getPixelForValue(b)
			if (
				(this.chart.getDataVisibility(t)
					? (p = e.getPixelForValue(d + u))
					: (p = v),
				(f = p - v),
				Math.abs(f) < o)
			) {
				;(f = TD(f, e, r) * o), h === r && (v -= f / 2)
				const y = e.getPixelForDecimal(0),
					T = e.getPixelForDecimal(1),
					x = Math.min(y, T),
					E = Math.max(y, T)
				;(v = Math.max(Math.min(v, E), x)), (p = v + f)
			}
			if (v === e.getPixelForValue(r)) {
				const y = (Ee(f) * e.getLineWidthForValue(r)) / 2
				;(v += y), (f -= y)
			}
			return { size: f, base: v, head: p, center: p + f / 2 }
		}
		_calculateBarIndexPixels(t, e) {
			const i = e.scale,
				n = this.options,
				o = n.skipNull,
				r = B(n.maxBarThickness, 1 / 0)
			let a, l
			if (e.grouped) {
				const c = o ? this._getStackCount(t) : e.stackCount,
					h = n.barThickness === 'flex' ? vD(t, e, n, c) : bD(t, e, n, c),
					d = this._getStackIndex(
						this.index,
						this._cachedMeta.stack,
						o ? t : void 0
					)
				;(a = h.start + h.chunk * d + h.chunk / 2),
					(l = Math.min(r, h.chunk * h.ratio))
			} else (a = i.getPixelForValue(this.getParsed(t)[i.axis], t)), (l = Math.min(r, e.min * e.ratio))
			return { base: a - l / 2, head: a + l / 2, center: a, size: l }
		}
		draw() {
			const t = this._cachedMeta,
				e = t.vScale,
				i = t.data,
				n = i.length
			let o = 0
			for (; o < n; ++o)
				this.getParsed(o)[e.axis] !== null && i[o].draw(this._ctx)
		}
	}
	;(Vn.id = 'bar'),
		(Vn.defaults = {
			datasetElementType: !1,
			dataElementType: 'bar',
			categoryPercentage: 0.8,
			barPercentage: 0.9,
			grouped: !0,
			animations: {
				numbers: {
					type: 'number',
					properties: ['x', 'y', 'base', 'width', 'height'],
				},
			},
		}),
		(Vn.overrides = {
			scales: {
				_index_: { type: 'category', offset: !0, grid: { offset: !0 } },
				_value_: { type: 'linear', beginAtZero: !0 },
			},
		})
	class Fn extends Ut {
		initialize() {
			;(this.enableOptionSharing = !0), super.initialize()
		}
		parsePrimitiveData(t, e, i, n) {
			const o = super.parsePrimitiveData(t, e, i, n)
			for (let r = 0; r < o.length; r++)
				o[r]._custom = this.resolveDataElementOptions(r + i).radius
			return o
		}
		parseArrayData(t, e, i, n) {
			const o = super.parseArrayData(t, e, i, n)
			for (let r = 0; r < o.length; r++) {
				const a = e[i + r]
				o[r]._custom = B(a[2], this.resolveDataElementOptions(r + i).radius)
			}
			return o
		}
		parseObjectData(t, e, i, n) {
			const o = super.parseObjectData(t, e, i, n)
			for (let r = 0; r < o.length; r++) {
				const a = e[i + r]
				o[r]._custom = B(
					a && a.r && +a.r,
					this.resolveDataElementOptions(r + i).radius
				)
			}
			return o
		}
		getMaxOverflow() {
			const t = this._cachedMeta.data
			let e = 0
			for (let i = t.length - 1; i >= 0; --i)
				e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2)
			return e > 0 && e
		}
		getLabelAndValue(t) {
			const e = this._cachedMeta,
				{ xScale: i, yScale: n } = e,
				o = this.getParsed(t),
				r = i.getLabelForValue(o.x),
				a = n.getLabelForValue(o.y),
				l = o._custom
			return {
				label: e.label,
				value: '(' + r + ', ' + a + (l ? ', ' + l : '') + ')',
			}
		}
		update(t) {
			const e = this._cachedMeta.data
			this.updateElements(e, 0, e.length, t)
		}
		updateElements(t, e, i, n) {
			const o = n === 'reset',
				{ iScale: r, vScale: a } = this._cachedMeta,
				{ sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, n),
				h = r.axis,
				d = a.axis
			for (let u = e; u < e + i; u++) {
				const p = t[u],
					f = !o && this.getParsed(u),
					b = {},
					v = (b[h] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(f[h])),
					y = (b[d] = o ? a.getBasePixel() : a.getPixelForValue(f[d]))
				;(b.skip = isNaN(v) || isNaN(y)),
					c &&
						((b.options =
							l || this.resolveDataElementOptions(u, p.active ? 'active' : n)),
						o && (b.options.radius = 0)),
					this.updateElement(p, u, b, n)
			}
		}
		resolveDataElementOptions(t, e) {
			const i = this.getParsed(t)
			let n = super.resolveDataElementOptions(t, e)
			n.$shared && (n = Object.assign({}, n, { $shared: !1 }))
			const o = n.radius
			return (
				e !== 'active' && (n.radius = 0), (n.radius += B(i && i._custom, o)), n
			)
		}
	}
	;(Fn.id = 'bubble'),
		(Fn.defaults = {
			datasetElementType: !1,
			dataElementType: 'point',
			animations: {
				numbers: {
					type: 'number',
					properties: ['x', 'y', 'borderWidth', 'radius'],
				},
			},
		}),
		(Fn.overrides = {
			scales: { x: { type: 'linear' }, y: { type: 'linear' } },
			plugins: {
				tooltip: {
					callbacks: {
						title() {
							return ''
						},
					},
				},
			},
		})
	function wD(s, t, e) {
		let i = 1,
			n = 1,
			o = 0,
			r = 0
		if (t < q) {
			const a = s,
				l = a + t,
				c = Math.cos(a),
				h = Math.sin(a),
				d = Math.cos(l),
				u = Math.sin(l),
				p = (x, E, C) => (Dn(x, a, l, !0) ? 1 : Math.max(E, E * e, C, C * e)),
				f = (x, E, C) => (Dn(x, a, l, !0) ? -1 : Math.min(E, E * e, C, C * e)),
				b = p(0, c, d),
				v = p(nt, h, u),
				y = f(it, c, d),
				T = f(it + nt, h, u)
			;(i = (b - y) / 2),
				(n = (v - T) / 2),
				(o = -(b + y) / 2),
				(r = -(v + T) / 2)
		}
		return { ratioX: i, ratioY: n, offsetX: o, offsetY: r }
	}
	class Bi extends Ut {
		constructor(t, e) {
			super(t, e),
				(this.enableOptionSharing = !0),
				(this.innerRadius = void 0),
				(this.outerRadius = void 0),
				(this.offsetX = void 0),
				(this.offsetY = void 0)
		}
		linkScales() {}
		parse(t, e) {
			const i = this.getDataset().data,
				n = this._cachedMeta
			if (this._parsing === !1) n._parsed = i
			else {
				let o = l => +i[l]
				if (V(i[t])) {
					const { key: l = 'value' } = this._parsing
					o = c => +ti(i[c], l)
				}
				let r, a
				for (r = t, a = t + e; r < a; ++r) n._parsed[r] = o(r)
			}
		}
		_getRotation() {
			return se(this.options.rotation - 90)
		}
		_getCircumference() {
			return se(this.options.circumference)
		}
		_getRotationExtents() {
			let t = q,
				e = -q
			for (let i = 0; i < this.chart.data.datasets.length; ++i)
				if (this.chart.isDatasetVisible(i)) {
					const n = this.chart.getDatasetMeta(i).controller,
						o = n._getRotation(),
						r = n._getCircumference()
					;(t = Math.min(t, o)), (e = Math.max(e, o + r))
				}
			return { rotation: t, circumference: e - t }
		}
		update(t) {
			const e = this.chart,
				{ chartArea: i } = e,
				n = this._cachedMeta,
				o = n.data,
				r =
					this.getMaxBorderWidth() +
					this.getMaxOffset(o) +
					this.options.spacing,
				a = Math.max((Math.min(i.width, i.height) - r) / 2, 0),
				l = Math.min(xO(this.options.cutout, a), 1),
				c = this._getRingWeight(this.index),
				{ circumference: h, rotation: d } = this._getRotationExtents(),
				{ ratioX: u, ratioY: p, offsetX: f, offsetY: b } = wD(d, h, l),
				v = (i.width - r) / u,
				y = (i.height - r) / p,
				T = Math.max(Math.min(v, y) / 2, 0),
				x = gf(this.options.radius, T),
				E = Math.max(x * l, 0),
				C = (x - E) / this._getVisibleDatasetWeightTotal()
			;(this.offsetX = f * x),
				(this.offsetY = b * x),
				(n.total = this.calculateTotal()),
				(this.outerRadius = x - C * this._getRingWeightOffset(this.index)),
				(this.innerRadius = Math.max(this.outerRadius - C * c, 0)),
				this.updateElements(o, 0, o.length, t)
		}
		_circumference(t, e) {
			const i = this.options,
				n = this._cachedMeta,
				o = this._getCircumference()
			return (e && i.animation.animateRotate) ||
				!this.chart.getDataVisibility(t) ||
				n._parsed[t] === null ||
				n.data[t].hidden
				? 0
				: this.calculateCircumference((n._parsed[t] * o) / q)
		}
		updateElements(t, e, i, n) {
			const o = n === 'reset',
				r = this.chart,
				a = r.chartArea,
				c = r.options.animation,
				h = (a.left + a.right) / 2,
				d = (a.top + a.bottom) / 2,
				u = o && c.animateScale,
				p = u ? 0 : this.innerRadius,
				f = u ? 0 : this.outerRadius,
				{ sharedOptions: b, includeOptions: v } = this._getSharedOptions(e, n)
			let y = this._getRotation(),
				T
			for (T = 0; T < e; ++T) y += this._circumference(T, o)
			for (T = e; T < e + i; ++T) {
				const x = this._circumference(T, o),
					E = t[T],
					C = {
						x: h + this.offsetX,
						y: d + this.offsetY,
						startAngle: y,
						endAngle: y + x,
						circumference: x,
						outerRadius: f,
						innerRadius: p,
					}
				v &&
					(C.options =
						b || this.resolveDataElementOptions(T, E.active ? 'active' : n)),
					(y += x),
					this.updateElement(E, T, C, n)
			}
		}
		calculateTotal() {
			const t = this._cachedMeta,
				e = t.data
			let i = 0,
				n
			for (n = 0; n < e.length; n++) {
				const o = t._parsed[n]
				o !== null &&
					!isNaN(o) &&
					this.chart.getDataVisibility(n) &&
					!e[n].hidden &&
					(i += Math.abs(o))
			}
			return i
		}
		calculateCircumference(t) {
			const e = this._cachedMeta.total
			return e > 0 && !isNaN(t) ? q * (Math.abs(t) / e) : 0
		}
		getLabelAndValue(t) {
			const e = this._cachedMeta,
				i = this.chart,
				n = i.data.labels || [],
				o = Bn(e._parsed[t], i.options.locale)
			return { label: n[t] || '', value: o }
		}
		getMaxBorderWidth(t) {
			let e = 0
			const i = this.chart
			let n, o, r, a, l
			if (!t) {
				for (n = 0, o = i.data.datasets.length; n < o; ++n)
					if (i.isDatasetVisible(n)) {
						;(r = i.getDatasetMeta(n)), (t = r.data), (a = r.controller)
						break
					}
			}
			if (!t) return 0
			for (n = 0, o = t.length; n < o; ++n)
				(l = a.resolveDataElementOptions(n)),
					l.borderAlign !== 'inner' &&
						(e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0))
			return e
		}
		getMaxOffset(t) {
			let e = 0
			for (let i = 0, n = t.length; i < n; ++i) {
				const o = this.resolveDataElementOptions(i)
				e = Math.max(e, o.offset || 0, o.hoverOffset || 0)
			}
			return e
		}
		_getRingWeightOffset(t) {
			let e = 0
			for (let i = 0; i < t; ++i)
				this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i))
			return e
		}
		_getRingWeight(t) {
			return Math.max(B(this.chart.data.datasets[t].weight, 1), 0)
		}
		_getVisibleDatasetWeightTotal() {
			return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
		}
	}
	;(Bi.id = 'doughnut'),
		(Bi.defaults = {
			datasetElementType: !1,
			dataElementType: 'arc',
			animation: { animateRotate: !0, animateScale: !1 },
			animations: {
				numbers: {
					type: 'number',
					properties: [
						'circumference',
						'endAngle',
						'innerRadius',
						'outerRadius',
						'startAngle',
						'x',
						'y',
						'offset',
						'borderWidth',
						'spacing',
					],
				},
			},
			cutout: '50%',
			rotation: 0,
			circumference: 360,
			radius: '100%',
			spacing: 0,
			indexAxis: 'r',
		}),
		(Bi.descriptors = {
			_scriptable: s => s !== 'spacing',
			_indexable: s => s !== 'spacing',
		}),
		(Bi.overrides = {
			aspectRatio: 1,
			plugins: {
				legend: {
					labels: {
						generateLabels(s) {
							const t = s.data
							if (t.labels.length && t.datasets.length) {
								const {
									labels: { pointStyle: e },
								} = s.legend.options
								return t.labels.map((i, n) => {
									const r = s.getDatasetMeta(0).controller.getStyle(n)
									return {
										text: i,
										fillStyle: r.backgroundColor,
										strokeStyle: r.borderColor,
										lineWidth: r.borderWidth,
										pointStyle: e,
										hidden: !s.getDataVisibility(n),
										index: n,
									}
								})
							}
							return []
						},
					},
					onClick(s, t, e) {
						e.chart.toggleDataVisibility(t.index), e.chart.update()
					},
				},
				tooltip: {
					callbacks: {
						title() {
							return ''
						},
						label(s) {
							let t = s.label
							const e = ': ' + s.formattedValue
							return Q(t) ? ((t = t.slice()), (t[0] += e)) : (t += e), t
						},
					},
				},
			},
		})
	class Wn extends Ut {
		initialize() {
			;(this.enableOptionSharing = !0),
				(this.supportsDecimation = !0),
				super.initialize()
		}
		update(t) {
			const e = this._cachedMeta,
				{ dataset: i, data: n = [], _dataset: o } = e,
				r = this.chart._animationsDisabled
			let { start: a, count: l } = If(e, n, r)
			;(this._drawStart = a),
				(this._drawCount = l),
				Df(e) && ((a = 0), (l = n.length)),
				(i._chart = this.chart),
				(i._datasetIndex = this.index),
				(i._decimated = !!o._decimated),
				(i.points = n)
			const c = this.resolveDatasetElementOptions(t)
			this.options.showLine || (c.borderWidth = 0),
				(c.segment = this.options.segment),
				this.updateElement(i, void 0, { animated: !r, options: c }, t),
				this.updateElements(n, a, l, t)
		}
		updateElements(t, e, i, n) {
			const o = n === 'reset',
				{ iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
				{ sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n),
				u = r.axis,
				p = a.axis,
				{ spanGaps: f, segment: b } = this.options,
				v = As(f) ? f : Number.POSITIVE_INFINITY,
				y = this.chart._animationsDisabled || o || n === 'none'
			let T = e > 0 && this.getParsed(e - 1)
			for (let x = e; x < e + i; ++x) {
				const E = t[x],
					C = this.getParsed(x),
					A = y ? E : {},
					w = H(C[p]),
					S = (A[u] = r.getPixelForValue(C[u], x)),
					k = (A[p] =
						o || w
							? a.getBasePixel()
							: a.getPixelForValue(l ? this.applyStack(a, C, l) : C[p], x))
				;(A.skip = isNaN(S) || isNaN(k) || w),
					(A.stop = x > 0 && Math.abs(C[u] - T[u]) > v),
					b && ((A.parsed = C), (A.raw = c.data[x])),
					d &&
						(A.options =
							h || this.resolveDataElementOptions(x, E.active ? 'active' : n)),
					y || this.updateElement(E, x, A, n),
					(T = C)
			}
		}
		getMaxOverflow() {
			const t = this._cachedMeta,
				e = t.dataset,
				i = (e.options && e.options.borderWidth) || 0,
				n = t.data || []
			if (!n.length) return i
			const o = n[0].size(this.resolveDataElementOptions(0)),
				r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1))
			return Math.max(i, o, r) / 2
		}
		draw() {
			const t = this._cachedMeta
			t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
				super.draw()
		}
	}
	;(Wn.id = 'line'),
		(Wn.defaults = {
			datasetElementType: 'line',
			dataElementType: 'point',
			showLine: !0,
			spanGaps: !1,
		}),
		(Wn.overrides = {
			scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
		})
	class zn extends Ut {
		constructor(t, e) {
			super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0)
		}
		getLabelAndValue(t) {
			const e = this._cachedMeta,
				i = this.chart,
				n = i.data.labels || [],
				o = Bn(e._parsed[t].r, i.options.locale)
			return { label: n[t] || '', value: o }
		}
		parseObjectData(t, e, i, n) {
			return Jf.bind(this)(t, e, i, n)
		}
		update(t) {
			const e = this._cachedMeta.data
			this._updateRadius(), this.updateElements(e, 0, e.length, t)
		}
		getMinMax() {
			const t = this._cachedMeta,
				e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }
			return (
				t.data.forEach((i, n) => {
					const o = this.getParsed(n).r
					!isNaN(o) &&
						this.chart.getDataVisibility(n) &&
						(o < e.min && (e.min = o), o > e.max && (e.max = o))
				}),
				e
			)
		}
		_updateRadius() {
			const t = this.chart,
				e = t.chartArea,
				i = t.options,
				n = Math.min(e.right - e.left, e.bottom - e.top),
				o = Math.max(n / 2, 0),
				r = Math.max(
					i.cutoutPercentage ? (o / 100) * i.cutoutPercentage : 1,
					0
				),
				a = (o - r) / t.getVisibleDatasetCount()
			;(this.outerRadius = o - a * this.index),
				(this.innerRadius = this.outerRadius - a)
		}
		updateElements(t, e, i, n) {
			const o = n === 'reset',
				r = this.chart,
				l = r.options.animation,
				c = this._cachedMeta.rScale,
				h = c.xCenter,
				d = c.yCenter,
				u = c.getIndexAngle(0) - 0.5 * it
			let p = u,
				f
			const b = 360 / this.countVisibleElements()
			for (f = 0; f < e; ++f) p += this._computeAngle(f, n, b)
			for (f = e; f < e + i; f++) {
				const v = t[f]
				let y = p,
					T = p + this._computeAngle(f, n, b),
					x = r.getDataVisibility(f)
						? c.getDistanceFromCenterForValue(this.getParsed(f).r)
						: 0
				;(p = T),
					o && (l.animateScale && (x = 0), l.animateRotate && (y = T = u))
				const E = {
					x: h,
					y: d,
					innerRadius: 0,
					outerRadius: x,
					startAngle: y,
					endAngle: T,
					options: this.resolveDataElementOptions(f, v.active ? 'active' : n),
				}
				this.updateElement(v, f, E, n)
			}
		}
		countVisibleElements() {
			const t = this._cachedMeta
			let e = 0
			return (
				t.data.forEach((i, n) => {
					!isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++
				}),
				e
			)
		}
		_computeAngle(t, e, i) {
			return this.chart.getDataVisibility(t)
				? se(this.resolveDataElementOptions(t, e).angle || i)
				: 0
		}
	}
	;(zn.id = 'polarArea'),
		(zn.defaults = {
			dataElementType: 'arc',
			animation: { animateRotate: !0, animateScale: !0 },
			animations: {
				numbers: {
					type: 'number',
					properties: [
						'x',
						'y',
						'startAngle',
						'endAngle',
						'innerRadius',
						'outerRadius',
					],
				},
			},
			indexAxis: 'r',
			startAngle: 0,
		}),
		(zn.overrides = {
			aspectRatio: 1,
			plugins: {
				legend: {
					labels: {
						generateLabels(s) {
							const t = s.data
							if (t.labels.length && t.datasets.length) {
								const {
									labels: { pointStyle: e },
								} = s.legend.options
								return t.labels.map((i, n) => {
									const r = s.getDatasetMeta(0).controller.getStyle(n)
									return {
										text: i,
										fillStyle: r.backgroundColor,
										strokeStyle: r.borderColor,
										lineWidth: r.borderWidth,
										pointStyle: e,
										hidden: !s.getDataVisibility(n),
										index: n,
									}
								})
							}
							return []
						},
					},
					onClick(s, t, e) {
						e.chart.toggleDataVisibility(t.index), e.chart.update()
					},
				},
				tooltip: {
					callbacks: {
						title() {
							return ''
						},
						label(s) {
							return s.chart.data.labels[s.dataIndex] + ': ' + s.formattedValue
						},
					},
				},
			},
			scales: {
				r: {
					type: 'radialLinear',
					angleLines: { display: !1 },
					beginAtZero: !0,
					grid: { circular: !0 },
					pointLabels: { display: !1 },
					startAngle: 0,
				},
			},
		})
	class ea extends Bi {}
	;(ea.id = 'pie'),
		(ea.defaults = {
			cutout: 0,
			rotation: 0,
			circumference: 360,
			radius: '100%',
		})
	class jn extends Ut {
		getLabelAndValue(t) {
			const e = this._cachedMeta.vScale,
				i = this.getParsed(t)
			return {
				label: e.getLabels()[t],
				value: '' + e.getLabelForValue(i[e.axis]),
			}
		}
		parseObjectData(t, e, i, n) {
			return Jf.bind(this)(t, e, i, n)
		}
		update(t) {
			const e = this._cachedMeta,
				i = e.dataset,
				n = e.data || [],
				o = e.iScale.getLabels()
			if (((i.points = n), t !== 'resize')) {
				const r = this.resolveDatasetElementOptions(t)
				this.options.showLine || (r.borderWidth = 0)
				const a = { _loop: !0, _fullLoop: o.length === n.length, options: r }
				this.updateElement(i, void 0, a, t)
			}
			this.updateElements(n, 0, n.length, t)
		}
		updateElements(t, e, i, n) {
			const o = this._cachedMeta.rScale,
				r = n === 'reset'
			for (let a = e; a < e + i; a++) {
				const l = t[a],
					c = this.resolveDataElementOptions(a, l.active ? 'active' : n),
					h = o.getPointPositionForValue(a, this.getParsed(a).r),
					d = r ? o.xCenter : h.x,
					u = r ? o.yCenter : h.y,
					p = {
						x: d,
						y: u,
						angle: h.angle,
						skip: isNaN(d) || isNaN(u),
						options: c,
					}
				this.updateElement(l, a, p, n)
			}
		}
	}
	;(jn.id = 'radar'),
		(jn.defaults = {
			datasetElementType: 'line',
			dataElementType: 'point',
			indexAxis: 'r',
			showLine: !0,
			elements: { line: { fill: 'start' } },
		}),
		(jn.overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } })
	let Xt = class {
		constructor() {
			;(this.x = void 0),
				(this.y = void 0),
				(this.active = !1),
				(this.options = void 0),
				(this.$animations = void 0)
		}
		tooltipPosition(t) {
			const { x: e, y: i } = this.getProps(['x', 'y'], t)
			return { x: e, y: i }
		}
		hasValue() {
			return As(this.x) && As(this.y)
		}
		getProps(t, e) {
			const i = this.$animations
			if (!e || !i) return this
			const n = {}
			return (
				t.forEach(o => {
					n[o] = i[o] && i[o].active() ? i[o]._to : this[o]
				}),
				n
			)
		}
	}
	;(Xt.defaults = {}), (Xt.defaultRoutes = void 0)
	const w_ = {
		values(s) {
			return Q(s) ? s : '' + s
		},
		numeric(s, t, e) {
			if (s === 0) return '0'
			const i = this.chart.options.locale
			let n,
				o = s
			if (e.length > 1) {
				const c = Math.max(
					Math.abs(e[0].value),
					Math.abs(e[e.length - 1].value)
				)
				;(c < 1e-4 || c > 1e15) && (n = 'scientific'), (o = kD(s, e))
			}
			const r = Yt(Math.abs(o)),
				a = Math.max(Math.min(-1 * Math.floor(r), 20), 0),
				l = { notation: n, minimumFractionDigits: a, maximumFractionDigits: a }
			return Object.assign(l, this.options.ticks.format), Bn(s, i, l)
		},
		logarithmic(s, t, e) {
			if (s === 0) return '0'
			const i = s / Math.pow(10, Math.floor(Yt(s)))
			return i === 1 || i === 2 || i === 5 ? w_.numeric.call(this, s, t, e) : ''
		},
	}
	function kD(s, t) {
		let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value
		return Math.abs(e) >= 1 && s !== Math.floor(s) && (e = s - Math.floor(s)), e
	}
	var Yn = { formatters: w_ }
	F.set('scale', {
		display: !0,
		offset: !1,
		reverse: !1,
		beginAtZero: !1,
		bounds: 'ticks',
		grace: 0,
		grid: {
			display: !0,
			lineWidth: 1,
			drawBorder: !0,
			drawOnChartArea: !0,
			drawTicks: !0,
			tickLength: 8,
			tickWidth: (s, t) => t.lineWidth,
			tickColor: (s, t) => t.color,
			offset: !1,
			borderDash: [],
			borderDashOffset: 0,
			borderWidth: 1,
		},
		title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
		ticks: {
			minRotation: 0,
			maxRotation: 50,
			mirror: !1,
			textStrokeWidth: 0,
			textStrokeColor: '',
			padding: 3,
			display: !0,
			autoSkip: !0,
			autoSkipPadding: 3,
			labelOffset: 0,
			callback: Yn.formatters.values,
			minor: {},
			major: {},
			align: 'center',
			crossAlign: 'near',
			showLabelBackdrop: !1,
			backdropColor: 'rgba(255, 255, 255, 0.75)',
			backdropPadding: 2,
		},
	}),
		F.route('scale.ticks', 'color', '', 'color'),
		F.route('scale.grid', 'color', '', 'borderColor'),
		F.route('scale.grid', 'borderColor', '', 'borderColor'),
		F.route('scale.title', 'color', '', 'color'),
		F.describe('scale', {
			_fallback: !1,
			_scriptable: s =>
				!s.startsWith('before') &&
				!s.startsWith('after') &&
				s !== 'callback' &&
				s !== 'parser',
			_indexable: s => s !== 'borderDash' && s !== 'tickBorderDash',
		}),
		F.describe('scales', { _fallback: 'scale' }),
		F.describe('scale.ticks', {
			_scriptable: s => s !== 'backdropPadding' && s !== 'callback',
			_indexable: s => s !== 'backdropPadding',
		})
	function SD(s, t) {
		const e = s.options.ticks,
			i = e.maxTicksLimit || OD(s),
			n = e.major.enabled ? DD(t) : [],
			o = n.length,
			r = n[0],
			a = n[o - 1],
			l = []
		if (o > i) return MD(t, l, n, o / i), l
		const c = ID(n, t, i)
		if (o > 0) {
			let h, d
			const u = o > 1 ? Math.round((a - r) / (o - 1)) : null
			for (ia(t, l, c, H(u) ? 0 : r - u, r), h = 0, d = o - 1; h < d; h++)
				ia(t, l, c, n[h], n[h + 1])
			return ia(t, l, c, a, H(u) ? t.length : a + u), l
		}
		return ia(t, l, c), l
	}
	function OD(s) {
		const t = s.options.offset,
			e = s._tickSize(),
			i = s._length / e + (t ? 0 : 1),
			n = s._maxLength / e
		return Math.floor(Math.min(i, n))
	}
	function ID(s, t, e) {
		const i = LD(s),
			n = t.length / e
		if (!i) return Math.max(n, 1)
		const o = DO(i)
		for (let r = 0, a = o.length - 1; r < a; r++) {
			const l = o[r]
			if (l > n) return l
		}
		return Math.max(n, 1)
	}
	function DD(s) {
		const t = []
		let e, i
		for (e = 0, i = s.length; e < i; e++) s[e].major && t.push(e)
		return t
	}
	function MD(s, t, e, i) {
		let n = 0,
			o = e[0],
			r
		for (i = Math.ceil(i), r = 0; r < s.length; r++)
			r === o && (t.push(s[r]), n++, (o = e[n * i]))
	}
	function ia(s, t, e, i, n) {
		const o = B(i, 0),
			r = Math.min(B(n, s.length), s.length)
		let a = 0,
			l,
			c,
			h
		for (
			e = Math.ceil(e), n && ((l = n - i), (e = l / Math.floor(l / e))), h = o;
			h < 0;

		)
			a++, (h = Math.round(o + a * e))
		for (c = Math.max(o, 0); c < r; c++)
			c === h && (t.push(s[c]), a++, (h = Math.round(o + a * e)))
	}
	function LD(s) {
		const t = s.length
		let e, i
		if (t < 2) return !1
		for (i = s[0], e = 1; e < t; ++e) if (s[e] - s[e - 1] !== i) return !1
		return i
	}
	const $D = s => (s === 'left' ? 'right' : s === 'right' ? 'left' : s),
		k_ = (s, t, e) => (t === 'top' || t === 'left' ? s[t] + e : s[t] - e)
	function S_(s, t) {
		const e = [],
			i = s.length / t,
			n = s.length
		let o = 0
		for (; o < n; o += i) e.push(s[Math.floor(o)])
		return e
	}
	function RD(s, t, e) {
		const i = s.ticks.length,
			n = Math.min(t, i - 1),
			o = s._startPixel,
			r = s._endPixel,
			a = 1e-6
		let l = s.getPixelForTick(n),
			c
		if (
			!(
				e &&
				(i === 1
					? (c = Math.max(l - o, r - l))
					: t === 0
					? (c = (s.getPixelForTick(1) - l) / 2)
					: (c = (l - s.getPixelForTick(n - 1)) / 2),
				(l += n < t ? c : -c),
				l < o - a || l > r + a)
			)
		)
			return l
	}
	function PD(s, t) {
		U(s, e => {
			const i = e.gc,
				n = i.length / 2
			let o
			if (n > t) {
				for (o = 0; o < n; ++o) delete e.data[i[o]]
				i.splice(0, n)
			}
		})
	}
	function Kn(s) {
		return s.drawTicks ? s.tickLength : 0
	}
	function O_(s, t) {
		if (!s.display) return 0
		const e = lt(s.font, t),
			i = pt(s.padding)
		return (Q(s.text) ? s.text.length : 1) * e.lineHeight + i.height
	}
	function ND(s, t) {
		return ni(s, { scale: t, type: 'scale' })
	}
	function BD(s, t, e) {
		return ni(s, { tick: e, index: t, type: 'tick' })
	}
	function HD(s, t, e) {
		let i = yc(s)
		return ((e && t !== 'right') || (!e && t === 'right')) && (i = $D(i)), i
	}
	function VD(s, t, e, i) {
		const { top: n, left: o, bottom: r, right: a, chart: l } = s,
			{ chartArea: c, scales: h } = l
		let d = 0,
			u,
			p,
			f
		const b = r - n,
			v = a - o
		if (s.isHorizontal()) {
			if (((p = gt(i, o, a)), V(e))) {
				const y = Object.keys(e)[0],
					T = e[y]
				f = h[y].getPixelForValue(T) + b - t
			} else
				e === 'center'
					? (f = (c.bottom + c.top) / 2 + b - t)
					: (f = k_(s, e, t))
			u = a - o
		} else {
			if (V(e)) {
				const y = Object.keys(e)[0],
					T = e[y]
				p = h[y].getPixelForValue(T) - v + t
			} else
				e === 'center'
					? (p = (c.left + c.right) / 2 - v + t)
					: (p = k_(s, e, t))
			;(f = gt(i, r, n)), (d = e === 'left' ? -nt : nt)
		}
		return { titleX: p, titleY: f, maxWidth: u, rotation: d }
	}
	class oi extends Xt {
		constructor(t) {
			super(),
				(this.id = t.id),
				(this.type = t.type),
				(this.options = void 0),
				(this.ctx = t.ctx),
				(this.chart = t.chart),
				(this.top = void 0),
				(this.bottom = void 0),
				(this.left = void 0),
				(this.right = void 0),
				(this.width = void 0),
				(this.height = void 0),
				(this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
				(this.maxWidth = void 0),
				(this.maxHeight = void 0),
				(this.paddingTop = void 0),
				(this.paddingBottom = void 0),
				(this.paddingLeft = void 0),
				(this.paddingRight = void 0),
				(this.axis = void 0),
				(this.labelRotation = void 0),
				(this.min = void 0),
				(this.max = void 0),
				(this._range = void 0),
				(this.ticks = []),
				(this._gridLineItems = null),
				(this._labelItems = null),
				(this._labelSizes = null),
				(this._length = 0),
				(this._maxLength = 0),
				(this._longestTextCache = {}),
				(this._startPixel = void 0),
				(this._endPixel = void 0),
				(this._reversePixels = !1),
				(this._userMax = void 0),
				(this._userMin = void 0),
				(this._suggestedMax = void 0),
				(this._suggestedMin = void 0),
				(this._ticksLength = 0),
				(this._borderValue = 0),
				(this._cache = {}),
				(this._dataLimitsCached = !1),
				(this.$context = void 0)
		}
		init(t) {
			;(this.options = t.setContext(this.getContext())),
				(this.axis = t.axis),
				(this._userMin = this.parse(t.min)),
				(this._userMax = this.parse(t.max)),
				(this._suggestedMin = this.parse(t.suggestedMin)),
				(this._suggestedMax = this.parse(t.suggestedMax))
		}
		parse(t, e) {
			return t
		}
		getUserBounds() {
			let {
				_userMin: t,
				_userMax: e,
				_suggestedMin: i,
				_suggestedMax: n,
			} = this
			return (
				(t = zt(t, Number.POSITIVE_INFINITY)),
				(e = zt(e, Number.NEGATIVE_INFINITY)),
				(i = zt(i, Number.POSITIVE_INFINITY)),
				(n = zt(n, Number.NEGATIVE_INFINITY)),
				{ min: zt(t, i), max: zt(e, n), minDefined: rt(t), maxDefined: rt(e) }
			)
		}
		getMinMax(t) {
			let {
					min: e,
					max: i,
					minDefined: n,
					maxDefined: o,
				} = this.getUserBounds(),
				r
			if (n && o) return { min: e, max: i }
			const a = this.getMatchingVisibleMetas()
			for (let l = 0, c = a.length; l < c; ++l)
				(r = a[l].controller.getMinMax(this, t)),
					n || (e = Math.min(e, r.min)),
					o || (i = Math.max(i, r.max))
			return (
				(e = o && e > i ? i : e),
				(i = n && e > i ? e : i),
				{ min: zt(e, zt(i, e)), max: zt(i, zt(e, i)) }
			)
		}
		getPadding() {
			return {
				left: this.paddingLeft || 0,
				top: this.paddingTop || 0,
				right: this.paddingRight || 0,
				bottom: this.paddingBottom || 0,
			}
		}
		getTicks() {
			return this.ticks
		}
		getLabels() {
			const t = this.chart.data
			return (
				this.options.labels ||
				(this.isHorizontal() ? t.xLabels : t.yLabels) ||
				t.labels ||
				[]
			)
		}
		beforeLayout() {
			;(this._cache = {}), (this._dataLimitsCached = !1)
		}
		beforeUpdate() {
			G(this.options.beforeUpdate, [this])
		}
		update(t, e, i) {
			const { beginAtZero: n, grace: o, ticks: r } = this.options,
				a = r.sampleSize
			this.beforeUpdate(),
				(this.maxWidth = t),
				(this.maxHeight = e),
				(this._margins = i =
					Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
				(this.ticks = null),
				(this._labelSizes = null),
				(this._gridLineItems = null),
				(this._labelItems = null),
				this.beforeSetDimensions(),
				this.setDimensions(),
				this.afterSetDimensions(),
				(this._maxLength = this.isHorizontal()
					? this.width + i.left + i.right
					: this.height + i.top + i.bottom),
				this._dataLimitsCached ||
					(this.beforeDataLimits(),
					this.determineDataLimits(),
					this.afterDataLimits(),
					(this._range = vI(this, o, n)),
					(this._dataLimitsCached = !0)),
				this.beforeBuildTicks(),
				(this.ticks = this.buildTicks() || []),
				this.afterBuildTicks()
			const l = a < this.ticks.length
			this._convertTicksToLabels(l ? S_(this.ticks, a) : this.ticks),
				this.configure(),
				this.beforeCalculateLabelRotation(),
				this.calculateLabelRotation(),
				this.afterCalculateLabelRotation(),
				r.display &&
					(r.autoSkip || r.source === 'auto') &&
					((this.ticks = SD(this, this.ticks)),
					(this._labelSizes = null),
					this.afterAutoSkip()),
				l && this._convertTicksToLabels(this.ticks),
				this.beforeFit(),
				this.fit(),
				this.afterFit(),
				this.afterUpdate()
		}
		configure() {
			let t = this.options.reverse,
				e,
				i
			this.isHorizontal()
				? ((e = this.left), (i = this.right))
				: ((e = this.top), (i = this.bottom), (t = !t)),
				(this._startPixel = e),
				(this._endPixel = i),
				(this._reversePixels = t),
				(this._length = i - e),
				(this._alignToPixels = this.options.alignToPixels)
		}
		afterUpdate() {
			G(this.options.afterUpdate, [this])
		}
		beforeSetDimensions() {
			G(this.options.beforeSetDimensions, [this])
		}
		setDimensions() {
			this.isHorizontal()
				? ((this.width = this.maxWidth),
				  (this.left = 0),
				  (this.right = this.width))
				: ((this.height = this.maxHeight),
				  (this.top = 0),
				  (this.bottom = this.height)),
				(this.paddingLeft = 0),
				(this.paddingTop = 0),
				(this.paddingRight = 0),
				(this.paddingBottom = 0)
		}
		afterSetDimensions() {
			G(this.options.afterSetDimensions, [this])
		}
		_callHooks(t) {
			this.chart.notifyPlugins(t, this.getContext()), G(this.options[t], [this])
		}
		beforeDataLimits() {
			this._callHooks('beforeDataLimits')
		}
		determineDataLimits() {}
		afterDataLimits() {
			this._callHooks('afterDataLimits')
		}
		beforeBuildTicks() {
			this._callHooks('beforeBuildTicks')
		}
		buildTicks() {
			return []
		}
		afterBuildTicks() {
			this._callHooks('afterBuildTicks')
		}
		beforeTickToLabelConversion() {
			G(this.options.beforeTickToLabelConversion, [this])
		}
		generateTickLabels(t) {
			const e = this.options.ticks
			let i, n, o
			for (i = 0, n = t.length; i < n; i++)
				(o = t[i]), (o.label = G(e.callback, [o.value, i, t], this))
		}
		afterTickToLabelConversion() {
			G(this.options.afterTickToLabelConversion, [this])
		}
		beforeCalculateLabelRotation() {
			G(this.options.beforeCalculateLabelRotation, [this])
		}
		calculateLabelRotation() {
			const t = this.options,
				e = t.ticks,
				i = this.ticks.length,
				n = e.minRotation || 0,
				o = e.maxRotation
			let r = n,
				a,
				l,
				c
			if (
				!this._isVisible() ||
				!e.display ||
				n >= o ||
				i <= 1 ||
				!this.isHorizontal()
			) {
				this.labelRotation = n
				return
			}
			const h = this._getLabelSizes(),
				d = h.widest.width,
				u = h.highest.height,
				p = dt(this.chart.width - d, 0, this.maxWidth)
			;(a = t.offset ? this.maxWidth / i : p / (i - 1)),
				d + 6 > a &&
					((a = p / (i - (t.offset ? 0.5 : 1))),
					(l =
						this.maxHeight -
						Kn(t.grid) -
						e.padding -
						O_(t.title, this.chart.options.font)),
					(c = Math.sqrt(d * d + u * u)),
					(r = mc(
						Math.min(
							Math.asin(dt((h.highest.height + 6) / a, -1, 1)),
							Math.asin(dt(l / c, -1, 1)) - Math.asin(dt(u / c, -1, 1))
						)
					)),
					(r = Math.max(n, Math.min(o, r)))),
				(this.labelRotation = r)
		}
		afterCalculateLabelRotation() {
			G(this.options.afterCalculateLabelRotation, [this])
		}
		afterAutoSkip() {}
		beforeFit() {
			G(this.options.beforeFit, [this])
		}
		fit() {
			const t = { width: 0, height: 0 },
				{
					chart: e,
					options: { ticks: i, title: n, grid: o },
				} = this,
				r = this._isVisible(),
				a = this.isHorizontal()
			if (r) {
				const l = O_(n, e.options.font)
				if (
					(a
						? ((t.width = this.maxWidth), (t.height = Kn(o) + l))
						: ((t.height = this.maxHeight), (t.width = Kn(o) + l)),
					i.display && this.ticks.length)
				) {
					const {
							first: c,
							last: h,
							widest: d,
							highest: u,
						} = this._getLabelSizes(),
						p = i.padding * 2,
						f = se(this.labelRotation),
						b = Math.cos(f),
						v = Math.sin(f)
					if (a) {
						const y = i.mirror ? 0 : v * d.width + b * u.height
						t.height = Math.min(this.maxHeight, t.height + y + p)
					} else {
						const y = i.mirror ? 0 : b * d.width + v * u.height
						t.width = Math.min(this.maxWidth, t.width + y + p)
					}
					this._calculatePadding(c, h, v, b)
				}
			}
			this._handleMargins(),
				a
					? ((this.width = this._length =
							e.width - this._margins.left - this._margins.right),
					  (this.height = t.height))
					: ((this.width = t.width),
					  (this.height = this._length =
							e.height - this._margins.top - this._margins.bottom))
		}
		_calculatePadding(t, e, i, n) {
			const {
					ticks: { align: o, padding: r },
					position: a,
				} = this.options,
				l = this.labelRotation !== 0,
				c = a !== 'top' && this.axis === 'x'
			if (this.isHorizontal()) {
				const h = this.getPixelForTick(0) - this.left,
					d = this.right - this.getPixelForTick(this.ticks.length - 1)
				let u = 0,
					p = 0
				l
					? c
						? ((u = n * t.width), (p = i * e.height))
						: ((u = i * t.height), (p = n * e.width))
					: o === 'start'
					? (p = e.width)
					: o === 'end'
					? (u = t.width)
					: o !== 'inner' && ((u = t.width / 2), (p = e.width / 2)),
					(this.paddingLeft = Math.max(
						((u - h + r) * this.width) / (this.width - h),
						0
					)),
					(this.paddingRight = Math.max(
						((p - d + r) * this.width) / (this.width - d),
						0
					))
			} else {
				let h = e.height / 2,
					d = t.height / 2
				o === 'start'
					? ((h = 0), (d = t.height))
					: o === 'end' && ((h = e.height), (d = 0)),
					(this.paddingTop = h + r),
					(this.paddingBottom = d + r)
			}
		}
		_handleMargins() {
			this._margins &&
				((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
				(this._margins.top = Math.max(this.paddingTop, this._margins.top)),
				(this._margins.right = Math.max(
					this.paddingRight,
					this._margins.right
				)),
				(this._margins.bottom = Math.max(
					this.paddingBottom,
					this._margins.bottom
				)))
		}
		afterFit() {
			G(this.options.afterFit, [this])
		}
		isHorizontal() {
			const { axis: t, position: e } = this.options
			return e === 'top' || e === 'bottom' || t === 'x'
		}
		isFullSize() {
			return this.options.fullSize
		}
		_convertTicksToLabels(t) {
			this.beforeTickToLabelConversion(), this.generateTickLabels(t)
			let e, i
			for (e = 0, i = t.length; e < i; e++)
				H(t[e].label) && (t.splice(e, 1), i--, e--)
			this.afterTickToLabelConversion()
		}
		_getLabelSizes() {
			let t = this._labelSizes
			if (!t) {
				const e = this.options.ticks.sampleSize
				let i = this.ticks
				e < i.length && (i = S_(i, e)),
					(this._labelSizes = t = this._computeLabelSizes(i, i.length))
			}
			return t
		}
		_computeLabelSizes(t, e) {
			const { ctx: i, _longestTextCache: n } = this,
				o = [],
				r = []
			let a = 0,
				l = 0,
				c,
				h,
				d,
				u,
				p,
				f,
				b,
				v,
				y,
				T,
				x
			for (c = 0; c < e; ++c) {
				if (
					((u = t[c].label),
					(p = this._resolveTickFontOptions(c)),
					(i.font = f = p.string),
					(b = n[f] = n[f] || { data: {}, gc: [] }),
					(v = p.lineHeight),
					(y = T = 0),
					!H(u) && !Q(u))
				)
					(y = Gr(i, b.data, b.gc, y, u)), (T = v)
				else if (Q(u))
					for (h = 0, d = u.length; h < d; ++h)
						(x = u[h]),
							!H(x) && !Q(x) && ((y = Gr(i, b.data, b.gc, y, x)), (T += v))
				o.push(y), r.push(T), (a = Math.max(y, a)), (l = Math.max(T, l))
			}
			PD(n, e)
			const E = o.indexOf(a),
				C = r.indexOf(l),
				A = w => ({ width: o[w] || 0, height: r[w] || 0 })
			return {
				first: A(0),
				last: A(e - 1),
				widest: A(E),
				highest: A(C),
				widths: o,
				heights: r,
			}
		}
		getLabelForValue(t) {
			return t
		}
		getPixelForValue(t, e) {
			return NaN
		}
		getValueForPixel(t) {}
		getPixelForTick(t) {
			const e = this.ticks
			return t < 0 || t > e.length - 1
				? null
				: this.getPixelForValue(e[t].value)
		}
		getPixelForDecimal(t) {
			this._reversePixels && (t = 1 - t)
			const e = this._startPixel + t * this._length
			return $O(this._alignToPixels ? Mi(this.chart, e, 0) : e)
		}
		getDecimalForPixel(t) {
			const e = (t - this._startPixel) / this._length
			return this._reversePixels ? 1 - e : e
		}
		getBasePixel() {
			return this.getPixelForValue(this.getBaseValue())
		}
		getBaseValue() {
			const { min: t, max: e } = this
			return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
		}
		getContext(t) {
			const e = this.ticks || []
			if (t >= 0 && t < e.length) {
				const i = e[t]
				return i.$context || (i.$context = BD(this.getContext(), t, i))
			}
			return (
				this.$context || (this.$context = ND(this.chart.getContext(), this))
			)
		}
		_tickSize() {
			const t = this.options.ticks,
				e = se(this.labelRotation),
				i = Math.abs(Math.cos(e)),
				n = Math.abs(Math.sin(e)),
				o = this._getLabelSizes(),
				r = t.autoSkipPadding || 0,
				a = o ? o.widest.width + r : 0,
				l = o ? o.highest.height + r : 0
			return this.isHorizontal()
				? l * i > a * n
					? a / i
					: l / n
				: l * n < a * i
				? l / i
				: a / n
		}
		_isVisible() {
			const t = this.options.display
			return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0
		}
		_computeGridLineItems(t) {
			const e = this.axis,
				i = this.chart,
				n = this.options,
				{ grid: o, position: r } = n,
				a = o.offset,
				l = this.isHorizontal(),
				h = this.ticks.length + (a ? 1 : 0),
				d = Kn(o),
				u = [],
				p = o.setContext(this.getContext()),
				f = p.drawBorder ? p.borderWidth : 0,
				b = f / 2,
				v = function (R) {
					return Mi(i, R, f)
				}
			let y, T, x, E, C, A, w, S, k, D, I, M
			if (r === 'top')
				(y = v(this.bottom)),
					(A = this.bottom - d),
					(S = y - b),
					(D = v(t.top) + b),
					(M = t.bottom)
			else if (r === 'bottom')
				(y = v(this.top)),
					(D = t.top),
					(M = v(t.bottom) - b),
					(A = y + b),
					(S = this.top + d)
			else if (r === 'left')
				(y = v(this.right)),
					(C = this.right - d),
					(w = y - b),
					(k = v(t.left) + b),
					(I = t.right)
			else if (r === 'right')
				(y = v(this.left)),
					(k = t.left),
					(I = v(t.right) - b),
					(C = y + b),
					(w = this.left + d)
			else if (e === 'x') {
				if (r === 'center') y = v((t.top + t.bottom) / 2 + 0.5)
				else if (V(r)) {
					const R = Object.keys(r)[0],
						z = r[R]
					y = v(this.chart.scales[R].getPixelForValue(z))
				}
				;(D = t.top), (M = t.bottom), (A = y + b), (S = A + d)
			} else if (e === 'y') {
				if (r === 'center') y = v((t.left + t.right) / 2)
				else if (V(r)) {
					const R = Object.keys(r)[0],
						z = r[R]
					y = v(this.chart.scales[R].getPixelForValue(z))
				}
				;(C = y - b), (w = C - d), (k = t.left), (I = t.right)
			}
			const P = B(n.ticks.maxTicksLimit, h),
				X = Math.max(1, Math.ceil(h / P))
			for (T = 0; T < h; T += X) {
				const R = o.setContext(this.getContext(T)),
					z = R.lineWidth,
					Y = R.color,
					Gt = R.borderDash || [],
					oe = R.borderDashOffset,
					re = R.tickWidth,
					li = R.tickColor,
					qt = R.tickBorderDash || [],
					Ae = R.tickBorderDashOffset
				;(x = RD(this, T, a)),
					x !== void 0 &&
						((E = Mi(i, x, z)),
						l ? (C = w = k = I = E) : (A = S = D = M = E),
						u.push({
							tx1: C,
							ty1: A,
							tx2: w,
							ty2: S,
							x1: k,
							y1: D,
							x2: I,
							y2: M,
							width: z,
							color: Y,
							borderDash: Gt,
							borderDashOffset: oe,
							tickWidth: re,
							tickColor: li,
							tickBorderDash: qt,
							tickBorderDashOffset: Ae,
						}))
			}
			return (this._ticksLength = h), (this._borderValue = y), u
		}
		_computeLabelItems(t) {
			const e = this.axis,
				i = this.options,
				{ position: n, ticks: o } = i,
				r = this.isHorizontal(),
				a = this.ticks,
				{ align: l, crossAlign: c, padding: h, mirror: d } = o,
				u = Kn(i.grid),
				p = u + h,
				f = d ? -h : p,
				b = -se(this.labelRotation),
				v = []
			let y,
				T,
				x,
				E,
				C,
				A,
				w,
				S,
				k,
				D,
				I,
				M,
				P = 'middle'
			if (n === 'top')
				(A = this.bottom - f), (w = this._getXAxisLabelAlignment())
			else if (n === 'bottom')
				(A = this.top + f), (w = this._getXAxisLabelAlignment())
			else if (n === 'left') {
				const R = this._getYAxisLabelAlignment(u)
				;(w = R.textAlign), (C = R.x)
			} else if (n === 'right') {
				const R = this._getYAxisLabelAlignment(u)
				;(w = R.textAlign), (C = R.x)
			} else if (e === 'x') {
				if (n === 'center') A = (t.top + t.bottom) / 2 + p
				else if (V(n)) {
					const R = Object.keys(n)[0],
						z = n[R]
					A = this.chart.scales[R].getPixelForValue(z) + p
				}
				w = this._getXAxisLabelAlignment()
			} else if (e === 'y') {
				if (n === 'center') C = (t.left + t.right) / 2 - p
				else if (V(n)) {
					const R = Object.keys(n)[0],
						z = n[R]
					C = this.chart.scales[R].getPixelForValue(z)
				}
				w = this._getYAxisLabelAlignment(u).textAlign
			}
			e === 'y' && (l === 'start' ? (P = 'top') : l === 'end' && (P = 'bottom'))
			const X = this._getLabelSizes()
			for (y = 0, T = a.length; y < T; ++y) {
				;(x = a[y]), (E = x.label)
				const R = o.setContext(this.getContext(y))
				;(S = this.getPixelForTick(y) + o.labelOffset),
					(k = this._resolveTickFontOptions(y)),
					(D = k.lineHeight),
					(I = Q(E) ? E.length : 1)
				const z = I / 2,
					Y = R.color,
					Gt = R.textStrokeColor,
					oe = R.textStrokeWidth
				let re = w
				r
					? ((C = S),
					  w === 'inner' &&
							(y === T - 1
								? (re = this.options.reverse ? 'left' : 'right')
								: y === 0
								? (re = this.options.reverse ? 'right' : 'left')
								: (re = 'center')),
					  n === 'top'
							? c === 'near' || b !== 0
								? (M = -I * D + D / 2)
								: c === 'center'
								? (M = -X.highest.height / 2 - z * D + D)
								: (M = -X.highest.height + D / 2)
							: c === 'near' || b !== 0
							? (M = D / 2)
							: c === 'center'
							? (M = X.highest.height / 2 - z * D)
							: (M = X.highest.height - I * D),
					  d && (M *= -1))
					: ((A = S), (M = ((1 - I) * D) / 2))
				let li
				if (R.showLabelBackdrop) {
					const qt = pt(R.backdropPadding),
						Ae = X.heights[y],
						we = X.widths[y]
					let Zt = A + M - qt.top,
						Pe = C - qt.left
					switch (P) {
						case 'middle':
							Zt -= Ae / 2
							break
						case 'bottom':
							Zt -= Ae
							break
					}
					switch (w) {
						case 'center':
							Pe -= we / 2
							break
						case 'right':
							Pe -= we
							break
					}
					li = {
						left: Pe,
						top: Zt,
						width: we + qt.width,
						height: Ae + qt.height,
						color: R.backdropColor,
					}
				}
				v.push({
					rotation: b,
					label: E,
					font: k,
					color: Y,
					strokeColor: Gt,
					strokeWidth: oe,
					textOffset: M,
					textAlign: re,
					textBaseline: P,
					translation: [C, A],
					backdrop: li,
				})
			}
			return v
		}
		_getXAxisLabelAlignment() {
			const { position: t, ticks: e } = this.options
			if (-se(this.labelRotation)) return t === 'top' ? 'left' : 'right'
			let n = 'center'
			return (
				e.align === 'start'
					? (n = 'left')
					: e.align === 'end'
					? (n = 'right')
					: e.align === 'inner' && (n = 'inner'),
				n
			)
		}
		_getYAxisLabelAlignment(t) {
			const {
					position: e,
					ticks: { crossAlign: i, mirror: n, padding: o },
				} = this.options,
				r = this._getLabelSizes(),
				a = t + o,
				l = r.widest.width
			let c, h
			return (
				e === 'left'
					? n
						? ((h = this.right + o),
						  i === 'near'
								? (c = 'left')
								: i === 'center'
								? ((c = 'center'), (h += l / 2))
								: ((c = 'right'), (h += l)))
						: ((h = this.right - a),
						  i === 'near'
								? (c = 'right')
								: i === 'center'
								? ((c = 'center'), (h -= l / 2))
								: ((c = 'left'), (h = this.left)))
					: e === 'right'
					? n
						? ((h = this.left + o),
						  i === 'near'
								? (c = 'right')
								: i === 'center'
								? ((c = 'center'), (h -= l / 2))
								: ((c = 'left'), (h -= l)))
						: ((h = this.left + a),
						  i === 'near'
								? (c = 'left')
								: i === 'center'
								? ((c = 'center'), (h += l / 2))
								: ((c = 'right'), (h = this.right)))
					: (c = 'right'),
				{ textAlign: c, x: h }
			)
		}
		_computeLabelArea() {
			if (this.options.ticks.mirror) return
			const t = this.chart,
				e = this.options.position
			if (e === 'left' || e === 'right')
				return { top: 0, left: this.left, bottom: t.height, right: this.right }
			if (e === 'top' || e === 'bottom')
				return { top: this.top, left: 0, bottom: this.bottom, right: t.width }
		}
		drawBackground() {
			const {
				ctx: t,
				options: { backgroundColor: e },
				left: i,
				top: n,
				width: o,
				height: r,
			} = this
			e && (t.save(), (t.fillStyle = e), t.fillRect(i, n, o, r), t.restore())
		}
		getLineWidthForValue(t) {
			const e = this.options.grid
			if (!this._isVisible() || !e.display) return 0
			const n = this.ticks.findIndex(o => o.value === t)
			return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
		}
		drawGrid(t) {
			const e = this.options.grid,
				i = this.ctx,
				n =
					this._gridLineItems ||
					(this._gridLineItems = this._computeGridLineItems(t))
			let o, r
			const a = (l, c, h) => {
				!h.width ||
					!h.color ||
					(i.save(),
					(i.lineWidth = h.width),
					(i.strokeStyle = h.color),
					i.setLineDash(h.borderDash || []),
					(i.lineDashOffset = h.borderDashOffset),
					i.beginPath(),
					i.moveTo(l.x, l.y),
					i.lineTo(c.x, c.y),
					i.stroke(),
					i.restore())
			}
			if (e.display)
				for (o = 0, r = n.length; o < r; ++o) {
					const l = n[o]
					e.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
						e.drawTicks &&
							a(
								{ x: l.tx1, y: l.ty1 },
								{ x: l.tx2, y: l.ty2 },
								{
									color: l.tickColor,
									width: l.tickWidth,
									borderDash: l.tickBorderDash,
									borderDashOffset: l.tickBorderDashOffset,
								}
							)
				}
		}
		drawBorder() {
			const {
					chart: t,
					ctx: e,
					options: { grid: i },
				} = this,
				n = i.setContext(this.getContext()),
				o = i.drawBorder ? n.borderWidth : 0
			if (!o) return
			const r = i.setContext(this.getContext(0)).lineWidth,
				a = this._borderValue
			let l, c, h, d
			this.isHorizontal()
				? ((l = Mi(t, this.left, o) - o / 2),
				  (c = Mi(t, this.right, r) + r / 2),
				  (h = d = a))
				: ((h = Mi(t, this.top, o) - o / 2),
				  (d = Mi(t, this.bottom, r) + r / 2),
				  (l = c = a)),
				e.save(),
				(e.lineWidth = n.borderWidth),
				(e.strokeStyle = n.borderColor),
				e.beginPath(),
				e.moveTo(l, h),
				e.lineTo(c, d),
				e.stroke(),
				e.restore()
		}
		drawLabels(t) {
			if (!this.options.ticks.display) return
			const i = this.ctx,
				n = this._computeLabelArea()
			n && qr(i, n)
			const o =
				this._labelItems || (this._labelItems = this._computeLabelItems(t))
			let r, a
			for (r = 0, a = o.length; r < a; ++r) {
				const l = o[r],
					c = l.font,
					h = l.label
				l.backdrop &&
					((i.fillStyle = l.backdrop.color),
					i.fillRect(
						l.backdrop.left,
						l.backdrop.top,
						l.backdrop.width,
						l.backdrop.height
					))
				let d = l.textOffset
				Li(i, h, 0, d, c, l)
			}
			n && Zr(i)
		}
		drawTitle() {
			const {
				ctx: t,
				options: { position: e, title: i, reverse: n },
			} = this
			if (!i.display) return
			const o = lt(i.font),
				r = pt(i.padding),
				a = i.align
			let l = o.lineHeight / 2
			e === 'bottom' || e === 'center' || V(e)
				? ((l += r.bottom),
				  Q(i.text) && (l += o.lineHeight * (i.text.length - 1)))
				: (l += r.top)
			const {
				titleX: c,
				titleY: h,
				maxWidth: d,
				rotation: u,
			} = VD(this, l, e, a)
			Li(t, i.text, 0, 0, o, {
				color: i.color,
				maxWidth: d,
				rotation: u,
				textAlign: HD(a, e, n),
				textBaseline: 'middle',
				translation: [c, h],
			})
		}
		draw(t) {
			this._isVisible() &&
				(this.drawBackground(),
				this.drawGrid(t),
				this.drawBorder(),
				this.drawTitle(),
				this.drawLabels(t))
		}
		_layers() {
			const t = this.options,
				e = (t.ticks && t.ticks.z) || 0,
				i = B(t.grid && t.grid.z, -1)
			return !this._isVisible() || this.draw !== oi.prototype.draw
				? [
						{
							z: e,
							draw: n => {
								this.draw(n)
							},
						},
				  ]
				: [
						{
							z: i,
							draw: n => {
								this.drawBackground(), this.drawGrid(n), this.drawTitle()
							},
						},
						{
							z: i + 1,
							draw: () => {
								this.drawBorder()
							},
						},
						{
							z: e,
							draw: n => {
								this.drawLabels(n)
							},
						},
				  ]
		}
		getMatchingVisibleMetas(t) {
			const e = this.chart.getSortedVisibleDatasetMetas(),
				i = this.axis + 'AxisID',
				n = []
			let o, r
			for (o = 0, r = e.length; o < r; ++o) {
				const a = e[o]
				a[i] === this.id && (!t || a.type === t) && n.push(a)
			}
			return n
		}
		_resolveTickFontOptions(t) {
			const e = this.options.ticks.setContext(this.getContext(t))
			return lt(e.font)
		}
		_maxDigits() {
			const t = this._resolveTickFontOptions(0).lineHeight
			return (this.isHorizontal() ? this.width : this.height) / t
		}
	}
	class sa {
		constructor(t, e, i) {
			;(this.type = t),
				(this.scope = e),
				(this.override = i),
				(this.items = Object.create(null))
		}
		isForType(t) {
			return Object.prototype.isPrototypeOf.call(
				this.type.prototype,
				t.prototype
			)
		}
		register(t) {
			const e = Object.getPrototypeOf(t)
			let i
			zD(e) && (i = this.register(e))
			const n = this.items,
				o = t.id,
				r = this.scope + '.' + o
			if (!o) throw new Error('class does not have id: ' + t)
			return (
				o in n ||
					((n[o] = t),
					FD(t, r, i),
					this.override && F.override(t.id, t.overrides)),
				r
			)
		}
		get(t) {
			return this.items[t]
		}
		unregister(t) {
			const e = this.items,
				i = t.id,
				n = this.scope
			i in e && delete e[i],
				n && i in F[n] && (delete F[n][i], this.override && delete Di[i])
		}
	}
	function FD(s, t, e) {
		const i = Te(Object.create(null), [e ? F.get(e) : {}, F.get(t), s.defaults])
		F.set(t, i),
			s.defaultRoutes && WD(t, s.defaultRoutes),
			s.descriptors && F.describe(t, s.descriptors)
	}
	function WD(s, t) {
		Object.keys(t).forEach(e => {
			const i = e.split('.'),
				n = i.pop(),
				o = [s].concat(i).join('.'),
				r = t[e].split('.'),
				a = r.pop(),
				l = r.join('.')
			F.route(o, n, l, a)
		})
	}
	function zD(s) {
		return 'id' in s && 'defaults' in s
	}
	class jD {
		constructor() {
			;(this.controllers = new sa(Ut, 'datasets', !0)),
				(this.elements = new sa(Xt, 'elements')),
				(this.plugins = new sa(Object, 'plugins')),
				(this.scales = new sa(oi, 'scales')),
				(this._typedRegistries = [this.controllers, this.scales, this.elements])
		}
		add(...t) {
			this._each('register', t)
		}
		remove(...t) {
			this._each('unregister', t)
		}
		addControllers(...t) {
			this._each('register', t, this.controllers)
		}
		addElements(...t) {
			this._each('register', t, this.elements)
		}
		addPlugins(...t) {
			this._each('register', t, this.plugins)
		}
		addScales(...t) {
			this._each('register', t, this.scales)
		}
		getController(t) {
			return this._get(t, this.controllers, 'controller')
		}
		getElement(t) {
			return this._get(t, this.elements, 'element')
		}
		getPlugin(t) {
			return this._get(t, this.plugins, 'plugin')
		}
		getScale(t) {
			return this._get(t, this.scales, 'scale')
		}
		removeControllers(...t) {
			this._each('unregister', t, this.controllers)
		}
		removeElements(...t) {
			this._each('unregister', t, this.elements)
		}
		removePlugins(...t) {
			this._each('unregister', t, this.plugins)
		}
		removeScales(...t) {
			this._each('unregister', t, this.scales)
		}
		_each(t, e, i) {
			;[...e].forEach(n => {
				const o = i || this._getRegistryForType(n)
				i || o.isForType(n) || (o === this.plugins && n.id)
					? this._exec(t, o, n)
					: U(n, r => {
							const a = i || this._getRegistryForType(r)
							this._exec(t, a, r)
					  })
			})
		}
		_exec(t, e, i) {
			const n = gc(t)
			G(i['before' + n], [], i), e[t](i), G(i['after' + n], [], i)
		}
		_getRegistryForType(t) {
			for (let e = 0; e < this._typedRegistries.length; e++) {
				const i = this._typedRegistries[e]
				if (i.isForType(t)) return i
			}
			return this.plugins
		}
		_get(t, e, i) {
			const n = e.get(t)
			if (n === void 0)
				throw new Error('"' + t + '" is not a registered ' + i + '.')
			return n
		}
	}
	var ne = new jD()
	class Un extends Ut {
		update(t) {
			const e = this._cachedMeta,
				{ data: i = [] } = e,
				n = this.chart._animationsDisabled
			let { start: o, count: r } = If(e, i, n)
			if (
				((this._drawStart = o),
				(this._drawCount = r),
				Df(e) && ((o = 0), (r = i.length)),
				this.options.showLine)
			) {
				const { dataset: a, _dataset: l } = e
				;(a._chart = this.chart),
					(a._datasetIndex = this.index),
					(a._decimated = !!l._decimated),
					(a.points = i)
				const c = this.resolveDatasetElementOptions(t)
				;(c.segment = this.options.segment),
					this.updateElement(a, void 0, { animated: !n, options: c }, t)
			}
			this.updateElements(i, o, r, t)
		}
		addElements() {
			const { showLine: t } = this.options
			!this.datasetElementType &&
				t &&
				(this.datasetElementType = ne.getElement('line')),
				super.addElements()
		}
		updateElements(t, e, i, n) {
			const o = n === 'reset',
				{ iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
				h = this.resolveDataElementOptions(e, n),
				d = this.getSharedOptions(h),
				u = this.includeOptions(n, d),
				p = r.axis,
				f = a.axis,
				{ spanGaps: b, segment: v } = this.options,
				y = As(b) ? b : Number.POSITIVE_INFINITY,
				T = this.chart._animationsDisabled || o || n === 'none'
			let x = e > 0 && this.getParsed(e - 1)
			for (let E = e; E < e + i; ++E) {
				const C = t[E],
					A = this.getParsed(E),
					w = T ? C : {},
					S = H(A[f]),
					k = (w[p] = r.getPixelForValue(A[p], E)),
					D = (w[f] =
						o || S
							? a.getBasePixel()
							: a.getPixelForValue(l ? this.applyStack(a, A, l) : A[f], E))
				;(w.skip = isNaN(k) || isNaN(D) || S),
					(w.stop = E > 0 && Math.abs(A[p] - x[p]) > y),
					v && ((w.parsed = A), (w.raw = c.data[E])),
					u &&
						(w.options =
							d || this.resolveDataElementOptions(E, C.active ? 'active' : n)),
					T || this.updateElement(C, E, w, n),
					(x = A)
			}
			this.updateSharedOptions(d, n, h)
		}
		getMaxOverflow() {
			const t = this._cachedMeta,
				e = t.data || []
			if (!this.options.showLine) {
				let a = 0
				for (let l = e.length - 1; l >= 0; --l)
					a = Math.max(a, e[l].size(this.resolveDataElementOptions(l)) / 2)
				return a > 0 && a
			}
			const i = t.dataset,
				n = (i.options && i.options.borderWidth) || 0
			if (!e.length) return n
			const o = e[0].size(this.resolveDataElementOptions(0)),
				r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1))
			return Math.max(n, o, r) / 2
		}
	}
	;(Un.id = 'scatter'),
		(Un.defaults = {
			datasetElementType: !1,
			dataElementType: 'point',
			showLine: !1,
			fill: !1,
		}),
		(Un.overrides = {
			interaction: { mode: 'point' },
			plugins: {
				tooltip: {
					callbacks: {
						title() {
							return ''
						},
						label(s) {
							return '(' + s.label + ', ' + s.formattedValue + ')'
						},
					},
				},
			},
			scales: { x: { type: 'linear' }, y: { type: 'linear' } },
		})
	var I_ = Object.freeze({
		__proto__: null,
		BarController: Vn,
		BubbleController: Fn,
		DoughnutController: Bi,
		LineController: Wn,
		PolarAreaController: zn,
		PieController: ea,
		RadarController: jn,
		ScatterController: Un,
	})
	function Hi() {
		throw new Error(
			'This method is not implemented: Check that a complete date adapter is provided.'
		)
	}
	class Vc {
		constructor(t) {
			this.options = t || {}
		}
		init(t) {}
		formats() {
			return Hi()
		}
		parse(t, e) {
			return Hi()
		}
		format(t, e) {
			return Hi()
		}
		add(t, e, i) {
			return Hi()
		}
		diff(t, e, i) {
			return Hi()
		}
		startOf(t, e, i) {
			return Hi()
		}
		endOf(t, e) {
			return Hi()
		}
	}
	Vc.override = function (s) {
		Object.assign(Vc.prototype, s)
	}
	var D_ = { _date: Vc }
	function YD(s, t, e, i) {
		const { controller: n, data: o, _sorted: r } = s,
			a = n._cachedMeta.iScale
		if (a && t === a.axis && t !== 'r' && r && o.length) {
			const l = a._reversePixels ? RO : De
			if (i) {
				if (n._sharedOptions) {
					const c = o[0],
						h = typeof c.getRange == 'function' && c.getRange(t)
					if (h) {
						const d = l(o, t, e - h),
							u = l(o, t, e + h)
						return { lo: d.lo, hi: u.hi }
					}
				}
			} else return l(o, t, e)
		}
		return { lo: 0, hi: o.length - 1 }
	}
	function Xn(s, t, e, i, n) {
		const o = s.getSortedVisibleDatasetMetas(),
			r = e[t]
		for (let a = 0, l = o.length; a < l; ++a) {
			const { index: c, data: h } = o[a],
				{ lo: d, hi: u } = YD(o[a], t, r, n)
			for (let p = d; p <= u; ++p) {
				const f = h[p]
				f.skip || i(f, c, p)
			}
		}
	}
	function KD(s) {
		const t = s.indexOf('x') !== -1,
			e = s.indexOf('y') !== -1
		return function (i, n) {
			const o = t ? Math.abs(i.x - n.x) : 0,
				r = e ? Math.abs(i.y - n.y) : 0
			return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
		}
	}
	function Fc(s, t, e, i, n) {
		const o = []
		return (
			(!n && !s.isPointInArea(t)) ||
				Xn(
					s,
					e,
					t,
					function (a, l, c) {
						;(!n && !Pn(a, s.chartArea, 0)) ||
							(a.inRange(t.x, t.y, i) &&
								o.push({ element: a, datasetIndex: l, index: c }))
					},
					!0
				),
			o
		)
	}
	function UD(s, t, e, i) {
		let n = []
		function o(r, a, l) {
			const { startAngle: c, endAngle: h } = r.getProps(
					['startAngle', 'endAngle'],
					i
				),
				{ angle: d } = Cf(r, { x: t.x, y: t.y })
			Dn(d, c, h) && n.push({ element: r, datasetIndex: a, index: l })
		}
		return Xn(s, e, t, o), n
	}
	function XD(s, t, e, i, n, o) {
		let r = []
		const a = KD(e)
		let l = Number.POSITIVE_INFINITY
		function c(h, d, u) {
			const p = h.inRange(t.x, t.y, n)
			if (i && !p) return
			const f = h.getCenterPoint(n)
			if (!(!!o || s.isPointInArea(f)) && !p) return
			const v = a(t, f)
			v < l
				? ((r = [{ element: h, datasetIndex: d, index: u }]), (l = v))
				: v === l && r.push({ element: h, datasetIndex: d, index: u })
		}
		return Xn(s, e, t, c), r
	}
	function Wc(s, t, e, i, n, o) {
		return !o && !s.isPointInArea(t)
			? []
			: e === 'r' && !i
			? UD(s, t, e, n)
			: XD(s, t, e, i, n, o)
	}
	function M_(s, t, e, i, n) {
		const o = [],
			r = e === 'x' ? 'inXRange' : 'inYRange'
		let a = !1
		return (
			Xn(s, e, t, (l, c, h) => {
				l[r](t[e], n) &&
					(o.push({ element: l, datasetIndex: c, index: h }),
					(a = a || l.inRange(t.x, t.y, n)))
			}),
			i && !a ? [] : o
		)
	}
	var L_ = {
		evaluateInteractionItems: Xn,
		modes: {
			index(s, t, e, i) {
				const n = Pi(t, s),
					o = e.axis || 'x',
					r = e.includeInvisible || !1,
					a = e.intersect ? Fc(s, n, o, i, r) : Wc(s, n, o, !1, i, r),
					l = []
				return a.length
					? (s.getSortedVisibleDatasetMetas().forEach(c => {
							const h = a[0].index,
								d = c.data[h]
							d &&
								!d.skip &&
								l.push({ element: d, datasetIndex: c.index, index: h })
					  }),
					  l)
					: []
			},
			dataset(s, t, e, i) {
				const n = Pi(t, s),
					o = e.axis || 'xy',
					r = e.includeInvisible || !1
				let a = e.intersect ? Fc(s, n, o, i, r) : Wc(s, n, o, !1, i, r)
				if (a.length > 0) {
					const l = a[0].datasetIndex,
						c = s.getDatasetMeta(l).data
					a = []
					for (let h = 0; h < c.length; ++h)
						a.push({ element: c[h], datasetIndex: l, index: h })
				}
				return a
			},
			point(s, t, e, i) {
				const n = Pi(t, s),
					o = e.axis || 'xy',
					r = e.includeInvisible || !1
				return Fc(s, n, o, i, r)
			},
			nearest(s, t, e, i) {
				const n = Pi(t, s),
					o = e.axis || 'xy',
					r = e.includeInvisible || !1
				return Wc(s, n, o, e.intersect, i, r)
			},
			x(s, t, e, i) {
				const n = Pi(t, s)
				return M_(s, n, 'x', e.intersect, i)
			},
			y(s, t, e, i) {
				const n = Pi(t, s)
				return M_(s, n, 'y', e.intersect, i)
			},
		},
	}
	const $_ = ['left', 'top', 'right', 'bottom']
	function Gn(s, t) {
		return s.filter(e => e.pos === t)
	}
	function R_(s, t) {
		return s.filter(e => $_.indexOf(e.pos) === -1 && e.box.axis === t)
	}
	function qn(s, t) {
		return s.sort((e, i) => {
			const n = t ? i : e,
				o = t ? e : i
			return n.weight === o.weight ? n.index - o.index : n.weight - o.weight
		})
	}
	function GD(s) {
		const t = []
		let e, i, n, o, r, a
		for (e = 0, i = (s || []).length; e < i; ++e)
			(n = s[e]),
				({
					position: o,
					options: { stack: r, stackWeight: a = 1 },
				} = n),
				t.push({
					index: e,
					box: n,
					pos: o,
					horizontal: n.isHorizontal(),
					weight: n.weight,
					stack: r && o + r,
					stackWeight: a,
				})
		return t
	}
	function qD(s) {
		const t = {}
		for (const e of s) {
			const { stack: i, pos: n, stackWeight: o } = e
			if (!i || !$_.includes(n)) continue
			const r = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 })
			r.count++, (r.weight += o)
		}
		return t
	}
	function ZD(s, t) {
		const e = qD(s),
			{ vBoxMaxWidth: i, hBoxMaxHeight: n } = t
		let o, r, a
		for (o = 0, r = s.length; o < r; ++o) {
			a = s[o]
			const { fullSize: l } = a.box,
				c = e[a.stack],
				h = c && a.stackWeight / c.weight
			a.horizontal
				? ((a.width = h ? h * i : l && t.availableWidth), (a.height = n))
				: ((a.width = i), (a.height = h ? h * n : l && t.availableHeight))
		}
		return e
	}
	function QD(s) {
		const t = GD(s),
			e = qn(
				t.filter(c => c.box.fullSize),
				!0
			),
			i = qn(Gn(t, 'left'), !0),
			n = qn(Gn(t, 'right')),
			o = qn(Gn(t, 'top'), !0),
			r = qn(Gn(t, 'bottom')),
			a = R_(t, 'x'),
			l = R_(t, 'y')
		return {
			fullSize: e,
			leftAndTop: i.concat(o),
			rightAndBottom: n.concat(l).concat(r).concat(a),
			chartArea: Gn(t, 'chartArea'),
			vertical: i.concat(n).concat(l),
			horizontal: o.concat(r).concat(a),
		}
	}
	function P_(s, t, e, i) {
		return Math.max(s[e], t[e]) + Math.max(s[i], t[i])
	}
	function N_(s, t) {
		;(s.top = Math.max(s.top, t.top)),
			(s.left = Math.max(s.left, t.left)),
			(s.bottom = Math.max(s.bottom, t.bottom)),
			(s.right = Math.max(s.right, t.right))
	}
	function JD(s, t, e, i) {
		const { pos: n, box: o } = e,
			r = s.maxPadding
		if (!V(n)) {
			e.size && (s[n] -= e.size)
			const d = i[e.stack] || { size: 0, count: 1 }
			;(d.size = Math.max(d.size, e.horizontal ? o.height : o.width)),
				(e.size = d.size / d.count),
				(s[n] += e.size)
		}
		o.getPadding && N_(r, o.getPadding())
		const a = Math.max(0, t.outerWidth - P_(r, s, 'left', 'right')),
			l = Math.max(0, t.outerHeight - P_(r, s, 'top', 'bottom')),
			c = a !== s.w,
			h = l !== s.h
		return (
			(s.w = a),
			(s.h = l),
			e.horizontal ? { same: c, other: h } : { same: h, other: c }
		)
	}
	function t1(s) {
		const t = s.maxPadding
		function e(i) {
			const n = Math.max(t[i] - s[i], 0)
			return (s[i] += n), n
		}
		;(s.y += e('top')), (s.x += e('left')), e('right'), e('bottom')
	}
	function e1(s, t) {
		const e = t.maxPadding
		function i(n) {
			const o = { left: 0, top: 0, right: 0, bottom: 0 }
			return (
				n.forEach(r => {
					o[r] = Math.max(t[r], e[r])
				}),
				o
			)
		}
		return i(s ? ['left', 'right'] : ['top', 'bottom'])
	}
	function Zn(s, t, e, i) {
		const n = []
		let o, r, a, l, c, h
		for (o = 0, r = s.length, c = 0; o < r; ++o) {
			;(a = s[o]),
				(l = a.box),
				l.update(a.width || t.w, a.height || t.h, e1(a.horizontal, t))
			const { same: d, other: u } = JD(t, e, a, i)
			;(c |= d && n.length), (h = h || u), l.fullSize || n.push(a)
		}
		return (c && Zn(n, t, e, i)) || h
	}
	function na(s, t, e, i, n) {
		;(s.top = e),
			(s.left = t),
			(s.right = t + i),
			(s.bottom = e + n),
			(s.width = i),
			(s.height = n)
	}
	function B_(s, t, e, i) {
		const n = e.padding
		let { x: o, y: r } = t
		for (const a of s) {
			const l = a.box,
				c = i[a.stack] || { count: 1, placed: 0, weight: 1 },
				h = a.stackWeight / c.weight || 1
			if (a.horizontal) {
				const d = t.w * h,
					u = c.size || l.height
				jt(c.start) && (r = c.start),
					l.fullSize
						? na(l, n.left, r, e.outerWidth - n.right - n.left, u)
						: na(l, t.left + c.placed, r, d, u),
					(c.start = r),
					(c.placed += d),
					(r = l.bottom)
			} else {
				const d = t.h * h,
					u = c.size || l.width
				jt(c.start) && (o = c.start),
					l.fullSize
						? na(l, o, n.top, u, e.outerHeight - n.bottom - n.top)
						: na(l, o, t.top + c.placed, u, d),
					(c.start = o),
					(c.placed += d),
					(o = l.right)
			}
		}
		;(t.x = o), (t.y = r)
	}
	F.set('layout', {
		autoPadding: !0,
		padding: { top: 0, right: 0, bottom: 0, left: 0 },
	})
	var ft = {
		addBox(s, t) {
			s.boxes || (s.boxes = []),
				(t.fullSize = t.fullSize || !1),
				(t.position = t.position || 'top'),
				(t.weight = t.weight || 0),
				(t._layers =
					t._layers ||
					function () {
						return [
							{
								z: 0,
								draw(e) {
									t.draw(e)
								},
							},
						]
					}),
				s.boxes.push(t)
		},
		removeBox(s, t) {
			const e = s.boxes ? s.boxes.indexOf(t) : -1
			e !== -1 && s.boxes.splice(e, 1)
		},
		configure(s, t, e) {
			;(t.fullSize = e.fullSize),
				(t.position = e.position),
				(t.weight = e.weight)
		},
		update(s, t, e, i) {
			if (!s) return
			const n = pt(s.options.layout.padding),
				o = Math.max(t - n.width, 0),
				r = Math.max(e - n.height, 0),
				a = QD(s.boxes),
				l = a.vertical,
				c = a.horizontal
			U(s.boxes, b => {
				typeof b.beforeLayout == 'function' && b.beforeLayout()
			})
			const h =
					l.reduce(
						(b, v) =>
							v.box.options && v.box.options.display === !1 ? b : b + 1,
						0
					) || 1,
				d = Object.freeze({
					outerWidth: t,
					outerHeight: e,
					padding: n,
					availableWidth: o,
					availableHeight: r,
					vBoxMaxWidth: o / 2 / h,
					hBoxMaxHeight: r / 2,
				}),
				u = Object.assign({}, n)
			N_(u, pt(i))
			const p = Object.assign(
					{ maxPadding: u, w: o, h: r, x: n.left, y: n.top },
					n
				),
				f = ZD(l.concat(c), d)
			Zn(a.fullSize, p, d, f),
				Zn(l, p, d, f),
				Zn(c, p, d, f) && Zn(l, p, d, f),
				t1(p),
				B_(a.leftAndTop, p, d, f),
				(p.x += p.w),
				(p.y += p.h),
				B_(a.rightAndBottom, p, d, f),
				(s.chartArea = {
					left: p.left,
					top: p.top,
					right: p.left + p.w,
					bottom: p.top + p.h,
					height: p.h,
					width: p.w,
				}),
				U(a.chartArea, b => {
					const v = b.box
					Object.assign(v, s.chartArea),
						v.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 })
				})
		},
	}
	class zc {
		acquireContext(t, e) {}
		releaseContext(t) {
			return !1
		}
		addEventListener(t, e, i) {}
		removeEventListener(t, e, i) {}
		getDevicePixelRatio() {
			return 1
		}
		getMaximumSize(t, e, i, n) {
			return (
				(e = Math.max(0, e || t.width)),
				(i = i || t.height),
				{ width: e, height: Math.max(0, n ? Math.floor(e / n) : i) }
			)
		}
		isAttached(t) {
			return !0
		}
		updateConfig(t) {}
	}
	class H_ extends zc {
		acquireContext(t) {
			return (t && t.getContext && t.getContext('2d')) || null
		}
		updateConfig(t) {
			t.options.animation = !1
		}
	}
	const oa = '$chartjs',
		i1 = {
			touchstart: 'mousedown',
			touchmove: 'mousemove',
			touchend: 'mouseup',
			pointerenter: 'mouseenter',
			pointerdown: 'mousedown',
			pointermove: 'mousemove',
			pointerup: 'mouseup',
			pointerleave: 'mouseout',
			pointerout: 'mouseout',
		},
		V_ = s => s === null || s === ''
	function s1(s, t) {
		const e = s.style,
			i = s.getAttribute('height'),
			n = s.getAttribute('width')
		if (
			((s[oa] = {
				initial: {
					height: i,
					width: n,
					style: { display: e.display, height: e.height, width: e.width },
				},
			}),
			(e.display = e.display || 'block'),
			(e.boxSizing = e.boxSizing || 'border-box'),
			V_(n))
		) {
			const o = s_(s, 'width')
			o !== void 0 && (s.width = o)
		}
		if (V_(i))
			if (s.style.height === '') s.height = s.width / (t || 2)
			else {
				const o = s_(s, 'height')
				o !== void 0 && (s.height = o)
			}
		return s
	}
	const F_ = WI ? { passive: !0 } : !1
	function n1(s, t, e) {
		s.addEventListener(t, e, F_)
	}
	function o1(s, t, e) {
		s.canvas.removeEventListener(t, e, F_)
	}
	function r1(s, t) {
		const e = i1[s.type] || s.type,
			{ x: i, y: n } = Pi(s, t)
		return {
			type: e,
			chart: t,
			native: s,
			x: i !== void 0 ? i : null,
			y: n !== void 0 ? n : null,
		}
	}
	function ra(s, t) {
		for (const e of s) if (e === t || e.contains(t)) return !0
	}
	function a1(s, t, e) {
		const i = s.canvas,
			n = new MutationObserver(o => {
				let r = !1
				for (const a of o)
					(r = r || ra(a.addedNodes, i)), (r = r && !ra(a.removedNodes, i))
				r && e()
			})
		return n.observe(document, { childList: !0, subtree: !0 }), n
	}
	function l1(s, t, e) {
		const i = s.canvas,
			n = new MutationObserver(o => {
				let r = !1
				for (const a of o)
					(r = r || ra(a.removedNodes, i)), (r = r && !ra(a.addedNodes, i))
				r && e()
			})
		return n.observe(document, { childList: !0, subtree: !0 }), n
	}
	const Qn = new Map()
	let W_ = 0
	function z_() {
		const s = window.devicePixelRatio
		s !== W_ &&
			((W_ = s),
			Qn.forEach((t, e) => {
				e.currentDevicePixelRatio !== s && t()
			}))
	}
	function c1(s, t) {
		Qn.size || window.addEventListener('resize', z_), Qn.set(s, t)
	}
	function h1(s) {
		Qn.delete(s), Qn.size || window.removeEventListener('resize', z_)
	}
	function d1(s, t, e) {
		const i = s.canvas,
			n = i && $c(i)
		if (!n) return
		const o = Of((a, l) => {
				const c = n.clientWidth
				e(a, l), c < n.clientWidth && e()
			}, window),
			r = new ResizeObserver(a => {
				const l = a[0],
					c = l.contentRect.width,
					h = l.contentRect.height
				;(c === 0 && h === 0) || o(c, h)
			})
		return r.observe(n), c1(s, o), r
	}
	function jc(s, t, e) {
		e && e.disconnect(), t === 'resize' && h1(s)
	}
	function u1(s, t, e) {
		const i = s.canvas,
			n = Of(
				o => {
					s.ctx !== null && e(r1(o, s))
				},
				s,
				o => {
					const r = o[0]
					return [r, r.offsetX, r.offsetY]
				}
			)
		return n1(i, t, n), n
	}
	class j_ extends zc {
		acquireContext(t, e) {
			const i = t && t.getContext && t.getContext('2d')
			return i && i.canvas === t ? (s1(t, e), i) : null
		}
		releaseContext(t) {
			const e = t.canvas
			if (!e[oa]) return !1
			const i = e[oa].initial
			;['height', 'width'].forEach(o => {
				const r = i[o]
				H(r) ? e.removeAttribute(o) : e.setAttribute(o, r)
			})
			const n = i.style || {}
			return (
				Object.keys(n).forEach(o => {
					e.style[o] = n[o]
				}),
				(e.width = e.width),
				delete e[oa],
				!0
			)
		}
		addEventListener(t, e, i) {
			this.removeEventListener(t, e)
			const n = t.$proxies || (t.$proxies = {}),
				r = { attach: a1, detach: l1, resize: d1 }[e] || u1
			n[e] = r(t, e, i)
		}
		removeEventListener(t, e) {
			const i = t.$proxies || (t.$proxies = {}),
				n = i[e]
			if (!n) return
			;(({ attach: jc, detach: jc, resize: jc })[e] || o1)(t, e, n),
				(i[e] = void 0)
		}
		getDevicePixelRatio() {
			return window.devicePixelRatio
		}
		getMaximumSize(t, e, i, n) {
			return FI(t, e, i, n)
		}
		isAttached(t) {
			const e = $c(t)
			return !!(e && e.isConnected)
		}
	}
	function Y_(s) {
		return !e_() ||
			(typeof OffscreenCanvas < 'u' && s instanceof OffscreenCanvas)
			? H_
			: j_
	}
	class p1 {
		constructor() {
			this._init = []
		}
		notify(t, e, i, n) {
			e === 'beforeInit' &&
				((this._init = this._createDescriptors(t, !0)),
				this._notify(this._init, t, 'install'))
			const o = n ? this._descriptors(t).filter(n) : this._descriptors(t),
				r = this._notify(o, t, e, i)
			return (
				e === 'afterDestroy' &&
					(this._notify(o, t, 'stop'),
					this._notify(this._init, t, 'uninstall')),
				r
			)
		}
		_notify(t, e, i, n) {
			n = n || {}
			for (const o of t) {
				const r = o.plugin,
					a = r[i],
					l = [e, n, o.options]
				if (G(a, l, r) === !1 && n.cancelable) return !1
			}
			return !0
		}
		invalidate() {
			H(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
		}
		_descriptors(t) {
			if (this._cache) return this._cache
			const e = (this._cache = this._createDescriptors(t))
			return this._notifyStateChanges(t), e
		}
		_createDescriptors(t, e) {
			const i = t && t.config,
				n = B(i.options && i.options.plugins, {}),
				o = f1(i)
			return n === !1 && !e ? [] : g1(t, o, n, e)
		}
		_notifyStateChanges(t) {
			const e = this._oldCache || [],
				i = this._cache,
				n = (o, r) => o.filter(a => !r.some(l => a.plugin.id === l.plugin.id))
			this._notify(n(e, i), t, 'stop'), this._notify(n(i, e), t, 'start')
		}
	}
	function f1(s) {
		const t = {},
			e = [],
			i = Object.keys(ne.plugins.items)
		for (let o = 0; o < i.length; o++) e.push(ne.getPlugin(i[o]))
		const n = s.plugins || []
		for (let o = 0; o < n.length; o++) {
			const r = n[o]
			e.indexOf(r) === -1 && (e.push(r), (t[r.id] = !0))
		}
		return { plugins: e, localIds: t }
	}
	function _1(s, t) {
		return !t && s === !1 ? null : s === !0 ? {} : s
	}
	function g1(s, { plugins: t, localIds: e }, i, n) {
		const o = [],
			r = s.getContext()
		for (const a of t) {
			const l = a.id,
				c = _1(i[l], n)
			c !== null &&
				o.push({
					plugin: a,
					options: m1(s.config, { plugin: a, local: e[l] }, c, r),
				})
		}
		return o
	}
	function m1(s, { plugin: t, local: e }, i, n) {
		const o = s.pluginScopeKeys(t),
			r = s.getOptionScopes(i, o)
		return (
			e && t.defaults && r.push(t.defaults),
			s.createResolver(r, n, [''], {
				scriptable: !1,
				indexable: !1,
				allKeys: !0,
			})
		)
	}
	function Yc(s, t) {
		const e = F.datasets[s] || {}
		return (
			((t.datasets || {})[s] || {}).indexAxis ||
			t.indexAxis ||
			e.indexAxis ||
			'x'
		)
	}
	function b1(s, t) {
		let e = s
		return (
			s === '_index_'
				? (e = t)
				: s === '_value_' && (e = t === 'x' ? 'y' : 'x'),
			e
		)
	}
	function v1(s, t) {
		return s === t ? '_index_' : '_value_'
	}
	function y1(s) {
		if (s === 'top' || s === 'bottom') return 'x'
		if (s === 'left' || s === 'right') return 'y'
	}
	function Kc(s, t) {
		return s === 'x' || s === 'y'
			? s
			: t.axis || y1(t.position) || s.charAt(0).toLowerCase()
	}
	function T1(s, t) {
		const e = Di[s.type] || { scales: {} },
			i = t.scales || {},
			n = Yc(s.type, t),
			o = Object.create(null),
			r = Object.create(null)
		return (
			Object.keys(i).forEach(a => {
				const l = i[a]
				if (!V(l))
					return console.error(`Invalid scale configuration for scale: ${a}`)
				if (l._proxy)
					return console.warn(
						`Ignoring resolver passed as options for scale: ${a}`
					)
				const c = Kc(a, l),
					h = v1(c, n),
					d = e.scales || {}
				;(o[c] = o[c] || a),
					(r[a] = Sn(Object.create(null), [{ axis: c }, l, d[c], d[h]]))
			}),
			s.data.datasets.forEach(a => {
				const l = a.type || s.type,
					c = a.indexAxis || Yc(l, t),
					d = (Di[l] || {}).scales || {}
				Object.keys(d).forEach(u => {
					const p = b1(u, c),
						f = a[p + 'AxisID'] || o[p] || p
					;(r[f] = r[f] || Object.create(null)),
						Sn(r[f], [{ axis: p }, i[f], d[u]])
				})
			}),
			Object.keys(r).forEach(a => {
				const l = r[a]
				Sn(l, [F.scales[l.type], F.scale])
			}),
			r
		)
	}
	function K_(s) {
		const t = s.options || (s.options = {})
		;(t.plugins = B(t.plugins, {})), (t.scales = T1(s, t))
	}
	function U_(s) {
		return (
			(s = s || {}),
			(s.datasets = s.datasets || []),
			(s.labels = s.labels || []),
			s
		)
	}
	function E1(s) {
		return (s = s || {}), (s.data = U_(s.data)), K_(s), s
	}
	const X_ = new Map(),
		G_ = new Set()
	function aa(s, t) {
		let e = X_.get(s)
		return e || ((e = t()), X_.set(s, e), G_.add(e)), e
	}
	const Jn = (s, t, e) => {
		const i = ti(t, e)
		i !== void 0 && s.add(i)
	}
	class x1 {
		constructor(t) {
			;(this._config = E1(t)),
				(this._scopeCache = new Map()),
				(this._resolverCache = new Map())
		}
		get platform() {
			return this._config.platform
		}
		get type() {
			return this._config.type
		}
		set type(t) {
			this._config.type = t
		}
		get data() {
			return this._config.data
		}
		set data(t) {
			this._config.data = U_(t)
		}
		get options() {
			return this._config.options
		}
		set options(t) {
			this._config.options = t
		}
		get plugins() {
			return this._config.plugins
		}
		update() {
			const t = this._config
			this.clearCache(), K_(t)
		}
		clearCache() {
			this._scopeCache.clear(), this._resolverCache.clear()
		}
		datasetScopeKeys(t) {
			return aa(t, () => [[`datasets.${t}`, '']])
		}
		datasetAnimationScopeKeys(t, e) {
			return aa(`${t}.transition.${e}`, () => [
				[`datasets.${t}.transitions.${e}`, `transitions.${e}`],
				[`datasets.${t}`, ''],
			])
		}
		datasetElementScopeKeys(t, e) {
			return aa(`${t}-${e}`, () => [
				[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
			])
		}
		pluginScopeKeys(t) {
			const e = t.id,
				i = this.type
			return aa(`${i}-plugin-${e}`, () => [
				[`plugins.${e}`, ...(t.additionalOptionScopes || [])],
			])
		}
		_cachedScopes(t, e) {
			const i = this._scopeCache
			let n = i.get(t)
			return (!n || e) && ((n = new Map()), i.set(t, n)), n
		}
		getOptionScopes(t, e, i) {
			const { options: n, type: o } = this,
				r = this._cachedScopes(t, i),
				a = r.get(e)
			if (a) return a
			const l = new Set()
			e.forEach(h => {
				t && (l.add(t), h.forEach(d => Jn(l, t, d))),
					h.forEach(d => Jn(l, n, d)),
					h.forEach(d => Jn(l, Di[o] || {}, d)),
					h.forEach(d => Jn(l, F, d)),
					h.forEach(d => Jn(l, kc, d))
			})
			const c = Array.from(l)
			return (
				c.length === 0 && c.push(Object.create(null)),
				G_.has(e) && r.set(e, c),
				c
			)
		}
		chartOptionScopes() {
			const { options: t, type: e } = this
			return [t, Di[e] || {}, F.datasets[e] || {}, { type: e }, F, kc]
		}
		resolveNamedOptions(t, e, i, n = ['']) {
			const o = { $shared: !0 },
				{ resolver: r, subPrefixes: a } = q_(this._resolverCache, t, n)
			let l = r
			if (A1(r, e)) {
				;(o.$shared = !1), (i = ei(i) ? i() : i)
				const c = this.createResolver(t, i, a)
				l = ks(r, i, c)
			}
			for (const c of e) o[c] = l[c]
			return o
		}
		createResolver(t, e, i = [''], n) {
			const { resolver: o } = q_(this._resolverCache, t, i)
			return V(e) ? ks(o, e, void 0, n) : o
		}
	}
	function q_(s, t, e) {
		let i = s.get(t)
		i || ((i = new Map()), s.set(t, i))
		const n = e.join()
		let o = i.get(n)
		return (
			o ||
				((o = {
					resolver: Dc(t, e),
					subPrefixes: e.filter(a => !a.toLowerCase().includes('hover')),
				}),
				i.set(n, o)),
			o
		)
	}
	const C1 = s =>
		V(s) && Object.getOwnPropertyNames(s).reduce((t, e) => t || ei(s[e]), !1)
	function A1(s, t) {
		const { isScriptable: e, isIndexable: i } = Uf(s)
		for (const n of t) {
			const o = e(n),
				r = i(n),
				a = (r || o) && s[n]
			if ((o && (ei(a) || C1(a))) || (r && Q(a))) return !0
		}
		return !1
	}
	var w1 = '3.9.1'
	const k1 = ['top', 'bottom', 'left', 'right', 'chartArea']
	function Z_(s, t) {
		return s === 'top' || s === 'bottom' || (k1.indexOf(s) === -1 && t === 'x')
	}
	function Q_(s, t) {
		return function (e, i) {
			return e[s] === i[s] ? e[t] - i[t] : e[s] - i[s]
		}
	}
	function J_(s) {
		const t = s.chart,
			e = t.options.animation
		t.notifyPlugins('afterRender'), G(e && e.onComplete, [s], t)
	}
	function S1(s) {
		const t = s.chart,
			e = t.options.animation
		G(e && e.onProgress, [s], t)
	}
	function tg(s) {
		return (
			e_() && typeof s == 'string'
				? (s = document.getElementById(s))
				: s && s.length && (s = s[0]),
			s && s.canvas && (s = s.canvas),
			s
		)
	}
	const la = {},
		eg = s => {
			const t = tg(s)
			return Object.values(la)
				.filter(e => e.canvas === t)
				.pop()
		}
	function O1(s, t, e) {
		const i = Object.keys(s)
		for (const n of i) {
			const o = +n
			if (o >= t) {
				const r = s[n]
				delete s[n], (e > 0 || o > t) && (s[o + e] = r)
			}
		}
	}
	function I1(s, t, e, i) {
		return !e || s.type === 'mouseout' ? null : i ? t : s
	}
	class Uc {
		constructor(t, e) {
			const i = (this.config = new x1(e)),
				n = tg(t),
				o = eg(n)
			if (o)
				throw new Error(
					"Canvas is already in use. Chart with ID '" +
						o.id +
						"' must be destroyed before the canvas with ID '" +
						o.canvas.id +
						"' can be reused."
				)
			const r = i.createResolver(i.chartOptionScopes(), this.getContext())
			;(this.platform = new (i.platform || Y_(n))()),
				this.platform.updateConfig(i)
			const a = this.platform.acquireContext(n, r.aspectRatio),
				l = a && a.canvas,
				c = l && l.height,
				h = l && l.width
			if (
				((this.id = EO()),
				(this.ctx = a),
				(this.canvas = l),
				(this.width = h),
				(this.height = c),
				(this._options = r),
				(this._aspectRatio = this.aspectRatio),
				(this._layers = []),
				(this._metasets = []),
				(this._stacks = void 0),
				(this.boxes = []),
				(this.currentDevicePixelRatio = void 0),
				(this.chartArea = void 0),
				(this._active = []),
				(this._lastEvent = void 0),
				(this._listeners = {}),
				(this._responsiveListeners = void 0),
				(this._sortedMetasets = []),
				(this.scales = {}),
				(this._plugins = new p1()),
				(this.$proxies = {}),
				(this._hiddenIndices = {}),
				(this.attached = !1),
				(this._animationsDisabled = void 0),
				(this.$context = void 0),
				(this._doResize = BO(d => this.update(d), r.resizeDelay || 0)),
				(this._dataChanges = []),
				(la[this.id] = this),
				!a || !l)
			) {
				console.error(
					"Failed to create chart: can't acquire context from the given item"
				)
				return
			}
			xe.listen(this, 'complete', J_),
				xe.listen(this, 'progress', S1),
				this._initialize(),
				this.attached && this.update()
		}
		get aspectRatio() {
			const {
				options: { aspectRatio: t, maintainAspectRatio: e },
				width: i,
				height: n,
				_aspectRatio: o,
			} = this
			return H(t) ? (e && o ? o : n ? i / n : null) : t
		}
		get data() {
			return this.config.data
		}
		set data(t) {
			this.config.data = t
		}
		get options() {
			return this._options
		}
		set options(t) {
			this.config.options = t
		}
		_initialize() {
			return (
				this.notifyPlugins('beforeInit'),
				this.options.responsive
					? this.resize()
					: i_(this, this.options.devicePixelRatio),
				this.bindEvents(),
				this.notifyPlugins('afterInit'),
				this
			)
		}
		clear() {
			return jf(this.canvas, this.ctx), this
		}
		stop() {
			return xe.stop(this), this
		}
		resize(t, e) {
			xe.running(this)
				? (this._resizeBeforeDraw = { width: t, height: e })
				: this._resize(t, e)
		}
		_resize(t, e) {
			const i = this.options,
				n = this.canvas,
				o = i.maintainAspectRatio && this.aspectRatio,
				r = this.platform.getMaximumSize(n, t, e, o),
				a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
				l = this.width ? 'resize' : 'attach'
			;(this.width = r.width),
				(this.height = r.height),
				(this._aspectRatio = this.aspectRatio),
				i_(this, a, !0) &&
					(this.notifyPlugins('resize', { size: r }),
					G(i.onResize, [this, r], this),
					this.attached && this._doResize(l) && this.render())
		}
		ensureScalesHaveIDs() {
			const e = this.options.scales || {}
			U(e, (i, n) => {
				i.id = n
			})
		}
		buildOrUpdateScales() {
			const t = this.options,
				e = t.scales,
				i = this.scales,
				n = Object.keys(i).reduce((r, a) => ((r[a] = !1), r), {})
			let o = []
			e &&
				(o = o.concat(
					Object.keys(e).map(r => {
						const a = e[r],
							l = Kc(r, a),
							c = l === 'r',
							h = l === 'x'
						return {
							options: a,
							dposition: c ? 'chartArea' : h ? 'bottom' : 'left',
							dtype: c ? 'radialLinear' : h ? 'category' : 'linear',
						}
					})
				)),
				U(o, r => {
					const a = r.options,
						l = a.id,
						c = Kc(l, a),
						h = B(a.type, r.dtype)
					;(a.position === void 0 || Z_(a.position, c) !== Z_(r.dposition)) &&
						(a.position = r.dposition),
						(n[l] = !0)
					let d = null
					if (l in i && i[l].type === h) d = i[l]
					else {
						const u = ne.getScale(h)
						;(d = new u({ id: l, type: h, ctx: this.ctx, chart: this })),
							(i[d.id] = d)
					}
					d.init(a, t)
				}),
				U(n, (r, a) => {
					r || delete i[a]
				}),
				U(i, r => {
					ft.configure(this, r, r.options), ft.addBox(this, r)
				})
		}
		_updateMetasets() {
			const t = this._metasets,
				e = this.data.datasets.length,
				i = t.length
			if ((t.sort((n, o) => n.index - o.index), i > e)) {
				for (let n = e; n < i; ++n) this._destroyDatasetMeta(n)
				t.splice(e, i - e)
			}
			this._sortedMetasets = t.slice(0).sort(Q_('order', 'index'))
		}
		_removeUnreferencedMetasets() {
			const {
				_metasets: t,
				data: { datasets: e },
			} = this
			t.length > e.length && delete this._stacks,
				t.forEach((i, n) => {
					e.filter(o => o === i._dataset).length === 0 &&
						this._destroyDatasetMeta(n)
				})
		}
		buildOrUpdateControllers() {
			const t = [],
				e = this.data.datasets
			let i, n
			for (
				this._removeUnreferencedMetasets(), i = 0, n = e.length;
				i < n;
				i++
			) {
				const o = e[i]
				let r = this.getDatasetMeta(i)
				const a = o.type || this.config.type
				if (
					(r.type &&
						r.type !== a &&
						(this._destroyDatasetMeta(i), (r = this.getDatasetMeta(i))),
					(r.type = a),
					(r.indexAxis = o.indexAxis || Yc(a, this.options)),
					(r.order = o.order || 0),
					(r.index = i),
					(r.label = '' + o.label),
					(r.visible = this.isDatasetVisible(i)),
					r.controller)
				)
					r.controller.updateIndex(i), r.controller.linkScales()
				else {
					const l = ne.getController(a),
						{ datasetElementType: c, dataElementType: h } = F.datasets[a]
					Object.assign(l.prototype, {
						dataElementType: ne.getElement(h),
						datasetElementType: c && ne.getElement(c),
					}),
						(r.controller = new l(this, i)),
						t.push(r.controller)
				}
			}
			return this._updateMetasets(), t
		}
		_resetElements() {
			U(
				this.data.datasets,
				(t, e) => {
					this.getDatasetMeta(e).controller.reset()
				},
				this
			)
		}
		reset() {
			this._resetElements(), this.notifyPlugins('reset')
		}
		update(t) {
			const e = this.config
			e.update()
			const i = (this._options = e.createResolver(
					e.chartOptionScopes(),
					this.getContext()
				)),
				n = (this._animationsDisabled = !i.animation)
			if (
				(this._updateScales(),
				this._checkEventBindings(),
				this._updateHiddenIndices(),
				this._plugins.invalidate(),
				this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
			)
				return
			const o = this.buildOrUpdateControllers()
			this.notifyPlugins('beforeElementsUpdate')
			let r = 0
			for (let c = 0, h = this.data.datasets.length; c < h; c++) {
				const { controller: d } = this.getDatasetMeta(c),
					u = !n && o.indexOf(d) === -1
				d.buildOrUpdateElements(u), (r = Math.max(+d.getMaxOverflow(), r))
			}
			;(r = this._minPadding = i.layout.autoPadding ? r : 0),
				this._updateLayout(r),
				n ||
					U(o, c => {
						c.reset()
					}),
				this._updateDatasets(t),
				this.notifyPlugins('afterUpdate', { mode: t }),
				this._layers.sort(Q_('z', '_idx'))
			const { _active: a, _lastEvent: l } = this
			l
				? this._eventHandler(l, !0)
				: a.length && this._updateHoverStyles(a, a, !0),
				this.render()
		}
		_updateScales() {
			U(this.scales, t => {
				ft.removeBox(this, t)
			}),
				this.ensureScalesHaveIDs(),
				this.buildOrUpdateScales()
		}
		_checkEventBindings() {
			const t = this.options,
				e = new Set(Object.keys(this._listeners)),
				i = new Set(t.events)
			;(!vf(e, i) || !!this._responsiveListeners !== t.responsive) &&
				(this.unbindEvents(), this.bindEvents())
		}
		_updateHiddenIndices() {
			const { _hiddenIndices: t } = this,
				e = this._getUniformDataChanges() || []
			for (const { method: i, start: n, count: o } of e) {
				const r = i === '_removeElements' ? -o : o
				O1(t, n, r)
			}
		}
		_getUniformDataChanges() {
			const t = this._dataChanges
			if (!t || !t.length) return
			this._dataChanges = []
			const e = this.data.datasets.length,
				i = o =>
					new Set(
						t
							.filter(r => r[0] === o)
							.map((r, a) => a + ',' + r.splice(1).join(','))
					),
				n = i(0)
			for (let o = 1; o < e; o++) if (!vf(n, i(o))) return
			return Array.from(n)
				.map(o => o.split(','))
				.map(o => ({ method: o[1], start: +o[2], count: +o[3] }))
		}
		_updateLayout(t) {
			if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return
			ft.update(this, this.width, this.height, t)
			const e = this.chartArea,
				i = e.width <= 0 || e.height <= 0
			;(this._layers = []),
				U(
					this.boxes,
					n => {
						;(i && n.position === 'chartArea') ||
							(n.configure && n.configure(), this._layers.push(...n._layers()))
					},
					this
				),
				this._layers.forEach((n, o) => {
					n._idx = o
				}),
				this.notifyPlugins('afterLayout')
		}
		_updateDatasets(t) {
			if (
				this.notifyPlugins('beforeDatasetsUpdate', {
					mode: t,
					cancelable: !0,
				}) !== !1
			) {
				for (let e = 0, i = this.data.datasets.length; e < i; ++e)
					this.getDatasetMeta(e).controller.configure()
				for (let e = 0, i = this.data.datasets.length; e < i; ++e)
					this._updateDataset(e, ei(t) ? t({ datasetIndex: e }) : t)
				this.notifyPlugins('afterDatasetsUpdate', { mode: t })
			}
		}
		_updateDataset(t, e) {
			const i = this.getDatasetMeta(t),
				n = { meta: i, index: t, mode: e, cancelable: !0 }
			this.notifyPlugins('beforeDatasetUpdate', n) !== !1 &&
				(i.controller._update(e),
				(n.cancelable = !1),
				this.notifyPlugins('afterDatasetUpdate', n))
		}
		render() {
			this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
				(xe.has(this)
					? this.attached && !xe.running(this) && xe.start(this)
					: (this.draw(), J_({ chart: this })))
		}
		draw() {
			let t
			if (this._resizeBeforeDraw) {
				const { width: i, height: n } = this._resizeBeforeDraw
				this._resize(i, n), (this._resizeBeforeDraw = null)
			}
			if (
				(this.clear(),
				this.width <= 0 ||
					this.height <= 0 ||
					this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
			)
				return
			const e = this._layers
			for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea)
			for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea)
			this.notifyPlugins('afterDraw')
		}
		_getSortedDatasetMetas(t) {
			const e = this._sortedMetasets,
				i = []
			let n, o
			for (n = 0, o = e.length; n < o; ++n) {
				const r = e[n]
				;(!t || r.visible) && i.push(r)
			}
			return i
		}
		getSortedVisibleDatasetMetas() {
			return this._getSortedDatasetMetas(!0)
		}
		_drawDatasets() {
			if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1)
				return
			const t = this.getSortedVisibleDatasetMetas()
			for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e])
			this.notifyPlugins('afterDatasetsDraw')
		}
		_drawDataset(t) {
			const e = this.ctx,
				i = t._clip,
				n = !i.disabled,
				o = this.chartArea,
				r = { meta: t, index: t.index, cancelable: !0 }
			this.notifyPlugins('beforeDatasetDraw', r) !== !1 &&
				(n &&
					qr(e, {
						left: i.left === !1 ? 0 : o.left - i.left,
						right: i.right === !1 ? this.width : o.right + i.right,
						top: i.top === !1 ? 0 : o.top - i.top,
						bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom,
					}),
				t.controller.draw(),
				n && Zr(e),
				(r.cancelable = !1),
				this.notifyPlugins('afterDatasetDraw', r))
		}
		isPointInArea(t) {
			return Pn(t, this.chartArea, this._minPadding)
		}
		getElementsAtEventForMode(t, e, i, n) {
			const o = L_.modes[e]
			return typeof o == 'function' ? o(this, t, i, n) : []
		}
		getDatasetMeta(t) {
			const e = this.data.datasets[t],
				i = this._metasets
			let n = i.filter(o => o && o._dataset === e).pop()
			return (
				n ||
					((n = {
						type: null,
						data: [],
						dataset: null,
						controller: null,
						hidden: null,
						xAxisID: null,
						yAxisID: null,
						order: (e && e.order) || 0,
						index: t,
						_dataset: e,
						_parsed: [],
						_sorted: !1,
					}),
					i.push(n)),
				n
			)
		}
		getContext() {
			return (
				this.$context ||
				(this.$context = ni(null, { chart: this, type: 'chart' }))
			)
		}
		getVisibleDatasetCount() {
			return this.getSortedVisibleDatasetMetas().length
		}
		isDatasetVisible(t) {
			const e = this.data.datasets[t]
			if (!e) return !1
			const i = this.getDatasetMeta(t)
			return typeof i.hidden == 'boolean' ? !i.hidden : !e.hidden
		}
		setDatasetVisibility(t, e) {
			const i = this.getDatasetMeta(t)
			i.hidden = !e
		}
		toggleDataVisibility(t) {
			this._hiddenIndices[t] = !this._hiddenIndices[t]
		}
		getDataVisibility(t) {
			return !this._hiddenIndices[t]
		}
		_updateVisibility(t, e, i) {
			const n = i ? 'show' : 'hide',
				o = this.getDatasetMeta(t),
				r = o.controller._resolveAnimations(void 0, n)
			jt(e)
				? ((o.data[e].hidden = !i), this.update())
				: (this.setDatasetVisibility(t, i),
				  r.update(o, { visible: i }),
				  this.update(a => (a.datasetIndex === t ? n : void 0)))
		}
		hide(t, e) {
			this._updateVisibility(t, e, !1)
		}
		show(t, e) {
			this._updateVisibility(t, e, !0)
		}
		_destroyDatasetMeta(t) {
			const e = this._metasets[t]
			e && e.controller && e.controller._destroy(), delete this._metasets[t]
		}
		_stop() {
			let t, e
			for (
				this.stop(), xe.remove(this), t = 0, e = this.data.datasets.length;
				t < e;
				++t
			)
				this._destroyDatasetMeta(t)
		}
		destroy() {
			this.notifyPlugins('beforeDestroy')
			const { canvas: t, ctx: e } = this
			this._stop(),
				this.config.clearCache(),
				t &&
					(this.unbindEvents(),
					jf(t, e),
					this.platform.releaseContext(e),
					(this.canvas = null),
					(this.ctx = null)),
				this.notifyPlugins('destroy'),
				delete la[this.id],
				this.notifyPlugins('afterDestroy')
		}
		toBase64Image(...t) {
			return this.canvas.toDataURL(...t)
		}
		bindEvents() {
			this.bindUserEvents(),
				this.options.responsive
					? this.bindResponsiveEvents()
					: (this.attached = !0)
		}
		bindUserEvents() {
			const t = this._listeners,
				e = this.platform,
				i = (o, r) => {
					e.addEventListener(this, o, r), (t[o] = r)
				},
				n = (o, r, a) => {
					;(o.offsetX = r), (o.offsetY = a), this._eventHandler(o)
				}
			U(this.options.events, o => i(o, n))
		}
		bindResponsiveEvents() {
			this._responsiveListeners || (this._responsiveListeners = {})
			const t = this._responsiveListeners,
				e = this.platform,
				i = (l, c) => {
					e.addEventListener(this, l, c), (t[l] = c)
				},
				n = (l, c) => {
					t[l] && (e.removeEventListener(this, l, c), delete t[l])
				},
				o = (l, c) => {
					this.canvas && this.resize(l, c)
				}
			let r
			const a = () => {
				n('attach', a),
					(this.attached = !0),
					this.resize(),
					i('resize', o),
					i('detach', r)
			}
			;(r = () => {
				;(this.attached = !1),
					n('resize', o),
					this._stop(),
					this._resize(0, 0),
					i('attach', a)
			}),
				e.isAttached(this.canvas) ? a() : r()
		}
		unbindEvents() {
			U(this._listeners, (t, e) => {
				this.platform.removeEventListener(this, e, t)
			}),
				(this._listeners = {}),
				U(this._responsiveListeners, (t, e) => {
					this.platform.removeEventListener(this, e, t)
				}),
				(this._responsiveListeners = void 0)
		}
		updateHoverStyle(t, e, i) {
			const n = i ? 'set' : 'remove'
			let o, r, a, l
			for (
				e === 'dataset' &&
					((o = this.getDatasetMeta(t[0].datasetIndex)),
					o.controller['_' + n + 'DatasetHoverStyle']()),
					a = 0,
					l = t.length;
				a < l;
				++a
			) {
				r = t[a]
				const c = r && this.getDatasetMeta(r.datasetIndex).controller
				c && c[n + 'HoverStyle'](r.element, r.datasetIndex, r.index)
			}
		}
		getActiveElements() {
			return this._active || []
		}
		setActiveElements(t) {
			const e = this._active || [],
				i = t.map(({ datasetIndex: o, index: r }) => {
					const a = this.getDatasetMeta(o)
					if (!a) throw new Error('No dataset found at index ' + o)
					return { datasetIndex: o, element: a.data[r], index: r }
				})
			!Fr(i, e) &&
				((this._active = i),
				(this._lastEvent = null),
				this._updateHoverStyles(i, e))
		}
		notifyPlugins(t, e, i) {
			return this._plugins.notify(this, t, e, i)
		}
		_updateHoverStyles(t, e, i) {
			const n = this.options.hover,
				o = (l, c) =>
					l.filter(
						h =>
							!c.some(
								d => h.datasetIndex === d.datasetIndex && h.index === d.index
							)
					),
				r = o(e, t),
				a = i ? t : o(t, e)
			r.length && this.updateHoverStyle(r, n.mode, !1),
				a.length && n.mode && this.updateHoverStyle(a, n.mode, !0)
		}
		_eventHandler(t, e) {
			const i = {
					event: t,
					replay: e,
					cancelable: !0,
					inChartArea: this.isPointInArea(t),
				},
				n = r =>
					(r.options.events || this.options.events).includes(t.native.type)
			if (this.notifyPlugins('beforeEvent', i, n) === !1) return
			const o = this._handleEvent(t, e, i.inChartArea)
			return (
				(i.cancelable = !1),
				this.notifyPlugins('afterEvent', i, n),
				(o || i.changed) && this.render(),
				this
			)
		}
		_handleEvent(t, e, i) {
			const { _active: n = [], options: o } = this,
				r = e,
				a = this._getActiveElements(t, n, i, r),
				l = SO(t),
				c = I1(t, this._lastEvent, i, l)
			i &&
				((this._lastEvent = null),
				G(o.onHover, [t, a, this], this),
				l && G(o.onClick, [t, a, this], this))
			const h = !Fr(a, n)
			return (
				(h || e) && ((this._active = a), this._updateHoverStyles(a, n, e)),
				(this._lastEvent = c),
				h
			)
		}
		_getActiveElements(t, e, i, n) {
			if (t.type === 'mouseout') return []
			if (!i) return e
			const o = this.options.hover
			return this.getElementsAtEventForMode(t, o.mode, o, n)
		}
	}
	const ig = () => U(Uc.instances, s => s._plugins.invalidate()),
		ri = !0
	Object.defineProperties(Uc, {
		defaults: { enumerable: ri, value: F },
		instances: { enumerable: ri, value: la },
		overrides: { enumerable: ri, value: Di },
		registry: { enumerable: ri, value: ne },
		version: { enumerable: ri, value: w1 },
		getChart: { enumerable: ri, value: eg },
		register: {
			enumerable: ri,
			value: (...s) => {
				ne.add(...s), ig()
			},
		},
		unregister: {
			enumerable: ri,
			value: (...s) => {
				ne.remove(...s), ig()
			},
		},
	})
	function sg(s, t, e) {
		const {
			startAngle: i,
			pixelMargin: n,
			x: o,
			y: r,
			outerRadius: a,
			innerRadius: l,
		} = t
		let c = n / a
		s.beginPath(),
			s.arc(o, r, a, i - c, e + c),
			l > n
				? ((c = n / l), s.arc(o, r, l, e + c, i - c, !0))
				: s.arc(o, r, n, e + nt, i - nt),
			s.closePath(),
			s.clip()
	}
	function D1(s) {
		return Ic(s, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd'])
	}
	function M1(s, t, e, i) {
		const n = D1(s.options.borderRadius),
			o = (e - t) / 2,
			r = Math.min(o, (i * t) / 2),
			a = l => {
				const c = ((e - Math.min(o, l)) * i) / 2
				return dt(l, 0, Math.min(o, c))
			}
		return {
			outerStart: a(n.outerStart),
			outerEnd: a(n.outerEnd),
			innerStart: dt(n.innerStart, 0, r),
			innerEnd: dt(n.innerEnd, 0, r),
		}
	}
	function Is(s, t, e, i) {
		return { x: e + s * Math.cos(t), y: i + s * Math.sin(t) }
	}
	function Xc(s, t, e, i, n, o) {
		const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t,
			d = Math.max(t.outerRadius + i + e - c, 0),
			u = h > 0 ? h + i + e + c : 0
		let p = 0
		const f = n - l
		if (i) {
			const R = h > 0 ? h - i : 0,
				z = d > 0 ? d - i : 0,
				Y = (R + z) / 2,
				Gt = Y !== 0 ? (f * Y) / (Y + i) : f
			p = (f - Gt) / 2
		}
		const b = Math.max(0.001, f * d - e / it) / d,
			v = (f - b) / 2,
			y = l + v + p,
			T = n - v - p,
			{
				outerStart: x,
				outerEnd: E,
				innerStart: C,
				innerEnd: A,
			} = M1(t, u, d, T - y),
			w = d - x,
			S = d - E,
			k = y + x / w,
			D = T - E / S,
			I = u + C,
			M = u + A,
			P = y + C / I,
			X = T - A / M
		if ((s.beginPath(), o)) {
			if ((s.arc(r, a, d, k, D), E > 0)) {
				const Y = Is(S, D, r, a)
				s.arc(Y.x, Y.y, E, D, T + nt)
			}
			const R = Is(M, T, r, a)
			if ((s.lineTo(R.x, R.y), A > 0)) {
				const Y = Is(M, X, r, a)
				s.arc(Y.x, Y.y, A, T + nt, X + Math.PI)
			}
			if ((s.arc(r, a, u, T - A / u, y + C / u, !0), C > 0)) {
				const Y = Is(I, P, r, a)
				s.arc(Y.x, Y.y, C, P + Math.PI, y - nt)
			}
			const z = Is(w, y, r, a)
			if ((s.lineTo(z.x, z.y), x > 0)) {
				const Y = Is(w, k, r, a)
				s.arc(Y.x, Y.y, x, y - nt, k)
			}
		} else {
			s.moveTo(r, a)
			const R = Math.cos(k) * d + r,
				z = Math.sin(k) * d + a
			s.lineTo(R, z)
			const Y = Math.cos(D) * d + r,
				Gt = Math.sin(D) * d + a
			s.lineTo(Y, Gt)
		}
		s.closePath()
	}
	function L1(s, t, e, i, n) {
		const { fullCircles: o, startAngle: r, circumference: a } = t
		let l = t.endAngle
		if (o) {
			Xc(s, t, e, i, r + q, n)
			for (let c = 0; c < o; ++c) s.fill()
			isNaN(a) || ((l = r + (a % q)), a % q === 0 && (l += q))
		}
		return Xc(s, t, e, i, l, n), s.fill(), l
	}
	function $1(s, t, e) {
		const { x: i, y: n, startAngle: o, pixelMargin: r, fullCircles: a } = t,
			l = Math.max(t.outerRadius - r, 0),
			c = t.innerRadius + r
		let h
		for (
			e && sg(s, t, o + q), s.beginPath(), s.arc(i, n, c, o + q, o, !0), h = 0;
			h < a;
			++h
		)
			s.stroke()
		for (s.beginPath(), s.arc(i, n, l, o, o + q), h = 0; h < a; ++h) s.stroke()
	}
	function R1(s, t, e, i, n, o) {
		const { options: r } = t,
			{ borderWidth: a, borderJoinStyle: l } = r,
			c = r.borderAlign === 'inner'
		a &&
			(c
				? ((s.lineWidth = a * 2), (s.lineJoin = l || 'round'))
				: ((s.lineWidth = a), (s.lineJoin = l || 'bevel')),
			t.fullCircles && $1(s, t, c),
			c && sg(s, t, n),
			Xc(s, t, e, i, n, o),
			s.stroke())
	}
	class Ds extends Xt {
		constructor(t) {
			super(),
				(this.options = void 0),
				(this.circumference = void 0),
				(this.startAngle = void 0),
				(this.endAngle = void 0),
				(this.innerRadius = void 0),
				(this.outerRadius = void 0),
				(this.pixelMargin = 0),
				(this.fullCircles = 0),
				t && Object.assign(this, t)
		}
		inRange(t, e, i) {
			const n = this.getProps(['x', 'y'], i),
				{ angle: o, distance: r } = Cf(n, { x: t, y: e }),
				{
					startAngle: a,
					endAngle: l,
					innerRadius: c,
					outerRadius: h,
					circumference: d,
				} = this.getProps(
					[
						'startAngle',
						'endAngle',
						'innerRadius',
						'outerRadius',
						'circumference',
					],
					i
				),
				u = this.options.spacing / 2,
				f = B(d, l - a) >= q || Dn(o, a, l),
				b = Ie(r, c + u, h + u)
			return f && b
		}
		getCenterPoint(t) {
			const {
					x: e,
					y: i,
					startAngle: n,
					endAngle: o,
					innerRadius: r,
					outerRadius: a,
				} = this.getProps(
					[
						'x',
						'y',
						'startAngle',
						'endAngle',
						'innerRadius',
						'outerRadius',
						'circumference',
					],
					t
				),
				{ offset: l, spacing: c } = this.options,
				h = (n + o) / 2,
				d = (r + a + c + l) / 2
			return { x: e + Math.cos(h) * d, y: i + Math.sin(h) * d }
		}
		tooltipPosition(t) {
			return this.getCenterPoint(t)
		}
		draw(t) {
			const { options: e, circumference: i } = this,
				n = (e.offset || 0) / 2,
				o = (e.spacing || 0) / 2,
				r = e.circular
			if (
				((this.pixelMargin = e.borderAlign === 'inner' ? 0.33 : 0),
				(this.fullCircles = i > q ? Math.floor(i / q) : 0),
				i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
			)
				return
			t.save()
			let a = 0
			if (n) {
				a = n / 2
				const c = (this.startAngle + this.endAngle) / 2
				t.translate(Math.cos(c) * a, Math.sin(c) * a),
					this.circumference >= it && (a = n)
			}
			;(t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor)
			const l = L1(t, this, a, o, r)
			R1(t, this, a, o, l, r), t.restore()
		}
	}
	;(Ds.id = 'arc'),
		(Ds.defaults = {
			borderAlign: 'center',
			borderColor: '#fff',
			borderJoinStyle: void 0,
			borderRadius: 0,
			borderWidth: 2,
			offset: 0,
			spacing: 0,
			angle: void 0,
			circular: !0,
		}),
		(Ds.defaultRoutes = { backgroundColor: 'backgroundColor' })
	function ng(s, t, e = t) {
		;(s.lineCap = B(e.borderCapStyle, t.borderCapStyle)),
			s.setLineDash(B(e.borderDash, t.borderDash)),
			(s.lineDashOffset = B(e.borderDashOffset, t.borderDashOffset)),
			(s.lineJoin = B(e.borderJoinStyle, t.borderJoinStyle)),
			(s.lineWidth = B(e.borderWidth, t.borderWidth)),
			(s.strokeStyle = B(e.borderColor, t.borderColor))
	}
	function P1(s, t, e) {
		s.lineTo(e.x, e.y)
	}
	function N1(s) {
		return s.stepped
			? dI
			: s.tension || s.cubicInterpolationMode === 'monotone'
			? uI
			: P1
	}
	function og(s, t, e = {}) {
		const i = s.length,
			{ start: n = 0, end: o = i - 1 } = e,
			{ start: r, end: a } = t,
			l = Math.max(n, r),
			c = Math.min(o, a),
			h = (n < r && o < r) || (n > a && o > a)
		return {
			count: i,
			start: l,
			loop: t.loop,
			ilen: c < l && !h ? i + c - l : c - l,
		}
	}
	function B1(s, t, e, i) {
		const { points: n, options: o } = t,
			{ count: r, start: a, loop: l, ilen: c } = og(n, e, i),
			h = N1(o)
		let { move: d = !0, reverse: u } = i || {},
			p,
			f,
			b
		for (p = 0; p <= c; ++p)
			(f = n[(a + (u ? c - p : p)) % r]),
				!f.skip &&
					(d ? (s.moveTo(f.x, f.y), (d = !1)) : h(s, b, f, u, o.stepped),
					(b = f))
		return l && ((f = n[(a + (u ? c : 0)) % r]), h(s, b, f, u, o.stepped)), !!l
	}
	function H1(s, t, e, i) {
		const n = t.points,
			{ count: o, start: r, ilen: a } = og(n, e, i),
			{ move: l = !0, reverse: c } = i || {}
		let h = 0,
			d = 0,
			u,
			p,
			f,
			b,
			v,
			y
		const T = E => (r + (c ? a - E : E)) % o,
			x = () => {
				b !== v && (s.lineTo(h, v), s.lineTo(h, b), s.lineTo(h, y))
			}
		for (l && ((p = n[T(0)]), s.moveTo(p.x, p.y)), u = 0; u <= a; ++u) {
			if (((p = n[T(u)]), p.skip)) continue
			const E = p.x,
				C = p.y,
				A = E | 0
			A === f
				? (C < b ? (b = C) : C > v && (v = C), (h = (d * h + E) / ++d))
				: (x(), s.lineTo(E, C), (f = A), (d = 0), (b = v = C)),
				(y = C)
		}
		x()
	}
	function Gc(s) {
		const t = s.options,
			e = t.borderDash && t.borderDash.length
		return !s._decimated &&
			!s._loop &&
			!t.tension &&
			t.cubicInterpolationMode !== 'monotone' &&
			!t.stepped &&
			!e
			? H1
			: B1
	}
	function V1(s) {
		return s.stepped
			? zI
			: s.tension || s.cubicInterpolationMode === 'monotone'
			? jI
			: Ni
	}
	function F1(s, t, e, i) {
		let n = t._path
		n || ((n = t._path = new Path2D()), t.path(n, e, i) && n.closePath()),
			ng(s, t.options),
			s.stroke(n)
	}
	function W1(s, t, e, i) {
		const { segments: n, options: o } = t,
			r = Gc(t)
		for (const a of n)
			ng(s, o, a.style),
				s.beginPath(),
				r(s, t, a, { start: e, end: e + i - 1 }) && s.closePath(),
				s.stroke()
	}
	const z1 = typeof Path2D == 'function'
	function j1(s, t, e, i) {
		z1 && !t.options.segment ? F1(s, t, e, i) : W1(s, t, e, i)
	}
	class Le extends Xt {
		constructor(t) {
			super(),
				(this.animated = !0),
				(this.options = void 0),
				(this._chart = void 0),
				(this._loop = void 0),
				(this._fullLoop = void 0),
				(this._path = void 0),
				(this._points = void 0),
				(this._segments = void 0),
				(this._decimated = !1),
				(this._pointsUpdated = !1),
				(this._datasetIndex = void 0),
				t && Object.assign(this, t)
		}
		updateControlPoints(t, e) {
			const i = this.options
			if (
				(i.tension || i.cubicInterpolationMode === 'monotone') &&
				!i.stepped &&
				!this._pointsUpdated
			) {
				const n = i.spanGaps ? this._loop : this._fullLoop
				RI(this._points, i, t, n, e), (this._pointsUpdated = !0)
			}
		}
		set points(t) {
			;(this._points = t),
				delete this._segments,
				delete this._path,
				(this._pointsUpdated = !1)
		}
		get points() {
			return this._points
		}
		get segments() {
			return this._segments || (this._segments = ZI(this, this.options.segment))
		}
		first() {
			const t = this.segments,
				e = this.points
			return t.length && e[t[0].start]
		}
		last() {
			const t = this.segments,
				e = this.points,
				i = t.length
			return i && e[t[i - 1].end]
		}
		interpolate(t, e) {
			const i = this.options,
				n = t[e],
				o = this.points,
				r = h_(this, { property: e, start: n, end: n })
			if (!r.length) return
			const a = [],
				l = V1(i)
			let c, h
			for (c = 0, h = r.length; c < h; ++c) {
				const { start: d, end: u } = r[c],
					p = o[d],
					f = o[u]
				if (p === f) {
					a.push(p)
					continue
				}
				const b = Math.abs((n - p[e]) / (f[e] - p[e])),
					v = l(p, f, b, i.stepped)
				;(v[e] = t[e]), a.push(v)
			}
			return a.length === 1 ? a[0] : a
		}
		pathSegment(t, e, i) {
			return Gc(this)(t, this, e, i)
		}
		path(t, e, i) {
			const n = this.segments,
				o = Gc(this)
			let r = this._loop
			;(e = e || 0), (i = i || this.points.length - e)
			for (const a of n) r &= o(t, this, a, { start: e, end: e + i - 1 })
			return !!r
		}
		draw(t, e, i, n) {
			const o = this.options || {}
			;(this.points || []).length &&
				o.borderWidth &&
				(t.save(), j1(t, this, i, n), t.restore()),
				this.animated && ((this._pointsUpdated = !1), (this._path = void 0))
		}
	}
	;(Le.id = 'line'),
		(Le.defaults = {
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0,
			borderJoinStyle: 'miter',
			borderWidth: 3,
			capBezierPoints: !0,
			cubicInterpolationMode: 'default',
			fill: !1,
			spanGaps: !1,
			stepped: !1,
			tension: 0,
		}),
		(Le.defaultRoutes = {
			backgroundColor: 'backgroundColor',
			borderColor: 'borderColor',
		}),
		(Le.descriptors = {
			_scriptable: !0,
			_indexable: s => s !== 'borderDash' && s !== 'fill',
		})
	function rg(s, t, e, i) {
		const n = s.options,
			{ [e]: o } = s.getProps([e], i)
		return Math.abs(t - o) < n.radius + n.hitRadius
	}
	class Ms extends Xt {
		constructor(t) {
			super(),
				(this.options = void 0),
				(this.parsed = void 0),
				(this.skip = void 0),
				(this.stop = void 0),
				t && Object.assign(this, t)
		}
		inRange(t, e, i) {
			const n = this.options,
				{ x: o, y: r } = this.getProps(['x', 'y'], i)
			return (
				Math.pow(t - o, 2) + Math.pow(e - r, 2) <
				Math.pow(n.hitRadius + n.radius, 2)
			)
		}
		inXRange(t, e) {
			return rg(this, t, 'x', e)
		}
		inYRange(t, e) {
			return rg(this, t, 'y', e)
		}
		getCenterPoint(t) {
			const { x: e, y: i } = this.getProps(['x', 'y'], t)
			return { x: e, y: i }
		}
		size(t) {
			t = t || this.options || {}
			let e = t.radius || 0
			e = Math.max(e, (e && t.hoverRadius) || 0)
			const i = (e && t.borderWidth) || 0
			return (e + i) * 2
		}
		draw(t, e) {
			const i = this.options
			this.skip ||
				i.radius < 0.1 ||
				!Pn(this, e, this.size(i) / 2) ||
				((t.strokeStyle = i.borderColor),
				(t.lineWidth = i.borderWidth),
				(t.fillStyle = i.backgroundColor),
				Oc(t, i, this.x, this.y))
		}
		getRange() {
			const t = this.options || {}
			return t.radius + t.hitRadius
		}
	}
	;(Ms.id = 'point'),
		(Ms.defaults = {
			borderWidth: 1,
			hitRadius: 1,
			hoverBorderWidth: 1,
			hoverRadius: 4,
			pointStyle: 'circle',
			radius: 3,
			rotation: 0,
		}),
		(Ms.defaultRoutes = {
			backgroundColor: 'backgroundColor',
			borderColor: 'borderColor',
		})
	function ag(s, t) {
		const {
			x: e,
			y: i,
			base: n,
			width: o,
			height: r,
		} = s.getProps(['x', 'y', 'base', 'width', 'height'], t)
		let a, l, c, h, d
		return (
			s.horizontal
				? ((d = r / 2),
				  (a = Math.min(e, n)),
				  (l = Math.max(e, n)),
				  (c = i - d),
				  (h = i + d))
				: ((d = o / 2),
				  (a = e - d),
				  (l = e + d),
				  (c = Math.min(i, n)),
				  (h = Math.max(i, n))),
			{ left: a, top: c, right: l, bottom: h }
		)
	}
	function ai(s, t, e, i) {
		return s ? 0 : dt(t, e, i)
	}
	function Y1(s, t, e) {
		const i = s.options.borderWidth,
			n = s.borderSkipped,
			o = Kf(i)
		return {
			t: ai(n.top, o.top, 0, e),
			r: ai(n.right, o.right, 0, t),
			b: ai(n.bottom, o.bottom, 0, e),
			l: ai(n.left, o.left, 0, t),
		}
	}
	function K1(s, t, e) {
		const { enableBorderRadius: i } = s.getProps(['enableBorderRadius']),
			n = s.options.borderRadius,
			o = $i(n),
			r = Math.min(t, e),
			a = s.borderSkipped,
			l = i || V(n)
		return {
			topLeft: ai(!l || a.top || a.left, o.topLeft, 0, r),
			topRight: ai(!l || a.top || a.right, o.topRight, 0, r),
			bottomLeft: ai(!l || a.bottom || a.left, o.bottomLeft, 0, r),
			bottomRight: ai(!l || a.bottom || a.right, o.bottomRight, 0, r),
		}
	}
	function U1(s) {
		const t = ag(s),
			e = t.right - t.left,
			i = t.bottom - t.top,
			n = Y1(s, e / 2, i / 2),
			o = K1(s, e / 2, i / 2)
		return {
			outer: { x: t.left, y: t.top, w: e, h: i, radius: o },
			inner: {
				x: t.left + n.l,
				y: t.top + n.t,
				w: e - n.l - n.r,
				h: i - n.t - n.b,
				radius: {
					topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
					topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
					bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
					bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r)),
				},
			},
		}
	}
	function qc(s, t, e, i) {
		const n = t === null,
			o = e === null,
			a = s && !(n && o) && ag(s, i)
		return a && (n || Ie(t, a.left, a.right)) && (o || Ie(e, a.top, a.bottom))
	}
	function X1(s) {
		return s.topLeft || s.topRight || s.bottomLeft || s.bottomRight
	}
	function G1(s, t) {
		s.rect(t.x, t.y, t.w, t.h)
	}
	function Zc(s, t, e = {}) {
		const i = s.x !== e.x ? -t : 0,
			n = s.y !== e.y ? -t : 0,
			o = (s.x + s.w !== e.x + e.w ? t : 0) - i,
			r = (s.y + s.h !== e.y + e.h ? t : 0) - n
		return { x: s.x + i, y: s.y + n, w: s.w + o, h: s.h + r, radius: s.radius }
	}
	class Ls extends Xt {
		constructor(t) {
			super(),
				(this.options = void 0),
				(this.horizontal = void 0),
				(this.base = void 0),
				(this.width = void 0),
				(this.height = void 0),
				(this.inflateAmount = void 0),
				t && Object.assign(this, t)
		}
		draw(t) {
			const {
					inflateAmount: e,
					options: { borderColor: i, backgroundColor: n },
				} = this,
				{ inner: o, outer: r } = U1(this),
				a = X1(r.radius) ? Nn : G1
			t.save(),
				(r.w !== o.w || r.h !== o.h) &&
					(t.beginPath(),
					a(t, Zc(r, e, o)),
					t.clip(),
					a(t, Zc(o, -e, r)),
					(t.fillStyle = i),
					t.fill('evenodd')),
				t.beginPath(),
				a(t, Zc(o, e)),
				(t.fillStyle = n),
				t.fill(),
				t.restore()
		}
		inRange(t, e, i) {
			return qc(this, t, e, i)
		}
		inXRange(t, e) {
			return qc(this, t, null, e)
		}
		inYRange(t, e) {
			return qc(this, null, t, e)
		}
		getCenterPoint(t) {
			const {
				x: e,
				y: i,
				base: n,
				horizontal: o,
			} = this.getProps(['x', 'y', 'base', 'horizontal'], t)
			return { x: o ? (e + n) / 2 : e, y: o ? i : (i + n) / 2 }
		}
		getRange(t) {
			return t === 'x' ? this.width / 2 : this.height / 2
		}
	}
	;(Ls.id = 'bar'),
		(Ls.defaults = {
			borderSkipped: 'start',
			borderWidth: 0,
			borderRadius: 0,
			inflateAmount: 'auto',
			pointStyle: void 0,
		}),
		(Ls.defaultRoutes = {
			backgroundColor: 'backgroundColor',
			borderColor: 'borderColor',
		})
	var lg = Object.freeze({
		__proto__: null,
		ArcElement: Ds,
		LineElement: Le,
		PointElement: Ms,
		BarElement: Ls,
	})
	function q1(s, t, e, i, n) {
		const o = n.samples || i
		if (o >= e) return s.slice(t, t + e)
		const r = [],
			a = (e - 2) / (o - 2)
		let l = 0
		const c = t + e - 1
		let h = t,
			d,
			u,
			p,
			f,
			b
		for (r[l++] = s[h], d = 0; d < o - 2; d++) {
			let v = 0,
				y = 0,
				T
			const x = Math.floor((d + 1) * a) + 1 + t,
				E = Math.min(Math.floor((d + 2) * a) + 1, e) + t,
				C = E - x
			for (T = x; T < E; T++) (v += s[T].x), (y += s[T].y)
			;(v /= C), (y /= C)
			const A = Math.floor(d * a) + 1 + t,
				w = Math.min(Math.floor((d + 1) * a) + 1, e) + t,
				{ x: S, y: k } = s[h]
			for (p = f = -1, T = A; T < w; T++)
				(f = 0.5 * Math.abs((S - v) * (s[T].y - k) - (S - s[T].x) * (y - k))),
					f > p && ((p = f), (u = s[T]), (b = T))
			;(r[l++] = u), (h = b)
		}
		return (r[l++] = s[c]), r
	}
	function Z1(s, t, e, i) {
		let n = 0,
			o = 0,
			r,
			a,
			l,
			c,
			h,
			d,
			u,
			p,
			f,
			b
		const v = [],
			y = t + e - 1,
			T = s[t].x,
			E = s[y].x - T
		for (r = t; r < t + e; ++r) {
			;(a = s[r]), (l = ((a.x - T) / E) * i), (c = a.y)
			const C = l | 0
			if (C === h)
				c < f ? ((f = c), (d = r)) : c > b && ((b = c), (u = r)),
					(n = (o * n + a.x) / ++o)
			else {
				const A = r - 1
				if (!H(d) && !H(u)) {
					const w = Math.min(d, u),
						S = Math.max(d, u)
					w !== p && w !== A && v.push({ ...s[w], x: n }),
						S !== p && S !== A && v.push({ ...s[S], x: n })
				}
				r > 0 && A !== p && v.push(s[A]),
					v.push(a),
					(h = C),
					(o = 0),
					(f = b = c),
					(d = u = p = r)
			}
		}
		return v
	}
	function cg(s) {
		if (s._decimated) {
			const t = s._data
			delete s._decimated,
				delete s._data,
				Object.defineProperty(s, 'data', { value: t })
		}
	}
	function hg(s) {
		s.data.datasets.forEach(t => {
			cg(t)
		})
	}
	function Q1(s, t) {
		const e = t.length
		let i = 0,
			n
		const { iScale: o } = s,
			{ min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds()
		return (
			l && (i = dt(De(t, o.axis, r).lo, 0, e - 1)),
			c ? (n = dt(De(t, o.axis, a).hi + 1, i, e) - i) : (n = e - i),
			{ start: i, count: n }
		)
	}
	var dg = {
		id: 'decimation',
		defaults: { algorithm: 'min-max', enabled: !1 },
		beforeElementsUpdate: (s, t, e) => {
			if (!e.enabled) {
				hg(s)
				return
			}
			const i = s.width
			s.data.datasets.forEach((n, o) => {
				const { _data: r, indexAxis: a } = n,
					l = s.getDatasetMeta(o),
					c = r || n.data
				if (
					tt([a, s.options.indexAxis]) === 'y' ||
					!l.controller.supportsDecimation
				)
					return
				const h = s.scales[l.xAxisID]
				if ((h.type !== 'linear' && h.type !== 'time') || s.options.parsing)
					return
				let { start: d, count: u } = Q1(l, c)
				const p = e.threshold || 4 * i
				if (u <= p) {
					cg(n)
					return
				}
				H(r) &&
					((n._data = c),
					delete n.data,
					Object.defineProperty(n, 'data', {
						configurable: !0,
						enumerable: !0,
						get: function () {
							return this._decimated
						},
						set: function (b) {
							this._data = b
						},
					}))
				let f
				switch (e.algorithm) {
					case 'lttb':
						f = q1(c, d, u, i, e)
						break
					case 'min-max':
						f = Z1(c, d, u, i)
						break
					default:
						throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)
				}
				n._decimated = f
			})
		},
		destroy(s) {
			hg(s)
		},
	}
	function J1(s, t, e) {
		const i = s.segments,
			n = s.points,
			o = t.points,
			r = []
		for (const a of i) {
			let { start: l, end: c } = a
			c = Jc(l, c, n)
			const h = Qc(e, n[l], n[c], a.loop)
			if (!t.segments) {
				r.push({ source: a, target: h, start: n[l], end: n[c] })
				continue
			}
			const d = h_(t, h)
			for (const u of d) {
				const p = Qc(e, o[u.start], o[u.end], u.loop),
					f = c_(a, n, p)
				for (const b of f)
					r.push({
						source: b,
						target: u,
						start: { [e]: ug(h, p, 'start', Math.max) },
						end: { [e]: ug(h, p, 'end', Math.min) },
					})
			}
		}
		return r
	}
	function Qc(s, t, e, i) {
		if (i) return
		let n = t[s],
			o = e[s]
		return (
			s === 'angle' && ((n = Vt(n)), (o = Vt(o))),
			{ property: s, start: n, end: o }
		)
	}
	function tM(s, t) {
		const { x: e = null, y: i = null } = s || {},
			n = t.points,
			o = []
		return (
			t.segments.forEach(({ start: r, end: a }) => {
				a = Jc(r, a, n)
				const l = n[r],
					c = n[a]
				i !== null
					? (o.push({ x: l.x, y: i }), o.push({ x: c.x, y: i }))
					: e !== null && (o.push({ x: e, y: l.y }), o.push({ x: e, y: c.y }))
			}),
			o
		)
	}
	function Jc(s, t, e) {
		for (; t > s; t--) {
			const i = e[t]
			if (!isNaN(i.x) && !isNaN(i.y)) break
		}
		return t
	}
	function ug(s, t, e, i) {
		return s && t ? i(s[e], t[e]) : s ? s[e] : t ? t[e] : 0
	}
	function pg(s, t) {
		let e = [],
			i = !1
		return (
			Q(s) ? ((i = !0), (e = s)) : (e = tM(s, t)),
			e.length
				? new Le({ points: e, options: { tension: 0 }, _loop: i, _fullLoop: i })
				: null
		)
	}
	function fg(s) {
		return s && s.fill !== !1
	}
	function eM(s, t, e) {
		let n = s[t].fill
		const o = [t]
		let r
		if (!e) return n
		for (; n !== !1 && o.indexOf(n) === -1; ) {
			if (!rt(n)) return n
			if (((r = s[n]), !r)) return !1
			if (r.visible) return n
			o.push(n), (n = r.fill)
		}
		return !1
	}
	function iM(s, t, e) {
		const i = rM(s)
		if (V(i)) return isNaN(i.value) ? !1 : i
		let n = parseFloat(i)
		return rt(n) && Math.floor(n) === n
			? sM(i[0], t, n, e)
			: ['origin', 'start', 'end', 'stack', 'shape'].indexOf(i) >= 0 && i
	}
	function sM(s, t, e, i) {
		return (
			(s === '-' || s === '+') && (e = t + e),
			e === t || e < 0 || e >= i ? !1 : e
		)
	}
	function nM(s, t) {
		let e = null
		return (
			s === 'start'
				? (e = t.bottom)
				: s === 'end'
				? (e = t.top)
				: V(s)
				? (e = t.getPixelForValue(s.value))
				: t.getBasePixel && (e = t.getBasePixel()),
			e
		)
	}
	function oM(s, t, e) {
		let i
		return (
			s === 'start'
				? (i = e)
				: s === 'end'
				? (i = t.options.reverse ? t.min : t.max)
				: V(s)
				? (i = s.value)
				: (i = t.getBaseValue()),
			i
		)
	}
	function rM(s) {
		const t = s.options,
			e = t.fill
		let i = B(e && e.target, e)
		return (
			i === void 0 && (i = !!t.backgroundColor),
			i === !1 || i === null ? !1 : i === !0 ? 'origin' : i
		)
	}
	function aM(s) {
		const { scale: t, index: e, line: i } = s,
			n = [],
			o = i.segments,
			r = i.points,
			a = lM(t, e)
		a.push(pg({ x: null, y: t.bottom }, i))
		for (let l = 0; l < o.length; l++) {
			const c = o[l]
			for (let h = c.start; h <= c.end; h++) cM(n, r[h], a)
		}
		return new Le({ points: n, options: {} })
	}
	function lM(s, t) {
		const e = [],
			i = s.getMatchingVisibleMetas('line')
		for (let n = 0; n < i.length; n++) {
			const o = i[n]
			if (o.index === t) break
			o.hidden || e.unshift(o.dataset)
		}
		return e
	}
	function cM(s, t, e) {
		const i = []
		for (let n = 0; n < e.length; n++) {
			const o = e[n],
				{ first: r, last: a, point: l } = hM(o, t, 'x')
			if (!(!l || (r && a))) {
				if (r) i.unshift(l)
				else if ((s.push(l), !a)) break
			}
		}
		s.push(...i)
	}
	function hM(s, t, e) {
		const i = s.interpolate(t, e)
		if (!i) return {}
		const n = i[e],
			o = s.segments,
			r = s.points
		let a = !1,
			l = !1
		for (let c = 0; c < o.length; c++) {
			const h = o[c],
				d = r[h.start][e],
				u = r[h.end][e]
			if (Ie(n, d, u)) {
				;(a = n === d), (l = n === u)
				break
			}
		}
		return { first: a, last: l, point: i }
	}
	class _g {
		constructor(t) {
			;(this.x = t.x), (this.y = t.y), (this.radius = t.radius)
		}
		pathSegment(t, e, i) {
			const { x: n, y: o, radius: r } = this
			return (
				(e = e || { start: 0, end: q }),
				t.arc(n, o, r, e.end, e.start, !0),
				!i.bounds
			)
		}
		interpolate(t) {
			const { x: e, y: i, radius: n } = this,
				o = t.angle
			return { x: e + Math.cos(o) * n, y: i + Math.sin(o) * n, angle: o }
		}
	}
	function dM(s) {
		const { chart: t, fill: e, line: i } = s
		if (rt(e)) return uM(t, e)
		if (e === 'stack') return aM(s)
		if (e === 'shape') return !0
		const n = pM(s)
		return n instanceof _g ? n : pg(n, i)
	}
	function uM(s, t) {
		const e = s.getDatasetMeta(t)
		return e && s.isDatasetVisible(t) ? e.dataset : null
	}
	function pM(s) {
		return (s.scale || {}).getPointPositionForValue ? _M(s) : fM(s)
	}
	function fM(s) {
		const { scale: t = {}, fill: e } = s,
			i = nM(e, t)
		if (rt(i)) {
			const n = t.isHorizontal()
			return { x: n ? i : null, y: n ? null : i }
		}
		return null
	}
	function _M(s) {
		const { scale: t, fill: e } = s,
			i = t.options,
			n = t.getLabels().length,
			o = i.reverse ? t.max : t.min,
			r = oM(e, t, o),
			a = []
		if (i.grid.circular) {
			const l = t.getPointPositionForValue(0, o)
			return new _g({
				x: l.x,
				y: l.y,
				radius: t.getDistanceFromCenterForValue(r),
			})
		}
		for (let l = 0; l < n; ++l) a.push(t.getPointPositionForValue(l, r))
		return a
	}
	function th(s, t, e) {
		const i = dM(t),
			{ line: n, scale: o, axis: r } = t,
			a = n.options,
			l = a.fill,
			c = a.backgroundColor,
			{ above: h = c, below: d = c } = l || {}
		i &&
			n.points.length &&
			(qr(s, e),
			gM(s, {
				line: n,
				target: i,
				above: h,
				below: d,
				area: e,
				scale: o,
				axis: r,
			}),
			Zr(s))
	}
	function gM(s, t) {
		const { line: e, target: i, above: n, below: o, area: r, scale: a } = t,
			l = e._loop ? 'angle' : t.axis
		s.save(),
			l === 'x' &&
				o !== n &&
				(gg(s, i, r.top),
				mg(s, { line: e, target: i, color: n, scale: a, property: l }),
				s.restore(),
				s.save(),
				gg(s, i, r.bottom)),
			mg(s, { line: e, target: i, color: o, scale: a, property: l }),
			s.restore()
	}
	function gg(s, t, e) {
		const { segments: i, points: n } = t
		let o = !0,
			r = !1
		s.beginPath()
		for (const a of i) {
			const { start: l, end: c } = a,
				h = n[l],
				d = n[Jc(l, c, n)]
			o
				? (s.moveTo(h.x, h.y), (o = !1))
				: (s.lineTo(h.x, e), s.lineTo(h.x, h.y)),
				(r = !!t.pathSegment(s, a, { move: r })),
				r ? s.closePath() : s.lineTo(d.x, e)
		}
		s.lineTo(t.first().x, e), s.closePath(), s.clip()
	}
	function mg(s, t) {
		const { line: e, target: i, property: n, color: o, scale: r } = t,
			a = J1(e, i, n)
		for (const { source: l, target: c, start: h, end: d } of a) {
			const { style: { backgroundColor: u = o } = {} } = l,
				p = i !== !0
			s.save(), (s.fillStyle = u), mM(s, r, p && Qc(n, h, d)), s.beginPath()
			const f = !!e.pathSegment(s, l)
			let b
			if (p) {
				f ? s.closePath() : bg(s, i, d, n)
				const v = !!i.pathSegment(s, c, { move: f, reverse: !0 })
				;(b = f && v), b || bg(s, i, h, n)
			}
			s.closePath(), s.fill(b ? 'evenodd' : 'nonzero'), s.restore()
		}
	}
	function mM(s, t, e) {
		const { top: i, bottom: n } = t.chart.chartArea,
			{ property: o, start: r, end: a } = e || {}
		o === 'x' && (s.beginPath(), s.rect(r, i, a - r, n - i), s.clip())
	}
	function bg(s, t, e, i) {
		const n = t.interpolate(e, i)
		n && s.lineTo(n.x, n.y)
	}
	var vg = {
		id: 'filler',
		afterDatasetsUpdate(s, t, e) {
			const i = (s.data.datasets || []).length,
				n = []
			let o, r, a, l
			for (r = 0; r < i; ++r)
				(o = s.getDatasetMeta(r)),
					(a = o.dataset),
					(l = null),
					a &&
						a.options &&
						a instanceof Le &&
						(l = {
							visible: s.isDatasetVisible(r),
							index: r,
							fill: iM(a, r, i),
							chart: s,
							axis: o.controller.options.indexAxis,
							scale: o.vScale,
							line: a,
						}),
					(o.$filler = l),
					n.push(l)
			for (r = 0; r < i; ++r)
				(l = n[r]), !(!l || l.fill === !1) && (l.fill = eM(n, r, e.propagate))
		},
		beforeDraw(s, t, e) {
			const i = e.drawTime === 'beforeDraw',
				n = s.getSortedVisibleDatasetMetas(),
				o = s.chartArea
			for (let r = n.length - 1; r >= 0; --r) {
				const a = n[r].$filler
				a &&
					(a.line.updateControlPoints(o, a.axis),
					i && a.fill && th(s.ctx, a, o))
			}
		},
		beforeDatasetsDraw(s, t, e) {
			if (e.drawTime !== 'beforeDatasetsDraw') return
			const i = s.getSortedVisibleDatasetMetas()
			for (let n = i.length - 1; n >= 0; --n) {
				const o = i[n].$filler
				fg(o) && th(s.ctx, o, s.chartArea)
			}
		},
		beforeDatasetDraw(s, t, e) {
			const i = t.meta.$filler
			!fg(i) || e.drawTime !== 'beforeDatasetDraw' || th(s.ctx, i, s.chartArea)
		},
		defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
	}
	const yg = (s, t) => {
			let { boxHeight: e = t, boxWidth: i = t } = s
			return (
				s.usePointStyle &&
					((e = Math.min(e, t)), (i = s.pointStyleWidth || Math.min(i, t))),
				{ boxWidth: i, boxHeight: e, itemHeight: Math.max(t, e) }
			)
		},
		bM = (s, t) =>
			s !== null &&
			t !== null &&
			s.datasetIndex === t.datasetIndex &&
			s.index === t.index
	class Tg extends Xt {
		constructor(t) {
			super(),
				(this._added = !1),
				(this.legendHitBoxes = []),
				(this._hoveredItem = null),
				(this.doughnutMode = !1),
				(this.chart = t.chart),
				(this.options = t.options),
				(this.ctx = t.ctx),
				(this.legendItems = void 0),
				(this.columnSizes = void 0),
				(this.lineWidths = void 0),
				(this.maxHeight = void 0),
				(this.maxWidth = void 0),
				(this.top = void 0),
				(this.bottom = void 0),
				(this.left = void 0),
				(this.right = void 0),
				(this.height = void 0),
				(this.width = void 0),
				(this._margins = void 0),
				(this.position = void 0),
				(this.weight = void 0),
				(this.fullSize = void 0)
		}
		update(t, e, i) {
			;(this.maxWidth = t),
				(this.maxHeight = e),
				(this._margins = i),
				this.setDimensions(),
				this.buildLabels(),
				this.fit()
		}
		setDimensions() {
			this.isHorizontal()
				? ((this.width = this.maxWidth),
				  (this.left = this._margins.left),
				  (this.right = this.width))
				: ((this.height = this.maxHeight),
				  (this.top = this._margins.top),
				  (this.bottom = this.height))
		}
		buildLabels() {
			const t = this.options.labels || {}
			let e = G(t.generateLabels, [this.chart], this) || []
			t.filter && (e = e.filter(i => t.filter(i, this.chart.data))),
				t.sort && (e = e.sort((i, n) => t.sort(i, n, this.chart.data))),
				this.options.reverse && e.reverse(),
				(this.legendItems = e)
		}
		fit() {
			const { options: t, ctx: e } = this
			if (!t.display) {
				this.width = this.height = 0
				return
			}
			const i = t.labels,
				n = lt(i.font),
				o = n.size,
				r = this._computeTitleHeight(),
				{ boxWidth: a, itemHeight: l } = yg(i, o)
			let c, h
			;(e.font = n.string),
				this.isHorizontal()
					? ((c = this.maxWidth), (h = this._fitRows(r, o, a, l) + 10))
					: ((h = this.maxHeight), (c = this._fitCols(r, o, a, l) + 10)),
				(this.width = Math.min(c, t.maxWidth || this.maxWidth)),
				(this.height = Math.min(h, t.maxHeight || this.maxHeight))
		}
		_fitRows(t, e, i, n) {
			const {
					ctx: o,
					maxWidth: r,
					options: {
						labels: { padding: a },
					},
				} = this,
				l = (this.legendHitBoxes = []),
				c = (this.lineWidths = [0]),
				h = n + a
			let d = t
			;(o.textAlign = 'left'), (o.textBaseline = 'middle')
			let u = -1,
				p = -h
			return (
				this.legendItems.forEach((f, b) => {
					const v = i + e / 2 + o.measureText(f.text).width
					;(b === 0 || c[c.length - 1] + v + 2 * a > r) &&
						((d += h), (c[c.length - (b > 0 ? 0 : 1)] = 0), (p += h), u++),
						(l[b] = { left: 0, top: p, row: u, width: v, height: n }),
						(c[c.length - 1] += v + a)
				}),
				d
			)
		}
		_fitCols(t, e, i, n) {
			const {
					ctx: o,
					maxHeight: r,
					options: {
						labels: { padding: a },
					},
				} = this,
				l = (this.legendHitBoxes = []),
				c = (this.columnSizes = []),
				h = r - t
			let d = a,
				u = 0,
				p = 0,
				f = 0,
				b = 0
			return (
				this.legendItems.forEach((v, y) => {
					const T = i + e / 2 + o.measureText(v.text).width
					y > 0 &&
						p + n + 2 * a > h &&
						((d += u + a),
						c.push({ width: u, height: p }),
						(f += u + a),
						b++,
						(u = p = 0)),
						(l[y] = { left: f, top: p, col: b, width: T, height: n }),
						(u = Math.max(u, T)),
						(p += n + a)
				}),
				(d += u),
				c.push({ width: u, height: p }),
				d
			)
		}
		adjustHitBoxes() {
			if (!this.options.display) return
			const t = this._computeTitleHeight(),
				{
					legendHitBoxes: e,
					options: {
						align: i,
						labels: { padding: n },
						rtl: o,
					},
				} = this,
				r = Os(o, this.left, this.width)
			if (this.isHorizontal()) {
				let a = 0,
					l = gt(i, this.left + n, this.right - this.lineWidths[a])
				for (const c of e)
					a !== c.row &&
						((a = c.row),
						(l = gt(i, this.left + n, this.right - this.lineWidths[a]))),
						(c.top += this.top + t + n),
						(c.left = r.leftForLtr(r.x(l), c.width)),
						(l += c.width + n)
			} else {
				let a = 0,
					l = gt(i, this.top + t + n, this.bottom - this.columnSizes[a].height)
				for (const c of e)
					c.col !== a &&
						((a = c.col),
						(l = gt(
							i,
							this.top + t + n,
							this.bottom - this.columnSizes[a].height
						))),
						(c.top = l),
						(c.left += this.left + n),
						(c.left = r.leftForLtr(r.x(c.left), c.width)),
						(l += c.height + n)
			}
		}
		isHorizontal() {
			return (
				this.options.position === 'top' || this.options.position === 'bottom'
			)
		}
		draw() {
			if (this.options.display) {
				const t = this.ctx
				qr(t, this), this._draw(), Zr(t)
			}
		}
		_draw() {
			const { options: t, columnSizes: e, lineWidths: i, ctx: n } = this,
				{ align: o, labels: r } = t,
				a = F.color,
				l = Os(t.rtl, this.left, this.width),
				c = lt(r.font),
				{ color: h, padding: d } = r,
				u = c.size,
				p = u / 2
			let f
			this.drawTitle(),
				(n.textAlign = l.textAlign('left')),
				(n.textBaseline = 'middle'),
				(n.lineWidth = 0.5),
				(n.font = c.string)
			const { boxWidth: b, boxHeight: v, itemHeight: y } = yg(r, u),
				T = function (w, S, k) {
					if (isNaN(b) || b <= 0 || isNaN(v) || v < 0) return
					n.save()
					const D = B(k.lineWidth, 1)
					if (
						((n.fillStyle = B(k.fillStyle, a)),
						(n.lineCap = B(k.lineCap, 'butt')),
						(n.lineDashOffset = B(k.lineDashOffset, 0)),
						(n.lineJoin = B(k.lineJoin, 'miter')),
						(n.lineWidth = D),
						(n.strokeStyle = B(k.strokeStyle, a)),
						n.setLineDash(B(k.lineDash, [])),
						r.usePointStyle)
					) {
						const I = {
								radius: (v * Math.SQRT2) / 2,
								pointStyle: k.pointStyle,
								rotation: k.rotation,
								borderWidth: D,
							},
							M = l.xPlus(w, b / 2),
							P = S + p
						Yf(n, I, M, P, r.pointStyleWidth && b)
					} else {
						const I = S + Math.max((u - v) / 2, 0),
							M = l.leftForLtr(w, b),
							P = $i(k.borderRadius)
						n.beginPath(),
							Object.values(P).some(X => X !== 0)
								? Nn(n, { x: M, y: I, w: b, h: v, radius: P })
								: n.rect(M, I, b, v),
							n.fill(),
							D !== 0 && n.stroke()
					}
					n.restore()
				},
				x = function (w, S, k) {
					Li(n, k.text, w, S + y / 2, c, {
						strikethrough: k.hidden,
						textAlign: l.textAlign(k.textAlign),
					})
				},
				E = this.isHorizontal(),
				C = this._computeTitleHeight()
			E
				? (f = {
						x: gt(o, this.left + d, this.right - i[0]),
						y: this.top + d + C,
						line: 0,
				  })
				: (f = {
						x: this.left + d,
						y: gt(o, this.top + C + d, this.bottom - e[0].height),
						line: 0,
				  }),
				o_(this.ctx, t.textDirection)
			const A = y + d
			this.legendItems.forEach((w, S) => {
				;(n.strokeStyle = w.fontColor || h), (n.fillStyle = w.fontColor || h)
				const k = n.measureText(w.text).width,
					D = l.textAlign(w.textAlign || (w.textAlign = r.textAlign)),
					I = b + p + k
				let M = f.x,
					P = f.y
				l.setWidth(this.width),
					E
						? S > 0 &&
						  M + I + d > this.right &&
						  ((P = f.y += A),
						  f.line++,
						  (M = f.x = gt(o, this.left + d, this.right - i[f.line])))
						: S > 0 &&
						  P + A > this.bottom &&
						  ((M = f.x = M + e[f.line].width + d),
						  f.line++,
						  (P = f.y =
								gt(o, this.top + C + d, this.bottom - e[f.line].height)))
				const X = l.x(M)
				T(X, P, w),
					(M = HO(D, M + b + p, E ? M + I : this.right, t.rtl)),
					x(l.x(M), P, w),
					E ? (f.x += I + d) : (f.y += A)
			}),
				r_(this.ctx, t.textDirection)
		}
		drawTitle() {
			const t = this.options,
				e = t.title,
				i = lt(e.font),
				n = pt(e.padding)
			if (!e.display) return
			const o = Os(t.rtl, this.left, this.width),
				r = this.ctx,
				a = e.position,
				l = i.size / 2,
				c = n.top + l
			let h,
				d = this.left,
				u = this.width
			if (this.isHorizontal())
				(u = Math.max(...this.lineWidths)),
					(h = this.top + c),
					(d = gt(t.align, d, this.right - u))
			else {
				const f = this.columnSizes.reduce((b, v) => Math.max(b, v.height), 0)
				h =
					c +
					gt(
						t.align,
						this.top,
						this.bottom - f - t.labels.padding - this._computeTitleHeight()
					)
			}
			const p = gt(a, d, d + u)
			;(r.textAlign = o.textAlign(yc(a))),
				(r.textBaseline = 'middle'),
				(r.strokeStyle = e.color),
				(r.fillStyle = e.color),
				(r.font = i.string),
				Li(r, e.text, p, h, i)
		}
		_computeTitleHeight() {
			const t = this.options.title,
				e = lt(t.font),
				i = pt(t.padding)
			return t.display ? e.lineHeight + i.height : 0
		}
		_getLegendItemAt(t, e) {
			let i, n, o
			if (Ie(t, this.left, this.right) && Ie(e, this.top, this.bottom)) {
				for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
					if (
						((n = o[i]),
						Ie(t, n.left, n.left + n.width) && Ie(e, n.top, n.top + n.height))
					)
						return this.legendItems[i]
			}
			return null
		}
		handleEvent(t) {
			const e = this.options
			if (!vM(t.type, e)) return
			const i = this._getLegendItemAt(t.x, t.y)
			if (t.type === 'mousemove' || t.type === 'mouseout') {
				const n = this._hoveredItem,
					o = bM(n, i)
				n && !o && G(e.onLeave, [t, n, this], this),
					(this._hoveredItem = i),
					i && !o && G(e.onHover, [t, i, this], this)
			} else i && G(e.onClick, [t, i, this], this)
		}
	}
	function vM(s, t) {
		return !!(
			((s === 'mousemove' || s === 'mouseout') && (t.onHover || t.onLeave)) ||
			(t.onClick && (s === 'click' || s === 'mouseup'))
		)
	}
	var Eg = {
		id: 'legend',
		_element: Tg,
		start(s, t, e) {
			const i = (s.legend = new Tg({ ctx: s.ctx, options: e, chart: s }))
			ft.configure(s, i, e), ft.addBox(s, i)
		},
		stop(s) {
			ft.removeBox(s, s.legend), delete s.legend
		},
		beforeUpdate(s, t, e) {
			const i = s.legend
			ft.configure(s, i, e), (i.options = e)
		},
		afterUpdate(s) {
			const t = s.legend
			t.buildLabels(), t.adjustHitBoxes()
		},
		afterEvent(s, t) {
			t.replay || s.legend.handleEvent(t.event)
		},
		defaults: {
			display: !0,
			position: 'top',
			align: 'center',
			fullSize: !0,
			reverse: !1,
			weight: 1e3,
			onClick(s, t, e) {
				const i = t.datasetIndex,
					n = e.chart
				n.isDatasetVisible(i)
					? (n.hide(i), (t.hidden = !0))
					: (n.show(i), (t.hidden = !1))
			},
			onHover: null,
			onLeave: null,
			labels: {
				color: s => s.chart.options.color,
				boxWidth: 40,
				padding: 10,
				generateLabels(s) {
					const t = s.data.datasets,
						{
							labels: {
								usePointStyle: e,
								pointStyle: i,
								textAlign: n,
								color: o,
							},
						} = s.legend.options
					return s._getSortedDatasetMetas().map(r => {
						const a = r.controller.getStyle(e ? 0 : void 0),
							l = pt(a.borderWidth)
						return {
							text: t[r.index].label,
							fillStyle: a.backgroundColor,
							fontColor: o,
							hidden: !r.visible,
							lineCap: a.borderCapStyle,
							lineDash: a.borderDash,
							lineDashOffset: a.borderDashOffset,
							lineJoin: a.borderJoinStyle,
							lineWidth: (l.width + l.height) / 4,
							strokeStyle: a.borderColor,
							pointStyle: i || a.pointStyle,
							rotation: a.rotation,
							textAlign: n || a.textAlign,
							borderRadius: 0,
							datasetIndex: r.index,
						}
					}, this)
				},
			},
			title: {
				color: s => s.chart.options.color,
				display: !1,
				position: 'center',
				text: '',
			},
		},
		descriptors: {
			_scriptable: s => !s.startsWith('on'),
			labels: {
				_scriptable: s => !['generateLabels', 'filter', 'sort'].includes(s),
			},
		},
	}
	class eh extends Xt {
		constructor(t) {
			super(),
				(this.chart = t.chart),
				(this.options = t.options),
				(this.ctx = t.ctx),
				(this._padding = void 0),
				(this.top = void 0),
				(this.bottom = void 0),
				(this.left = void 0),
				(this.right = void 0),
				(this.width = void 0),
				(this.height = void 0),
				(this.position = void 0),
				(this.weight = void 0),
				(this.fullSize = void 0)
		}
		update(t, e) {
			const i = this.options
			if (((this.left = 0), (this.top = 0), !i.display)) {
				this.width = this.height = this.right = this.bottom = 0
				return
			}
			;(this.width = this.right = t), (this.height = this.bottom = e)
			const n = Q(i.text) ? i.text.length : 1
			this._padding = pt(i.padding)
			const o = n * lt(i.font).lineHeight + this._padding.height
			this.isHorizontal() ? (this.height = o) : (this.width = o)
		}
		isHorizontal() {
			const t = this.options.position
			return t === 'top' || t === 'bottom'
		}
		_drawArgs(t) {
			const { top: e, left: i, bottom: n, right: o, options: r } = this,
				a = r.align
			let l = 0,
				c,
				h,
				d
			return (
				this.isHorizontal()
					? ((h = gt(a, i, o)), (d = e + t), (c = o - i))
					: (r.position === 'left'
							? ((h = i + t), (d = gt(a, n, e)), (l = it * -0.5))
							: ((h = o - t), (d = gt(a, e, n)), (l = it * 0.5)),
					  (c = n - e)),
				{ titleX: h, titleY: d, maxWidth: c, rotation: l }
			)
		}
		draw() {
			const t = this.ctx,
				e = this.options
			if (!e.display) return
			const i = lt(e.font),
				o = i.lineHeight / 2 + this._padding.top,
				{ titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o)
			Li(t, e.text, 0, 0, i, {
				color: e.color,
				maxWidth: l,
				rotation: c,
				textAlign: yc(e.align),
				textBaseline: 'middle',
				translation: [r, a],
			})
		}
	}
	function yM(s, t) {
		const e = new eh({ ctx: s.ctx, options: t, chart: s })
		ft.configure(s, e, t), ft.addBox(s, e), (s.titleBlock = e)
	}
	var xg = {
		id: 'title',
		_element: eh,
		start(s, t, e) {
			yM(s, e)
		},
		stop(s) {
			const t = s.titleBlock
			ft.removeBox(s, t), delete s.titleBlock
		},
		beforeUpdate(s, t, e) {
			const i = s.titleBlock
			ft.configure(s, i, e), (i.options = e)
		},
		defaults: {
			align: 'center',
			display: !1,
			font: { weight: 'bold' },
			fullSize: !0,
			padding: 10,
			position: 'top',
			text: '',
			weight: 2e3,
		},
		defaultRoutes: { color: 'color' },
		descriptors: { _scriptable: !0, _indexable: !1 },
	}
	const ca = new WeakMap()
	var Cg = {
		id: 'subtitle',
		start(s, t, e) {
			const i = new eh({ ctx: s.ctx, options: e, chart: s })
			ft.configure(s, i, e), ft.addBox(s, i), ca.set(s, i)
		},
		stop(s) {
			ft.removeBox(s, ca.get(s)), ca.delete(s)
		},
		beforeUpdate(s, t, e) {
			const i = ca.get(s)
			ft.configure(s, i, e), (i.options = e)
		},
		defaults: {
			align: 'center',
			display: !1,
			font: { weight: 'normal' },
			fullSize: !0,
			padding: 0,
			position: 'top',
			text: '',
			weight: 1500,
		},
		defaultRoutes: { color: 'color' },
		descriptors: { _scriptable: !0, _indexable: !1 },
	}
	const to = {
		average(s) {
			if (!s.length) return !1
			let t,
				e,
				i = 0,
				n = 0,
				o = 0
			for (t = 0, e = s.length; t < e; ++t) {
				const r = s[t].element
				if (r && r.hasValue()) {
					const a = r.tooltipPosition()
					;(i += a.x), (n += a.y), ++o
				}
			}
			return { x: i / o, y: n / o }
		},
		nearest(s, t) {
			if (!s.length) return !1
			let e = t.x,
				i = t.y,
				n = Number.POSITIVE_INFINITY,
				o,
				r,
				a
			for (o = 0, r = s.length; o < r; ++o) {
				const l = s[o].element
				if (l && l.hasValue()) {
					const c = l.getCenterPoint(),
						h = bc(t, c)
					h < n && ((n = h), (a = l))
				}
			}
			if (a) {
				const l = a.tooltipPosition()
				;(e = l.x), (i = l.y)
			}
			return { x: e, y: i }
		},
	}
	function Ce(s, t) {
		return t && (Q(t) ? Array.prototype.push.apply(s, t) : s.push(t)), s
	}
	function $e(s) {
		return (typeof s == 'string' || s instanceof String) &&
			s.indexOf(`
`) > -1
			? s.split(`
`)
			: s
	}
	function TM(s, t) {
		const { element: e, datasetIndex: i, index: n } = t,
			o = s.getDatasetMeta(i).controller,
			{ label: r, value: a } = o.getLabelAndValue(n)
		return {
			chart: s,
			label: r,
			parsed: o.getParsed(n),
			raw: s.data.datasets[i].data[n],
			formattedValue: a,
			dataset: o.getDataset(),
			dataIndex: n,
			datasetIndex: i,
			element: e,
		}
	}
	function Ag(s, t) {
		const e = s.chart.ctx,
			{ body: i, footer: n, title: o } = s,
			{ boxWidth: r, boxHeight: a } = t,
			l = lt(t.bodyFont),
			c = lt(t.titleFont),
			h = lt(t.footerFont),
			d = o.length,
			u = n.length,
			p = i.length,
			f = pt(t.padding)
		let b = f.height,
			v = 0,
			y = i.reduce(
				(E, C) => E + C.before.length + C.lines.length + C.after.length,
				0
			)
		if (
			((y += s.beforeBody.length + s.afterBody.length),
			d &&
				(b +=
					d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
			y)
		) {
			const E = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight
			b += p * E + (y - p) * l.lineHeight + (y - 1) * t.bodySpacing
		}
		u && (b += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing)
		let T = 0
		const x = function (E) {
			v = Math.max(v, e.measureText(E).width + T)
		}
		return (
			e.save(),
			(e.font = c.string),
			U(s.title, x),
			(e.font = l.string),
			U(s.beforeBody.concat(s.afterBody), x),
			(T = t.displayColors ? r + 2 + t.boxPadding : 0),
			U(i, E => {
				U(E.before, x), U(E.lines, x), U(E.after, x)
			}),
			(T = 0),
			(e.font = h.string),
			U(s.footer, x),
			e.restore(),
			(v += f.width),
			{ width: v, height: b }
		)
	}
	function EM(s, t) {
		const { y: e, height: i } = t
		return e < i / 2 ? 'top' : e > s.height - i / 2 ? 'bottom' : 'center'
	}
	function xM(s, t, e, i) {
		const { x: n, width: o } = i,
			r = e.caretSize + e.caretPadding
		if (
			(s === 'left' && n + o + r > t.width) ||
			(s === 'right' && n - o - r < 0)
		)
			return !0
	}
	function CM(s, t, e, i) {
		const { x: n, width: o } = e,
			{
				width: r,
				chartArea: { left: a, right: l },
			} = s
		let c = 'center'
		return (
			i === 'center'
				? (c = n <= (a + l) / 2 ? 'left' : 'right')
				: n <= o / 2
				? (c = 'left')
				: n >= r - o / 2 && (c = 'right'),
			xM(c, s, t, e) && (c = 'center'),
			c
		)
	}
	function wg(s, t, e) {
		const i = e.yAlign || t.yAlign || EM(s, e)
		return { xAlign: e.xAlign || t.xAlign || CM(s, t, e, i), yAlign: i }
	}
	function AM(s, t) {
		let { x: e, width: i } = s
		return t === 'right' ? (e -= i) : t === 'center' && (e -= i / 2), e
	}
	function wM(s, t, e) {
		let { y: i, height: n } = s
		return (
			t === 'top' ? (i += e) : t === 'bottom' ? (i -= n + e) : (i -= n / 2), i
		)
	}
	function kg(s, t, e, i) {
		const { caretSize: n, caretPadding: o, cornerRadius: r } = s,
			{ xAlign: a, yAlign: l } = e,
			c = n + o,
			{ topLeft: h, topRight: d, bottomLeft: u, bottomRight: p } = $i(r)
		let f = AM(t, a)
		const b = wM(t, l, c)
		return (
			l === 'center'
				? a === 'left'
					? (f += c)
					: a === 'right' && (f -= c)
				: a === 'left'
				? (f -= Math.max(h, u) + n)
				: a === 'right' && (f += Math.max(d, p) + n),
			{ x: dt(f, 0, i.width - t.width), y: dt(b, 0, i.height - t.height) }
		)
	}
	function ha(s, t, e) {
		const i = pt(e.padding)
		return t === 'center'
			? s.x + s.width / 2
			: t === 'right'
			? s.x + s.width - i.right
			: s.x + i.left
	}
	function Sg(s) {
		return Ce([], $e(s))
	}
	function kM(s, t, e) {
		return ni(s, { tooltip: t, tooltipItems: e, type: 'tooltip' })
	}
	function Og(s, t) {
		const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks
		return e ? s.override(e) : s
	}
	class ih extends Xt {
		constructor(t) {
			super(),
				(this.opacity = 0),
				(this._active = []),
				(this._eventPosition = void 0),
				(this._size = void 0),
				(this._cachedAnimations = void 0),
				(this._tooltipItems = []),
				(this.$animations = void 0),
				(this.$context = void 0),
				(this.chart = t.chart || t._chart),
				(this._chart = this.chart),
				(this.options = t.options),
				(this.dataPoints = void 0),
				(this.title = void 0),
				(this.beforeBody = void 0),
				(this.body = void 0),
				(this.afterBody = void 0),
				(this.footer = void 0),
				(this.xAlign = void 0),
				(this.yAlign = void 0),
				(this.x = void 0),
				(this.y = void 0),
				(this.height = void 0),
				(this.width = void 0),
				(this.caretX = void 0),
				(this.caretY = void 0),
				(this.labelColors = void 0),
				(this.labelPointStyles = void 0),
				(this.labelTextColors = void 0)
		}
		initialize(t) {
			;(this.options = t),
				(this._cachedAnimations = void 0),
				(this.$context = void 0)
		}
		_resolveAnimations() {
			const t = this._cachedAnimations
			if (t) return t
			const e = this.chart,
				i = this.options.setContext(this.getContext()),
				n = i.enabled && e.options.animation && i.animations,
				o = new Pc(this.chart, n)
			return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o
		}
		getContext() {
			return (
				this.$context ||
				(this.$context = kM(this.chart.getContext(), this, this._tooltipItems))
			)
		}
		getTitle(t, e) {
			const { callbacks: i } = e,
				n = i.beforeTitle.apply(this, [t]),
				o = i.title.apply(this, [t]),
				r = i.afterTitle.apply(this, [t])
			let a = []
			return (a = Ce(a, $e(n))), (a = Ce(a, $e(o))), (a = Ce(a, $e(r))), a
		}
		getBeforeBody(t, e) {
			return Sg(e.callbacks.beforeBody.apply(this, [t]))
		}
		getBody(t, e) {
			const { callbacks: i } = e,
				n = []
			return (
				U(t, o => {
					const r = { before: [], lines: [], after: [] },
						a = Og(i, o)
					Ce(r.before, $e(a.beforeLabel.call(this, o))),
						Ce(r.lines, a.label.call(this, o)),
						Ce(r.after, $e(a.afterLabel.call(this, o))),
						n.push(r)
				}),
				n
			)
		}
		getAfterBody(t, e) {
			return Sg(e.callbacks.afterBody.apply(this, [t]))
		}
		getFooter(t, e) {
			const { callbacks: i } = e,
				n = i.beforeFooter.apply(this, [t]),
				o = i.footer.apply(this, [t]),
				r = i.afterFooter.apply(this, [t])
			let a = []
			return (a = Ce(a, $e(n))), (a = Ce(a, $e(o))), (a = Ce(a, $e(r))), a
		}
		_createItems(t) {
			const e = this._active,
				i = this.chart.data,
				n = [],
				o = [],
				r = []
			let a = [],
				l,
				c
			for (l = 0, c = e.length; l < c; ++l) a.push(TM(this.chart, e[l]))
			return (
				t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, i))),
				t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, i))),
				U(a, h => {
					const d = Og(t.callbacks, h)
					n.push(d.labelColor.call(this, h)),
						o.push(d.labelPointStyle.call(this, h)),
						r.push(d.labelTextColor.call(this, h))
				}),
				(this.labelColors = n),
				(this.labelPointStyles = o),
				(this.labelTextColors = r),
				(this.dataPoints = a),
				a
			)
		}
		update(t, e) {
			const i = this.options.setContext(this.getContext()),
				n = this._active
			let o,
				r = []
			if (!n.length) this.opacity !== 0 && (o = { opacity: 0 })
			else {
				const a = to[i.position].call(this, n, this._eventPosition)
				;(r = this._createItems(i)),
					(this.title = this.getTitle(r, i)),
					(this.beforeBody = this.getBeforeBody(r, i)),
					(this.body = this.getBody(r, i)),
					(this.afterBody = this.getAfterBody(r, i)),
					(this.footer = this.getFooter(r, i))
				const l = (this._size = Ag(this, i)),
					c = Object.assign({}, a, l),
					h = wg(this.chart, i, c),
					d = kg(i, c, h, this.chart)
				;(this.xAlign = h.xAlign),
					(this.yAlign = h.yAlign),
					(o = {
						opacity: 1,
						x: d.x,
						y: d.y,
						width: l.width,
						height: l.height,
						caretX: a.x,
						caretY: a.y,
					})
			}
			;(this._tooltipItems = r),
				(this.$context = void 0),
				o && this._resolveAnimations().update(this, o),
				t &&
					i.external &&
					i.external.call(this, { chart: this.chart, tooltip: this, replay: e })
		}
		drawCaret(t, e, i, n) {
			const o = this.getCaretPosition(t, i, n)
			e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3)
		}
		getCaretPosition(t, e, i) {
			const { xAlign: n, yAlign: o } = this,
				{ caretSize: r, cornerRadius: a } = i,
				{ topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = $i(a),
				{ x: u, y: p } = t,
				{ width: f, height: b } = e
			let v, y, T, x, E, C
			return (
				o === 'center'
					? ((E = p + b / 2),
					  n === 'left'
							? ((v = u), (y = v - r), (x = E + r), (C = E - r))
							: ((v = u + f), (y = v + r), (x = E - r), (C = E + r)),
					  (T = v))
					: (n === 'left'
							? (y = u + Math.max(l, h) + r)
							: n === 'right'
							? (y = u + f - Math.max(c, d) - r)
							: (y = this.caretX),
					  o === 'top'
							? ((x = p), (E = x - r), (v = y - r), (T = y + r))
							: ((x = p + b), (E = x + r), (v = y + r), (T = y - r)),
					  (C = x)),
				{ x1: v, x2: y, x3: T, y1: x, y2: E, y3: C }
			)
		}
		drawTitle(t, e, i) {
			const n = this.title,
				o = n.length
			let r, a, l
			if (o) {
				const c = Os(i.rtl, this.x, this.width)
				for (
					t.x = ha(this, i.titleAlign, i),
						e.textAlign = c.textAlign(i.titleAlign),
						e.textBaseline = 'middle',
						r = lt(i.titleFont),
						a = i.titleSpacing,
						e.fillStyle = i.titleColor,
						e.font = r.string,
						l = 0;
					l < o;
					++l
				)
					e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2),
						(t.y += r.lineHeight + a),
						l + 1 === o && (t.y += i.titleMarginBottom - a)
			}
		}
		_drawColorBox(t, e, i, n, o) {
			const r = this.labelColors[i],
				a = this.labelPointStyles[i],
				{ boxHeight: l, boxWidth: c, boxPadding: h } = o,
				d = lt(o.bodyFont),
				u = ha(this, 'left', o),
				p = n.x(u),
				f = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0,
				b = e.y + f
			if (o.usePointStyle) {
				const v = {
						radius: Math.min(c, l) / 2,
						pointStyle: a.pointStyle,
						rotation: a.rotation,
						borderWidth: 1,
					},
					y = n.leftForLtr(p, c) + c / 2,
					T = b + l / 2
				;(t.strokeStyle = o.multiKeyBackground),
					(t.fillStyle = o.multiKeyBackground),
					Oc(t, v, y, T),
					(t.strokeStyle = r.borderColor),
					(t.fillStyle = r.backgroundColor),
					Oc(t, v, y, T)
			} else {
				;(t.lineWidth = V(r.borderWidth)
					? Math.max(...Object.values(r.borderWidth))
					: r.borderWidth || 1),
					(t.strokeStyle = r.borderColor),
					t.setLineDash(r.borderDash || []),
					(t.lineDashOffset = r.borderDashOffset || 0)
				const v = n.leftForLtr(p, c - h),
					y = n.leftForLtr(n.xPlus(p, 1), c - h - 2),
					T = $i(r.borderRadius)
				Object.values(T).some(x => x !== 0)
					? (t.beginPath(),
					  (t.fillStyle = o.multiKeyBackground),
					  Nn(t, { x: v, y: b, w: c, h: l, radius: T }),
					  t.fill(),
					  t.stroke(),
					  (t.fillStyle = r.backgroundColor),
					  t.beginPath(),
					  Nn(t, { x: y, y: b + 1, w: c - 2, h: l - 2, radius: T }),
					  t.fill())
					: ((t.fillStyle = o.multiKeyBackground),
					  t.fillRect(v, b, c, l),
					  t.strokeRect(v, b, c, l),
					  (t.fillStyle = r.backgroundColor),
					  t.fillRect(y, b + 1, c - 2, l - 2))
			}
			t.fillStyle = this.labelTextColors[i]
		}
		drawBody(t, e, i) {
			const { body: n } = this,
				{
					bodySpacing: o,
					bodyAlign: r,
					displayColors: a,
					boxHeight: l,
					boxWidth: c,
					boxPadding: h,
				} = i,
				d = lt(i.bodyFont)
			let u = d.lineHeight,
				p = 0
			const f = Os(i.rtl, this.x, this.width),
				b = function (S) {
					e.fillText(S, f.x(t.x + p), t.y + u / 2), (t.y += u + o)
				},
				v = f.textAlign(r)
			let y, T, x, E, C, A, w
			for (
				e.textAlign = r,
					e.textBaseline = 'middle',
					e.font = d.string,
					t.x = ha(this, v, i),
					e.fillStyle = i.bodyColor,
					U(this.beforeBody, b),
					p = a && v !== 'right' ? (r === 'center' ? c / 2 + h : c + 2 + h) : 0,
					E = 0,
					A = n.length;
				E < A;
				++E
			) {
				for (
					y = n[E],
						T = this.labelTextColors[E],
						e.fillStyle = T,
						U(y.before, b),
						x = y.lines,
						a &&
							x.length &&
							(this._drawColorBox(e, t, E, f, i),
							(u = Math.max(d.lineHeight, l))),
						C = 0,
						w = x.length;
					C < w;
					++C
				)
					b(x[C]), (u = d.lineHeight)
				U(y.after, b)
			}
			;(p = 0), (u = d.lineHeight), U(this.afterBody, b), (t.y -= o)
		}
		drawFooter(t, e, i) {
			const n = this.footer,
				o = n.length
			let r, a
			if (o) {
				const l = Os(i.rtl, this.x, this.width)
				for (
					t.x = ha(this, i.footerAlign, i),
						t.y += i.footerMarginTop,
						e.textAlign = l.textAlign(i.footerAlign),
						e.textBaseline = 'middle',
						r = lt(i.footerFont),
						e.fillStyle = i.footerColor,
						e.font = r.string,
						a = 0;
					a < o;
					++a
				)
					e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2),
						(t.y += r.lineHeight + i.footerSpacing)
			}
		}
		drawBackground(t, e, i, n) {
			const { xAlign: o, yAlign: r } = this,
				{ x: a, y: l } = t,
				{ width: c, height: h } = i,
				{
					topLeft: d,
					topRight: u,
					bottomLeft: p,
					bottomRight: f,
				} = $i(n.cornerRadius)
			;(e.fillStyle = n.backgroundColor),
				(e.strokeStyle = n.borderColor),
				(e.lineWidth = n.borderWidth),
				e.beginPath(),
				e.moveTo(a + d, l),
				r === 'top' && this.drawCaret(t, e, i, n),
				e.lineTo(a + c - u, l),
				e.quadraticCurveTo(a + c, l, a + c, l + u),
				r === 'center' && o === 'right' && this.drawCaret(t, e, i, n),
				e.lineTo(a + c, l + h - f),
				e.quadraticCurveTo(a + c, l + h, a + c - f, l + h),
				r === 'bottom' && this.drawCaret(t, e, i, n),
				e.lineTo(a + p, l + h),
				e.quadraticCurveTo(a, l + h, a, l + h - p),
				r === 'center' && o === 'left' && this.drawCaret(t, e, i, n),
				e.lineTo(a, l + d),
				e.quadraticCurveTo(a, l, a + d, l),
				e.closePath(),
				e.fill(),
				n.borderWidth > 0 && e.stroke()
		}
		_updateAnimationTarget(t) {
			const e = this.chart,
				i = this.$animations,
				n = i && i.x,
				o = i && i.y
			if (n || o) {
				const r = to[t.position].call(this, this._active, this._eventPosition)
				if (!r) return
				const a = (this._size = Ag(this, t)),
					l = Object.assign({}, r, this._size),
					c = wg(e, t, l),
					h = kg(t, l, c, e)
				;(n._to !== h.x || o._to !== h.y) &&
					((this.xAlign = c.xAlign),
					(this.yAlign = c.yAlign),
					(this.width = a.width),
					(this.height = a.height),
					(this.caretX = r.x),
					(this.caretY = r.y),
					this._resolveAnimations().update(this, h))
			}
		}
		_willRender() {
			return !!this.opacity
		}
		draw(t) {
			const e = this.options.setContext(this.getContext())
			let i = this.opacity
			if (!i) return
			this._updateAnimationTarget(e)
			const n = { width: this.width, height: this.height },
				o = { x: this.x, y: this.y }
			i = Math.abs(i) < 0.001 ? 0 : i
			const r = pt(e.padding),
				a =
					this.title.length ||
					this.beforeBody.length ||
					this.body.length ||
					this.afterBody.length ||
					this.footer.length
			e.enabled &&
				a &&
				(t.save(),
				(t.globalAlpha = i),
				this.drawBackground(o, t, n, e),
				o_(t, e.textDirection),
				(o.y += r.top),
				this.drawTitle(o, t, e),
				this.drawBody(o, t, e),
				this.drawFooter(o, t, e),
				r_(t, e.textDirection),
				t.restore())
		}
		getActiveElements() {
			return this._active || []
		}
		setActiveElements(t, e) {
			const i = this._active,
				n = t.map(({ datasetIndex: a, index: l }) => {
					const c = this.chart.getDatasetMeta(a)
					if (!c) throw new Error('Cannot find a dataset at index ' + a)
					return { datasetIndex: a, element: c.data[l], index: l }
				}),
				o = !Fr(i, n),
				r = this._positionChanged(n, e)
			;(o || r) &&
				((this._active = n),
				(this._eventPosition = e),
				(this._ignoreReplayEvents = !0),
				this.update(!0))
		}
		handleEvent(t, e, i = !0) {
			if (e && this._ignoreReplayEvents) return !1
			this._ignoreReplayEvents = !1
			const n = this.options,
				o = this._active || [],
				r = this._getActiveElements(t, o, e, i),
				a = this._positionChanged(r, t),
				l = e || !Fr(r, o) || a
			return (
				l &&
					((this._active = r),
					(n.enabled || n.external) &&
						((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
				l
			)
		}
		_getActiveElements(t, e, i, n) {
			const o = this.options
			if (t.type === 'mouseout') return []
			if (!n) return e
			const r = this.chart.getElementsAtEventForMode(t, o.mode, o, i)
			return o.reverse && r.reverse(), r
		}
		_positionChanged(t, e) {
			const { caretX: i, caretY: n, options: o } = this,
				r = to[o.position].call(this, t, e)
			return r !== !1 && (i !== r.x || n !== r.y)
		}
	}
	ih.positioners = to
	var Ig = {
			id: 'tooltip',
			_element: ih,
			positioners: to,
			afterInit(s, t, e) {
				e && (s.tooltip = new ih({ chart: s, options: e }))
			},
			beforeUpdate(s, t, e) {
				s.tooltip && s.tooltip.initialize(e)
			},
			reset(s, t, e) {
				s.tooltip && s.tooltip.initialize(e)
			},
			afterDraw(s) {
				const t = s.tooltip
				if (t && t._willRender()) {
					const e = { tooltip: t }
					if (s.notifyPlugins('beforeTooltipDraw', e) === !1) return
					t.draw(s.ctx), s.notifyPlugins('afterTooltipDraw', e)
				}
			},
			afterEvent(s, t) {
				if (s.tooltip) {
					const e = t.replay
					s.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0)
				}
			},
			defaults: {
				enabled: !0,
				external: null,
				position: 'average',
				backgroundColor: 'rgba(0,0,0,0.8)',
				titleColor: '#fff',
				titleFont: { weight: 'bold' },
				titleSpacing: 2,
				titleMarginBottom: 6,
				titleAlign: 'left',
				bodyColor: '#fff',
				bodySpacing: 2,
				bodyFont: {},
				bodyAlign: 'left',
				footerColor: '#fff',
				footerSpacing: 2,
				footerMarginTop: 6,
				footerFont: { weight: 'bold' },
				footerAlign: 'left',
				padding: 6,
				caretPadding: 2,
				caretSize: 5,
				cornerRadius: 6,
				boxHeight: (s, t) => t.bodyFont.size,
				boxWidth: (s, t) => t.bodyFont.size,
				multiKeyBackground: '#fff',
				displayColors: !0,
				boxPadding: 0,
				borderColor: 'rgba(0,0,0,0)',
				borderWidth: 0,
				animation: { duration: 400, easing: 'easeOutQuart' },
				animations: {
					numbers: {
						type: 'number',
						properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
					},
					opacity: { easing: 'linear', duration: 200 },
				},
				callbacks: {
					beforeTitle: Oe,
					title(s) {
						if (s.length > 0) {
							const t = s[0],
								e = t.chart.data.labels,
								i = e ? e.length : 0
							if (this && this.options && this.options.mode === 'dataset')
								return t.dataset.label || ''
							if (t.label) return t.label
							if (i > 0 && t.dataIndex < i) return e[t.dataIndex]
						}
						return ''
					},
					afterTitle: Oe,
					beforeBody: Oe,
					beforeLabel: Oe,
					label(s) {
						if (this && this.options && this.options.mode === 'dataset')
							return s.label + ': ' + s.formattedValue || s.formattedValue
						let t = s.dataset.label || ''
						t && (t += ': ')
						const e = s.formattedValue
						return H(e) || (t += e), t
					},
					labelColor(s) {
						const e = s.chart
							.getDatasetMeta(s.datasetIndex)
							.controller.getStyle(s.dataIndex)
						return {
							borderColor: e.borderColor,
							backgroundColor: e.backgroundColor,
							borderWidth: e.borderWidth,
							borderDash: e.borderDash,
							borderDashOffset: e.borderDashOffset,
							borderRadius: 0,
						}
					},
					labelTextColor() {
						return this.options.bodyColor
					},
					labelPointStyle(s) {
						const e = s.chart
							.getDatasetMeta(s.datasetIndex)
							.controller.getStyle(s.dataIndex)
						return { pointStyle: e.pointStyle, rotation: e.rotation }
					},
					afterLabel: Oe,
					afterBody: Oe,
					beforeFooter: Oe,
					footer: Oe,
					afterFooter: Oe,
				},
			},
			defaultRoutes: {
				bodyFont: 'font',
				footerFont: 'font',
				titleFont: 'font',
			},
			descriptors: {
				_scriptable: s =>
					s !== 'filter' && s !== 'itemSort' && s !== 'external',
				_indexable: !1,
				callbacks: { _scriptable: !1, _indexable: !1 },
				animation: { _fallback: !1 },
				animations: { _fallback: 'animation' },
			},
			additionalOptionScopes: ['interaction'],
		},
		Dg = Object.freeze({
			__proto__: null,
			Decimation: dg,
			Filler: vg,
			Legend: Eg,
			SubTitle: Cg,
			Title: xg,
			Tooltip: Ig,
		})
	const SM = (s, t, e, i) => (
		typeof t == 'string'
			? ((e = s.push(t) - 1), i.unshift({ index: e, label: t }))
			: isNaN(t) && (e = null),
		e
	)
	function OM(s, t, e, i) {
		const n = s.indexOf(t)
		if (n === -1) return SM(s, t, e, i)
		const o = s.lastIndexOf(t)
		return n !== o ? e : n
	}
	const IM = (s, t) => (s === null ? null : dt(Math.round(s), 0, t))
	class eo extends oi {
		constructor(t) {
			super(t),
				(this._startValue = void 0),
				(this._valueRange = 0),
				(this._addedLabels = [])
		}
		init(t) {
			const e = this._addedLabels
			if (e.length) {
				const i = this.getLabels()
				for (const { index: n, label: o } of e) i[n] === o && i.splice(n, 1)
				this._addedLabels = []
			}
			super.init(t)
		}
		parse(t, e) {
			if (H(t)) return null
			const i = this.getLabels()
			return (
				(e =
					isFinite(e) && i[e] === t ? e : OM(i, t, B(e, t), this._addedLabels)),
				IM(e, i.length - 1)
			)
		}
		determineDataLimits() {
			const { minDefined: t, maxDefined: e } = this.getUserBounds()
			let { min: i, max: n } = this.getMinMax(!0)
			this.options.bounds === 'ticks' &&
				(t || (i = 0), e || (n = this.getLabels().length - 1)),
				(this.min = i),
				(this.max = n)
		}
		buildTicks() {
			const t = this.min,
				e = this.max,
				i = this.options.offset,
				n = []
			let o = this.getLabels()
			;(o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
				(this._valueRange = Math.max(o.length - (i ? 0 : 1), 1)),
				(this._startValue = this.min - (i ? 0.5 : 0))
			for (let r = t; r <= e; r++) n.push({ value: r })
			return n
		}
		getLabelForValue(t) {
			const e = this.getLabels()
			return t >= 0 && t < e.length ? e[t] : t
		}
		configure() {
			super.configure(),
				this.isHorizontal() || (this._reversePixels = !this._reversePixels)
		}
		getPixelForValue(t) {
			return (
				typeof t != 'number' && (t = this.parse(t)),
				t === null
					? NaN
					: this.getPixelForDecimal((t - this._startValue) / this._valueRange)
			)
		}
		getPixelForTick(t) {
			const e = this.ticks
			return t < 0 || t > e.length - 1
				? null
				: this.getPixelForValue(e[t].value)
		}
		getValueForPixel(t) {
			return Math.round(
				this._startValue + this.getDecimalForPixel(t) * this._valueRange
			)
		}
		getBasePixel() {
			return this.bottom
		}
	}
	;(eo.id = 'category'),
		(eo.defaults = { ticks: { callback: eo.prototype.getLabelForValue } })
	function DM(s, t) {
		const e = [],
			{
				bounds: n,
				step: o,
				min: r,
				max: a,
				precision: l,
				count: c,
				maxTicks: h,
				maxDigits: d,
				includeBounds: u,
			} = s,
			p = o || 1,
			f = h - 1,
			{ min: b, max: v } = t,
			y = !H(r),
			T = !H(a),
			x = !H(c),
			E = (v - b) / (d + 1)
		let C = Tf((v - b) / f / p) * p,
			A,
			w,
			S,
			k
		if (C < 1e-14 && !y && !T) return [{ value: b }, { value: v }]
		;(k = Math.ceil(v / C) - Math.floor(b / C)),
			k > f && (C = Tf((k * C) / f / p) * p),
			H(l) || ((A = Math.pow(10, l)), (C = Math.ceil(C * A) / A)),
			n === 'ticks'
				? ((w = Math.floor(b / C) * C), (S = Math.ceil(v / C) * C))
				: ((w = b), (S = v)),
			y && T && o && MO((a - r) / o, C / 1e3)
				? ((k = Math.round(Math.min((a - r) / C, h))),
				  (C = (a - r) / k),
				  (w = r),
				  (S = a))
				: x
				? ((w = y ? r : w), (S = T ? a : S), (k = c - 1), (C = (S - w) / k))
				: ((k = (S - w) / C),
				  In(k, Math.round(k), C / 1e3)
						? (k = Math.round(k))
						: (k = Math.ceil(k)))
		const D = Math.max(xf(C), xf(w))
		;(A = Math.pow(10, H(l) ? D : l)),
			(w = Math.round(w * A) / A),
			(S = Math.round(S * A) / A)
		let I = 0
		for (
			y &&
			(u && w !== r
				? (e.push({ value: r }),
				  w < r && I++,
				  In(Math.round((w + I * C) * A) / A, r, Mg(r, E, s)) && I++)
				: w < r && I++);
			I < k;
			++I
		)
			e.push({ value: Math.round((w + I * C) * A) / A })
		return (
			T && u && S !== a
				? e.length && In(e[e.length - 1].value, a, Mg(a, E, s))
					? (e[e.length - 1].value = a)
					: e.push({ value: a })
				: (!T || S === a) && e.push({ value: S }),
			e
		)
	}
	function Mg(s, t, { horizontal: e, minRotation: i }) {
		const n = se(i),
			o = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
			r = 0.75 * t * ('' + s).length
		return Math.min(t / o, r)
	}
	class da extends oi {
		constructor(t) {
			super(t),
				(this.start = void 0),
				(this.end = void 0),
				(this._startValue = void 0),
				(this._endValue = void 0),
				(this._valueRange = 0)
		}
		parse(t, e) {
			return H(t) ||
				((typeof t == 'number' || t instanceof Number) && !isFinite(+t))
				? null
				: +t
		}
		handleTickRangeOptions() {
			const { beginAtZero: t } = this.options,
				{ minDefined: e, maxDefined: i } = this.getUserBounds()
			let { min: n, max: o } = this
			const r = l => (n = e ? n : l),
				a = l => (o = i ? o : l)
			if (t) {
				const l = Ee(n),
					c = Ee(o)
				l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0)
			}
			if (n === o) {
				let l = 1
				;(o >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) &&
					(l = Math.abs(o * 0.05)),
					a(o + l),
					t || r(n - l)
			}
			;(this.min = n), (this.max = o)
		}
		getTickLimit() {
			const t = this.options.ticks
			let { maxTicksLimit: e, stepSize: i } = t,
				n
			return (
				i
					? ((n = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
					  n > 1e3 &&
							(console.warn(
								`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`
							),
							(n = 1e3)))
					: ((n = this.computeTickLimit()), (e = e || 11)),
				e && (n = Math.min(e, n)),
				n
			)
		}
		computeTickLimit() {
			return Number.POSITIVE_INFINITY
		}
		buildTicks() {
			const t = this.options,
				e = t.ticks
			let i = this.getTickLimit()
			i = Math.max(2, i)
			const n = {
					maxTicks: i,
					bounds: t.bounds,
					min: t.min,
					max: t.max,
					precision: e.precision,
					step: e.stepSize,
					count: e.count,
					maxDigits: this._maxDigits(),
					horizontal: this.isHorizontal(),
					minRotation: e.minRotation || 0,
					includeBounds: e.includeBounds !== !1,
				},
				o = this._range || this,
				r = DM(n, o)
			return (
				t.bounds === 'ticks' && Ef(r, this, 'value'),
				t.reverse
					? (r.reverse(), (this.start = this.max), (this.end = this.min))
					: ((this.start = this.min), (this.end = this.max)),
				r
			)
		}
		configure() {
			const t = this.ticks
			let e = this.min,
				i = this.max
			if ((super.configure(), this.options.offset && t.length)) {
				const n = (i - e) / Math.max(t.length - 1, 1) / 2
				;(e -= n), (i += n)
			}
			;(this._startValue = e), (this._endValue = i), (this._valueRange = i - e)
		}
		getLabelForValue(t) {
			return Bn(t, this.chart.options.locale, this.options.ticks.format)
		}
	}
	class ua extends da {
		determineDataLimits() {
			const { min: t, max: e } = this.getMinMax(!0)
			;(this.min = rt(t) ? t : 0),
				(this.max = rt(e) ? e : 1),
				this.handleTickRangeOptions()
		}
		computeTickLimit() {
			const t = this.isHorizontal(),
				e = t ? this.width : this.height,
				i = se(this.options.ticks.minRotation),
				n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
				o = this._resolveTickFontOptions(0)
			return Math.ceil(e / Math.min(40, o.lineHeight / n))
		}
		getPixelForValue(t) {
			return t === null
				? NaN
				: this.getPixelForDecimal((t - this._startValue) / this._valueRange)
		}
		getValueForPixel(t) {
			return this._startValue + this.getDecimalForPixel(t) * this._valueRange
		}
	}
	;(ua.id = 'linear'),
		(ua.defaults = { ticks: { callback: Yn.formatters.numeric } })
	function Lg(s) {
		return s / Math.pow(10, Math.floor(Yt(s))) === 1
	}
	function MM(s, t) {
		const e = Math.floor(Yt(t.max)),
			i = Math.ceil(t.max / Math.pow(10, e)),
			n = []
		let o = zt(s.min, Math.pow(10, Math.floor(Yt(t.min)))),
			r = Math.floor(Yt(o)),
			a = Math.floor(o / Math.pow(10, r)),
			l = r < 0 ? Math.pow(10, Math.abs(r)) : 1
		do
			n.push({ value: o, major: Lg(o) }),
				++a,
				a === 10 && ((a = 1), ++r, (l = r >= 0 ? 1 : l)),
				(o = Math.round(a * Math.pow(10, r) * l) / l)
		while (r < e || (r === e && a < i))
		const c = zt(s.max, o)
		return n.push({ value: c, major: Lg(o) }), n
	}
	class pa extends oi {
		constructor(t) {
			super(t),
				(this.start = void 0),
				(this.end = void 0),
				(this._startValue = void 0),
				(this._valueRange = 0)
		}
		parse(t, e) {
			const i = da.prototype.parse.apply(this, [t, e])
			if (i === 0) {
				this._zero = !0
				return
			}
			return rt(i) && i > 0 ? i : null
		}
		determineDataLimits() {
			const { min: t, max: e } = this.getMinMax(!0)
			;(this.min = rt(t) ? Math.max(0, t) : null),
				(this.max = rt(e) ? Math.max(0, e) : null),
				this.options.beginAtZero && (this._zero = !0),
				this.handleTickRangeOptions()
		}
		handleTickRangeOptions() {
			const { minDefined: t, maxDefined: e } = this.getUserBounds()
			let i = this.min,
				n = this.max
			const o = l => (i = t ? i : l),
				r = l => (n = e ? n : l),
				a = (l, c) => Math.pow(10, Math.floor(Yt(l)) + c)
			i === n && (i <= 0 ? (o(1), r(10)) : (o(a(i, -1)), r(a(n, 1)))),
				i <= 0 && o(a(n, -1)),
				n <= 0 && r(a(i, 1)),
				this._zero &&
					this.min !== this._suggestedMin &&
					i === a(this.min, 0) &&
					o(a(i, -1)),
				(this.min = i),
				(this.max = n)
		}
		buildTicks() {
			const t = this.options,
				e = { min: this._userMin, max: this._userMax },
				i = MM(e, this)
			return (
				t.bounds === 'ticks' && Ef(i, this, 'value'),
				t.reverse
					? (i.reverse(), (this.start = this.max), (this.end = this.min))
					: ((this.start = this.min), (this.end = this.max)),
				i
			)
		}
		getLabelForValue(t) {
			return t === void 0
				? '0'
				: Bn(t, this.chart.options.locale, this.options.ticks.format)
		}
		configure() {
			const t = this.min
			super.configure(),
				(this._startValue = Yt(t)),
				(this._valueRange = Yt(this.max) - Yt(t))
		}
		getPixelForValue(t) {
			return (
				(t === void 0 || t === 0) && (t = this.min),
				t === null || isNaN(t)
					? NaN
					: this.getPixelForDecimal(
							t === this.min ? 0 : (Yt(t) - this._startValue) / this._valueRange
					  )
			)
		}
		getValueForPixel(t) {
			const e = this.getDecimalForPixel(t)
			return Math.pow(10, this._startValue + e * this._valueRange)
		}
	}
	;(pa.id = 'logarithmic'),
		(pa.defaults = {
			ticks: { callback: Yn.formatters.logarithmic, major: { enabled: !0 } },
		})
	function sh(s) {
		const t = s.ticks
		if (t.display && s.display) {
			const e = pt(t.backdropPadding)
			return B(t.font && t.font.size, F.font.size) + e.height
		}
		return 0
	}
	function LM(s, t, e) {
		return (
			(e = Q(e) ? e : [e]),
			{ w: hI(s, t.string, e), h: e.length * t.lineHeight }
		)
	}
	function $g(s, t, e, i, n) {
		return s === i || s === n
			? { start: t - e / 2, end: t + e / 2 }
			: s < i || s > n
			? { start: t - e, end: t }
			: { start: t, end: t + e }
	}
	function $M(s) {
		const t = {
				l: s.left + s._padding.left,
				r: s.right - s._padding.right,
				t: s.top + s._padding.top,
				b: s.bottom - s._padding.bottom,
			},
			e = Object.assign({}, t),
			i = [],
			n = [],
			o = s._pointLabels.length,
			r = s.options.pointLabels,
			a = r.centerPointLabels ? it / o : 0
		for (let l = 0; l < o; l++) {
			const c = r.setContext(s.getPointLabelContext(l))
			n[l] = c.padding
			const h = s.getPointPosition(l, s.drawingArea + n[l], a),
				d = lt(c.font),
				u = LM(s.ctx, d, s._pointLabels[l])
			i[l] = u
			const p = Vt(s.getIndexAngle(l) + a),
				f = Math.round(mc(p)),
				b = $g(f, h.x, u.w, 0, 180),
				v = $g(f, h.y, u.h, 90, 270)
			RM(e, t, p, b, v)
		}
		s.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
			(s._pointLabelItems = PM(s, i, n))
	}
	function RM(s, t, e, i, n) {
		const o = Math.abs(Math.sin(e)),
			r = Math.abs(Math.cos(e))
		let a = 0,
			l = 0
		i.start < t.l
			? ((a = (t.l - i.start) / o), (s.l = Math.min(s.l, t.l - a)))
			: i.end > t.r &&
			  ((a = (i.end - t.r) / o), (s.r = Math.max(s.r, t.r + a))),
			n.start < t.t
				? ((l = (t.t - n.start) / r), (s.t = Math.min(s.t, t.t - l)))
				: n.end > t.b &&
				  ((l = (n.end - t.b) / r), (s.b = Math.max(s.b, t.b + l)))
	}
	function PM(s, t, e) {
		const i = [],
			n = s._pointLabels.length,
			o = s.options,
			r = sh(o) / 2,
			a = s.drawingArea,
			l = o.pointLabels.centerPointLabels ? it / n : 0
		for (let c = 0; c < n; c++) {
			const h = s.getPointPosition(c, a + r + e[c], l),
				d = Math.round(mc(Vt(h.angle + nt))),
				u = t[c],
				p = HM(h.y, u.h, d),
				f = NM(d),
				b = BM(h.x, u.w, f)
			i.push({
				x: h.x,
				y: p,
				textAlign: f,
				left: b,
				top: p,
				right: b + u.w,
				bottom: p + u.h,
			})
		}
		return i
	}
	function NM(s) {
		return s === 0 || s === 180 ? 'center' : s < 180 ? 'left' : 'right'
	}
	function BM(s, t, e) {
		return e === 'right' ? (s -= t) : e === 'center' && (s -= t / 2), s
	}
	function HM(s, t, e) {
		return (
			e === 90 || e === 270 ? (s -= t / 2) : (e > 270 || e < 90) && (s -= t), s
		)
	}
	function VM(s, t) {
		const {
			ctx: e,
			options: { pointLabels: i },
		} = s
		for (let n = t - 1; n >= 0; n--) {
			const o = i.setContext(s.getPointLabelContext(n)),
				r = lt(o.font),
				{
					x: a,
					y: l,
					textAlign: c,
					left: h,
					top: d,
					right: u,
					bottom: p,
				} = s._pointLabelItems[n],
				{ backdropColor: f } = o
			if (!H(f)) {
				const b = $i(o.borderRadius),
					v = pt(o.backdropPadding)
				e.fillStyle = f
				const y = h - v.left,
					T = d - v.top,
					x = u - h + v.width,
					E = p - d + v.height
				Object.values(b).some(C => C !== 0)
					? (e.beginPath(),
					  Nn(e, { x: y, y: T, w: x, h: E, radius: b }),
					  e.fill())
					: e.fillRect(y, T, x, E)
			}
			Li(e, s._pointLabels[n], a, l + r.lineHeight / 2, r, {
				color: o.color,
				textAlign: c,
				textBaseline: 'middle',
			})
		}
	}
	function Rg(s, t, e, i) {
		const { ctx: n } = s
		if (e) n.arc(s.xCenter, s.yCenter, t, 0, q)
		else {
			let o = s.getPointPosition(0, t)
			n.moveTo(o.x, o.y)
			for (let r = 1; r < i; r++)
				(o = s.getPointPosition(r, t)), n.lineTo(o.x, o.y)
		}
	}
	function FM(s, t, e, i) {
		const n = s.ctx,
			o = t.circular,
			{ color: r, lineWidth: a } = t
		;(!o && !i) ||
			!r ||
			!a ||
			e < 0 ||
			(n.save(),
			(n.strokeStyle = r),
			(n.lineWidth = a),
			n.setLineDash(t.borderDash),
			(n.lineDashOffset = t.borderDashOffset),
			n.beginPath(),
			Rg(s, e, o, i),
			n.closePath(),
			n.stroke(),
			n.restore())
	}
	function WM(s, t, e) {
		return ni(s, { label: e, index: t, type: 'pointLabel' })
	}
	class $s extends da {
		constructor(t) {
			super(t),
				(this.xCenter = void 0),
				(this.yCenter = void 0),
				(this.drawingArea = void 0),
				(this._pointLabels = []),
				(this._pointLabelItems = [])
		}
		setDimensions() {
			const t = (this._padding = pt(sh(this.options) / 2)),
				e = (this.width = this.maxWidth - t.width),
				i = (this.height = this.maxHeight - t.height)
			;(this.xCenter = Math.floor(this.left + e / 2 + t.left)),
				(this.yCenter = Math.floor(this.top + i / 2 + t.top)),
				(this.drawingArea = Math.floor(Math.min(e, i) / 2))
		}
		determineDataLimits() {
			const { min: t, max: e } = this.getMinMax(!1)
			;(this.min = rt(t) && !isNaN(t) ? t : 0),
				(this.max = rt(e) && !isNaN(e) ? e : 0),
				this.handleTickRangeOptions()
		}
		computeTickLimit() {
			return Math.ceil(this.drawingArea / sh(this.options))
		}
		generateTickLabels(t) {
			da.prototype.generateTickLabels.call(this, t),
				(this._pointLabels = this.getLabels()
					.map((e, i) => {
						const n = G(this.options.pointLabels.callback, [e, i], this)
						return n || n === 0 ? n : ''
					})
					.filter((e, i) => this.chart.getDataVisibility(i)))
		}
		fit() {
			const t = this.options
			t.display && t.pointLabels.display
				? $M(this)
				: this.setCenterPoint(0, 0, 0, 0)
		}
		setCenterPoint(t, e, i, n) {
			;(this.xCenter += Math.floor((t - e) / 2)),
				(this.yCenter += Math.floor((i - n) / 2)),
				(this.drawingArea -= Math.min(
					this.drawingArea / 2,
					Math.max(t, e, i, n)
				))
		}
		getIndexAngle(t) {
			const e = q / (this._pointLabels.length || 1),
				i = this.options.startAngle || 0
			return Vt(t * e + se(i))
		}
		getDistanceFromCenterForValue(t) {
			if (H(t)) return NaN
			const e = this.drawingArea / (this.max - this.min)
			return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
		}
		getValueForDistanceFromCenter(t) {
			if (H(t)) return NaN
			const e = t / (this.drawingArea / (this.max - this.min))
			return this.options.reverse ? this.max - e : this.min + e
		}
		getPointLabelContext(t) {
			const e = this._pointLabels || []
			if (t >= 0 && t < e.length) {
				const i = e[t]
				return WM(this.getContext(), t, i)
			}
		}
		getPointPosition(t, e, i = 0) {
			const n = this.getIndexAngle(t) - nt + i
			return {
				x: Math.cos(n) * e + this.xCenter,
				y: Math.sin(n) * e + this.yCenter,
				angle: n,
			}
		}
		getPointPositionForValue(t, e) {
			return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
		}
		getBasePosition(t) {
			return this.getPointPositionForValue(t || 0, this.getBaseValue())
		}
		getPointLabelPosition(t) {
			const { left: e, top: i, right: n, bottom: o } = this._pointLabelItems[t]
			return { left: e, top: i, right: n, bottom: o }
		}
		drawBackground() {
			const {
				backgroundColor: t,
				grid: { circular: e },
			} = this.options
			if (t) {
				const i = this.ctx
				i.save(),
					i.beginPath(),
					Rg(
						this,
						this.getDistanceFromCenterForValue(this._endValue),
						e,
						this._pointLabels.length
					),
					i.closePath(),
					(i.fillStyle = t),
					i.fill(),
					i.restore()
			}
		}
		drawGrid() {
			const t = this.ctx,
				e = this.options,
				{ angleLines: i, grid: n } = e,
				o = this._pointLabels.length
			let r, a, l
			if (
				(e.pointLabels.display && VM(this, o),
				n.display &&
					this.ticks.forEach((c, h) => {
						if (h !== 0) {
							a = this.getDistanceFromCenterForValue(c.value)
							const d = n.setContext(this.getContext(h - 1))
							FM(this, d, a, o)
						}
					}),
				i.display)
			) {
				for (t.save(), r = o - 1; r >= 0; r--) {
					const c = i.setContext(this.getPointLabelContext(r)),
						{ color: h, lineWidth: d } = c
					!d ||
						!h ||
						((t.lineWidth = d),
						(t.strokeStyle = h),
						t.setLineDash(c.borderDash),
						(t.lineDashOffset = c.borderDashOffset),
						(a = this.getDistanceFromCenterForValue(
							e.ticks.reverse ? this.min : this.max
						)),
						(l = this.getPointPosition(r, a)),
						t.beginPath(),
						t.moveTo(this.xCenter, this.yCenter),
						t.lineTo(l.x, l.y),
						t.stroke())
				}
				t.restore()
			}
		}
		drawBorder() {}
		drawLabels() {
			const t = this.ctx,
				e = this.options,
				i = e.ticks
			if (!i.display) return
			const n = this.getIndexAngle(0)
			let o, r
			t.save(),
				t.translate(this.xCenter, this.yCenter),
				t.rotate(n),
				(t.textAlign = 'center'),
				(t.textBaseline = 'middle'),
				this.ticks.forEach((a, l) => {
					if (l === 0 && !e.reverse) return
					const c = i.setContext(this.getContext(l)),
						h = lt(c.font)
					if (
						((o = this.getDistanceFromCenterForValue(this.ticks[l].value)),
						c.showLabelBackdrop)
					) {
						;(t.font = h.string),
							(r = t.measureText(a.label).width),
							(t.fillStyle = c.backdropColor)
						const d = pt(c.backdropPadding)
						t.fillRect(
							-r / 2 - d.left,
							-o - h.size / 2 - d.top,
							r + d.width,
							h.size + d.height
						)
					}
					Li(t, a.label, 0, -o, h, { color: c.color })
				}),
				t.restore()
		}
		drawTitle() {}
	}
	;($s.id = 'radialLinear'),
		($s.defaults = {
			display: !0,
			animate: !0,
			position: 'chartArea',
			angleLines: {
				display: !0,
				lineWidth: 1,
				borderDash: [],
				borderDashOffset: 0,
			},
			grid: { circular: !1 },
			startAngle: 0,
			ticks: { showLabelBackdrop: !0, callback: Yn.formatters.numeric },
			pointLabels: {
				backdropColor: void 0,
				backdropPadding: 2,
				display: !0,
				font: { size: 10 },
				callback(s) {
					return s
				},
				padding: 5,
				centerPointLabels: !1,
			},
		}),
		($s.defaultRoutes = {
			'angleLines.color': 'borderColor',
			'pointLabels.color': 'color',
			'ticks.color': 'color',
		}),
		($s.descriptors = { angleLines: { _fallback: 'grid' } })
	const fa = {
			millisecond: { common: !0, size: 1, steps: 1e3 },
			second: { common: !0, size: 1e3, steps: 60 },
			minute: { common: !0, size: 6e4, steps: 60 },
			hour: { common: !0, size: 36e5, steps: 24 },
			day: { common: !0, size: 864e5, steps: 30 },
			week: { common: !1, size: 6048e5, steps: 4 },
			month: { common: !0, size: 2628e6, steps: 12 },
			quarter: { common: !1, size: 7884e6, steps: 4 },
			year: { common: !0, size: 3154e7 },
		},
		It = Object.keys(fa)
	function zM(s, t) {
		return s - t
	}
	function Pg(s, t) {
		if (H(t)) return null
		const e = s._adapter,
			{ parser: i, round: n, isoWeekday: o } = s._parseOpts
		let r = t
		return (
			typeof i == 'function' && (r = i(r)),
			rt(r) || (r = typeof i == 'string' ? e.parse(r, i) : e.parse(r)),
			r === null
				? null
				: (n &&
						(r =
							n === 'week' && (As(o) || o === !0)
								? e.startOf(r, 'isoWeek', o)
								: e.startOf(r, n)),
				  +r)
		)
	}
	function Ng(s, t, e, i) {
		const n = It.length
		for (let o = It.indexOf(s); o < n - 1; ++o) {
			const r = fa[It[o]],
				a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER
			if (r.common && Math.ceil((e - t) / (a * r.size)) <= i) return It[o]
		}
		return It[n - 1]
	}
	function jM(s, t, e, i, n) {
		for (let o = It.length - 1; o >= It.indexOf(e); o--) {
			const r = It[o]
			if (fa[r].common && s._adapter.diff(n, i, r) >= t - 1) return r
		}
		return It[e ? It.indexOf(e) : 0]
	}
	function YM(s) {
		for (let t = It.indexOf(s) + 1, e = It.length; t < e; ++t)
			if (fa[It[t]].common) return It[t]
	}
	function Bg(s, t, e) {
		if (!e) s[t] = !0
		else if (e.length) {
			const { lo: i, hi: n } = vc(e, t),
				o = e[i] >= t ? e[i] : e[n]
			s[o] = !0
		}
	}
	function KM(s, t, e, i) {
		const n = s._adapter,
			o = +n.startOf(t[0].value, i),
			r = t[t.length - 1].value
		let a, l
		for (a = o; a <= r; a = +n.add(a, 1, i))
			(l = e[a]), l >= 0 && (t[l].major = !0)
		return t
	}
	function Hg(s, t, e) {
		const i = [],
			n = {},
			o = t.length
		let r, a
		for (r = 0; r < o; ++r)
			(a = t[r]), (n[a] = r), i.push({ value: a, major: !1 })
		return o === 0 || !e ? i : KM(s, i, n, e)
	}
	class Rs extends oi {
		constructor(t) {
			super(t),
				(this._cache = { data: [], labels: [], all: [] }),
				(this._unit = 'day'),
				(this._majorUnit = void 0),
				(this._offsets = {}),
				(this._normalized = !1),
				(this._parseOpts = void 0)
		}
		init(t, e) {
			const i = t.time || (t.time = {}),
				n = (this._adapter = new D_._date(t.adapters.date))
			n.init(e),
				Sn(i.displayFormats, n.formats()),
				(this._parseOpts = {
					parser: i.parser,
					round: i.round,
					isoWeekday: i.isoWeekday,
				}),
				super.init(t),
				(this._normalized = e.normalized)
		}
		parse(t, e) {
			return t === void 0 ? null : Pg(this, t)
		}
		beforeLayout() {
			super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] })
		}
		determineDataLimits() {
			const t = this.options,
				e = this._adapter,
				i = t.time.unit || 'day'
			let {
				min: n,
				max: o,
				minDefined: r,
				maxDefined: a,
			} = this.getUserBounds()
			function l(c) {
				!r && !isNaN(c.min) && (n = Math.min(n, c.min)),
					!a && !isNaN(c.max) && (o = Math.max(o, c.max))
			}
			;(!r || !a) &&
				(l(this._getLabelBounds()),
				(t.bounds !== 'ticks' || t.ticks.source !== 'labels') &&
					l(this.getMinMax(!1))),
				(n = rt(n) && !isNaN(n) ? n : +e.startOf(Date.now(), i)),
				(o = rt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1),
				(this.min = Math.min(n, o - 1)),
				(this.max = Math.max(n + 1, o))
		}
		_getLabelBounds() {
			const t = this.getLabelTimestamps()
			let e = Number.POSITIVE_INFINITY,
				i = Number.NEGATIVE_INFINITY
			return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
		}
		buildTicks() {
			const t = this.options,
				e = t.time,
				i = t.ticks,
				n = i.source === 'labels' ? this.getLabelTimestamps() : this._generate()
			t.bounds === 'ticks' &&
				n.length &&
				((this.min = this._userMin || n[0]),
				(this.max = this._userMax || n[n.length - 1]))
			const o = this.min,
				r = this.max,
				a = PO(n, o, r)
			return (
				(this._unit =
					e.unit ||
					(i.autoSkip
						? Ng(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
						: jM(this, a.length, e.minUnit, this.min, this.max))),
				(this._majorUnit =
					!i.major.enabled || this._unit === 'year' ? void 0 : YM(this._unit)),
				this.initOffsets(n),
				t.reverse && a.reverse(),
				Hg(this, a, this._majorUnit)
			)
		}
		afterAutoSkip() {
			this.options.offsetAfterAutoskip &&
				this.initOffsets(this.ticks.map(t => +t.value))
		}
		initOffsets(t) {
			let e = 0,
				i = 0,
				n,
				o
			this.options.offset &&
				t.length &&
				((n = this.getDecimalForValue(t[0])),
				t.length === 1
					? (e = 1 - n)
					: (e = (this.getDecimalForValue(t[1]) - n) / 2),
				(o = this.getDecimalForValue(t[t.length - 1])),
				t.length === 1
					? (i = o)
					: (i = (o - this.getDecimalForValue(t[t.length - 2])) / 2))
			const r = t.length < 3 ? 0.5 : 0.25
			;(e = dt(e, 0, r)),
				(i = dt(i, 0, r)),
				(this._offsets = { start: e, end: i, factor: 1 / (e + 1 + i) })
		}
		_generate() {
			const t = this._adapter,
				e = this.min,
				i = this.max,
				n = this.options,
				o = n.time,
				r = o.unit || Ng(o.minUnit, e, i, this._getLabelCapacity(e)),
				a = B(o.stepSize, 1),
				l = r === 'week' ? o.isoWeekday : !1,
				c = As(l) || l === !0,
				h = {}
			let d = e,
				u,
				p
			if (
				(c && (d = +t.startOf(d, 'isoWeek', l)),
				(d = +t.startOf(d, c ? 'day' : r)),
				t.diff(i, e, r) > 1e5 * a)
			)
				throw new Error(
					e + ' and ' + i + ' are too far apart with stepSize of ' + a + ' ' + r
				)
			const f = n.ticks.source === 'data' && this.getDataTimestamps()
			for (u = d, p = 0; u < i; u = +t.add(u, a, r), p++) Bg(h, u, f)
			return (
				(u === i || n.bounds === 'ticks' || p === 1) && Bg(h, u, f),
				Object.keys(h)
					.sort((b, v) => b - v)
					.map(b => +b)
			)
		}
		getLabelForValue(t) {
			const e = this._adapter,
				i = this.options.time
			return i.tooltipFormat
				? e.format(t, i.tooltipFormat)
				: e.format(t, i.displayFormats.datetime)
		}
		_tickFormatFunction(t, e, i, n) {
			const o = this.options,
				r = o.time.displayFormats,
				a = this._unit,
				l = this._majorUnit,
				c = a && r[a],
				h = l && r[l],
				d = i[e],
				u = l && h && d && d.major,
				p = this._adapter.format(t, n || (u ? h : c)),
				f = o.ticks.callback
			return f ? G(f, [p, e, i], this) : p
		}
		generateTickLabels(t) {
			let e, i, n
			for (e = 0, i = t.length; e < i; ++e)
				(n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t))
		}
		getDecimalForValue(t) {
			return t === null ? NaN : (t - this.min) / (this.max - this.min)
		}
		getPixelForValue(t) {
			const e = this._offsets,
				i = this.getDecimalForValue(t)
			return this.getPixelForDecimal((e.start + i) * e.factor)
		}
		getValueForPixel(t) {
			const e = this._offsets,
				i = this.getDecimalForPixel(t) / e.factor - e.end
			return this.min + i * (this.max - this.min)
		}
		_getLabelSize(t) {
			const e = this.options.ticks,
				i = this.ctx.measureText(t).width,
				n = se(this.isHorizontal() ? e.maxRotation : e.minRotation),
				o = Math.cos(n),
				r = Math.sin(n),
				a = this._resolveTickFontOptions(0).size
			return { w: i * o + a * r, h: i * r + a * o }
		}
		_getLabelCapacity(t) {
			const e = this.options.time,
				i = e.displayFormats,
				n = i[e.unit] || i.millisecond,
				o = this._tickFormatFunction(t, 0, Hg(this, [t], this._majorUnit), n),
				r = this._getLabelSize(o),
				a =
					Math.floor(
						this.isHorizontal() ? this.width / r.w : this.height / r.h
					) - 1
			return a > 0 ? a : 1
		}
		getDataTimestamps() {
			let t = this._cache.data || [],
				e,
				i
			if (t.length) return t
			const n = this.getMatchingVisibleMetas()
			if (this._normalized && n.length)
				return (this._cache.data = n[0].controller.getAllParsedValues(this))
			for (e = 0, i = n.length; e < i; ++e)
				t = t.concat(n[e].controller.getAllParsedValues(this))
			return (this._cache.data = this.normalize(t))
		}
		getLabelTimestamps() {
			const t = this._cache.labels || []
			let e, i
			if (t.length) return t
			const n = this.getLabels()
			for (e = 0, i = n.length; e < i; ++e) t.push(Pg(this, n[e]))
			return (this._cache.labels = this._normalized ? t : this.normalize(t))
		}
		normalize(t) {
			return kf(t.sort(zM))
		}
	}
	;(Rs.id = 'time'),
		(Rs.defaults = {
			bounds: 'data',
			adapters: {},
			time: {
				parser: !1,
				unit: !1,
				round: !1,
				isoWeekday: !1,
				minUnit: 'millisecond',
				displayFormats: {},
			},
			ticks: { source: 'auto', major: { enabled: !1 } },
		})
	function _a(s, t, e) {
		let i = 0,
			n = s.length - 1,
			o,
			r,
			a,
			l
		e
			? (t >= s[i].pos && t <= s[n].pos && ({ lo: i, hi: n } = De(s, 'pos', t)),
			  ({ pos: o, time: a } = s[i]),
			  ({ pos: r, time: l } = s[n]))
			: (t >= s[i].time &&
					t <= s[n].time &&
					({ lo: i, hi: n } = De(s, 'time', t)),
			  ({ time: o, pos: a } = s[i]),
			  ({ time: r, pos: l } = s[n]))
		const c = r - o
		return c ? a + ((l - a) * (t - o)) / c : a
	}
	class ga extends Rs {
		constructor(t) {
			super(t),
				(this._table = []),
				(this._minPos = void 0),
				(this._tableRange = void 0)
		}
		initOffsets() {
			const t = this._getTimestampsForTable(),
				e = (this._table = this.buildLookupTable(t))
			;(this._minPos = _a(e, this.min)),
				(this._tableRange = _a(e, this.max) - this._minPos),
				super.initOffsets(t)
		}
		buildLookupTable(t) {
			const { min: e, max: i } = this,
				n = [],
				o = []
			let r, a, l, c, h
			for (r = 0, a = t.length; r < a; ++r)
				(c = t[r]), c >= e && c <= i && n.push(c)
			if (n.length < 2)
				return [
					{ time: e, pos: 0 },
					{ time: i, pos: 1 },
				]
			for (r = 0, a = n.length; r < a; ++r)
				(h = n[r + 1]),
					(l = n[r - 1]),
					(c = n[r]),
					Math.round((h + l) / 2) !== c && o.push({ time: c, pos: r / (a - 1) })
			return o
		}
		_getTimestampsForTable() {
			let t = this._cache.all || []
			if (t.length) return t
			const e = this.getDataTimestamps(),
				i = this.getLabelTimestamps()
			return (
				e.length && i.length
					? (t = this.normalize(e.concat(i)))
					: (t = e.length ? e : i),
				(t = this._cache.all = t),
				t
			)
		}
		getDecimalForValue(t) {
			return (_a(this._table, t) - this._minPos) / this._tableRange
		}
		getValueForPixel(t) {
			const e = this._offsets,
				i = this.getDecimalForPixel(t) / e.factor - e.end
			return _a(this._table, i * this._tableRange + this._minPos, !0)
		}
	}
	;(ga.id = 'timeseries'), (ga.defaults = Rs.defaults)
	var Vg = Object.freeze({
		__proto__: null,
		CategoryScale: eo,
		LinearScale: ua,
		LogarithmicScale: pa,
		RadialLinearScale: $s,
		TimeScale: Rs,
		TimeSeriesScale: ga,
	})
	const UM = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				Animation: f_,
				Animations: Pc,
				ArcElement: Ds,
				BarController: Vn,
				BarElement: Ls,
				BasePlatform: zc,
				BasicPlatform: H_,
				BubbleController: Fn,
				CategoryScale: eo,
				Chart: Uc,
				DatasetController: Ut,
				Decimation: dg,
				DomPlatform: j_,
				DoughnutController: Bi,
				Element: Xt,
				Filler: vg,
				Interaction: L_,
				Legend: Eg,
				LineController: Wn,
				LineElement: Le,
				LinearScale: ua,
				LogarithmicScale: pa,
				PieController: ea,
				PointElement: Ms,
				PolarAreaController: zn,
				RadarController: jn,
				RadialLinearScale: $s,
				Scale: oi,
				ScatterController: Un,
				SubTitle: Cg,
				Ticks: Yn,
				TimeScale: Rs,
				TimeSeriesScale: ga,
				Title: xg,
				Tooltip: Ig,
				_adapters: D_,
				_detectPlatform: Y_,
				animator: xe,
				controllers: I_,
				defaults: F,
				elements: lg,
				layouts: ft,
				plugins: Dg,
				registerables: [I_, lg, Dg, Vg],
				registry: ne,
				scales: Vg,
			},
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	)
	/*!
	 * chartjs-plugin-datalabels v2.2.0
	 * https://chartjs-plugin-datalabels.netlify.app
	 * (c) 2017-2022 chartjs-plugin-datalabels contributors
	 * Released under the MIT license
	 */ var Fg = (function () {
			if (typeof window < 'u') {
				if (window.devicePixelRatio) return window.devicePixelRatio
				var s = window.screen
				if (s) return (s.deviceXDPI || 1) / (s.logicalXDPI || 1)
			}
			return 1
		})(),
		io = {
			toTextLines: function (s) {
				var t = [],
					e
				for (s = [].concat(s); s.length; )
					(e = s.pop()),
						typeof e == 'string'
							? t.unshift.apply(
									t,
									e.split(`
`)
							  )
							: Array.isArray(e)
							? s.push.apply(s, e)
							: H(s) || t.unshift('' + e)
				return t
			},
			textSize: function (s, t, e) {
				var i = [].concat(t),
					n = i.length,
					o = s.font,
					r = 0,
					a
				for (s.font = e.string, a = 0; a < n; ++a)
					r = Math.max(s.measureText(i[a]).width, r)
				return (s.font = o), { height: n * e.lineHeight, width: r }
			},
			bound: function (s, t, e) {
				return Math.max(s, Math.min(t, e))
			},
			arrayDiff: function (s, t) {
				var e = s.slice(),
					i = [],
					n,
					o,
					r,
					a
				for (n = 0, r = t.length; n < r; ++n)
					(a = t[n]),
						(o = e.indexOf(a)),
						o === -1 ? i.push([a, 1]) : e.splice(o, 1)
				for (n = 0, r = e.length; n < r; ++n) i.push([e[n], -1])
				return i
			},
			rasterize: function (s) {
				return Math.round(s * Fg) / Fg
			},
		}
	function nh(s, t) {
		var e = t.x,
			i = t.y
		if (e === null) return { x: 0, y: -1 }
		if (i === null) return { x: 1, y: 0 }
		var n = s.x - e,
			o = s.y - i,
			r = Math.sqrt(n * n + o * o)
		return { x: r ? n / r : 0, y: r ? o / r : -1 }
	}
	function XM(s, t, e, i, n) {
		switch (n) {
			case 'center':
				e = i = 0
				break
			case 'bottom':
				;(e = 0), (i = 1)
				break
			case 'right':
				;(e = 1), (i = 0)
				break
			case 'left':
				;(e = -1), (i = 0)
				break
			case 'top':
				;(e = 0), (i = -1)
				break
			case 'start':
				;(e = -e), (i = -i)
				break
			case 'end':
				break
			default:
				;(n *= Math.PI / 180), (e = Math.cos(n)), (i = Math.sin(n))
				break
		}
		return { x: s, y: t, vx: e, vy: i }
	}
	var GM = 0,
		Wg = 1,
		zg = 2,
		jg = 4,
		Yg = 8
	function ma(s, t, e) {
		var i = GM
		return (
			s < e.left ? (i |= Wg) : s > e.right && (i |= zg),
			t < e.top ? (i |= Yg) : t > e.bottom && (i |= jg),
			i
		)
	}
	function qM(s, t) {
		for (
			var e = s.x0,
				i = s.y0,
				n = s.x1,
				o = s.y1,
				r = ma(e, i, t),
				a = ma(n, o, t),
				l,
				c,
				h;
			!(!(r | a) || r & a);

		)
			(l = r || a),
				l & Yg
					? ((c = e + ((n - e) * (t.top - i)) / (o - i)), (h = t.top))
					: l & jg
					? ((c = e + ((n - e) * (t.bottom - i)) / (o - i)), (h = t.bottom))
					: l & zg
					? ((h = i + ((o - i) * (t.right - e)) / (n - e)), (c = t.right))
					: l & Wg &&
					  ((h = i + ((o - i) * (t.left - e)) / (n - e)), (c = t.left)),
				l === r
					? ((e = c), (i = h), (r = ma(e, i, t)))
					: ((n = c), (o = h), (a = ma(n, o, t)))
		return { x0: e, x1: n, y0: i, y1: o }
	}
	function ba(s, t) {
		var e = t.anchor,
			i = s,
			n,
			o
		return (
			t.clamp && (i = qM(i, t.area)),
			e === 'start'
				? ((n = i.x0), (o = i.y0))
				: e === 'end'
				? ((n = i.x1), (o = i.y1))
				: ((n = (i.x0 + i.x1) / 2), (o = (i.y0 + i.y1) / 2)),
			XM(n, o, s.vx, s.vy, t.align)
		)
	}
	var va = {
			arc: function (s, t) {
				var e = (s.startAngle + s.endAngle) / 2,
					i = Math.cos(e),
					n = Math.sin(e),
					o = s.innerRadius,
					r = s.outerRadius
				return ba(
					{
						x0: s.x + i * o,
						y0: s.y + n * o,
						x1: s.x + i * r,
						y1: s.y + n * r,
						vx: i,
						vy: n,
					},
					t
				)
			},
			point: function (s, t) {
				var e = nh(s, t.origin),
					i = e.x * s.options.radius,
					n = e.y * s.options.radius
				return ba(
					{
						x0: s.x - i,
						y0: s.y - n,
						x1: s.x + i,
						y1: s.y + n,
						vx: e.x,
						vy: e.y,
					},
					t
				)
			},
			bar: function (s, t) {
				var e = nh(s, t.origin),
					i = s.x,
					n = s.y,
					o = 0,
					r = 0
				return (
					s.horizontal
						? ((i = Math.min(s.x, s.base)), (o = Math.abs(s.base - s.x)))
						: ((n = Math.min(s.y, s.base)), (r = Math.abs(s.base - s.y))),
					ba({ x0: i, y0: n + r, x1: i + o, y1: n, vx: e.x, vy: e.y }, t)
				)
			},
			fallback: function (s, t) {
				var e = nh(s, t.origin)
				return ba(
					{
						x0: s.x,
						y0: s.y,
						x1: s.x + (s.width || 0),
						y1: s.y + (s.height || 0),
						vx: e.x,
						vy: e.y,
					},
					t
				)
			},
		},
		Re = io.rasterize
	function ZM(s) {
		var t = s.borderWidth || 0,
			e = s.padding,
			i = s.size.height,
			n = s.size.width,
			o = -n / 2,
			r = -i / 2
		return {
			frame: {
				x: o - e.left - t,
				y: r - e.top - t,
				w: n + e.width + t * 2,
				h: i + e.height + t * 2,
			},
			text: { x: o, y: r, w: n, h: i },
		}
	}
	function QM(s, t) {
		var e = t.chart.getDatasetMeta(t.datasetIndex).vScale
		if (!e) return null
		if (e.xCenter !== void 0 && e.yCenter !== void 0)
			return { x: e.xCenter, y: e.yCenter }
		var i = e.getBasePixel()
		return s.horizontal ? { x: i, y: null } : { x: null, y: i }
	}
	function JM(s) {
		return s instanceof Ds
			? va.arc
			: s instanceof Ms
			? va.point
			: s instanceof Ls
			? va.bar
			: va.fallback
	}
	function tL(s, t, e, i, n, o) {
		var r = Math.PI / 2
		if (o) {
			var a = Math.min(o, n / 2, i / 2),
				l = t + a,
				c = e + a,
				h = t + i - a,
				d = e + n - a
			s.moveTo(t, c),
				l < h && c < d
					? (s.arc(l, c, a, -Math.PI, -r),
					  s.arc(h, c, a, -r, 0),
					  s.arc(h, d, a, 0, r),
					  s.arc(l, d, a, r, Math.PI))
					: l < h
					? (s.moveTo(l, e),
					  s.arc(h, c, a, -r, r),
					  s.arc(l, c, a, r, Math.PI + r))
					: c < d
					? (s.arc(l, c, a, -Math.PI, 0), s.arc(l, d, a, 0, Math.PI))
					: s.arc(l, c, a, -Math.PI, Math.PI),
				s.closePath(),
				s.moveTo(t, e)
		} else s.rect(t, e, i, n)
	}
	function eL(s, t, e) {
		var i = e.backgroundColor,
			n = e.borderColor,
			o = e.borderWidth
		;(!i && (!n || !o)) ||
			(s.beginPath(),
			tL(
				s,
				Re(t.x) + o / 2,
				Re(t.y) + o / 2,
				Re(t.w) - o,
				Re(t.h) - o,
				e.borderRadius
			),
			s.closePath(),
			i && ((s.fillStyle = i), s.fill()),
			n &&
				o &&
				((s.strokeStyle = n),
				(s.lineWidth = o),
				(s.lineJoin = 'miter'),
				s.stroke()))
	}
	function iL(s, t, e) {
		var i = e.lineHeight,
			n = s.w,
			o = s.x,
			r = s.y + i / 2
		return (
			t === 'center'
				? (o += n / 2)
				: (t === 'end' || t === 'right') && (o += n),
			{ h: i, w: n, x: o, y: r }
		)
	}
	function sL(s, t, e) {
		var i = s.shadowBlur,
			n = e.stroked,
			o = Re(e.x),
			r = Re(e.y),
			a = Re(e.w)
		n && s.strokeText(t, o, r, a),
			e.filled &&
				(i && n && (s.shadowBlur = 0),
				s.fillText(t, o, r, a),
				i && n && (s.shadowBlur = i))
	}
	function nL(s, t, e, i) {
		var n = i.textAlign,
			o = i.color,
			r = !!o,
			a = i.font,
			l = t.length,
			c = i.textStrokeColor,
			h = i.textStrokeWidth,
			d = c && h,
			u
		if (!(!l || (!r && !d)))
			for (
				e = iL(e, n, a),
					s.font = a.string,
					s.textAlign = n,
					s.textBaseline = 'middle',
					s.shadowBlur = i.textShadowBlur,
					s.shadowColor = i.textShadowColor,
					r && (s.fillStyle = o),
					d && ((s.lineJoin = 'round'), (s.lineWidth = h), (s.strokeStyle = c)),
					u = 0,
					l = t.length;
				u < l;
				++u
			)
				sL(s, t[u], { stroked: d, filled: r, w: e.w, x: e.x, y: e.y + e.h * u })
	}
	var Kg = function (s, t, e, i) {
		var n = this
		;(n._config = s),
			(n._index = i),
			(n._model = null),
			(n._rects = null),
			(n._ctx = t),
			(n._el = e)
	}
	Te(Kg.prototype, {
		_modelize: function (s, t, e, i) {
			var n = this,
				o = n._index,
				r = lt(tt([e.font, {}], i, o)),
				a = tt([e.color, F.color], i, o)
			return {
				align: tt([e.align, 'center'], i, o),
				anchor: tt([e.anchor, 'center'], i, o),
				area: i.chart.chartArea,
				backgroundColor: tt([e.backgroundColor, null], i, o),
				borderColor: tt([e.borderColor, null], i, o),
				borderRadius: tt([e.borderRadius, 0], i, o),
				borderWidth: tt([e.borderWidth, 0], i, o),
				clamp: tt([e.clamp, !1], i, o),
				clip: tt([e.clip, !1], i, o),
				color: a,
				display: s,
				font: r,
				lines: t,
				offset: tt([e.offset, 4], i, o),
				opacity: tt([e.opacity, 1], i, o),
				origin: QM(n._el, i),
				padding: pt(tt([e.padding, 4], i, o)),
				positioner: JM(n._el),
				rotation: tt([e.rotation, 0], i, o) * (Math.PI / 180),
				size: io.textSize(n._ctx, t, r),
				textAlign: tt([e.textAlign, 'start'], i, o),
				textShadowBlur: tt([e.textShadowBlur, 0], i, o),
				textShadowColor: tt([e.textShadowColor, a], i, o),
				textStrokeColor: tt([e.textStrokeColor, a], i, o),
				textStrokeWidth: tt([e.textStrokeWidth, 0], i, o),
			}
		},
		update: function (s) {
			var t = this,
				e = null,
				i = null,
				n = t._index,
				o = t._config,
				r,
				a,
				l,
				c = tt([o.display, !0], s, n)
			c &&
				((r = s.dataset.data[n]),
				(a = B(G(o.formatter, [r, s]), r)),
				(l = H(a) ? [] : io.toTextLines(a)),
				l.length && ((e = t._modelize(c, l, o, s)), (i = ZM(e)))),
				(t._model = e),
				(t._rects = i)
		},
		geometry: function () {
			return this._rects ? this._rects.frame : {}
		},
		rotation: function () {
			return this._model ? this._model.rotation : 0
		},
		visible: function () {
			return this._model && this._model.opacity
		},
		model: function () {
			return this._model
		},
		draw: function (s, t) {
			var e = this,
				i = s.ctx,
				n = e._model,
				o = e._rects,
				r
			this.visible() &&
				(i.save(),
				n.clip &&
					((r = n.area),
					i.beginPath(),
					i.rect(r.left, r.top, r.right - r.left, r.bottom - r.top),
					i.clip()),
				(i.globalAlpha = io.bound(0, n.opacity, 1)),
				i.translate(Re(t.x), Re(t.y)),
				i.rotate(n.rotation),
				eL(i, o.frame, n),
				nL(i, n.lines, o.text, n),
				i.restore())
		},
	})
	var oL = Number.MIN_SAFE_INTEGER || -9007199254740991,
		rL = Number.MAX_SAFE_INTEGER || 9007199254740991
	function so(s, t, e) {
		var i = Math.cos(e),
			n = Math.sin(e),
			o = t.x,
			r = t.y
		return {
			x: o + i * (s.x - o) - n * (s.y - r),
			y: r + n * (s.x - o) + i * (s.y - r),
		}
	}
	function Ug(s, t) {
		var e = rL,
			i = oL,
			n = t.origin,
			o,
			r,
			a,
			l,
			c
		for (o = 0; o < s.length; ++o)
			(r = s[o]),
				(a = r.x - n.x),
				(l = r.y - n.y),
				(c = t.vx * a + t.vy * l),
				(e = Math.min(e, c)),
				(i = Math.max(i, c))
		return { min: e, max: i }
	}
	function ya(s, t) {
		var e = t.x - s.x,
			i = t.y - s.y,
			n = Math.sqrt(e * e + i * i)
		return { vx: (t.x - s.x) / n, vy: (t.y - s.y) / n, origin: s, ln: n }
	}
	var Xg = function () {
		;(this._rotation = 0), (this._rect = { x: 0, y: 0, w: 0, h: 0 })
	}
	Te(Xg.prototype, {
		center: function () {
			var s = this._rect
			return { x: s.x + s.w / 2, y: s.y + s.h / 2 }
		},
		update: function (s, t, e) {
			;(this._rotation = e),
				(this._rect = { x: t.x + s.x, y: t.y + s.y, w: t.w, h: t.h })
		},
		contains: function (s) {
			var t = this,
				e = 1,
				i = t._rect
			return (
				(s = so(s, t.center(), -t._rotation)),
				!(
					s.x < i.x - e ||
					s.y < i.y - e ||
					s.x > i.x + i.w + e * 2 ||
					s.y > i.y + i.h + e * 2
				)
			)
		},
		intersects: function (s) {
			var t = this._points(),
				e = s._points(),
				i = [ya(t[0], t[1]), ya(t[0], t[3])],
				n,
				o,
				r
			for (
				this._rotation !== s._rotation &&
					i.push(ya(e[0], e[1]), ya(e[0], e[3])),
					n = 0;
				n < i.length;
				++n
			)
				if (
					((o = Ug(t, i[n])), (r = Ug(e, i[n])), o.max < r.min || r.max < o.min)
				)
					return !1
			return !0
		},
		_points: function () {
			var s = this,
				t = s._rect,
				e = s._rotation,
				i = s.center()
			return [
				so({ x: t.x, y: t.y }, i, e),
				so({ x: t.x + t.w, y: t.y }, i, e),
				so({ x: t.x + t.w, y: t.y + t.h }, i, e),
				so({ x: t.x, y: t.y + t.h }, i, e),
			]
		},
	})
	function Gg(s, t, e) {
		var i = t.positioner(s, t),
			n = i.vx,
			o = i.vy
		if (!n && !o) return { x: i.x, y: i.y }
		var r = e.w,
			a = e.h,
			l = t.rotation,
			c = Math.abs((r / 2) * Math.cos(l)) + Math.abs((a / 2) * Math.sin(l)),
			h = Math.abs((r / 2) * Math.sin(l)) + Math.abs((a / 2) * Math.cos(l)),
			d = 1 / Math.max(Math.abs(n), Math.abs(o))
		return (
			(c *= n * d),
			(h *= o * d),
			(c += t.offset * n),
			(h += t.offset * o),
			{ x: i.x + c, y: i.y + h }
		)
	}
	function aL(s, t) {
		var e, i, n, o
		for (e = s.length - 1; e >= 0; --e)
			for (n = s[e].$layout, i = e - 1; i >= 0 && n._visible; --i)
				(o = s[i].$layout), o._visible && n._box.intersects(o._box) && t(n, o)
		return s
	}
	function lL(s) {
		var t, e, i, n, o, r, a
		for (t = 0, e = s.length; t < e; ++t)
			(i = s[t]),
				(n = i.$layout),
				n._visible &&
					((a = new Proxy(i._el, { get: (l, c) => l.getProps([c], !0)[c] })),
					(o = i.geometry()),
					(r = Gg(a, i.model(), o)),
					n._box.update(r, o, i.rotation()))
		return aL(s, function (l, c) {
			var h = l._hidable,
				d = c._hidable
			;(h && d) || d ? (c._visible = !1) : h && (l._visible = !1)
		})
	}
	var no = {
			prepare: function (s) {
				var t = [],
					e,
					i,
					n,
					o,
					r
				for (e = 0, n = s.length; e < n; ++e)
					for (i = 0, o = s[e].length; i < o; ++i)
						(r = s[e][i]),
							t.push(r),
							(r.$layout = {
								_box: new Xg(),
								_hidable: !1,
								_visible: !0,
								_set: e,
								_idx: r._index,
							})
				return (
					t.sort(function (a, l) {
						var c = a.$layout,
							h = l.$layout
						return c._idx === h._idx ? h._set - c._set : h._idx - c._idx
					}),
					this.update(t),
					t
				)
			},
			update: function (s) {
				var t = !1,
					e,
					i,
					n,
					o,
					r
				for (e = 0, i = s.length; e < i; ++e)
					(n = s[e]),
						(o = n.model()),
						(r = n.$layout),
						(r._hidable = o && o.display === 'auto'),
						(r._visible = n.visible()),
						(t |= r._hidable)
				t && lL(s)
			},
			lookup: function (s, t) {
				var e, i
				for (e = s.length - 1; e >= 0; --e)
					if (((i = s[e].$layout), i && i._visible && i._box.contains(t)))
						return s[e]
				return null
			},
			draw: function (s, t) {
				var e, i, n, o, r, a
				for (e = 0, i = t.length; e < i; ++e)
					(n = t[e]),
						(o = n.$layout),
						o._visible &&
							((r = n.geometry()),
							(a = Gg(n._el, n.model(), r)),
							o._box.update(a, r, n.rotation()),
							n.draw(s, a))
			},
		},
		cL = function (s) {
			if (H(s)) return null
			var t = s,
				e,
				i,
				n
			if (V(s))
				if (!H(s.label)) t = s.label
				else if (!H(s.r)) t = s.r
				else
					for (t = '', e = Object.keys(s), n = 0, i = e.length; n < i; ++n)
						t += (n !== 0 ? ', ' : '') + e[n] + ': ' + s[e[n]]
			return '' + t
		},
		hL = {
			align: 'center',
			anchor: 'center',
			backgroundColor: null,
			borderColor: null,
			borderRadius: 0,
			borderWidth: 0,
			clamp: !1,
			clip: !1,
			color: void 0,
			display: !0,
			font: {
				family: void 0,
				lineHeight: 1.2,
				size: void 0,
				style: void 0,
				weight: null,
			},
			formatter: cL,
			labels: void 0,
			listeners: {},
			offset: 4,
			opacity: 1,
			padding: { top: 4, right: 4, bottom: 4, left: 4 },
			rotation: 0,
			textAlign: 'start',
			textStrokeColor: void 0,
			textStrokeWidth: 0,
			textShadowBlur: 0,
			textShadowColor: void 0,
		},
		Dt = '$datalabels',
		qg = '$default'
	function dL(s, t) {
		var e = s.datalabels,
			i = {},
			n = [],
			o,
			r
		return e === !1
			? null
			: (e === !0 && (e = {}),
			  (t = Te({}, [t, e])),
			  (o = t.labels || {}),
			  (r = Object.keys(o)),
			  delete t.labels,
			  r.length
					? r.forEach(function (a) {
							o[a] && n.push(Te({}, [t, o[a], { _key: a }]))
					  })
					: n.push(t),
			  (i = n.reduce(function (a, l) {
					return (
						U(l.listeners || {}, function (c, h) {
							;(a[h] = a[h] || {}), (a[h][l._key || qg] = c)
						}),
						delete l.listeners,
						a
					)
			  }, {})),
			  { labels: n, listeners: i })
	}
	function oh(s, t, e, i) {
		if (t) {
			var n = e.$context,
				o = e.$groups,
				r
			t[o._set] &&
				((r = t[o._set][o._key]),
				r && G(r, [n, i]) === !0 && ((s[Dt]._dirty = !0), e.update(n)))
		}
	}
	function uL(s, t, e, i, n) {
		var o, r
		;(!e && !i) ||
			(e ? (i ? e !== i && (r = o = !0) : (r = !0)) : (o = !0),
			r && oh(s, t.leave, e, n),
			o && oh(s, t.enter, i, n))
	}
	function pL(s, t) {
		var e = s[Dt],
			i = e._listeners,
			n,
			o
		if (!(!i.enter && !i.leave)) {
			if (t.type === 'mousemove') o = no.lookup(e._labels, t)
			else if (t.type !== 'mouseout') return
			;(n = e._hovered), (e._hovered = o), uL(s, i, n, o, t)
		}
	}
	function fL(s, t) {
		var e = s[Dt],
			i = e._listeners.click,
			n = i && no.lookup(e._labels, t)
		n && oh(s, i, n, t)
	}
	var _L = {
		id: 'datalabels',
		defaults: hL,
		beforeInit: function (s) {
			s[Dt] = { _actives: [] }
		},
		beforeUpdate: function (s) {
			var t = s[Dt]
			;(t._listened = !1),
				(t._listeners = {}),
				(t._datasets = []),
				(t._labels = [])
		},
		afterDatasetUpdate: function (s, t, e) {
			var i = t.index,
				n = s[Dt],
				o = (n._datasets[i] = []),
				r = s.isDatasetVisible(i),
				a = s.data.datasets[i],
				l = dL(a, e),
				c = t.meta.data || [],
				h = s.ctx,
				d,
				u,
				p,
				f,
				b,
				v,
				y,
				T
			for (h.save(), d = 0, p = c.length; d < p; ++d)
				if (
					((y = c[d]),
					(y[Dt] = []),
					r && y && s.getDataVisibility(d) && !y.skip)
				)
					for (u = 0, f = l.labels.length; u < f; ++u)
						(b = l.labels[u]),
							(v = b._key),
							(T = new Kg(b, h, y, d)),
							(T.$groups = { _set: i, _key: v || qg }),
							(T.$context = {
								active: !1,
								chart: s,
								dataIndex: d,
								dataset: a,
								datasetIndex: i,
							}),
							T.update(T.$context),
							y[Dt].push(T),
							o.push(T)
			h.restore(),
				Te(n._listeners, l.listeners, {
					merger: function (x, E, C) {
						;(E[x] = E[x] || {}), (E[x][t.index] = C[x]), (n._listened = !0)
					},
				})
		},
		afterUpdate: function (s) {
			s[Dt]._labels = no.prepare(s[Dt]._datasets)
		},
		afterDatasetsDraw: function (s) {
			no.draw(s, s[Dt]._labels)
		},
		beforeEvent: function (s, t) {
			if (s[Dt]._listened) {
				var e = t.event
				switch (e.type) {
					case 'mousemove':
					case 'mouseout':
						pL(s, e)
						break
					case 'click':
						fL(s, e)
						break
				}
			}
		},
		afterEvent: function (s) {
			var t = s[Dt],
				e = t._actives,
				i = (t._actives = s.getActiveElements()),
				n = io.arrayDiff(e, i),
				o,
				r,
				a,
				l,
				c,
				h,
				d
			for (o = 0, r = n.length; o < r; ++o)
				if (((c = n[o]), c[1]))
					for (d = c[0].element[Dt] || [], a = 0, l = d.length; a < l; ++a)
						(h = d[a]), (h.$context.active = c[1] === 1), h.update(h.$context)
			;(t._dirty || n.length) && (no.update(t._labels), s.render()),
				delete t._dirty
		},
	}
	const gL = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: _L },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	)
	;(N.Alert = Ws),
		(N.Animate = Gs),
		(N.Autocomplete = Pr),
		(N.Button = ao),
		(N.Carousel = he),
		(N.Chart = yp),
		(N.Chip = ki),
		(N.ChipsInput = gp),
		(N.Clipboard = Ar),
		(N.Collapse = ce),
		(N.Datatable = pr),
		(N.Datepicker = xl),
		(N.Datetimepicker = Dr),
		(N.Dropdown = Ft),
		(N.InfiniteScroll = kr),
		(N.Input = Z),
		(N.LazyLoad = yn),
		(N.Lightbox = ys),
		(N.LoadingManagement = Or),
		(N.Modal = Ys),
		(N.MultiRangeSlider = Hr),
		(N.Offcanvas = ts),
		(N.PerfectScrollbar = ms),
		(N.Popconfirm = _r),
		(N.Popover = Eo),
		(N.Rating = Bp),
		(N.Ripple = Ye),
		(N.ScrollSpy = xo),
		(N.Select = on),
		(N.Sidenav = Ii),
		(N.SmoothScroll = xr),
		(N.Stepper = Wu),
		(N.Sticky = Lr),
		(N.Tab = wo),
		(N.Timepicker = Ll),
		(N.Toast = Xs),
		(N.Tooltip = is),
		(N.Touch = Er),
		(N.Validation = Tr),
		(N.initTE = ff),
		Object.defineProperty(N, Symbol.toStringTag, { value: 'Module' })
})
//# sourceMappingURL=tw-elements.umd.min.js.map
