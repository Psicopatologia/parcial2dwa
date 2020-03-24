/**
 * @param  {string} tagName HTML tag
 * @param  {Object} attributes HTML attributes
 * @param  {Array} children HTML child elements
 * @return {HTMLElement} instance of HTMLElement
 * @example
 *
 * const el = createElement('span', { class: 'text' }, ['Hi createElement'])
 * console.log(el)
 * // => <span class="text">Hi createElement</span>
 */
export default function createElement (tagName, attributes, children) {
  if (typeof (tagName) !== 'string') throw new Error('tagName must be an string')

  const el = document.createElement(tagName)

  if (attributes) {
    if (Object.prototype.toString.call(attributes) !== '[object Object]') { throw new Error('attributes must be an object') }

    Object.keys(attributes).forEach(attr => {
      el.setAttribute(attr, attributes[attr])
    })
  }

  if (!Array.isArray(children)) throw new Error('children must be an array')

  addchild(el, children)

  return el
}

export function addchild (parent, children) {
  if (!Array.isArray(children)) throw new Error('children must be an array')

  if (!(parent instanceof window.HTMLElement)) throw new Error('parent must be an instance of HTMLElement')

  children.forEach(child => {
    if (child instanceof window.HTMLElement) {
      parent.appendChild(child)
    } else {
      parent.innerHTML += child // parent.innerHTML = parent.innerHTML + child
    }
  })
}
